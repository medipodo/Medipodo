import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full bg-white mt-16 md:mt-20">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${index === currentSlide ? 'block' : 'hidden'}`}
        >
          <div className="relative w-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-auto max-h-[400px] md:max-h-[600px] object-cover"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent flex items-end">
              <div className="w-full pb-8 md:pb-16">
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl mx-auto text-center text-white">
                    <p className="text-blue-300 font-semibold mb-1 md:mb-2 text-xs md:text-sm uppercase tracking-wider">
                      {slide.subtitle}
                    </p>
                    <h1 className="text-xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xs md:text-lg mb-4 md:mb-6 text-gray-200">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3">
                      <Link to={slide.ctaLink} className="w-full sm:w-auto">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 md:px-8 md:py-4 text-sm md:text-base w-full">
                          {slide.cta}
                        </Button>
                      </Link>
                      <a href="tel:905456569747" className="w-full sm:w-auto">
                        <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base w-full">
                          <Phone className="mr-2" size={16} />
                          Hemen Ara
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-6'
                : 'bg-white/50 hover:bg-white/75 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
