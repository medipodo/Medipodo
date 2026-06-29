"""
Supabase integration for the 'Ücretsiz Ön Değerlendirme' form.

- Stores user-submitted form data in the public.assessment_requests table.
- Uploads up to 5 user images to the PRIVATE storage bucket 'assessment-images'.
- Stores only storage paths in the database. Signed URLs can be created later (e.g. CRM).

The service-role key is read from SUPABASE_SERVICE_ROLE_KEY and never exposed to the
frontend. Backend is the only writer to the bucket.
"""
from __future__ import annotations

import os
import uuid
from typing import Any

from supabase import Client, create_client

BUCKET_NAME = "assessment-images"
TABLE_NAME = "assessment_requests"

_ALLOWED_CONTENT_TYPES = {
    "image/jpeg": ".jpg",
    "image/jpg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp",
}

_client: Client | None = None


def get_client() -> Client:
    """Lazily create and cache the Supabase service-role client."""
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
    # Fallback to filename extension
    lower = (filename or "").lower()
    for ext in (".jpg", ".jpeg", ".png", ".webp"):
        if lower.endswith(ext):
            return ".jpg" if ext == ".jpeg" else ext
    return ".jpg"


def is_supported_image(content_type: str, filename: str) -> bool:
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
    """Upload a single image to the private bucket. Returns the storage path."""
    client = get_client()
    ext = _ext_for(content_type, filename)
    path = f"{assessment_id}/{uuid.uuid4().hex}{ext}"

    client.storage.from_(BUCKET_NAME).upload(
        path=path,
        file=file_bytes,
        file_options={
            "content-type": content_type or "application/octet-stream",
            "upsert": "false",
        },
    )
    return path


def insert_assessment(row: dict[str, Any]) -> dict[str, Any]:
    """Insert a row into assessment_requests and return the persisted record."""
    client = get_client()
    result = client.table(TABLE_NAME).insert(row).execute()
    if not result.data:
        raise RuntimeError("Supabase insert returned no data.")
    return result.data[0]
