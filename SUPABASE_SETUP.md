# Supabase Integration — Setup Guide

This document is everything you need to wire the `/ucretsiz-on-degerlendirme` form to your own Supabase project. Run the SQL once, set the env vars, and the integration is live.

---

## 1. Required Environment Variables

Add these to `/app/backend/.env` (placeholders are already present — fill them in):

```bash
SUPABASE_URL=https://<your-project-ref>.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
```

- `SUPABASE_URL` → Dashboard → **Project Settings → API → Project URL**
- `SUPABASE_SERVICE_ROLE_KEY` → Dashboard → **Project Settings → API → service_role** (the secret key, **not** `anon`)

> ⚠️ The service role key bypasses RLS. Keep it server-side only. Never expose it to the frontend or commit it to git.

After editing `.env`, restart the backend:
```bash
sudo supervisorctl restart backend
```

---

## 2. SQL Migration

Open Supabase Dashboard → **SQL Editor → New query**, paste & run:

```sql
-- Required extension (enabled by default on hosted Supabase, safe to re-run)
create extension if not exists "pgcrypto";

-- Table: assessment_requests
create table if not exists public.assessment_requests (
    id                  uuid primary key default gen_random_uuid(),
    full_name           text,
    phone               text not null,
    age                 integer check (age is null or (age >= 1 and age <= 120)),
    gender              text,
    chronic_conditions  text[] not null default '{}'::text[],
    medications         text,
    complaint           text not null,
    pain_level          smallint check (pain_level is null or (pain_level between 0 and 10)),
    problem_areas       text[] not null default '{}'::text[],
    foot                text not null check (foot in ('Sol', 'Sağ', 'Her İkisi')),
    kvkk_accepted       boolean not null default false,
    image_paths         text[] not null default '{}'::text[],
    status              text not null default 'pending'
                          check (status in ('pending', 'in_review', 'contacted', 'closed', 'spam')),
    created_at          timestamptz not null default now()
);

-- Helpful indexes for an admin/CRM dashboard later
create index if not exists assessment_requests_created_at_idx
    on public.assessment_requests (created_at desc);
create index if not exists assessment_requests_status_idx
    on public.assessment_requests (status);
create index if not exists assessment_requests_phone_idx
    on public.assessment_requests (phone);

-- Lock the table down: only service-role (backend) may read/write.
-- The anon/authenticated roles get no policies, so RLS denies them by default.
alter table public.assessment_requests enable row level security;
```

That's it for the table.

---

## 3. Storage Bucket Setup

### Option A — Dashboard (recommended, 30 seconds)

1. Dashboard → **Storage → New bucket**
2. Name: `assessment-images`
3. **Public bucket: OFF** (must stay private)
4. (Optional) Allowed MIME types: `image/jpeg, image/png, image/webp`
5. (Optional) File size limit: `8 MB`
6. Click **Create bucket**

No policies are required: the backend uses the service-role key, which bypasses RLS on `storage.objects`. End users never touch the bucket directly.

### Option B — SQL (if you prefer)

```sql
insert into storage.buckets (id, name, public)
values ('assessment-images', 'assessment-images', false)
on conflict (id) do nothing;
```

---

## 4. Database Schema (final, what got created)

| Column                | Type          | Notes                                                                 |
|-----------------------|---------------|-----------------------------------------------------------------------|
| `id`                  | `uuid`        | Primary key, auto-generated.                                          |
| `full_name`           | `text`        | Optional.                                                             |
| `phone`               | `text`        | **Required.**                                                         |
| `age`                 | `integer`     | Optional, 1–120.                                                      |
| `gender`              | `text`        | Optional, free text (`Kadın` / `Erkek` / `Belirtmek istemiyorum`).    |
| `chronic_conditions`  | `text[]`      | Multi-select; e.g. `{Diyabet,Tiroid}`.                                |
| `medications`         | `text`        | Optional free text.                                                   |
| `complaint`           | `text`        | **Required.**                                                         |
| `pain_level`          | `smallint`    | 0–10.                                                                 |
| `problem_areas`       | `text[]`      | Multi-select; e.g. `{Batık Tırnak,Nasır}`.                            |
| `foot`                | `text`        | **Required.** One of `Sol`, `Sağ`, `Her İkisi`.                       |
| `kvkk_accepted`       | `boolean`     | Always `true` when row is inserted (backend enforces).                |
| `image_paths`         | `text[]`      | Storage paths only. CRM creates signed URLs on demand.                |
| `status`              | `text`        | Default `pending`. Constrained set.                                   |
| `created_at`          | `timestamptz` | Auto, `now()`.                                                        |

