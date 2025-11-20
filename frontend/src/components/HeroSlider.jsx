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
    <div className="relative h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <p className="text-blue-300 font-semibold mb-2 text-sm md:text-base uppercase tracking-wider">
                  {slide.subtitle}
                </p>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-200">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to={slide.ctaLink}>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                      {slide.cta}
                    </Button>
                  </Link>
                  <a href="tel:905456569747">
                    <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg">
                      <Phone className="mr-2" size={20} />
                      Hemen Ara
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

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
