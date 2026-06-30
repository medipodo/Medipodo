"""
Supabase integration for the 'Ücretsiz Ön Değerlendirme' form.

- Stores submissions in public.assessment_requests.
- Uploads images to the PRIVATE storage bucket 'assessment-images'.
- Stores only storage paths in the database. Signed URLs are created on demand
  later (e.g. by the future CRM).

The service-role key is read from SUPABASE_SERVICE_ROLE_KEY and never exposed
to the frontend.
"""
from __future__ import annotations

import logging
import os
import time
import uuid
from typing import Any

from supabase import Client, create_client

logger = logging.getLogger(__name__)

BUCKET_NAME = "assessment-images"
TABLE_NAME = "assessment_requests"

# Accepted MIME types -> canonical extension
_ALLOWED_CONTENT_TYPES = {
    "image/jpeg": ".jpg",
    "image/jpg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp",
}

_UPLOAD_RETRY_ATTEMPTS = 2  # one initial + one retry
_UPLOAD_RETRY_DELAY_SEC = 0.5

_client: Client | None = None


def get_client() -> Client:
    """Lazily build and cache the Supabase service-role client."""
    global _client
    if _client is not None:
        return _client

    url = os.environ.get("SUPABASE_URL")
    key = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
    if not url or not key:
        raise RuntimeError(
            "Supabase is not configured. Set SUPABASE_URL and "
            "SUPABASE_SERVICE_ROLE_KEY in backend/.env"
        )

    _client = create_client(url, key)
    return _client


def _ext_for(content_type: str, filename: str) -> str:
    if content_type in _ALLOWED_CONTENT_TYPES:
        return _ALLOWED_CONTENT_TYPES[content_type]
    lower = (filename or "").lower()
    for ext in (".jpg", ".jpeg", ".png", ".webp"):
        if lower.endswith(ext):
            return ".jpg" if ext == ".jpeg" else ext
    return ".jpg"


def is_supported_image_hint(content_type: str, filename: str) -> bool:
    """Cheap pre-check based on declared content-type / filename."""
    if content_type in _ALLOWED_CONTENT_TYPES:
        return True
    lower = (filename or "").lower()
    return any(lower.endswith(ext) for ext in (".jpg", ".jpeg", ".png", ".webp"))


def upload_image(
    *,
    assessment_id: str,
    file_bytes: bytes,
    content_type: str,
    filename: str,
) -> str:
    """Upload one image with a small retry loop. Returns the storage path."""
    client = get_client()
    ext = _ext_for(content_type, filename)
    path = f"{assessment_id}/{uuid.uuid4().hex}{ext}"

    last_error: Exception | None = None
    for attempt in range(1, _UPLOAD_RETRY_ATTEMPTS + 1):
        try:
            client.storage.from_(BUCKET_NAME).upload(
                path=path,
                file=file_bytes,
                file_options={
                    "content-type": content_type or "application/octet-stream",
                    "upsert": "false",
                },
            )
            return path
        except Exception as exc:  # noqa: BLE001
            last_error = exc
            logger.warning(
                "Supabase storage upload failed (attempt %s/%s): %s",
                attempt,
                _UPLOAD_RETRY_ATTEMPTS,
                exc,
            )
            if attempt < _UPLOAD_RETRY_ATTEMPTS:
                time.sleep(_UPLOAD_RETRY_DELAY_SEC)

    assert last_error is not None
    raise last_error


def delete_images(paths: list[str]) -> None:
    """Best-effort cleanup of orphan objects on rollback."""
    if not paths:
        return
    try:
        get_client().storage.from_(BUCKET_NAME).remove(paths)
    except Exception:  # noqa: BLE001
        logger.exception("Failed to cleanup orphan storage objects: %s", paths)


def insert_assessment(row: dict[str, Any]) -> dict[str, Any]:
    """Insert a row and return the persisted record."""
    client = get_client()
    result = client.table(TABLE_NAME).insert(row).execute()
    if not result.data:
        raise RuntimeError("Supabase insert returned no data.")
    return result.data[0]


# ---------------------------------------------------------------------------
# CRM helpers — read & update on the same assessment_requests table
# ---------------------------------------------------------------------------

def _escape_for_like(value: str) -> str:
    """Escape PostgREST `or=` filter special chars in a user query."""
    return value.replace(",", " ").replace("(", " ").replace(")", " ")


def list_assessments(
    *,
    statuses: list[str] | None = None,
    q: str | None = None,
    limit: int = 100,
    offset: int = 0,
) -> list[dict[str, Any]]:
    """List assessment rows. Most recent first."""
    client = get_client()
    query = client.table(TABLE_NAME).select("*").order("created_at", desc=True)

    if statuses:
        query = query.in_("status", statuses)

    if q and q.strip():
        term = f"%{_escape_for_like(q.strip())}%"
        # OR over name / phone / complaint
        query = query.or_(
            f"full_name.ilike.{term},phone.ilike.{term},complaint.ilike.{term}"
        )

    query = query.range(offset, max(offset, offset + limit - 1))
    result = query.execute()
    return result.data or []


def get_assessment(record_id: str) -> dict[str, Any] | None:
    client = get_client()
    result = client.table(TABLE_NAME).select("*").eq("id", record_id).limit(1).execute()
    rows = result.data or []
    return rows[0] if rows else None


def update_assessment(record_id: str, fields: dict[str, Any]) -> dict[str, Any] | None:
    client = get_client()
    result = client.table(TABLE_NAME).update(fields).eq("id", record_id).execute()
    rows = result.data or []
    return rows[0] if rows else None


def create_signed_urls(paths: list[str], expires_in: int = 3600) -> list[dict[str, str]]:
    """Generate short-lived signed URLs for a list of storage paths.

    Returns [{"path": ..., "signed_url": ...}, ...] in the same order. If a
    single path fails, its signed_url is None so the UI can show a placeholder.
    """
    if not paths:
        return []
    out: list[dict[str, str]] = []
    bucket = get_client().storage.from_(BUCKET_NAME)
    for path in paths:
        signed_url: str | None = None
        try:
            res = bucket.create_signed_url(path, expires_in)
            signed_url = (
                res.get("signedURL")
                or res.get("signed_url")
                or res.get("signedUrl")
                or None
            )
        except Exception:  # noqa: BLE001
            logger.exception("Failed to sign storage path: %s", path)
        out.append({"path": path, "signed_url": signed_url})
    return out

