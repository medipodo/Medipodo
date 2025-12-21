import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { siteInfo } from '../mock';

const BSBantBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>B/S Bant Uygulaması Nedir? Batık Tırnak İçin Daha Mı Konforlu? | Medipodo</title>
        <meta name="description" content="B/S Bant uygulaması nedir, nasıl çalışır? Batık tırnak tedavisinde tırnak teline alternatif, acısız ve estetik çözüm. Ankara Medipodo'da uygulanıyor." />
        <meta name="keywords" content="bs bant, b/s bant, batık tırnak tedavisi, tırnak teli, tırnak bandi, ankara batık tırnak, medipodo, podoloji" />
        <link rel="canonical" href="https://medipodo.com/blog/bs-bant-uygulamasi" />
        
        {/* Open Graph Meta Tags - WhatsApp, Facebook, LinkedIn önizlemesi için */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="B/S Bant Uygulaması - Batık Tırnak İçin Acısız Çözüm" />
        <meta property="og:description" content="Batık tırnak tedavisinde modern ve estetik çözüm: B/S Bant uygulaması. Tırnak telinden farkları ve avantajları." />
        <meta property="og:image" content="https://medipodo.com/images/blog/bs-bant/bs-bant.jpg" />
        <meta property="og:url" content="https://medipodo.com/blog/bs-bant-uygulamasi" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="B/S Bant Uygulaması - Batık Tırnak İçin Acısız Çözüm" />
        <meta name="twitter:description" content="Batık tırnak tedavisinde modern ve estetik çözüm: B/S Bant uygulaması." />
        <meta name="twitter:image" content="https://medipodo.com/images/blog/bs-bant/bs-bant.jpg" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link to="/blog" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
                <ArrowLeft size={20} className="mr-2" />
                Blog'a Geri Dön
              </Link>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                B/S Bant Uygulaması Nedir? Batık Tırnak İçin Daha Mı Konforlu?
              </h1>
              
              <div className="flex flex-wrap gap-6 text-blue-100">
                <div className="flex items-center">
                  <User size={18} className="mr-2" />
                  <span>Medipodo Podoloji Ekibi</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2" />
                  <span>16 Aralık 2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              {/* Featured Image */}
              <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/blog/bs-bant/bs-bant.jpg" 
                  alt="B/S Bant Uygulaması" 
                  className="w-full h-auto"
                />
              </div>

              {/* Introduction */}
              <div className="bg-blue-50 border-l-4 border-blue-700 p-6 mb-8 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Batık tırnak (unguis incarnatus)</strong>, tırnak kenarının çevre yumuşak dokunun içine doğru büyümesiyle ortaya çıkan; ağrı, kızarıklık, akıntı ve enfeksiyonla seyreden yaygın bir ayak sağlığı problemidir. Günlük yaşamı ciddi şekilde etkileyen bu durum, zamanında ve doğru yöntemle tedavi edilmediğinde kronikleşebilir.
                </p>
              </div>

              <p>
                Günümüzde batık tırnak tedavisinde cerrahi işlemler yerine, <strong>podoloji biliminin sunduğu cerrahi olmayan ve ağrısız yöntemler</strong> ön plana çıkmaktadır. Bu yöntemlerin başında <strong>Tırnak Teli (3TO)</strong> ve <strong>B/S Bant uygulaması</strong> gelmektedir.
              </p>

              <p>
                Bu yazıda; B/S Bant uygulamasının ne olduğu, nasıl çalıştığı ve hangi durumlarda tırnak teline kıyasla daha pratik, estetik ve ekonomik bir çözüm sunduğu tüm yönleriyle ele alınacaktır.
              </p>

              {/* Section: Cerrahi Olmayan Çözümler */}
              <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">Batık Tırnağa Cerrahi Olmayan İki Etkili Çözüm</h2>
              
              <div className="mb-8">
                <img 
                  src="/images/blog/bs-bant/batik-tirnak.jpg" 
                  alt="Batık Tırnak" 
                  className="rounded-lg shadow-md w-full max-w-2xl mx-auto"
                />
              </div>

              <p>
                Batık tırnak problemi yaşayan pek çok kişi, ameliyat korkusu veya uzun iyileşme süresi nedeniyle tedaviyi ertelemektedir. Oysa <strong>modern podolojik yaklaşımlar</strong> sayesinde, cerrahiye gerek kalmadan batık tırnak sorunu kontrol altına alınabilmektedir.
              </p>

              <p>Bu noktada iki yöntem öne çıkar:</p>
              
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Tırnak Teli (3TO) Uygulaması</strong></li>
                <li><strong>B/S Bant (BS Brace) Uygulaması</strong></li>
              </ul>

              <p>
                Her iki yöntem de tırnağın doğal büyüme yönünü düzenlemeyi hedefler. Ancak uygulama şekli, konfor, estetik ve kullanım alanları açısından önemli farklar bulunmaktadır.
              </p>

              {/* Section: B/S Bant Nedir */}
              <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">B/S Bant Uygulaması Nedir?</h2>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 mb-8 border-2 border-blue-200">
                <p className="text-gray-800 leading-relaxed mb-4">
                  <strong className="text-blue-900">B/S Bant</strong>, cam elyafı ile güçlendirilmiş, sentetik ve şeffaf yapıda bir tırnak düzeltme sistemidir. Yassı bir yay prensibiyle çalışır ve tırnağın yüzeyine özel bir medikal yapıştırıcı ile sabitlenir.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-blue-900 mb-4">B/S Bant Nasıl Çalışır?</h3>

              <div className="space-y-3 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <p className="text-gray-700 pt-1">Bant, tırnağın üst yüzeyine yapıştırılır</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <p className="text-gray-700 pt-1">Yay etkisi sayesinde tırnak kenarlarını yukarı doğru çeker</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <p className="text-gray-700 pt-1">Tırnak yatağına ve yan dokulara olan baskı anında azalır</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <p className="text-gray-700 pt-1">Ağrı hızlı şekilde hafifler</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <p className="text-gray-700 pt-1">Tırnak, zamanla daha doğru bir büyüme yönüne yönlendirilir</p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
                <p className="text-gray-800 leading-relaxed">
                  ✅ Uygulama sırasında <strong>kesme, delme veya tel takma işlemi yapılmaz</strong>, bu nedenle <strong className="text-green-700">tamamen acısızdır</strong>.
                </p>
              </div>

              {/* Tırnak Bandı Görseli */}
              <div className="mb-12">
                <img 
                  src="/images/blog/bs-bant/tirnak-bandi.jpg" 
                  alt="Tırnak Bandı Uygulaması" 
                  className="rounded-lg shadow-md w-full max-w-2xl mx-auto"
                />
              </div>

              {/* Comparison Table */}
              <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">Tırnak Teli (3TO) ve B/S Bant Karşılaştırması</h2>

              <div className="overflow-x-auto mb-12">
                <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden shadow-md">
                  <thead className="bg-blue-700 text-white">
                    <tr>
                      <th className="border border-gray-300 p-4 text-left">Özellik</th>
                      <th className="border border-gray-300 p-4 text-left">B/S Bant Uygulaması</th>
                      <th className="border border-gray-300 p-4 text-left">Tırnak Teli (3TO)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-blue-50 transition-colors">
                      <td className="border border-gray-300 p-4 font-semibold">Uygulama Şekli</td>
                      <td className="border border-gray-300 p-4">Tırnak yüzeyine yapıştırılır</td>
                      <td className="border border-gray-300 p-4">Tırnak kenarlarına kanca ile takılır</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50 transition-colors">
                      <td className="border border-gray-300 p-4 font-semibold">Acı / Ağrı</td>
                      <td className="border border-gray-300 p-4 text-green-700 font-semibold">✅ Acısız, anında rahatlama sağlar</td>
                      <td className="border border-gray-300 p-4">Germe sırasında hafif ağrı olabilir</td>
                    </tr>
                    <tr className="bg-white hover:bg-blue-50 transition-colors">
                      <td className="border border-gray-300 p-4 font-semibold">Enfeksiyon Durumu</td>
                      <td className="border border-gray-300 p-4 text-green-700 font-semibold">✅ Enfeksiyonlu tırnağa uygulanabilir</td>
                      <td className="border border-gray-300 p-4">Enfeksiyon geçmeden uygulanmaz</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50 transition-colors">
                      <td className="border border-gray-300 p-4 font-semibold">Estetik Görünüm</td>
                      <td className="border border-gray-300 p-4 text-green-700 font-semibold">✅ Şeffaf, ince, fark edilmez</td>
                      <td className="border border-gray-300 p-4">Metal tel görünümü vardır</td>
                    </tr>
                    <tr className="bg-white hover:bg-blue-50 transition-colors">
                      <td className="border border-gray-300 p-4 font-semibold">Dayanıklılık</td>
                      <td className="border border-gray-300 p-4">1–2 ay tırnakta kalabilir</td>
                      <td className="border border-gray-300 p-4">2–3 haftada bir kontrol gerekir</td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-blue-50 transition-colors">
                      <td className="border border-gray-300 p-4 font-semibold">Maliyet</td>
                      <td className="border border-gray-300 p-4 text-green-700 font-semibold">✅ Daha uygun</td>
                      <td className="border border-gray-300 p-4">Daha yüksek</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <img 
                  src="/images/blog/bs-bant/tirnak-apse-batik.jpg" 
                  alt="Tırnak Apse Batık" 
                  className="rounded-lg shadow-md"
                />
                <img 
                  src="/images/blog/bs-bant/tirnak-mantari-bs-bant.jpg" 
                  alt="Tırnak Mantarı BS Bant" 
                  className="rounded-lg shadow-md"
                />
              </div>

              {/* Advantages */}
              <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">B/S Bant'ın Üstünlükleri ve Kullanım Alanları</h2>

              <div className="space-y-8 mb-12">
                <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">✅ Enfeksiyonlu Batık Tırnaklarda Büyük Avantaj</h3>
                  <p className="text-gray-700">
                    B/S Bant, <strong>enfeksiyonlu tırnaklarda dahi güvenle uygulanabilir</strong>. Tırnak kenarındaki baskıyı azaltarak dokunun rahatlamasını sağlar ve iyileşme sürecine destek olur.
                  </p>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">✅ Estetik Kaygısı Olanlar İçin İdeal</h3>
                  <p className="text-gray-700">
                    <strong>Şeffaf yapısı</strong> sayesinde dışarıdan fark edilmez. Üzerine oje sürülebilir. Özellikle yaz aylarında ve açık ayakkabı kullanan kişiler için önemli bir avantajdır.
                  </p>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">✅ Çocuklar ve Hassas Hastalar</h3>
                  <p className="text-gray-700">
                    Acısız ve travmasız bir yöntem olduğu için <strong>çocuklarda, yaşlılarda ve ağrı eşiği düşük bireylerde</strong> sıklıkla tercih edilir.
                  </p>
                </div>
              </div>

              {/* Suitable Cases */}
              <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">B/S Bant Kimler İçin Uygundur?</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Erken ve orta evre batık tırnaklar</li>
                    <li>Enfeksiyon gelişmiş vakalar</li>
                    <li>Cerrahi işlem istemeyenler</li>
                  </ul>
                </div>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Çocuklar ve gençler</li>
                    <li>Estetik kaygısı olan bireyler</li>
                    <li>Günlük yaşamına hemen dönmek isteyenler</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Kimler İçin Yeterli Olmayabilir?</h3>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>İleri derecede kronik ve tekrarlayan batıklar</li>
                  <li>Aşırı kalınlaşmış ve ciddi deformasyonu olan tırnaklar</li>
                  <li>Daha önce çok sayıda başarısız girişim yapılmış vakalar</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Bu gibi durumlarda tırnak teli (3TO) veya kombine podolojik tedaviler tercih edilebilir.
                </p>
              </div>

              {/* Care Instructions */}
              <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">Uygulama Sonrası Nelere Dikkat Edilmelidir?</h2>

              <div className="bg-blue-50 rounded-xl p-8 mb-12">
                <ul className="space-y-3 text-gray-800">
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-700 font-bold text-xl">•</span>
                    <span>İlk 24 saat aşırı su temasından kaçınılmalıdır</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-700 font-bold text-xl">•</span>
                    <span>Fazla terlemeden kaçınılmalı ve oynanmamalıdır</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-700 font-bold text-xl">•</span>
                    <span>Tırnaklar düz kesilmeli, köşeler derin alınmamalıdır</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-700 font-bold text-xl">•</span>
                    <span>Dar ve sivri burunlu ayakkabılar tercih edilmemelidir</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-700 font-bold text-xl">•</span>
                    <span>Podologun önerdiği bakım ürünleri düzenli kullanılmalıdır</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-700 font-bold text-xl">•</span>
                    <span>Bant koparılmamalı, kendiliğinden düşmesi beklenmelidir</span>
                  </li>
                </ul>
              </div>

              {/* FAQ */}
              <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">B/S Bant Hakkında Sık Sorulan Sorular</h2>

              <div className="space-y-4 mb-12">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-2">B/S Bant acıtır mı?</h4>
                  <p className="text-gray-700">Hayır. Uygulama tamamen acısızdır.</p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Ne kadar süre tırnakta kalır?</h4>
                  <p className="text-gray-700">Genellikle 4–8 hafta boyunca tırnakta kalabilir.</p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Kalıcı çözüm sağlar mı?</h4>
                  <p className="text-gray-700">Uygun vakalarda tırnağın büyüme yönünü kalıcı olarak düzenleyebilir.</p>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-2">Tel mi bant mı daha etkilidir?</h4>
                  <p className="text-gray-700">Bu, batığın derecesine ve tırnak yapısına bağlıdır. Kararı podolog verir.</p>
                </div>
              </div>

              {/* Decision */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-xl p-8 mb-12">
                <h2 className="text-2xl font-bold text-yellow-900 mb-4">⚠️ Hangi Tedavi Size Uygun?</h2>
                <p className="text-gray-800 leading-relaxed mb-4">
                  Batık tırnak tedavisinde <strong>tek ve herkese uygun bir yöntem yoktur</strong>. Tırnağın yapısı, batığın şiddeti, enfeksiyon durumu ve hastanın yaşam tarzı dikkate alınarak karar verilmelidir.
                </p>
                <p className="text-gray-800 leading-relaxed font-semibold">
                  Bu nedenle hangi yöntemin uygulanacağına <strong className="text-yellow-900">yalnızca podolog muayenesi sonrası karar verilmelidir</strong>.
                </p>
              </div>

              {/* Ankara Section */}
              <div className="mb-12">
                <img 
                  src="/images/blog/bs-bant/batik-tirnak-ankara.jpg" 
                  alt="Ankara Batık Tırnak Tedavisi" 
                  className="rounded-lg shadow-md mb-6"
                />
              </div>

              <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">Ankara'da Batık Tırnak Tedavisi</h2>

              <p>
                <strong>Ankara'da batık tırnak tedavisi</strong> arayanlar için B/S Bant uygulaması, özellikle <strong>Çayyolu, Ümitköy, Yaşamkent, Bağlıca, Çankaya ve İncek</strong> bölgelerinde sık tercih edilen modern bir yöntemdir.
              </p>

              <p>
                <Link to="/hakkimizda" className="text-blue-700 hover:underline font-semibold">Medipodo Ayak Sağlığı Merkezi</Link>'nde tüm batık tırnak uygulamaları podolog eşliğinde, steril koşullarda ve kişiye özel planlama ile yapılmaktadır.
              </p>

              <div className="bg-blue-50 rounded-xl p-8 my-8 border-2 border-blue-200">
                <p className="text-gray-800 mb-4 leading-relaxed">
                  👉 Batık tırnak sorununuz için hangi yöntemin size uygun olduğunu öğrenmek ve ağrısız çözüme kavuşmak için <strong>Medipodo'dan hemen randevu alın</strong>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://maps.app.goo.gl/p1Bp5QzGtGAdAwaA7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors"
                  >
                    <MapPin className="mr-2" size={20} />
                    Google Maps'te Görüntüle
                  </a>
                  <Link to="/iletisim">
                    <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
                      <Phone className="mr-2" size={20} />
                      Randevu Al
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-gray-100 rounded-xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">📚 İlgili Makaleler</h3>
                <div className="space-y-3">
                  <Link to="/blog/batik-tirnak-nedenleri" className="flex items-center text-blue-700 hover:underline">
                    <ExternalLink size={16} className="mr-2" />
                    Batık Tırnak Nedir ve Nasıl Tedavi Edilir?
                  </Link>
                  <Link to="/sikca-sorulan-sorular" className="flex items-center text-blue-700 hover:underline">
                    <ExternalLink size={16} className="mr-2" />
                    Sık Sorulan Sorular - Batık Tırnak Tedavisi
                  </Link>
                  <Link to="/hizmetler" className="flex items-center text-blue-700 hover:underline">
                    <ExternalLink size={16} className="mr-2" />
                    Podoloji Hizmetlerimiz
                  </Link>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 mt-12">
                <h4 className="font-bold text-yellow-900 mb-2">⚠️ Yasal Bilgilendirme</h4>
                <p className="text-gray-700 text-sm">
                  Bu içerik bilgilendirme amacıyla hazırlanmıştır. Tanı ve tedavi yerine geçmez. Ayak sağlığınızla ilgili kararlar için mutlaka bir podolog veya ilgili sağlık uzmanına danışınız.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Batık Tırnak Sorununuz mu Var?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Modern ve acısız çözümler için Medipodo'yu arayın
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${siteInfo.phoneLink}`}>
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                  <Phone className="mr-2" size={20} />
                  {siteInfo.phone}
                </Button>
              </a>
              <Link to="/iletisim">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                  Randevu Al
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BSBantBlog;
