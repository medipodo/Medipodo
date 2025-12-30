import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0);

  // Desktop slides (Medikal Ayak Bakımı ve Uzman Podolog hariç)
  const desktopSlides = [
    {
      image: '/images/slider/medipodo.jpg',
      title: 'Medipodo Ayak Sağlığı',
      subtitle: 'Profesyonel Podoloji Hizmetleri',
      description: 'Batık tırnak, tırnak mantarı ve ayak bakımı konusunda uzman ekibimizle yanınızdayız',
      cta: 'Randevu Alın',
      ctaLink: '/iletisim'
    },
    {
      image: '/images/slider/ayakbakimi.webp',
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
    }
  ];

  // Mobile slides (tüm slider'lar dahil)
  const mobileSlides = [
    {
      mobileImage: '/images/slider/mobile/ankara-podolog.jpg',
      title: 'Medipodo Ayak Sağlığı',
      subtitle: 'Profesyonel Podoloji Hizmetleri',
      description: 'Batık tırnak, tırnak mantarı ve ayak bakımı konusunda uzman ekibimizle yanınızdayız',
      cta: 'Randevu Alın',
      ctaLink: '/iletisim'
    },
    {
      mobileImage: '/images/slider/mobile/6.webp',
      title: 'Medikal Ayak Bakımı',
      subtitle: 'Sağlıklı Ayaklar İçin',
      description: 'Hijyenik koşullarda profesyonel ayak bakımı ve tedavi hizmetleri',
      cta: 'Hizmetlerimiz',
      ctaLink: '/hizmetler'
    },
    {
      mobileImage: '/images/slider/mobile/ortoniksi.webp',
      title: 'Batık Tırnak Tedavisi',
      subtitle: 'Ağrısız ve Etkili Çözüm',
      description: 'Ortoniksi uygulaması ile batık tırnak sorunlarınıza kalıcı çözüm',
      cta: 'Detaylı Bilgi',
      ctaLink: '/hizmet/batik-tirnak'
    },
    {
      mobileImage: '/images/slider/mobile/podolog-serdar-ceylan.webp',
      title: 'Uzman Podolog Kadrosu',
      subtitle: 'Deneyim ve Güvenilirlik',
      description: 'Alanında uzman podologlarımız ile profesyonel hizmet garantisi',
      cta: 'Ekibimiz',
      ctaLink: '/ekip'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % desktopSlides.length);
      setCurrentMobileSlide((prev) => (prev + 1) % mobileSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [desktopSlides.length, mobileSlides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToMobileSlide = (index) => {
    setCurrentMobileSlide(index);
  };

  return (
    <>
      {/* MOBILE VERSION - Optimize Edilmiş Haliyle Kalıyor */}
      <div className="block md:hidden relative w-full bg-gradient-to-r from-blue-900 to-blue-700 pt-20">
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          {mobileSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentMobileSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="relative w-full h-full">
                <img
                  src={slide.mobileImage}
                  alt={slide.title}
                  width="1080"
                  height="1100"
                  className="w-full h-full object-cover"
                  fetchPriority={index === 0 ? "high" : "auto"}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex items-end pb-12">
                  <div className="w-full px-4">
                    <div className="text-center text-white">
                      <p className="text-blue-300 font-semibold mb-1 text-[11px] uppercase tracking-wider">
                        {slide.subtitle}
                      </p>
                      <h2 className="text-2xl font-bold mb-2 leading-tight">
                        {slide.title}
                      </h2>
                      <p className="text-sm mb-5 text-gray-200 px-2">
                        {slide.description}
                      </p>
                      <div className="flex flex-col gap-2 px-4">
                        <Link to={slide.ctaLink} className="w-full">
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-sm w-full">
                            {slide.cta}
                          </Button>
                        </Link>
                        <a href="tel:905456569747" className="w-full">
                          <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 text-sm w-full">
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
          ))}
        </div>

        {/* Mobile Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {mobileSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToMobileSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentMobileSlide
                  ? 'bg-white w-6'
                  : 'bg-white/50 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* DESKTOP VERSION - Sizin Orijinal Yapınız (Genişletilmiş) */}
      <div className="hidden md:block relative w-full bg-white">
        {/* 
          Web görünümü için genişletme: 
          Burada aspect-ratio kullanarak alanı genişletiyoruz (21/9 veya 24/10 gibi).
          Orijinal yapınızdaki container ve metin stillerini koruyoruz.
        */}
        <div className="relative aspect-[21/9] lg:aspect-[24/10] w-full overflow-hidden">
          {desktopSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  width="1920"
                  height="645"
                  className="w-full h-full object-cover"
                  fetchPriority={index === 0 ? "high" : "auto"}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end pb-16">
                  <div className="w-full">
                    <div className="container mx-auto px-4">
                      <div className="max-w-3xl mx-auto text-center text-white">
                        <p className="text-blue-300 font-semibold mb-2 text-sm uppercase tracking-wider">
                          {slide.subtitle}
                        </p>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-3 leading-tight">
                          {slide.title}
                        </h2>
                        <p className="text-lg mb-6 text-gray-200">
                          {slide.description}
                        </p>
                        <div className="flex items-center justify-center gap-3">
                          <Link to={slide.ctaLink}>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-base">
                              {slide.cta}
                            </Button>
                          </Link>
                          <a href="tel:905456569747">
                            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-base">
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
            </div>
          ))}
        </div>

        {/* Desktop Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {desktopSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
