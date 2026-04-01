import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, Phone, ChevronDown, ChevronUp, MessageCircle, BookOpen, AlertTriangle } from 'lucide-react';
import { Helmet } from 'react-helmet';

const AyakSagligiRehberiBlog = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Ayak bakımı ne sıklıkla yapılmalı?",
      answer: "Günlük temel bakım (yıkama, kurulama, nemlendirme) her gün uygulanmalıdır. Tırnak bakımı ise ortalama 2-3 haftada bir yapılabilir. Detaylı podolojik bakım ihtiyacı kişiden kişiye değişir; diyabet gibi risk faktörleri varsa daha sık kontrol önerilir."
    },
    {
      question: "Tırnaklar nasıl kesilmeli?",
      answer: "Tırnaklar her zaman düz (transvers) kesilmeli, köşeler derin alınmamalıdır. Tırnak ucu parmak ucunu 1-2 mm geçecek kadar bırakılmalıdır. Oval kesim veya köşeleri yuvarlatmak batık tırnak riskini artırır."
    },
    {
      question: "Ayak kokusu neden oluşur?",
      answer: "Ayak kokusu genellikle aşırı terleme ve bakteriyel çoğalmayla ilişkilidir. Kapalı ayakkabılarda nem birikmesi, sentetik çorap kullanımı ve yetersiz hijyen durumu kötüleştirebilir. Düzenli temizlik ve nefes alabilen ayakkabı tercihi büyük fark yaratır."
    },
    {
      question: "Nasır tamamen geçer mi?",
      answer: "Nasır, basınç ve sürtünmeye karşı cildin doğal savunma tepkisidir. Oluşum nedeni ortadan kaldırılmadığı sürece tekrar edebilir. Doğru ayakkabı seçimi, ortez kullanımı ve düzenli podolojik bakım ile kontrol altına alınabilir."
    },
    {
      question: "Ayakta kızarıklık neden olur?",
      answer: "Ayakta kızarıklık; sürtünme, alerjik reaksiyon, mantar enfeksiyonu, dolaşım problemleri veya basınç kaynaklı tahriş gibi farklı nedenlere bağlı olabilir. Kızarıklık yanma, şişlik veya kaşıntıyla birlikte seyrediyorsa profesyonel değerlendirme önerilir."
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
    "headline": "Ayak Sağlığı Tam Rehberi (2026)",
    "description": "Ayak sağlığı rehberi 2026: En sık görülen ayak problemleri, evde bakım yöntemleri, doğru ayakkabı seçimi ve ne zaman uzmana başvurulmalı. Podolog önerileri.",
    "image": "https://customer-assets.emergentagent.com/job_batik-tirnak-rahatla/artifacts/vbitsgjk_ayak-sagligi-tamrehbet2026.webp",
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
    "datePublished": "2026-04-01",
    "dateModified": "2026-04-01"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://medipodo.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://medipodo.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Ayak Sağlığı Tam Rehberi (2026)", "item": "https://medipodo.com/blog/ayak-sagligi-rehberi" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Ayak Sağlığı Tam Rehberi (2026) | Medipodo</title>
        <meta name="description" content="Ayak sağlığı rehberi 2026: Batık tırnak, tırnak mantarı, nasır, topuk çatlakları ve daha fazlası. Evde bakım, doğru ayakkabı seçimi ve uzman önerileri." />
        <meta name="keywords" content="ayak sağlığı, ayak bakımı, batık tırnak, tırnak mantarı, nasır, topuk çatlağı, diyabetik ayak, podolog, Ankara podolog, ayak sağlığı rehberi 2026" />
        <link rel="canonical" href="https://medipodo.com/blog/ayak-sagligi-rehberi" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Ayak Sağlığı Tam Rehberi (2026)" />
        <meta property="og:description" content="Ayak sağlığı rehberi: En sık görülen ayak problemleri, evde bakım, doğru ayakkabı seçimi ve uzman önerileri." />
        <meta property="og:image" content="https://customer-assets.emergentagent.com/job_batik-tirnak-rahatla/artifacts/vbitsgjk_ayak-sagligi-tamrehbet2026.webp" />
        <meta property="og:url" content="https://medipodo.com/blog/ayak-sagligi-rehberi" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayak Sağlığı Tam Rehberi (2026)" />
        <meta name="twitter:description" content="Ayak sağlığı rehberi: Batık tırnak, mantar, nasır, topuk çatlağı ve daha fazlası." />
        <meta name="twitter:image" content="https://customer-assets.emergentagent.com/job_batik-tirnak-rahatla/artifacts/vbitsgjk_ayak-sagligi-tamrehbet2026.webp" />

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

            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={20} className="text-blue-200" />
              <span className="text-blue-200 text-sm font-medium uppercase tracking-wide">Kapsamlı Rehber</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="blog-title">
              Ayak Sağlığı Tam Rehberi<br />
              <span className="text-blue-200">(2026)</span>
            </h1>

            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Podolog Serdar Ceylan</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>1 Nisan 2026 · 15 dakika okuma</span>
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
                Ayak sağlığı, çoğu zaman ihmal edilen ancak günlük yaşam kalitesini doğrudan etkileyen önemli bir konudur. Gün boyunca vücut ağırlığını taşıyan ayaklar; yanlış alışkanlıklar, uygun olmayan ayakkabı seçimi ve yetersiz bakım nedeniyle zamanla farklı problemlere açık hale gelebilir.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Podolojik gözlemlerimize göre, ayak problemlerinin büyük bir kısmı erken dönemde fark edilip düzenli bakım ile kontrol altına alınabilir. Bu nedenle ayak sağlığının düzenli olarak takip edilmesi önerilir. Bu rehberde, en sık karşılaşılan ayak problemlerini, evde uygulanabilecek bakım yöntemlerini ve ne zaman profesyonel destek alınması gerektiğini bir arada bulacaksınız.
              </p>
            </section>

            {/* Kapak Görseli */}
            <div className="mb-12">
              <img
                src="https://customer-assets.emergentagent.com/job_batik-tirnak-rahatla/artifacts/vbitsgjk_ayak-sagligi-tamrehbet2026.webp"
                alt="Ayak sağlığı tam rehberi 2026 - podolojik bakım ve değerlendirme"
                width="1200"
                height="675"
                className="w-full h-auto rounded-xl shadow-lg"
                loading="eager"
              />
              <p className="text-sm text-gray-500 mt-2 text-center italic">Düzenli bakım, ayak sağlığını korumanın en etkili yoludur</p>
            </div>

            {/* ==================== */}
            {/* AYAK SAĞLIĞINI ETKİLEYEN TEMEL FAKTÖRLER */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ayak Sağlığını Etkileyen Temel Faktörler
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Ayak sağlığı genellikle tek bir nedene bağlı değildir. Çoğu durumda birden fazla faktör birlikte rol oynar. Günlük alışkanlıklardan ayakkabı tercihine, hijyen rutininden sistemik hastalıklara kadar pek çok etken ayak sağlığını şekillendiren unsurlar arasındadır.
              </p>

              {/* Yanlış Ayakkabı */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-red-400">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Yanlış Ayakkabı Kullanımı</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dar, ayağı sıkan veya taban desteği yetersiz ayakkabılar uzun vadede ciddi sorunlara zemin hazırlayabilir. Özellikle gün boyu ayakta kalan kişilerde bu etki daha belirgin hale gelir.
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start"><span className="text-red-400 mr-3 mt-1 font-bold">•</span>Batık tırnak oluşumu</li>
                  <li className="flex items-start"><span className="text-red-400 mr-3 mt-1 font-bold">•</span>Nasır ve sertleşme</li>
                  <li className="flex items-start"><span className="text-red-400 mr-3 mt-1 font-bold">•</span>Parmak uçlarında basınç problemleri</li>
                  <li className="flex items-start"><span className="text-red-400 mr-3 mt-1 font-bold">•</span>Topuk ve taban ağrısı</li>
                </ul>
              </div>

              {/* Ayakkabı Görseli */}
              <div className="mb-8">
                <img
                  src="https://customer-assets.emergentagent.com/job_batik-tirnak-rahatla/artifacts/v7rvsdsp_dogru-ayakkabi-secimi.webp"
                  alt="Doğru ayakkabı seçimi - ayak sağlığını etkileyen faktörler"
                  width="800"
                  height="600"
                  className="w-full max-w-lg mx-auto h-auto rounded-xl shadow-lg"
                  loading="lazy"
                />
                <p className="text-sm text-gray-500 mt-2 text-center italic">Ayakkabı seçimi, ayak sağlığının en kritik belirleyicilerinden biridir</p>
              </div>

              {/* Nem ve Hijyen */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-400">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nem ve Hijyen</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ayakların uzun süre nemli kalması, özellikle kapalı ayakkabılar içinde, mantar ve bakteri üremesi için uygun ortam oluşturur. Parmak araları en çok etkilenen bölgelerdir.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1 font-bold">•</span>Mantar oluşumu riski</li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1 font-bold">•</span>Kötü koku</li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1 font-bold">•</span>Cilt hassasiyeti ve tahrişi</li>
                </ul>
              </div>

              {/* Tırnak Kesim Alışkanlıkları */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-400">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tırnak Kesim Alışkanlıkları</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Yanlış tırnak kesimi, en sık karşılaşılan problemlerden biridir. Özellikle tırnağı çok kısa kesmek veya köşeleri derin almak, batık tırnak oluşumuna doğrudan neden olabilir. Tırnak kesiminde doğru teknik, pek çok sorunun önüne geçer.
                </p>
                <p className="text-gray-700">
                  Konu hakkında detaylı bilgi için <Link to="/blog/batik-tirnak-nedenleri" className="text-blue-600 hover:text-blue-800 font-semibold underline">batık tırnak nedenleri</Link> içeriğine göz atabilirsiniz.
                </p>
              </div>

              {/* Sistemik Hastalıklar */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-400">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sistemik Hastalıklar</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Özellikle diyabet gibi kronik durumlarda dolaşım sistemi ve sinir hassasiyeti etkilenebilir. Bu durum ayaktaki küçük sorunların fark edilmesini zorlaştırabilir ve iyileşme sürecini yavaşlatabilir.
                </p>
                <p className="text-gray-700">
                  Bu nedenle düzenli kontrol önemlidir. Detaylı bilgi: <Link to="/blog/diyabet-ve-ayak-sagligi" className="text-blue-600 hover:text-blue-800 font-semibold underline">diyabet ve ayak sağlığı</Link>
                </p>
              </div>
            </section>

            {/* ==================== */}
            {/* EN SIK GÖRÜLEN AYAK PROBLEMLERİ */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                En Sık Görülen Ayak Problemleri
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Podoloji pratiğinde en sık karşılaşılan problemler aşağıda özetlenmiştir. Her birinin kendine özgü nedenleri ve yaklaşım yöntemleri vardır.
              </p>

              {/* Batık Tırnak */}
              <div className="mb-8 bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Batık Tırnak</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Batık tırnak, tırnağın kenar kısmının deri içine doğru ilerlemesiyle oluşur. Zamanla kızarıklık, hassasiyet ve ağrı ile kendini gösterir. Erken dönemde fark edildiğinde bakım süreci çok daha kolay ilerler.
                </p>
                <p className="text-gray-700 mb-3">Genellikle şu faktörlerle ilişkilidir:</p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start"><span className="text-blue-600 mr-3 mt-1 font-bold">•</span>Yanlış tırnak kesimi</li>
                  <li className="flex items-start"><span className="text-blue-600 mr-3 mt-1 font-bold">•</span>Dar ayakkabı kullanımı</li>
                  <li className="flex items-start"><span className="text-blue-600 mr-3 mt-1 font-bold">•</span>Tekrarlayan baskı ve travma</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link to="/blog/batik-tirnak-nedenleri" className="text-blue-600 hover:text-blue-800 font-semibold underline">Batık tırnak nedenleri</Link>
                  <span className="text-gray-400">|</span>
                  <Link to="/blog/batik-tirnak-evde-nasil-rahatlatilir" className="text-blue-600 hover:text-blue-800 font-semibold underline">Evde nasıl rahatlatılır?</Link>
                </div>
              </div>

              {/* Tırnak Mantarı */}
              <div className="mb-8 bg-amber-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tırnak Mantarı</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tırnak mantarı; tırnakta kalınlaşma, renk değişimi ve kırılma ile kendini gösterebilir. Erken dönemde belirtiler hafif olabilir, ancak zamanla tırnağın yapısı bozulabilir ve diğer tırnaklara da yayılabilir.
                </p>
                <p className="text-gray-700 mb-3">Risk faktörleri:</p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start"><span className="text-amber-600 mr-3 mt-1 font-bold">•</span>Nemli ortamda uzun süre kalma</li>
                  <li className="flex items-start"><span className="text-amber-600 mr-3 mt-1 font-bold">•</span>Ortak kullanım alanları (havuz, spor salonu)</li>
                  <li className="flex items-start"><span className="text-amber-600 mr-3 mt-1 font-bold">•</span>Hijyen eksikliği</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link to="/blog/tirnak-mantari-bulasici-mi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Tırnak mantarı bulaşıcı mı?</Link>
                  <span className="text-gray-400">|</span>
                  <Link to="/blog/tirnak-mantari-tedavisi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Tırnak mantarı hakkında detay</Link>
                </div>
              </div>

              {/* Nasır */}
              <div className="mb-8 bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nasır</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nasır, sürekli basınç ve sürtünmeye bağlı olarak oluşan cilt kalınlaşmasıdır. Vücut, sürekli basınç gördüğü bölgeyi korumak için deriyi kalınlaştırır. Ancak bu kalınlaşma zamanla ağrıya ve rahatsızlığa yol açabilir.
                </p>
                <p className="text-gray-700 mb-3">Klinik gözlemlerde sık nedenler:</p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start"><span className="text-green-600 mr-3 mt-1 font-bold">•</span>Yanlış basış ve yürüyüş bozukluğu</li>
                  <li className="flex items-start"><span className="text-green-600 mr-3 mt-1 font-bold">•</span>Sert tabanlı ayakkabı</li>
                  <li className="flex items-start"><span className="text-green-600 mr-3 mt-1 font-bold">•</span>Uzun süre ayakta kalma</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link to="/blog/nasir-sigil-farklari" className="text-blue-600 hover:text-blue-800 font-semibold underline">Nasır ve siğil farkları</Link>
                  <span className="text-gray-400">|</span>
                  <Link to="/blog/nasir-neden-tekrar-eder" className="text-blue-600 hover:text-blue-800 font-semibold underline">Nasır neden tekrar eder?</Link>
                </div>
              </div>

              {/* Topuk Çatlakları */}
              <div className="mb-8 bg-rose-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Topuk Çatlakları</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Topuk çatlakları genellikle cilt kuruluğu, basınç ve bakım eksikliğiyle ilişkilidir. Özellikle kış aylarında hava kuruluğu etkisiyle daha sık görülür. İlerlemiş durumlarda derin yarıklar oluşabilir ve günlük yaşam konforunu ciddi şekilde etkileyebilir.
                </p>
                <Link to="/blog/kis-aylarinda-catlak-topuk-tedavisi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Çatlak topuk hakkında detaylı bilgi</Link>
              </div>
            </section>

            {/* ==================== */}
            {/* KARŞILAŞTIRMA TABLOSU */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ayak Problemleri Karşılaştırma Tablosu
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
                  <thead className="bg-blue-800 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Problem</th>
                      <th className="px-4 py-3 text-left font-semibold">En Yaygın Neden</th>
                      <th className="px-4 py-3 text-left font-semibold">Belirtiler</th>
                      <th className="px-4 py-3 text-left font-semibold">Ne Zaman Dikkat Edilmeli</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-900">Batık Tırnak</td>
                      <td className="px-4 py-3 text-gray-700">Yanlış kesim</td>
                      <td className="px-4 py-3 text-gray-700">Ağrı, kızarıklık</td>
                      <td className="px-4 py-3 text-gray-700">Tekrarlıyorsa</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">Mantar</td>
                      <td className="px-4 py-3 text-gray-700">Nem, hijyen</td>
                      <td className="px-4 py-3 text-gray-700">Sararma, kalınlaşma</td>
                      <td className="px-4 py-3 text-gray-700">Yayılma varsa</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-900">Nasır</td>
                      <td className="px-4 py-3 text-gray-700">Basınç</td>
                      <td className="px-4 py-3 text-gray-700">Sertleşmiş deri</td>
                      <td className="px-4 py-3 text-gray-700">Ağrı oluşuyorsa</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">Çatlak Topuk</td>
                      <td className="px-4 py-3 text-gray-700">Kuruluk</td>
                      <td className="px-4 py-3 text-gray-700">Derin yarıklar</td>
                      <td className="px-4 py-3 text-gray-700">Kanama varsa</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ==================== */}
            {/* EVDE AYAK BAKIMI */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Evde Ayak Bakımı Nasıl Yapılmalı?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Düzenli bakım alışkanlıkları, ayak sağlığını korumada en önemli adımdır. Günlük rutine eklenen basit uygulamalar bile uzun vadede büyük fark yaratabilir.
              </p>

              {/* Evde Bakım Görseli */}
              <div className="mb-8">
                <img
                  src="https://customer-assets.emergentagent.com/job_batik-tirnak-rahatla/artifacts/tf489zl5_evde-ayak-bakim.webp"
                  alt="Evde ayak bakımı - düzenli bakım ayak sağlığını korur"
                  width="800"
                  height="600"
                  className="w-full max-w-lg mx-auto h-auto rounded-xl shadow-lg"
                  loading="lazy"
                />
                <p className="text-sm text-gray-500 mt-2 text-center italic">Günlük temel bakım, pek çok ayak probleminin önüne geçer</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Temizlik */}
                <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-teal-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Temizlik</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-teal-500 mr-2 font-bold">•</span>Ayaklar günlük olarak yıkanmalı</li>
                    <li className="flex items-start"><span className="text-teal-500 mr-2 font-bold">•</span>Parmak araları iyice kurulanmalıdır</li>
                    <li className="flex items-start"><span className="text-teal-500 mr-2 font-bold">•</span>pH dengeli temizleyiciler tercih edilmeli</li>
                  </ul>
                </div>

                {/* Nemlendirme */}
                <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Nemlendirme</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-blue-500 mr-2 font-bold">•</span>Düzenli nemlendirici kullanımı önerilir</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2 font-bold">•</span>Özellikle topuk bölgesi için önemlidir</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2 font-bold">•</span>Parmak aralarına yoğun krem sürmekten kaçının</li>
                  </ul>
                </div>

                {/* Tırnak Bakımı */}
                <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-amber-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Tırnak Bakımı</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-amber-500 mr-2 font-bold">•</span>Tırnaklar düz kesilmeli</li>
                    <li className="flex items-start"><span className="text-amber-500 mr-2 font-bold">•</span>Köşeler derin alınmamalıdır</li>
                    <li className="flex items-start"><span className="text-amber-500 mr-2 font-bold">•</span>2-3 haftada bir kontrol önerilir</li>
                  </ul>
                </div>

                {/* Ayakkabı Seçimi */}
                <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-purple-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Ayakkabı Seçimi</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-purple-500 mr-2 font-bold">•</span>Ayağı sıkmayan, geniş burunlu</li>
                    <li className="flex items-start"><span className="text-purple-500 mr-2 font-bold">•</span>Nefes alabilen materyal</li>
                    <li className="flex items-start"><span className="text-purple-500 mr-2 font-bold">•</span>Destekli tabana sahip modeller</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700">
                Ek rehber: <Link to="/ayak-bakim-kilavuzu" className="text-blue-600 hover:text-blue-800 font-semibold underline">Ayak bakım kılavuzu</Link>
              </p>
            </section>

            {/* ==================== */}
            {/* NE ZAMAN UZMAN DEĞERLENDİRMESİ */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ne Zaman Uzman Değerlendirmesi Önerilir?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Aşağıdaki durumlarda podolojik değerlendirme önerilir. Erken başvuru, süreci kolaylaştırır ve olası komplikasyonların önüne geçer.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Tekrarlayan batık tırnak</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">İlerlemiş mantar görünümü</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Ağrılı nasır oluşumu</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Diyabet hastalarında küçük değişiklikler</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Topuk çatlaklarında kanama veya derin yarıklar</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-300 p-4 rounded-lg">
                <p className="text-amber-800 font-medium">
                  <AlertTriangle className="inline mr-2" size={18} />
                  Bu içerik bilgilendirme amaçlıdır, tıbbi teşhis yerine geçmez.
                </p>
              </div>
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
                      <p className="font-bold text-lg">Ayak sağlığınızla ilgili sorunuz mu var?</p>
                      <p className="text-green-100">WhatsApp üzerinden bize yazarak ön değerlendirme alabilirsiniz.</p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/905456569747?text=Merhaba,%20ayak%20sa%C4%9Fl%C4%B1%C4%9F%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
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

            {/* ==================== */}
            {/* DİYABET HASTALARI */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Diyabet Hastalarında Ayak Sağlığı
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Diyabet hastalarında ayak sağlığı özel dikkat gerektirir. Nöropati (sinir hasarı) nedeniyle ayaktaki küçük sorunlar ağrıya neden olmayabilir ve bu yüzden fark edilmesi gecikmiş olabilir.
              </p>

              {/* Diyabet Görseli */}
              <div className="mb-8">
                <img
                  src="https://customer-assets.emergentagent.com/job_batik-tirnak-rahatla/artifacts/h4q4cvn7_diyabetik-ayak-kontrolu.webp"
                  alt="Diyabetik ayak kontrolü - düzenli değerlendirme önemlidir"
                  width="800"
                  height="600"
                  className="w-full max-w-lg mx-auto h-auto rounded-xl shadow-lg"
                  loading="lazy"
                />
                <p className="text-sm text-gray-500 mt-2 text-center italic">Diyabet hastalarında düzenli ayak kontrolü büyük önem taşır</p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 mb-6">
                <p className="text-gray-700 mb-4">Podolojik açıdan dikkat edilmesi gerekenler:</p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start"><span className="text-purple-600 mr-3 mt-1 font-bold">•</span>Küçük problemler hızlı ilerleyebilir</li>
                  <li className="flex items-start"><span className="text-purple-600 mr-3 mt-1 font-bold">•</span>Hassasiyet azalmış olabileceğinden sorunlar fark edilmeyebilir</li>
                  <li className="flex items-start"><span className="text-purple-600 mr-3 mt-1 font-bold">•</span>Yara iyileşmesi daha yavaştır</li>
                </ul>
                <p className="text-gray-700 mb-4">Bu nedenle önerilir:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><span className="text-purple-600 mr-3 mt-1 font-bold">•</span>Günlük görsel kontrol (ayna ile taban dahil)</li>
                  <li className="flex items-start"><span className="text-purple-600 mr-3 mt-1 font-bold">•</span>Düzenli podolojik bakım</li>
                  <li className="flex items-start"><span className="text-purple-600 mr-3 mt-1 font-bold">•</span>Erken değerlendirme ve takip</li>
                </ul>
              </div>

              <p className="text-gray-700">
                Detaylı bilgi: <Link to="/blog/diyabet-ve-ayak-sagligi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Diyabet ve ayak sağlığı</Link>
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
                      aria-expanded={openFaqIndex === index}
                      data-testid={`faq-toggle-${index}`}
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
                        {index === 2 && (
                          <p className="text-gray-600 mt-3">
                            Detaylı içerik: <Link to="/blog/ayak-kokusu-ve-mantar-iliskisi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Ayak kokusu ve mantar ilişkisi</Link>
                          </p>
                        )}
                        {index === 4 && (
                          <p className="text-gray-600 mt-3">
                            Detaylı inceleme: <Link to="/blog/ayakta-kizariklik-neden-olur" className="text-blue-600 hover:text-blue-800 font-semibold underline">Ayakta kızarıklık neden olur?</Link>
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* ==================== */}
            {/* DAHA FAZLA BİLGİ */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Daha Fazla Bilgi
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ayak sağlığı ile ilgili diğer içeriklerimiz:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/blog/ayak-sagligi-ipuclari" className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200 group">
                  <p className="font-semibold text-blue-600 group-hover:text-blue-800">Ayak Sağlığı İpuçları</p>
                  <p className="text-sm text-gray-600">12 temel ilke ile ayak sağlığınızı koruyun</p>
                </Link>
                <Link to="/blog/ayak-agrisi-neden-olur" className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200 group">
                  <p className="font-semibold text-blue-600 group-hover:text-blue-800">Ayak Ağrısı Neden Olur?</p>
                  <p className="text-sm text-gray-600">Podolojik bakış açısıyla ağrı nedenleri</p>
                </Link>
                <Link to="/blog/ayakta-yanma-hissi-neden-olur" className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200 group">
                  <p className="font-semibold text-blue-600 group-hover:text-blue-800">Ayakta Yanma Hissi Neden Olur?</p>
                  <p className="text-sm text-gray-600">Yanma hissinin olası nedenleri</p>
                </Link>
                <Link to="/blog/topuk-dikeni" className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200 group">
                  <p className="font-semibold text-blue-600 group-hover:text-blue-800">Topuk Dikeni Hakkında Bilgiler</p>
                  <p className="text-sm text-gray-600">Neden oluşur ve nasıl yaklaşılır?</p>
                </Link>
                <Link to="/blog/cocuk-ayak-sagligi" className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200 group">
                  <p className="font-semibold text-blue-600 group-hover:text-blue-800">Çocuklarda Ayak Sağlığı</p>
                  <p className="text-sm text-gray-600">En sık görülen 5 ayak problemi</p>
                </Link>
                <Link to="/blog/ayakta-kizariklik-neden-olur" className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200 group">
                  <p className="font-semibold text-blue-600 group-hover:text-blue-800">Ayakta Kızarıklık Neden Olur?</p>
                  <p className="text-sm text-gray-600">Yanma ve hassasiyetle birlikte görülebilir mi?</p>
                </Link>
                <Link to="/blog/ayak-kokusu-ve-mantar-iliskisi" className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200 group">
                  <p className="font-semibold text-blue-600 group-hover:text-blue-800">Ayak Kokusu ve Mantar İlişkisi</p>
                  <p className="text-sm text-gray-600">Neden oluşur, nasıl önlenir?</p>
                </Link>
                <Link to="/blog/medikal-ayak-bakimi-kimler-icin-gereklidir" className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200 group">
                  <p className="font-semibold text-blue-600 group-hover:text-blue-800">Medikal Ayak Bakımı Kimler İçin Gerekli?</p>
                  <p className="text-sm text-gray-600">Evde pedikür yeterli olur mu?</p>
                </Link>
              </div>
            </section>

            {/* ==================== */}
            {/* KAPANIŞ */}
            {/* ==================== */}
            <section className="mb-10">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Kliniğimize gelen hastaların büyük çoğunluğu aslında erken fark edip önlem alabilecekleri sorunlarla geliyor. Düzenli bakım alışkanlığı edinmek, doğru ayakkabıyı seçmek ve küçük değişiklikleri göz ardı etmemek — bunlar basit gibi görünse de uzun vadede ciddi fark yaratıyor.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Bu rehberi hazırlarken amacımız, karşılaştığımız en yaygın soruları ve durumları tek bir yerde toplamaktı. Umarız işinize yarar. Aklınıza takılan bir şey olursa aşağıdaki iletişim kanallarından bize ulaşabilirsiniz.
                </p>
              </div>
            </section>

            {/* ==================== */}
            {/* SON CTA - WHATSAPP & TELEFON */}
            {/* ==================== */}
            <section className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl p-8 md:p-10 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Profesyonel Podolojik Destek Alın
              </h2>
              <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
                Ayak sağlığınızla ilgili herhangi bir endişe veya şikayetiniz varsa, profesyonel değerlendirme için bizimle iletişime geçebilirsiniz. WhatsApp üzerinden fotoğraf göndererek ön değerlendirme talep edebilirsiniz.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/905456569747?text=Merhaba,%20ayak%20sa%C4%9Fl%C4%B1%C4%9F%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
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
                Ankara Bağlıca'da profesyonel ayak bakımı hizmeti
              </p>
            </section>

          </div>
        </div>
      </article>
    </>
  );
};

export default AyakSagligiRehberiBlog;
