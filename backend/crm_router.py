"""
Medipodo CRM router — isolated from the public form endpoint.

ALL admin-facing routes live here, under the `/api/crm` prefix. Two things flow
from that:

1. **Reverse-proxy protection is trivial.** You guard one path prefix
   (`/api/crm`) and the same rule covers every present and future CRM endpoint.
   See `CRM_PROTECTION.md` for ready-to-paste Nginx / Caddy / Cloudflare
   Zero Trust configs.

2. **In-app auth, if you later choose it, is a one-line change.** Every
   endpoint already depends on `require_admin`. Today that dependency is a
   no-op so the CRM stays open during development. Tomorrow, replace the body
   of `require_admin` with the check of your choice (shared header, Supabase
   JWT, signed cookie, etc.) and every endpoint is protected — no other code
   needs to change.
"""
from __future__ import annotations

import logging
from datetime import datetime, timezone
from typing import List, Optional

from fastapi import APIRouter, Depends, HTTPException, Request
from pydantic import BaseModel, ConfigDict

from supabase_service import (
    create_signed_urls,
    get_assessment,
    list_assessments,
    update_assessment,
)

logger = logging.getLogger("medipodo.crm")

# ---------------------------------------------------------------------------
# Auth seam — intentionally a no-op today
# ---------------------------------------------------------------------------

def require_admin(_request: Request) -> None:
    """
    Authentication seam for the CRM.

    Currently a no-op: the CRM is exposed openly inside the trust boundary and
    protected at the edge (reverse proxy / VPN / IP allow-list). See
    `CRM_PROTECTION.md` for proxy configs.

    To switch to in-app auth later, replace the body of this function with a
    single check, e.g.:

        token = request.headers.get("authorization", "").removeprefix("Bearer ")
        if not is_valid_admin_token(token):
            raise HTTPException(status_code=401, detail="Unauthorized")

    Every CRM endpoint already depends on this function via `Depends`, so no
    route handler signatures need to change.
    """
    return None


# ---------------------------------------------------------------------------
# Constants & schemas
# ---------------------------------------------------------------------------
CRM_ALLOWED_STATUS = {"pending", "in_review", "contacted", "appointment_scheduled", "closed", "spam"}
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
    """Hook for future field redaction. Today: identity."""
    return row


# ---------------------------------------------------------------------------
# Router — every endpoint guarded by `require_admin`
# ---------------------------------------------------------------------------
router = APIRouter(
    prefix="/api/crm",
    tags=["crm"],
    dependencies=[Depends(require_admin)],
)


@router.get("/assessment-requests")
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


@router.get("/assessment-requests/{record_id}")
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


@router.patch("/assessment-requests/{record_id}")
async def crm_update_request(record_id: str, payload: CRMUpdate):
    data = payload.model_dump(exclude_unset=True)
    if not data:
        raise HTTPException(status_code=400, detail="Güncellenecek alan yok.")

    # Whitelist (model already enforces — be explicit anyway)
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

    # Auto-stamp reviewed_at when moving into in_review / contacted
    if data.get("status") in {"in_review", "contacted"} and "reviewed_at" not in data:
        data["reviewed_at"] = datetime.now(timezone.utc).isoformat()
    # Auto-flag appointment_created when appointment_date is provided
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
