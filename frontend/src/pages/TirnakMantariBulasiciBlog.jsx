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

  // Genişletilmiş FAQ içerikleri (100-160 kelime)
  const faqItems = [
    {
      question: "Tırnak mantarı havludan bulaşır mı?",
      answer: "Evet, tırnak mantarı nemli havlulardan bulaşabilir. Dermatofit mantarlar nemli tekstil yüzeylerinde uzun süre canlı kalabilir ve bu yüzeylerle temas eden sağlıklı tırnaklara geçebilir. Özellikle banyo sonrası ıslak bırakılan havlular, mantar sporları için ideal üreme ortamı oluşturur. Aynı şekilde çorap, terlik ve ayakkabı gibi kişisel eşyaların paylaşılması da bulaş riskini ciddi oranda artırır. Ev içinde her bireyin kendi havlu ve terliğini kullanması, bulaşmayı önlemenin en etkili yollarından biridir. Havluların düzenli olarak 60 derece ve üzerinde yıkanması, mantar sporlarının öldürülmesine yardımcı olur."
    },
    {
      question: "Aynı evde yaşayan herkese geçer mi?",
      answer: "Tırnak mantarı aynı evde yaşayan herkese kesin olarak bulaşmaz, ancak hijyen kurallarına dikkat edilmezse risk önemli ölçüde artar. Bulaşma genellikle ortak banyo kullanımı, aynı tırnak makasının paylaşılması ve ortak terlik giyme gibi durumlarla gerçekleşir. Bağışıklık sistemi güçlü olan bireylerde mantar sporlarıyla temas olsa bile enfeksiyon gelişmeyebilir. Ancak diyabet hastaları, yaşlılar ve bağışıklık sistemi zayıf olan kişilerde bulaş riski çok daha yüksektir. Evde mantar enfeksiyonu olan bir birey varsa, kişisel eşyaların kesinlikle ayrı tutulması ve banyo zemininin düzenli dezenfekte edilmesi gerekir."
    },
    {
      question: "Tırnak mantarı el tırnaklarına geçer mi?",
      answer: "Evet, ayak tırnaklarındaki mantar enfeksiyonu el tırnaklarına da bulaşabilir. Bu durum genellikle enfekte ayak tırnaklarına elle temas sonrasında gerçekleşir. Özellikle ayak bakımı sırasında eldiven kullanılmaması veya işlem sonrası ellerin yeterince yıkanmaması bulaş riskini artırır. El tırnaklarında mantar enfeksiyonu ayak tırnaklarına göre daha nadir görülür çünkü eller genellikle daha kuru kalır ve daha sık yıkanır. Ancak enfekte tırnağa düzenli temas eden kişilerde el mantarı gelişme olasılığı yükselir. Ayak bakımı sonrası ellerin sabunlu su ile en az 20 saniye yıkanması, bu riski minimize eder."
    },
    {
      question: "Tırnak mantarı tedavi edilmezse ne olur?",
      answer: "Tedavi edilmeyen tırnak mantarı zamanla ilerler ve ciddi komplikasyonlara yol açabilir. İlk aşamada tırnak kalınlaşır, sararır ve kırılgan hale gelir. İlerleyen dönemde tırnak yatağından ayrılmaya başlayabilir ve altında birikinti oluşur. Bu aşamada ağrı ve hassasiyet belirginleşir, ayakkabı giymek zorlaşır. Enfeksiyon diğer tırnaklara ve hatta ayak derisine yayılabilir. Diyabet hastalarında tedavisiz mantar enfeksiyonu, ciddi doku hasarına ve enfeksiyonların derinleşmesine neden olabilir. İleri vakalarda tırnağın kalıcı olarak kaybedilmesi veya cerrahi müdahale gerekebilir. Erken dönemde başlanan tedavi bu risklerin tamamını ortadan kaldırır."
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
        <title>Tırnak Mantarı Bulaşıcı mı? Evde Aile Bireylerine Geçer mi? | Medipodo</title>
        <meta name="description" content="Tırnak mantarı bulaşıcı mı? Evde aile bireylerine geçer mi? Bulaşma yolları, korunma yöntemleri ve ne zaman uzman desteği alınmalı detaylı anlatım." />
        <meta name="keywords" content="tırnak mantarı bulaşıcı mı, tırnak mantarı bulaşır mı, mantar bulaşması, ev içi bulaşma, tırnak mantarı korunma" />
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

              <img 
                src="/blog-images/tirnak-mantari-bulasici/tirnak-mantari-bulasir-mi.webp" 
                alt="Tırnak mantarı bulaşıcı mı - kalınlaşmış ve renk değiştirmiş tırnak örneği" 
                className="w-full rounded-xl shadow-lg mb-8"
              />
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

              <img 
                src="/blog-images/tirnak-mantari-bulasici/tirnakta-mantar.webp" 
                alt="Tırnak mantarı belirtileri - sararmış ve kalınlaşmış tırnak" 
                className="w-full rounded-xl shadow-lg mb-6"
              />
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
                Bağışıklık sistemi zayıf olan bireylerde, diyabet hastalarında ve yaşlılarda bulaş daha kolay gerçekleşir. <Link to="/hizmetler/diyabetik-ayak-bakimi" className="text-blue-600 hover:underline font-medium">Diyabetik ayak bakımı</Link> gerektiren hastalarda mantar enfeksiyonu daha ciddi sonuçlara yol açabileceği için erken müdahale kritik öneme sahiptir.
              </p>

              <img 
                src="/blog-images/tirnak-mantari-bulasici/ileri-derece-tirnak-mantari.webp" 
                alt="İleri derece tırnak mantarı - tedavi edilmemiş vaka" 
                className="w-full rounded-xl shadow-lg mb-6"
              />
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
                Ancak en etkili önlem, mevcut enfeksiyonu kontrol altına almaktır. <Link to="/hizmetler/medikal-ayak-bakimi" className="text-blue-600 hover:underline font-medium">Medikal ayak bakımı</Link> ile mantar enfeksiyonunun kaynağı tedavi edilmeden ev içi önlemler tam koruma sağlamaz.
              </p>
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
                <a href="tel:+905336459778">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                    Hemen Ara: 0533 645 97 78
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
