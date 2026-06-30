import io
import logging
import os
import re
import uuid
from datetime import datetime, timezone
from pathlib import Path
from typing import List, Optional

from dotenv import load_dotenv
from fastapi import APIRouter, FastAPI, File, Form, HTTPException, Request, UploadFile
from motor.motor_asyncio import AsyncIOMotorClient
from PIL import Image, UnidentifiedImageError
from pydantic import BaseModel, ConfigDict, Field
from slowapi import Limiter
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware
from slowapi.util import get_remote_address
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse

from supabase_service import (
    delete_images,
    insert_assessment,
    is_supported_image_hint,
    upload_image,
)

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

# ---------------------------------------------------------------------------
# Logging
# ---------------------------------------------------------------------------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Mongo (legacy — unrelated to assessment form)
# ---------------------------------------------------------------------------
mongo_url = os.environ["MONGO_URL"]
mongo_client = AsyncIOMotorClient(mongo_url)
db = mongo_client[os.environ["DB_NAME"]]

# ---------------------------------------------------------------------------
# App + rate limiter
# ---------------------------------------------------------------------------
def _client_ip(request: Request) -> str:
    # Trust X-Forwarded-For when behind a proxy (Cloudflare / ingress)
    xff = request.headers.get("x-forwarded-for", "")
    if xff:
        return xff.split(",")[0].strip()
    return get_remote_address(request)


limiter = Limiter(key_func=_client_ip, default_limits=[])
app = FastAPI()
app.state.limiter = limiter


@app.exception_handler(RateLimitExceeded)
async def _rate_limit_handler(_request: Request, _exc: RateLimitExceeded):
    return JSONResponse(
        status_code=429,
        content={"detail": "Çok fazla istek gönderildi. Lütfen birkaç dakika sonra tekrar deneyin."},
    )


api_router = APIRouter(prefix="/api")


# ---------------------------------------------------------------------------
# Legacy status routes
# ---------------------------------------------------------------------------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


