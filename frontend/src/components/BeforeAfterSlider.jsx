import React, { useState } from 'react';
import OptimizedImage from './OptimizedImage';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Before/After Slider Komponenti
 * Anasayfada tedavi sonuçlarını gösterir
 */
const BeforeAfterSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/images/gallery/g1.jpg',
      alt: 'Topuk Çatlakları Tedavisi - Medipodo',
      title: 'Topuk Çatlakları',
      subtitle: 'Profesyonel Bakım ile İnanılmaz Sonuçlar'
    },
    {
      id: 2,
      image: '/images/gallery/g2.jpg',
      alt: 'Ayak Bakımı - Medipodo Podoloji',
      title: 'Medikal Ayak Bakımı',
      subtitle: 'Sağlıklı ve Güzel Ayaklar'
    },
    {
      id: 3,
      image: '/images/gallery/g3.jpg',
      alt: 'Batık Tırnak Tedavisi - Ankara',
      title: 'Batık Tırnak Tedavisi',
      subtitle: 'Ağrısız ve Etkili Çözüm'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Tedavi Sonuçlarımız
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Profesyonel ayak bakımı ve podoloji hizmetlerimizle elde edilen 
            gerçek sonuçları görün
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Ana Görsel */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="relative aspect-[16/9] md:aspect-[21/9]">
              <OptimizedImage
                src={slides[currentSlide].image}
                alt={slides[currentSlide].alt}
                className="w-full h-full object-cover"
                loading="eager"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Metin Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-lg md:text-xl opacity-90">
                  {slides[currentSlide].subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Sol Ok */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Önceki slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          {/* Sağ Ok */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Sonraki slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Slide ${index + 1}'e git`}
              />
            ))}
          </div>
        </div>

        {/* CTA Butonları */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a
            href="/galeri"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all hover:shadow-xl hover:scale-105"
          >
            Tüm Sonuçları Görün
          </a>
          <a
            href="/randevu"
            className="px-8 py-4 bg-white hover:bg-gray-50 text-blue-600 font-semibold rounded-lg shadow-lg border-2 border-blue-600 transition-all hover:shadow-xl hover:scale-105"
          >
            Randevu Alın
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
