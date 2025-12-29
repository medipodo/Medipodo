import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, ChevronDown, ChevronUp, Phone, Clock, Shield, Award, Users, Sparkles, Heart, Footprints } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

// FAQ Data
const faqData = [
  {
    question: "Medikal ayak bakımı nedir?",
    answer: "Medikal ayak bakımı; ayak ve tırnak sağlığını korumak amacıyla, podologlar tarafından steril koşullarda uygulanan profesyonel bir bakım hizmetidir. Estetikten çok sağlık ve koruma odaklıdır."
  },
  {
    question: "Medikal ayak bakımı acı verir mi?",
    answer: "Hayır. Uygulamalar kontrollü ve kişiye özel yapılır. Amaç rahatlatmak ve sorunu ilerlemeden çözmektir."
  },
  {
    question: "Medikal ayak bakımı ile pedikür arasındaki fark nedir?",
    answer: "Pedikür kozmetik bir işlemdir. Medikal ayak bakımı ise sağlık temellidir, steril ekipmanlarla ve podolog tarafından uygulanır."
  },
  {
    question: "Ne sıklıkla medikal ayak bakımı yaptırılmalı?",
    answer: "Genellikle 4–6 haftada bir önerilir. Ayak yapısı, yaş ve mevcut problemlere göre bu süre değişebilir."
  },
  {
    question: "Diyabet hastaları medikal ayak bakımı yaptırabilir mi?",
    answer: "Evet. Hatta diyabetli bireyler için düzenli ve kontrollü ayak bakımı çok önemlidir. Medipodo'da diyabetik ayaklara uygun protokoller uygulanır."
  },
  {
    question: "İşlem ne kadar sürer?",
    answer: "Ortalama 45–60 dakika sürer. İşlem kapsamı kişiye göre değişebilir."
  },
  {
    question: "Medikal ayak bakımı nasır ve sertleşmeleri giderir mi?",
    answer: "Evet. Basınca bağlı oluşan sertleşmeler ve nasırlar kontrollü şekilde temizlenir ve tekrar oluşmaması için öneriler verilir."
  }
];

// FAQ Item Component with accessibility - SEO optimized
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
      {!isOpen && (
        <div className="sr-only" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
          <span itemProp="text">{faq.answer}</span>
        </div>
      )}
    </div>
  );
};

