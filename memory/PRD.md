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

### 2026-01 — Iteration 5: Production hardening
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

### 2026-01 — Iteration 6: CRM dashboard UI (frontend-only)
- New route `/crm` → `pages/CRM.jsx`. Header/Footer/WhatsApp public chrome hidden for admin pages (added `isAdminPage` exclusion alongside existing `isLandingPage`).
- **Layout**: left sidebar (Yeni Başvurular / İncelenenler / Randevular / Tamamlananlar / Arşiv) with active highlight + per-tab count badges + Medipodo branding + system-health footer card; sticky topbar with search, Filtrele button, notification bell, settings, and "Dr. Rana" user chip.
- **KPI strip**: 4 cards with colored accents.
- **Card grid**: each application card shows initials avatar / İsimsiz, name + status badge, phone + age, problem-area tags, foot tag, chronic-condition warning tags, color-graded pain meter, 📷 photo count, time, hover lift + chevron animation.
- **Right-side drawer** (shadcn Sheet) with status header, WhatsApp Gönder / Randevu Oluştur buttons (UI only at this point), Durum select, photo grid, Şikayet, ağrı meter, Sorun Bölgesi, Sağlık Geçmişi, İç Notlar, meta, save bar.
- All UI-only with mock data + inline SVG image placeholders.

### 2026-01 — Iteration 7: CRM ↔ Supabase live wiring
- New backend endpoints (no auth, per product decision — guard at proxy):
  - `GET /api/crm/assessment-requests?status=&q=&limit=&offset=` — newest-first list, multi-status filter, ilike search.
  - `GET /api/crm/assessment-requests/{id}` — single record + 1-hour signed URLs for every image.
  - `PATCH /api/crm/assessment-requests/{id}` — partial update of `status` / `internal_notes` / `reviewed_by` / `reviewed_at` / `appointment_date` / `appointment_created`. Pydantic `extra=forbid`. Auto-stamps `reviewed_at` on status → in_review/contacted; auto-flags `appointment_created` when `appointment_date` is set.
- `supabase_service.py` extended with `list_assessments`, `get_assessment`, `update_assessment`, `create_signed_urls`.
- Frontend `pages/CRM.jsx` refactored to use real API (mock array removed). Same UI exactly. Added loading/error states, "Tekrar dene" + "Yenile" buttons, drawer save-error toast, real signed-URL image previews, editable `reviewed_by` / `appointment_date` / `appointment_created`, `İncelendi` + `Son güncelleme` meta.

### 2026-01 — Iteration 8: CRM isolation + auth seam (current)
- New file `backend/crm_router.py` — every CRM route moved out of `server.py` into its own dedicated `APIRouter`. Public form endpoint stays in `server.py`.
- All CRM endpoints now declare `dependencies=[Depends(require_admin)]`. `require_admin` is presently a no-op so behaviour is unchanged, but swapping in real auth later is a single-function edit — no route signatures or frontend code need to change.
- All CRM endpoints tagged `crm` in OpenAPI for future tooling.
- Public form (`/api/assessment-requests`) and CRM API (`/api/crm/*`) are now in physically separate files with separate routers — clean blast radius for any future change.
- New file `CRM_PROTECTION.md` — ready-to-paste configs for Nginx Basic Auth, Cloudflare Zero Trust, Caddy, and Tailscale. Also documents the one-function edit needed for in-app auth.
- No UI, frontend, or functional change. Verified: public form alive, CRM list/get/patch behave identically, OpenAPI cleanly lists the two CRM paths under tag `crm`.
- New backend endpoints (no auth, per product decision — guard at proxy):
  - `GET /api/crm/assessment-requests?status=&q=&limit=&offset=` — newest-first list, multi-status filter, ilike search over name/phone/complaint.
  - `GET /api/crm/assessment-requests/{id}` — single record + `images: [{path, signed_url}]` (1 h signed URLs).
  - `PATCH /api/crm/assessment-requests/{id}` — partial update of whitelisted fields only (`status`, `internal_notes`, `reviewed_by`, `reviewed_at`, `appointment_date`, `appointment_created`); extra fields rejected (Pydantic `extra=forbid`). Status → in_review/contacted auto-stamps `reviewed_at`; setting `appointment_date` auto-flags `appointment_created`.
- `supabase_service.py` extended with `list_assessments`, `get_assessment`, `update_assessment`, `create_signed_urls`.
- Frontend `pages/CRM.jsx` refactored to use real API (mock array removed). Same UI exactly: tabs, search (debounced 300 ms), KPIs, cards, drawer. Added: list loading & error states with "Tekrar dene", "Yenile" button in topbar, drawer loading state, drawer save error toast, real signed-URL image previews (click to open in new tab), editable `reviewed_by` input, editable `appointment_date` (`datetime-local`), `appointment_created` checkbox; `İncelendi` / `Son güncelleme` meta from `reviewed_at` / `updated_at`. After save the row is optimistically moved in/out of the current tab and sidebar counts refresh.
- No new dependencies. Backend unchanged for the public form.
- New route `/crm` → `pages/CRM.jsx`. Header/Footer/WhatsApp public chrome hidden for admin pages (added `isAdminPage` exclusion alongside existing `isLandingPage`).
- **Layout**: left sidebar (Yeni Başvurular / İncelenenler / Randevular / Tamamlananlar / Arşiv) with active highlight + per-tab count badges + Medipodo branding + system-health footer card; sticky topbar with search, Filtrele button, notification bell, settings, and "Dr. Rana" user chip.
- **KPI strip**: 4 cards (Bugün Gelen, Bekleyen, Bu Hafta Randevu, Ort. Yanıt Süresi) with colored accents.
- **Card grid**: each application card shows initials avatar / İsimsiz, name + status badge, phone + age, problem-area tags, foot tag, chronic-condition warning tags, color-graded pain meter (green ≤3, amber 4-6, red ≥7), 📷 photo count, time, hover lift + chevron animation. Search filters across name / phone / complaint / problem areas.
- **Right-side drawer** (shadcn Sheet) opens on card click: sticky header with status badge + id + name + meta, 2 quick action buttons (WhatsApp Gönder green / Randevu Oluştur outline — UI only), Durum select (Pending / Reviewed / Appointment / Completed), photo preview grid with inline SVG placeholders, Şikayet block, large pain meter, Sorun Bölgesi, Sağlık Geçmişi (kronik + ilaçlar), İç Notlar textarea, Başvuru Bilgisi meta, sticky save bar.
- **Empty state**, mobile sidebar collapse → Select dropdown, responsive grid (1/2/3 cols).
- All UI-only with mock data + inline SVG image placeholders. No backend calls, no Supabase wiring, no real images. Backend files untouched.

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
