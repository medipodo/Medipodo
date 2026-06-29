from fastapi import FastAPI, APIRouter, File, Form, HTTPException, UploadFile
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import uuid
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
from datetime import datetime, timezone

from supabase_service import (
    BUCKET_NAME,
    TABLE_NAME,
    insert_assessment,
    is_supported_image,
    upload_image,
)


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)

    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()

    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)

    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])

    return status_checks


# ---------------------------------------------------------------------------
# Ücretsiz Ön Değerlendirme — form submission
# ---------------------------------------------------------------------------

MAX_IMAGES = 5
MAX_IMAGE_BYTES = 8 * 1024 * 1024  # 8 MB per image
ALLOWED_FOOT = {"Sol", "Sağ", "Her İkisi"}


def _split_csv(value: Optional[str]) -> list[str]:
    if not value:
        return []
    return [v.strip() for v in value.split(",") if v.strip()]


@api_router.post("/assessment-requests")
async def create_assessment_request(
    phone: str = Form(...),
    complaint: str = Form(...),
    foot: str = Form(...),
    kvkk_accepted: bool = Form(...),
    full_name: Optional[str] = Form(None),
    age: Optional[int] = Form(None),
    gender: Optional[str] = Form(None),
    medications: Optional[str] = Form(None),
    pain_level: Optional[int] = Form(None),
    chronic_conditions: Optional[str] = Form(None),  # comma-separated
    problem_areas: Optional[str] = Form(None),  # comma-separated
    images: List[UploadFile] = File(default_factory=list),
):
    # Basic validation
    if not phone.strip():
        raise HTTPException(status_code=400, detail="Telefon zorunludur.")
    if not complaint.strip():
        raise HTTPException(status_code=400, detail="Şikayet zorunludur.")
    if foot not in ALLOWED_FOOT:
        raise HTTPException(status_code=400, detail="Geçersiz 'foot' değeri.")
    if not kvkk_accepted:
        raise HTTPException(status_code=400, detail="KVKK onayı zorunludur.")
    if pain_level is not None and not (0 <= pain_level <= 10):
        raise HTTPException(status_code=400, detail="Ağrı seviyesi 0-10 arasında olmalıdır.")
    if len(images) > MAX_IMAGES:
        raise HTTPException(status_code=400, detail=f"En fazla {MAX_IMAGES} fotoğraf yükleyebilirsiniz.")

    assessment_id = str(uuid.uuid4())

    # 1) Upload images to private storage bucket
    image_paths: list[str] = []
    for upload in images:
        if not is_supported_image(upload.content_type or "", upload.filename or ""):
            raise HTTPException(
                status_code=400,
                detail=f"Desteklenmeyen dosya türü: {upload.filename}",
            )
        contents = await upload.read()
        if len(contents) == 0:
            continue
        if len(contents) > MAX_IMAGE_BYTES:
            raise HTTPException(
                status_code=400,
                detail=f"Fotoğraf çok büyük (>{MAX_IMAGE_BYTES // (1024*1024)}MB): {upload.filename}",
            )
        try:
            path = upload_image(
                assessment_id=assessment_id,
                file_bytes=contents,
                content_type=upload.content_type or "image/jpeg",
                filename=upload.filename or "image.jpg",
            )
        except Exception as exc:  # noqa: BLE001
            logger.exception("Supabase storage upload failed")
            raise HTTPException(
                status_code=502,
                detail="Fotoğraf yüklenirken bir sorun oluştu. Lütfen tekrar deneyin.",
            ) from exc
        image_paths.append(path)

    # 2) Insert row into assessment_requests
    row = {
        "id": assessment_id,
        "full_name": (full_name or "").strip() or None,
        "phone": phone.strip(),
        "age": age,
        "gender": gender,
        "chronic_conditions": _split_csv(chronic_conditions),
        "medications": (medications or "").strip() or None,
        "complaint": complaint.strip(),
        "pain_level": pain_level,
        "problem_areas": _split_csv(problem_areas),
        "foot": foot,
        "kvkk_accepted": True,
        "image_paths": image_paths,
        "status": "pending",
    }
    try:
        record = insert_assessment(row)
    except Exception as exc:  # noqa: BLE001
        logger.exception("Supabase insert failed")
        raise HTTPException(
            status_code=502,
            detail="Başvurunuz kaydedilirken bir sorun oluştu. Lütfen tekrar deneyin.",
        ) from exc

    return {
        "ok": True,
        "id": record.get("id", assessment_id),
        "image_count": len(image_paths),
        "status": record.get("status", "pending"),
    }


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
