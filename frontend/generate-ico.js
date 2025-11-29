const fs = require('fs');
const path = require('path');

// SVG dosyasını oku
const svgContent = fs.readFileSync(path.join(__dirname, 'public', 'favicon.svg'), 'utf8');

console.log('Favicon SVG kullanılıyor. Modern tarayıcılar SVG destekliyor.');
console.log('Eski tarayıcılar için favicon.ico ayrı oluşturulmalı.');
