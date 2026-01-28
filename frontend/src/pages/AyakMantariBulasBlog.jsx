import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, ChevronDown, ChevronUp, Phone, AlertTriangle, CheckCircle, Home, Droplets, Wind, Shield } from 'lucide-react';

const AyakMantariBulasBlog = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Ayak mantarı insandan insana bulaşır mı?",
      answer: "Evet. Ayak mantarı, enfekte kişinin kullandığı terlik, havlu ve ortak zeminler aracılığıyla dolaylı olarak bulaşabilir."
    },
    {
      question: "Ayak mantarı evde bulaşır mı?",
      answer: "Evet. Ortak terlik ve havlu kullanımı ile banyonun paylaşımlı olması ev içinde bulaşma riskini artırır."
    },
    {
      question: "Ayak mantarı kendiliğinden geçer mi?",
      answer: "Hayır. Ayak mantarı tedavi edilmediğinde ilerler ve kendiliğinden geçmez."
    },
    {
      question: "Ayak mantarı tekrarlar mı?",
      answer: "Evet. Uygun tedavi ve hijyen sağlanmazsa ayak mantarı tekrarlayabilir."
    },
    {
      question: "Ayak mantarı tırnak mantarına dönüşür mü?",
      answer: "Evet. Ayak derisindeki mantar enfeksiyonu tedavi edilmezse tırnak mantarına ilerleyebilir."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ayak mantarı insandan insana bulaşır mı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet. Ayak mantarı, enfekte kişinin kullandığı terlik, havlu ve ortak zeminler aracılığıyla dolaylı olarak bulaşabilir."
        }
      },
      {
        "@type": "Question",
        "name": "Ayak mantarı evde bulaşır mı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet. Ortak terlik ve havlu kullanımı ile banyonun paylaşımlı olması ev içinde bulaşma riskini artırır."
        }
      },
      {
        "@type": "Question",
        "name": "Ayak mantarı kendiliğinden geçer mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hayır. Ayak mantarı tedavi edilmediğinde ilerler ve kendiliğinden geçmez."
        }
      },
      {
        "@type": "Question",
        "name": "Ayak mantarı tekrarlar mı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet. Uygun tedavi ve hijyen sağlanmazsa ayak mantarı tekrarlayabilir."
        }
      },
      {
        "@type": "Question",
        "name": "Ayak mantarı tırnak mantarına dönüşür mü?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet. Ayak derisindeki mantar enfeksiyonu tedavi edilmezse tırnak mantarına ilerleyebilir."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Ayak Mantarı Nasıl Bulaşır? Bulaşma Yolları ve Korunma | Medipodo</title>
        <meta name="description" content="Ayak mantarı nasıl bulaşır? Havuz, spor salonu, ev içi bulaşma yolları ve korunma yöntemleri. Ayak mantarı bulaşıcı mıdır sorusunun cevabı." />
        <meta name="keywords" content="ayak mantarı bulaşır mı, ayak mantarı nasıl bulaşır, ayak mantarı bulaşma, tinea pedis, ayak mantarı korunma, ayak hijyeni" />
        <link rel="canonical" href="https://medipodo.com/blog/ayak-mantari-nasil-bulasir" />
        
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Ayak Mantarı Nasıl Bulaşır? Bulaşma Yolları ve Korunma" />
        <meta property="og:description" content="Ayak mantarı nasıl bulaşır? Bulaşma yolları, risk faktörleri ve korunma yöntemleri hakkında detaylı bilgi." />
        <meta property="og:image" content="https://medipodo.com/blog-images/ayak-mantari/ayak-mantari-nasil-bulasir.webp" />
        <meta property="og:url" content="https://medipodo.com/blog/ayak-mantari-nasil-bulasir" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayak Mantarı Nasıl Bulaşır?" />
        <meta name="twitter:description" content="Ayak mantarı bulaşma yolları ve korunma yöntemleri." />
        <meta name="twitter:image" content="https://medipodo.com/blog-images/ayak-mantari/ayak-mantari-nasil-bulasir.webp" />

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
              Ayak Mantarı Nasıl Bulaşır?
            </h1>
            
            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Podolog Serdar Ceylan</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>8 dakika okuma</span>
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
                Ayak mantarı, toplumda sanıldığından çok daha yaygın görülen ve çoğu zaman fark edilmeden ilerleyen bir enfeksiyondur. Özellikle ortak alanların yoğun kullanıldığı şehir yaşamında, ayak mantarının bulaşma riski ciddi ölçüde artar. Bu yazıda ayak mantarının <strong>nasıl bulaştığını</strong>, hangi ortamlarda riskin yükseldiğini ve bulaşmayı önlemek için neler yapılması gerektiğini net ve anlaşılır şekilde ele alıyoruz.
              </p>

              <img 
                src="/blog-images/ayak-mantari/ayak-mantari-nasil-bulasir.webp" 
                alt="Ayak mantarı bulaşma yolları ve korunma"
                className="w-full h-auto rounded-xl shadow-lg mb-8"
                loading="lazy"
              />
            </section>

            {/* Ayak Mantarı Bulaşıcı mıdır? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ayak Mantarı Bulaşıcı mıdır?
              </h2>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
                <p className="text-gray-800 font-medium flex items-center">
                  <AlertTriangle className="mr-2 text-red-600 flex-shrink-0" size={24} />
                  Evet, ayak mantarı <strong>bulaşıcıdır</strong>. Mantar etkenleri (dermatofitler), nemli ve sıcak ortamlarda uzun süre canlı kalabilir. Bu nedenle enfekte bir yüzeyle temas eden sağlıklı ciltte kolayca yerleşebilir.
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Bulaşma genellikle <strong>doğrudan temasla değil</strong>, mantarın bulunduğu yüzeyler aracılığıyla olur.
              </p>
            </section>

            {/* Ayak Mantarı Nasıl Bulaşır? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ayak Mantarı Nasıl Bulaşır?
              </h2>

              {/* 1. Ortak Kullanılan Alanlar */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Droplets className="text-blue-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">1. Ortak Kullanılan Alanlar</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Havuzlar, spor salonları, hamamlar ve ortak duş alanları ayak mantarının en sık bulaştığı yerlerdir. Bu alanlarda çıplak ayakla dolaşmak, mantar sporlarının doğrudan ciltle temas etmesine neden olur.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Ev İçinde Bulaşma */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Home className="text-orange-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">2. Ev İçinde Bulaşma</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Ayak mantarı sadece dış ortamdan değil, <strong>ev içinde de bulaşabilir</strong>. Aynı banyoyu kullanmak, ortak terlik giymek veya aynı havlunun paylaşılması mantarın aile bireyleri arasında yayılmasına yol açabilir.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Kapalı Ayakkabılar */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Wind className="text-purple-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">3. Kapalı ve Hava Almayan Ayakkabılar</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Uzun süre kapalı kalan, hava almayan ayakkabılar ayakta nem birikmesine neden olur. Nemli cilt, mantar için ideal bir ortam oluşturur. Özellikle aynı ayakkabının her gün giyilmesi riski artırır.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. Ayak Hijyeni */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <Shield className="text-green-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">4. Ayak Hijyenine Dikkat Edilmemesi</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Ayakların yıkanmaması, yıkandıktan sonra parmak aralarının kurulanmaması veya terli çorapların uzun süre değiştirilmemesi mantarın yerleşmesini kolaylaştırır.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Tırnak Mantarı ile İlişki */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Tırnak Mantarı ile Ayak Mantarı Arasındaki İlişki
              </h2>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-6">
                <p className="text-gray-800 leading-relaxed">
                  Ayak mantarı tedavi edilmediğinde zamanla <Link to="/blog/tirnak-mantari-tedavisi" className="text-blue-600 hover:text-blue-800 font-semibold underline">tedavi edilmediğinde tırnak mantarına dönüşebilir</Link>. Aynı şekilde tırnak mantarı olan kişilerde ayak derisinde mantar gelişme riski daha yüksektir. Bu nedenle her iki durum birlikte değerlendirilmelidir.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-gray-700">
                  📌 Bu konu hakkında detaylı bilgi için: <Link to="/hizmet/tirnak-mantari" className="text-blue-600 hover:text-blue-800 font-semibold underline">Tırnak Mantarı Tedavisi</Link> sayfasına göz atabilirsiniz.
                </p>
              </div>
            </section>

            {/* Kimlerde Daha Sık Görülür */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ayak Mantarı Kimlerde Daha Sık Görülür?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Spor salonu ve havuz kullananlar",
                  "Diyabet hastaları",
                  "Aşırı terleme sorunu yaşayanlar",
                  "Bağışıklık sistemi zayıf bireyler",
                  "Uzun süre kapalı ayakkabı giyenler"
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg shadow-md p-4">
                    <CheckCircle className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Nasıl Önlenir */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ayak Mantarı Bulaşması Nasıl Önlenir?
              </h2>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
                <ul className="space-y-4">
                  {[
                    "Ortak alanlarda mutlaka terlik kullanın",
                    "Ayaklarınızı her gün yıkayıp parmak aralarını iyice kurulayın",
                    "Pamuklu ve nefes alabilen çoraplar tercih edin",
                    "Ayakkabılarınızı havalandırın ve mümkünse dönüşümlü giyin",
                    "Ev içinde kişisel terlik ve havlu kullanın"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Ne Zaman Uzman Desteği */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ne Zaman Uzman Desteği Alınmalı?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ayakta kaşıntı, kızarıklık, soyulma veya <Link to="/blog/ayak-kokusu-ve-mantar-iliskisi" className="text-blue-600 hover:text-blue-800 font-semibold underline">kötü koku ile birlikte görülebilir</Link> uzun süredir devam ediyorsa, evde yapılan uygulamalar yeterli olmayabilir. Bu durumda profesyonel değerlendirme ve uygun tedavi planı gereklidir.
              </p>

              <div className="bg-blue-600 text-white rounded-xl p-6">
                <p className="text-lg mb-4">
                  👉 <strong><Link to="/hizmet/tirnak-mantari" className="text-white hover:text-blue-200 underline">Ayak mantarı tedavisi</Link></strong> hakkında detaylı bilgi almak için hizmet sayfamızı ziyaret edebilirsiniz.
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
                <p className="text-blue-100 leading-relaxed">
                  Ayak mantarı küçük bir sorun gibi görülse de, bulaşma riski yüksek ve ilerleyici bir enfeksiyondur. Erken fark edilmesi ve doğru şekilde ele alınması, hem kişinin kendi sağlığı hem de çevresindekiler için önemlidir.
                </p>
              </div>
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

export default AyakMantariBulasBlog;
