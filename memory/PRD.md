# Medipodo Blog - PRD

## Problem Statement
Medipodo.com podoloji kliniği web sitesi için SEO optimizasyonlu blog yazıları ve içerik stratejisi. Google AdSense onayı ve organik trafik artışı hedefleniyor.

## User Personas
- Podoloji kliniği müşterileri
- Ayak sağlığı sorunları araştıran kişiler
- Evde ayak bakımı yöntemleri arayanlar
- Diyabet hastaları ve yakınları

## Content Policy
- "Tedavi" kelimesi kullanılmaz - yerine "bakım", "rahatlatma", "destek", "uygulama" kullanılır
- Tıbbi garanti veren ifadelerden kaçınılır
- İçerik bilgilendirme amaçlıdır notu eklenir
- WhatsApp CTA her blog sonuna eklenir
- Tüm iletişim kullanıcının Türkçe dilinde yapılır

## Tech Stack
- React.js, React Router, Tailwind CSS
- react-helmet (SEO), lucide-react (icons)
- JSON-LD Schema (Article, FAQPage, BreadcrumbList)

## Implemented Features

### 31 Mart 2026
- [x] BatikTirnakEvdeBlog.jsx - /blog/batik-tirnak-evde-nasil-rahatlatilir
- [x] AyaktaKizariklikBlog.jsx - /blog/ayakta-kizariklik-neden-olur
- [x] blog_content.js, sitemap.xml, App.js güncellemeleri
- [x] MedikalAyakBakimiService.jsx FAQ schema düzeltmesi
- [x] HeroSlider.jsx 3. slide kaldırma (LCP optimizasyonu)
- [x] index.html defer/preconnect (PageSpeed iyileştirme)

### 1 Nisan 2026
- [x] AyakSagligiRehberiBlog.jsx - /blog/ayak-sagligi-rehberi (Pillar page)
  - Kapsamlı rehber: Batık tırnak, mantar, nasır, topuk çatlakları, diyabet, evde bakım
  - 4 görsel (kapak + ayakkabı + evde bakım + diyabet)
  - Karşılaştırma tablosu
  - 5 soruluk SSS bölümü (FAQ Schema)
  - Article + BreadcrumbList Schema
  - WhatsApp CTA (orta + alt)
  - 15+ iç bağlantı (internal link) mevcut blog yazılarına
- [x] 8 mevcut blog sayfasına geri bağlantı (backlink) eklendi:
  - BatikTirnakEvdeBlog, AyaktaKizariklikBlog, NasirdaSiyahNoktalarBlog
  - DiyabetAyakBlog, CocukAyakSagligiBlog, TopukDikeniBlog
  - NasirSigilBlog, AyakAgrisiNedenOlurBlog, AyaktaYanmaHissiBlog
- [x] blog_content.js rehber girdisi eklendi (ilk sırada)
- [x] sitemap.xml güncellendi
- [x] App.js route eklendi

## Backlog
- [ ] GitHub'a push
- [ ] Production deploy
- [ ] Google AdSense yeniden başvuru
