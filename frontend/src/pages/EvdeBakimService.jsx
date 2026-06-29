import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, ChevronDown, ChevronUp, Phone, MapPin, Clock, Shield, Award, Users, Home } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

// FAQ Data
const faqData = [
  {
    question: "Evde medikal ayak bakımı hizmeti nerelere verilmektedir?",
    answer: "Ankara genelinde; Etimesgut, Bağlıca, Yapracık, Eryaman, Batıkent, Çayyolu, Yaşamkent, Yenimahalle, Keçiören, Çankaya, Mamak, Altındağ ve çevre ilçeler dahil olmak üzere geniş bir coğrafyada hizmet vermekteyiz. Hizmet bölgelerimiz hakkında detaylı bilgi almak için bizimle iletişime geçebilirsiniz."
  },
  {
    question: "Evde bakım için randevu nasıl alınır?",
    answer: "Randevu almak için bizi telefonla (0545 656 97 47) arayabilir veya WhatsApp üzerinden mesaj gönderebilirsiniz. Randevular en az 1 gün önceden alınmalıdır. Size uygun tarih ve saat dilimi için planlama yapılır."
  },
  {
    question: "Evde bakım hizmetinde hangi işlemler yapılmaktadır?",
    answer: "Evde bakım hizmetimizde; medikal ayak bakımı, tırnak kesimi ve şekillendirme, batık tırnak tedavisi (ortoniksi), tırnak mantarı tedavisi, nasır ve sert doku temizliği, topuk çatlağı bakımı, diyabetik ayak bakımı, peeling, masaj ve serum uygulaması gibi tüm podolojik işlemler yapılmaktadır."
  },
  {
    question: "Evde bakım hizmeti kimler için uygundur?",
    answer: "Evde bakım hizmeti özellikle; yatalak hastalar, yaşlı bireyler, hareket kısıtlılığı olan kişiler, diyabet hastaları, dolaşım bozukluğu yaşayanlar, ameliyat sonrası dönemde olan hastalar ve merkeze ulaşmakta zorluk çeken tüm bireyler için uygundur."
  },
  {
    question: "Evde bakım hizmetinde hijyen nasıl sağlanıyor?",
    answer: "Evde bakım hizmetimizde tam sterilizasyon protokolü uygulanmaktadır. Tüm aletler tek kullanımlık veya hastane standardında sterilize edilmiş olarak gelir. Podologlarımız tek kullanımlık eldiven, maske ve koruyucu ekipman kullanır. Çalışma alanı dezenfekte edilir ve atıklar medikal atık protokolüne uygun şekilde bertaraf edilir."
  },
  {
    question: "Evde bakım hizmeti ücreti ne kadardır?",
    answer: "Evde bakım hizmeti ücreti, yapılacak işlemlerin kapsamına ve lokasyona göre değişiklik gösterebilir. Güncel fiyat bilgisi ve size özel teklif için lütfen bizimle iletişime geçin. Hizmet öncesi detaylı fiyat bilgisi verilmektedir."
  },
  {
    question: "Evde bakım için hazırlık yapmam gerekiyor mu?",
    answer: "Evet, bazı basit hazırlıklar hizmeti daha verimli kılar: Ayaklarına dokunmayın, tırnak kesmeyin ve krem sürmeyin, bakım yapılacak alan için yeterli aydınlatma ve oturma/yatma alanı hazırlayın. Ekibimiz yanında gerekli tüm malzemeleri getirecektir."
  },
  {
    question: "Evde bakım hizmeti ne kadar sürer?",
    answer: "Standart bir evde medikal ayak bakımı hizmeti yaklaşık 45-60 dakika sürmektedir. Yapılacak işlemlerin kapsamına göre bu süre uzayabilir. Batık tırnak tedavisi veya kapsamlı mantar tedavisi gibi ek işlemler için süre uzayabilir."
  }
];

