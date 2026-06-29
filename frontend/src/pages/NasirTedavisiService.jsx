import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, ChevronDown, ChevronUp, Phone, AlertTriangle, ShieldCheck, Target, Footprints } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

// FAQ Data
const faqData = [
  {
    question: "Nasır ile plantar siğil arasındaki fark nedir?",
    answer: "Nasır sürtünme ve basınca bağlı oluşur, plantar siğil ise virüs kaynaklıdır. Görünüşleri benzer olsa da tedavileri farklıdır."
  },
  {
    question: "Nasır alındıktan sonra tekrarlar mı?",
    answer: "Altta yatan basınç ve ayakkabı sorunu çözülmezse tekrar edebilir. Bu nedenle analiz ve önleyici öneriler çok önemlidir."
  },
  {
    question: "İşlem sırasında acı hissedilir mi?",
    answer: "Hayır. İşlem kontrollü ve canlı dokuya zarar vermeden yapılır. Çoğu danışan işlem sırasında rahatladığını belirtir."
  },
  {
    question: "Evde nasır bandı veya asit kullanmak güvenli mi?",
    answer: "Kontrolsüz kullanım cildi yakabilir ve sorunu derinleştirebilir. Özellikle diyabet hastalarında önerilmez."
  },
  {
    question: "Kaç seans gerekir?",
    answer: "Nasırın veya siğilin durumuna göre değişir. Bazı vakalarda tek seans yeterli olur."
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

const NasirTedavisiService = () => {
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
    'Ağrısız ve kontrollü temizlik',
    'İlk seansta belirgin rahatlama',
    'Derinleşmiş nasırlarda güvenli müdahale',
    'Basınç noktalarının analiz edilmesi',
    'Tekrar oluşumu azaltmaya yönelik kişisel öneriler',
    'Sağlıklı ve sorunlu dokunun ayrıştırılarak işlem yapılması'
  ];

  const evdeRiskler = [
    'Geçici rahatlama sağlar',
    'Derinleşmeye ve enfeksiyona yol açabilir'
  ];

  const podologAvantaj = [
    'Sorunun kök nedenini hedefler',
    'Tekrar oluşma riskini azaltır',
    'Cilde zarar vermez'
  ];

  const process = [
    { step: 1, title: 'Detaylı Analiz', desc: 'Nasır mı, plantar siğil mi olduğu netleştirilir. Lokasyon ve derinlik değerlendirilir.' },
    { step: 2, title: 'Profesyonel Temizlik', desc: 'Steril ve özel podolojik aletlerle, canlı dokuya zarar vermeden işlem yapılır.' },
    { step: 3, title: 'Basınç Noktası Değerlendirmesi', desc: 'Yanlış basma, ayakkabı etkisi ve yük dağılımı analiz edilir.' },
    { step: 4, title: 'Koruyucu Öneriler', desc: 'Tabanlık, ayakkabı seçimi ve evde bakım konusunda kişiye özel bilgilendirme yapılır.' }
  ];

  const targetGroups = [
    { icon: Footprints, title: 'Yürürken Ağrı Yaşayanlar', desc: 'Her adımda batma hissi olanlar' },
    { icon: Target, title: 'Sertleşme Problemi Olanlar', desc: 'Ayak tabanında kalınlaşma yaşayanlar' },
    { icon: ShieldCheck, title: 'Tekrarlayan Nasır Sorunu', desc: 'Sürekli nasır problemi yaşayanlar' },
    { icon: AlertTriangle, title: 'Siğil Şüphesi Olanlar', desc: 'Yanlış müdahaleden kaçınmak isteyenler' }
  ];

  const relatedBlogs = [
    { slug: 'nasir-sigil-farklari', title: 'Nasır Nedir? Plantar Siğil Nedir? Nasıl Ayırt Edilir?' },
    { slug: 'tirnak-neden-kalinlasir', title: 'Tırnak Neden Kalınlaşır? Ayak Tırnağı Kalınlaşmasının 7 Nedeni' }
  ];

  return (
    <>
      <Helmet>
        <title>Nasır ve Plantar Siğil Tedavisi | Ankara Podolog Hizmeti – MediPodo</title>
        <meta name="description" content="Ayak tabanında nasır ve plantar siğil ağrısına son verin. MediPodo'da ağrısız, profesyonel podolojik tedavi ve tekrar oluşumu önlemeye yönelik çözümler." />
        <link rel="canonical" href="https://medipodo.com/hizmet/nasir-tedavisi" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nasır ve Plantar Siğil Tedavisi | Ankara Podolog Hizmeti – MediPodo" />
        <meta property="og:description" content="Ayak tabanında nasır ve plantar siğil ağrısına son verin. MediPodo'da ağrısız, profesyonel podolojik tedavi." />
        <meta property="og:image" content="https://medipodo.com/images/services/nasir-tedavisi-ankara.webp" />
        <meta property="og:url" content="https://medipodo.com/hizmet/nasir-tedavisi" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nasır ve Plantar Siğil Tedavisi | Ankara Podolog Hizmeti" />
        <meta name="twitter:description" content="Ayak tabanında nasır ve plantar siğil ağrısına son verin. MediPodo'da ağrısız, profesyonel podolojik tedavi." />
        <meta name="twitter:image" content="https://medipodo.com/images/services/nasir-tedavisi-ankara.webp" />

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
                Nasır ve Plantar Siğil Tedavisi
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
                Nasır ve Plantar Siğil Nedir, Neden Oluşur?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Ayak tabanında oluşan nasırlar (hiperkeratoz) ve plantar siğiller, yanlış basma, sürekli sürtünme, dar ayakkabı kullanımı ve uzun süre ayakta kalmaya bağlı olarak gelişir. Zamanla cilt kalınlaşır, sertleşir ve her adımda ağrıya neden olmaya başlar.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Plantar siğiller ise virüs kaynaklıdır ve nasırla sık karıştırılır. Yanlış müdahale edildiğinde yayılabilir veya daha ağrılı hale gelebilir.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-medium text-blue-800">
                MediPodo'da bu iki durumu ayrıştırarak, doğru teknikle ve güvenli şekilde tedavi ediyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Main Image 1 */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/images/services/nasir-tedavisi-ankara.webp" 
                  srcSet="/images/services/nasir-tedavisi-ankara.webp 1x"
                  alt="Podolog tarafından işlem yapılması gereken nasır durumu"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchpriority="high"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Professional Treatment */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">
                Neden Profesyonel Podolojik Tedavi?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Evde Riskler */}
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                      <AlertTriangle className="mr-2 text-red-600" size={24} />
                      Evde Uygulanan Yöntemler
                    </h3>
                    <p className="text-gray-700 mb-4 text-sm">Kesme, törpüleme veya asitli ürünler:</p>
                    <ul className="space-y-2">
                      {evdeRiskler.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-red-700">
                          <span className="text-red-500 mt-1">✗</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Podolog Avantajları */}
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                      <ShieldCheck className="mr-2 text-green-600" size={24} />
                      Podolog Tarafından Müdahale
                    </h3>
                    <p className="text-gray-700 mb-4 text-sm">Medikal müdahale ise:</p>
                    <ul className="space-y-2">
                      {podologAvantaj.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-green-700">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">
                Nasır ve Plantar Siğil Tedavisinin Faydaları
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3 bg-blue-50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="text-white" size={18} />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-950 mb-4 text-center">
                Tedavi Süreci Nasıl İlerler?
              </h2>
              <div className="space-y-6 mt-8">
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

        {/* Who is it for? */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">
                Kimler İçin Uygundur?
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
                        <h3 className="text-lg font-semibold text-blue-950 mb-2">{group.title}</h3>
                        <p className="text-gray-600 text-sm">{group.desc}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Second Image */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/images/services/parmak-arasi-nasir-tedavisi.webp" 
                  srcSet="/images/services/parmak-arasi-nasir-tedavisi.webp 1x"
                  alt="Parmak arası nasır tedavisi - MediPodo Ankara"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-gray-500 text-sm mt-4 italic">
                Parmak eklemi üstünde sert nasır
              </p>
            </div>
          </div>
        </section>

        {/* Related Blog Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-blue-950 mb-8 text-center">
                📚 İlgili Blog Yazıları
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedBlogs.map((blog, idx) => (
                  <Link key={idx} to={`/blog/${blog.slug}`}>
                    <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-blue-700 hover:text-blue-800 transition-colors">
                          {blog.title}
                        </h3>
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
                ❓ Sıkça Sorulan Sorular
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Nasır ve plantar siğil tedavisi hakkında merak edilenler
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
              Nasır ve Plantar Siğil Tedavisi İçin Randevu Alın
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Profesyonel podolog ekibimizle ağrısız ve güvenli tedavi için yanınızdayız. İlk seansta fark yaratın.
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

export default NasirTedavisiService;
