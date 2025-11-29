import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, Phone, AlertCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';

const AyakKokusuBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Ayak Kokusu ve Mantar İlişkisi: Neden Olur, Nasıl Önlenir? | Medipodo</title>
        <meta name="description" content="Ayak kokusu ve mantar arasındaki bilimsel ilişkiyi keşfedin. Keratolitik etki ve antifungal koruma ile PediZone Temizleme Köpüğü ile kalıcı çözüme ulaşın." />
        <meta name="keywords" content="ayak kokusu, ayak mantarı, tinea pedis, keratolitik etki, antifungal koruma, PediZone, temizleme köpüğü, bromodoz, ayak hijyeni" />
        <meta property="og:title" content="Ayak Kokusu ve Mantar İlişkisi: Bilimsel Çözümler" />
        <meta property="og:description" content="Ayak kokusunun bilimsel nedenleri, mantar ilişkisi ve podolog onaylı kalıcı çözüm yöntemleri." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://medipodo.com/blog/ayak-kokusu-ve-mantar-iliskisi" />
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
              Ayak Kokusu ve Mantar İlişkisi: Neden Olur, Nasıl Önlenir?
            </h1>
            
            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Medipodo Ekibi</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>15 dakika okuma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Giriş */}
            <section className="mb-16">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ayak kokusu, sosyal yaşamı olumsuz etkileyen ve genellikle basit bir hijyen sorunundan öteye giden karmaşık bir durumdur. Çoğu zaman utanç verici bir durum olarak algılansa da, bilimsel olarak incelendiğinde, bu durumun ardında yatan temel nedenler <strong>bakteriyel üreme</strong> ve sıklıkla bu üremeyi tetikleyen <strong>mantar enfeksiyonları</strong>dır.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
                <p className="text-gray-800 font-medium">
                  💡 Ayak kokusu ve mantar arasındaki döngüsel ilişkiyi anlamak, kalıcı ve etkili bir çözüm bulmanın ilk adımıdır.
                </p>
              </div>

              <img 
                src="/blog-images/ayak-kokusu/2.jpg" 
                alt="Ayak kokusu ve mantar ilişkisi"
                className="w-full h-auto rounded-xl shadow-lg mb-6"
                loading="lazy"
              />

              <p className="text-lg text-gray-700 leading-relaxed">
                Bu kapsamlı rehberde, ayak kokusunun bilimsel kökenlerini, mantar enfeksiyonlarıyla olan derin bağını ve bu sorunu kökten çözmek için podologların da onayladığı bilimsel yaklaşımları, özellikle de <strong>keratolitik etki</strong> ve <strong>antifungal koruma</strong> sağlayan ürünlerin önemini inceleyeceğiz.
              </p>
            </section>

            {/* Ayak Kokusunun Bilimsel Sırrı */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">
                Ayak Kokusunun Bilimsel Sırrı: Bakteriler ve Mantarlar
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Ayak kokusu (bromodoz), genellikle aşırı terleme (hiperhidroz) ile ilişkilendirilir, ancak <strong>terin kendisi kokusuzdur</strong>. Koku, terin cilt yüzeyindeki bakteriler tarafından parçalanması sonucu ortaya çıkar.
              </p>

              {/* Ter ve Bakteri */}
              <div className="mb-12 bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Ayak Kokusunun Temel Kaynağı: Ter ve Bakteri Üremesi
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Ayaklarımız, vücudumuzdaki en yoğun ter bezlerinden bazılarına sahiptir. Bu bezler, özellikle kapalı ayakkabılar içinde, sıcak ve nemli bir ortam yaratır. Bu ortam, <em>Micrococcus sedentarius</em> ve <em>Corynebacterium</em> gibi bakteriler için ideal bir üreme alanıdır.
                </p>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">🔬 Kimyasal Süreç:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Bu bakteriler, terde bulunan amino asitleri ve ölü deri hücrelerini parçalayarak, keskin ve rahatsız edici kokunun ana kaynağı olan <strong>izovalerik asit</strong> gibi uçucu organik bileşikleri üretirler.
                  </p>
                </div>

                <img 
                  src="/blog-images/ayak-kokusu/3.jpg" 
                  alt="Ayak ter bezleri ve bakteri üremesi"
                  className="w-full h-auto rounded-xl shadow-md"
                  loading="lazy"
                />
              </div>

              {/* Mantar İlişkisi */}
              <div className="mb-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlertCircle className="mr-3 text-orange-600" size={32} />
                  Mantar Enfeksiyonları (Tinea Pedis) ve Koku Arasındaki Doğrudan Bağlantı
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Ayak mantarı, tıbbi adıyla <strong>Tinea Pedis</strong>, genellikle <em>Trichophyton</em> türü dermatofit mantarların neden olduğu yaygın bir enfeksiyondur. Mantar enfeksiyonları, ayak kokusunu iki temel yolla şiddetlendirir:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-3">1️⃣ Nem Artışı</h4>
                    <p className="text-gray-700 text-sm">
                      Mantarlar, nemli ve sıcak ortamları sever. Enfeksiyon, ayak derisinin doğal bariyerini bozarak ve iltihaplanmaya neden olarak nem seviyesini daha da artırır. Bu aşırı nem, kokuya neden olan bakterilerin çoğalması için mükemmel bir zemin hazırlar.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-3">2️⃣ Ölü Deri Birikimi (Keratin)</h4>
                    <p className="text-gray-700 text-sm">
                      Mantarlar, cildin üst tabakasındaki protein olan <strong>keratin</strong> ile beslenirler. Enfeksiyon, cildin pul pul dökülmesini ve ölü deri birikimini hızlandırır. Bu biriken ölü deri, hem mantarlar hem de koku üreten bakteriler için zengin bir besin kaynağı oluşturur.
                    </p>
                  </div>
                </div>

                <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <p className="text-gray-800 font-medium">
                    ⚠️ <strong>Önemli:</strong> Ayak mantarı doğrudan kokuya neden olmasa bile, kokuya yol açan bakteriyel üremeyi ve besin kaynağını artırarak kokunun kalıcı ve yoğun olmasına zemin hazırlar. Bu kısır döngüyü kırmak için hem bakteriyel hem de mantar kaynaklı sorunlara aynı anda odaklanmak gerekir.
                  </p>
                </div>
              </div>

              <img 
                src="/blog-images/ayak-kokusu/4.jpg" 
                alt="Ayak mantarı ve koku döngüsü"
                className="w-full h-auto rounded-xl shadow-lg"
                loading="lazy"
              />
            </section>

            {/* Devam edecek - Part 2'de tamamlanacak */}
          </div>
        </div>
      </article>
    </>
  );
};

export default AyakKokusuBlog;
