import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, Phone, ChevronDown, ChevronUp, AlertTriangle, CheckCircle2, XCircle, Heart, Droplets, Footprints, MessageCircle } from 'lucide-react';
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
      answer: "Hafif vakalarda doğru bakım ve hijyen ile rahatlama sağlanabilir. Ancak batık tırnak ağrısı artıyorsa, kızarıklık ve şişlik belirginleşiyorsa, kendiliğinden geçmesi beklenemez. Bu durumda profesyonel podolojik değerlendirme önerilir."
    },
    {
      question: "Evde batık tırnak kesmek doğru mu?",
      answer: "Evde batık tırnak kesmeye çalışmak genellikle durumu kötüleştirir. Tırnağın köşelerini oymak veya çok kısa kesmek, batığın daha derine ilerlemesine ve enfeksiyon riskinin artmasına neden olabilir. Steril ekipmanlarla yapılan kontrollü uygulamalar için podolog desteği almanız önerilir."
    },
    {
      question: "Batık tırnak neden tekrar eder?",
      answer: "Batık tırnak; yanlış tırnak kesimi alışkanlığı, dar ayakkabı kullanımı ve tırnak yapısının genetik olarak içe kıvrık olması nedeniyle tekrar edebilir. Tekrarı önlemek için tırnakları düz kesmek, rahat ayakkabılar tercih etmek ve düzenli podolojik bakım almak önemlidir."
    },
    {
      question: "Batık tırnak enfeksiyon yapar mı?",
      answer: "Evet, ilerlemiş batık tırnak vakalarında enfeksiyon gelişebilir. Kızarıklık, şişlik, ısı artışı ve akıntı gibi belirtiler enfeksiyon işareti olabilir. Bu nedenle erken dönemde uzman değerlendirmesi almak, sürecin kontrol altına alınması açısından önemlidir."
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
    "headline": "Batık Tırnak Evde Nasıl Geçer? (Güvenli Bakım Yöntemleri)",
    "description": "Batık tırnak nasıl geçer? Evde batık tırnak bakımı için güvenli yöntemler, yapılmaması gerekenler ve ne zaman podologa gidilmeli. Uzman podolog önerileri.",
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
        <title>Batık Tırnak Evde Nasıl Geçer? (Güvenli Bakım Yöntemleri) | Medipodo</title>
        <meta name="description" content="Batık tırnak nasıl geçer? Evde batık tırnak bakımı için güvenli yöntemler, yapılmaması gerekenler ve ne zaman podologa gidilmeli. Uzman podolog önerileri." />
        <meta name="keywords" content="batık tırnak nasıl geçer, batık tırnak ağrısı, batık tırnak neden olur, evde batık tırnak bakımı, batık tırnak nasıl rahatlatılır, podolog, Ankara podolog" />
        <link rel="canonical" href="https://medipodo.com/blog/batik-tirnak-evde-nasil-rahatlatilir" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Batık Tırnak Evde Nasıl Geçer? (Güvenli Bakım Yöntemleri)" />
        <meta property="og:description" content="Batık tırnak nasıl geçer? Evde batık tırnak bakımı için güvenli yöntemler ve ne zaman podologa gidilmeli." />
        <meta property="og:image" content="https://customer-assets.emergentagent.com/job_a8785b92-dafd-43b2-b2df-4e23a325beea/artifacts/ckuhsqjc_batik-tirnak-evde-ne-yapilabilir.webp" />
        <meta property="og:url" content="https://medipodo.com/blog/batik-tirnak-evde-nasil-rahatlatilir" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Batık Tırnak Evde Nasıl Geçer? (Güvenli Bakım Yöntemleri)" />
        <meta name="twitter:description" content="Batık tırnak nasıl geçer? Evde batık tırnak bakımı için güvenli yöntemler." />
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
              Batık Tırnak Evde Nasıl Geçer?<br />
              <span className="text-blue-200">(Güvenli Bakım Yöntemleri)</span>
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
            
            {/* Giriş - Duygusal Bağ */}
            <section className="mb-10">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Sabah kalktığınızda ayağınıza bastığınız anda hissettiğiniz o keskin acı... Ayakkabı giymeye çalışırken bile rahatsızlık veren batık tırnak ağrısı, günlük hayatınızı ciddi şekilde zorlaştırabilir.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Yürürken her adımda hissettiğiniz hassasiyet, en basit aktiviteleri bile çekilmez hale getirebilir. "Batık tırnak nasıl geçer?" diye merak ediyorsanız, doğru yerdesiniz.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Bu yazıda, evde batık tırnak bakımı için güvenli yöntemleri, kaçınmanız gereken hataları ve ne zaman profesyonel destek almanız gerektiğini öğreneceksiniz.
              </p>
            </section>

            {/* Görsel 1 - Kapak Görseli */}
            <div className="mb-12">
              <img 
                src="https://customer-assets.emergentagent.com/job_a8785b92-dafd-43b2-b2df-4e23a325beea/artifacts/ckuhsqjc_batik-tirnak-evde-ne-yapilabilir.webp" 
                alt="Batık tırnak evde nasıl geçer - güvenli bakım yöntemleri"
                width="1200"
                height="675"
                className="w-full h-auto rounded-xl shadow-lg"
                loading="eager"
              />
              <p className="text-sm text-gray-500 mt-2 text-center italic">Batık tırnak, doğru bakım yöntemleriyle rahatlatılabilir</p>
            </div>

            {/* Batık Tırnak Neden Olur? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Batık Tırnak Neden Olur?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Batık tırnak, tırnağın kenar kısmının çevre dokuya baskı yaparak ilerlemesiyle oluşur. Bu durum zamanla kızarıklık, hassasiyet ve batık tırnak ağrısına neden olur.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">En sık görülen nedenler:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-3 mt-1 font-bold">•</span>
                    Tırnakların çok kısa veya yanlış kesilmesi
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-3 mt-1 font-bold">•</span>
                    Dar ve sıkı ayakkabı kullanımı
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-3 mt-1 font-bold">•</span>
                    Tırnağın yapısal olarak içe kıvrık olması
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-blue-600 mr-3 mt-1 font-bold">•</span>
                    Tekrarlayan baskı ve travmalar
                  </li>
                </ul>
              </div>

              <p className="text-gray-700">
                Batık tırnak nedenleri hakkında daha detaylı bilgi için <Link to="/blog/batik-tirnak-nedenleri" className="text-blue-600 hover:text-blue-800 font-semibold underline">batık tırnak nedenleri</Link> yazımızı inceleyebilirsiniz.
              </p>
            </section>

            {/* Evde Batık Tırnak Nasıl Rahatlatılır? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">
                Evde Batık Tırnak Bakımı: Güvenli Yöntemler
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Erken aşamada evde batık tırnak bakımı ile rahatlama sağlamak mümkün olabilir. Ancak uygulamaların dikkatli yapılması önemlidir.
              </p>

              {/* Görsel 2 - Tırnak Kesimi */}
              <div className="mb-8">
                <img 
                  src="https://customer-assets.emergentagent.com/job_batik-tirnak-rahatla/artifacts/zdtzuxe2_ayak-tirnagi-nasil-kesilir.webp" 
                  alt="Doğru ayak tırnağı kesimi - batık tırnak önleme"
                  width="800"
                  height="600"
                  className="w-full max-w-lg mx-auto h-auto rounded-xl shadow-lg"
                  loading="lazy"
                />
                <p className="text-sm text-gray-500 mt-2 text-center italic">Doğru tırnak kesimi, batık tırnak oluşumunu önlemenin en önemli adımıdır</p>
              </div>

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
                    Bölgenin yumuşamasına yardımcı olabilir
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-teal-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    Batık tırnak ağrısını hafifletebilir
                  </li>
                </ul>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-teal-800 text-sm">
                    <strong>İpucu:</strong> Ilık su banyosu sırasında bölgenin temiz kalmasına özen gösterin. Gerekirse antiseptik içerikli ürünler tercih edilebilir.
                  </p>
                </div>
              </div>

              {/* 2. Bölgeyi Temiz ve Kuru Tutmak */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Heart className="text-green-500 mr-3" size={24} />
                  Bölgeyi Temiz ve Kuru Tutun
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nemli ortamlar tahrişi artırabilir ve enfeksiyon riskini yükseltir.
                </p>
                <ul className="list-none text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    Ayakları yıkadıktan sonra iyice kurulayın
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    Tırnak kenarlarını nemli bırakmayın
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    Pamuklu çoraplar tercih edin
                  </li>
                </ul>
              </div>

              {/* 3. Rahat Ayakkabı Tercihi */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Footprints className="text-purple-500 mr-3" size={24} />
                  Rahat Ayakkabı Tercih Edin
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dar ayakkabılar batık tırnak üzerindeki baskıyı artırarak ağrıyı şiddetlendirir.
                </p>
                <ul className="list-none text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-purple-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    Geniş burunlu ayakkabılar tercih edin
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-purple-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    Sıkıştıran modellerden kaçının
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-purple-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    Mümkünse evde açık terlik kullanın
                  </li>
                </ul>
              </div>
            </section>

            {/* Orta CTA - WhatsApp */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 md:p-8 text-white">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center">
                    <MessageCircle size={32} className="mr-4" />
                    <div>
                      <p className="font-bold text-lg">Batık tırnak şikayetiniz mi var?</p>
                      <p className="text-green-100">WhatsApp üzerinden bize yazarak ön değerlendirme alabilirsiniz.</p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/905456569747?text=Merhaba,%20batık%20tırnak%20hakkında%20bilgi%20almak%20istiyorum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-green-600 px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-colors flex items-center whitespace-nowrap"
                  >
                    <MessageCircle size={20} className="mr-2" />
                    WhatsApp'tan Yazın
                  </a>
                </div>
              </div>
            </section>

            {/* Yapılmaması Gerekenler */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">
                Batık Tırnakta Yapılmaması Gerekenler
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Evde yapılan yanlış uygulamalar sorunu daha da ilerletebilir. Batık tırnak nasıl geçer sorusunun cevabı, kesinlikle aşağıdaki hatalardan kaçınmaktan geçer.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-red-900 mb-4">Kesinlikle kaçının:</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <XCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="text-gray-700 font-medium">Tırnağı çok kısa kesmek</span>
                      <p className="text-gray-600 text-sm">Tırnak ucu parmak ucunu hafifçe geçecek şekilde bırakılmalı</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <XCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="text-gray-700 font-medium">Tırnak köşesini oymak</span>
                      <p className="text-gray-600 text-sm">Köşeleri yuvarlatmak batığın derinleşmesine neden olur</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <XCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="text-gray-700 font-medium">Sivri aletlerle müdahale etmek</span>
                      <p className="text-gray-600 text-sm">Steril olmayan aletler enfeksiyon riskini artırır</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <XCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="text-gray-700 font-medium">Hassas bölgeyi zorlamak</span>
                      <p className="text-gray-600 text-sm">Zorlamak ağrıyı ve tahrişi artırır</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-300 p-4 rounded-lg">
                <p className="text-amber-800 font-medium">
                  <AlertTriangle className="inline mr-2" size={18} />
                  Bu tür müdahaleler enfeksiyon riskini artırabilir ve süreci uzatabilir.
                </p>
              </div>
            </section>

            {/* Ne Zaman Uzmana Gidilmeli? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ne Zaman Podologa Gidilmeli?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Evde yapılan bakım uygulamalarıyla rahatlama sağlanamıyorsa, profesyonel podolojik destek almak önemlidir. Uzman değerlendirmesi ile kontrollü uygulama yapılması, sürecin daha güvenli ilerlemesini sağlar.
              </p>

              {/* Görsel 3 - Batık Tırnak İllüstrasyon */}
              <div className="mb-8">
                <img 
                  src="https://customer-assets.emergentagent.com/job_batik-tirnak-rahatla/artifacts/w8zoexfc_batik-tirnak-ayak.webp" 
                  alt="Batık tırnak belirtileri - ne zaman podologa gidilmeli"
                  width="800"
                  height="600"
                  className="w-full max-w-md mx-auto h-auto rounded-xl shadow-lg"
                  loading="lazy"
                />
                <p className="text-sm text-gray-500 mt-2 text-center italic">Batık tırnak belirtileri artıyorsa profesyonel destek önerilir</p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-blue-900 mb-4">Şu durumlarda podolog değerlendirmesi önerilir:</h3>
                <div className="space-y-3">
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Batık tırnak ağrısı giderek artıyorsa</span>
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

              <p className="text-gray-700 leading-relaxed mb-4">
                Profesyonel podolojik müdahale, steril ekipmanlar ile yapılır ve tırnağın doğru şekilde rahatlatılmasını sağlar. Ayrıca tekrarı önlemeye yönelik kişisel bakım önerileri de verilir.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/hizmet/batik-tirnak" className="text-blue-600 hover:text-blue-800 font-semibold underline">
                  Batık tırnak hizmetlerimiz
                </Link>
                <span className="text-gray-400">|</span>
                <Link to="/blog/bs-bant-uygulamasi" className="text-blue-600 hover:text-blue-800 font-semibold underline">
                  B/S Bant uygulaması
                </Link>
              </div>
            </section>

            {/* Tekrarlama Riski */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Batık Tırnak Tekrarını Önleme
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Batık tırnak, uygun bakım yapılmadığında tekrar edebilir. Sürecin kontrollü yönetilmesi için şu önerilere dikkat edin:
              </p>

              <div className="bg-green-50 rounded-xl p-6">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span><strong>Tırnakları düz kesin</strong> – köşeleri yuvarlatmayın</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span><strong>Çok kısa kesimden kaçının</strong> – tırnak ucu parmak ucunu geçsin</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span><strong>Rahat ayakkabılar tercih edin</strong> – dar burunlu modellerden kaçının</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    <span><strong>Düzenli podolojik bakım</strong> alarak riskleri minimize edin</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* SSS - Accordion */}
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
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Sonuç
              </h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Batık tırnak, doğru yaklaşımla kontrol altına alınabilir. Evde uygulanan basit bakım yöntemleri erken dönemde rahatlama sağlayabilir. Ancak batık tırnak ağrısı artıyorsa veya iyileşme sağlanamıyorsa, profesyonel podolojik destek almanız önerilir.
                </p>
                <p className="text-gray-700">
                  Steril ekipmanlarla yapılan kontrollü uygulamalar, hem rahatlamanızı hem de tekrar riskini azaltmanızı sağlar.
                </p>
              </div>
            </section>

            {/* Son CTA - WhatsApp & Randevu */}
            <section className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl p-8 md:p-10 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Profesyonel Podolojik Destek Alın
              </h2>
              <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
                Batık tırnak sorunu ilerlemeden profesyonel podolojik bakım desteği almak için bizimle iletişime geçebilirsiniz. İsterseniz fotoğraf göndererek size özel ön değerlendirme talep edebilirsiniz.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/905456569747?text=Merhaba,%20batık%20tırnak%20hakkında%20ön%20değerlendirme%20almak%20istiyorum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-400 transition-all transform hover:scale-105 shadow-lg"
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

            {/* İlgili Sayfalar */}
            <section className="mt-12">
              <h3 className="text-lg font-bold text-gray-900 mb-4">İlgili İçerikler</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/blog/ayak-sagligi-rehberi" className="bg-blue-50 rounded-lg p-4 hover:shadow-md transition-shadow border border-blue-200 group md:col-span-2">
                  <p className="font-semibold text-blue-600 group-hover:text-blue-800">Ayak Sağlığı Tam Rehberi (2026)</p>
                  <p className="text-sm text-gray-600">Tüm ayak problemleri, bakım yöntemleri ve uzman önerileri tek rehberde</p>
                </Link>
                <Link to="/hizmet/batik-tirnak" className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200 group">
                  <p className="font-semibold text-blue-600 group-hover:text-blue-800">Batık Tırnak Bakımı Hizmeti</p>
                  <p className="text-sm text-gray-600">Profesyonel podolojik uygulamalar</p>
                </Link>
                <Link to="/blog/bs-bant-uygulamasi" className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200 group">
                  <p className="font-semibold text-blue-600 group-hover:text-blue-800">B/S Bant Uygulaması</p>
                  <p className="text-sm text-gray-600">Modern ve ağrısız yöntem</p>
                </Link>
                <Link to="/blog/batik-tirnak-nedenleri" className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200 group">
                  <p className="font-semibold text-blue-600 group-hover:text-blue-800">Batık Tırnak Nedenleri</p>
                  <p className="text-sm text-gray-600">Neden oluşur, nasıl önlenir?</p>
                </Link>
                <Link to="/blog/tirnakbatmasi" className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200 group">
                  <p className="font-semibold text-blue-600 group-hover:text-blue-800">Tırnak Batması Rehberi</p>
                  <p className="text-sm text-gray-600">Detaylı bilgi ve çözümler</p>
                </Link>
                <Link to="/blog/tirnak-teli-fiyatlari-ankara" className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200 group">
                  <p className="font-semibold text-blue-600 group-hover:text-blue-800">Tırnak Teli Fiyatları 2026</p>
                  <p className="text-sm text-gray-600">Ankara güncel fiyat listesi</p>
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
