import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, HelpCircle, ExternalLink } from 'lucide-react';
import { faqData } from '../mock';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

const FAQ = () => {
  // İlk 2 soru varsayılan olarak açık (AdSense botları için)
  const [openIds, setOpenIds] = useState([1, 2]);

  const toggleFAQ = (id) => {
    setOpenIds(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  // JSON-LD Schema for Google
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

  return (
    <>
      <Helmet>
        <title>Sık Sorulan Sorular - Medipodo Podoloji | Ayak Sağlığı Hakkında Merak Edilenler</title>
        <meta name="description" content="Podoloji, batık tırnak, tırnak mantarı, nasır, ayak analizi ve daha fazlası hakkında sık sorulan sorular ve uzman cevapları. Medipodo Ankara Bağlıca." />
        <meta name="keywords" content="podoloji sss, ayak sağlığı sorular, batık tırnak tedavisi, tırnak mantarı, medipodo faq" />
        <link rel="canonical" href="https://medipodo.com/sikca-sorulan-sorular" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sık Sorulan Sorular - Medipodo Podoloji | Ayak Sağlığı" />
        <meta property="og:description" content="Podoloji, batık tırnak, tırnak mantarı, nasır hakkında sık sorulan sorular ve uzman cevapları." />
        <meta property="og:image" content="https://medipodo.com/images/medipodo-og-home-v2.jpg" />
        <meta property="og:url" content="https://medipodo.com/sikca-sorulan-sorular" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sık Sorulan Sorular - Medipodo Podoloji" />
        <meta name="twitter:description" content="Podoloji hakkında sık sorulan sorular ve uzman cevapları." />
          <meta name="twitter:image" content="https://medipodo.com/images/medipodo-og-home-v2.jpg" />
        
        {/* FAQPage JSON-LD Schema - Google rich snippet için */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        </Helmet>

      <BreadcrumbSchema items={[
        { name: 'Ana Sayfa', url: 'https://medipodo.com/' },
        { name: 'Sık Sorulan Sorular', url: 'https://medipodo.com/sikca-sorulan-sorular' }
      ]} />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-800 bg-opacity-50 rounded-full mb-6">
                <HelpCircle size={40} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Sık Sorulan Sorular
              </h1>
              <p className="text-xl text-blue-100">
                Ayak sağlığı ve podoloji hakkında merak ettiğiniz her şey
              </p>
            </div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Statik Giriş Metni - AdSense botları için */}
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 mb-10">
                <h2 className="text-2xl font-bold text-blue-950 mb-4">Podoloji ve Ayak Sağlığı Hakkında Bilmeniz Gerekenler</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    <strong>Podoloji</strong>, ayak ve tırnak sağlığının korunması, bakımı ve sorunlarının önlenmesiyle ilgilenen bir sağlık bilimidir. 
                    Podologlar, üniversitelerin Podoloji bölümünden mezun olan ve ayak sağlığı konusunda uzmanlaşmış sağlık teknikerleridir. 
                    Cerrahi olmayan yöntemlerle batık tırnak, tırnak mantarı, nasır, çatlak topuk ve diyabetik ayak bakımı gibi yaygın sorunlara 
                    profesyonel çözümler sunarlar.
                  </p>
                  <p>
                    Ayak sağlığı, günlük yaşam kalitesini doğrudan etkileyen önemli bir faktördür. Özellikle uzun süre ayakta kalan kişiler, 
                    sporcular, diyabet hastaları ve yaşlı bireyler için düzenli podolojik kontrol ve bakım büyük önem taşır. 
                    Evde yapılan yanlış müdahaleler enfeksiyon riskini artırabilirken, profesyonel podolojik bakım steril ortamda, 
                    doğru tekniklerle ve kişiye özel yaklaşımla güvenli sonuçlar sağlar.
                  </p>
                  <p>
                    Aşağıda ayak sağlığı ve podoloji hakkında en çok sorulan soruları ve uzman cevaplarını bulabilirsiniz. 
                    Sorularınız için Medipodo Ankara Bağlıca merkezimize ulaşabilirsiniz.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {faqData.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all hover:shadow-lg"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
                      aria-expanded={openIds.includes(faq.id)}
                    >
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-sm">
                          {faq.id}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        {openIds.includes(faq.id) ? (
                          <ChevronUp className="text-blue-700" size={24} />
                        ) : (
                          <ChevronDown className="text-gray-400" size={24} />
                        )}
                      </div>
                    </button>
                    
                    {openIds.includes(faq.id) && (
                      <div className="px-6 pb-6 pt-2 animate-fadeIn">
                        <div className="pl-12">
                          <p className="text-gray-700 leading-relaxed mb-4">
                            {faq.answer}
                          </p>
                          
                          {faq.link && (
                            <Link
                              to={faq.link.url}
                              className="inline-flex items-center text-blue-700 hover:text-blue-900 font-semibold text-sm"
                            >
                              <ExternalLink size={16} className="mr-1" />
                              {faq.link.text}
                            </Link>
                          )}
                          
                          {faq.category && (
                            <div className="mt-3">
                              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                                {faq.category}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="mt-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200 text-center">
                <h2 className="text-2xl font-bold text-blue-950 mb-4">
                  Sorunuza Cevap Bulamadınız mı?
                </h2>
                <p className="text-gray-700 mb-6">
                  Uzman ekibimiz size yardımcı olmaktan mutluluk duyar
                </p>
<Link
  to="/iletisim"
  className="inline-block px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors"
>
  Bize Ulaşın
</Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default FAQ;
