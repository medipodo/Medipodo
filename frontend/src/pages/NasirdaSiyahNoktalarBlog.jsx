import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet';

const NasirdaSiyahNoktalarBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Nasırda Siyah Noktalar Neden Oluşur? Tehlikeli mi? | Medipodo</title>
        <meta name="description" content="Nasırda siyah noktalar neden oluşur? Tehlikeli mi? Nasır ve siğil arasındaki fark, siyah noktaların nedenleri ve ne zaman uzman değerlendirmesi gerektiği." />
        <link rel="canonical" href="https://medipodo.com/blog/nasirda-siyah-noktalar" />
        
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Nasırda Siyah Noktalar Neden Oluşur? Tehlikeli mi?" />
        <meta property="og:description" content="Nasırda siyah noktalar neden oluşur? Tehlikeli mi? Nasır ve siğil arasındaki fark, siyah noktaların nedenleri ve ne zaman uzman değerlendirmesi gerektiği." />
        <meta property="og:image" content="https://customer-assets.emergentagent.com/job_e645f72f-9e66-4d5b-ac83-dcac48b60329/artifacts/jofiyagi_nasirda-siyah-noktalar.webp" />
        <meta property="og:url" content="https://medipodo.com/blog/nasirda-siyah-noktalar" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nasırda Siyah Noktalar Neden Oluşur? Tehlikeli mi?" />
        <meta name="twitter:description" content="Nasırda siyah noktalar neden oluşur? Tehlikeli mi? Nasır ve siğil arasındaki fark ve ne zaman uzman desteği alınmalı." />
        <meta name="twitter:image" content="https://customer-assets.emergentagent.com/job_e645f72f-9e66-4d5b-ac83-dcac48b60329/artifacts/jofiyagi_nasirda-siyah-noktalar.webp" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center text-blue-700 hover:text-blue-800 mb-6 font-medium">
            <ArrowLeft size={20} className="mr-2" />
            Blog'a Dön
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 mb-6 leading-tight">
              Nasırda Siyah Noktalar Neden Oluşur? Tehlikeli mi?
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <div className="flex items-center">
                <User size={18} className="mr-2 text-blue-600" />
                <span>Medipodo Podoloji Ekibi</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2 text-blue-600" />
                <span>8 dakika okuma</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Kapak Görseli */}
            <div className="mb-10">
              <img 
                src="https://customer-assets.emergentagent.com/job_e645f72f-9e66-4d5b-ac83-dcac48b60329/artifacts/jofiyagi_nasirda-siyah-noktalar.webp" 
                alt="Nasırda siyah noktalar - ayak tabanında nasır ve siyah noktalar görüntüsü" 
                className="w-full rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>

            {/* Giriş */}
            <div className="prose prose-lg max-w-none mb-10">
              <p className="text-xl text-gray-700 leading-relaxed">
                Ayakta oluşan nasırlar zamanla kalınlaşabilir ve bazı durumlarda içinde küçük siyah noktalar görülebilir. Bu durum çoğu kişi için endişe verici olabilir. Peki nasırda görülen bu siyah noktalar ne anlama gelir? Her zaman tehlikeli midir?
              </p>
              <p className="text-gray-600">
                Bu yazıda nasırda siyah noktaların neden oluştuğunu ve ne zaman değerlendirme önerildiğini sade bir şekilde ele alıyoruz.
              </p>
            </div>

            {/* Nasır Nedir ve Neden Oluşur? */}
            <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-6">Nasır Nedir ve Neden Oluşur?</h2>
              <p className="text-gray-700 mb-6">
                Nasır, cildin sürekli baskı ve sürtünmeye maruz kalması sonucu kalınlaşmasıdır. En sık ayak tabanında, topukta ve parmak aralarında görülür.
              </p>
              <p className="text-gray-700 mb-4 font-semibold">Genellikle:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>Dar ayakkabı kullanımı</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>Uzun süre ayakta kalma</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>Yürüyüş basıncı</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>Ayağın belirli noktalarına yük binmesi</span>
                </li>
              </ul>
              <p className="text-gray-600 mt-4">gibi nedenlerle ortaya çıkar.</p>
            </div>

            {/* Nasırda Siyah Noktalar Neden Görülür? */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-6">Nasırda Siyah Noktalar Neden Görülür?</h2>
              <p className="text-gray-700 mb-6">
                Nasırın içinde görülen siyah noktalar çoğu zaman <strong>küçük kanama alanlarıdır</strong>. Bu durum, nasırın bulunduğu bölgeye sürekli baskı uygulanmasıyla ilişkilidir.
              </p>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-6">
                <h3 className="font-bold text-amber-800 mb-3">Siyah noktaların oluşma nedenleri:</h3>
                <ul className="space-y-2 text-amber-900">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-3 mt-1">•</span>
                    <span>Yoğun basınca bağlı mikro kanamalar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-3 mt-1">•</span>
                    <span>Deri altında biriken kanın koyulaşması</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-3 mt-1">•</span>
                    <span>Nasırın derinleşmesi</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-gray-600 italic">
                Bazı durumlarda bu görüntü farklı cilt problemleriyle karışabilir.
              </p>
            </div>

            {/* Nasır mı, Siğil mi? */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-6">Nasır mı, Siğil mi? Nasıl Ayırt Edilir?</h2>
              <p className="text-gray-700 mb-6">
                Nasır ve siğil sıkça karıştırılan iki farklı durumdur.
              </p>
              
              {/* İkinci Görsel */}
              <div className="mb-6">
                <img 
                  src="https://customer-assets.emergentagent.com/job_e645f72f-9e66-4d5b-ac83-dcac48b60329/artifacts/gon09ho8_sigil%20g%C3%B6rseli%20kapiller%20u%C3%A7lar.jpg" 
                  alt="Siğil görüntüsü - ayak tabanında siğil ve kapiller uçlar" 
                  className="w-full max-w-md mx-auto rounded-xl shadow-lg"
                  loading="lazy"
                />
                <p className="text-center text-sm text-gray-500 mt-2">Siğilde görülen kapiller damar uçları</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-blue-800 mb-3 text-lg">Nasır</h3>
                  <p className="text-gray-700">Basınca bağlı oluşur, bastırınca ağrı hissedilebilir</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-purple-100">
                  <h3 className="font-bold text-purple-800 mb-3 text-lg">Siğil</h3>
                  <p className="text-gray-700">Viral kaynaklıdır, yayılma eğilindedir</p>
                </div>
              </div>
              
              <p className="text-gray-700 mt-6">
                Siyah noktalar bazen siğil belirtisi de olabilir. Bu nedenle kesin ayrım için değerlendirme önemlidir.
              </p>
              
              <div className="mt-6 p-4 bg-blue-100 rounded-xl">
                <p className="text-blue-800 font-medium">
                  👉 Daha detaylı bilgi için:{' '}
                  <Link to="/blog/nasir-sigil-farklari" className="underline hover:text-blue-600 transition-colors">
                    Nasır ve Siğil Farkları
                  </Link>
                </p>
              </div>
            </div>

            {/* Ne Zaman Dikkate Alınmalı? */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-6">Nasırda Siyah Noktalar Ne Zaman Dikkate Alınmalı?</h2>
              <p className="text-gray-700 mb-6">
                Aşağıdaki durumlarda dikkat edilmesi önerilir:
              </p>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <ul className="space-y-3">
                  <li className="flex items-center text-red-800">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    <span>Siyah noktalar artıyorsa</span>
                  </li>
                  <li className="flex items-center text-red-800">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    <span>Ağrı giderek şiddetleniyorsa</span>
                  </li>
                  <li className="flex items-center text-red-800">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    <span>Nasır büyüyorsa</span>
                  </li>
                  <li className="flex items-center text-red-800">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    <span>Yürürken rahatsızlık artıyorsa</span>
                  </li>
                </ul>
              </div>
              <p className="text-gray-600 mt-6">
                Bu gibi durumlarda podolojik değerlendirme önerilir.
              </p>
              <p className="text-sm text-gray-500 mt-2 italic">
                Unutulmamalıdır ki bu içerik tıbbi teşhis yerine geçmez.
              </p>
            </div>

            {/* Evde Yapılabilecekler */}
            <div className="bg-gradient-to-r from-green-50 to-white rounded-2xl p-8 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-6">Evde Yapılabilecekler Nelerdir?</h2>
              <p className="text-gray-700 mb-6">
                Nasır oluşumunu azaltmak için bazı basit önlemler alınabilir:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Ayağa uygun ayakkabı tercih etmek</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Basıncı azaltacak tabanlık kullanmak</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 mt-1">✓</span>
                  <span>Ayak bakımına dikkat etmek</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-yellow-100 rounded-xl">
                <p className="text-yellow-800 font-medium">
                  ⚠️ Ancak nasırın kesilmesi veya derin müdahaleler önerilmez.
                </p>
              </div>
            </div>

            {/* Ne Zaman Uzman Desteği? */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-6">Ne Zaman Uzman Desteği Alınmalı?</h2>
              <p className="text-gray-700 mb-6">Eğer:</p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>Nasır sürekli tekrar ediyorsa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>Siyah noktalar belirginleşiyorsa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>Günlük yaşamı etkiliyorsa</span>
                </li>
              </ul>
              <p className="text-gray-700 font-medium">
                uzman desteği almak daha sağlıklı olacaktır.
              </p>
              
              <div className="mt-6 p-4 bg-blue-100 rounded-xl">
                <p className="text-blue-800 font-medium">
                  👉 İlgili hizmet:{' '}
                  <Link to="/hizmet/nasir-tedavisi" className="underline hover:text-blue-600 transition-colors">
                    Nasır Tedavisi
                  </Link>
                </p>
              </div>
            </div>

            {/* SSS - Accordion */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-6">Sıkça Sorulan Sorular</h2>
              
              <div className="space-y-4">
                <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <span className="font-semibold text-blue-950">Nasırda siyah noktalar tehlikeli mi?</span>
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    <p>Çoğu durumda siyah noktalar basınca bağlı küçük kanama alanlarıdır. Ancak bazı durumlarda farklı problemlerle karışabileceği için değerlendirme önerilir.</p>
                  </div>
                </details>
                
                <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <span className="font-semibold text-blue-950">Nasır mı siğil mi nasıl anlaşılır?</span>
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    <p>Nasır genellikle baskıya bağlı oluşurken, siğil viral kaynaklıdır ve yayılabilir. Kesin ayrım için uzman değerlendirmesi önerilir.</p>
                  </div>
                </details>
                
                <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <span className="font-semibold text-blue-950">Nasırdaki siyah noktalar geçer mi?</span>
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    <p>Baskı ortadan kaldırıldığında zamanla azalma görülebilir. Ancak tekrar eden durumlarda değerlendirme önerilir.</p>
                  </div>
                </details>
                
                <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                    <span className="font-semibold text-blue-950">Evde nasır kesmek doğru mu?</span>
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700">
                    <p>Evde yapılan müdahaleler cilde zarar verebilir. Bu nedenle önerilmez.</p>
                  </div>
                </details>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Profesyonel Değerlendirme İçin</h3>
              <p className="mb-6 opacity-90">
                Nasır veya siyah noktalar konusunda endişeleriniz varsa, uzman podolog ekibimizle iletişime geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:05456569747" 
                  className="inline-flex items-center justify-center bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors"
                >
                  <Phone size={20} className="mr-2" />
                  Randevu: 0545 656 97 47
                </a>
                <a 
                  href="https://wa.me/905456569747" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
                >
                  WhatsApp ile İletişim
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Diğer Yazılar CTA */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-blue-950 mb-6">Diğer Yazıları Keşfedin</h2>
          <Link 
            to="/blog" 
            className="inline-flex items-center bg-blue-700 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-800 transition-colors"
          >
            Tüm Blog Yazıları
          </Link>
        </div>
      </section>
    </>
  );
};

export default NasirdaSiyahNoktalarBlog;
