# Supabase Integration — Setup Guide (v2)

Production-ready setup for the `/ucretsiz-on-degerlendirme` form. Single source of truth = Supabase. The future CRM reads & updates the same `assessment_requests` table directly — no data duplication.

---

## 1. Environment Variables

Add to `/app/backend/.env` (placeholders already present):

```bash
SUPABASE_URL=https://<your-project-ref>.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
```

Find both at: **Dashboard → Project Settings → API**.
Then restart backend:
```bash
sudo supervisorctl restart backend
```

> ⚠️ The service-role key bypasses RLS. Server-side only. Never commit it.

---

## 2. SQL Migration (idempotent — safe to re-run)

Open **Dashboard → SQL Editor → New query**, paste and run:

```sql
-- ============================================================
-- Medipodo · assessment_requests · v2
-- Idempotent. Includes all CRM-friendly columns.
-- ============================================================
create extension if not exists "pgcrypto";

-- Base table
create table if not exists public.assessment_requests (
    id                  uuid primary key default gen_random_uuid(),
    full_name           text,
    phone               text not null,
    age                 integer,
    gender              text,
    chronic_conditions  text[] not null default '{}'::text[],
    medications         text,
    complaint           text not null,
    pain_level          smallint,
    problem_areas       text[] not null default '{}'::text[],
    foot                text not null,
    kvkk_accepted       boolean not null default false,
    image_paths         text[] not null default '{}'::text[],
    status              text not null default 'pending',
    created_at          timestamptz not null default now()
);

-- v2 additive columns
alter table public.assessment_requests
    add column if not exists reviewed_at         timestamptz,
    add column if not exists reviewed_by         text,
    add column if not exists internal_notes      text,
    add column if not exists appointment_date    timestamptz,
    add column if not exists appointment_created boolean not null default false,
    add column if not exists updated_at          timestamptz not null default now(),
    add column if not exists submission_ip       text,
    add column if not exists user_agent          text;

-- Reset all CHECK constraints, then re-add named ones (so re-runs are clean)
do $$
declare r record;
begin
    for r in
        select conname
        from pg_constraint c
        join pg_class t on t.oid = c.conrelid
        join pg_namespace n on n.oid = t.relnamespace
        where t.relname = 'assessment_requests'
          and n.nspname = 'public'
          and c.contype = 'c'
    loop
        execute format('alter table public.assessment_requests drop constraint %I', r.conname);
    end loop;
end $$;

alter table public.assessment_requests
    add constraint ar_status_check check (status in (
        'pending', 'in_review', 'contacted', 'appointment_scheduled', 'closed', 'spam'
    )),
    add constraint ar_foot_check check (foot in ('Sol', 'Sağ', 'Her İkisi')),
    add constraint ar_age_check  check (age is null or (age between 1 and 120)),
    add constraint ar_pain_check check (pain_level is null or (pain_level between 0 and 10)),
    add constraint ar_lengths_check check (
        (full_name      is null or char_length(full_name)      <= 120)  and
        char_length(phone) between 6 and 30                              and
        (medications    is null or char_length(medications)    <= 2000) and
        char_length(complaint) between 3 and 4000                        and
        (internal_notes is null or char_length(internal_notes) <= 8000) and
        (reviewed_by    is null or char_length(reviewed_by)    <= 120)  and
        (gender         is null or char_length(gender)         <= 40)
    );

-- Auto-touch updated_at on UPDATE (great for CRM audit trail)
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
    new.updated_at = now();
    return new;
end;
$$;

drop trigger if exists trg_ar_touch on public.assessment_requests;
create trigger trg_ar_touch
    before update on public.assessment_requests
    for each row execute function public.touch_updated_at();

-- Useful indexes for CRM list / filter / search
create index if not exists ar_created_at_idx          on public.assessment_requests (created_at desc);
create index if not exists ar_updated_at_idx          on public.assessment_requests (updated_at desc);
create index if not exists ar_status_idx              on public.assessment_requests (status);
create index if not exists ar_phone_idx               on public.assessment_requests (phone);
create index if not exists ar_reviewed_at_idx         on public.assessment_requests (reviewed_at);
create index if not exists ar_appointment_date_idx    on public.assessment_requests (appointment_date)
    where appointment_date is not null;
create index if not exists ar_open_idx                on public.assessment_requests (created_at desc)
    where status in ('pending', 'in_review');

-- Lock down access — only the service role (backend / CRM with service key) reads/writes
alter table public.assessment_requests enable row level security;
```

That's it for the database.

---

## 3. Storage Bucket Setup

**Dashboard → Storage → New bucket**

| Field            | Value                                |
|------------------|--------------------------------------|
| Name             | `assessment-images`                  |
| Public bucket    | **OFF** (must stay private)          |
| Allowed MIME     | `image/jpeg, image/png, image/webp` (optional) |
| File size limit  | `8 MB` (optional)                    |

