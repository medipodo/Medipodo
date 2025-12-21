import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet';

const BaglicaPodologBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Bağlıca Podolog Hizmetleri - Medipodo Ayak Sağlığı Merkezi | Ankara</title>
        <meta name="description" content="Bağlıca ve çevresinde profesyonel podolog hizmeti. Tırnak batması, tırnak mantarı, nasır temizliği, çatlak topuk, diyabetik ayak bakımı ve evde medikal ayak bakımı. Uzman kadro ve modern cihazlarla hizmetinizdeyiz." />
        <meta name="keywords" content="bağlıca podolog, ankara podolog, tırnak batması tedavisi, tırnak mantarı bakımı, nasır temizliği, çatlak topuk bakımı, diyabetik ayak bakımı, evde ayak bakımı, medipodo" />
        <link rel="canonical" href="https://medipodo.com/blog/baglica-podolog-hizmetleri" />
        
        {/* Open Graph Meta Tags - WhatsApp, Facebook, LinkedIn önizlemesi için */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Bağlıca Podolog Hizmetleri - Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:description" content="Profesyonel podolog hizmetleri ile ayak sağlığınız güvende. Tırnak batması, mantar, nasır ve çatlak topuk tedavileri." />
        <meta property="og:image" content="https://medipodo.com/blog-images/14.jpg" />
        <meta property="og:url" content="https://medipodo.com/blog/baglica-podolog-hizmetleri" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bağlıca Podolog Hizmetleri - Medipodo" />
        <meta name="twitter:description" content="Profesyonel podolog hizmetleri ile ayak sağlığınız güvende." />
        <meta name="twitter:image" content="https://medipodo.com/blog-images/14.jpg" />
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
              Bağlıca Podolog Hizmetleri – Medipodo ile Profesyonel Ayak Sağlığı Bakımı
            </h1>
            
            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Medipodo Ekibi</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>10 dakika okuma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Giriş */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Bağlıca ve çevresinde profesyonel podolog arıyorsanız <strong>Medipodo Ayak Sağlığı Merkezi</strong>; tırnak batması, tırnak mantarı, nasır temizliği, çatlak topuk, diyabetik ayak bakımı ve evde medikal ayak bakımı hizmetleriyle Ankara'da güvenilir ve uzman bir merkezdir.
              </p>
            </div>

            {/* Görsel 14 */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/blog-images/14.jpg" 
                alt="Medipodo Bağlıca Podolog Kliniği"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            {/* Podolog Nedir */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Podolog Nedir? Podolog Ne İş Yapar?
              </h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Podolog</strong>; bireylerin ayak sağlığının korunması ve ilgili tabibin teşhis–tedavi yönlendirmesine bağlı olarak ayak bakımı yapan sağlık personelidir. Bir podolog şu işlemleri gerçekleştirir:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="text-gray-700">• Tırnak batması</li>
                  <li className="text-gray-700">• Tırnak mantarı</li>
                  <li className="text-gray-700">• Nasır ve siğil küretajı</li>
                  <li className="text-gray-700">• Çatlak topuk bakımı</li>
                  <li className="text-gray-700">• Diyabetik ayak eğitimi</li>
                  <li className="text-gray-700">• Ayak analizi ve koruyucu sağlık önerileri</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Bağlıca podolog</strong> arayanlar için Medipodo; deneyimli kadrosu, steril çalışma sistemi ve çözüm odaklı yaklaşımıyla öne çıkar.
              </p>
            </section>

            {/* Hizmetlerimiz */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Medipodo Bağlıca Ayak Bakımı Hizmetleri
              </h2>

              {/* Tırnak Batması */}
              <div className="mb-12 bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">1</span>
                  Tırnak Batması Tedavisi
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Tırnak batması çoğunlukla yanlış kesim, dar ayakkabı kullanımı veya yapısal tırnak bozuklukları nedeniyle oluşur. <strong>Medipodo'da tırnak batması tedavisi:</strong>
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Profesyonel cihazlarla nazikçe temizlik</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Batmış tırnak kenarının rahatlatılması</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Gerektiğinde tırnak düzeltme sistemi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">B/S Bant – 3TO Tel (Ortoniksi) uygulamaları</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Enfeksiyon risk değerlendirmesi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Tekrar batmayı önleyici özel bakım önerileri</span>
                  </li>
                </ul>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl mb-6">
                  <p className="text-gray-800 font-medium">
                    💡 Tırnak batması tedavisi için en etkili yöntem <strong>ortoniksi</strong> olup cerrahi gerektirmez.
                  </p>
                </div>

                <img 
                  src="/blog-images/5.jpg" 
                  alt="Tırnak Batması Tedavisi - Ortoniksi Uygulaması"
                  className="w-full h-auto rounded-xl shadow-md"
                  loading="lazy"
                />
              </div>

              {/* Tırnak Mantarı */}
              <div className="mb-12 bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">2</span>
                  Tırnak Mantarı Bakımı
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Tırnak mantarı hem estetik hem de konfor açısından oldukça rahatsız edicidir. İlerledikçe ağrı ve enfeksiyon riskini artırabilir. <strong>Medipodo'da tırnak mantarı bakımı:</strong>
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Mantar türünün değerlendirilmesi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Kalınlaşmış plakların ve ölü dokunun temizlenmesi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Kişiye özel medikal ayak bakımı</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Düzenli kontrol planlaması</span>
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Ankara'da tırnak mantarı bakımında modern yöntemler ve etkili sonuçlar ile öne çıkıyoruz.
                </p>

                <img 
                  src="/blog-images/6.jpg" 
                  alt="Tırnak Mantarı Tedavisi - Profesyonel Bakım"
                  className="w-full h-auto rounded-xl shadow-md"
                  loading="lazy"
                />
              </div>

              {/* Nasır Temizliği */}
              <div className="mb-12 bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">3</span>
                  Nasır Temizliği ve Koruyucu Bakım
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Nasır</strong>; uzun süreli basınç, sürtünme veya yürüyüş bozuklukları nedeniyle oluşan koruyucu sertleşmiş deri tabakasıdır.
                </p>

                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Nasır Çeşitleri:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-2">▪</span>
                      <span className="text-gray-700">Sert Nasır</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-2">▪</span>
                      <span className="text-gray-700">Yumuşak Nasır</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-2">▪</span>
                      <span className="text-gray-700">Tohum Nasır</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-2">▪</span>
                      <span className="text-gray-700">Pipetleşmiş Nasır</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-2">▪</span>
                      <span className="text-gray-700">Yaygın Kallus</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-2">▪</span>
                      <span className="text-gray-700">İntraklav (Tırnak Altı Nasır)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-2">▪</span>
                      <span className="text-gray-700">Plantar Verruka (Siğil)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Başlıca Nedenleri:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Yanlış ayakkabı kullanımı</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Düz tabanlık</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Uzun süre ayakta durma</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Yürüme bozuklukları</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span className="text-gray-700">Yapısal deformiteler</span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Medipodo'da nasır tedavisi:</strong>
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Acıtmadan profesyonel cihazlarla temizlik</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Kök bölgesine mümkün olan müdahale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Tekrar oluşumu azaltan bası azaltıcı öneriler</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Kişiye özel bakım ürünleri ve tabanlık tavsiyeleri</span>
                  </li>
                </ul>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <img 
                    src="/blog-images/16.jpg" 
                    alt="Nasır Temizliği Öncesi"
                    className="w-full h-auto rounded-xl shadow-md"
                    loading="lazy"
                  />
                  <img 
                    src="/blog-images/3.jpg" 
                    alt="Nasır Temizliği Sonrası"
                    className="w-full h-auto rounded-xl shadow-md"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Çatlak Topuk */}
              <div className="mb-12 bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">4</span>
                  Çatlak Topuk ve Kalınlaşmış Deri Bakımı
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Ankara'nın kuru havası topuk çatlaklarının artmasına neden olabilir. Bu çatlaklar zamanla enfeksiyon riski taşıdığı için profesyonel bakım gerektirir. <strong>Medipodo'da uygulanan bakım:</strong>
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Kalınlaşmış derinin kontrollü şekilde alınması</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Cilt bariyerinin yeniden güçlendirilmesi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Kişiye özel yoğun nemlendirici önerileri</span>
                  </li>
                </ul>

                <img 
                  src="/blog-images/4.jpg" 
                  alt="Çatlak Topuk Bakımı - Profesyonel Tedavi"
                  className="w-full h-auto rounded-xl shadow-md"
                  loading="lazy"
                />
              </div>

              {/* Diyabetik Ayak */}
              <div className="mb-12 bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">5</span>
                  Diyabetik Ayak Bakımı
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Diyabet hastalarının ayakları yara ve enfeksiyona karşı daha hassastır. Hatalı tırnak kesimleri riskli ülserlere yol açabilir. <strong>Medipodo'da diyabetik ayak bakımında yapılanlar:</strong>
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Duyu testleri</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Bası alanı analizleri</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Risk noktalarının belirlenmesi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Düzenli kontrol planlaması</span>
                  </li>
                </ul>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
                  <p className="text-gray-800 font-medium">
                    ⚠️ Diyabet hastaları için profesyonel podolojik bakım hayati önem taşır.
                  </p>
                </div>

                <img 
                  src="/blog-images/18.jpg" 
                  alt="Diyabetik Ayak Bakımı - Özel Tedavi"
                  className="w-full h-auto rounded-xl shadow-md"
                  loading="lazy"
                />
              </div>

              {/* Evde Medikal Ayak Bakımı */}
              <div className="mb-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">6</span>
                  Evde Medikal Ayak Bakımı – Ankara Geneli
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Bağlıca, Çayyolu, Yaşamkent, Ümitköy, Alacaatlı, Etimesgut, Sincan, İncek, Gölbaşı, Çankaya, Dikmen</strong> bölgelerinde evde ayak bakımı hizmeti sunuyoruz.
                </p>

                <div className="bg-white p-6 rounded-xl mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Evde Bakım Hizmeti:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-3">✓</span>
                      <span className="text-gray-700">1 Podolog</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-3">✓</span>
                      <span className="text-gray-700">1 Yardımcı personel</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-3">✓</span>
                      <span className="text-gray-700 font-medium">Tamamen steril şekilde uygulama</span>
                    </li>
                  </ul>
                </div>

                <img 
                  src="/blog-images/15.jpg" 
                  alt="Evde Medikal Ayak Bakımı Hizmeti - Ankara"
                  className="w-full h-auto rounded-xl shadow-md"
                  loading="lazy"
                />
              </div>

              {/* Medikal Akrilik Tırnak */}
              <div className="mb-12 bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">7</span>
                  Medikal Akrilik Tırnak (Medikal Rekonstrüksiyon)
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Travma, mantar, darbe veya tırnak kaybı nedeniyle bozulmuş tırnak yapıları medikal akrilik ile yeniden şekillendirilebilir. Bu işlem:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-700 font-medium">Estetik amaçlı değil</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-700 font-medium">Tamamen medikal</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-700 font-medium">Doğal görünümlü</span>
                  </div>
                  <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                    <span className="text-blue-600 mr-3">✓</span>
                    <span className="text-gray-700 font-medium">Dayanıklı rekonstrüksiyon</span>
                  </div>
                </div>

                <img 
                  src="/blog-images/9.jpg" 
                  alt="Medikal Akrilik Tırnak Rekonstrüksiyonu"
                  className="w-full h-auto rounded-xl shadow-md"
                  loading="lazy"
                />
              </div>

              {/* Ortopedik Tabanlık */}
              <div className="mb-12 bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Kişiye Özel Ortopedik Tabanlık
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Kişiye özel tabanlıklar, ayağın bası noktalarını ve yük dağılımını dengeler, adım düzenini optimize eder, böylece uzun vadede sadece ayak sağlığını değil, diz, kalça ve bel sağlığını da koruyarak günlük yaşam konforunu artırır ve olası ağrı veya deformitelerin önüne geçer.
                </p>

                <img 
                  src="/blog-images/13.jpg" 
                  alt="Kişiye Özel Ortopedik Tabanlık"
                  className="w-full h-auto rounded-xl shadow-md mb-8"
                  loading="lazy"
                />

                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Medipodo'da Tabanlık Analizi Nasıl Yapılır?
                </h4>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Dinamik yürüyüş analizi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Statik basınç ölçümü</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Ayak arkı ve deformite kontrolü</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Yaşam tarzı ve meslek analizi</span>
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Tüm veriler işlenerek kişiye tamamen özel tabanlık tasarlanır.
                </p>

                <img 
                  src="/blog-images/19.jpg" 
                  alt="Ayak Analizi ve Tabanlık Ölçümü"
                  className="w-full h-auto rounded-xl shadow-md"
                  loading="lazy"
                />
              </div>
            </section>

            {/* Podolog Seçerken Dikkat Edilecekler */}
            <section className="mb-16 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Podolog Ararken Nelere Dikkat Etmelisiniz?
              </h2>

              <div className="mb-8">
                <img 
                  src="/blog-images/20.jpg" 
                  alt="Profesyonel Podolog Seçimi"
                  className="w-full h-auto rounded-xl shadow-md"
                  loading="lazy"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  'Uzman podolog tarafından işlem yapılması',
                  'Yüksek düzey sterilizasyon',
                  'Tek kullanımlık sarf ürünler',
                  'Yönetmeliklere uygun ortam',
                  'Tecrübeli ekip',
                  'Şeffaf fiyatlandırma',
                  'Danışana özel bakım planı'
                ].map((item, index) => (
                  <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <span className="text-green-600 mr-3 text-xl font-bold">✓</span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-600 text-white p-6 rounded-xl text-center">
                <p className="text-lg font-semibold">
                  Medipodo olarak tüm bu maddeleri eksiksiz karşılıyoruz.
                </p>
              </div>
            </section>

            {/* Neden Medipodo */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Neden Bağlıca'da Medipodo?
              </h2>

              <div className="mb-8">
                <img 
                  src="/blog-images/21.png" 
                  alt="Medipodo Ayak Sağlığı Merkezi"
                  className="w-full h-auto rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: '👨‍⚕️', text: 'Eğitimli ve deneyimli podolog kadrosu' },
                  { icon: '🏥', text: 'Modern cihazlar ve steril ortam' },
                  { icon: '🏠', text: 'Evde hizmet seçeneği' },
                  { icon: '📅', text: 'Aynı gün randevu' },
                  { icon: '💎', text: 'Nazik, profesyonel ve çözüm odaklı yaklaşım' },
                  { icon: '⭐', text: 'Yüksek memnuniyet' }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <p className="text-gray-700 font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Randevu & İletişim
              </h2>
              <h3 className="text-xl mb-6">
                Bağlıca Medipodo Ayak Sağlığı Merkezi
              </h3>
              
              <p className="text-lg mb-8 text-blue-100">
                Tırnak batması, tırnak mantarı, nasır temizliği için bize ulaşabilirsiniz.
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

export default BaglicaPodologBlog;
 
