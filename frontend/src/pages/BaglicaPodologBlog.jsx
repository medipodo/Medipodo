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
        <meta property="og:title" content="Bağlıca Podolog Hizmetleri - Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:description" content="Profesyonel podolog hizmetleri ile ayak sağlığınız güvende. Tırnak batması, mantar, nasır ve çatlak topuk tedavileri." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://medipodo.com/blog/baglica-podolog-hizmetleri" />
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
                <p className="text-gray-700 leading-relaxed">
                  <strong>Podolog</strong>; bireylerin ayak sağlığının korunması ve ilgili tabibin teşhis–tedavi yönlendirmesine bağlı olarak ayak bakımı yapan sağlık personelidir.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  'Tırnak batması tedavisi',
                  'Tırnak mantarı bakımı',
                  'Nasır ve siğil küretajı',
                  'Çatlak topuk bakımı',
                  'Diyabetik ayak eğitimi',
                  'Ayak analizi ve koruyucu sağlık önerileri'
                ].map((item, index) => (
                  <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <span className="text-blue-600 mr-3 text-xl">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
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
                  Tırnak batması çoğunlukla yanlış kesim, dar ayakkabı kullanımı veya yapısal tırnak bozuklukları nedeniyle oluşur.
                </p>

                <img 
                  src="/blog-images/5.jpg" 
                  alt="Tırnak Batması Tedavisi"
                  className="w-full h-auto rounded-xl shadow-md mb-6"
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
                  Tırnak mantarı hem estetik hem de konfor açısından oldukça rahatsız edicidir.
                </p>

                <img 
                  src="/blog-images/6.jpg" 
                  alt="Tırnak Mantarı Tedavisi"
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
                  Ankara'nın kuru havası topuk çatlaklarının artmasına neden olabilir.
                </p>

                <img 
                  src="/blog-images/4.jpg" 
                  alt="Çatlak Topuk Bakımı"
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
                  Diyabet hastalarının ayakları yara ve enfeksiyona karşı daha hassastır.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
                  <p className="text-gray-800 font-medium">
                    ⚠️ Diyabet hastaları için profesyonel podolojik bakım hayati önem taşır.
                  </p>
                </div>

                <img 
                  src="/blog-images/18.jpg" 
                  alt="Diyabetik Ayak Bakımı"
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

                <img 
                  src="/blog-images/15.jpg" 
                  alt="Evde Medikal Ayak Bakımı Hizmeti"
                  className="w-full h-auto rounded-xl shadow-md"
                  loading="lazy"
                />
              </div>

              {/* Medikal Akrilik Tırnak */}
              <div className="mb-12 bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-4">7</span>
                  Medikal Akrilik Tırnak
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Travma, mantar, darbe veya tırnak kaybı nedeniyle bozulmuş tırnak yapıları medikal akrilik ile yeniden şekillendirilebilir.
                </p>

                <img 
                  src="/blog-images/9.jpg" 
                  alt="Medikal Akrilik Tırnak"
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
                  Kişiye özel tabanlıklar, ayağın bası noktalarını ve yük dağılımını dengeler.
                </p>

                <img 
                  src="/blog-images/13.jpg" 
                  alt="Kişiye Özel Ortopedik Tabanlık"
                  className="w-full h-auto rounded-xl shadow-md mb-8"
                  loading="lazy"
                />

                <img 
                  src="/blog-images/19.jpg" 
                  alt="Ayak Analizi"
                  className="w-full h-auto rounded-xl shadow-md"
                  loading="lazy"
                />
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
