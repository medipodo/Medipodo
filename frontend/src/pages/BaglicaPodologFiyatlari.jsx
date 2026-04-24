import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, MapPin, Clock, ChevronDown, ChevronUp, CheckCircle, AlertCircle } from 'lucide-react';

const BaglicaPodologFiyatlari = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Bağlıca podolog fiyatları neden farklılık gösterir?",
      answer: "Bağlıca podolog fiyatları; her bireyin ayak yapısı, problemin ciddiyeti ve uygulanan işlem türüne göre değişir. Ayrıca evde hizmet veya klinik hizmeti tercihi de fiyatları etkileyen önemli faktörlerdendir."
    },
    {
      question: "Ankara Bağlıca'da medikal ayak bakımı kaç dakika sürer?",
      answer: "Medikal ayak bakımı genellikle 45–60 dakika arasında sürer. Ancak batık tırnak veya mantar gibi ek sorunlar varsa süre uzayabilir."
    },
    {
      question: "Bağlıca'da podolog seansı tek seferde yeterli olur mu?",
      answer: "Sorunun türüne ve ciddiyetine göre değişir. Basit nasır temizleme tek seansta çözülebilirken, batık tırnak veya mantar tedavisi düzenli takip gerektirebilir."
    },
    {
      question: "Bağlıca, Çayyolu ve Ümitköy'e evde podolog hizmeti var mı?",
      answer: "Evet, Ankara Bağlıca başta olmak üzere Çayyolu, Ümitköy, Yaşamkent ve çevre ilçelerde evde ayak bakımı hizmeti sunuyoruz. Evde hizmet fiyatları kliniğe göre farklılık gösterebilir."
    },
    {
      question: "Bağlıca podolog fiyatları 2026'da ne kadar?",
      answer: "2026 yılı güncel Bağlıca podolog fiyatları işlem türüne göre ₺500 ile ₺4.500 arasında değişmektedir. Kesin fiyat ilk değerlendirme sonrasında belirlenir."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Bağlıca podolog fiyatları neden farklılık gösterir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bağlıca podolog fiyatları; her bireyin ayak yapısı, problemin ciddiyeti ve uygulanan işlem türüne göre değişir. Ayrıca evde hizmet veya klinik hizmeti tercihi de fiyatları etkileyen önemli faktörlerdendir."
        }
      },
      {
        "@type": "Question",
        "name": "Ankara Bağlıca'da medikal ayak bakımı kaç dakika sürer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Medikal ayak bakımı genellikle 45–60 dakika arasında sürer. Ancak batık tırnak veya mantar gibi ek sorunlar varsa süre uzayabilir."
        }
      },
      {
        "@type": "Question",
        "name": "Bağlıca'da podolog seansı tek seferde yeterli olur mu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sorunun türüne ve ciddiyetine göre değişir. Basit nasır temizleme tek seansta çözülebilirken, batık tırnak veya mantar tedavisi düzenli takip gerektirebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Bağlıca, Çayyolu ve Ümitköy'e evde podolog hizmeti var mı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, Ankara Bağlıca başta olmak üzere Çayyolu, Ümitköy, Yaşamkent ve çevre ilçelerde evde ayak bakımı hizmeti sunuyoruz. Evde hizmet fiyatları kliniğe göre farklılık gösterebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Bağlıca podolog fiyatları 2026'da ne kadar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "2026 yılı güncel Bağlıca podolog fiyatları işlem türüne göre ₺500 ile ₺4.500 arasında değişmektedir. Kesin fiyat ilk değerlendirme sonrasında belirlenir."
        }
      }
    ]
  };

  const priceList = [
    { service: "Medikal ayak bakımı", price: "₺2.000 – ₺3.000" },
    { service: "Batık tırnak tedavisi", price: "₺1.000 – ₺2.000", link: "/hizmet/batik-tirnak" },
    { service: "B/S Bant Uygulaması", price: "₺2.000 – ₺3.000" },
    { service: "Tırnak mantarı bakımı", price: "₺1.000 – ₺2.000", link: "/hizmet/tirnak-mantari" },
    { service: "Nasır temizleme", price: "₺500 – ₺1.000", link: "/hizmet/nasir-tedavisi" },
    { service: "Topuk çatlak bakımı", price: "₺1.000 – ₺1.500" },
    { service: "Evde ayak bakımı", price: "₺3.500 – ₺4.500", highlight: true }
  ];

  return (
    <>
      <Helmet>
        <title>Bağlıca Podolog Fiyatları 2026 | Medikal Ayak Bakımı Ücretleri</title>
        <meta name="description" content="Bağlıca podolog fiyatları 2026 güncel liste. Batık tırnak, nasır, mantar tedavisi ve evde ayak bakımı ücretlerini detaylı öğrenin." />
        <meta name="keywords" content="bağlıca podolog fiyatları, bağlıca ayak bakımı, bağlıca podolog, ankara podolog fiyatları, çayyolu podolog, ümitköy podolog, yaşamkent podolog, evde ayak bakımı ankara" />
        <link rel="canonical" href="https://medipodo.com/baglica-podolog-fiyatlari" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bağlıca Podolog Fiyatları 2026 | Medikal Ayak Bakımı Ücretleri" />
        <meta property="og:description" content="Bağlıca podolog fiyatları 2026 güncel liste. Batık tırnak, nasır, mantar tedavisi ve evde ayak bakımı ücretlerini detaylı öğrenin." />
        <meta property="og:image" content="https://medipodo.com/images/lokasyon/baglica-podolog.webp" />
        <meta property="og:url" content="https://medipodo.com/baglica-podolog-fiyatlari" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bağlıca Podolog Fiyatları 2026" />
        <meta name="twitter:description" content="Bağlıca podolog fiyatları 2026 güncel liste." />
        <meta name="twitter:image" content="https://medipodo.com/images/lokasyon/baglica-podolog.webp" />

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-32 pb-16">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Ana Sayfa
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Bağlıca Podolog Fiyatları 2026 <span className="text-blue-200">(Güncel Liste)</span>
            </h1>
            
            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Bağlıca, Ankara</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>19 Şubat 2026</span>
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
                <strong>Bağlıca podolog fiyatları</strong>, <strong>Ankara</strong>'nın en hızlı gelişen bölgelerinden biri olan <strong>Ankara Bağlıca</strong>'da yapılacak işlemin türüne, uygulamanın süresine ve kişinin ayak sağlığı durumuna göre değişiklik göstermektedir. Medikal ayak bakımı; sadece sorun giderme olarak değil, aynı zamanda <strong>önleyici sağlık</strong> açısından önemli bir uygulamadır. <strong>Çayyolu</strong>, <strong>Ümitköy</strong> ve <strong>Yaşamkent</strong> gibi yakın bölgelerden de kolayca ulaşılabilir konumdayız.
              </p>

              <img 
                src="/images/lokasyon/baglica-podolog.webp" 
                alt="Bağlıca podolog fiyatları 2026 - Ankara medikal ayak bakımı"
                className="w-full h-auto rounded-xl shadow-lg mb-6"
                loading="lazy"
              />

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Bu sayfada <strong>Bağlıca podolog fiyatları</strong> hakkında en sık yapılan podolojik işlemlerin güncel ücretlerini, hangi durumlarda fiyatların değiştiğini ve hizmet detaylarını bulabilirsiniz.
              </p>

              <p className="text-gray-600">
                👉 Ayak sağlığı hakkında daha fazla bilgi için <Link to="/blog" className="text-blue-600 hover:text-blue-800 font-medium underline">blog sayfamızı</Link> ziyaret edebilirsiniz.
              </p>
            </section>

            {/* Search Intent Bloğu */}
            <section className="mb-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Bağlıca Podolog Fiyatları Neden Araştırılır?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong>Bağlıca podolog fiyatları</strong> araştırması yapan kişiler genellikle ayak sağlığı sorunları yaşayan ve profesyonel çözüm arayan bireylerdir. <strong>Batık tırnak</strong>, <strong>nasır</strong>, <strong>mantar</strong> veya <strong>topuk çatlağı</strong> gibi problemler günlük yaşamı olumsuz etkileyebilir.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Doğru podolog seçimi, hem tedavi sürecinin başarısı hem de uzun vadeli ayak sağlığı için kritik öneme sahiptir. <strong>Ankara Bağlıca</strong>'da hizmet veren deneyimli bir podolog, sorunu doğru teşhis ederek en uygun tedavi planını oluşturur.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Kaliteli hizmet</strong>, steril ekipman kullanımı ve uzman kadro, fiyat araştırmasında dikkat edilmesi gereken en önemli faktörlerdir. En ucuz değil, <strong>en doğru hizmeti</strong> almak uzun vadede hem sağlık hem de maliyet açısından avantaj sağlar.
              </p>
            </section>

            {/* Hizmetler */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Bağlıca Podolog Fiyatları: Hangi Hizmetleri Kapsar?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Ankara Bağlıca</strong>'da podologlar tarafından uygulanan profesyonel işlemler şunlardır:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  "Medikal ayak bakımı",
                  { text: "Batık tırnak tedavisi", link: "/hizmet/batik-tirnak" },
                  { text: "Tırnak mantarı bakımı", link: "/hizmet/tirnak-mantari" },
                  { text: "Nasır temizleme", link: "/hizmet/nasir-tedavisi" },
                  "Topuk çatlak bakımı",
                  "Diyabetik ayak bakımı",
                  "Evde ayak bakımı hizmeti"
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-blue-50 rounded-lg shadow-md p-4">
                    <CheckCircle className="text-blue-600 mr-3 flex-shrink-0" size={20} />
                    {typeof item === 'string' ? (
                      <span className="text-gray-700 font-medium">{item}</span>
                    ) : (
                      <Link to={item.link} className="text-blue-600 hover:text-blue-800 font-semibold underline">
                        {item.text}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-gray-600 italic">
                Bu işlemler kişiye özel planlandığı için fiyatlar da değişkenlik gösterebilir.
              </p>
            </section>

            {/* Fiyat Listesi */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                2026 Bağlıca Podolog Fiyatları (Güncel Liste)
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Aşağıda <strong>Ankara Bağlıca</strong> için 2026 yılı güncel <strong>podolog fiyatları</strong> yer almaktadır. Fiyatlar işlem türüne göre değişiklik göstermektedir:
              </p>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6 border-2 border-blue-100">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-5">
                  <h3 className="text-2xl font-bold flex items-center">
                    💰 Bağlıca Podolog Fiyatları 2026
                  </h3>
                  <p className="text-blue-100 text-sm mt-1">Güncel fiyat listesi - Çayyolu, Ümitköy, Yaşamkent dahil</p>
                </div>
                <div className="divide-y divide-gray-100">
                  {priceList.map((item, index) => (
                    <div 
                      key={index} 
                      className={`px-6 py-5 flex justify-between items-center transition-all ${item.highlight ? 'bg-green-50 border-l-4 border-green-500' : 'hover:bg-blue-50'}`}
                    >
                      <div className="flex items-center">
                        {item.link ? (
                          <Link to={item.link} className="text-blue-600 hover:text-blue-800 font-semibold underline text-lg">
                            {item.service}
                          </Link>
                        ) : (
                          <span className="text-gray-800 font-semibold text-lg">{item.service}</span>
                        )}
                        {item.highlight && (
                          <span className="ml-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold">🏠 Evde Hizmet</span>
                        )}
                      </div>
                      <span className={`font-bold text-xl ${item.highlight ? 'text-green-600' : 'text-blue-600'}`}>
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <p className="text-gray-700 flex items-start">
                  <AlertCircle className="text-yellow-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span><strong>Önemli Not:</strong> Kesin <strong>Bağlıca podolog fiyatları</strong>, ilk muayene ve değerlendirme sonrasında belirlenir. Fiyatlar KDV dahildir.</span>
                </p>
              </div>
            </section>

            {/* Fiyat Faktörleri */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Bağlıca Podolog Fiyatları Neye Göre Değişir?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Bağlıca podolog fiyatları</strong>nı etkileyen başlıca faktörler:
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                    <span className="text-blue-600 mr-2">🔹</span> Sorunun Seviyesi
                  </h3>
                  <p className="text-gray-700">
                    İleri düzey <Link to="/hizmet/batik-tirnak" className="text-blue-600 hover:text-blue-800 underline">batık tırnak</Link> veya yaygın <Link to="/hizmet/tirnak-mantari" className="text-blue-600 hover:text-blue-800 underline">tırnak mantarı</Link> durumlarında işlem süresi artar. Ayrıca <Link to="/hizmet/nasir-tedavisi" className="text-blue-600 hover:text-blue-800 underline">nasır</Link> problemlerinin derinliği de fiyatı etkiler.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                    <span className="text-blue-600 mr-2">🔹</span> Seans Sayısı
                  </h3>
                  <p className="text-gray-700">
                    Bazı işlemler tek seans değil, birkaç seans sürebilir.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                    <span className="text-blue-600 mr-2">🔹</span> Evde Hizmet Talebi
                  </h3>
                  <p className="text-gray-700">
                    Evde ayak bakımı hizmetleri, ulaşım ve ekip nedeniyle farklı fiyatlandırılır.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                    <span className="text-blue-600 mr-2">🔹</span> Kullanılan Teknik ve Ürünler
                  </h3>
                  <p className="text-gray-700">
                    Steril ekipman ve profesyonel cihazlar fiyatı etkileyebilir.
                  </p>
                </div>
              </div>
            </section>

            {/* Evde Ayak Bakımı */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Bağlıca ve Çevresinde Evde Ayak Bakımı Hizmeti
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Ankara Bağlıca</strong>, Çayyolu, Ümitköy, Yaşamkent, Etimesgut ve Çankaya gibi birçok ilçede gerçekleştirdiğimiz <strong>evde ayak bakımı</strong> hizmeti, özellikle yaşlı, diyabet hastası veya hareket kısıtlılığı olan kişiler için büyük avantaj sağlar. <strong>Bağlıca podolog fiyatları</strong> evde hizmet için farklılık gösterebilir.
              </p>

              <div className="bg-green-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Evde sunulan hizmetlerde:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-600 mr-3" size={20} />
                    <span className="text-gray-700"><strong>Steril ekipman</strong> kullanılır</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-600 mr-3" size={20} />
                    <span className="text-gray-700"><strong>Profesyonel podolog</strong> tarafından uygulanır</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-600 mr-3" size={20} />
                    <span className="text-gray-700"><strong>Kişiye özel bakım planı</strong> oluşturulur</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Bu hizmet sayesinde kliniğe gitmeden güvenli bir şekilde bakım yapılabilir.
              </p>
            </section>

            {/* Podolog Seçerken */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Bağlıca'da Podolog Seçerken Nelere Dikkat Edilmeli?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Bağlıca</strong>'da podolog seçerken şu kriterlere dikkat edilmelidir:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  "Hijyen ve sterilizasyon kurallarına uygunluk",
                  "Eğitim ve uzmanlık",
                  "Kullanılan ekipmanların profesyonelliği",
                  "Hasta yorumları ve deneyim"
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-600">
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-gray-700 flex items-start">
                  <AlertCircle className="text-red-600 mr-2 flex-shrink-0 mt-1" size={20} />
                  <span><strong>Uyarı:</strong> Yanlış uygulamalar ayak sağlığını daha da kötüleştirebilir.</span>
                </p>
              </div>
            </section>

            {/* SSS */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Sık Sorulan Sorular
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                <strong>Bağlıca podolog fiyatları</strong> hakkında en çok merak edilen sorular ve cevaplar aşağıda yer almaktadır. <strong>Ankara Bağlıca</strong>, <strong>Çayyolu</strong>, <strong>Ümitköy</strong> ve <strong>Yaşamkent</strong> bölgelerinde podolog hizmetleri hakkında detaylı bilgileri inceleyebilirsiniz.
              </p>

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

            {/* Randevu CTA */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Bağlıca Podolog Fiyatları Hakkında Detaylı Bilgi Alın
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Ankara Bağlıca</strong>'da profesyonel ayak bakımı hizmeti almak için bizimle iletişime geçebilirsiniz. <strong>Çayyolu</strong>, <strong>Ümitköy</strong> ve <strong>Yaşamkent</strong>'ten de kolayca ulaşabilirsiniz. Uzman podoloji ekibimiz, ihtiyacınıza uygun en doğru tedavi ve bakım planını oluşturur.
              </p>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Bağlıca Podolog Fiyatları Hakkında Detaylı Bilgi Almak ve Randevu Oluşturmak İçin Hemen Bizimle İletişime Geçin
              </h2>
              <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                <strong>Ankara Bağlıca</strong>, Çayyolu, Ümitköy ve Yaşamkent bölgelerinde <strong>profesyonel ayak bakımı</strong> hizmeti sunuyoruz. Steril ortam, uzman kadro ve uygun fiyat garantisi.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/iletisim"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                >
                  📅 Hemen Randevu Al
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

            {/* Tıbbi Bilgilendirme */}
            <section className="mt-8">
              <p className="text-xs text-gray-400 leading-relaxed">
                ⚠️ <span className="font-medium">Tıbbi Bilgilendirme:</span> Bu içerik bilgilendirme amaçlıdır; tanı ve tedavi yerine geçmez. Ayak sağlığınızla ilgili şikayetleriniz için mutlaka bir sağlık profesyoneline danışınız.
              </p>
            </section>

          </div>
        </div>
      </div>
    </>
  );
};

export default BaglicaPodologFiyatlari;
