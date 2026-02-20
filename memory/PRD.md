# Medipodo - Podoloji Merkezi Web Sitesi

## Proje Özeti
Medipodo, Ankara Bağlıca'da faaliyet gösteren bir podoloji (ayak sağlığı) merkezi için geliştirilmiş statik bir React web sitesidir.

## Teknik Altyapı
- **Frontend**: React + Tailwind CSS
- **Routing**: react-router-dom
- **SEO**: react-helmet, manuel sitemap.xml yönetimi
- **Deployment**: Netlify (statik site)
- **İçerik Yönetimi**: Hardcoded data (`blog_content.js`)

## Tamamlanan Özellikler

### Blog & İçerik Sistemi
- 22+ SEO-optimize edilmiş blog yazısı
- `publishDate` (ilk yayın tarihi) ve `updatedAt` (içerik güncelleme tarihi) ayrımı
- `customUrl` desteği ile blog dışı sayfalara yönlendirme
- FAQ schema desteği

### SEO Altyapısı
- Manuel sitemap.xml yönetimi (`lastmod` = `updatedAt`)
- 301 redirect desteği (`_redirects` dosyası)
- Meta tag yönetimi (react-helmet)
- Schema.org yapılandırılmış veri desteği

### Sayfalar
- Ana sayfa
- Hizmetler (Batık Tırnak, Tırnak Mantarı, Nasır, vb.)
- Blog listesi ve detay sayfaları
- Ürün sayfaları (PediZone serisi)
- Lokasyon bazlı landing page'ler (Bağlıca Podolog Fiyatları)
- Kurumsal sayfalar (Hakkımızda, İletişim, SSS, vb.)

## Son Güncelleme (Aralık 2025)

### Yapılan Değişiklikler
1. **`blog_content.js` güncellendi:**
   - Tüm blog postlarına `updatedAt` alanı eklendi
   - `date` (publishDate) ve `updatedAt` ayrımı yapıldı
   - Açıklayıcı yorum satırları eklendi

2. **`sitemap.xml` güncellendi:**
   - `lastmod` değerleri `updatedAt` değerlerine göre düzenlendi
   - Tutarsız tarihler düzeltildi

### Tarih Yönetimi Kuralları
- `date` (publishDate): İlk yayınlanma tarihi, asla değişmez
- `updatedAt`: Sadece içerik metni değiştiğinde güncellenir
- Sitemap `lastmod` = `updatedAt`
- Kod refactor, deploy veya stil değişikliği `updatedAt`'i DEĞİŞTİRMEZ

## Backlog / Gelecek Görevler

### P1 - Teknik İyileştirmeler
- [ ] `customUrl` routing mantığının helper fonksiyona taşınması (DRY)
- [ ] Content management için CMS entegrasyonu değerlendirmesi

### P2 - İçerik
- [ ] Yeni blog yazıları
- [ ] Yeni lokasyon bazlı landing page'ler

## Dosya Yapısı
```
/app/frontend/
├── public/
│   ├── _redirects          # 301 yönlendirmeler
│   └── sitemap.xml         # SEO sitemap
└── src/
    ├── blog_content.js     # Blog içerik verisi
    ├── App.js              # Router
    └── pages/              # Sayfa bileşenleri
```

## Notlar
- Kullanıcının tercih ettiği dil: Türkçe
- SEO konusunda detaylı bilgiye sahip kullanıcı
