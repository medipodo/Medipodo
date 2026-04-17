import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, Phone, ChevronDown, ChevronUp, MessageCircle, AlertTriangle, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';

const TirnakTeliFiyatlariBlog = () => {
  const [openFaqIndexes, setOpenFaqIndexes] = useState([0, 1]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqItems = [
    {
      question: "Tırnak teli ne kadar sürede etki eder?",
      answer: "Tırnak teli uygulaması genellikle ilk işlemden hemen sonra etkisini göstermeye başlar. Özellikle batık tırnak nedeniyle ağrı yaşayan kişiler, uygulamanın ardından kısa sürede rahatlama hissedebilir. Bunun nedeni, tel sisteminin tırnağın kenarlarını yukarı doğru yönlendirerek baskıyı azaltmasıdır. Ancak kalıcı ve sağlıklı bir iyileşme süreci için tek uygulama her zaman yeterli olmayabilir. Tırnağın yapısına ve batığın derecesine bağlı olarak birkaç kontrol seansı gerekebilir. Ankara'da tırnak teli uygulaması yaptıran birçok kişi için ortalama süreç 4 ila 8 hafta arasında değişir. Düzenli kontroller ve doğru bakım ile hem iyileşme süresi hızlanır hem de batığın tekrar etme riski önemli ölçüde azalır."
    },
    {
      question: "Tırnak teli uygulaması acıtır mı?",
      answer: "Tırnak teli uygulaması cerrahi bir işlem olmadığı için genellikle ağrısız bir yöntem olarak kabul edilir. Uygulama sırasında tırnağın üzerine yerleştirilen özel tel sistemi, tırnağın kenarlarını nazikçe yukarı doğru kaldırarak batık oluşumunu azaltmayı hedefler. İşlem sırasında hastalar çoğunlukla sadece hafif bir baskı hissi tarif eder. Özellikle ileri seviyede batık problemi olan kişilerde, ilk birkaç gün hafif bir hassasiyet oluşabilir. Ancak bu durum kısa sürede azalır ve günlük yaşamı etkileyecek seviyede bir ağrı oluşmaz. Doğru şekilde yapılan bir uygulama sonrasında kişi aynı gün normal yürüyüşüne devam edebilir ve herhangi bir iş gücü kaybı yaşamaz."
    },
    {
      question: "Tırnak teli düşer mi?",
      answer: "Tırnak teli, doğru teknikle uygulandığında tırnak yüzeyine sağlam şekilde tutunur ve günlük yaşamda kolayca düşmez. Kullanılan sistemin kalitesi ve uygulamayı yapan uzmanın deneyimi, telin dayanıklılığını doğrudan etkiler. Ancak bazı durumlarda; tırnağın aşırı nemli kalması, dar ayakkabı kullanımı veya tırnağa alınan darbeler telin yerinden oynamasına neden olabilir. Bu gibi durumlarda panik yapmaya gerek yoktur. Kontrol seanslarında tel yeniden düzenlenebilir veya gerekirse yenisi uygulanır. Ankara'da profesyonel podologlar tarafından yapılan uygulamalarda telin düşme ihtimali oldukça düşüktür."
    },
    {
      question: "Tırnak teli kalıcı çözüm mü?",
      answer: "Tırnak teli uygulaması batık tırnak problemini düzeltmede oldukça etkili bir yöntemdir, ancak kalıcılık tamamen kişinin bakım alışkanlıklarına bağlıdır. Uygulama, tırnağın doğru formda uzamasını sağlayarak batık oluşumunu engeller. Ancak yanlış tırnak kesimi, dar ayakkabı kullanımı veya genetik yatkınlık gibi faktörler devam ederse batık tekrar oluşabilir. Bu nedenle uygulama sonrası süreçte doğru tırnak kesimi ve düzenli bakım büyük önem taşır. Uzman kontrolünde ilerleyen ve önerilere dikkat eden kişilerde tırnak teli uygulaması uzun vadeli ve başarılı sonuçlar sağlar."
    },
    {
      question: "Tırnak teli yaptırdıktan sonra duş alınır mı?",
      answer: "Tırnak teli uygulaması sonrasında günlük yaşam genellikle kısıtlanmaz ve kişi normal rutinine devam edebilir. Duş almak da bu sürece dahildir. Uygulama sonrası aynı gün veya ertesi gün duş alınmasında herhangi bir sakınca yoktur. Ancak dikkat edilmesi gereken nokta, uygulama bölgesinin uzun süre nemli bırakılmamasıdır. Duş sonrası ayağın iyice kurulanması, telin daha uzun süre sağlıklı şekilde kullanılmasını sağlar. Ayrıca hijyen kurallarına dikkat edilmesi, hem enfeksiyon riskini azaltır hem de bakım sürecini olumlu yönde etkiler."
    },
    {
      question: "Tırnak teli SGK karşılıyor mu?",
      answer: "Tırnak teli uygulaması genellikle medikal ayak bakımı kapsamında değerlendirilen, cerrahi olmayan bir işlemdir. Bu nedenle çoğu durumda SGK tarafından karşılanmaz ve özel hizmet olarak sunulur. Fiyatlar uygulamanın yapılacağı merkeze, kullanılan tekniklere ve seans sayısına göre değişiklik gösterebilir. Bu yüzden en doğru bilgi, bireysel değerlendirme sonrasında verilir. Ankara'da tırnak teli uygulaması yaptırmayı düşünen kişiler için en sağlıklı yaklaşım, doğrudan merkez ile iletişime geçerek detaylı bilgi ve fiyat almaktır."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tırnak Teli Takma Fiyatları 2026 | Ankara Güncel Liste",
    "description": "2026 yılında Ankara'da tırnak teli takma fiyatları, seans süreleri ve uygulama detayları. Batık tırnak için ameliyatsız çözüm rehberi.",
    "image": "/images/batik-tirnak-teli-takma-fiyatlari-ankara.webp",
    "author": {
      "@type": "Person",
      "name": "Podolog Serdar Ceylan"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Medipodo Ayak Sağlığı Merkezi",
      "logo": {
        "@type": "ImageObject",
        "url": "https://medipodo.com/images/logo.png"
      }
    },
    "datePublished": "2026-04-17",
    "dateModified": "2026-04-17"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://medipodo.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://medipodo.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Tırnak Teli Takma Fiyatları 2026", "item": "https://medipodo.com/blog/tirnak-teli-fiyatlari-ankara" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Tırnak Teli Takma Fiyatları 2026 | Ankara Güncel Liste | Medipodo</title>
        <meta name="description" content="2026 yılında Ankara'da tırnak teli takma fiyatları, seans süreleri ve uygulama detayları. Batık tırnak için ameliyatsız çözüm rehberi." />
        <meta name="keywords" content="tırnak teli fiyatları, tırnak teli ankara, batık tırnak teli, tırnak teli takma fiyatı 2026, podolog ankara, batık tırnak ameliyatsız, BS bant, niti tel" />
        <link rel="canonical" href="https://medipodo.com/blog/tirnak-teli-fiyatlari-ankara" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Tırnak Teli Takma Fiyatları 2026 | Ankara Güncel Liste" />
        <meta property="og:description" content="Ankara'da tırnak teli takma fiyatları neye göre değişir? Güncel fiyat aralıkları ve uygulama detayları." />
        <meta property="og:image" content="https://medipodo.com/images/batik-tirnak-teli-takma-fiyatlari-ankara.webp" />
        <meta property="og:url" content="https://medipodo.com/blog/tirnak-teli-fiyatlari-ankara" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tırnak Teli Takma Fiyatları 2026 | Ankara Güncel Liste" />
        <meta name="twitter:description" content="Ankara'da tırnak teli fiyatları, seans süreleri ve uygulama detayları." />
        <meta name="twitter:image" content="https://medipodo.com/images/batik-tirnak-teli-takma-fiyatlari-ankara.webp" />

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-32 pb-16">
          <div className="container mx-auto px-4">
            <Link to="/blog" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors" data-testid="back-to-blog">
              <ArrowLeft size={20} className="mr-2" />
              Blog'a Dön
            </Link>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="blog-title">
              Tırnak Teli Takma Fiyatları 2026<br />
              <span className="text-blue-200">Ankara Güncel Liste</span>
            </h1>

            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Podolog Serdar Ceylan</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>17 Nisan 2026 · 12 dakika okuma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">

            {/* Giriş */}
            <section className="mb-10">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                2026 yılında Ankara'da tırnak teli takma fiyatları ne kadar oldu? Batık tırnak sorunu yaşayan birçok kişi, uygulamanın ücretini ve kaç seans süreceğini merak ediyor. 2026 yılı itibarıyla Ankara'da bu uygulamanın ücretleri; kullanılan teknik, seans sayısı ve tırnağın durumuna göre değişiklik gösterebilir.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Bu rehberde hem güncel fiyat aralıklarını, hem de tırnak teli uygulamasıyla ilgili merak edilen tüm detayları bulabilirsin.
              </p>
            </section>

            {/* Kapak Görseli */}
            <div className="mb-12">
              <img
                src="/images/batik-tirnak-teli-takma-fiyatlari-ankara.webp"
                alt="Tırnak teli uygulaması Ankara - batık tırnak için ameliyatsız çözüm"
                width="1200"
                height="675"
                className="w-full h-auto rounded-xl shadow-lg"
                loading="eager"
              />
            </div>

            {/* ==================== */}
            {/* FİYATLAR NE KADAR */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Tırnak Teli Takma Fiyatları Ne Kadar?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                2026 yılı için Ankara'da tırnak teli uygulaması fiyatları ortalama olarak:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
                  <thead className="bg-blue-800 text-white">
                    <tr>
                      <th className="px-5 py-4 text-left font-semibold">Uygulama</th>
                      <th className="px-5 py-4 text-left font-semibold">Fiyat Aralığı (2026)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-5 py-4 font-medium text-gray-900">Tek tırnak uygulaması</td>
                      <td className="px-5 py-4 text-gray-700">2.500 – 3.500 TL</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors bg-gray-50">
                      <td className="px-5 py-4 font-medium text-gray-900">İki kenar uygulama</td>
                      <td className="px-5 py-4 text-gray-700">5.000 – 7.000 TL</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-5 py-4 font-medium text-gray-900">Kontrol / bakım seansları</td>
                      <td className="px-5 py-4 text-gray-700">500 – 1.000 TL</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border border-amber-300 p-4 rounded-lg mb-6">
                <p className="text-amber-800 text-sm">
                  <AlertTriangle className="inline mr-2" size={16} />
                  Bu fiyatlar ortalama aralıkları göstermektedir. Net fiyatlandırma, kişinin tırnak yapısı ve ihtiyaç duyulan seans sayısına göre belirlenir.
                </p>
              </div>

              <p className="text-gray-700">
                Daha genel fiyat bilgileri için <Link to="/blog/podolog-fiyatlari-ankara" className="text-blue-600 hover:text-blue-800 font-semibold underline">podolog fiyatları Ankara</Link> sayfamıza da göz atabilirsin.
              </p>
            </section>

            {/* Tırnak teli yakın plan görseli */}
            <div className="mb-12">
              <img
                src="/images/tirnak-teli-uygulamasi.webp"
                alt="Tırnak teli uygulaması Ankara - yakın plan görünüm"
                width="800"
                height="600"
                className="w-full max-w-lg mx-auto h-auto rounded-xl shadow-lg"
                loading="lazy"
              />
              <p className="text-sm text-gray-500 mt-2 text-center italic">Tırnak teli uygulaması yakın plan görünümü</p>
            </div>

            {/* ==================== */}
            {/* FİYATLAR NEYE GÖRE DEĞİŞİR */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Tırnak Teli Fiyatları Neye Göre Değişir?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Tırnak teli ücretleri sabit değildir. Aşağıdaki faktörler fiyatları doğrudan etkiler. Ankara'da batık tırnak teli uygulaması için size özel fiyat almak isterseniz <Link to="/iletisim" className="text-blue-600 hover:text-blue-800 font-semibold underline">iletişim sayfamızdan</Link> bize ulaşabilirsiniz.
              </p>

              {/* Batık tırnağın derecesi */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-red-400">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Batık Tırnağın Derecesi</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  İleri seviyede batıklar daha fazla işlem ve seans gerektirir. Erken dönemde fark edilen durumlarda süreç daha kısa ve daha az maliyetli olabilir.
                </p>
                <p className="text-gray-700">
                  Batık tırnağın neden oluştuğunu ve hangi faktörlerin etkili olduğunu merak ediyorsan <Link to="/blog/batik-tirnak-nedenleri" className="text-blue-600 hover:text-blue-800 font-semibold underline">batık tırnak nedenleri</Link> yazımız aydınlatıcı olacaktır.
                </p>
              </div>

              {/* Kullanılan tel sistemi */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-400">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Kullanılan Tel Sistemi</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Her yöntemin maliyeti ve uygulama süreci farklıdır:
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1 font-bold">•</span>BS bant sistemi</li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1 font-bold">•</span>Metal tel sistemi</li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1 font-bold">•</span>Plastik tel uygulamaları</li>
                </ul>
                <p className="text-gray-700">
                  Uygulama türlerini daha yakından incelemek için <Link to="/blog/bs-bant-uygulamasi" className="text-blue-600 hover:text-blue-800 font-semibold underline">B/S bant uygulaması</Link> yazımıza göz atabilirsin.
                </p>
              </div>

              {/* NiTi tel görseli */}
              <div className="mb-8">
                <img
                  src="/images/niti-tel-tirnak-teli.webp"
                  alt="NiTi tel tırnak teli uygulaması - batık tırnak için modern çözüm"
                  width="800"
                  height="600"
                  className="w-full max-w-lg mx-auto h-auto rounded-xl shadow-lg"
                  loading="lazy"
                />
                <p className="text-sm text-gray-500 mt-2 text-center italic">NiTi tel sistemi ile tırnak teli uygulaması</p>
              </div>

              {/* Seans sayısı */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-400">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Seans Sayısı</h3>
                <p className="text-gray-700 leading-relaxed">
                  Bazı durumlarda tek uygulama yeterliyken, bazı kişilerde düzenli kontrol gerekir. Seans sayısı, tırnağın durumuna ve iyileşme sürecine göre belirlenir.
                </p>
              </div>
            </section>

            {/* ==================== */}
            {/* ANKARA'DA FİYATLAR */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ankara'da Tırnak Teli Fiyatları
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ankara'da Bağlıca, Yaşamkent, Çayyolu, Ümitköy, Etimesgut semtlerinde tırnak teli uygulaması yapan merkezler arasında fiyat farkları olabilir. Bunun nedeni:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Uzmanın Deneyimi</h3>
                  <p className="text-gray-700">Yıllara dayanan klinik tecrübe, uygulama kalitesini ve sonuçlarını doğrudan etkiler.</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-teal-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Ekipman Kalitesi</h3>
                  <p className="text-gray-700">Kullanılan tel sistemi, sterilizasyon standartları ve cihaz kalitesi fiyata yansır.</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-amber-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Hijyen Standartları</h3>
                  <p className="text-gray-700">Profesyonel bir ortamda uygulanan işlem, güvenli ve etkili sonuçlar sağlar.</p>
                </div>
              </div>

              <p className="text-gray-700 mb-3">
                Ankara özelinde podolog hizmetleri hakkında detaylı bilgi almak için <Link to="/blog/baglica-podolog-hizmetleri" className="text-blue-600 hover:text-blue-800 font-semibold underline">Bağlıca podolog hizmetleri</Link> sayfamızı ziyaret edebilirsin.
              </p>
              <p className="text-gray-700">
                Ayrıca genel hizmet detayına <Link to="/hizmet/batik-tirnak" className="text-blue-600 hover:text-blue-800 font-semibold underline">batık tırnak bakımı hizmeti</Link> sayfamızdan ulaşabilirsin.
              </p>
            </section>

            {/* Podolog uygulama anı görseli */}
            <div className="mb-12">
              <img
                src="/images/podolog-ankara-tirnak-teli.webp"
                alt="Podolog Ankara tırnak teli uygulaması - profesyonel bakım"
                width="800"
                height="600"
                className="w-full max-w-lg mx-auto h-auto rounded-xl shadow-lg"
                loading="lazy"
              />
              <p className="text-sm text-gray-500 mt-2 text-center italic">Ankara'da profesyonel podolog tarafından tırnak teli uygulaması</p>
            </div>

            {/* ==================== */}
            {/* KAÇ SEANS SÜRER */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Tırnak Teli Uygulaması Kaç Seans Sürer?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Tırnak teli uygulaması genellikle:
              </p>
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">1</div>
                    <span className="text-gray-700 font-medium">Ana uygulama seansı</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">2-4</div>
                    <span className="text-gray-700 font-medium">Kontrol seansları</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Batığın durumuna göre süreç 1 ila 3 ay arasında değişebilir.
              </p>
            </section>

            {/* ==================== */}
            {/* ACITIR MI */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Tırnak Teli Acıtır mı?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                En çok sorulan sorulardan biri de budur. Tırnak teli uygulaması cerrahi bir işlem değildir. Bu nedenle genellikle:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 rounded-xl p-5 text-center">
                  <CheckCircle className="text-green-600 mx-auto mb-2" size={28} />
                  <p className="text-gray-700 font-medium">Ağrısızdır</p>
                </div>
                <div className="bg-green-50 rounded-xl p-5 text-center">
                  <CheckCircle className="text-green-600 mx-auto mb-2" size={28} />
                  <p className="text-gray-700 font-medium">Hafif baskı hissi olabilir</p>
                </div>
                <div className="bg-green-50 rounded-xl p-5 text-center">
                  <CheckCircle className="text-green-600 mx-auto mb-2" size={28} />
                  <p className="text-gray-700 font-medium">Günlük hayata hemen dönülebilir</p>
                </div>
              </div>
              <p className="text-gray-700">
                Evde batık tırnak rahatsızlığını hafifletmek için uygulayabileceğin yöntemler hakkında <Link to="/blog/batik-tirnak-evde-nasil-rahatlatilir" className="text-blue-600 hover:text-blue-800 font-semibold underline">batık tırnak evde nasıl rahatlatılır?</Link> yazımız faydalı olabilir.
              </p>
            </section>

            {/* ==================== */}
            {/* WHATSAPP CTA - ORTA */}
            {/* ==================== */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 md:p-8 text-white">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center">
                    <MessageCircle size={32} className="mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-lg">Tırnak teli uygulaması hakkında bilgi almak ister misiniz?</p>
                      <p className="text-green-100">WhatsApp üzerinden fotoğraf göndererek ön değerlendirme talep edebilirsiniz.</p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/905456569747?text=Merhaba,%20t%C4%B1rnak%20teli%20uygulamas%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-green-600 px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-colors flex items-center whitespace-nowrap"
                    data-testid="whatsapp-mid-cta"
                  >
                    <MessageCircle size={20} className="mr-2" />
                    WhatsApp'tan Yazın
                  </a>
                </div>
              </div>
            </section>

            {/* NiTi tel uygulama görseli */}
            <div className="mb-12">
              <img
                src="/images/niti-tel-uygulamasi.webp"
                alt="NiTi tel uygulaması batık tırnak - ameliyatsız çözüm"
                width="800"
                height="600"
                className="w-full max-w-lg mx-auto h-auto rounded-xl shadow-lg"
                loading="lazy"
              />
              <p className="text-sm text-gray-500 mt-2 text-center italic">NiTi tel uygulaması ile ameliyatsız batık tırnak bakımı</p>
            </div>

            {/* ==================== */}
            {/* TEL Mİ CERRAHİ Mİ */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Tırnak Teli mi Yoksa Cerrahi İşlem mi Daha İyi?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Hafif ve orta düzey batıklarda tırnak teli:
              </p>
              <div className="bg-green-50 rounded-xl p-6 mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start"><CheckCircle className="text-green-600 mr-3 mt-0.5 flex-shrink-0" size={20} /><span>Ameliyatsızdır</span></li>
                  <li className="flex items-start"><CheckCircle className="text-green-600 mr-3 mt-0.5 flex-shrink-0" size={20} /><span>Estetik görünümü korur</span></li>
                  <li className="flex items-start"><CheckCircle className="text-green-600 mr-3 mt-0.5 flex-shrink-0" size={20} /><span>Daha hızlı iyileşme sağlar</span></li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed">
                İleri vakalarda ise doktor müdahalesi gerekebilir.
              </p>
            </section>

            {/* ==================== */}
            {/* KİMLER İÇİN UYGUN */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Tırnak Teli Uygulaması Kimler İçin Uygundur?
              </h2>
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Batık tırnak problemi yaşayanlar</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Tırnak kesimi sonrası sorun yaşayanlar</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Sürekli batık tekrarlayan kişiler</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                Genel ayak sağlığı hakkında kapsamlı bilgi almak için <Link to="/blog/ayak-sagligi-rehberi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Ayak Sağlığı Tam Rehberi (2026)</Link> içeriğimizi inceleyebilirsin.
              </p>
            </section>

            {/* Batık tırnak öncesi/sonrası görseli */}
            <div className="mb-12">
              <img
                src="/images/batik-tirnak-gorsel.webp"
                alt="Batık tırnak bakımı fiyatları - öncesi ve sonrası görünüm"
                width="800"
                height="600"
                className="w-full max-w-lg mx-auto h-auto rounded-xl shadow-lg"
                loading="lazy"
              />
              <p className="text-sm text-gray-500 mt-2 text-center italic">Batık tırnak zamanla iltihap oluşturabilir</p>
            </div>

            {/* ==================== */}
            {/* HANGİ TIRNAKLARA UYGULANMAZ */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-500 pl-4">
                Hangi Tırnaklara Tırnak Teli Uygulanmaz?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Tırnak teli uygulaması birçok batık tırnak probleminde etkili bir yöntem olsa da, her tırnak yapısı için uygun değildir. Bazı durumlarda uygulama yapılması önerilmez ya da farklı yöntemler tercih edilir.
              </p>

              {/* İnce tırnaklar */}
              <div className="mb-6 bg-white rounded-xl shadow-md p-6 border-l-4 border-red-400">
                <h3 className="text-xl font-bold text-gray-900 mb-4">İnce ve Kırılmaya Yatkın Tırnaklar</h3>
                <p className="text-gray-700 leading-relaxed">
                  Tırnak yapısı normalden daha ince ve hassas olan kişilerde tel uygulaması, tırnağın yüzeyinde ekstra baskı oluşturabilir. Bu durum zamanla tırnakta ayrılma (onikoliz) riskini artırabilir. Özellikle kolay kırılan ve katmanlı yapıya sahip tırnaklarda uygulama öncesi mutlaka değerlendirme yapılmalıdır.
                </p>
              </div>

              {/* Onikoliz görseli */}
              <div className="mb-6">
                <img
                  src="/images/onikoliz-tirnak-teliuygun-olmayan.webp"
                  alt="Tırnak teli uygulanamayacak ince ve hassas tırnak yapısı - onikoliz"
                  width="800"
                  height="600"
                  className="w-full max-w-sm mx-auto h-auto rounded-xl shadow-lg"
                  loading="lazy"
                />
                <p className="text-sm text-gray-500 mt-2 text-center italic">Tırnak teli uygulamasına uygun olmayan tırnak yapısı örneği</p>
              </div>

              {/* Onikoliz */}
              <div className="mb-6 bg-white rounded-xl shadow-md p-6 border-l-4 border-red-400">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Onikoliz (Tırnak Ayrılması) Bulunan Durumlar</h3>
                <p className="text-gray-700 leading-relaxed">
                  Tırnağın yataktan ayrıldığı, yani onikoliz oluşmuş durumlarda tırnak teli uygulaması genellikle önerilmez. Çünkü tel sistemi tırnağın mevcut yapısını zorlayarak ayrılmayı artırabilir. Bu gibi durumlarda öncelikle tırnağın sağlıklı yapıya kavuşması hedeflenir.
                </p>
              </div>

              {/* İleri enfekte */}
              <div className="mb-6 bg-white rounded-xl shadow-md p-6 border-l-4 border-red-400">
                <h3 className="text-xl font-bold text-gray-900 mb-4">İleri Derecede Enfekte Batık Tırnaklar</h3>
                <p className="text-gray-700 leading-relaxed">
                  Eğer batık tırnak bölgesinde ciddi iltihap, akıntı veya enfeksiyon varsa, doğrudan tel uygulaması yapmak doğru olmayabilir. Öncelikle enfeksiyonun kontrol altına alınması gerekir. Aksi halde uygulama süreci ağrılı ve verimsiz olabilir.
                </p>
              </div>

              {/* Yüzey bozukluğu */}
              <div className="mb-6 bg-white rounded-xl shadow-md p-6 border-l-4 border-red-400">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tırnak Yüzeyinin Uygun Olmadığı Durumlar</h3>
                <p className="text-gray-700 leading-relaxed">
                  Bazı tırnaklarda deformasyon, kalınlaşma veya yüzey bozuklukları telin düzgün tutunmasını engelleyebilir. Bu gibi durumlarda tel uygulaması yerine farklı podolojik çözümler tercih edilebilir.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Tırnak teli uygulamasının uygun olup olmadığı, kişiden kişiye değişir. Bu nedenle en doğru karar, uzman değerlendirmesi sonrasında verilir.
              </p>
              <p className="text-gray-700">
                Detaylı bilgi ve uygunluk değerlendirmesi için <Link to="/iletisim" className="text-blue-600 hover:text-blue-800 font-semibold underline">iletişim sayfamızdan</Link> bize ulaşabilirsiniz.
              </p>
            </section>

            {/* ==================== */}
            {/* SSS */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Sıkça Sorulan Sorular
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
                      aria-expanded={openFaqIndexes.includes(index)}
                      data-testid={`faq-toggle-${index}`}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {item.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openFaqIndexes.includes(index) ? (
                          <ChevronUp className="text-blue-700" size={24} />
                        ) : (
                          <ChevronDown className="text-gray-400" size={24} />
                        )}
                      </div>
                    </button>
                    {openFaqIndexes.includes(index) && (
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

            {/* NiTi tel yakın plan görseli */}
            <div className="mb-12">
              <img
                src="/images/niti-tel-tirnak.webp"
                alt="NiTi tel tırnak uygulaması yakın plan - batık tırnak bakımı"
                width="800"
                height="600"
                className="w-full max-w-lg mx-auto h-auto rounded-xl shadow-lg"
                loading="lazy"
              />
              <p className="text-sm text-gray-500 mt-2 text-center italic">NiTi tel sistemi yakın plan görünümü</p>
            </div>

            {/* ==================== */}
            {/* SONUÇ */}
            {/* ==================== */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Tırnak Teli Fiyatları ve Doğru Tercih
              </h2>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Tırnak teli uygulaması, batık tırnak problemlerinde etkili ve konforlu bir çözümdür. Fiyatlar değişken olsa da önemli olan doğru uygulama ve uzman seçimidir.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Size en uygun çözüm ve net fiyat bilgisi için <Link to="/iletisim" className="text-blue-600 hover:text-blue-800 font-semibold underline">iletişim sayfamızdan</Link> bizimle iletişime geçebilirsiniz.
                </p>
              </div>
            </section>

            {/* ==================== */}
            {/* SON CTA */}
            {/* ==================== */}
            <section className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl p-8 md:p-10 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Profesyonel Tırnak Teli Uygulaması
              </h2>
              <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
                Batık tırnak sorununuz için size özel değerlendirme ve net fiyat bilgisi almak isterseniz WhatsApp üzerinden bize ulaşabilirsiniz.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/905456569747?text=Merhaba,%20t%C4%B1rnak%20teli%20uygulamas%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-400 transition-all transform hover:scale-105 shadow-lg"
                  data-testid="whatsapp-bottom-cta"
                >
                  <MessageCircle className="mr-2" size={24} />
                  WhatsApp ile Yazın
                </a>
                <a
                  href="tel:05456569747"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                >
                  <Phone className="mr-2" size={24} />
                  0545 656 97 47
                </a>
              </div>
              <p className="text-blue-200 mt-6 text-sm">
                Ankara Bağlıca'da profesyonel podolojik bakım hizmeti
              </p>
            </section>

          </div>
        </div>
      </article>
    </>
  );
};

export default TirnakTeliFiyatlariBlog;
