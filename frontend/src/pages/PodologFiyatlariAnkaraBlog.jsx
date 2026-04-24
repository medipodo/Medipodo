import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, Phone, ChevronDown, ChevronUp, MessageCircle, AlertTriangle } from 'lucide-react';
import { Helmet } from 'react-helmet';

const PodologFiyatlariAnkaraBlog = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Podolog fiyatları sabit midir?",
      answer: "Hayır, podolog fiyatları kişiye ve probleme göre değişiklik gösterebilir. Yapılan işlemin türü, ayaktaki problemin seviyesi ve seans sayısı gibi faktörler ücretlendirmeyi doğrudan etkiler. Bu nedenle en doğru bilgi, kişiye özel değerlendirme sonrasında netleşir."
    },
    {
      question: "İlk değerlendirme ücretli midir?",
      answer: "Bu merkeze göre farklılık gösterebilir. Bazı klinikler ilk görüşmeyi bakım sürecine dahil ederken, bazıları ayrı bir değerlendirme ücreti uygulayabilir. Medipodo olarak detaylı bilgi için bize WhatsApp üzerinden ulaşabilirsiniz."
    },
    {
      question: "Kaç seans gerekir?",
      answer: "Seans sayısı tamamen ayaktaki duruma bağlıdır. Basit bir medikal ayak bakımı tek seansta tamamlanabilirken, batık tırnak veya tırnak mantarı gibi durumlarda düzenli takip gerekebilir. Süreç ilk değerlendirmeden sonra netleşir."
    },
    {
      question: "Ayak bakımı ne sıklıkla yapılmalı?",
      answer: "Genellikle düzenli aralıklarla takip önerilir. Temel ayak bakımı 4-6 haftada bir yapılabilir, ancak diyabet gibi risk faktörleri olan kişilerde daha sık kontrol gerekebilir. Detaylı bilgi için ayak bakım kılavuzumuza göz atabilirsiniz."
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
    "headline": "Podolog Fiyatları Ankara (2026 Güncel Rehber)",
    "description": "Ankara'da podolog fiyatları neye göre değişir? Medikal ayak bakımı, batık tırnak ve nasır bakımı ücret aralıklarını açıklayan güncel rehber.",
    "image": "https://customer-assets.emergentagent.com/job_batik-tirnak-rahatla/artifacts/rfuoselp_podolog-fiyatlari-ankara-kapak-gorseli.webp",
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
      { "@type": "ListItem", "position": 3, "name": "Podolog Fiyatları Ankara (2026)", "item": "https://medipodo.com/blog/podolog-fiyatlari-ankara" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Podolog Fiyatları Ankara (2026 Güncel Rehber) | Medipodo</title>
        <meta name="description" content="Ankara'da podolog fiyatları neye göre değişir? Medikal ayak bakımı, batık tırnak ve nasır bakımı ücret aralıklarını açıklayan güncel rehber." />
        <meta name="keywords" content="podolog fiyatları, podolog fiyatları ankara, medikal ayak bakımı fiyat, batık tırnak fiyat, nasır bakımı fiyat, podolog ankara, podolog ücretleri 2026" />
        <link rel="canonical" href="https://medipodo.com/blog/podolog-fiyatlari-ankara" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Podolog Fiyatları Ankara (2026 Güncel Rehber)" />
        <meta property="og:description" content="Ankara'da podolog fiyatları neye göre değişir? Medikal ayak bakımı, batık tırnak ve nasır bakımı ücret aralıklarını açıklayan güncel rehber." />
        <meta property="og:image" content="https://customer-assets.emergentagent.com/job_batik-tirnak-rahatla/artifacts/rfuoselp_podolog-fiyatlari-ankara-kapak-gorseli.webp" />
        <meta property="og:url" content="https://medipodo.com/blog/podolog-fiyatlari-ankara" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Podolog Fiyatları Ankara (2026 Güncel Rehber)" />
        <meta name="twitter:description" content="Ankara'da podolog fiyatları neye göre değişir? Güncel ücret aralıkları ve rehber." />
        <meta name="twitter:image" content="https://customer-assets.emergentagent.com/job_batik-tirnak-rahatla/artifacts/rfuoselp_podolog-fiyatlari-ankara-kapak-gorseli.webp" />

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
              Podolog Fiyatları Ankara<br />
              <span className="text-blue-200">(2026 Güncel Rehber)</span>
            </h1>

            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Podolog Serdar Ceylan</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>1 Nisan 2026 · 10 dakika okuma</span>
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
                Podolog fiyatları, çoğu kişinin düşündüğü gibi sabit bir listeye bağlı değildir. Aynı şehirde, hatta aynı semtte bile fiyatların farklı olması oldukça normaldir. Bunun nedeni, yapılan işlemin türü, ayaktaki problemin durumu ve uygulanan bakım sürecinin kişiye özel olarak değişmesidir.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 bg-blue-50 p-4 rounded-lg border-l-2 border-blue-400 italic">
                Kliniğimize gelen danışanların önemli bir kısmı ilk görüşmede aynı soruyu soruyor: "Fiyatlar neden bu kadar değişken?" Aslında bu sorunun cevabı oldukça net — çünkü her ayak problemi aynı değildir ve her bakım süreci farklı ilerler.
              </p>
            </section>

            {/* Kapak Görseli */}
            <div className="mb-12">
              <img
                src="https://customer-assets.emergentagent.com/job_batik-tirnak-rahatla/artifacts/rfuoselp_podolog-fiyatlari-ankara-kapak-gorseli.webp"
                alt="Podolog fiyatları Ankara 2026 güncel rehber"
                width="1200"
                height="675"
                className="w-full h-auto rounded-xl shadow-lg"
                loading="eager"
              />
            </div>

            {/* ==================== */}
            {/* FİYATLAR NEYE GÖRE DEĞİŞİR */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Podolog Fiyatları Neye Göre Değişir?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Podolojik bakım ücretleri birkaç temel faktöre göre belirlenir:
              </p>

              {/* İşlemin Türü */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-400">
                <h3 className="text-xl font-bold text-gray-900 mb-4">İşlemin Türü</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Basit bir medikal ayak bakımı ile batık tırnak veya nasır odaklı bakım aynı değildir.
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1 font-bold">•</span>Yüzeysel bakım işlemleri daha kısa sürede tamamlanır</li>
                  <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1 font-bold">•</span>Batık tırnak gibi durumlar daha detaylı çalışma gerektirir</li>
                </ul>
                <p className="text-gray-700">
                  Batık tırnak hakkında detaylı bilgi almak için <Link to="/blog/batik-tirnak-nedenleri" className="text-blue-600 hover:text-blue-800 font-semibold underline">batık tırnak nedenleri</Link> yazımıza göz atabilirsiniz.
                </p>
              </div>

              {/* Problemin Seviyesi */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-400">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Problemin Seviyesi</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Erken dönemde fark edilen problemler genellikle daha kısa sürede kontrol altına alınabilir. Ancak ilerlemiş durumlarda süreç daha detaylı planlanır.
                </p>
                <p className="text-gray-700 leading-relaxed bg-blue-50 p-3 rounded-lg border-l-2 border-blue-400 italic">
                  Kliniğimizde sık gördüğümüz bir durum: Küçük bir batık başlangıcı, zamanında müdahale edilmediğinde daha hassas ve uzun süren bir sürece dönüşebiliyor.
                </p>
              </div>

              {/* Görsel - Podoloji İşlem */}
              <div className="mb-8">
                <img
                  src="https://customer-assets.emergentagent.com/job_batik-tirnak-rahatla/artifacts/33fx4346_podoloji-merkezi-ankara.webp"
                  alt="Ankara podoloji merkezinde profesyonel ayak bakımı uygulaması"
                  width="800"
                  height="600"
                  className="w-full max-w-lg mx-auto h-auto rounded-xl shadow-lg"
                  loading="lazy"
                />
                <p className="text-sm text-gray-500 mt-2 text-center italic">Profesyonel podolojik bakım uygulaması</p>
              </div>

              {/* Seans Sayısı */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-400">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Seans Sayısı</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Bazı işlemler tek seans yeterli olabilirken, bazı durumlarda düzenli takip gerekir. Özellikle:
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1 font-bold">•</span>Mantar bakımı planlı bir süreç gerektirir</li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1 font-bold">•</span>Tekrarlayan nasır durumlarında periyodik kontrol önerilir</li>
                </ul>
                <p className="text-gray-700">
                  Bu konuda <Link to="/blog/nasir-neden-tekrar-eder" className="text-blue-600 hover:text-blue-800 font-semibold underline">nasır neden tekrar eder?</Link> içeriğimiz fikir verebilir.
                </p>
              </div>

              {/* Uygulama Ortamı */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-400">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Uygulama Ortamı</h3>
                <p className="text-gray-700 leading-relaxed">
                  Evde bakım hizmetleri ile klinik ortamda yapılan uygulamalar arasında fiyat farkı olabilir. Bunun nedeni kullanılan ekipman, hijyen standartları ve uygulama koşullarıdır.
                </p>
              </div>
            </section>

            {/* ==================== */}
            {/* ORTALAMA FİYAT ARALIKLARI */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ankara'da Podolog Fiyatları Ortalama Aralığı
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Ankara'da podolojik bakım ücretleri, yapılan işlemin türüne ve ayaktaki problemin durumuna göre değişiklik gösterebilir. Aynı işlem için bile farklı kişilerde farklı bir süreç planlanabildiği için fiyatlar sabit değildir.
              </p>

              <p className="text-gray-700 mb-6">Genel bir fikir vermesi açısından ortalama aralıklar şu şekilde özetlenebilir:</p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
                  <thead className="bg-blue-800 text-white">
                    <tr>
                      <th className="px-5 py-4 text-left font-semibold">İşlem</th>
                      <th className="px-5 py-4 text-left font-semibold">Ortalama Fiyat Aralığı</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-5 py-4 font-medium text-gray-900">Medikal Ayak Bakımı</td>
                      <td className="px-5 py-4 text-gray-700">2.000 – 3.500 TL</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors bg-gray-50">
                      <td className="px-5 py-4 font-medium text-gray-900">Batık Tırnak Bakımı</td>
                      <td className="px-5 py-4 text-gray-700">2.000 – 4.000 TL</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="px-5 py-4 font-medium text-gray-900">Nasır Bakımı</td>
                      <td className="px-5 py-4 text-gray-700">1.500 – 3.000 TL</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-50 border border-amber-300 p-4 rounded-lg mb-6">
                <p className="text-amber-800 text-sm">
                  <AlertTriangle className="inline mr-2" size={16} />
                  Bu aralıklar, Ankara genelinde gözlemlenen ortalama değerlerdir. Uygulanacak işlemin kapsamı, seans ihtiyacı ve ayaktaki durum gibi faktörlere bağlı olarak değişiklik gösterebilir.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg border-l-2 border-blue-400 italic">
                Kliniğimizde de en sık karşılaştığımız durumlardan biri şu: Aynı şikayetle gelen iki kişinin bakım süreci tamamen farklı ilerleyebiliyor. Bu nedenle en doğru yaklaşım, kişiye özel değerlendirme sonrasında net bir plan oluşturulmasıdır.
              </p>
            </section>

            {/* ==================== */}
            {/* NEDEN FİYATLAR FARKLI */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Neden Fiyatlar Bu Kadar Farklı?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Bu soru oldukça sık soruluyor. Farkın arkasında birkaç temel neden var:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Deneyim ve Uzmanlık</h3>
                  <p className="text-gray-700">Farklı merkezlerde uygulama yaklaşımı ve deneyim düzeyi değişebilir. Yıllara dayanan klinik tecrübe, bakım kalitesini doğrudan etkiler.</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-teal-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Ekipman ve Hijyen</h3>
                  <p className="text-gray-700">Sterilizasyon, kullanılan cihazlar ve bakım standartları önemli bir faktördür. Profesyonel ekipman maliyetleri fiyata yansır.</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-amber-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Uygulama Yaklaşımı</h3>
                  <p className="text-gray-700">Bazı yerlerde sadece yüzeysel işlem yapılırken, bazı merkezlerde daha detaylı ve planlı bir bakım süreci uygulanır.</p>
                </div>
              </div>
            </section>

            {/* ==================== */}
            {/* UCUZ HİZMET */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-500 pl-4">
                Ucuz Hizmet Tercih Etmek Doğru mu?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Fiyat tek başına karar vermek için yeterli bir kriter değildir.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 bg-blue-50 p-4 rounded-lg border-l-2 border-blue-400 italic">
                Kliniğimize gelen birçok danışan, daha önce farklı yerlerde yapılan işlemler sonrasında problemin tekrar ettiğini ifade ediyor. Bunun en önemli nedeni, altta yatan sebebin ele alınmamasıdır.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Bu nedenle sadece fiyat değil, uygulamanın yaklaşımı ve sürdürülebilirliği önemlidir.
              </p>
            </section>

            {/* Görsel - İşlem */}
            <div className="mb-12">
              <img
                src="https://customer-assets.emergentagent.com/job_batik-tirnak-rahatla/artifacts/21auyscs_podolog-islem-yaparken.webp"
                alt="Podolog işlem yaparken - profesyonel ayak bakımı"
                width="800"
                height="600"
                className="w-full max-w-lg mx-auto h-auto rounded-xl shadow-lg"
                loading="lazy"
              />
              <p className="text-sm text-gray-500 mt-2 text-center italic">Klinik ortamda podolojik bakım uygulaması</p>
            </div>

            {/* ==================== */}
            {/* EVDE Mİ KLİNİK Mİ */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Evde Ayak Bakımı mı Klinik mi?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Bu da en çok merak edilen konulardan biridir.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Evde Bakım</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">•</span>Pratik olabilir</li>
                    <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">•</span>Bazı durumlarda tercih edilebilir</li>
                    <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">•</span>Hafif bakım ihtiyaçları için uygun</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Klinik Bakım</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-blue-500 mr-2 font-bold">•</span>Daha kontrollü ortam</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2 font-bold">•</span>Detaylı uygulama imkanı</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2 font-bold">•</span>Düzenli takip ve süreç planlaması</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700">
                Evde bakım hakkında detaylı bilgi almak için <Link to="/ayak-bakim-kilavuzu" className="text-blue-600 hover:text-blue-800 font-semibold underline">ayak bakım kılavuzumuza</Link> göz atabilirsiniz.
              </p>
            </section>

            {/* ==================== */}
            {/* NE ZAMAN PODOLOĞA GİTMELİ */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ne Zaman Podoloğa Gitmek Gerekir?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Aşağıdaki durumlarda profesyonel değerlendirme önerilir. Bu tür durumlar erken dönemde ele alındığında süreç daha kolay ilerler.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Tekrarlayan batık tırnak</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Kalınlaşan veya renk değiştiren tırnak</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Ağrılı nasır oluşumu</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Topuk çatlaklarının ilerlemesi</span>
                  </div>
                </div>
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
                      <p className="text-green-100">Durumunuza özel bilgi almak için WhatsApp üzerinden fotoğraf göndererek ön değerlendirme talep edebilirsiniz.</p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/905456569747?text=Merhaba,%20podolog%20fiyatlar%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
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
                        {index === 3 && (
                          <p className="text-gray-600 mt-3">
                            Detaylı rehber: <Link to="/ayak-bakim-kilavuzu" className="text-blue-600 hover:text-blue-800 font-semibold underline">Ayak bakım kılavuzu</Link>
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* ==================== */}
            {/* ANKARA BAĞLICA */}
            {/* ==================== */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ankara Bağlıca'da Podolojik Bakım
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Medipodo olarak Ankara Bağlıca'da, ayak sağlığına yönelik podolojik bakım hizmetleri sunuyoruz. Her danışanın ihtiyacına göre planlanan bakım süreci ile ilerlenir.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kliniğimize gelen kişilerin büyük bir kısmı, aslında erken fark edildiğinde daha kolay yönetilebilecek problemlerle başvuruyor. Küçük değişiklikleri göz ardı etmemek ve düzenli bakım alışkanlığı edinmek, uzun vadede ayak sağlığını korumada önemli bir rol oynar.
                </p>
                <p className="text-gray-700">
                  Hizmetlerimiz ve fiyatlarımız hakkında daha fazla bilgi için <Link to="/baglica-podolog-fiyatlari" className="text-blue-600 hover:text-blue-800 font-semibold underline">Bağlıca podolog fiyatları</Link> sayfamızı da inceleyebilirsiniz. Ayak sağlığınız hakkında kapsamlı bilgi almak isterseniz <Link to="/blog/ayak-sagligi-rehberi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Ayak Sağlığı Tam Rehberi (2026)</Link> içeriğimize göz atabilirsiniz.
                </p>
              </div>
            </section>

            {/* ==================== */}
            {/* SON CTA */}
            {/* ==================== */}
            <section className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl p-8 md:p-10 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Profesyonel Podolojik Destek Alın
              </h2>
              <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
                Durumunuza özel fiyat bilgisi ve bakım planı için bizimle iletişime geçebilirsiniz. WhatsApp üzerinden fotoğraf göndererek ön değerlendirme talep edebilirsiniz.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/905456569747?text=Merhaba,%20podolog%20fiyatlar%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
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

export default PodologFiyatlariAnkaraBlog;
