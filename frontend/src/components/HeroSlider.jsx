import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      image: '/images/slider/medipodo.jpg',
      title: 'Medipodo Ayak Sağlığı',
      subtitle: 'Profesyonel Podoloji Hizmetleri',
      description: 'Batık tırnak, tırnak mantarı ve ayak bakımı konusunda uzman ekibimizle yanınızdayız',
      cta: 'Randevu Alın',
      ctaLink: '/iletisim'
    },
    {
      image: '/images/slider/ayakbakimi.jpg',
      title: 'Medikal Ayak Bakımı',
      subtitle: 'Sağlıklı Ayaklar İçin',
      description: 'Hijyenik koşullarda profesyonel ayak bakımı ve tedavi hizmetleri',
      cta: 'Hizmetlerimiz',
      ctaLink: '/hizmetler'
    },
    {
      image: '/images/slider/tirnak-teli.jpg',
      title: 'Batık Tırnak Tedavisi',
      subtitle: 'Ağrısız ve Etkili Çözüm',
      description: 'Ortoniksi uygulaması ile batık tırnak sorunlarınıza kalıcı çözüm',
      cta: 'Detaylı Bilgi',
      ctaLink: '/hizmet/batik-tirnak'
    },
    {
      image: '/images/slider/podolog.jpg',
      title: 'Uzman Podolog Kadrosu',
      subtitle: 'Deneyim ve Güvenilirlik',
      description: 'Alanında uzman podologlarımız ile profesyonel hizmet garantisi',
      cta: 'Ekibimiz',
      ctaLink: '/ekip'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full overflow-hidden bg-white">
      <div className="relative w-full">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${index === currentSlide ? 'block' : 'hidden'}`}
          >
            {/* Background Image - Full Width */}
            <div className="relative w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-auto"
              />
              
              {/* Content Overlay - Bottom Center */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent py-12 md:py-16">
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl mx-auto text-center text-white">
                    <p className="text-blue-300 font-semibold mb-2 text-xs md:text-sm uppercase tracking-wider">
                      {slide.subtitle}
                    </p>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-sm md:text-lg mb-6 text-gray-200 max-w-2xl mx-auto">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <Link to={slide.ctaLink}>
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 text-base w-full sm:w-auto">
                          {slide.cta}
                        </Button>
                      </Link>
                      <a href="tel:905456569747">
                        <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-5 text-base w-full sm:w-auto">
                          <Phone className="mr-2" size={18} />
                          Hemen Ara
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
