import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, ChevronDown, ChevronUp, Phone, AlertTriangle, CheckCircle } from 'lucide-react';

const AyakMantariBelirtileriBlog = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Ayak mantarı belirtileri kendiliğinden geçer mi?",
      answer: "Hayır. Ayak mantarı uygun yöntemler kullanılmadan kendiliğinden geçmeyebilir ve ilerleme eğilimi gösterebilir."
    },
    {
      question: "Ayak mantarı her zaman kaşıntı yapar mı?",
      answer: "Hayır. Bazı kişilerde kaşıntı hafif olabilir veya hiç hissedilmeyebilir."
    },
    {
      question: "Ayak mantarı tırnaklara yayılır mı?",
      answer: "Evet. Tırnak mantarı uygun şekilde ele alınmadığında tırnaklara yayılma riski artabilir."
    },
    {
      question: "Ayak mantarı tekrarlar mı?",
      answer: "Uygun teknikler ve hijyen sağlanmazsa tekrar edebilir."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ayak mantarı belirtileri kendiliğinden geçer mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hayır. Ayak mantarı kendiliğinden geçmeyebilir ve ilerleme eğilimi gösterebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Ayak mantarı her zaman kaşıntı yapar mı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hayır. Bazı kişilerde kaşıntı hafif olabilir veya hiç hissedilmeyebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Ayak mantarı tırnaklara yayılır mı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet. Uygun bakım ve hijyen sağlanmadığında tırnaklara yayılma riski artabilir."
        }
      },
      {
        "@type": "Question",
        "name": "Ayak mantarı tekrarlar mı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Uygun bakım yaklaşımı ve hijyen sağlanmazsa tekrar edebilir."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Ayak Mantarı Belirtileri Nelerdir? Erken ve İleri Evre İşaretler | Medipodo</title>
        <meta name="description" content="Ayak mantarı belirtileri nelerdir? Kaşıntı, kızarıklık, soyulma gibi erken ve ileri evre belirtileri ve ne zaman uzmana gidilmesi gerektiğini öğrenin." />
        <meta name="keywords" content="ayak mantarı belirtileri, ayak mantarı nasıl anlaşılır, parmak arası mantar, tinea pedis belirtileri, ayak mantarı erken belirtiler" />
        <link rel="canonical" href="https://medipodo.com/blog/ayak-mantari-belirtileri" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Ayak Mantarı Belirtileri Nelerdir? Erken ve İleri Evre İşaretler" />
        <meta property="og:description" content="Ayak mantarı belirtileri nelerdir? Kaşıntı, kızarıklık, soyulma gibi erken ve ileri evre belirtileri öğrenin." />
        <meta property="og:image" content="https://medipodo.com/blog-images/ayak-mantari-belirtileri/ayak-mantarinin-belirtileri.webp" />
        <meta property="og:url" content="https://medipodo.com/blog/ayak-mantari-belirtileri" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayak Mantarı Belirtileri Nelerdir?" />
        <meta name="twitter:description" content="Ayak mantarı erken ve ileri evre belirtileri." />
        <meta name="twitter:image" content="https://medipodo.com/blog-images/ayak-mantari-belirtileri/ayak-mantarinin-belirtileri.webp" />

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
              Ayak Mantarı Belirtileri Nelerdir? Erken ve İleri Evre İşaretler
            </h1>
            
            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Podolog Serdar Ceylan</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>7 dakika okuma</span>
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

            {/* Featured Snippet Box */}
            <section className="mb-8">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <p className="text-lg font-semibold text-gray-900 mb-3">Ayak mantarının en yaygın belirtileri şunlardır:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Parmak aralarında kaşıntı
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Deride kızarıklık ve soyulma
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Çatlama ve pullanma
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Kötü koku
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    İlerlemiş durumlarda tırnak değişimleri
                  </li>
                </ul>
              </div>
            </section>

            {/* Giriş */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ayak mantarı, çoğu zaman hafif belirtilerle başlayan ancak önemsenmediğinde ilerleyerek hem yaşam kalitesini düşüren hem de tırnaklara yayılabilen bir durumdur. Erken dönemde fark edilmesi, bakım sürecinin daha planlı şekilde ve daha kolay şekilde yapılmasını sağlar. Bu yazıda ayak mantarının <strong>erken ve ileri evre belirtilerini</strong>, hangi durumlarla karıştırıldığını ve ne zaman uzman desteği alınması gerektiğini detaylı şekilde ele alıyoruz.
              </p>

              <img 
                src="/blog-images/ayak-mantari-belirtileri/ayak-mantarinin-belirtileri.webp" 
                alt="Ayak mantarı belirtileri - parmak arası mantar"
                className="w-full h-auto rounded-xl shadow-lg mb-8"
                loading="lazy"
              />
            </section>

            {/* Ayak Mantarı Nasıl Anlaşılır? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ayak Mantarı Nasıl Anlaşılır?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ayak mantarı genellikle kaşıntı, kızarıklık ve ciltte değişikliklerle kendini gösterir. Belirtiler ilk aşamada hafif olabilir ve çoğu kişi tarafından önemsenmeyebilir. Ancak belirtiler zamanla belirginleşir ve ayak derisinin yapısı bozulmaya başlar.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Ayak mantarı çoğunlukla parmak aralarında başlar, ancak ayak tabanı ve topuk bölgesine de yayılabilir.
              </p>
            </section>

            {/* Erken Dönem Belirtileri */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ayak Mantarının Erken Dönem Belirtileri
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Erken evrede görülen belirtiler şunlardır:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  "Parmak aralarında hafif kaşıntı",
                  "Deride kızarıklık ve hassasiyet",
                  "İnce soyulmalar ve pullanma",
                  "Ayakta normalden farklı hafif bir koku",
                  "Ciltte kuruluk hissi"
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-green-50 rounded-lg shadow-md p-4">
                    <CheckCircle className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <img 
                src="/blog-images/ayak-mantari-belirtileri/parmak-arasi-mantar.webp" 
                alt="Parmak arası mantar belirtileri"
                className="w-full max-w-md mx-auto h-auto rounded-xl shadow-lg mb-6"
                loading="lazy"
              />

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <p className="text-gray-800">
                  Bu aşamada mantar enfeksiyonu henüz derinleşmemiştir. Erken fark edilen ayak mantarı, ilerlemeden yönetilmesi daha kolay olabilir.
                </p>
              </div>
            </section>

            {/* İlerlemiş Belirtiler */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                İlerlemiş Ayak Mantarı Belirtileri
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Uygun şekilde ele alınmayan ayak mantarı zamanla ilerler ve belirtiler şiddetlenir:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  "Şiddetli ve sürekli kaşıntı",
                  "Deride çatlaklar ve yarılmalar",
                  "Ağrılı kızarıklık ve yanma hissi",
                  "Derinin kalınlaşması ve sertleşmesi",
                  "Belirgin ve geçmeyen kötü koku"
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-red-50 rounded-lg shadow-md p-4">
                    <AlertTriangle className="text-red-600 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <img 
                src="/blog-images/ayak-mantari-belirtileri/ayak-mantari-ileri-derece.webp" 
                alt="İleri derece ayak mantarı belirtileri"
                className="w-full max-w-md mx-auto h-auto rounded-xl shadow-lg mb-6"
                loading="lazy"
              />

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <p className="text-gray-800">
                  Bu evrede enfeksiyon yalnızca ciltle sınırlı kalmayabilir ve <strong>tırnak mantarına</strong> dönüşme riski artar.
                </p>
              </div>
            </section>

            {/* Karıştırılan Durumlar */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ayak Mantarı ile Karıştırılan Durumlar
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ayak mantarı bazı cilt problemleriyle benzer belirtiler gösterebilir. Bu nedenle yanlış değerlendirme sık görülür:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  "Egzama",
                  "Alerjik dermatit",
                  "Aşırı kuruluk",
                  "Sedef hastalığı"
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-yellow-50 rounded-lg shadow-md p-4">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <p className="text-gray-800">
                  Bu durumlarda kullanılan yanlış ürünler, mantar enfeksiyonunun daha da ilerlemesine neden olabilir.
                </p>
              </div>
            </section>

            {/* Tırnak Mantarı ile Farkları */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Tırnak Mantarı Belirtileri ile Farkları
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ayak mantarı, tırnak mantarının en yaygın nedenlerinden biridir. Aralarındaki temel farklar şunlardır:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-700">Ayak mantarı ciltte başlar, tırnak mantarı tırnak yapısını etkiler</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-700">Tırnak mantarında renk değişimi ve kalınlaşma görülür</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-700">Ayak mantarı ilerledikçe tırnaklara yayılabilir</span>
                </li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-gray-700">
                  Ayak mantarının <strong>nasıl bulaştığını</strong> öğrenmek, erken dönemde önlem almak açısından önemlidir.
                </p>
                <p className="text-gray-700 mt-3">
                  👉 Bu konu hakkında detaylı bilgi için: <Link to="/blog/ayak-mantari-nasil-bulasir" className="text-blue-600 hover:text-blue-800 font-semibold underline">Ayak Mantarı Nasıl Bulaşır?</Link> yazımıza göz atabilirsiniz.
                </p>
              </div>
            </section>

            {/* Ne Zaman Uzman Desteği */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ne Zaman Uzman Desteği Alınmalı?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Aşağıdaki durumlarda evde yapılan uygulamalar yeterli olmayabilir:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  "Belirtiler 1–2 hafta içinde düzelmiyorsa",
                  "Kaşıntı ve kızarıklık giderek artıyorsa",
                  "Deride çatlama ve ağrı oluştuysa",
                  "Tırnaklarda renk veya şekil değişimi başladıysa"
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-600">
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Bu durumda profesyonel değerlendirme ve uygun bakım gereklidir.
              </p>

              <div className="bg-blue-600 text-white rounded-xl p-6">
                <p className="text-lg">
                  👉 <Link to="/hizmet/tirnak-mantari" className="text-white hover:text-blue-200 underline font-semibold">Ayak mantarı bakımı</Link> hakkında detaylı bilgi almak için hizmet sayfamızı ziyaret edebilirsiniz.
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
                  Ayak mantarı erken dönemde fark edildiğinde kontrol altına alınabilen bir enfeksiyondur. Belirtilerin ciddiye alınması ve doğru şekilde değerlendirilmesi, ilerlemenin önüne geçilmesini sağlar.
                </p>
                <p className="text-blue-200 text-sm italic">
                  Bu içerik Medipodo podoloji ekibi tarafından hazırlanmıştır.
                </p>
              </div>
            </section>

            {/* Tıbbi Bilgilendirme */}
            <section className="mb-12">
              <p className="text-xs text-gray-400 leading-relaxed">
                ⚠️ <span className="font-medium">Tıbbi Bilgilendirme:</span> Bu içerik bilgilendirme amaçlıdır; tıbbi değerlendirme yerine geçmez. Ayak sağlığınızla ilgili şikayetleriniz için mutlaka bir sağlık profesyoneline danışınız.
              </p>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ayak Mantarı İçin Değerlendirme ve Bakım Randevusu Alın
              </h2>
              <p className="text-green-100 mb-8 text-lg">
                Profesyonel podolojik değerlendirme ve bakım desteği için Medipodo'yu tercih edin.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/hizmet/tirnak-mantari"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                >
                  Tırnak Mantarı Bakımı
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

export default AyakMantariBelirtileriBlog;
