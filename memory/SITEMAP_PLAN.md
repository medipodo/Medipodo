# Sitemap Bakım Planı — Medipodo
_Son güncelleme: 2026-04-24_

Bu belge, sitemap'inizi Emergent'a girmeden nasıl güncel tutabileceğinizi anlatır.

---

## 🎯 Amaç
- Yeni bir blog yazısı eklendiğinde sitemap güncellensin
- Mevcut yazı güncellendiğinde `lastmod` değişsin
- Google'a her zaman taze ve doğru bilgi gitsin

---

## 🧭 OPSİYON A — GitHub üzerinden manuel (en basit, teknik bilgi gerektirmez)

**Ne zaman kullan?** Yılda 3-5 blog giriyorsanız yeterli. Hızlı.

### Yeni blog eklediğinde:
1. GitHub'da `frontend/public/sitemap.xml` dosyasını aç
2. Aşağıdaki şablonu uygun yere ekle (tarih bugünün tarihi):

```xml
  <url>
    <loc>https://medipodo.com/blog/YENI-BLOG-SLUG-BURAYA</loc>
    <lastmod>YYYY-MM-DD</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
```

3. Eğer blog'da **medipodo.com üzerinde host edilen** özgün görseller varsa, aynı `<url>` içine:

```xml
    <image:image>
      <image:loc>https://medipodo.com/blog-images/KLASOR/DOSYA.webp</image:loc>
      <image:title>Query-odaklı kısa başlık (örn: X nasıl görünür)</image:title>
      <image:caption>Alt-text benzeri açıklama</image:caption>
    </image:image>
```

4. Commit + push → Google 1-2 gün içinde fark eder

### Mevcut blog güncellendiğinde:
- Sadece o URL'in `<lastmod>` tarihini bugüne çek — hepsi bu
- **UYARI**: Güncellemediğiniz yazıların tarihini DEĞİŞTİRMEYİN (Google "spamming lastmod" olarak algılar)

---

## 🧭 OPSİYON B — Emergent'a tek seferlik prompt (yarı otomatik, tavsiye edilen)

**Ne zaman kullan?** Ayda 2+ blog giriyorsanız bu yöntem verimlidir.

Yeni blog eklediğinizde veya önemli bir güncelleme yaptığınızda aşağıdaki prompt'u yeni bir Emergent sohbetine yapıştırın:

```
Medipodo sitesinin sitemap'ini güncelle.

Bugün yaptığım değişiklikler:
- [BURAYA değişen/eklenen sayfaları yaz, örn:
  - Yeni blog eklendi: /blog/yeni-blog-slug
  - Güncellenen blog: /blog/mevcut-blog-slug
  - Ana sayfa değişikliği: evet/hayır
]

Yeni blog'un görselleri (varsa) medipodo.com domain'inde mi?
- [ ] Evet → hangi klasör: /blog-images/xxx/
- [ ] Hayır, CDN'den (customer-assets.emergentagent.com) → sitemap'e EKLEME

Kurallar:
1. frontend/public/sitemap.xml dosyasını güncelle
2. Sadece değişen/eklenen URL'lerin <lastmod>'unu bugüne çek
3. Diğer URL'lerin tarihine DOKUNMA (sahte tarih = Google cezası)
4. Yeni blog için: <changefreq>monthly</changefreq> + <priority>0.6</priority>
5. Görseller varsa image:image entry ekle (aynı domain şartı!)
6. Image title'ları query-odaklı yap: "X nasıl görünür", "Y nelerdir" gibi
7. XML'in geçerli kalmasını sağla, namespace'leri koru
8. Sitemap'i bölme (50.000 URL altındayız — gereksiz)
9. priority/changefreq zaten pattern'e göre atanmış — değiştirme

Çıktı: Python ile doğrulanmış XML + diff bana göster.
```

---

## 🧭 OPSİYON C — Tamamen otomatik (gelecek için öneri — henüz YOK)

Eğer blog yayın sıklığınız yüksek hale gelirse (ayda 5+ blog):

**Kurulabilecek otomasyon**:
- `scripts/generate-sitemap.mjs` → Node.js script
- Her `yarn build` sırasında otomatik çalışır
- `blog_content.js` + `App.js` route'ları tarar, sitemap'i baştan oluşturur
- GitHub Actions ile her merge'den sonra tetiklenir

**Kurulum maliyeti**: ~1-2 saat bir developer zamanı
**Fayda**: Siz bir daha sitemap hakkında düşünmezsiniz

İsterseniz ileride ben (veya başka bir Emergent sohbeti) bunu sizin için kurabilir.

---

## 📋 Kritik Kırmızı Çizgiler (hiçbir zaman yapma)

- ❌ Güncellemediğin sayfanın `lastmod`'unu bugüne çekme
- ❌ Harici CDN (customer-assets.emergentagent.com) görsellerini sitemap'e koyma
- ❌ Yaşayan URL'leri (backlink/ranking'i olan) değiştirme — `tirnakbatmasi` gibi kalsın
- ❌ Sitemap'i 50.000 URL'den az olduğu için bölme
- ❌ `/blog` changefreq'ini `daily` yapma (gerçekten her gün post atmıyorsan)

## ✅ Her zaman kontrol et

- Yeni URL'in App.js'de route'u var mı?
- URL medipodo.com domain'inde mi (ön-prod/staging değil)?
- Görsel aynı domain'de mi?
- `yarn build` hata veriyor mu? (sitemap public/ altında, build'i etkilemez ama yine de)
- GSC → Sitemaps → son "Refresh" tarihini kontrol et (7 günü geçmesin)

---

## 📊 Mevcut Durum (2026-04-24 itibarıyla)

| Metrik | Değer |
|--------|-------|
| Toplam URL | 53 |
| Toplam image entry | 12 |
| Image sitemap bulunan blog sayısı | 4 |
| XML geçerli | ✓ |
| En eski lastmod | ~5-6 ay (temiz sınırda) |
| Gelecek için büyüme kapasitesi | 49.947 URL daha ekleyebilir |

## 🎯 Öneri Roadmap (kademeli genişleme)

1. **Şu an → 1 ay**: Mevcut sitemap optimum. Yeni blog eklerken Opsiyon A/B
2. **1-3 ay**: 2-3 yüksek performanslı blog'a daha image sitemap ekle (BSBantBlog, CatlakTopukBlog gibi)
3. **3-6 ay**: Blog sayısı 60+'ya ulaştığında sitemap'i bölme düşünebiliriz (yine gerekmeyebilir)
4. **6+ ay**: Otomasyon (Opsiyon C) kurulumunu değerlendir
