import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, Phone, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';

const BatikTirnakBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Tırnak Batması Neden Olur? En Sık Yapılan Hatalar ve Doğru Çözümler | Medipodo</title>
        <meta name="description" content="Tırnak batmasının nedenleri, evde yapılan hatalar, podolojik yöntemler ve uygun çözümler. Medipodo ile tırnak batması sorununu çözün." />
        <meta name="keywords" content="tırnak batması, batık tırnak, podoloji, ayak sağlığı, B/S bant, 3TO tel, Medipodo, tırnak tedavisi" />
        <link rel="canonical" href="https://medipodo.com/blog/tirnakbatmasi" />
        
        {/* Open Graph Meta Tags - WhatsApp, Facebook, LinkedIn önizlemesi için */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Tırnak Batması Neden Olur? En Sık Yapılan Hatalar ve Doğru Çözümler" />
        <meta property="og:description" content="Tırnak batmasının nedenleri, evde yapılan hatalar ve podolojik çözümler. Medipodo ile tırnak batması sorununu çözün." />
        <meta property="og:image" content="https://medipodo.com/images/blog/batik-tirnak.jpg" />
        <meta property="og:url" content="https://medipodo.com/blog/tirnakbatmasi" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tırnak Batması: Nedenleri ve Profesyonel Çözümler" />
        <meta name="twitter:description" content="Tırnak batmasında yapılan hatalar ve ağrısız podolojik yöntemler." />
        <meta name="twitter:image" content="https://medipodo.com/images/blog/batik-tirnak.jpg" />
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
              Tırnak Batması Neden Olur? En Sık Yapılan Hatalar ve Doğru Çözümler
            </h1>
            
            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Medipodo Podolog Ekibi</span>
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
            <section className="mb-12">
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-8">
                <div className="flex items-start">
                  <AlertCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-red-900 text-lg mb-2">Önemli Uyarı</h3>
                    <p className="text-red-800">
                      Tırnak batması, erken müdahale edilmezse enfeksiyon ve ciddi doku hasarına yol açabilir. Eğer kızarıklık, şişlik veya iltihap görüyorsanız, hemen bir podologa başvurun.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Tırnak batması, özellikle ayak baş parmağında görülen, günlük yaşamı ciddi derecede etkileyen sık rastlanan bir ayak problemidir. Yanlış tırnak kesimi, dar ayakkabılar, travmalar ve mantar enfeksiyonları tırnak batmasını tetikleyen başlıca nedenlerdir. Ancak çoğu vakada sorun, hatalı müdahaleler nedeniyle daha da kötüleşmektedir.
              </p>

              <div className="my-8">
                <img 
                  src="/blog-images/batik-tirnak/kapak.jpg" 
                  alt="Tırnak batması görünümü" 
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Bu yazıda tırnak batmasının nedenlerini, evde yapılan hataları, Medipodo Ayak Sağlığı'nda uygulanan podolojik yöntemleri ve kalıcı çözümleri detaylı şekilde bulabilirsiniz.
              </p>
            </section>

            {/* Bölüm 1: Tırnak Batması Nedir */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-2">
                1. Tırnak Batması Nedir?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Tırnağın yan kenarının çevresindeki yumuşak dokuya gömülmesiyle oluşan durumdur. Bu durum, tırnağın büyüme yönü, tırnak formu, ayakkabı baskısı ve kesim şekli gibi faktörlere bağlı olarak gelişir.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Tırnak Batmasının Belirtileri:</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700"><strong>Kızarıklık:</strong> Tırnağın batığı bölgede kızarıklık görülür.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700"><strong>Şişlik:</strong> Parmakta ödem ve şişlik gelişir.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700"><strong>Ağrı:</strong> Yürürken ve ayakkabı giyerken ağrı hissedilir.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700"><strong>Ilık Akıntı / İltihap:</strong> Enfeksiyon gelişirse iltihaplanmış dokudan akıntı olabilir.</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700"><strong>Yürürken Hassasiyet:</strong> Her adımda hassasiyet ve rahatsızlık hissedilir.</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mt-6 italic">
                  <strong>Dikkat:</strong> Erken aşamada müdahale edilmezse enfeksiyon ve ciddi doku hasarı oluşabilir.
                </p>
              </div>

              <div className="my-8">
                <img 
                  src="/blog-images/batik-tirnak/2.jpg" 
                  alt="Tırnak batması detayı" 
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </section>

            {/* Bölüm 2: Tırnak Batması Nedenleri */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-2">
                2. Tırnak Batması Neden Olur?
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-orange-900 mb-3">1️⃣ Yanlış Tırnak Kesimi</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Tırnağın köşelerini derin almak, yuvarlatmak veya çok kısa kesmek batığı tetikler. Tırnak kesilirken düz bir çizgide kesilmesi gerekirken, birçok kişi köşeleri yuvarlatarak keser ve bu da tırnağın yan kenarının dokuya baskı yapmasına neden olur.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-red-900 mb-3">2️⃣ Dar Ayakkabılar</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Genişliği olmayan, parmakları sıkıştıran ayakkabılar tırnağın aşağı doğru baskılanmasına neden olur. Özellikle topuklu ayakkabılar ve dar burunlu ayakkabılar tırnak batmasını tetikler.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-yellow-900 mb-3">3️⃣ Travmalar</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Darbeler, spor esnasında sıkışma veya uzun süre baskı altında kalma batmaya zemin oluşturur. Futbol, koşu ve diğer sporlar sırasında ayak parmakları travma görebilir.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-purple-900 mb-3">4️⃣ Mantar Enfeksiyonu (Onikomikoz)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Kalınlaşmış tırnak, yan dokulara baskı yaparak batar. Mantar enfeksiyonu tırnağı kalınlaştırır ve bu da tırnak batmasını hızlandırır.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-900 mb-3">5️⃣ Biyomekanik Bozukluklar</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Düz taban, çarpık parmak yapısı, yüksek kavis gibi durumlar tırnağın büyüme açısını etkileyebilir. Bu anatomik farklılıklar tırnak batmasına yatkınlık oluşturur.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-indigo-900 mb-3">6️⃣ Genetik Tırnak Formu</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Doğuştan kıvrık veya konveks tırnaklarda batma daha sık görülür. Eğer ailenizde tırnak batması varsa, siz de bu soruna yatkın olabilirsiniz.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <img 
                  src="/blog-images/batik-tirnak/3.jpg" 
                  alt="Tırnak kesimi hatası" 
                  className="w-full rounded-xl shadow-lg"
                />
                <img 
                  src="/blog-images/batik-tirnak/4.jpg" 
                  alt="Dar ayakkabı etkisi" 
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </section>

            {/* Bölüm 3: Yapılan Hatalar */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-red-600 pb-2">
                3. Tırnak Batmasında En Çok Yapılan Hatalar
              </h2>

              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <h3 className="text-lg font-bold text-red-900 mb-2">❌ Batık Bölgeyi Kesmek veya Koparmak</h3>
                  <p className="text-gray-700">
                    Doku travması artar, enfeksiyon riski yükselir. Bu işlem tırnağı daha da kötüleştirir ve kalıcı hasara neden olabilir.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <h3 className="text-lg font-bold text-red-900 mb-2">❌ Pamuğu Tırnağın Altına Sıkıştırmak</h3>
                  <p className="text-gray-700">
                    Hijyenik değildir, bakterileri içine hapseder. Nem ve ısı ortamı enfeksiyonu hızlandırır.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <h3 className="text-lg font-bold text-red-900 mb-2">❌ Evde Tel Takmaya Çalışmak</h3>
                  <p className="text-gray-700">
                    Yanlış açıda uygulama tırnağı kırabilir. Profesyonel olmayan uygulamalar daha fazla zarar verebilir.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <h3 className="text-lg font-bold text-red-900 mb-2">❌ Aşırı Sıcak Suya Sokmak</h3>
                  <p className="text-gray-700">
                    Ödemi ve basıncı artırır. Sıcak su tırnağın etrafındaki dokuyu şiştirir ve ağrıyı artırır.
                  </p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                  <h3 className="text-lg font-bold text-red-900 mb-2">❌ "Geçer" Diyerek Beklemek</h3>
                  <p className="text-gray-700">
                    Tırnak aynı açıyla büyüdüğü için kendiliğinden iyileşmez. Zamanla durum daha da kötüleşir.
                  </p>
                </div>
              </div>

              <div className="my-8">
                <img 
                  src="/blog-images/batik-tirnak/5.jpg" 
                  alt="Yapılan hatalar" 
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </section>

            {/* Bölüm 4: Podolojik Yaklaşım */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-2">
                4. Medipodo Ayak Sağlığı'nda Podolojik Yaklaşım
              </h2>

              <p className="text-gray-700 leading-relaxed mb-8">
                Medipodo Ayak Sağlığı ekibi olarak tırnak batmasında cerrahi olmayan, ağrısız ve kalıcı çözümler sunuyoruz. Podolojik yaklaşım; tırnağın yapısını, büyüme açısını ve parmak anatomisini değerlendirerek kişiye özel bir bakım planı oluşturmayı içerir.
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">⭐ 1. Podolojik Kanal Temizliği (Tırnak Yan Kanat Açma)</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Batığın bulunduğu kenar steril cihazlarla nazikçe açılır. Bu işlem:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Tırnağın ete baskısını azaltır</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Ağrıyı ilk dakikalarda hafifletir</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Enfekte dokuyu temizler</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Tırnağın doğru yönde büyümesini destekler</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4 italic">
                    Kalıcı çözüm için çoğu zaman tel/bant uygulamaları ile birlikte uygulanır.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-900 mb-3">⭐ 2. B/S Bant Uygulaması (Ağrısız Almanya Sistemi)</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    B/S spange bant sistemi, batık tırnaklarda en çok tercih edilen tekniklerden biridir.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-semibold mb-3">Avantajları:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Tırnağı yukarı kaldırarak baskıyı azaltır</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Ağrıyı çok kısa sürede hafifletir</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Kozmetik olarak görünmez</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Günlük yaşama engel olmaz</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">İşlem sonrası ayakkabı giymeye devam edilebilir</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Özellikle çocuklarda ve hassas tırnak yapılarında güvenli bir çözümdür</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-purple-900 mb-3">⭐ 3. 3TO Tel Uygulaması (Üç Nokta Basınç Sistemi)</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Kalınlaşmış, kıvrık veya tekrarlayan batmalarda kullanılan daha güçlü bir tel sistemidir.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-semibold mb-3">3TO tel sistemi şunları sağlar:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Tırnağı üç noktadan dengeleyerek yukarı kaldırır</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Tırnağın doğal formunu yeniden verir</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Tekrar batma riskini belirgin azaltır</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Tırnak büyümesi boyunca kontrol altında tutar</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4 italic">
                    Podolog tarafından doğru açıyla uygulandığında oldukça etkili ve uzun süreli bir çözümdür.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-orange-900 mb-3">⭐ 4. Tamponlama & Koruyucu Bandajlama</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Kanal açıldıktan sonra tırnağın dokuya yeniden baskı yapmasını önlemek için medikal tamponlama yapılır. Bu özel tampon malzemesi:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Tırnak kenarını korur</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Enfeksiyonu önler</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">Yürürken rahatlık sağlar</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-red-900 mb-3">⭐ 5. Travmalı / Kalınlaşmış Tırnaklarda Medikal İnceletme</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Travma veya mantar sonrası kalınlaşan tırnaklar batmaya çok yatkındır. Podolojik frezlerle tırnak inceltilir, tırnağın baskısı azaltılır.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-indigo-900 mb-3">⭐ 6. Podolojik Tırnak Kesimi</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Kıvrık, konveks veya batmaya meyilli tırnaklarda kişi kendi kesim şekliyle kontrol edemez. Podolog doğru anatomik kesimle tırnağın yeniden batmasını engeller.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-pink-900 mb-3">⭐ 7. Gerektiğinde Medikal Rekonstrüksiyon</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Tırnak deformasyonu fazla olan kişilerde özel medikal jel ile tırnak yeniden şekillendirilir ve büyüme yönü kontrol altına alınır. Tırnak batması tekrarlarının önüne geçilir.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <img 
                  src="/blog-images/batik-tirnak/6.jpg" 
                  alt="B/S bant uygulaması" 
                  className="w-full rounded-xl shadow-lg"
                />
                <img 
                  src="/blog-images/batik-tirnak/7.jpg" 
                  alt="3TO tel sistemi" 
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </section>

            {/* Bölüm 5: Evde Yapılabilecek Bakım */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-green-600 pb-2">
                5. Evde Yapılabilecek Doğru Bakım Önerileri
              </h2>

              <div className="bg-green-50 rounded-xl p-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Tırnağı Düz ve Kontrollü Şekilde Kesin</h4>
                      <p className="text-gray-700">Tırnak kesilirken düz bir çizgide kesilmesi gerekirken, köşeleri yuvarlatmayın. Tırnak uçlarını kesim hattından biraz dışarıda bırakın.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Ayakları Kuru Tutun, Terlemeyi Azaltın</h4>
                      <p className="text-gray-700">Nem, enfeksiyonun gelişmesine ortam sağlar. Ayakları her gün yıkayın ve iyice kurutun.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Geniş Burunlu Ayakkabılar Tercih Edin</h4>
                      <p className="text-gray-700">Parmakları sıkıştıran ayakkabılardan kaçının. Geniş burunlu, rahat ayakkabılar tercih edin.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Nemli Bölgeleri Düzenli Olarak Kurutun</h4>
                      <p className="text-gray-700">Özellikle parmaklar arasındaki bölgeleri kurutun. Nem, mantar enfeksiyonuna ortam sağlar.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Enfeksiyon Belirtisi Varsa Beklemeden Podoloğa Başvurun</h4>
                      <p className="text-gray-700">Kızarıklık, şişlik veya iltihap görüyorsanız, hemen bir podologa başvurun.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-8">
                <img 
                  src="/blog-images/batik-tirnak/8.jpg" 
                  alt="Doğru ayakkabı seçimi" 
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
            </section>

            {/* Bölüm 6: SSS */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-2">
                6. Sık Sorulan Sorular (SSS)
              </h2>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-600">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">❓ Tırnak batması için tel mi bant mı daha etkili?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Her ikisi de etkili yöntemdir. B/S bant hafif-orta vakalarda, 3TO tel kalınlaşmış ve tekrarlayan vakalarda daha uygundur. Podolog, durumunuzu değerlendirerek en uygun yöntemi önerecektir.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-600">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">❓ B/S bant veya 3TO tel uygulaması ağrı yapar mı?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Hayır. İşlem anında rahatlama sağlar ve günlük yaşama engel olmaz. Çoğu hasta ağrının hemen hafiflemesini hisseder.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-600">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">❓ Tırnak batması tekrarlar mı?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Yanlış kesim, genetik yapı ve ayakkabı baskısı devam ederse tekrar edebilir. Podolojik tel sistemleri tekrar riskini büyük oranda azaltır. Ancak, evde yapılan yanlış kesimler ve dar ayakkabı kullanımı tekrarlamaya neden olabilir.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-600">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">❓ Çocuklarda tel uygulaması yapılabilir mi?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Evet. B/S bant çocuklar için en güvenli ve ağrısız yöntemdir. Çocuklarda tırnak batması erken yaşlarda başlayabilir ve hemen müdahale edilmesi önemlidir.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-600">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">❓ Enfeksiyon varsa podolojik uygulama yapılabilir mi?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Duruma göre önce ödem ve enfeksiyon kontrol altına alınır, ardından tel/bant uygulanabilir. Enfeksiyon ciddi ise, önce tıbbi destek alınması gerekebilir.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-600">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">❓ İşlem sonrası normal ayakkabı giyilebilir mi?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Evet. Çoğu hasta işlemden hemen sonra normal yürüyüşüne devam eder. B/S bant ve 3TO tel uygulaması sonrası ayakkabı giymeye devam edilebilir.
                  </p>
                </div>
              </div>
            </section>

            {/* Sonuç */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-6">🎯 Sonuç</h2>
                
                <p className="text-lg leading-relaxed mb-6">
                  Tırnak batması doğru müdahale edilmezse ilerleyen ve yaşam kalitesini etkileyen bir problemdir. Medipodo Ayak Sağlığı olarak, cerrahi olmayan profesyonel podolojik yöntemlerle tırnağın formunu düzeltiyor, baskıyı azaltıyor ve tekrar batmayı önlüyoruz.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Düzenli bakım, doğru tırnak kesimi ve kişiye özel tel/bant uygulamaları ile tırnak batması kalıcı şekilde çözülebilir.
                </p>

                <div className="bg-white text-gray-900 rounded-lg p-6 mt-8">
                  <h3 className="text-xl font-bold mb-4">📞 Medipodo ile İletişime Geçin</h3>
                  <p className="mb-4">
                    Tırnak batması sorunu yaşıyorsanız, uzman podologlarımız size yardımcı olmak için hazırdır. Hemen randevu alın ve ağrısız çözüme kavuşun.
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Randevu Al
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  );
};

export default BatikTirnakBlog;