// FAQ Item Component with accessibility - SEO optimized (content always in DOM)
const FAQItem = ({ faq, index, isOpen, onToggle }) => {
  const questionId = `faq-question-${index}`;
  const answerId = `faq-answer-${index}`;

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
      <button
        id={questionId}
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4" itemProp="name">
          {faq.question}
        </h3>
        {isOpen ? (
          <ChevronUp className="text-blue-700 flex-shrink-0" size={24} aria-hidden="true" />
        ) : (
          <ChevronDown className="text-gray-400 flex-shrink-0" size={24} aria-hidden="true" />
        )}
      </button>
      {/* Answer content always rendered in DOM for SEO - only visibility changes */}
      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"
        className={`transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <div className="px-6 pb-4">
          <p className="text-gray-700 leading-relaxed" itemProp="text">
            {faq.answer}
          </p>
        </div>
      </div>
      {/* Hidden content for SEO crawlers - always in DOM */}
      {!isOpen && (
        <div className="sr-only" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
          <span itemProp="text">{faq.answer}</span>
        </div>
      )}
    </div>
  );
};

const EvdeBakimService = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const benefits = [
    'Ev konforunda hizmet',
    'Yatalak ve yaşlı hastalara özel',
    'Steril malzeme ve cihazlar',
    'Ankara genelinde geniş hizmet bölgesi',
    'Profesyonel podolog ekibi',
    'Dolaşım bozukluğu olan hastalara uygun',
    'Diyabetik ayak bakımı uzmanlığı',
    'Esnek randevu seçenekleri'
  ];

  const process = [
    { step: 1, title: 'Randevu Oluşturma', desc: 'Telefonla veya WhatsApp ile iletişime geçin. En az 1 gün önceden randevu alın.' },
    { step: 2, title: 'Adresinize Geliyoruz', desc: '1 Podolog + 1 Yardımcı personel ile tam donanımlı ekip adresinize gelir.' },
    { step: 3, title: 'Kapsamlı Muayene', desc: 'Ayak sağlığınız detaylı olarak değerlendirilir, sorunlar tespit edilir.' },
    { step: 4, title: 'Tedavi ve Bakım', desc: 'Tırnak kesimi, mantar tedavisi, nasır temizliği ve gerekli tüm işlemler yapılır.' },
    { step: 5, title: 'Bakım Uygulamaları', desc: 'Peeling, masaj ve serum uygulaması ile bakım tamamlanır.' },
    { step: 6, title: 'Takip ve Öneriler', desc: 'Evde bakım önerileri ve takip randevusu planlaması yapılır.' }
  ];

  const targetGroups = [
    { icon: Users, title: 'Yaşlı Bireyler', desc: 'Hareket zorluğu yaşayan yaşlı hastalarımız için özel hizmet' },
    { icon: Home, title: 'Yatalak Hastalar', desc: 'Evden çıkamayan hastalarımıza kapsamlı ayak bakımı' },
    { icon: Shield, title: 'Diyabet Hastaları', desc: 'Diyabetik ayak bakımı konusunda uzman yaklaşım' },
    { icon: Award, title: 'Ameliyat Sonrası', desc: 'Operasyon sonrası dönemde ayak bakımı desteği' }
  ];

  return (
    <>
      <Helmet>
        <title>Evde Medikal Ayak Bakımı | Ankara Podolog Hizmeti – MediPodo</title>
        <meta name="description" content="Ankara genelinde evde medikal ayak bakımı hizmeti. Yaşlı, yatalak ve diyabet hastaları için steril ekipmanlarla profesyonel podolog desteği. Randevu ile evinizde güvenli bakım." />
        <link rel="canonical" href="https://medipodo.com/hizmet/evde-bakim" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Evde Medikal Ayak Bakımı | Ankara Podolog Hizmeti – MediPodo" />
        <meta property="og:description" content="Ankara genelinde evde medikal ayak bakımı hizmeti. Yaşlı, yatalak ve diyabet hastaları için steril ekipmanlarla profesyonel podolog desteği." />
        <meta property="og:image" content="https://medipodo.com/images/services/evde-bakim.webp" />
        <meta property="og:url" content="https://medipodo.com/hizmet/evde-bakim" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Evde Medikal Ayak Bakımı | Ankara Podolog Hizmeti" />
        <meta name="twitter:description" content="Ankara genelinde evde medikal ayak bakımı. Yaşlı, yatalak ve diyabet hastaları için profesyonel podolog desteği." />
        <meta name="twitter:image" content="https://medipodo.com/images/services/evde-bakim.webp" />

        {/* FAQ Schema JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <Link to="/hizmetler">
              <Button variant="ghost" className="mb-6 text-blue-700">
                <ArrowLeft className="mr-2" size={18} />
                Hizmetlere Dön
              </Button>
            </Link>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
                Evde Medikal Ayak Bakımı Hizmeti (Ankara)
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Sağlık sorunları nedeniyle merkezimize ulaşmakta zorluk mu yaşıyorsunuz? 
                Evde medikal ayak bakımı hizmetimizle yanınızdayız. Özellikle yatalak hastalar, 
                yaşlı bireyler, hareket zorluğu yaşayanlar ve dolaşım bozukluğu olan hastalarımız 
                için ideal bir çözümdür.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:05456569747">
                  <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white">
                    <Phone className="mr-2" size={20} />
                    Hemen Ara: 0545 656 97 47
                  </Button>
                </a>
                <Link to="/iletisim">
                  <Button size="lg" variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                    Randevu Al
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Image - Optimized */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/images/services/evde-bakim.webp" 
                  srcSet="/images/services/evde-bakim.webp 1x"
                  alt="Ankara'da evde medikal ayak bakımı hizmeti – MediPodo podolog ekibi"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchpriority="high"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Who is it for? */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">
                Evde Bakım Hizmeti Kimler İçin Uygundur?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {targetGroups.map((group, index) => {
                  const Icon = group.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="text-blue-700" size={32} />
                        </div>
                        <h3 className="text-xl font-semibold text-blue-950 mb-2">{group.title}</h3>
                        <p className="text-gray-600 text-sm">{group.desc}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits & Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Benefits */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-blue-950 mb-6">Hizmet Avantajları</h2>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="text-green-600" size={16} />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Service Area */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-blue-950 mb-6">
                    <MapPin className="inline mr-2 text-blue-700" size={24} />
                    Hizmet Bölgelerimiz
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Ankara genelinde geniş hizmet ağımızla yanınızdayız:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {['Etimesgut', 'Bağlıca', 'Yapracık', 'Eryaman', 'Batıkent', 'Çayyolu', 
                      'Yaşamkent', 'Yenimahalle', 'Keçiören', 'Çankaya', 'Mamak', 'Altındağ'].map((area, idx) => (
                      <span key={idx} className="text-gray-600 text-sm flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {area}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-4 italic">
                    ve çevre ilçeler...
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">
                Evde Bakım Süreci Nasıl İşler?
              </h2>
              <div className="space-y-6">
                {process.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-950 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Neden Medipodo?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="text-blue-100">Alanında eğitimli ve deneyimli podologlar</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="text-blue-100">Evde sağlık hizmetlerine özel donanım</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="text-blue-100">Hasta güvenliğini ön planda tutan yaklaşım</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-400 text-xl">★</span>
                  <span className="text-blue-100">Ankara'da geniş hizmet ağı</span>
                </div>
              </div>
              <div className="bg-blue-800 bg-opacity-50 rounded-lg p-6 mt-8 text-center">
                <p className="text-blue-100">
                  Ayak sağlığınızı ertelemeyin. Evde medikal ayak bakımı hizmetimiz hakkında 
                  bilgi almak ve randevu oluşturmak için bizimle iletişime geçebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - SEO Optimized */}
        <section className="py-16 bg-white" itemScope itemType="https://schema.org/FAQPage">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-950 mb-4 text-center">
                Sıkça Sorulan Sorular
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Evde medikal ayak bakımı hizmeti hakkında merak edilenler
              </p>
              
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <FAQItem 
                    key={index}
                    faq={faq}
                    index={index}
                    isOpen={openFaqIndex === index}
                    onToggle={() => toggleFaq(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Evde Medikal Ayak Bakımı İçin Hemen Arayın
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Ankara genelinde profesyonel podolog ekibimiz, evinizin konforunda 
              güvenli ve hijyenik ayak bakımı için yanınızda.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:05456569747">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg">
                  <Phone className="mr-2" size={20} />
                  0545 656 97 47
                </Button>
              </a>
              <Link to="/iletisim">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg">
                  Randevu Formu
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EvdeBakimService;
