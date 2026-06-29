# Medipodo — PRD

## Project
Medipodo (medipodo.com) — podology / ayak sağlığı marketing site for the Ankara-based Medipodo clinic. Cloned from https://github.com/medipodo/Medipodo into `/app`. React 19 + CRA/craco frontend, FastAPI + MongoDB backend (legacy), Supabase (new feature backing store).

## Feature: Ücretsiz Ön Değerlendirme
Public form at `/ucretsiz-on-degerlendirme` letting users submit a foot/nail problem (with up to 5 photos) for free expert review. Persists to Supabase (Postgres + private Storage bucket). No CRM yet.

## Architecture
- Frontend: React 19, TailwindCSS, shadcn UI, lucide-react.
- Backend: FastAPI on port 8001 (`/api` prefix). MongoDB still wired up for the rest of the site; Supabase used **only** for the assessment form.
- Supabase: table `public.assessment_requests` + private bucket `assessment-images` (paths stored, no signed URLs persisted).

## Implementation Log
### 2026-01 — Iteration 1: Frontend page + nav
- New page `/app/frontend/src/pages/OnDegerlendirme.jsx` (hero, 3 trust cards, 9-step form, drag-and-drop uploader, success modal).
- Route registered in `App.js`. Nav link added in `Header.jsx`.

### 2026-01 — Iteration 2: Copy polish + CTA card
- Friendly Turkish copy across all sections.
- Submit button changed to "📸 Podoloğa Gönder".
- Prominent CTA card added to `pages/AyakAnalizi.jsx` result screen → `/ucretsiz-on-degerlendirme`.

### 2026-01 — Iteration 3: Rename
- Route renamed: `/on-degerlendirme` → `/ucretsiz-on-degerlendirme`.
- Nav + H1 renamed to "Ücretsiz Ön Değerlendirme".
- SEO meta (title, canonical, og:url) updated.

### 2026-01 — Iteration 4: Supabase backend integration
- Form: removed E-mail field, made Ad Soyad optional, kept Telefon required, kept all other fields.
- Replaced inline success modal with a full clean success page ("Başvurunuz başarıyla alındı. Podologlarımız en kısa sürede inceleyerek sizinle iletişime geçecektir.").
- Added loading + error states on submit.
- New backend module `/app/backend/supabase_service.py` (service-role client, storage upload, table insert).
- New endpoint `POST /api/assessment-requests` (multipart form: fields + up to 5 images, ≤ 8MB each).
- Flow: upload images to private bucket `assessment-images/<id>/<uuid>.<ext>` → insert row in `public.assessment_requests` with `image_paths`, `status='pending'`, auto `created_at`.
- Added `supabase==2.31.0` to requirements; added env placeholders `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` to backend `.env`.
- Detailed setup guide written to `/app/SUPABASE_SETUP.md` (SQL migration, schema, bucket steps, API contract, file list).

### 2026-01 — Iteration 5: Production hardening (current)
- **Schema v2**: added CRM workflow columns (`reviewed_at`, `reviewed_by`, `internal_notes`, `appointment_date`, `appointment_created`) + ops columns (`updated_at` with BEFORE-UPDATE trigger, `submission_ip`, `user_agent`). All CHECK constraints named & idempotent. Added 7 indexes covering CRM queries (status, phone, dates, partial index for open tickets). `status` enum expanded to include `appointment_scheduled`.
- **Atomic submission**: rollback uploaded storage objects if DB insert fails (or any image upload fails mid-batch). No more orphaned files.
- **Image security**: every upload Pillow-verified (`Image.verify()` + format whitelist). Fake `content-type` headers no longer accepted.
- **Input limits**: `max_length` on every form field; matching DB CHECK constraints; combined upload size cap 40 MB; CSV multi-selects deduped + length-capped server-side.
- **Phone normalization**: strip spaces/dashes/parens; keep leading `+` once. Enables CRM dedup.
- **Rate limiting**: `slowapi` 10/minute & 30/hour per IP on the assessment endpoint. Honors `X-Forwarded-For`. Turkish 429 response.
- **Retry**: storage upload retries once with 500 ms backoff on transient errors.
- **Observability**: structured INFO log per successful submission (id, image count, IP). Failures log full traceback.
- **CORS**: `allow_credentials=False` (public endpoint, no cookies).
- **Logger ordering**: moved init above endpoints (was previously at bottom).
- New deps: `slowapi==0.1.10`, `Pillow==12.2.0`.

## Backlog
- P0 — Custom CRM integration: forward new rows (id, full_name, phone, complaint, foot, image signed URLs) to client's CRM endpoint. Auth/payload TBD by client.
- P1 — Admin dashboard / image viewer using short-lived signed URLs (`create_signed_url`).
- P1 — Optional WhatsApp / Email confirmation to user after submit.
- P2 — Form analytics / abandonment tracking.
- P2 — Rate limiting & abuse protection on the public endpoint.

## Environment Variables (current)
Backend `.env`:
- `MONGO_URL`, `DB_NAME`, `CORS_ORIGINS` (existing, untouched)
- `SUPABASE_URL` (new — user must set)
- `SUPABASE_SERVICE_ROLE_KEY` (new — user must set)

Frontend `.env`:
- `REACT_APP_BACKEND_URL`
