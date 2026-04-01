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
- [x] HeroSlider.jsx 3. slide kaldırma (LCP optimizasyonu)
- [x] index.html defer/preconnect (PageSpeed iyileştirme)

### 1 Nisan 2026
- [x] AyakSagligiRehberiBlog.jsx - /blog/ayak-sagligi-rehberi (Pillar page)
  - Kapsamlı rehber: Batık tırnak, mantar, nasır, topuk çatlakları, diyabet, evde bakım
  - 5 görsel (kapak + ayakkabı + evde bakım + diyabet + before/after)
  - Klinik deneyim kutuları (her bölüme gerçek vaka/gözlem eklendi)
  - "En Sık Yapılan Hatalar" bölümü (5 madde, numaralı)
  - "Günlük Bakım Checklist" (interaktif checkbox)
  - İç linkler akış içine gömülmüş doğal cümleler olarak güçlendirildi
  - Karşılaştırma tablosu, 5 SSS (zenginleştirilmiş cevaplar), WhatsApp CTA (orta+alt)
  - Article + FAQPage + BreadcrumbList Schema
  - 15+ iç bağlantı mevcut blog yazılarına
- [x] 8 mevcut blog sayfasına geri bağlantı (backlink) eklendi

## Backlog
- [ ] GitHub'a push ve production deploy
- [ ] Google AdSense yeniden başvuru