No RLS policies needed — the backend uses the service-role key, which bypasses RLS.

SQL alternative:
```sql
insert into storage.buckets (id, name, public)
values ('assessment-images', 'assessment-images', false)
on conflict (id) do nothing;
```

---

## 4. Database Schema — Final

### User-facing fields (written on submission)

| Column                | Type          | Notes                                                       |
|-----------------------|---------------|-------------------------------------------------------------|
| `id`                  | `uuid`        | Primary key.                                                |
| `full_name`           | `text`        | Optional (≤ 120 chars).                                     |
| `phone`               | `text`        | **Required**, normalized (digits / `+`). 6–30 chars.        |
| `age`                 | `integer`     | 1–120 or NULL.                                              |
| `gender`              | `text`        | Optional (≤ 40 chars).                                      |
| `chronic_conditions`  | `text[]`      | Deduped multi-select.                                       |
| `medications`         | `text`        | Optional (≤ 2 000 chars).                                   |
| `complaint`           | `text`        | **Required** (3–4 000 chars).                               |
| `pain_level`          | `smallint`    | 0–10 or NULL.                                               |
| `problem_areas`       | `text[]`      | Deduped multi-select.                                       |
| `foot`                | `text`        | **Required**. `Sol` / `Sağ` / `Her İkisi`.                  |
| `kvkk_accepted`       | `boolean`     | Always `true` for inserted rows (backend enforces).         |
| `image_paths`         | `text[]`      | Storage paths only.                                         |
| `submission_ip`       | `text`        | First IP from `X-Forwarded-For`. For abuse triage.          |
| `user_agent`          | `text`        | First 512 chars.                                            |

### CRM workflow fields (written later by CRM / podologist)

| Column                | Type          | Default     | Notes                                                              |
|-----------------------|---------------|-------------|--------------------------------------------------------------------|
| `status`              | `text`        | `pending`   | One of `pending`, `in_review`, `contacted`, `appointment_scheduled`, `closed`, `spam`. |
| `reviewed_at`         | `timestamptz` | NULL        | When a podologist first reviewed the request.                      |
| `reviewed_by`         | `text`        | NULL        | Podologist identifier (e.g. email / display name).                 |
| `internal_notes`      | `text`        | NULL        | Free-form CRM notes (≤ 8 000 chars).                               |
| `appointment_date`    | `timestamptz` | NULL        | Scheduled appointment time.                                        |
| `appointment_created` | `boolean`     | `false`     | Convenience flag for CRM filters.                                  |

### Automatic timestamps

| Column        | Type          | Default | Notes                                                  |
|---------------|---------------|---------|--------------------------------------------------------|
| `created_at`  | `timestamptz` | `now()` | Submission time.                                       |
| `updated_at`  | `timestamptz` | `now()` | Auto-touched by trigger on **every** UPDATE.           |

### Storage layout
Each submission's images live at:
```
assessment-images/<assessment_uuid>/<random>.<ext>
```
`image_paths` stores those relative paths only.

### Generate a signed URL when the CRM needs to view an image
```python
sb = create_client(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
res = sb.storage.from_("assessment-images").create_signed_url(path, 600)  # 10 min
print(res["signedURL"])
```

---

## 5. API Contract

`POST /api/assessment-requests` (multipart/form-data)

Rate limit: **10 req / minute / IP** and **30 req / hour / IP**.

| Field                | Required | Type                  | Limit              |
|----------------------|----------|-----------------------|--------------------|
| `phone`              | ✅       | string                | 6–30 chars after normalization |
| `complaint`          | ✅       | string                | 3–4 000 chars       |
| `foot`               | ✅       | `Sol` / `Sağ` / `Her İkisi` |              |
| `kvkk_accepted`      | ✅       | `true`                |                     |
| `full_name`          | —        | string                | ≤ 120 chars         |
| `age`                | —        | int                   | 1–120               |
| `gender`             | —        | string                | ≤ 40 chars          |
| `medications`        | —        | string                | ≤ 2 000 chars       |
| `pain_level`         | —        | int                   | 0–10                |
| `chronic_conditions` | —        | csv string            | dedup’d server-side |
| `problem_areas`      | —        | csv string            | dedup’d server-side |
| `images`             | —        | up to 5 files         | jpg/jpeg/png/webp, ≤ 8 MB each, ≤ 40 MB combined, Pillow-verified |

**Success (200):**
```json
{ "ok": true, "id": "<uuid>", "image_count": 3, "status": "pending" }
```

**Errors:**
| Code | Cause                                        |
|------|----------------------------------------------|
| `400`| Validation (any rule above)                  |
| `429`| Rate limit exceeded                          |
| `502`| Supabase upload or insert failed (after retry; uploaded images auto-rolled back) |

### CRM endpoints (used by `/crm`)

> No auth in this iteration (per product decision). Anyone reaching the backend can call these. Add an admin/reverse-proxy auth layer before exposing publicly.

