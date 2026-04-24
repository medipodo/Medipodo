import React from 'react';
import OptimizedImage from './OptimizedImage';

/**
 * Galeri Sayfası - Before/After Görselleri
 * Optimize edilmiş WebP görselleri kullanır
 */
const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: '/images/gallery/g1.jpg',
      alt: 'Topuk Çatlakları Tedavisi - Önce ve Sonra | Medipodo Ayak Bakımı',
      title: 'Topuk Çatlakları Tedavisi',
      description: 'Profesyonel ayak bakımı ile topuk çatlakları tedavisi'
    },
    {
      id: 2,
      src: '/images/gallery/g2.jpg',
      alt: 'Ayak Tabanı Bakımı - Önce ve Sonra | Medipodo Podoloji',
      title: 'Ayak Tabanı Bakımı',
      description: 'Medikal ayak bakımı ve nasır tedavisi sonuçları'
    },
    {
      id: 3,
      src: '/images/gallery/g3.jpg',
      alt: 'Batık Tırnak Tedavisi - Önce ve Sonra | Ankara Podolog',
      title: 'Batık Tırnak Tedavisi',
      description: 'Profesyonel batık tırnak tedavisi ve sonuçları'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Tedavi Sonuçlarımız
        </h1>
        <p className="text-lg text-gray-600">
          Profesyonel ayak bakımı ve podoloji hizmetlerimizle elde edilen başarılı sonuçlar
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryImages.map((image) => (
          <div 
            key={image.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {image.title}
              </h3>
              <p className="text-gray-600">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Before/After Açıklaması */}
      <div className="mt-16 bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Profesyonel Ayak Bakımı Farkı
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">
              %95+
            </div>
            <p className="text-gray-700">
              Hasta Memnuniyeti
            </p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">
              15+
            </div>
            <p className="text-gray-700">
              Yıllık Deneyim
            </p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">
              10,000+
            </div>
            <p className="text-gray-700">
              Başarılı Tedavi
            </p>
          </div>
        </div>
      </div>

      {/* SEO İçin Ek Bilgi */}
      <div className="mt-12 prose max-w-none">
        <h2 className="text-2xl font-bold mb-4">
          Medipodo Ayak Sağlığı Merkezi
        </h2>
        <p className="text-gray-600">
          Ankara'nın güvenilir podoloji ve ayak sağlığı merkezi olarak, 
          profesyonel medikal ayak bakımı hizmetleri sunuyoruz. 
          Batık tırnak tedavisi, nasır tedavisi, topuk çatlakları bakımı, 
          ayak mantarı tedavisi ve daha birçok alanda uzman kadromuzla hizmetinizdeyiz.
        </p>
      </div>
    </div>
  );
};

export default Gallery;