### Storage layout
Each submission's images live under `assessment-images/<assessment_uuid>/<random>.<ext>`, so a row's `image_paths` looks like:
```
{
  "1f0e3dad-99bb-4ff4-9a99-b0b3b9e7a8b4/9c0a…f3.jpg",
  "1f0e3dad-99bb-4ff4-9a99-b0b3b9e7a8b4/4e2a…7d.png"
}
```

### How to generate a signed URL later (CRM use)
```python
from supabase import create_client
sb = create_client(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
res = sb.storage.from_("assessment-images").create_signed_url(path, 600)  # 10 min
print(res["signedURL"])
```

---

## 5. API Contract

`POST /api/assessment-requests` (multipart/form-data)

| Field                | Required | Type                  |
|----------------------|----------|-----------------------|
| `phone`              | ✅       | string                |
| `complaint`          | ✅       | string                |
| `foot`               | ✅       | `Sol` / `Sağ` / `Her İkisi` |
| `kvkk_accepted`      | ✅       | `true`                |
| `full_name`          | —        | string                |
| `age`                | —        | int                   |
| `gender`             | —        | string                |
| `medications`        | —        | string                |
| `pain_level`         | —        | int 0–10              |
| `chronic_conditions` | —        | csv string            |
| `problem_areas`      | —        | csv string            |
| `images`             | —        | up to 5 files (jpg/jpeg/png/webp, ≤ 8MB each) |

**Success (200):**
```json
{ "ok": true, "id": "<uuid>", "image_count": 3, "status": "pending" }
```

**Errors:** `400` for validation, `502` for Supabase failures, with a Turkish `detail` message.

---

## 6. Files Created / Modified

### Created
- `/app/backend/supabase_service.py` — Supabase client + storage upload + insert helper.
- `/app/SUPABASE_SETUP.md` — this document.

### Modified
- `/app/backend/server.py` — added `POST /api/assessment-requests` endpoint.
- `/app/backend/requirements.txt` — added `supabase==2.31.0`.
- `/app/backend/.env` — added `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` placeholders.
- `/app/frontend/src/pages/OnDegerlendirme.jsx` — removed E-mail field, made Ad Soyad optional, made Telefon required, wired form to `POST /api/assessment-requests`, replaced success modal with full success page, added loading + error states.

### Untouched
- All other Medipodo pages, the `/ucretsiz-on-degerlendirme` route, Header navigation, the Ayak Analizi CTA, and the design system.

---

## 7. End-to-End Test (after setting env vars)

```bash
API_URL=$(grep REACT_APP_BACKEND_URL /app/frontend/.env | cut -d '=' -f2)
curl -X POST "$API_URL/api/assessment-requests" \
  -F "phone=05551112233" \
  -F "complaint=Sağ ayak başparmağımda 1 haftadır batma var" \
  -F "foot=Sağ" \
  -F "kvkk_accepted=true" \
  -F "full_name=Test Hasta" \
  -F "age=42" \
  -F "pain_level=6" \
  -F "chronic_conditions=Diyabet,Tiroid" \
  -F "problem_areas=Batık Tırnak,Nasır" \
  -F "images=@/path/to/photo1.jpg" \
  -F "images=@/path/to/photo2.png"
```

Expected: `200` with `{"ok": true, ...}` and a new row in `assessment_requests` plus image objects under `assessment-images/<id>/…`.

---

## 8. Not implemented (intentionally deferred)

- CRM integration (your custom CRM — TBD).
- WhatsApp / SMS / Email notifications.
- AI analysis.
- End-user authentication.
- Admin dashboard / image viewer.
