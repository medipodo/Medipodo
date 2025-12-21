import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, AlertTriangle, CheckCircle, ChevronRight, Info } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';

const TirnakNedenUzamazBlog = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ayak tırnakları neden el tırnaklarından daha yavaş uzar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ayak tırnakları, el tırnaklarına göre daha az kanlanan ve daha düşük sıcaklıkta kalan bölgelerde bulunduğu için daha yavaş uzar. Ayak tırnağının tamamen yenilenmesi genellikle 12–18 ay sürer."
        }
      },
      {
        "@type": "Question",
        "name": "Ayak tırnağının uzamaması neyin belirtisidir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ayak tırnağının uzamaması; tırnak kökü (matriks) hasarı, kronik ayakkabı baskısı, tırnak mantarı, dolaşım bozuklukları veya sistemik hastalıkların belirtisi olabilir. Podolojik değerlendirme ile nedeni netleştirilir."
        }
      },
      {
        "@type": "Question",
        "name": "Tırnak mantarı tırnağın uzamasını durdurur mu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet. Tırnak mantarı, tırnağın kalınlaşmasına ve yatağından ayrılmasına neden olarak sağlıklı uzamayı engeller. Tedavi sonrası sağlıklı tırnağın tamamen uzaması ayak tırnaklarında 6 ila 18 ay sürebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Uzaması duran ayak tırnağı tekrar düzelir mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eğer tırnak uzamasının durmasına neden olan durum kalıcı matriks hasarı değilse, tırnak zamanla yeniden sağlıklı şekilde uzayabilir. Kalıcı hasar varsa düzenli podolojik bakım ile kontrol altına alınabilir."
        }
      },
      {
        "@type": "Question",
        "name": "Tırnak uzamasını hızlandırmak mümkün mü?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tırnak uzamasını doğrudan hızlandırmak her zaman mümkün değildir; ancak düzenli medikal ayak bakımı, tırnak kökü masajı, doğru ayakkabı seçimi ve altta yatan problemin tedavisiyle sağlıklı uzama desteklenebilir."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Tırnak Neden Uzamaz? Podolog Gözüyle Detaylı İnceleme | Medipodo</title>
        <meta name="description" content="Ayak tırnağı neden uzamaz? Matriks hasarı, tırnak mantarı, dolaşım bozuklukları ve beslenme eksikliklerinin tırnak uzamasına etkisi. Podolojik çözümler ve tavsiyeler." />
        <link rel="canonical" href="https://medipodo.com/blog/tirnak-neden-uzamaz" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <Link to="/" className="hover:text-blue-700">Ana Sayfa</Link>
              <ChevronRight size={16} className="mx-2" />
              <Link to="/blog" className="hover:text-blue-700">Blog</Link>
              <ChevronRight size={16} className="mx-2" />
              <span className="text-gray-900">Tırnak Neden Uzamaz</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-8 pb-4 bg-white">
          <div className="container mx-auto px-4">
            <Link to="/blog">
              <Button variant="ghost" className="mb-6 text-blue-700">
                <ArrowLeft className="mr-2" size={18} />
                Blog'a Dön
              </Button>
            </Link>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-blue-100 text-blue-700">Tırnak Sağlığı</Badge>
                <Badge className="bg-blue-100 text-blue-700">Podoloji</Badge>
                <Badge className="bg-blue-100 text-blue-700">Ayak Bakımı</Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 mb-6 leading-tight">
                Tırnak Neden Uzamaz? Podolog Gözüyle Matriks Hasarından Mantara Kadar Detaylı İnceleme
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
                <div className="flex items-center">
                  <User size={18} className="mr-2" />
                  <span>Podolog Serdar Ceylan</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2" />
                  <span>21 Aralık 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock size={18} className="mr-2" />
                  <span>12 dk okuma süresi</span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/blog/tirnak-neden-uzamaz/blog-kapak-tirnak-neden-uzamaz.jpg" 
                  alt="Tırnak neden uzamaz - ayak tırnağı uzama problemleri ve podolojik çözümler"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <article className="pt-6 pb-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Giriş */}
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Tırnaklar yalnızca estetik bir detay değildir; vücudun genel sağlık durumu hakkında önemli ipuçları verir. 
                Özellikle ayak tırnaklarında uzamanın yavaşlaması ya da tamamen durması, çoğu zaman göz ardı edilir. 
                Oysa bu durum, podolojik açıdan değerlendirilmesi gereken önemli bir bulgudur.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                <p className="text-gray-800 leading-relaxed mb-0">
                  <strong className="text-blue-900">Kısaca:</strong> Ayak tırnağı normalden belirgin şekilde yavaş uzuyorsa, 
                  bunun altında genellikle tırnak kökü (matriks), dolaşım, enfeksiyon veya kronik travma gibi nedenler yatar.
                </p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                <strong>Medipodo Ayak Sağlığı Merkezi</strong> olarak Ankara Bağlıca'da, tırnak uzama problemlerini podolojik bakış açısıyla 
                değerlendiriyor ve nedenine yönelik profesyonel çözümler sunuyoruz.
              </p>

              {/* Kısa Tırnaklar Görseli */}
              <div className="mb-12">
                <img 
                  src="/images/blog/tirnak-neden-uzamaz/kisa-tirnaklar.jpg" 
                  alt="Kısa ve uzamayan ayak tırnakları örneği"
                  className="rounded-lg shadow-md w-full max-w-2xl mx-auto"
                />
              </div>

              {/* Ayak Tırnakları Ne Kadar Sürede Uzar */}
              <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">
                Ayak Tırnakları Ne Kadar Sürede Uzar?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">El Tırnakları</h3>
                    <p className="text-3xl font-bold text-blue-700 mb-2">~3 mm/ay</p>
                    <p className="text-gray-600">Ortalama aylık uzama hızı</p>
                  </CardContent>
                </Card>
                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Ayak Tırnakları</h3>
                    <p className="text-3xl font-bold text-blue-700 mb-2">~1 mm/ay</p>
                    <p className="text-gray-600">Ortalama aylık uzama hızı</p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                Ayak tırnağının tamamen yenilenmesi <strong>12–18 ay</strong> sürebilir. Bu doğal hızın kalıcı şekilde düşmesi, 
                tırnak üretim merkezinde (matriks) veya tırnak yatağında bir sorun olduğuna işaret eder.
              </p>

              {/* Podolojik Açıdan Nedenler */}
              <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">
                Podolojik Açıdan Tırnak Uzamamasının Nedenleri
              </h2>

              {/* Neden 1 - Lokal Travmalar */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  1. Lokal Travmalar ve Matriks Hasarı
                </h3>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded-r-lg">
                  <p className="text-gray-800">
                    <strong className="text-amber-800">Kısaca:</strong> Tırnağın üretim merkezi olan matriks zarar görürse, 
                    tırnak ya çok yavaş uzar ya da hiç uzamaz.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-blue-800 mb-3">Tekrarlayan Mikro Travmalar (Ayakkabı Baskısı)</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dar, sert veya ucu sivri ayakkabılar; özellikle başparmak tırnağı üzerinde sürekli baskı oluşturur. 
                  Bu baskı zamanla matriks hücrelerini yıpratır. <strong>Sporcularda</strong> ve <strong>uzun süre ayakta çalışanlarda</strong> sık görülür.
                </p>

                <h4 className="text-xl font-semibold text-blue-800 mb-3">Akut Travmalar</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tırnağa alınan şiddetli darbeler (ezilme, düşme, çarpma) matriksi aniden hasarlayabilir. 
                  Travma sonrası tırnak düşse bile, yeni çıkan tırnak kalıcı olarak deforme ve yavaş uzayan bir yapıda olabilir.
                </p>

                <h4 className="text-xl font-semibold text-blue-800 mb-3">Yanlış Tırnak Kesimi ve Hatalı Pedikür</h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Tırnakların aşırı kısa kesilmesi veya kenarların derin temizlenmesi; tırnak yatağına zarar verir, 
                  <Link to="/blog/tirnakbatmasi" className="text-blue-700 font-semibold hover:underline"> batık tırnak</Link> riskini artırır ve uzamayı yavaşlatır.
                </p>

                <img 
                  src="/images/blog/tirnak-neden-uzamaz/dogru-tirnak-kesimi.jpg" 
                  alt="Doğru tırnak kesimi tekniği"
                  className="rounded-lg shadow-md w-full max-w-2xl mx-auto mb-4"
                />
              </div>

              {/* Neden 2 - Enfeksiyonlar */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  2. Tırnak Enfeksiyonları ve Deformiteler (Onikodistrofiler)
                </h3>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded-r-lg">
                  <p className="text-gray-800">
                    <strong className="text-amber-800">Kısaca:</strong> Tırnağın yapısı bozulduğunda, sağlıklı uzama için fiziksel alan kalmaz.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-blue-800 mb-3">Onikomikoz (Tırnak Mantarı)</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tırnak mantarı; kalınlaşma, renk değişimi ve tırnağın yatağından ayrılması (onikoliz) ile seyreder. 
                  Enfeksiyon hem tırnağın uzamasını engeller hem de matriks fonksiyonunu bozar. 
                  Podolojik bakımda tırnak özel frezelerle inceltilerek sağlıklı tırnağın uzaması için alan açılır.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <img 
                      src="/images/blog/tirnak-neden-uzamaz/tirnak-mantari-ankara.jpg" 
                      alt="Tırnak mantarı - Ankara'da podolojik tedavi"
                      className="rounded-lg shadow-md w-full"
                    />
                  </div>
                  <div>
                    <img 
                      src="/images/blog/tirnak-neden-uzamaz/tirnak-mantari2.jpg" 
                      alt="Tırnak mantarı örneği"
                      className="rounded-lg shadow-md w-full"
                    />
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-blue-800 mb-3">Onikogrifoz (Boynuz Tırnak)</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Genellikle yaşlılık, kronik travma ve dolaşım bozukluklarına bağlı olarak gelişir. 
                  Aşırı kalınlaşmış tırnak ileriye doğru uzayamaz. Düzenli podolojik inceltme ile bu engel ortadan kaldırılır.
                </p>

                <h4 className="text-xl font-semibold text-blue-800 mb-3">Psoriasis (Sedef Hastalığı)</h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Tırnak matriksini etkileyerek çukurlaşma, kalınlaşma ve uzama hızında belirgin yavaşlamaya neden olabilir.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <img 
                      src="/images/blog/tirnak-neden-uzamaz/tirnak-sedefi.jpg" 
                      alt="Tırnak sedefi örneği"
                      className="rounded-lg shadow-md w-full"
                    />
                    <p className="text-center text-sm text-gray-500 mt-2">Tırnak Sedefi</p>
                  </div>
                  <div>
                    <img 
                      src="/images/blog/tirnak-neden-uzamaz/tirnak-sedefi2.jpg" 
                      alt="Tırnak sedefi belirtileri"
                      className="rounded-lg shadow-md w-full"
                    />
                    <p className="text-center text-sm text-gray-500 mt-2">Sedef Hastalığında Tırnak Tutulumu</p>
                  </div>
                </div>
              </div>

              {/* Neden 3 - Sistemik Hastalıklar */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  3. Sistemik Hastalıklar ve Beslenme Eksiklikleri
                </h3>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded-r-lg">
                  <p className="text-gray-800">
                    <strong className="text-amber-800">Kısaca:</strong> Tırnak, vücudun genel sağlığından doğrudan etkilenir.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-blue-800 mb-3">Dolaşım Bozuklukları</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <Link to="/blog/diyabet-ve-ayak-sagligi" className="text-blue-700 font-semibold hover:underline">Diyabet</Link> ve 
                  periferik damar hastalıklarında ayaklara giden kan azalır. Bu durum, matrikse yeterli oksijen ve besin ulaşmasını engeller.
                </p>

                <img 
                  src="/images/blog/tirnak-neden-uzamaz/dolasim-bozuklugu.jpg" 
                  alt="Dolaşım bozukluğu ve tırnak sağlığı"
                  className="rounded-lg shadow-md w-full max-w-2xl mx-auto mb-6"
                />

                <h4 className="text-xl font-semibold text-blue-800 mb-3">Tiroid Hastalıkları</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tiroid hormonları metabolizma hızını etkiler. Düzensizlikler tırnak uzamasını yavaşlatır ve kırılganlığa neden olur.
                </p>

                <img 
                  src="/images/blog/tirnak-neden-uzamaz/troit.hastaligi.jpg" 
                  alt="Tiroid hastalıkları ve tırnak problemleri"
                  className="rounded-lg shadow-md w-full max-w-2xl mx-auto mb-6"
                />

                <h4 className="text-xl font-semibold text-blue-800 mb-3">Vitamin ve Mineral Eksiklikleri</h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Biotin (B7)</strong>, <strong>demir</strong>, <strong>çinko</strong> ve <strong>protein</strong> eksiklikleri 
                  tırnak üretimini olumsuz etkiler. Kansızlıkta tırnak uzaması belirgin şekilde yavaşlayabilir.
                </p>

                <img 
                  src="/images/blog/tirnak-neden-uzamaz/biotin-hang-yiyeceklerde-var.jpg" 
                  alt="Biotin içeren yiyecekler - tırnak sağlığı için beslenme"
                  className="rounded-lg shadow-md w-full max-w-2xl mx-auto mb-4"
                />
                <p className="text-center text-sm text-gray-500 mb-6">Biotin (B7 Vitamini) İçeren Besinler</p>

                <h4 className="text-xl font-semibold text-blue-800 mb-3">İlaç Yan Etkileri</h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Kemoterapi ilaçları, bazı antibiyotikler ve retinoidler tırnak büyümesini olumsuz etkileyebilir.
                </p>

                <img 
                  src="/images/blog/tirnak-neden-uzamaz/ilac-yan-etkileri.jpg" 
                  alt="İlaç yan etkileri ve tırnak sağlığı"
                  className="rounded-lg shadow-md w-full max-w-2xl mx-auto mb-6"
                />
              </div>

              {/* Tırnak Yeme */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  4. Tırnak Yeme Alışkanlığı (Onikofaji)
                </h3>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Sürekli tırnak yeme, tırnak kökünde (matriks) kalıcı hasara yol açabilir ve tırnağın düzgün uzamasını engelleyebilir.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <img 
                      src="/images/blog/tirnak-neden-uzamaz/tirnak-yeme.jpg" 
                      alt="Tırnak yeme alışkanlığı"
                      className="rounded-lg shadow-md w-full"
                    />
                  </div>
                  <div>
                    <img 
                      src="/images/blog/tirnak-neden-uzamaz/tirnak-yeme-aliskanligi.jpg" 
                      alt="Tırnak yeme sonucu oluşan hasar"
                      className="rounded-lg shadow-md w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Podolojik Yaklaşım */}
              <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">
                Podolog Olarak Yaklaşımımız
              </h2>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Medipodo Ayak Sağlığı Merkezi</strong> olarak, tırnak uzama problemlerini multidisipliner bir yaklaşımla değerlendiriyoruz:
                </p>
                
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Detaylı tırnak ve ayak muayenesi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Matriks hasarı değerlendirmesi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Mantar enfeksiyonu taraması</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Sistemik faktörlerin belirlenmesi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Kişiye özel tedavi planı oluşturma</span>
                  </li>
                </ul>
              </div>

              {/* Tavsiyeler */}
              <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">
                Tırnak Uzamasını Desteklemek İçin Podolojik Tavsiyeler
              </h2>

              <div className="space-y-6 mb-12">
                <Card className="border-blue-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">🔹 1. Düzenli Medikal Ayak Bakımı</h3>
                    <p className="text-gray-700 leading-relaxed">
                      3–4 haftada bir yapılan profesyonel bakım, tırnağın önündeki fiziksel engelleri ortadan kaldırır.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">🔹 2. Tırnak Kökü Masajı</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Matriks bölgesine yapılan nazik masaj, kan dolaşımını artırarak tırnak üretimini destekler.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">🔹 3. Nemlendirme ve Bakım Ürünleri</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Tırnak ve çevresinin nemli kalması, kırılmayı önler ve sağlıklı uzamayı destekler.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">🔹 4. Doğru Ayakkabı Seçimi</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Geniş burunlu, parmakları sıkıştırmayan ayakkabılar mikro travmaları önler.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* SSS */}
              <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">
                Sık Sorulan Sorular
              </h2>

              <div className="space-y-4 mb-12">
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Ayak tırnakları neden el tırnaklarından yavaş uzar?</h3>
                    <p className="text-gray-700">
                      Ayaklar daha soğuk ve daha az kanlanan bölgeler olduğu için uzama hızı düşüktür.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Tırnak mantarı geçince tırnak hemen uzar mı?</h3>
                    <p className="text-gray-700">
                      Hayır. Sağlıklı tırnağın tamamen gelmesi ayak tırnağında 6–18 ay sürebilir.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Uzaması duran tırnak tamamen düzelir mi?</h3>
                    <p className="text-gray-700">
                      Matriks kalıcı hasar almadıysa büyük ölçüde düzelebilir. Kalıcı hasarda düzenli bakım ile kontrol sağlanır.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Tırnak uzamasını hızlandırmak mümkün mü?</h3>
                    <p className="text-gray-700">
                      Doğrudan hızlandırmak her zaman mümkün değildir; ancak düzenli bakım, doğru beslenme ve 
                      altta yatan problemin tedavisiyle sağlıklı uzama desteklenebilir.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Ne Zaman Podoloğa Başvurmalı */}
              <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">
                Ne Zaman Podoloğa Başvurmalısınız?
              </h2>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertTriangle size={20} className="text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Tırnağınız 3–4 aydır hiç uzamıyorsa</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle size={20} className="text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Kalınlaşma, renk değişimi veya şekil bozukluğu varsa</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle size={20} className="text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Diyabet veya dolaşım probleminiz bulunuyorsa</span>
                  </li>
                </ul>
                <p className="mt-4 text-red-800 font-semibold">
                  Bu durumlar basit bir estetik sorun değil, podolojik bir problemin işareti olabilir.
                </p>
              </div>

              {/* Tıbbi Bilgilendirme */}
              <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 mb-8">
                <div className="flex items-start">
                  <Info size={24} className="text-gray-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">⚠️ Tıbbi Bilgilendirme</h4>
                    <p className="text-gray-600">
                      Bu içerik bilgilendirme amaçlıdır; tanı ve tedavi yerine geçmez. 
                      Sağlıkla ilgili kararlarınız için mutlaka hekiminize veya podoloğunuza danışınız.
                    </p>
                  </div>
                </div>
              </div>

              {/* Lokal CTA */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  Ankara Bağlıca'da Podolog Desteği Almak İçin
                </h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  <Link to="/blog/baglica-podolog-hizmetleri" className="text-white font-semibold underline hover:text-blue-200">
                    Medipodo Ayak Sağlığı Merkezi
                  </Link>'nden randevu alabilirsiniz. 
                  Tırnak uzama problemleri, tırnak mantarı, batık tırnak ve diğer ayak sağlığı sorunlarında 
                  kişiye özel podolojik çözümler sunuyoruz.
                </p>
                <Link to="/iletisim">
                  <Button className="bg-white text-blue-900 hover:bg-blue-50">
                    Randevu Al
                    <ChevronRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </div>

              {/* İlgili Makaleler */}
              <h3 className="text-2xl font-bold text-blue-950 mb-6">İlgili Makaleler</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/blog/tirnak-neden-kalinlasir" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <ChevronRight size={20} className="text-blue-600 mr-3" />
                  <span className="text-gray-700 hover:text-blue-700">Tırnak Neden Kalınlaşır?</span>
                </Link>
                <Link to="/blog/tirnakbatmasi" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <ChevronRight size={20} className="text-blue-600 mr-3" />
                  <span className="text-gray-700 hover:text-blue-700">Tırnak Batması Neden Olur?</span>
                </Link>
                <Link to="/blog/diyabet-ve-ayak-sagligi" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <ChevronRight size={20} className="text-blue-600 mr-3" />
                  <span className="text-gray-700 hover:text-blue-700">Diyabet ve Ayak Sağlığı</span>
                </Link>
                <Link to="/blog/baglica-podolog-hizmetleri" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <ChevronRight size={20} className="text-blue-600 mr-3" />
                  <span className="text-gray-700 hover:text-blue-700">Medikal Ayak Bakımı Hizmeti</span>
                </Link>
              </div>

            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default TirnakNedenUzamazBlog;