const MedikalAyakBakimiService = () => {
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

  const targetGroups = [
    { icon: Clock, title: 'Uzun Süre Ayakta Kalanlar', desc: 'Günlük yaşamda ayakta uzun süre kalan bireyler' },
    { icon: Users, title: 'Yaşlı Bireyler', desc: 'Düzenli ayak bakımı gerektiren yaşlı hastalar' },
    { icon: Shield, title: 'Diyabet Hastaları', desc: 'Kontrollü bakım gerektiren diyabetli bireyler' },
    { icon: Footprints, title: 'Sporcular', desc: 'Yoğun aktivite nedeniyle ayak bakımı gereken sporcular' }
  ];

  const serviceIncludes = [
    'Ayrıntılı ayak ve tırnak muayenesi',
    'Tırnakların anatomik yapıya uygun şekilde kesilmesi',
    'Tırnak çevresi (kütikül) bakımı',
    'Nasırlaşma ve sertleşmiş deri temizliği',
    'Cilt yüzeyinin dengelenmesi ve pürüzsüzleştirilmesi',
    'Ayak masajı',
    'Yoğun nemlendirici ve bakım ürünleri uygulaması',
    'Kişiye özel bakım ve korunma önerileri'
  ];

  const benefits = [
    'Ayak problemlerinin ilerlemesini önler',
    'Tırnak ve cilt sağlığını korur',
    'Nasır ve sertleşmeye bağlı ağrıyı azaltır',
    'Ayak kokusu ve nem dengesini düzenler',
    'Günlük yaşam konforunu artırır',
    'Ayaklara hafiflik ve rahatlama hissi kazandırır'
  ];

  const process = [
    { step: 1, title: 'Detaylı Ayak Muayenesi', desc: 'Ayak yapısı, tırnak ve cilt durumu değerlendirilir.' },
    { step: 2, title: 'Tırnak Kesimi ve Şekillendirme', desc: 'Tırnaklar profesyonel şekilde kesilir ve düzenlenir.' },
    { step: 3, title: 'Tırnak Yüzeylerinin Frezelenmesi ve Tırnak Kanallarının Temizlenmesi', desc: 'Kalınlaşmış tırnak yüzeyi inceltilir, tırnak kanalları kontrollü şekilde temizlenir.' },
    { step: 4, title: 'Sorunlu Alanların Temizliği (Küretaj)', desc: 'Nasır, mantarlı doku ve sertleşmiş cilt giderilir.' },
    { step: 5, title: 'Ortoniksi (Gerekli Durumlarda)', desc: 'Batık tırnak riskine karşı tırnak düzeltici sistem uygulanır.' },
    { step: 6, title: 'Masaj ve Nemlendirme', desc: 'Rahatlatıcı masaj ve yoğun nemlendirme yapılır.' },
    { step: 7, title: 'Kişiye Özel Bakım Önerileri', desc: 'Evde bakım ve periyodik kontrol önerileri sunulur.' }
  ];

  const relatedServices = [
    { id: 'nasir-tedavisi', title: 'Nasır Tedavisi', desc: 'Ağrılı nasırların profesyonel tedavisi' },
    { id: 'tirnak-mantari', title: 'Tırnak Mantarı Tedavisi', desc: 'Etkili tırnak mantarı tedavisi' },
    { id: 'topuk-bakimi', title: 'Topuk Bakımı', desc: 'Çatlak topuklar için profesyonel bakım' },
    { id: 'evde-bakim', title: 'Evde Medikal Ayak Bakımı', desc: 'Evinizin konforunda profesyonel bakım' }
  ];

  return (
    <>
      <Helmet>
        <title>Medikal Ayak Bakımı | Podolog ile Profesyonel Ayak Bakımı – Medipodo Ankara</title>
        <meta name="description" content="Medikal ayak bakımı; tırnak, nasır ve cilt problemlerine yönelik podolog eşliğinde uygulanan profesyonel bir bakım hizmetidir. Medipodo Ankara." />
        <link rel="canonical" href="https://medipodo.com/hizmet/ayak-bakimi" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Medikal Ayak Bakımı | Podolog ile Profesyonel Ayak Bakımı – Medipodo Ankara" />
        <meta property="og:description" content="Medikal ayak bakımı; tırnak, nasır ve cilt problemlerine yönelik podolog eşliğinde uygulanan profesyonel bir bakım hizmetidir." />
        <meta property="og:image" content="https://medipodo.com/images/services/medikal-ayak-bakimi-podolog-medipodo.webp" />
        <meta property="og:url" content="https://medipodo.com/hizmet/ayak-bakimi" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Medikal Ayak Bakımı | Podolog ile Profesyonel Ayak Bakımı" />
        <meta name="twitter:description" content="Medikal ayak bakımı; tırnak, nasır ve cilt problemlerine yönelik podolog eşliğinde uygulanan profesyonel bir bakım hizmetidir." />
        <meta name="twitter:image" content="https://medipodo.com/images/services/medikal-ayak-bakimi-podolog-medipodo.webp" />

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
                Medikal Ayak Bakımı Nedir?
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
                Medikal Ayak Bakımı – Profesyonel Podolog Hizmeti
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Medikal ayak bakımı, ayak sağlığını korumak ve mevcut problemleri önlemek amacıyla, podologlar tarafından steril koşullarda uygulanan profesyonel bakım hizmetidir. Medipodo Ayak Sağlığı Merkezi olarak; tırnak, deri ve ayak yapısına yönelik tüm işlemleri bilimsel ve hijyenik standartlara uygun şekilde gerçekleştiriyoruz.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Bu hizmet, yalnızca estetik değil; önleyici, koruyucu ve destekleyici sağlık uygulamalarını kapsar. Özellikle düzenli bakım gerektiren bireyler için ayak sağlığının sürdürülebilirliğini sağlar.
              </p>
            </div>
          </div>
        </section>

        {/* Service Image - Centered */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/images/services/medikal-ayak-bakimi-podolog-medipodo.webp" 
                  srcSet="/images/services/medikal-ayak-bakimi-podolog-medipodo.webp 1x"
                  alt="Medikal ayak bakımı – Medipodo Ankara podolog hizmeti"
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
                Medikal Ayak Bakımı Kimler İçin Uygundur?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {targetGroups.map((group, index) => {
                  const Icon = group.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="text-blue-700" size={32} />
                        </div>
                        <h3 className="text-lg font-semibold text-blue-950 mb-2">{group.title}</h3>
                        <p className="text-gray-600 text-sm">{group.desc}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-gray-700 mb-4">Medikal ayak bakımı aşağıdaki kişiler için özellikle önerilir:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Günlük yaşamda ayakta uzun süre kalanlar',
                    'Ayaklarında sertleşme, çatlak ve kuruluk olanlar',
                    'Yanlış tırnak kesimi nedeniyle sorun yaşayanlar',
                    'Diyabet riski bulunan bireyler (kontrollü bakım)',
                    'Sporcular',
                    'Yaşlı bireyler',
                    'Düzenli ayak sağlığı kontrolü yaptırmak isteyen herkes'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <Check className="text-green-600 flex-shrink-0 mt-1" size={18} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What does it include? */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">
                Medikal Ayak Bakımı Neleri Kapsar?
              </h2>
              <p className="text-gray-700 text-center mb-8">
                Medipodo'da uygulanan kapsamlı medikal ayak bakımı şu işlemleri içerir:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceIncludes.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 bg-blue-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-white" size={18} />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-600 mt-6 italic">
                Tüm işlemler tek kullanımlık veya sterilize edilmiş ekipmanlarla yapılır.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">
                Medikal Ayak Bakımının Faydaları
              </h2>
              <h3 className="text-xl font-semibold text-blue-800 mb-6 text-center">İşlem Faydaları</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                    <Heart className="text-blue-700 flex-shrink-0" size={24} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-950 mb-4 text-center">
                Medikal Ayak Bakımı Nasıl Uygulanır?
              </h2>
              <h3 className="text-xl font-semibold text-blue-800 mb-8 text-center">İşlem Süreci</h3>
              <div className="space-y-6">
                {process.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md flex items-start space-x-4">
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

        {/* Comparison Table */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">
                Medikal Ayak Bakımı ile Pedikür Arasındaki Fark
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
                  <thead className="bg-blue-700 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Medikal Ayak Bakımı</th>
                      <th className="px-6 py-4 text-left">Klasik Pedikür</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Podolog tarafından uygulanır</td>
                      <td className="px-6 py-4 text-gray-700">Estetik amaçlıdır</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-gray-700">Steril ve medikal ekipman</td>
                      <td className="px-6 py-4 text-gray-700">Kozmetik ekipman</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Tedavi ve koruma odaklı</td>
                      <td className="px-6 py-4 text-gray-700">Görsel odaklı</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-gray-700">Ayak sağlığını esas alır</td>
                      <td className="px-6 py-4 text-gray-700">Estetik görünüm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Why Medipodo */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Neden Medipodo Medikal Ayak Bakımı?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Podolog eşliğinde profesyonel uygulama',
                  'Sağlık standartlarına uygun steril ortam',
                  'Kişiye özel bakım planı',
                  'Ankara\'da güvenilir ayak sağlığı merkezi',
                  'Tedavi odaklı ve etik yaklaşım'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <span className="text-yellow-400 text-xl">★</span>
                    <span className="text-blue-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">
                İlgili Hizmetlerimiz
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedServices.map((service) => (
                  <Link key={service.id} to={`/hizmet/${service.id}`}>
                    <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-blue-950 mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm">{service.desc}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - SEO Optimized */}
        <section className="py-16 bg-gray-50" itemScope itemType="https://schema.org/FAQPage">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-950 mb-4 text-center">
                Sıkça Sorulan Sorular
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Medikal ayak bakımı hakkında merak edilenler
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
              Medikal Ayak Bakımı İçin Randevu Alın
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Profesyonel podolog ekibimizle ayak sağlığınız için yanınızdayız. Steril ortamda, kişiye özel bakım planı ile hizmet veriyoruz.
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

export default MedikalAyakBakimiService;
