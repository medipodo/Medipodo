import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, ChevronDown, ChevronUp, Phone, AlertTriangle, CheckCircle } from 'lucide-react';

const AyakMantariEvdeTedaviBlog = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Ayak mantarı evde tamamen geçer mi?",
      answer: "Erken evrede belirtiler hafifleyebilir ancak mantar her zaman tamamen ortadan kalkmayabilir."
    },
    {
      question: "Evde uygulamalar mantarı yok eder mi?",
      answer: "Hayır. Evde uygulamalar destekleyicidir, profesyonel tedavinin yerini tutmaz."
    },
    {
      question: "Ayak mantarı tedavi edilmezse ne olur?",
      answer: "İlerleyerek tırnaklara yayılabilir ve tedavi süreci uzayabilir."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ayak mantarı evde tamamen geçer mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Erken evrede belirtiler hafifleyebilir ancak mantar her zaman tamamen ortadan kalkmayabilir."
        }
      },
      {
        "@type": "Question",
        "name": "Evde uygulamalar mantarı yok eder mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hayır. Evde uygulamalar destekleyicidir, profesyonel tedavinin yerini tutmaz."
        }
      },
      {
        "@type": "Question",
        "name": "Ayak mantarı tedavi edilmezse ne olur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "İlerleyerek tırnaklara yayılabilir ve tedavi süreci uzayabilir."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Ayak Mantarı Evde Tedavi Edilir mi? Ne Zaman Uzman Gerekir? | Medipodo</title>
        <meta name="description" content="Ayak mantarı evde tedavi edilebilir mi? Hangi durumlarda yeterli olur, ne zaman uzmana gidilmelidir? Detaylı ve güvenilir rehber." />
        <meta name="keywords" content="ayak mantarı evde tedavi, ayak mantarı doğal tedavi, ayak mantarı ne zaman geçer, ayak mantarı uzman" />
        <link rel="canonical" href="https://medipodo.com/blog/ayak-mantari-evde-tedavi-edilir-mi" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Ayak Mantarı Evde Tedavi Edilir mi? Ne Zaman Uzman Gerekir?" />
        <meta property="og:description" content="Ayak mantarı evde tedavi edilebilir mi? Hangi durumlarda yeterli olur, ne zaman uzmana gidilmelidir?" />
        <meta property="og:image" content="https://medipodo.com/blog-images/ayak-mantari-evde-tedavi/ayak-mantari-evde-tedavi-yontemleri.webp" />
        <meta property="og:url" content="https://medipodo.com/blog/ayak-mantari-evde-tedavi-edilir-mi" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayak Mantarı Evde Tedavi Edilir mi?" />
        <meta name="twitter:description" content="Ayak mantarı evde tedavi edilebilir mi? Ne zaman uzmana gidilmeli?" />
        <meta name="twitter:image" content="https://medipodo.com/blog-images/ayak-mantari-evde-tedavi/ayak-mantari-evde-tedavi-yontemleri.webp" />

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-32 pb-16">
          <div className="container mx-auto px-4">
            <Link to="/blog" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Blog'a Dön
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Ayak Mantarı Evde Tedavi Edilir mi?
            </h1>
            
            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Podolog Serdar Ceylan</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>6 dakika okuma</span>
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>28 Ocak 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">

            {/* Giriş */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ayak mantarı yaşayan birçok kişi, ilk aşamada bu sorunun evde uygulanabilecek yöntemlerle geçip geçmeyeceğini merak eder. İnternette yer alan doğal çözümler ve evde bakım önerileri kafa karıştırıcı olabilir. Bu yazıda ayak mantarının <strong>evde hangi durumlarda kontrol altına alınabileceğini</strong>, hangi durumlarda yetersiz kalacağını ve ne zaman profesyonel destek alınması gerektiğini net bir şekilde ele alıyoruz.
              </p>

              <img 
                src="/blog-images/ayak-mantari-evde-tedavi/ayak-mantari-evde-tedavi-yontemleri.webp" 
                alt="Ayak mantarı evde tedavi yöntemleri"
                className="w-full h-auto rounded-xl shadow-lg mb-8"
                loading="lazy"
              />
            </section>

            {/* Ayak Mantarı Evde Tedavi Edilebilir mi? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ayak Mantarı Evde Tedavi Edilebilir mi?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ayak mantarı, erken evrede ve yüzeyel ilerliyorsa evde yapılan bazı destekleyici uygulamalarla kontrol altına alınabilir. Ancak bu yöntemler <strong>tedavi edici değil</strong>, ilerlemeyi yavaşlatıcı ve belirtileri azaltıcıdır.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <p className="text-gray-800">
                  Evde uygulamalar, mantarın tamamen ortadan kalkmasını her zaman sağlamaz. Bu nedenle belirtilerin seyri dikkatle izlenmelidir.
                </p>
              </div>
            </section>

            {/* Evde Yapılabilecekler */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Evde Ayak Mantarı İçin Yapılabilecekler
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Evde bakım sürecinde dikkat edilmesi gereken temel noktalar şunlardır:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  "Ayakların her gün yıkanması ve parmak aralarının iyice kurulanması",
                  "Pamuklu ve nefes alabilen çorapların tercih edilmesi",
                  "Ayakkabıların havalandırılması ve dönüşümlü giyilmesi",
                  "Nemli ve kapalı ortamlardan kaçınılması",
                  "Ortak terlik ve havlu kullanımından uzak durulması"
                ].map((item, index) => (
                  <div key={index} className="flex items-start bg-green-50 rounded-lg shadow-md p-4">
                    <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <p className="text-gray-800">
                  Bu uygulamalar, mantarın ilerlemesini yavaşlatabilir ve bulaş riskini azaltabilir.
                </p>
              </div>
            </section>

            {/* Evde Uygulamalar Ne Zaman Yetersiz Kalır? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Evde Yapılan Uygulamalar Ne Zaman Yetersiz Kalır?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Aşağıdaki durumlarda evde bakım yeterli olmayabilir:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  "Kaşıntı ve kızarıklık giderek artıyorsa",
                  "Deride çatlama ve ağrı oluştuysa",
                  "Belirtiler 1–2 hafta içinde gerilemiyorsa",
                  "Ayak mantarı tekrarlıyorsa",
                  "Tırnaklarda renk veya şekil değişimi başladıysa"
                ].map((item, index) => (
                  <div key={index} className="flex items-start bg-red-50 rounded-lg shadow-md p-4">
                    <AlertTriangle className="text-red-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <p className="text-gray-800">
                  Bu aşamada mantar enfeksiyonu ilerlemiş olabilir ve <strong>tırnak mantarına dönüşme riski</strong> artar.
                </p>
              </div>
            </section>

            {/* Ayak Mantarı Neden Tekrarlar? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ayak Mantarı Neden Tekrarlar?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ayak mantarının sık tekrarlamasının en önemli nedeni, enfeksiyonun tam olarak ortadan kaldırılmamasıdır. Ayrıca ayak mantarının <strong>nasıl bulaştığını</strong> bilmemek ve riskli alışkanlıklara devam etmek de tekrarlama ihtimalini yükseltir. Ayak mantarının tekrar etmemesi için nasıl bulaştığının bilinmesi önemlidir.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-gray-700">
                  👉 Bu konuda detaylı bilgi için: <Link to="/blog/ayak-mantari-nasil-bulasir" className="text-blue-600 hover:text-blue-800 font-semibold underline">Ayak Mantarı Nasıl Bulaşır?</Link> yazımıza göz atabilirsiniz.
                </p>
              </div>
            </section>

            {/* Belirtiler Takip Edilmeli mi? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ayak Mantarı Belirtileri Takip Edilmeli mi?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Evde bakım sürecinde belirtilerin yakından takip edilmesi gerekir. Kaşıntı, soyulma ve koku gibi belirtiler devam ediyorsa veya artıyorsa, evde uygulamaların yeterli olmadığı düşünülebilir.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-gray-700">
                  👉 Ayak mantarının erken dönemde fark edilmesi için <Link to="/blog/ayak-mantari-belirtileri" className="text-blue-600 hover:text-blue-800 font-semibold underline">Ayak Mantarı Belirtileri</Link> yazımızı inceleyebilirsiniz.
                </p>
              </div>
            </section>

            {/* Ne Zaman Uzman Desteği Alınmalı? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ne Zaman Uzman Desteği Alınmalı?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Aşağıdaki durumlarda profesyonel değerlendirme geciktirilmemelidir:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  "Evde uygulamalara rağmen belirtiler düzelmiyorsa",
                  "Mantar sık sık tekrar ediyorsa",
                  "Tırnaklarda kalınlaşma ve renk değişimi varsa",
                  "Günlük yaşam kalitesini etkileyen ağrı oluştuysa"
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-600">
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-600 text-white rounded-xl p-6">
                <p className="text-lg">
                  👉 <Link to="/hizmet/tirnak-mantari" className="text-white hover:text-blue-200 underline font-semibold">Ayak mantarı tedavisi</Link> hakkında detaylı bilgi almak için hizmet sayfamızı ziyaret edebilirsiniz.
                </p>
              </div>
            </section>

            {/* SSS - Accordion */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Sık Sorulan Sorular
              </h2>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
                      aria-expanded={openFaqIndex === index}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {item.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openFaqIndex === index ? (
                          <ChevronUp className="text-blue-700" size={24} />
                        ) : (
                          <ChevronDown className="text-gray-400" size={24} />
                        )}
                      </div>
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-6 pb-5">
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Sonuç */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4">Sonuç</h2>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Ayak mantarı erken dönemde evde bakım uygulamalarıyla kontrol altına alınabilir. Ancak belirtiler devam ediyorsa veya ilerliyorsa, profesyonel destek almak enfeksiyonun büyümesini önlemek açısından önemlidir.
                </p>
                <p className="text-blue-200 text-sm italic">
                  Bu içerik Medipodo podoloji ekibi tarafından hazırlanmıştır.
                </p>
              </div>
            </section>

            {/* Tıbbi Bilgilendirme */}
            <section className="mb-12">
              <p className="text-xs text-gray-400 leading-relaxed">
                ⚠️ <span className="font-medium">Tıbbi Bilgilendirme:</span> Bu içerik bilgilendirme amaçlıdır; tanı ve tedavi yerine geçmez. Ayak sağlığınızla ilgili şikayetleriniz için mutlaka bir sağlık profesyoneline danışınız.
              </p>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ayak Mantarı Tedavisi İçin Randevu Alın
              </h2>
              <p className="text-green-100 mb-8 text-lg">
                Profesyonel podolojik değerlendirme ve tedavi için Medipodo'yu tercih edin.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/hizmet/tirnak-mantari"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                >
                  Tırnak Mantarı Tedavisi
                </Link>
                <a
                  href="https://wa.me/905456569747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-400 transition-all transform hover:scale-105 shadow-lg"
                >
                  <Phone className="mr-2" size={20} />
                  WhatsApp'tan Yazın
                </a>
              </div>
            </section>

          </div>
        </div>
      </article>
    </>
  );
};

export default AyakMantariEvdeTedaviBlog;
