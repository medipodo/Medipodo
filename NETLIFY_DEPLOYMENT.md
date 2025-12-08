# Netlify Deployment Guide - Medipodo Web Sitesi

## Yöntem 1: GitHub üzerinden Deploy (ÖNERİLEN)

### Adım 1: GitHub'a Push Yapın
```bash
cd /app
git init
git add .
git commit -m "Initial commit - Medipodo website"
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

### Adım 2: Netlify'da Site Oluşturun
1. https://app.netlify.com/ adresine gidin
2. "Add new site" > "Import an existing project" seçin
3. GitHub'ı seçin ve repository'nizi bulun
4. Build ayarlarını yapın:

**Build Settings:**
```
Base directory: frontend
Build command: yarn build
Publish directory: frontend/build
```

### Adım 3: Environment Variables Ekleyin
Netlify Dashboard → Site settings → Environment variables:

```
REACT_APP_BACKEND_URL = https://podiatry-blog.preview.emergentagent.com
```

(Veya kendi backend URL'nizi kullanın)

### Adım 4: Deploy
"Deploy site" butonuna tıklayın. Build otomatik başlar.

---

## Yöntem 2: Manuel ZIP Upload

### Adım 1: Build Oluşturun
```bash
cd /app/frontend
yarn install
yarn build
```

### Adım 2: Build Klasörünü ZIP'leyin
```bash
cd build
zip -r medipodo-build.zip .
```

### Adım 3: Netlify'a Upload Edin
1. https://app.netlify.com/drop adresine gidin
2. `medipodo-build.zip` dosyasını sürükleyip bırakın

**ÖNEMLİ:** ZIP yöntemi ile `_redirects` dosyası build klasöründe olmalı (public klasöründen otomatik kopyalanır).

---

## Yöntem 3: Netlify CLI

### Adım 1: Netlify CLI Yükleyin
```bash
npm install -g netlify-cli
```

### Adım 2: Login Yapın
```bash
netlify login
```

### Adım 3: Site Oluşturun ve Deploy Edin
```bash
cd /app/frontend
yarn build
netlify deploy --prod --dir=build
```

---

## Sorun Giderme

### Hata: "Page Not Found" (404)
**Neden:** React Router için redirect ayarları eksik.

**Çözüm:** `public/_redirects` dosyası oluşturuldu. Bu dosya build sırasında `build` klasörüne kopyalanır.

İçerik:
```
/*    /index.html   200
```

### Hata: "Build Failed"
**Neden:** Dependencies yüklenemedi veya build komutu başarısız.

**Çözüm:** 
1. Local'de build test edin:
```bash
cd /app/frontend
yarn install
yarn build
```

2. Hata varsa, console log'ları kontrol edin.

### Hata: Görseller Yüklenmiyor
**Neden:** Görseller yanlış path'te veya eksik.

**Çözüm:** 
- Tüm görseller `/app/frontend/public/images/` klasöründe olmalı
- Build sırasında otomatik olarak kopyalanırlar

### Backend API Çağrıları Çalışmıyor
**Neden:** REACT_APP_BACKEND_URL environment variable eksik.

**Çözüm:**
Netlify'da environment variable ekleyin veya `.env` dosyası oluşturun:
```
REACT_APP_BACKEND_URL=https://your-backend-url.com
```

---

## Kontrol Listesi

Build öncesi kontrol edin:

- [ ] `public/_redirects` dosyası var mı?
- [ ] `netlify.toml` dosyası var mı?
- [ ] Tüm görseller `public/images/` klasöründe mi?
- [ ] `package.json` build script'i doğru mu?
- [ ] Environment variables tanımlı mı?
- [ ] Local'de `yarn build` çalışıyor mu?

---

## Netlify Build Log'larını Kontrol Etme

Deploy sırasında hata alırsanız:

1. Netlify Dashboard → Deploys sekmesi
2. Başarısız deploy'a tıklayın
3. "Deploy log" bölümünü açın
4. Hata mesajlarını okuyun

Yaygın hatalar:
- `Module not found`: Eksik dependency
- `Failed to compile`: Syntax hatası
- `Command failed`: Build komutu yanlış

---

## Önemli Notlar

1. **Her push otomatik deploy tetikler** (GitHub method kullanıyorsanız)
2. **Build süresi:** ~2-5 dakika
3. **Custom domain:** Netlify dashboard'dan ekleyebilirsiniz
4. **HTTPS:** Otomatik olarak etkinleştirilir
5. **CDN:** Netlify otomatik CDN sağlar

---

## Yardıma mı ihtiyacınız var?

Hata alırsanız:
1. Build log'ları kontrol edin
2. Browser console'da hata var mı bakın (F12)
3. Network tab'da API istekleri başarılı mı kontrol edin
