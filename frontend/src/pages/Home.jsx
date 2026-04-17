import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Sparkles, ShieldCheck, Heart, Scissors, CircleDot, Zap, BookOpen, Check, Star, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { services, whyChooseUs, galleryImages, blogPosts, products, faqData } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import OptimizedImage from '../components/OptimizedImage';
import HeroSlider from '../components/HeroSlider';
import PartnerSection from '../components/PartnerSection';

// FAQ Item Component
const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">
          {faq.question}
        </h3>
        {isOpen ? (
          <ChevronUp className="text-blue-700 flex-shrink-0" size={24} />
        ) : (
          <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-700 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
};

const iconMap = {
  Award, Sparkles, ShieldCheck, Heart, Scissors, CircleDot, Zap
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Ankara Podolog | Medipodo Ayak Sağlığı ve Medikal Ayak Bakımı</title>
        <meta name="description" content="Ankara'da profesyonel podoloji hizmetleri. Batık tırnak, tırnak mantarı, nasır bakımı ve medikal ayak bakımı. Uzman podolog kadromuzla hizmetinizdeyiz." />
        <link rel="canonical" href="https://medipodo.com/" />
        
        {/* Open Graph Meta Tags - WhatsApp, Facebook, LinkedIn önizlemesi için */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ankara Podolog | Medipodo Ayak Sağlığı ve Medikal Ayak Bakımı" />
        <meta property="og:description" content="Ankara'da profesyonel podoloji hizmetleri. Batık tırnak, tırnak mantarı, nasır bakımı ve medikal ayak bakımı." />
        <meta property="og:image" content="https://medipodo.com/images/medipodo-og-home-v2.jpg" />
        <meta property="og:url" content="https://medipodo.com/" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ankara Podolog | Medipodo Ayak Sağlığı ve Medikal Ayak Bakımı" />
        <meta name="twitter:description" content="Ankara'da profesyonel podoloji hizmetleri. Batık tırnak, tırnak mantarı, nasır bakımı." />
        <meta name="twitter:image" content="https://medipodo.com/images/medipodo-og-home-v2.jpg" />
      </Helmet>
      <div className="min-h-screen">
        {/* SEO H1 - Görsel olarak gizli ama erişilebilir */}
        <h1 className="sr-only">Ankara Podolog | Medipodo Ayak Sağlığı Merkezi</h1>
        
        {/* Hero Slider */}
        <HeroSlider />

      {/* En Çok Okunanlar - Popular Blog Posts */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
              <BookOpen className="text-blue-700" size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">En Çok Okunanlar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Okuyucularımızın en beğendiği ayak sağlığı rehberleri
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(6, 12).map((post) => (
              <Card key={post.id} className="hover:shadow-xl transition-all hover:-translate-y-1 bg-white border-0 shadow-md">
                <CardContent className="p-0">
                  <Link to={post.customUrl || `/blog/${post.slug}`} className="block">
                    <div className="relative aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Popüler
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="p-5">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link to={post.customUrl || `/blog/${post.slug}`}>
                      <h3 className="text-lg font-semibold text-blue-950 mb-2 line-clamp-2 hover:text-blue-700 transition-colors">{post.title}</h3>
                    </Link>
                    <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Neden Medipodo?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ayak sağlığınız için en iyi hizmeti sunmak için burayız
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <Card key={index} className="border-2 hover:border-blue-300 transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-blue-700" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-950 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* İstatistikler - Güven Sinyali */}
      <section className="py-12 bg-gradient-to-r from-blue-900 to-blue-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1500+</div>
              <div className="text-blue-200 text-sm md:text-base">Mutlu Müşteri</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
              <div className="text-blue-200 text-sm md:text-base">Yıl Deneyim</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5.0</div>
              <div className="text-blue-200 text-sm md:text-base flex items-center justify-center gap-1">
                <Star className="fill-yellow-400 text-yellow-400" size={16} />
                Google Puan
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">%100</div>
              <div className="text-blue-200 text-sm md:text-base">Hijyen Standardı</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Hizmetlerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ayak sağlığınız için kapsamlı profesyonel hizmetler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Card key={service.id} className="hover:shadow-xl transition-all hover:-translate-y-1 bg-white overflow-hidden">
                  <CardContent className="p-0">
                    <Link to={`/hizmet/${service.id}`} className="block">
                      <div className="relative aspect-video overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    </Link>
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="text-blue-700" size={20} />
                        </div>
                        <Link to={`/hizmet/${service.id}`}>
                          <h3 className="text-xl font-semibold text-blue-950 hover:text-blue-700 transition-colors">{service.title}</h3>
                        </Link>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.shortDesc}</p>
                      <Link to={`/hizmet/${service.id}`}>
                        <Button variant="link" className="text-blue-700 p-0 h-auto font-semibold">
                          Detaylı Bilgi
                          <ArrowRight className="ml-1" size={16} />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link to="/hizmetler">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white">
                Tüm Hizmetleri Görün
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Müşteri Yorumları - Google Reviews */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-yellow-400 text-yellow-400" size={28} />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Danışanlarımız Ne Diyor?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Google'da <strong>5.0</strong> puan ve <strong>50+ yorum</strong> ile değerlendirilen hizmetlerimiz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Yorum 1 - Yadenur Duran */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-yellow-400 text-yellow-400" size={18} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Serdar Bey'e geliyorum 3 aydır, gerçekten işinin ehli çok bilgili ve özenerek çalışıyor. Ortam da çok temiz, herkes sıcakkanlı ve dürüst çalışıyorlar."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-lg">Y</span>
                </div>
                <div>
                  <div className="font-semibold text-blue-950">Yadenur D.</div>
                  <div className="text-sm text-gray-500">4 ay önce • Google</div>
                </div>
              </div>
            </div>

            {/* Yorum 2 - Emmi GÜLENÇ */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-yellow-400 text-yellow-400" size={18} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Bağlıca'da podolog Serdar Bey'e geldim bugün. Alçıda uzun süre kalan ayağım çok kötü olmuştu, sağolsun Serdar Bey pamuk gibi yaptı. Ellerinize sağlık!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-bold text-lg">E</span>
                </div>
                <div>
                  <div className="font-semibold text-blue-950">Emmi G.</div>
                  <div className="text-sm text-gray-500">3 ay önce • Google</div>
                </div>
              </div>
            </div>

            {/* Yorum 3 - Özge Zengin */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-yellow-400 text-yellow-400" size={18} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Senelerdir süregelen ayaklarıma olan nefretimi gerçekten Serdar Bey sayesinde yendim! Tüm ekip inanılmaz samimi ve güler yüzle severek işlerini yapıyorlar."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-700 font-bold text-lg">Ö</span>
                </div>
                <div>
                  <div className="font-semibold text-blue-950">Özge Z.</div>
                  <div className="text-sm text-gray-500">9 ay önce • Google</div>
                </div>
              </div>
            </div>

            {/* Yorum 4 - Emine Ezgi Aral */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-yellow-400 text-yellow-400" size={18} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Sadece manikür pediküre gitmiştim, medikal ayak bakım yaptıklarını öğrendim. Batık tırnağım vardı ondan kurtuldum ve çok rahatladım. Profesyonel hizmet!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-700 font-bold text-lg">E</span>
                </div>
                <div>
                  <div className="font-semibold text-blue-950">Emine E.</div>
                  <div className="text-sm text-gray-500">5 ay önce • Google</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <a 
              href="https://www.google.com/maps/place/Medipodo+Ba%C4%9Fl%C4%B1ca+Ayak+Bak%C4%B1m%C4%B1/@39.8969286,32.6455704,17z" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              Tüm 50+ Google Yorumunu Gör
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Önce & Sonra</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Profesyonel bakım işlemlerimizin başarılı sonuçları
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.slice(0, 3).map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <OptimizedImage
                      src={item.before}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-blue-950 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/galeri">
              <Button size="lg" variant="outline" className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50">
                Tüm Galeriyi Görün
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Ayak Analizi CTA Banner */}
      <section className="py-12 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="text-6xl mb-4 inline-block animate-bounce">🦶</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ayaklarınızı Analiz Edin
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              6 basit soruyla ayak sağlığınızı analiz edin ve size özel PediZone ürün önerisi alın
            </p>
            <Link to="/ayak-analizi">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                🎯 Hemen Analiz Et
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <p className="text-white/70 text-sm mt-4">
              ✓ Ücretsiz  ✓ 2 dakika  ✓ Kişiselleştirilmiş sonuç
            </p>
          </div>
        </div>
      </section>

      {/* AyakTakip App Promotion */}
      <section className="py-8 md:py-16 bg-white" data-testid="ayaktakip-section">
        <div className="lg:container lg:mx-auto lg:px-4">
          <div className="max-w-7xl mx-auto">
            {/* Mobile: Stack vertically, Desktop: Side by side */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
              {/* App Image - Full width edge-to-edge on mobile, 65% on desktop */}
              <div className="w-full lg:w-2/3">
                <a 
                  href="https://ayaktakip.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block transform hover:scale-[1.02] transition-transform duration-300"
                  data-testid="ayaktakip-app-link"
                >
                  <img 
                    src="/images/ayaktakip-app.webp" 
                    alt="AyakTakip Mobil Uygulaması" 
                    className="w-full lg:rounded-2xl shadow-2xl"
                  />
                </a>
              </div>

              {/* Content - Below image on mobile, 35% on desktop */}
              <div className="w-full lg:w-1/3 px-4 lg:px-0">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
                  Ayak sağlığınızı düzenli takip edin
                </h2>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong className="text-blue-900">AyakTakip</strong>, ayak sağlığını takip etmek isteyen kullanıcılar için geliştirilmiş pratik bir mobil uygulamadır. Günlük gözlemlerinizi kaydedebilir, ayak durumunuzdaki değişimleri düzenli olarak izleyebilirsiniz.
                  </p>
                  
                  <p>
                    Diyabetik ayak takibi ve genel ayak bakımı gözlemleri için uygun olan uygulama ile yeni oluşan durumları fark edebilir, kayıtlarınızı geçmişe dönük inceleyebilirsiniz. Ayrıca oluşturduğunuz kayıtları <strong className="text-blue-900">PDF rapor</strong> olarak dışa aktarabilirsiniz.
                  </p>
                  
                  <p className="text-sm text-gray-500 italic">
                    Ayak sağlığı takibini kolaylaştırmak için tasarlanmıştır. Tıbbi teşhis yerine geçmez, takip amaçlıdır.
                  </p>
                </div>

               <div className="mt-8 text-center lg:text-left">
                  <a 
                    href="https://apps.apple.com/tr/app/ayaktakip/id6759668374?l=tr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    data-testid="ayaktakip-download-btn"
                  >
                    <Button 
                      size="lg" 
                      className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8"
                    >
                      <svg className="mr-2 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      App Store'dan İndir
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Blog & Haberler</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ayak sağlığı hakkında faydalı bilgiler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 6).map((post) => (
              <Card key={post.id} className="hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
                <CardContent className="p-0">
                  <Link to={post.customUrl || `/blog/${post.slug}`} className="block">
                    <div className="relative aspect-video">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link to={post.customUrl || `/blog/${post.slug}`}>
                      <h3 className="text-xl font-semibold text-blue-950 mb-3 line-clamp-2 hover:text-blue-700 transition-colors">{post.title}</h3>
                    </Link>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <Link to={post.customUrl || `/blog/${post.slug}`}>
                      <Button variant="link" className="text-blue-700 p-0 h-auto font-semibold">
                        Devamını Oku
                        <ArrowRight className="ml-1" size={16} />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/blog">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white">
                Tüm Blog Yazıları
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <HelpCircle className="text-blue-700" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
                Aklınızdaki Sorulara Hızlı Cevaplar
              </h2>
              <p className="text-gray-600">
                Ayak sağlığı ve podoloji hakkında en çok merak edilenler
              </p>
            </div>

            {/* First 5 FAQs with Accordion */}
            <div className="space-y-4 mb-8">
              {faqData.slice(0, 5).map((faq) => (
                <FAQItem key={faq.id} faq={faq} />
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center">
              <Link to="/sikca-sorulan-sorular">
                <Button 
                  size="lg" 
                  className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8"
                >
                  <HelpCircle className="mr-2" size={20} />
                  Tüm Sık Sorulan Sorular İçin Tıklayın
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
        
      {/* SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6 text-center">
              Ankara Podolog Hizmetleri
            </h2>

            <div className="space-y-4 text-gray-700 leading-8 text-base md:text-lg">
              <p>
                Medipodo Ankara podoloji merkezi olarak ayak sağlığına yönelik profesyonel bakım hizmetleri sunmaktayız. Batık tırnak, nasır, tırnak mantarı ve çatlak topuk gibi yaygın ayak problemlerinde podolojik değerlendirme ve düzenli bakım önerilir. Tüm uygulamalar hijyenik koşullarda ve kişiye özel planlama ile gerçekleştirilir.
              </p>

              <p>
                Ayak sağlığı günlük yaşam kalitesini doğrudan etkileyen önemli bir faktördür. Uzun süre ayakta kalan kişiler, sporcular ve diyabet gibi özel durumlara sahip bireyler için düzenli ayak bakımı takip önerilir. Medipodo olarak amacımız, ayak problemlerinin ilerlemesini önlemeye yönelik destekleyici bakım sunmaktır.
              </p>

              <p>
                Sunulan hizmetler arasında medikal ayak bakımı, batık tırnak uygulamaları, nasır bakımı ve tırnak mantarı takibi yer alır. Bu içerikler bilgilendirme amaçlıdır ve tıbbi teşhis yerine geçmez. Gerekli durumlarda ilgili sağlık uzmanına yönlendirme yapılır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Podoloji Nedir? - Bilgilendirici SEO Bölümü */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
                Podoloji Nedir?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ayak sağlığı hakkında bilmeniz gerekenler
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sol Kolon */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                  <h3 className="text-xl font-semibold text-blue-950 mb-3">Podoloji Tanımı</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Podoloji, ayak ve tırnak sağlığının korunması, bakımı ve sorunlarının önlenmesiyle ilgilenen sağlık bilimidir. Cerrahi olmayan medikal yöntemlerle batık tırnak, tırnak mantarı, nasır, çatlak topuk ve diyabetik ayak bakımı gibi sorunlara uzun süreli çözümler sunar.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-600">
                  <h3 className="text-xl font-semibold text-blue-950 mb-3">Podolog Ne Yapar?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Podolog, üniversitelerin Podoloji Programı'ndan mezun olan, bireylerin ayak sağlığının korunması ve bakımına yönelik hizmet veren sağlık teknikeridir. Steril ortamda profesyonel ekipmanlarla ayak ve tırnak bakımı gerçekleştirir.
                  </p>
                </div>
              </div>

              {/* Sağ Kolon */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-600">
                  <h3 className="text-xl font-semibold text-blue-950 mb-3">Hangi Sorunlarda Başvurulur?</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Batık tırnak (tırnak batması) şikayetleri</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Tırnak mantarı ve ayak mantarı</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Nasır ve plantar siğil</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Çatlak topuk ve aşırı kuruluk</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Diyabetik ayak bakımı</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold text-blue-950 mb-3">Neden Profesyonel Bakım?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Evde yapılan yanlış müdahaleler enfeksiyon riskini artırabilir. Profesyonel podolojik bakım; steril ortam, doğru teknik ve kişiye özel yaklaşım ile güvenli sonuçlar sağlar. Özellikle diyabet hastaları için düzenli kontrol hayati önem taşır.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link to="/sikca-sorulan-sorular">
                <Button size="lg" variant="outline" className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50">
                  <HelpCircle className="mr-2" size={20} />
                  Tüm Sorular ve Cevaplar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
        
      {/* E-Book Section */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/images/ebook/hero-bg.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Book Cover */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
                  <img 
                    src="/images/ebook/cover.webp" 
                    alt="Ayak Bakımı Kılavuzu E-Kitap" 
                    width="1414"
                    height="2000"
                    className="relative w-full max-w-sm rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Right: Content */}
              <div>
                <div className="inline-flex items-center bg-green-500 bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <Star className="text-yellow-400 mr-2" size={20} fill="currentColor" />
                  <span className="text-sm font-semibold">Yeni: Dijital Kılavuz</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ayak Bakımı Kılavuzu
                </h2>
                
                <p className="text-xl text-blue-100 mb-6">
                  Batık Tırnak, Mantar ve Nasır Sorunlarına Uzman Podolog Çözümleri
                </p>

                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 mb-6 border border-white border-opacity-20">
                  <div className="grid grid-cols-3 gap-4 text-center mb-4">
                    <div>
                      <p className="text-3xl font-bold text-white">33</p>
                      <p className="text-sm text-blue-200">Sayfa</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-white">6</p>
                      <p className="text-sm text-blue-200">Bölüm</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-white">$5</p>
                      <p className="text-sm text-blue-200">Fiyat</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Check className="mr-2 text-green-400 flex-shrink-0" size={18} />
                      <span>Evde uygulayabileceğiniz adım adım talimatlar</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="mr-2 text-green-400 flex-shrink-0" size={18} />
                      <span>Uzman podologlar tarafından hazırlandı</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="mr-2 text-green-400 flex-shrink-0" size={18} />
                      <span>Anında indirme - PDF formatında</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/ayak-bakim-kilavuzu">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold shadow-xl w-full sm:w-auto"
                    >
                      <BookOpen className="mr-2" size={20} />
                      Detaylı Bilgi Al
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">PediZone® Ürünlerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Profesyonel ayak bakımı için podolog onaylı ürünler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-all hover:-translate-y-1 bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={product.coverImage} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-sm text-blue-700 font-semibold">{product.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-950 mb-2">{product.shortName}</h3>
                    <p className="text-gray-600 text-sm mb-2">{product.tagline}</p>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="mb-4">
                      <span className="text-sm text-gray-500">Hacim: {product.volume}</span>
                    </div>
                    <Link to={`/urun/${product.slug}`}>
                      <Button variant="link" className="text-blue-700 p-0 h-auto font-semibold w-full justify-start">
                        Ürün Detayı
                        <ArrowRight className="ml-1" size={16} />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ayak Sağlığınız İçin Hemen İletişime Geçin</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Podoloji ekibimiz, ayak sağlığınız için size en uygun bakım planını oluşturmaya hazır.
          </p>
          <Link to="/iletisim">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg">
              Randevu Alın
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <PartnerSection />
      </div>
    </>
  );
};

export default Home;
