import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, ChevronDown, ChevronUp, Phone, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const TirnakMantariBulasiciBlog = () => {
  // İlk FAQ default açık - CLS önleme
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Sadeleştirilmiş FAQ — her cevap 2–4 cümle (SEO + featured snippet odaklı)
  const faqItems = [
    {
      question: "Tırnak mantarı havludan bulaşır mı?",
      answer: "Evet, bulaşabilir. Dermatofit mantarlar nemli havlularda uzun süre canlı kalır ve temas yoluyla sağlıklı tırnağa geçer. Herkesin kendi havlusunu kullanması ve havluların 60°C üzerinde yıkanması bulaşmayı ciddi ölçüde azaltır."
    },
    {
      question: "Aynı evde yaşayan herkese geçer mi?",
      answer: "Herkese kesin olarak bulaşmaz; fakat ortak banyo, havlu, tırnak makası ve terlik paylaşımı riski belirgin şekilde artırır. Diyabetliler, yaşlılar ve bağışıklığı zayıf bireyler özellikle risk altındadır. Kişisel eşyaların ayrı tutulması ev içi bulaşmanın önündeki en güçlü engeldir."
    },
    {
      question: "Tırnak mantarı el tırnaklarına geçer mi?",
      answer: "Evet, ayak tırnağındaki mantar elle temas sonucunda el tırnaklarına geçebilir. Bu risk, ayak bakımı sırasında ellerin korunmaması ve işlem sonrası yeterince yıkanmamasıyla artar. Ayak bakımından sonra elleri sabunla en az 20 saniye yıkamak koruyucudur."
    },
    {
      question: "Tırnak mantarı tedavi edilmezse ne olur?",
      answer: "Tedavisiz mantar zamanla ilerler; tırnak kalınlaşır, sararır, kırılır ve ayrılmaya başlar. Diğer tırnaklara ve çevredeki kişilere yayılır, diyabet hastalarında ciddi doku sorunlarına yol açabilir. Erken başlanan profesyonel tedavi bu risklerin tamamını ortadan kaldırır."
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
    "headline": "Tırnak Mantarı Bulaşıcı mı? Evde Aile Bireylerine Geçer mi?",
    "description": "Tırnak mantarı bulaşıcı mı? Evde aile bireylerine geçer mi? Bulaşma yolları, korunma yöntemleri ve ne zaman uzman desteği alınmalı detaylı anlatım.",
    "image": "https://medipodo.com/blog-images/tirnak-mantari-bulasici/tirnak-mantari-bulasir-mi.webp",
    "author": {
      "@type": "Person",
      "name": "Podolog Serdar Ceylan",
      "url": "https://medipodo.com/kadromuz"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Medipodo Ayak Sağlığı Merkezi",
      "logo": {
        "@type": "ImageObject",
        "url": "https://medipodo.com/images/logo.webp"
      }
    },
    "datePublished": "2026-02-21T09:00:00+03:00",
    "dateModified": "2026-02-21T09:00:00+03:00"
  };

  return (
    <>
      <Helmet>
        <title>Tırnak Mantarı Bulaşıcı mı? Evde Nasıl Geçer + Korunma (2026) | Medipodo</title>
        <meta name="description" content="Evde bulaşır mı, nasıl korunursunuz, en riskli durumlar. Podolog önerileriyle öğrenin." />
        <meta name="keywords" content="tırnak mantarı bulaşıcı mı, evde bulaşır mı, tırnak mantarı nasıl geçer, tırnak mantarı tedavisi, mantar bulaşması, tırnak mantarı korunma" />
        <link rel="canonical" href="https://medipodo.com/blog/tirnak-mantari-bulasici-mi" />
        
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Tırnak Mantarı Bulaşıcı mı? Evde Aile Bireylerine Geçer mi?" />
        <meta property="og:description" content="Tırnak mantarı bulaşıcı mı? Bulaşma yolları, korunma yöntemleri ve uzman desteği hakkında detaylı bilgi." />
        <meta property="og:image" content="https://medipodo.com/blog-images/tirnak-mantari-bulasici/tirnak-mantari-bulasir-mi.webp" />
        <meta property="og:url" content="https://medipodo.com/blog/tirnak-mantari-bulasici-mi" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tırnak Mantarı Bulaşıcı mı? Evde Aile Bireylerine Geçer mi?" />
        <meta name="twitter:description" content="Tırnak mantarı bulaşıcı mı? Bulaşma yolları ve korunma yöntemleri." />
        <meta name="twitter:image" content="https://medipodo.com/blog-images/tirnak-mantari-bulasici/tirnak-mantari-bulasir-mi.webp" />

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
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
              Tırnak Mantarı Bulaşıcı mı?<br />
              Evde Aile Bireylerine Geçer mi?
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
                <span>21 Şubat 2026</span>
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
                Tırnak mantarı (onikomikoz), en sık görülen ayak problemlerinden biridir ve çoğu zaman fark edilmeden ilerler. Peki, <strong>tırnak mantarı bulaşıcı mı?</strong> Bu soru, özellikle aynı evde yaşayan bireyler için ciddi bir endişe kaynağıdır.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Kısa cevap: <strong>Evet, tırnak mantarı bulaşıcıdır.</strong> Ancak bulaşma genellikle doğrudan temasla değil, ortak kullanım alanları ve eşyalar üzerinden gerçekleşir. Bu yazıda bulaşma yollarını, ev içi korunma önlemlerini ve ne zaman profesyonel destek almanız gerektiğini detaylı şekilde ele alacağız.
              </p>

              <figure className="mb-8">
                <img 
                  src="/blog-images/tirnak-mantari-bulasici/tirnak-mantari-erken-evre.webp" 
                  alt="tırnak mantarı erken evre görünümü" 
                  className="w-full rounded-xl shadow-lg"
                  loading="eager"
                  fetchpriority="high"
                  width="1200"
                  height="800"
                />
                <figcaption className="text-sm text-gray-500 text-center mt-3 italic">
                  Tırnak mantarının erken evre görünümü: ucunda hafif sararma ve mat görünüm belirmeye başlar.
                </figcaption>
              </figure>
            </section>

            {/* Tırnak Mantarı Nasıl Bulaşır */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Tırnak Mantarı Nasıl Bulaşır?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Tırnak mantarına neden olan dermatofit mantarlar nemli ve sıcak ortamlarda yaşar. Bu mikroorganizmalar uzun süre canlı kalabilir ve uygun koşullarda hızla çoğalır. Aşağıdaki durumlarda bulaş riski önemli ölçüde artar:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <AlertTriangle className="text-amber-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Ortak duş ve banyo kullanımı</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="text-amber-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Aynı havlunun paylaşılması</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="text-amber-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Ortak terlik kullanımı</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="text-amber-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Halı ve paspas üzerinde çıplak ayakla dolaşmak</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="text-amber-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">Spor salonu ve yüzme havuzları</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4">
                Ev içinde özellikle banyo zemini ve ortak kullanılan tekstil ürünleri bulaş açısından en riskli alanlardır. Mantar sporları nemli zeminlerde haftalarca canlı kalabilir.
              </p>

              <figure className="mb-6">
                <img 
                  src="/blog-images/tirnak-mantari-bulasici/tirnak-mantari-kalinlasmis.webp" 
                  alt="kalınlaşmış tırnak mantarı örneği" 
                  className="w-full rounded-xl shadow-lg"
                  loading="lazy"
                  width="1200"
                  height="800"
                />
                <figcaption className="text-sm text-gray-500 text-center mt-3 italic">
                  Orta evrede tırnak kalınlaşmaya başlar; sarı-kahverengi leke tırnak yatağına doğru ilerler.
                </figcaption>
              </figure>

              {/* PODOLOG GÖZLEMİ - Highlight Box */}
              <aside
                className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 my-8 shadow-sm"
                aria-label="Podolog gözlemi"
              >
                <div className="flex items-start mb-3">
                  <AlertTriangle className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={22} />
                  <h3 className="text-lg md:text-xl font-bold text-amber-900">
                    Podolog Gözlemi
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-800 leading-relaxed">
                  <li>
                    <strong>En sık bulaşma kaynağı:</strong> ortak banyo zemini ve ortak terlik kullanımı.
                  </li>
                  <li>
                    <strong>%60'lık sessiz hata:</strong> havlu ve tırnak makası paylaşımı.
                  </li>
                  <li>
                    <strong>En hızlı yayılım:</strong> kapalı ve havalanmayan ayakkabı + tedavisiz tırnak birleşimi.
                  </li>
                  <li>
                    <strong>Tedavi süresi:</strong> erken vakalarda <strong>2–3 ay</strong>, ileri vakalarda <strong>6–12 ay</strong>.
                  </li>
                </ul>
              </aside>
            </section>

            {/* Aynı Evde Yaşayanlara Geçer mi */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Aynı Evde Yaşayanlara Geçer mi?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Evet, aynı evde yaşayan bireylere bulaşma riski mevcuttur. Özellikle şu durumlarda risk yükselir:
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-6">
                <h3 className="font-bold text-red-800 mb-3">Yüksek Risk Faktörleri</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Aynı banyoyu kullanmak</li>
                  <li>• Aynı tırnak makasını kullanmak</li>
                  <li>• Ortak terlik giymek</li>
                  <li>• Ayakların sürekli nemli kalması</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Bağışıklık sistemi zayıf olan bireylerde, diyabet hastalarında ve yaşlılarda bulaş daha kolay gerçekleşir. <Link to="/blog/diyabet-ve-ayak-sagligi" className="text-blue-600 hover:underline font-medium">Diyabet ve ayak sağlığı</Link> açısından mantar enfeksiyonu daha ciddi sonuçlara yol açabileceği için erken müdahale kritik öneme sahiptir.
              </p>

              <figure className="mb-6">
                <img 
                  src="/blog-images/tirnak-mantari-bulasici/tirnak-mantari-ileri-evre.webp" 
                  alt="ileri seviye onikomikoz görüntüsü" 
                  className="w-full rounded-xl shadow-lg"
                  loading="lazy"
                  width="1200"
                  height="800"
                />
                <figcaption className="text-sm text-gray-500 text-center mt-3 italic">
                  İleri seviye onikomikoz: tırnak belirgin şekilde kalınlaşmış, sararmış ve yapısı bozulmuştur.
                </figcaption>
              </figure>

              {/* Bulaşma Risk Tablosu */}
              <div className="my-8" aria-label="Bulaşma risk tablosu">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Bulaşma Risk Tablosu
                </h3>
                <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                  <table className="w-full text-left bg-white">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700 border-b border-gray-200">
                          Durum / Ortam
                        </th>
                        <th className="px-4 py-3 text-sm font-semibold text-gray-700 border-b border-gray-200">
                          Bulaşma Riski
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b border-gray-100">
                        <td className="px-4 py-3">Ortak havlu kullanımı</td>
                        <td className="px-4 py-3">
                          <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">
                            Yüksek
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-4 py-3">Aynı terlik</td>
                        <td className="px-4 py-3">
                          <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                            Çok yüksek
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="px-4 py-3">Halı / paspas</td>
                        <td className="px-4 py-3">
                          <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            Orta
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">Spor salonu / ortak duş</td>
                        <td className="px-4 py-3">
                          <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">
                            Yüksek
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Tırnak Mantarı Kendi Kendine Geçer mi */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Tırnak Mantarı Kendi Kendine Geçer mi?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Hayır. Tırnak mantarı genellikle kendi kendine iyileşmez. Evde uygulanan sirke, karbonat gibi yöntemler geçici rahatlama sağlayabilir ancak mantarı tamamen ortadan kaldırmaz.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Mantar ilerledikçe belirli değişiklikler gözlemlenir:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 font-bold">•</span>
                  <span className="text-gray-700">Tırnak kalınlaşır ve sertleşir</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 font-bold">•</span>
                  <span className="text-gray-700">Sarı, kahverengi veya yeşilimsi renk değişimi oluşur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 font-bold">•</span>
                  <span className="text-gray-700">Tırnak kırılgan hale gelir</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 font-bold">•</span>
                  <span className="text-gray-700">Hoş olmayan koku gelişebilir</span>
                </li>
              </ul>

              <p className="text-gray-700 leading-relaxed">
                Erken dönemde profesyonel <Link to="/blog/tirnak-mantari-tedavisi" className="text-blue-600 hover:underline font-medium">tırnak mantarı tedavisi</Link> almak, süreci önemli ölçüde kısaltır ve kalıcı hasar riskini azaltır.
              </p>
            </section>

            {/* Evde Bulaşmayı Önlemek İçin Ne Yapılmalı */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Evde Bulaşmayı Önlemek İçin Ne Yapılmalı?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Ev içi bulaşmayı minimize etmek için bazı temel önlemler alınmalıdır:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-xl">
                  <div className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Kişisel havlu kullanın</span>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <div className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Terlik paylaşmayın</span>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <div className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Duş sonrası zemini kurulayın</span>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <div className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Tırnak makasını kişiye özel kullanın</span>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <div className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Çorapları yüksek ısıda yıkayın</span>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <div className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Banyo zeminini düzenli dezenfekte edin</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Ancak en etkili önlem, mevcut enfeksiyonu kontrol altına almaktır. <Link to="/hizmet/ayak-bakimi" className="text-blue-600 hover:underline font-medium">Medikal ayak bakımı</Link> ile mantar enfeksiyonunun kaynağı tedavi edilmeden ev içi önlemler tam koruma sağlamaz.
              </p>

              {/* 5 Büyük Hata Bloğu */}
              <div
                className="mt-8 bg-red-50 border border-red-200 rounded-2xl p-6 md:p-8 shadow-sm"
                aria-label="Tırnak mantarında yapılan 5 büyük hata"
              >
                <div className="flex items-center mb-4">
                  <AlertTriangle className="text-red-600 mr-3 flex-shrink-0" size={24} />
                  <h3 className="text-xl md:text-2xl font-bold text-red-900">
                    Tırnak Mantarında Yapılan 5 Büyük Hata
                  </h3>
                </div>
                <ol className="space-y-3 text-gray-800">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-red-600 text-white text-sm font-bold flex items-center justify-center mr-3">1</span>
                    <span><strong>Havlu paylaşmak</strong> — nemli tekstil mantar sporları için ideal ortamdır.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-red-600 text-white text-sm font-bold flex items-center justify-center mr-3">2</span>
                    <span><strong>Terlik paylaşmak</strong> — ev içi bulaşmanın en sık görülen sebebidir.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-red-600 text-white text-sm font-bold flex items-center justify-center mr-3">3</span>
                    <span><strong>Tedaviyi yarıda bırakmak</strong> — belirtiler gerileyince mantar uykuda kalır ve geri döner.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-red-600 text-white text-sm font-bold flex items-center justify-center mr-3">4</span>
                    <span><strong>Ayakkabıyı havalandırmamak</strong> — kapalı ve nemli ayakkabı yayılımı hızlandırır.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-red-600 text-white text-sm font-bold flex items-center justify-center mr-3">5</span>
                    <span><strong>Geç kalmak</strong> — erken başlanan <Link to="/blog/tirnak-mantari-tedavisi" className="text-blue-700 hover:underline font-medium">tırnak mantarı tedavisi</Link> süreci aylarca kısaltır.</span>
                  </li>
                </ol>
              </div>
            </section>

            {/* Kimler Daha Yatkın */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Tırnak Mantarına Kimler Daha Yatkındır?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Bazı bireyler tırnak mantarı enfeksiyonuna genetik ve çevresel faktörler nedeniyle daha yatkındır:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 font-bold">•</span>
                  <span className="text-gray-700">Diyabet hastaları ve bağışıklık sistemi zayıf olan bireyler</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 font-bold">•</span>
                  <span className="text-gray-700">Uzun süre kapalı ve nemli ayakkabı giyenler</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 font-bold">•</span>
                  <span className="text-gray-700">Sporcular ve yüzücüler</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 font-bold">•</span>
                  <span className="text-gray-700">65 yaş üstü bireyler</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 font-bold">•</span>
                  <span className="text-gray-700">Daha önce ayak mantarı geçirmiş olanlar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3 font-bold">•</span>
                  <span className="text-gray-700">Aşırı terleme problemi yaşayanlar</span>
                </li>
              </ul>

              <img 
                src="/blog-images/tirnak-mantari-bulasici/tirnak-mantari-nasil-gecer.webp" 
                alt="Tırnak mantarı nasıl geçer - birden fazla tırnakta mantar enfeksiyonu" 
                className="w-full rounded-xl shadow-lg mb-6"
              />
            </section>

            {/* Ne Zaman Uzman Desteği Almalısınız */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Ne Zaman Uzman Desteği Almalısınız?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Aşağıdaki durumlardan herhangi biri mevcutsa profesyonel değerlendirme gereklidir:
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-6">
                <ul className="space-y-2 text-gray-700">
                  <li>• Tırnakta belirgin renk değişimi başladıysa</li>
                  <li>• Tırnak kalınlaşması ilerliyorsa</li>
                  <li>• Ayakta hoş olmayan koku oluştuysa</li>
                  <li>• Daha önce tedavi denediniz ama sonuç alamadıysanız</li>
                  <li>• Birden fazla tırnak etkilendiyse</li>
                  <li>• Ağrı veya hassasiyet varsa</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Podolojik uygulamalar cerrahi değildir ve düzenli bakım prensibiyle ilerler. Özellikle erken dönemde müdahale, tedavi süresini ciddi şekilde kısaltır.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Tırnak mantarı şüphesi varsa veya ev içi bulaşmayı önlemek için profesyonel değerlendirme almak isterseniz, <Link to="/iletisim" className="text-blue-600 hover:underline font-medium">randevu alın</Link> ve durumunuzu uzman bir podolog ile değerlendirin.
              </p>

              {/* Öncesi / Sonrası — Sosyal kanıt + "tırnak mantarı öncesi sonrası" SEO */}
              <figure className="mt-8">
                <img
                  src="/blog-images/tirnak-mantari-bulasici/tirnak-mantari-oncesi-sonrasi-ankara-podolog.webp"
                  alt="tırnak mantarı öncesi sonrası - Ankara podolog profesyonel tedavi örneği"
                  className="w-full rounded-xl shadow-lg"
                  loading="lazy"
                  width="1200"
                  height="1200"
                />
                <figcaption className="text-sm text-gray-500 text-center mt-3 italic">
                  Tırnak mantarı öncesi ve sonrası: profesyonel podolojik bakım sonrasında tırnağın doğal rengine ve yapısına kavuşması.
                </figcaption>
              </figure>
            </section>

            {/* Sonuç - Genişletilmiş (120+ kelime) */}
            <section className="mb-12 bg-blue-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Sonuç
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Tırnak mantarı bulaşıcı bir enfeksiyondur ve ev içinde aile bireylerine geçebilir. Bulaşma genellikle ortak banyo kullanımı, havlu ve terlik paylaşımı gibi dolaylı yollarla gerçekleşir. Ancak doğru hijyen önlemleri ve erken tedavi ile bulaşma riski önemli ölçüde azaltılabilir.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Unutmayın: Tırnak mantarı kendi kendine geçmez ve evde uygulanan alternatif yöntemler genellikle yetersiz kalır. Ne kadar erken profesyonel müdahale yapılırsa, tedavi süreci o kadar kısa ve başarılı olur. Tedavisiz bırakılan enfeksiyon hem diğer tırnaklara yayılır hem de ev içinde bulaş riskini artırır.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Profesyonel podolojik bakım, hem mevcut enfeksiyonu etkili şekilde tedavi eder hem de çevrenizdeki kişilere bulaşma riskini ortadan kaldırır. Özellikle diyabet hastaları ve bağışıklık sistemi zayıf olan bireyler için erken değerlendirme kritik öneme sahiptir. Şüpheniz varsa beklemeden uzman görüşü alın.
              </p>
            </section>

            {/* Güven Bloğu - Author / E-E-A-T */}
            <aside
              className="mb-12 flex items-start gap-4 bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm"
              aria-label="Yazar bilgisi ve klinik güven"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                <User size={22} />
              </div>
              <div className="text-gray-700">
                <p className="font-semibold text-gray-900 mb-1">
                  İçerik Podolog Serdar Ceylan tarafından hazırlanmıştır.
                </p>
                <p className="text-sm leading-relaxed">
                  Medipodo Ayak Sağlığı Merkezi'ndeki klinik deneyime dayanmaktadır. Bilgiler genel bilgilendirme amaçlıdır; kişisel tanı ve tedavi için lütfen uzman değerlendirmesi alın.
                </p>
              </div>
            </aside>

            {/* FAQ Section - SEO uyumlu, HTML'de görünür */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Sıkça Sorulan Sorular
              </h2>
              
              <div className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                      aria-expanded={openFaqIndex === index}
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      {openFaqIndex === index ? (
                        <ChevronUp className="text-blue-600 flex-shrink-0" size={20} />
                      ) : (
                        <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                      )}
                    </button>
                    {/* Her zaman HTML'de mevcut, sadece görünürlük değişiyor - SEO için önemli */}
                    <div 
                      className={`px-6 py-4 bg-gray-50 border-t border-gray-200 ${openFaqIndex === index ? 'block' : 'hidden'}`}
                      itemScope 
                      itemProp="mainEntity" 
                      itemType="https://schema.org/Question"
                    >
                      <meta itemProp="name" content={faq.question} />
                      <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <p className="text-gray-700" itemProp="text">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* SSR/SEO için gizli FAQ içeriği - Crawler'lar görebilir */}
              <div className="sr-only" aria-hidden="true">
                {faqItems.map((faq, index) => (
                  <div key={`seo-faq-${index}`}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-2xl text-center">
              <h2 className="text-2xl font-bold mb-4">
                Tırnak Mantarı Şüphesi mi Var?
              </h2>
              <p className="text-blue-100 mb-6">
                Erken müdahale tedavi süresini kısaltır. Profesyonel değerlendirme için hemen randevu alın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/iletisim">
                  <Button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
                    <Phone size={20} className="mr-2" />
                    Randevu Al
                  </Button>
                </Link>
                <a href="tel:+905456569747">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                    Hemen Ara: 0545 656 97 47
                  </Button>
                </a>
              </div>
            </section>

          </div>
        </div>
      </article>
    </>
  );
};

export default TirnakMantariBulasiciBlog;
