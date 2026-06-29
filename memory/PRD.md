# Medipodo — PRD

## Project
Medipodo is a podology (ayak sağlığı) marketing/content website for Ankara-based Medipodo clinic. Codebase cloned from https://github.com/medipodo/Medipodo into /app.

## Original Problem Statement (current task)
Add a new front-end-only page at `/on-degerlendirme` ("Uzman Ön Değerlendirmesi") where users can submit foot/nail problem details and photos for expert review. No backend yet. Add a navigation menu item linking to this page. Do not redesign or refactor anything else. The Ayak Analizi CTA card and backend (Supabase/CRM) are deferred to follow-up tasks.

## Architecture
- Frontend: React 19 (CRA + craco), TailwindCSS, shadcn/radix UI components, lucide-react icons, react-router-dom v7, react-helmet for SEO.
- Backend: FastAPI + MongoDB (Motor) — unused for this feature.

## Implemented in this iteration (2026-01)
- New page: `/app/frontend/src/pages/OnDegerlendirme.jsx`
  - Hero with title "Uzman Ön Değerlendirmesi" + subtitle + 3 trust cards (Ücretsiz Ön Değerlendirme, Uzman Podolog İncelemesi, Ortalama 24 Saat İçinde Dönüş).
  - 9-step form card with: Kişisel Bilgiler (Ad Soyad, Telefon, E-posta, Yaş, Cinsiyet), Kronik Rahatsızlıklar checkboxes ("Hiçbiri" exclusive), İlaçlar textarea, Şikayetiniz large textarea, Ağrı Seviyesi slider 0–10, Sorunlu Bölge checkboxes, Sorun Hangi Ayakta radio (Sol/Sağ/Her İkisi), Drag & drop photo upload (max 5, jpg/jpeg/png/webp, previews + remove), KVKK consent, Submit button.
  - On submit: validates required fields; shows beautiful success modal "Başvurunuz alınmaya hazır. Bir sonraki aşamada bu form veritabanına bağlanacaktır." No API call.
- Route registered in `App.js`: `<Route path="/on-degerlendirme" element={<OnDegerlendirme />} />`
- Nav link "Uzman Ön Değerlendirme" added in `components/Header.jsx` (desktop + mobile).
- Reuses existing design system: navy blue gradient header, blue-700 primary buttons, blue-950 headings, blue-50 backgrounds, shadcn UI primitives (Card, Input, Textarea, Checkbox, RadioGroup, Slider, Dialog, Button).

## Backlog / Next tasks (deferred per user)
- P0 — Ayak Analizi sayfası sonuç ekranına "Daha doğru bir ön değerlendirme ister misiniz?" CTA kartı ekle → `/on-degerlendirme` yönlendirmesi.
- P0 — Supabase entegrasyonu (form submission + storage bucket for uploaded images).
- P0 — CRM entegrasyonu (lead push: name, phone, email, problem summary).
- P1 — Backend endpoint to accept multipart form with images.
- P2 — Email/WhatsApp bildirim teslimat onayı.
