const fs = require('fs');
const path = require('path');

// SVG favicon zaten var, sadece manifest.json oluşturalım
const manifest = {
  "short_name": "Medipodo",
  "name": "Medipodo Ayak Sağlığı Merkezi",
  "description": "Profesyonel Podoloji ve Ayak Bakımı Hizmetleri",
  "icons": [
    {
      "src": "favicon.svg",
      "type": "image/svg+xml",
      "sizes": "any"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#1e3a8a",
  "background_color": "#ffffff"
};

fs.writeFileSync(
  path.join(__dirname, 'public', 'manifest.json'),
  JSON.stringify(manifest, null, 2)
);

console.log('manifest.json created!');
