# Medipodo Blog - PRD

## Problem Statement
Medipodo.com podoloji kliniği web sitesi için SEO optimizasyonlu blog yazıları ve içerik stratejisi. Google AdSense onayı ve organik trafik artışı hedefleniyor.

## Content Policy
- "Tedavi" kelimesi kullanılmaz - yerine "bakım", "rahatlatma", "destek", "uygulama" kullanılır
- Tıbbi garanti veren ifadelerden kaçınılır
- İçerik bilgilendirme amaçlıdır notu eklenir
- WhatsApp CTA her blog sonuna eklenir

## Tech Stack
React.js, React Router, Tailwind CSS, react-helmet (SEO), lucide-react, JSON-LD Schema

## Implemented Features

### 31 Mart 2026
- [x] BatikTirnakEvdeBlog.jsx - /blog/batik-tirnak-evde-nasil-rahatlatilir
- [x] AyaktaKizariklikBlog.jsx - /blog/ayakta-kizariklik-neden-olur
- [x] MedikalAyakBakimiService.jsx FAQ schema düzeltmesi
- [x] HeroSlider.jsx 3. slide kaldırma (LCP)
- [x] index.html defer/preconnect (PageSpeed)

### 1 Nisan 2026
- [x] AyakSagligiRehberiBlog.jsx - /blog/ayak-sagligi-rehberi (Pillar page)
  - Klinik deneyim kutuları, En Sık Hatalar, Checklist, before/after, SSS
  - 8 mevcut blog sayfasına backlink eklendi
- [x] PodologFiyatlariAnkaraBlog.jsx - /blog/podolog-fiyatlari-ankara
  - Fiyat tablosu, klinik deneyim kutuları, 3 görsel, SSS, WhatsApp CTA
  - Article + FAQPage + BreadcrumbList Schema

### 17 Nisan 2026
- [x] TirnakTeliFiyatlariBlog.jsx - /blog/tirnak-teli-fiyatlari-ankara
  - Tırnak teli fiyatları, uygulama süreci, klinik deneyim kutuları, SSS, WhatsApp CTA
  - Article + FAQPage + BreadcrumbList Schema, iç linkleme
- [x] AyakTakip mobil uygulama referanslarının Home.jsx, About.jsx ve blog sayfalarına entegrasyonu
- [x] batik-tirnak-gorsel.webp alt yazısı "Batık tırnak zamanla iltihap oluşturabilir" olarak güncellendi
- [x] SSS'de ilk 2 soru varsayılan açık (Google bot SEO iyileştirmesi)
- [x] Kapak görseli batik-tirnak-teli-takma-fiyatlari-ankara.webp ile değiştirildi
- [x] CTA spam düzeltmesi: Orta CTA "Acıtır mı" sonrasına taşındı, araya 6 bölüm mesafe bırakıldı

## Backlog
- [ ] GitHub'a push ve production deploy
- [ ] Google AdSense yeniden başvuru
- [ ] Yeni blog konularının belirlenmesi ve eklenmesi
