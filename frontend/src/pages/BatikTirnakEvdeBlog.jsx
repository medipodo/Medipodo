import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, Phone, ChevronDown, ChevronUp, AlertTriangle, CheckCircle2, XCircle, Heart, Droplets, Footprints } from 'lucide-react';
import { Helmet } from 'react-helmet';

const BatikTirnakEvdeBlog = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Batık tırnak kendiliğinden geçer mi?",
      answer: "Hafif durumlarda rahatlama görülebilir. Ancak ilerleyen vakalarda profesyonel değerlendirme gerekebilir."
    },
    {
      question: "Evde batık tırnak kesilir mi?",
      answer: "Evde müdahale etmek genellikle önerilmez. Yanlış kesim durumu daha da kötüleştirebilir."
    },
    {
      question: "Batık tırnak neden tekrar eder?",
      answer: "Yanlış tırnak kesimi, dar ayakkabılar ve tırnak yapısı tekrar riskini artırabilir."
    },
    {
      question: "Batık tırnak enfeksiyon yapar mı?",
      answer: "İlerlemiş durumlarda enfeksiyon gelişebilir. Bu nedenle erken dönemde takip önerilir."
    }
  ];

  // FAQPage JSON-LD Schema
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

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Batık Tırnak Evde Nasıl Rahatlatılır? (Güvenli Yöntemler)",
    "description": "Batık tırnak evde nasıl rahatlatılır? Güvenli yöntemler, yapılması ve yapılmaması gerekenler. Podolojik bakış açısıyla evde batık tırnak bakımı rehberi.",
    "image": "https://customer-assets.emergentagent.com/job_a8785b92-dafd-43b2-b2df-4e23a325beea/artifacts/ckuhsqjc_batik-tirnak-evde-ne-yapilabilir.webp",
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
    "datePublished": "2026-03-31",
    "dateModified": "2026-03-31"
  };

  return (
    <>
      <Helmet>
        <title>Batık Tırnak Evde Nasıl Rahatlatılır? (Güvenli Yöntemler) | Medipodo</title>
        <meta name="description" content="Batık tırnak evde nasıl rahatlatılır? Güvenli yöntemler, yapılması ve yapılmaması gerekenler. Podolojik bakış açısıyla evde batık tırnak bakımı rehberi." />
        <meta name="keywords" content="batık tırnak evde tedavi, batık tırnak evde bakım, batık tırnak nasıl geçer, batık tırnak rahatlatma, batık tırnak evde ne yapılır, podoloji, Ankara podolog" />
        <link rel="canonical" href="https://medipodo.com/blog/batik-tirnak-evde-nasil-rahatlatilir" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Batık Tırnak Evde Nasıl Rahatlatılır? (Güvenli Yöntemler)" />
        <meta property="og:description" content="Batık tırnak evde nasıl rahatlatılır? Güvenli yöntemler ve yapılmaması gerekenler. Podolojik bakış açısıyla rehber." />
        <meta property="og:image" content="https://customer-assets.emergentagent.com/job_a8785b92-dafd-43b2-b2df-4e23a325beea/artifacts/ckuhsqjc_batik-tirnak-evde-ne-yapilabilir.webp" />
        <meta property="og:url" content="https://medipodo.com/blog/batik-tirnak-evde-nasil-rahatlatilir" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Batık Tırnak Evde Nasıl Rahatlatılır? (Güvenli Yöntemler)" />
        <meta name="twitter:description" content="Batık tırnak evde nasıl rahatlatılır? Güvenli yöntemler ve yapılmaması gerekenler." />
        <meta name="twitter:image" content="https://customer-assets.emergentagent.com/job_a8785b92-dafd-43b2-b2df-4e23a325beea/artifacts/ckuhsqjc_batik-tirnak-evde-ne-yapilabilir.webp" />

        {/* Schemas */}
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
              Batık Tırnak Evde Nasıl Rahatlatılır?<br />
              <span className="text-blue-200">(Güvenli Yöntemler)</span>
            </h1>
            
            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Podolog Serdar Ceylan</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>31 Mart 2026 · 8 dakika okuma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Ana Görsel */}
            <img 
              src="https://customer-assets.emergentagent.com/job_a8785b92-dafd-43b2-b2df-4e23a325beea/artifacts/ckuhsqjc_batik-tirnak-evde-ne-yapilabilir.webp" 
              alt="Batık tırnak evde nasıl rahatlatılır - güvenli yöntemler"
              width="1200"
              height="675"
              className="w-full h-auto rounded-xl shadow-lg mb-10"
              loading="eager"
            />

            {/* Giriş */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Batık tırnak, günlük yaşamı zorlaştırabilen yaygın bir ayak problemidir. Özellikle yürürken hissedilen hassasiyet ve ağrı, basit aktiviteleri bile rahatsız edici hale getirebilir. Bu durum genellikle tırnağın kenarının deriye doğru büyümesiyle ortaya çıkar.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Peki evde yapılabilecek güvenli uygulamalar nelerdir? Hangi yöntemler gerçekten rahatlamaya yardımcı olabilir ve hangi hatalardan kaçınmak gerekir?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Bu yazıda, batık tırnağı evde daha kontrollü ve güvenli şekilde nasıl yönetebileceğinizi ele alıyoruz.
              </p>
            </section>

            {/* Batık Tırnak Nedir ve Neden Oluşur? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Batık Tırnak Nedir ve Neden Oluşur?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Batık tırnak, tırnağın kenar kısmının çevre dokunun içine doğru ilerlemesiyle oluşur. Bu durum zamanla kızarıklık, hassasiyet ve ağrıya neden olabilir.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">En sık görülen nedenler:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    Tırnakların çok kısa veya yanlış kesilmesi
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    Dar ve sıkı ayakkabı kullanımı
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    Ayak hijyenine yeterince dikkat edilmemesi
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    Tırnağın yapısal olarak içe kıvrık olması
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    Tekrarlayan baskı ve travmalar
                  </li>
                </ul>
              </div>

              <p className="text-gray-700">
                Batık tırnak nedenleri hakkında daha detaylı bilgi için <Link to="/blog/batik-tirnak-nedenleri" className="text-blue-600 hover:text-blue-800 font-semibold underline">batık tırnak nedenleri</Link> yazımızı inceleyebilirsiniz.
              </p>
            </section>

            {/* Batık Tırnak Evde Nasıl Rahatlatılır? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">
                Batık Tırnak Evde Nasıl Rahatlatılır?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Evde uygulanabilecek bazı basit yöntemler, özellikle erken aşamada rahatlama sağlamaya yardımcı olabilir. Ancak uygulamaların dikkatli yapılması önemlidir.
              </p>

              {/* 1. Ilık Su Banyosu */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Droplets className="text-teal-500 mr-3" size={24} />
                  Ilık Su Banyosu
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Günde 1–2 kez, 15–20 dakika ılık suya ayağı koymak:
                </p>
                <ul className="list-none text-gray-700 space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-teal-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    bölgenin yumuşamasına yardımcı olabilir
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-teal-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    hassasiyeti azaltabilir
                  </li>
                </ul>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-teal-800 text-sm">
                    Ilık su banyosu sırasında bölgenin temiz kalmasına özen gösterilmelidir. Gerekli durumlarda antiseptik içerikli ürünler tercih edilebilir ancak hassasiyet durumuna göre dikkatli kullanılmalıdır.
                  </p>
                </div>
              </div>

              {/* 2. Bölgeyi Temiz ve Kuru Tutmak */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Heart className="text-green-500 mr-3" size={24} />
                  Bölgeyi Temiz ve Kuru Tutmak
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Batık tırnağın bulunduğu alanın temiz tutulması önemlidir. Nemli ortamlar tahrişi artırabilir.
                </p>
                <ul className="list-none text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    Ayaklar yıkandıktan sonra iyice kurulanmalıdır
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    Tırnak kenarları nemli bırakılmamalıdır
                  </li>
                </ul>
              </div>

              {/* 3. Rahat Ayakkabı Tercihi */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Footprints className="text-purple-500 mr-3" size={24} />
                  Rahat Ayakkabı Tercihi
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dar ayakkabılar batık tırnak üzerindeki baskıyı artırabilir.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">Bu süreçte:</p>
                <ul className="list-none text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-purple-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    geniş burunlu ayakkabılar tercih edilmeli
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-purple-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    sıkıştıran modellerden kaçınılmalıdır
                  </li>
                </ul>
              </div>

              {/* 4. Baskıyı Artıracak Müdahalelerden Kaçınmak */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="text-orange-500 mr-3" size={24} />
                  Baskıyı Artıracak Müdahalelerden Kaçınmak
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Bazı durumlarda tırnak kenarındaki baskıyı azaltmaya yönelik küçük destek uygulamaları yapılabilir. Ancak bu tür uygulamaların yanlış yapılması durumu kötüleştirebileceğinden dikkatli olunmalıdır.
                </p>
                <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                  <p className="text-orange-800 font-medium">
                    Tırnağı zorla kaldırmaya çalışmak veya sert müdahalelerde bulunmak önerilmez.
                  </p>
                </div>
              </div>
            </section>

            {/* Batık Tırnakta Yapılmaması Gerekenler */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">
                Batık Tırnakta Yapılmaması Gerekenler
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Evde yapılan yanlış uygulamalar sorunu daha da ilerletebilir.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-red-900 mb-4">Kaçınılması gerekenler:</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <XCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Tırnağı çok kısa kesmek</span>
                  </div>
                  <div className="flex items-start">
                    <XCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Tırnak köşesini oymak</span>
                  </div>
                  <div className="flex items-start">
                    <XCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Sivri veya keskin aletlerle müdahale etmek</span>
                  </div>
                  <div className="flex items-start">
                    <XCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Hassas veya iltihaplı bölgeyi zorlamak</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-300 p-4 rounded-lg">
                <p className="text-amber-800 font-medium">
                  Bu tür müdahaleler, enfeksiyon riskini artırabilir ve süreci uzatabilir.
                </p>
              </div>
            </section>

            {/* Ne Zaman Podolojik Değerlendirme Önerilir? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ne Zaman Podolojik Değerlendirme Önerilir?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Evde yapılan uygulamalarla rahatlama sağlanamıyorsa, süreci ertelemek yerine profesyonel destek almak önemlidir.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Aşağıdaki durumlarda podolojik değerlendirme önerilir:</h3>
                <div className="space-y-3">
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Ağrı giderek artıyorsa</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Kızarıklık ve şişlik belirginleştiyse</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Akıntı veya iltihap oluştuysa</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Sorun sık sık tekrar ediyorsa</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Batık tırnak problemlerinde, özel podolojik ekipmanlar ile yapılan uygulamalar daha kontrollü ve güvenli şekilde gerçekleştirilebilir.
              </p>

              <div className="mt-4">
                <Link to="/hizmet/batik-tirnak" className="text-blue-600 hover:text-blue-800 font-semibold underline">
                  Batık tırnak hizmetlerimiz hakkında detaylı bilgi alın
                </Link>
              </div>
            </section>

            {/* Batık Tırnak Tekrarlar mı? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Batık Tırnak Tekrarlar mı?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Evet, batık tırnak uygun bakım yapılmadığında tekrar edebilir.
              </p>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-900 mb-4">Tekrar riskini azaltmak için:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    Tırnaklar düz şekilde kesilmeli
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    Çok kısa kesimden kaçınılmalı
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    Ayakkabı seçimine dikkat edilmelidir
                  </li>
                </ul>
              </div>
            </section>

            {/* SSS - Accordion */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Sıkça Sorulan Sorular (SSS)
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Sonuç
              </h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Batık tırnak, doğru yaklaşımla yönetilebilen bir durumdur. Evde uygulanan basit yöntemler başlangıç aşamasında rahatlama sağlayabilir. Ancak bu uygulamalar genellikle geçici destek sunar.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Evde yapılan uygulamalarla yeterli rahatlama sağlanamıyorsa, daha sağlıklı ve kontrollü bir süreç için podolojik değerlendirme önerilir.
                </p>
              </div>

              {/* İlgili Linkler */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">İlgili Sayfalar</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/hizmet/batik-tirnak" className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200">
                    <p className="font-semibold text-blue-600">Batık Tırnak Hizmeti</p>
                    <p className="text-sm text-gray-600">Profesyonel podolojik hizmetlerimiz</p>
                  </Link>
                  <Link to="/blog/bs-bant-uygulamasi" className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200">
                    <p className="font-semibold text-blue-600">B/S Bant Uygulaması</p>
                    <p className="text-sm text-gray-600">Modern ve ağrısız yöntem</p>
                  </Link>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Profesyonel Ayak Bakımı İçin Randevu Alın
              </h2>
              <p className="text-blue-100 mb-6 text-lg">
                Ankara Bağlıca'da profesyonel ayak bakımı hakkında bilgi almak için bizimle iletişime geçebilirsiniz.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:05456569747"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                >
                  <Phone className="mr-2" size={24} />
                  0545 656 97 47
                </a>
                <Link
                  to="/iletisim"
                  className="inline-flex items-center bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-400 transition-all transform hover:scale-105 shadow-lg"
                >
                  Randevu Al
                </Link>
              </div>
            </section>

          </div>
        </div>
      </article>
    </>
  );
};

export default BatikTirnakEvdeBlog;
