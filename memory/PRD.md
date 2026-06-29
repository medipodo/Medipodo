# Medipodo — PRD

## Project
Medipodo is a podology (ayak sağlığı) marketing/content website for Ankara-based Medipodo clinic. Codebase cloned from https://github.com/medipodo/Medipodo into /app.

## Original Problem Statement
Add a new front-end-only "Uzman Ön Değerlendirme" page at `/on-degerlendirme` where users submit foot/nail problem photos for expert review. Add navigation link, plus a prominent CTA card on the Ayak Analizi result screen. No backend / Supabase / CRM yet — those come later.

## Architecture
- Frontend: React 19 (CRA + craco), TailwindCSS, shadcn/radix UI components, lucide-react icons, react-router-dom v7, react-helmet for SEO.
- Backend: FastAPI + MongoDB (Motor) — unused for this feature.

## Implemented (2026-01)
### Iteration 1
- New page `/app/frontend/src/pages/OnDegerlendirme.jsx` with Hero, 3 trust cards, 9-step form (kişisel bilgiler, kronik rahatsızlıklar, ilaçlar, şikayet, ağrı slider 0-10, sorunlu bölge, ayak seçimi, drag&drop foto yükleme max 5 jpg/png/webp + previews + remove, KVKK), success modal.
- Route added in App.js: `/on-degerlendirme`
- Nav link "Uzman Ön Değerlendirme" added to Header.jsx (desktop + mobile).

### Iteration 2 (current)
- Submit button changed to **"📸 Podoloğa Gönder"** (shorter, friendlier).
- Page-wide copy rewritten to be conversion-focused & user-friendly (Sizi Tanıyalım / Bilinen Bir Rahatsızlığınız Var mı? / Sizi En Çok Ne Rahatsız Ediyor? / Ağrınız Ne Kadar? / Hangi Ayağınızda? / Son Bir Onay / etc.).
- Hero badge updated: "ÜCRETSİZ · 24 SAATTE GERİ DÖNÜŞ".
- Prominent CTA card added to `pages/AyakAnalizi.jsx` result screen (right after result-header): navy gradient card with "Daha doğru bir ön değerlendirme ister misiniz?" + "📸 Fotoğraf Gönder" → `/on-degerlendirme`.

## Backlog (deferred per user)
- P0 — Supabase integration (form table + storage bucket for images, max 5 per submission).
- P0 — Custom CRM integration (own CRM, details TBD by user).
- P0 — Backend endpoint to accept multipart form submission.
- P1 — Email/WhatsApp confirmation to user after submit.
- P2 — Admin dashboard for podologists to review incoming submissions.
