# Medipodo Blog – Tırnak Mantarı Bulaşıcı mı? (SEO Güçlendirme)

## Orijinal Problem
`/blog/tirnak-mantari-bulasici-mi` sayfasını URL/slug, layout ve mevcut içeriği bozmadan
SEO (özellikle GSC index), görsel optimizasyonu, içerik güçlendirme ve Google bot
okunurluğu açısından iyileştirmek.

## Mimari / Teknoloji
- React SPA (CRA + craco), react-router-dom
- JSON-LD schema (Helmet) — FAQ + Article
- Hedef dosya: `frontend/src/pages/TirnakMantariBulasiciBlog.jsx`

## Yapılan İyileştirmeler (24 Nisan 2026)
- **Meta optimizasyon**: Title `"Tırnak Mantarı Bulaşıcı mı? Evde Nasıl Geçer + Korunma (2026) | Medipodo"`, description güncellendi, keyword listesi genişletildi.
- **Görsel optimizasyon**: 3 klinik görsel (erken evre / kalınlaşmış / ileri onikomikoz)
  - `<figure>` + `<figcaption>` kullanımı
  - SEO-uyumlu doğal alt text
  - İlk görsel `loading="eager"` + `fetchpriority="high"` (LCP korunur)
  - Diğerleri `loading="lazy"` (performans)
  - `width`/`height` eklendi (CLS önlemi)
- **Podolog Gözlemi** highlight kutusu (Nasıl Bulaşır? altı)
- **Bulaşma Risk Tablosu** (Aynı evde yaşayanlara geçer mi? altı)
- **5 Büyük Hata** blok (Evde korunma altı)
- **FAQ sadeleştirme**: 4 soru, 2–4 cümlelik net cevaplar; SSR'de DOM'da görünür; `sr-only` yedek ile Google bot okunur; FAQ JSON-LD şema korundu.
- **Güven Bloğu**: Podolog Serdar Ceylan yazar kartı + `/kadromuz` linki (E-E-A-T).
- **İç linkler korundu**: `tırnak mantarı tedavisi`, `medikal ayak bakımı`, `diyabetik ayak bakımı`, `randevu alın`, `/kadromuz`.
- **Kırmızı çizgiler**: URL/slug, H1/H2, mevcut içerik, mevcut iç linkler, tasarım KORUNDU.

## Dosya Değişiklikleri
- **Değiştirilen**: `frontend/src/pages/TirnakMantariBulasiciBlog.jsx` (+183 / −23)
- **Eklenen görseller**:
  - `frontend/public/blog-images/tirnak-mantari-bulasici/tirnak-mantari-erken-evre.webp`
  - `frontend/public/blog-images/tirnak-mantari-bulasici/tirnak-mantari-kalinlasmis.jpg`
  - `frontend/public/blog-images/tirnak-mantari-bulasici/tirnak-mantari-ileri-evre.webp`

## Backlog / Next Actions
- GSC'de Request Indexing yapılması
- LCP/CLS ölçümü (PageSpeed Insights – mobil)
- Mevcut 4. görselin (`tirnak-mantari-nasil-gecer.webp`) korunması, istenirse sadeleştirme
- Aynı sayfa yapısı diğer blog sayfalarına şablon olarak uygulanabilir