| Method  | Path                                                   | Purpose                                                                  |
|---------|--------------------------------------------------------|--------------------------------------------------------------------------|
| `GET`   | `/api/crm/assessment-requests?status=...&q=...`        | List rows, newest first. `status` repeatable. `q` searches name/phone/complaint. `limit` ≤ 200. |
| `GET`   | `/api/crm/assessment-requests/{id}`                    | Single row **plus** `images: [{path, signed_url}]` with 1 h expiry signed URLs. |
| `PATCH` | `/api/crm/assessment-requests/{id}`                    | Partial update. Whitelisted fields: `status`, `internal_notes`, `reviewed_by`, `reviewed_at`, `appointment_date`, `appointment_created`. Extra fields are rejected (422). Setting status to `in_review`/`contacted` auto-stamps `reviewed_at`; setting `appointment_date` auto-sets `appointment_created=true`. |

---

## 6. Production-readiness improvements done in this iteration

| Area                  | Improvement |
|-----------------------|-------------|
| **Schema**            | Added `reviewed_at`, `reviewed_by`, `internal_notes`, `appointment_date`, `appointment_created` for CRM. Added `updated_at` (with `BEFORE UPDATE` trigger), `submission_ip`, `user_agent` for ops. Named CHECK constraints for length, foot, status, age, pain. Added six indexes covering the most common CRM queries (status, phone, dates, open-tickets partial index). |
| **Atomicity**         | If the DB insert fails after images uploaded, all uploaded objects are deleted from storage (no orphans). Same on per-image upload failure mid-batch. |
| **Image security**    | Every uploaded byte stream is now opened with Pillow (`Image.verify()`) and the detected format must be JPEG / PNG / WEBP. Fake `image/jpeg` content-type headers no longer get through. |
| **Input limits**      | All text fields capped both API-side (`max_length`) and DB-side (CHECK). Combined upload size capped at 40 MB. CSV multi-selects deduped & item-length capped. |
| **Phone normalization**| Strips spaces / dashes / parentheses; preserves leading `+`. Makes future CRM dedup trivial. |
| **Rate limiting**     | `slowapi` per-IP (`10/minute`, `30/hour`) on the public endpoint. Honors `X-Forwarded-For` from the edge proxy. Returns Turkish 429 message. |
| **Retry**             | Storage upload retries once (500 ms backoff) on transient errors. |
| **Observability**     | Structured `INFO` log on every successful submission (id, image count, IP). Failures log with full traceback. |
| **CORS**              | `allow_credentials=False` — public endpoint, no cookies. |
| **Logger ordering**   | Logger initialised before any endpoint uses it (was previously bottom of file). |

---

## 7. End-to-End Smoke Test (after env vars + SQL + bucket)

```bash
API_URL=$(grep REACT_APP_BACKEND_URL /app/frontend/.env | cut -d '=' -f2)
curl -X POST "$API_URL/api/assessment-requests" \
  -F "phone=+90 555 111 22 33" \
  -F "complaint=Sağ ayak başparmağımda 1 haftadır batma var" \
  -F "foot=Sağ" \
  -F "kvkk_accepted=true" \
  -F "full_name=Test Hasta" \
  -F "age=42" \
  -F "pain_level=6" \
  -F "chronic_conditions=Diyabet,Tiroid" \
  -F "problem_areas=Batık Tırnak,Nasır" \
  -F "images=@/path/to/photo.jpg"
```

Expected: `200 OK` + new row in `assessment_requests` + object(s) in `assessment-images/<id>/`.

---

## 8. Files Touched

### Created
- `/app/backend/supabase_service.py` — service-role client, upload (with retry), delete (for rollback), insert.
- `/app/SUPABASE_SETUP.md` — this document.

### Modified
- `/app/backend/server.py` — assessment endpoint + atomic flow + rate limiting + Pillow validation.
- `/app/backend/requirements.txt` — added `supabase`, `slowapi`, `Pillow`.
- `/app/backend/.env` — added Supabase env placeholders.
- `/app/frontend/src/pages/OnDegerlendirme.jsx` — removed email, made full_name optional, kept phone required, wired to backend, success-page state.

### Untouched
- All other Medipodo pages, routing, header navigation, design system, the Ayak Analizi CTA card.

---

## 9. Intentionally NOT Implemented

- CRM auth (`/crm` and `/api/crm/*` are open in this iteration — guard them at your reverse proxy / VPN / IP allowlist before exposing publicly. **See `CRM_PROTECTION.md` for ready-to-paste Nginx, Caddy, Cloudflare Zero Trust, and Tailscale configs.** The router is already isolated and the auth seam (`require_admin`) is ready to fill in if you later prefer in-app auth.)
- WhatsApp / SMS / email notifications.
- AI analysis.
- End-user authentication.
- Admin dashboard for storage browsing outside the assessments table.
