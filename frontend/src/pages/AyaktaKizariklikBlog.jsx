import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, Phone, ChevronDown, ChevronUp, AlertTriangle, CheckCircle2, XCircle, Flame, Footprints, MessageCircle, ShieldAlert } from 'lucide-react';
import { Helmet } from 'react-helmet';

const AyaktaKizariklikBlog = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Ayakta kızarıklık kendiliğinden geçer mi?",
      answer: "Bazı hafif durumlar kısa sürede azalabilir. Ancak birkaç gün içinde geçmeyen veya tekrarlayan kızarıklıklarda profesyonel değerlendirme önerilir."
    },
    {
      question: "Ayakta yanma hissi normal mi?",
      answer: "Geçici durumlarda yaşanabilir ancak sık tekrar ediyorsa veya giderek artıyorsa araştırılması faydalı olabilir. Özellikle gece artan yanma hissi dikkatle değerlendirilmelidir."
    },
    {
      question: "Ayak mantarı kızarıklık yapar mı?",
      answer: "Evet, ayak mantarı en sık kızarıklık nedenlerinden biridir. Özellikle parmak araları ve taban bölgesinde kaşıntı, pullanma ve deri değişimleri ile birlikte görülebilir."
    },
    {
      question: "Ne zaman destek alınmalı?",
      answer: "Kızarıklık geçmiyorsa, ağrı artıyorsa, şişlik veya akıntı varsa ya da durum sık tekrar ediyorsa uzman değerlendirmesi önerilir."
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
    "headline": "Ayakta Kızarıklık Neden Olur? (Yanma ve Hassasiyet Birlikte Görülebilir mi?)",
    "description": "Ayakta kızarıklık neden olur? Ayakta kızarıklık ve yanma nedenleri, evde yapılabilecekler ve ne zaman uzmana başvurulmalı. Podolog önerileri.",
    "image": "https://customer-assets.emergentagent.com/job_batik-tirnak-rahatla/artifacts/gfbu7u6f_ayakta-kizar%C4%B1klik-neden-olur.webp",
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
        <title>Ayakta Kızarıklık Neden Olur? (Yanma ve Hassasiyetle Birlikte) | Medipodo</title>
        <meta name="description" content="Ayakta kızarıklık neden olur? Ayakta kızarıklık ve yanma nedenleri, evde yapılabilecekler ve ne zaman uzmana başvurulmalı. Podolog önerileri." />
        <meta name="keywords" content="ayakta kızarıklık neden olur, ayakta kızarıklık ve yanma, ayak kızarıklığı nedenleri, ayakta kızarma neden olur, ayak mantarı, podolog Ankara" />
        <link rel="canonical" href="https://medipodo.com/blog/ayakta-kizariklik-neden-olur" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Ayakta Kızarıklık Neden Olur? (Yanma ve Hassasiyetle Birlikte)" />
        <meta property="og:description" content="Ayakta kızarıklık neden olur? Ayakta kızarıklık ve yanma nedenleri, evde yapılabilecekler ve ne zaman uzmana başvurulmalı." />
        <meta property="og:image" content="https://customer-assets.emergentagent.com/job_batik-tirnak-rahatla/artifacts/gfbu7u6f_ayakta-kizar%C4%B1klik-neden-olur.webp" />
        <meta property="og:url" content="https://medipodo.com/blog/ayakta-kizariklik-neden-olur" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayakta Kızarıklık Neden Olur? (Yanma ve Hassasiyetle Birlikte)" />
        <meta name="twitter:description" content="Ayakta kızarıklık neden olur? Ayakta kızarıklık ve yanma nedenleri." />
        <meta name="twitter:image" content="https://customer-assets.emergentagent.com/job_batik-tirnak-rahatla/artifacts/gfbu7u6f_ayakta-kizar%C4%B1klik-neden-olur.webp" />

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
              Ayakta Kızarıklık Neden Olur?<br />
              <span className="text-blue-200">(Yanma ve Hassasiyet Birlikte Görülebilir mi?)</span>
            </h1>
            
            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Podolog Serdar Ceylan</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>31 Mart 2026 · 7 dakika okuma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Giriş */}
            <section className="mb-10">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Ayakta oluşan kızarıklık, çoğu zaman basit bir tahriş gibi görünse de bazı durumlarda altta yatan farklı nedenlerle ortaya çıkabilir. Özellikle gün içinde artan hassasiyet, yanma hissi veya ayakkabı giyerken oluşan rahatsızlık bu durumu daha dikkat çekici hale getirir.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Eğer ayaktaki kızarıklık birkaç gün içinde geçmiyor veya farklı şikayetlerle birlikte görülüyorsa, daha yakından değerlendirilmesi faydalı olabilir.
              </p>
            </section>

            {/* Görsel 1 - Kapak Görseli */}
            <div className="mb-12">
              <img 
                src="https://customer-assets.emergentagent.com/job_batik-tirnak-rahatla/artifacts/gfbu7u6f_ayakta-kizar%C4%B1klik-neden-olur.webp" 
                alt="Ayakta kızarıklık neden olur - yanma ve hassasiyet belirtileri"
                width="1200"
                height="675"
                className="w-full h-auto rounded-xl shadow-lg"
                loading="eager"
              />
              <p className="text-sm text-gray-500 mt-2 text-center italic">Ayakta kızarıklık farklı nedenlerle ortaya çıkabilir</p>
            </div>

            {/* Ayakta Kızarıklığın En Sık Nedenleri */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">
                Ayakta Kızarıklığın En Sık Nedenleri
              </h2>

              {/* Sürtünme ve Baskı */}
              <div className="mb-6 bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-400">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sürtünme ve Baskı</h3>
                <p className="text-gray-700 leading-relaxed">
                  Dar ayakkabılar veya uzun süre yürüyüş, deride tahrişe ve kızarıklığa neden olabilir. Özellikle yeni ayakkabılar veya uygun olmayan numara seçimi bu durumu tetikleyebilir.
                </p>
              </div>

              {/* Batık Tırnak */}
              <div className="mb-6 bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-400">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Batık Tırnak</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Tırnağın kenar kısmının deriye baskı yapması sonucunda:
                </p>
                <ul className="list-none text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Kızarıklık
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Hassasiyet
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Şişlik oluşabilir
                  </li>
                </ul>
              </div>

              {/* Görsel 2 - Halluks Valgus Kızarıklık */}
              <div className="mb-8">
                <img 
                  src="https://customer-assets.emergentagent.com/job_batik-tirnak-rahatla/artifacts/0ef6o4q7_halluks-valgus-kizar%C4%B1klik.webp" 
                  alt="Ayakta kızarıklık görünümü - halluks valgus bölgesinde kızarıklık örneği"
                  width="800"
                  height="600"
                  className="w-full max-w-lg mx-auto h-auto rounded-xl shadow-lg"
                  loading="lazy"
                />
                <p className="text-sm text-gray-500 mt-2 text-center italic">Ayak derisinde oluşan kızarıklık ve hassasiyet örneği</p>
              </div>

              {/* Nasır Oluşumu */}
              <div className="mb-6 bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-400">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Nasır Oluşumu</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sürekli baskıya maruz kalan bölgelerde deri kalınlaşır ve zamanla kızarıklık görülebilir. Özellikle parmak üstleri ve topuk bölgesi risk altındadır.
                </p>
              </div>

              {/* Ayak Mantarı */}
              <div className="mb-6 bg-white rounded-xl shadow-md p-6 border-l-4 border-green-400">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ayak Mantarı</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Mantar kaynaklı durumlarda sıklıkla:
                </p>
                <ul className="list-none text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Kızarıklık
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Kaşıntı
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Yanma hissi görülebilir
                  </li>
                </ul>
              </div>

              {/* Görsel 3 - Ayak Egzama */}
              <div className="mb-8">
                <img 
                  src="https://customer-assets.emergentagent.com/job_batik-tirnak-rahatla/artifacts/pejptefk_ayak-egzama-deri-hastaligi.webp" 
                  alt="Ayak mantarı ve deri hastalıkları kaynaklı kızarıklık örneği"
                  width="800"
                  height="600"
                  className="w-full max-w-lg mx-auto h-auto rounded-xl shadow-lg"
                  loading="lazy"
                />
                <p className="text-sm text-gray-500 mt-2 text-center italic">Mantar veya deri hassasiyeti kaynaklı kızarıklık örneği</p>
              </div>

              {/* Alerjik Reaksiyonlar */}
              <div className="mb-6 bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-400">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Alerjik Reaksiyonlar</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Ayakkabı materyali veya kullanılan bakım ürünleri:
                </p>
                <ul className="list-none text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Ani kızarma
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Hassasiyet oluşturabilir
                  </li>
                </ul>
              </div>
            </section>

            {/* Ayakta Kızarıklık ve Yanma */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ayakta Kızarıklık ve Yanma Neden Birlikte Olur?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Bazı durumlarda kızarıklık, yanma hissi ile birlikte görülebilir. Bu kombinasyon farklı nedenlere işaret edebilir.
              </p>

              <div className="space-y-6">
                {/* Mantar ve Cilt Hassasiyeti */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Flame className="text-orange-500 mr-2" size={22} />
                    Mantar ve Cilt Hassasiyeti
                  </h3>
                  <p className="text-gray-700">
                    Ayak mantarı veya tahriş olmuş deri, hem kızarıklık hem de yanma hissine neden olabilir. Özellikle parmak araları ve taban bölgesinde bu belirtiler daha sık görülür.
                  </p>
                </div>

                {/* Metabolik ve Dolaşımsal Etkenler */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Footprints className="text-blue-500 mr-2" size={22} />
                    Metabolik ve Dolaşımsal Etkenler
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Bazı kişilerde:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                    <li>Dolaşım hassasiyeti</li>
                    <li>Sinir uçlarının duyarlılığı</li>
                  </ul>
                  <p className="text-gray-700">
                    ayakta yanma hissi oluşturabilir.
                  </p>
                  
                  {/* İnsülin Direnci Görseli */}
                  <div className="my-6">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_batik-tirnak-rahatla/artifacts/b5kaszfo_insulin-direnci.webp" 
                      alt="İnsülin direnci ve diyabet - ayakta yanma hissi ile ilişkisi"
                      width="600"
                      height="400"
                      className="w-full max-w-sm mx-auto h-auto rounded-xl shadow-md"
                      loading="lazy"
                    />
                    <p className="text-sm text-gray-500 mt-2 text-center italic">Metabolik durumlar ayaklarda hassasiyet oluşturabilir</p>
                  </div>

                  <div className="bg-white/60 rounded-lg p-4 border-l-4 border-blue-400">
                    <p className="text-gray-700 text-sm">
                      <strong>Not:</strong> İnsülin direnci gibi bazı metabolik durumlar, dolaylı olarak ayaklarda hassasiyet ve yanma hissiyle ilişkilendirilebilir. Bu tür durumlarda kesin değerlendirme için ilgili uzman görüşü önemlidir.
                    </p>
                  </div>
                </div>

                {/* Beslenme Alışkanlıkları */}
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Beslenme Alışkanlıkları</h3>
                  <p className="text-gray-700 mb-3">
                    Özellikle akşam saatlerinde:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Ağır yemekler</li>
                    <li>Şekerli gıdalar</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    bazı kişilerde dolaylı olarak yanma hissini artırabilir.
                  </p>
                </div>
              </div>
            </section>

            {/* Orta CTA - WhatsApp */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 md:p-8 text-white">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center">
                    <MessageCircle size={32} className="mr-4" />
                    <div>
                      <p className="font-bold text-lg">Ayakta kızarıklık veya yanma şikayetiniz mi var?</p>
                      <p className="text-green-100">WhatsApp üzerinden bize yazarak ön değerlendirme alabilirsiniz.</p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/905456569747?text=Merhaba,%20ayakta%20kızarıklık%20hakkında%20bilgi%20almak%20istiyorum"
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

            {/* Evde Ne Yapılabilir? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-green-600 pl-4">
                Evde Ne Yapılabilir?
              </h2>

              <div className="bg-green-50 rounded-xl p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-semibold text-gray-900">Ayağı temiz ve kuru tutun</span>
                      <p className="text-gray-600 text-sm">Özellikle parmak aralarının kuruluğuna dikkat edin</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-semibold text-gray-900">Rahat ayakkabı tercih edin</span>
                      <p className="text-gray-600 text-sm">Nefes alabilen, doğru numara ayakkabılar seçin</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-semibold text-gray-900">Tahrişi artıran faktörlerden kaçının</span>
                      <p className="text-gray-600 text-sm">Sentetik çoraplar ve sıkı ayakkabılardan uzak durun</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-semibold text-gray-900">Pamuklu çoraplar tercih edin</span>
                      <p className="text-gray-600 text-sm">Nem tutmayan, nefes alan kumaşlar kullanın</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Yapılmaması Gerekenler */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">
                Yapılmaması Gerekenler
              </h2>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <XCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-semibold text-gray-900">Kızarık bölgeyi zorlamak</span>
                      <p className="text-gray-600 text-sm">Kaşımak veya ovuşturmak durumu kötüleştirebilir</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <XCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-semibold text-gray-900">Sert müdahalelerde bulunmak</span>
                      <p className="text-gray-600 text-sm">Evde kesici aletlerle müdahale etmeyin</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <XCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="font-semibold text-gray-900">Bilinçsiz ürün kullanmak</span>
                      <p className="text-gray-600 text-sm">Tavsiye edilmemiş krem veya ilaçlar kullanmayın</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 bg-amber-50 border border-amber-300 p-4 rounded-lg">
                <p className="text-amber-800 font-medium flex items-center">
                  <AlertTriangle className="mr-2" size={18} />
                  Bu tür müdahaleler durumu daha da kötüleştirebilir ve iyileşme sürecini uzatabilir.
                </p>
              </div>
            </section>

            {/* Ne Zaman Uzmana Başvurulmalı? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ne Zaman Uzmana Başvurulmalı?
              </h2>

              {/* Görsel 4 - Sağlıklı Ayaklar */}
              <div className="mb-8">
                <img 
                  src="https://customer-assets.emergentagent.com/job_batik-tirnak-rahatla/artifacts/tiubwqwo_saglikli-ayaklar.webp" 
                  alt="Sağlıklı ayaklar - profesyonel ayak bakımının önemi"
                  width="800"
                  height="600"
                  className="w-full max-w-lg mx-auto h-auto rounded-xl shadow-lg"
                  loading="lazy"
                />
                <p className="text-sm text-gray-500 mt-2 text-center italic">Profesyonel bakım ile sağlıklı ayaklar</p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <div className="space-y-3">
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <ShieldAlert className="text-blue-500 mr-3 flex-shrink-0" size={24} />
                    <span className="text-gray-700 font-medium">Kızarıklık birkaç gün içinde geçmiyorsa</span>
                  </div>
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <ShieldAlert className="text-blue-500 mr-3 flex-shrink-0" size={24} />
                    <span className="text-gray-700 font-medium">Ağrı giderek artıyorsa</span>
                  </div>
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <ShieldAlert className="text-blue-500 mr-3 flex-shrink-0" size={24} />
                    <span className="text-gray-700 font-medium">Şişlik veya hassasiyet varsa</span>
                  </div>
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <ShieldAlert className="text-blue-500 mr-3 flex-shrink-0" size={24} />
                    <span className="text-gray-700 font-medium">Tekrarlayan bir durum haline geldiyse</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mt-6 leading-relaxed">
                Bu durumlarda profesyonel podolojik değerlendirme, doğru yaklaşımın belirlenmesi ve sürecin kontrol altına alınması açısından önemlidir.
              </p>
            </section>

            {/* SSS */}
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
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ayakta kızarıklık, basit tahrişlerden farklı nedenlere kadar değişen durumlarla ortaya çıkabilir. Erken dönemde doğru yaklaşım, sürecin daha kontrollü ilerlemesine yardımcı olur. Özellikle ayakta kızarıklık ve yanma birlikte görülüyorsa, durumun değerlendirilmesi faydalı olabilir.
                </p>
              </div>
            </section>

            {/* Son CTA */}
            <section className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl p-8 md:p-10 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Profesyonel Podolojik Destek Alın
              </h2>
              <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
                Ayakta oluşan kızarıklık ve hassasiyet ilerlemeden, profesyonel podolojik bakım desteği almak için bizimle iletişime geçebilirsiniz. İsterseniz WhatsApp üzerinden fotoğraf göndererek size özel ön değerlendirme talep edebilirsiniz.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/905456569747?text=Merhaba,%20ayakta%20kızarıklık%20hakkında%20ön%20değerlendirme%20almak%20istiyorum"
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

            {/* İlgili İçerikler */}
            <section className="mt-12">
              <h3 className="text-lg font-bold text-gray-900 mb-4">İlgili İçerikler</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/hizmet/nasir-tedavisi" className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200 group">
                  <p className="font-semibold text-blue-600 group-hover:text-blue-800">Nasır Bakımı</p>
                  <p className="text-sm text-gray-600">Profesyonel nasır bakımı hizmeti</p>
                </Link>
                <Link to="/hizmet/tirnak-mantari" className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200 group">
                  <p className="font-semibold text-blue-600 group-hover:text-blue-800">Tırnak Mantarı Bakımı</p>
                  <p className="text-sm text-gray-600">Mantar kaynaklı sorunlar için destek</p>
                </Link>
                <Link to="/blog/batik-tirnak-evde-nasil-rahatlatilir" className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200 group">
                  <p className="font-semibold text-blue-600 group-hover:text-blue-800">Batık Tırnak Bakımı</p>
                  <p className="text-sm text-gray-600">Evde güvenli bakım yöntemleri</p>
                </Link>
                <Link to="/blog/ayak-agrisi-neden-olur" className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200 group">
                  <p className="font-semibold text-blue-600 group-hover:text-blue-800">Ayak Ağrısı Nedenleri</p>
                  <p className="text-sm text-gray-600">Ayak ağrısının olası sebepleri</p>
                </Link>
              </div>
            </section>

          </div>
        </div>
      </article>
    </>
  );
};

export default AyaktaKizariklikBlog;