@api_router.get("/")
async def root():
    return {"message": "Hello World"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(payload: StatusCheckCreate):
    obj = StatusCheck(**payload.model_dump())
    doc = obj.model_dump()
    doc["timestamp"] = doc["timestamp"].isoformat()
    await db.status_checks.insert_one(doc)
    return obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for r in rows:
        if isinstance(r["timestamp"], str):
            r["timestamp"] = datetime.fromisoformat(r["timestamp"])
    return rows


# ---------------------------------------------------------------------------
# Ücretsiz Ön Değerlendirme — submission endpoint
# ---------------------------------------------------------------------------
MAX_IMAGES = 5
MAX_IMAGE_BYTES = 8 * 1024 * 1024  # 8 MB per image
MAX_TOTAL_UPLOAD_BYTES = 40 * 1024 * 1024  # 40 MB combined
ALLOWED_FOOT = {"Sol", "Sağ", "Her İkisi"}
ALLOWED_STATUS = {"pending", "in_review", "contacted", "appointment_scheduled", "closed", "spam"}
PILLOW_FORMAT_WHITELIST = {"JPEG", "PNG", "WEBP"}

# Loose Turkish phone hint: starts optionally with +, then 6-15 digits after stripping.
_PHONE_DIGITS_RE = re.compile(r"[^\d+]")


def _normalize_phone(raw: str) -> str:
    cleaned = _PHONE_DIGITS_RE.sub("", raw or "").strip()
    # If user prefixes with + keep it once at the front
    if cleaned.startswith("+"):
        cleaned = "+" + cleaned[1:].replace("+", "")
    else:
        cleaned = cleaned.replace("+", "")
    return cleaned


def _split_csv(value: Optional[str], *, max_items: int = 50, max_len: int = 80) -> list[str]:
    if not value:
        return []
    out: list[str] = []
    seen: set[str] = set()
    for raw in value.split(","):
        v = raw.strip()
        if not v or v in seen:
            continue
        if len(v) > max_len:
            v = v[:max_len]
        out.append(v)
        seen.add(v)
        if len(out) >= max_items:
            break
    return out


def _validate_image_bytes(content: bytes) -> str:
    """Return canonical Pillow format ('JPEG'/'PNG'/'WEBP') or raise."""
    try:
        with Image.open(io.BytesIO(content)) as img:
            img.verify()
        # Re-open to read .format (verify() leaves the image in unusable state)
        with Image.open(io.BytesIO(content)) as img2:
            fmt = (img2.format or "").upper()
    except (UnidentifiedImageError, OSError, ValueError) as exc:
        raise HTTPException(
            status_code=400,
            detail="Fotoğraflardan biri geçerli bir görsel değil. Lütfen JPG, PNG veya WEBP yükleyin.",
        ) from exc
    if fmt not in PILLOW_FORMAT_WHITELIST:
        raise HTTPException(
            status_code=400,
            detail=f"Desteklenmeyen görsel formatı: {fmt or 'bilinmiyor'}.",
        )
    return fmt


@api_router.post("/assessment-requests")
@limiter.limit("10/minute;30/hour")
async def create_assessment_request(
    request: Request,
    phone: str = Form(..., max_length=30),
    complaint: str = Form(..., max_length=4000),
    foot: str = Form(...),
    kvkk_accepted: bool = Form(...),
    full_name: Optional[str] = Form(None, max_length=120),
    age: Optional[int] = Form(None),
    gender: Optional[str] = Form(None, max_length=40),
    medications: Optional[str] = Form(None, max_length=2000),
    pain_level: Optional[int] = Form(None),
    chronic_conditions: Optional[str] = Form(None, max_length=2000),
    problem_areas: Optional[str] = Form(None, max_length=2000),
    images: List[UploadFile] = File(default_factory=list),
):
    # ----- field validation -----------------------------------------------
    phone_norm = _normalize_phone(phone)
    if not (6 <= len(phone_norm) <= 20):
        raise HTTPException(status_code=400, detail="Geçerli bir telefon numarası giriniz.")
    if not complaint.strip():
        raise HTTPException(status_code=400, detail="Şikayet zorunludur.")
    if len(complaint.strip()) < 3:
        raise HTTPException(status_code=400, detail="Şikayet en az 3 karakter olmalıdır.")
    if foot not in ALLOWED_FOOT:
        raise HTTPException(status_code=400, detail="Geçersiz 'foot' değeri.")
    if not kvkk_accepted:
        raise HTTPException(status_code=400, detail="KVKK onayı zorunludur.")
    if pain_level is not None and not (0 <= pain_level <= 10):
        raise HTTPException(status_code=400, detail="Ağrı seviyesi 0-10 arasında olmalıdır.")
    if age is not None and not (1 <= age <= 120):
        raise HTTPException(status_code=400, detail="Yaş 1-120 arasında olmalıdır.")
    if len(images) > MAX_IMAGES:
        raise HTTPException(
            status_code=400,
            detail=f"En fazla {MAX_IMAGES} fotoğraf yükleyebilirsiniz.",
        )

    # ----- read + validate all images BEFORE any upload -------------------
    payloads: list[tuple[bytes, str, str]] = []  # (bytes, content_type, filename)
    total_bytes = 0
    for upload in images:
        filename = upload.filename or "image"
        content_type = (upload.content_type or "").lower()

        if not is_supported_image_hint(content_type, filename):
            raise HTTPException(
                status_code=400,
                detail=f"Desteklenmeyen dosya türü: {filename}",
            )

        contents = await upload.read()
        if len(contents) == 0:
            continue  # silently skip empty file slots
        if len(contents) > MAX_IMAGE_BYTES:
            raise HTTPException(
                status_code=400,
                detail=f"Fotoğraf çok büyük (maks. {MAX_IMAGE_BYTES // (1024 * 1024)}MB): {filename}",
            )
        total_bytes += len(contents)
        if total_bytes > MAX_TOTAL_UPLOAD_BYTES:
            raise HTTPException(
                status_code=400,
                detail=f"Toplam fotoğraf boyutu çok yüksek (maks. {MAX_TOTAL_UPLOAD_BYTES // (1024 * 1024)}MB).",
            )

        # Magic-byte validation — defends against arbitrary file uploads
        _validate_image_bytes(contents)
        payloads.append((contents, content_type or "image/jpeg", filename))

    assessment_id = str(uuid.uuid4())

    # ----- 1) upload images (with rollback) -------------------------------
    uploaded_paths: list[str] = []
    try:
        for content, content_type, filename in payloads:
            path = upload_image(
                assessment_id=assessment_id,
                file_bytes=content,
                content_type=content_type,
                filename=filename,
            )
            uploaded_paths.append(path)
    except Exception as exc:  # noqa: BLE001
        logger.exception("Storage upload failed; rolling back %d objects", len(uploaded_paths))
        delete_images(uploaded_paths)
        raise HTTPException(
            status_code=502,
            detail="Fotoğraf yüklenirken bir sorun oluştu. Lütfen tekrar deneyin.",
        ) from exc

    # ----- 2) insert row (with rollback of uploaded images on failure) ----
    row = {
        "id": assessment_id,
        "full_name": (full_name or "").strip() or None,
        "phone": phone_norm,
        "age": age,
        "gender": (gender or "").strip() or None,
        "chronic_conditions": _split_csv(chronic_conditions),
        "medications": (medications or "").strip() or None,
        "complaint": complaint.strip(),
        "pain_level": pain_level,
        "problem_areas": _split_csv(problem_areas),
        "foot": foot,
        "kvkk_accepted": True,
        "image_paths": uploaded_paths,
        "status": "pending",
        "submission_ip": _client_ip(request)[:64],
        "user_agent": (request.headers.get("user-agent") or "")[:512] or None,
    }
    try:
        record = insert_assessment(row)
    except Exception as exc:  # noqa: BLE001
        logger.exception("Supabase insert failed; rolling back %d uploaded images", len(uploaded_paths))
        delete_images(uploaded_paths)
        raise HTTPException(
            status_code=502,
            detail="Başvurunuz kaydedilirken bir sorun oluştu. Lütfen tekrar deneyin.",
        ) from exc

    logger.info(
        "Assessment %s created (images=%d, ip=%s)",
        record.get("id", assessment_id),
        len(uploaded_paths),
        row["submission_ip"],
    )

    return {
        "ok": True,
        "id": record.get("id", assessment_id),
        "image_count": len(uploaded_paths),
        "status": record.get("status", "pending"),
    }


# ---------------------------------------------------------------------------
# CRM endpoints — list / get / update (no auth in this iteration)
# ---------------------------------------------------------------------------
from supabase_service import (  # noqa: E402  (deferred — module already imported above)
    create_signed_urls,
    get_assessment,
    list_assessments,
    update_assessment,
)

CRM_ALLOWED_STATUS = ALLOWED_STATUS
CRM_UPDATABLE_FIELDS = {
    "status",
    "internal_notes",
    "reviewed_by",
    "reviewed_at",
    "appointment_date",
    "appointment_created",
}


class CRMUpdate(BaseModel):
    """Partial-update payload for an assessment record."""

    model_config = ConfigDict(extra="forbid")

    status: Optional[str] = None
    internal_notes: Optional[str] = None
    reviewed_by: Optional[str] = None
    reviewed_at: Optional[datetime] = None
    appointment_date: Optional[datetime] = None
    appointment_created: Optional[bool] = None


def _public_row(row: dict) -> dict:
    """Strip nothing — CRM sees the full record. Kept as a hook for the future."""
    return row


@api_router.get("/crm/assessment-requests")
async def crm_list_requests(
    status: List[str] = [],  # noqa: B006 — FastAPI uses query repetition
    q: Optional[str] = None,
    limit: int = 100,
    offset: int = 0,
):
    statuses = [s for s in status if s in CRM_ALLOWED_STATUS]
    if status and not statuses:
        raise HTTPException(status_code=400, detail="Geçersiz status filtresi.")
    limit = max(1, min(limit, 200))
    offset = max(0, offset)
    try:
        rows = list_assessments(statuses=statuses or None, q=q, limit=limit, offset=offset)
    except Exception as exc:  # noqa: BLE001
        logger.exception("CRM list failed")
        raise HTTPException(status_code=502, detail="Veriler alınamadı.") from exc
    return {"items": [_public_row(r) for r in rows], "count": len(rows)}


@api_router.get("/crm/assessment-requests/{record_id}")
async def crm_get_request(record_id: str):
    try:
        row = get_assessment(record_id)
    except Exception as exc:  # noqa: BLE001
        logger.exception("CRM get failed")
        raise HTTPException(status_code=502, detail="Kayıt alınamadı.") from exc
    if not row:
        raise HTTPException(status_code=404, detail="Kayıt bulunamadı.")

    image_paths = row.get("image_paths") or []
    images = create_signed_urls(image_paths, expires_in=3600) if image_paths else []

    return {**_public_row(row), "images": images}


@api_router.patch("/crm/assessment-requests/{record_id}")
async def crm_update_request(record_id: str, payload: CRMUpdate):
    data = payload.model_dump(exclude_unset=True)
    if not data:
        raise HTTPException(status_code=400, detail="Güncellenecek alan yok.")

    # Whitelist (model already enforces but be explicit)
    data = {k: v for k, v in data.items() if k in CRM_UPDATABLE_FIELDS}
    if not data:
        raise HTTPException(status_code=400, detail="Güncellenebilir alan yok.")

    if "status" in data and data["status"] not in CRM_ALLOWED_STATUS:
        raise HTTPException(status_code=400, detail="Geçersiz status değeri.")

    if "internal_notes" in data and data["internal_notes"] is not None:
        if len(data["internal_notes"]) > 8000:
            raise HTTPException(status_code=400, detail="İç notlar çok uzun (>8000).")

    if "reviewed_by" in data and data["reviewed_by"]:
        if len(data["reviewed_by"]) > 120:
            raise HTTPException(status_code=400, detail="reviewed_by çok uzun (>120).")

    # Auto-fill reviewed_at when status moves to in_review / contacted and not set
    if data.get("status") in {"in_review", "contacted"} and "reviewed_at" not in data:
        data["reviewed_at"] = datetime.now(timezone.utc).isoformat()
    # Auto-fill appointment_created when appointment_date provided
    if data.get("appointment_date") and "appointment_created" not in data:
        data["appointment_created"] = True

    # Convert datetimes to ISO strings for PostgREST
    for k in ("reviewed_at", "appointment_date"):
        if k in data and isinstance(data[k], datetime):
            data[k] = data[k].isoformat()

    try:
        updated = update_assessment(record_id, data)
    except Exception as exc:  # noqa: BLE001
        logger.exception("CRM update failed")
        raise HTTPException(status_code=502, detail="Güncelleme başarısız.") from exc
    if not updated:
        raise HTTPException(status_code=404, detail="Kayıt bulunamadı.")
    return _public_row(updated)


# ---------------------------------------------------------------------------
# App wiring
# ---------------------------------------------------------------------------
app.include_router(api_router)
app.add_middleware(SlowAPIMiddleware)
app.add_middleware(
    CORSMiddleware,
    allow_credentials=False,  # public form; no cookies
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    mongo_client.close()
