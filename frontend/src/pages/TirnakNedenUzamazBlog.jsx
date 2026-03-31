import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, AlertTriangle, CheckCircle, ChevronRight, Info, Activity, Droplets, Pill, Heart } from 'lucide-react';
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
        <title>Tırnak Neden Uzamaz? Podolog Gözüyle Detaylı İnceleme | Medipodo Ankara</title>
        <meta name="description" content="Ayak tırnağı neden uzamaz? Matriks hasarı, tırnak mantarı, ayakkabı baskısı, dolaşım bozuklukları ve beslenme eksikliklerinin tırnak uzamasına etkisi. Ankara Bağlıca'da podolojik çözümler." />
        <meta name="keywords" content="tırnak neden uzamaz, ayak tırnağı uzaması, matriks hasarı, tırnak mantarı, podolog ankara, medikal ayak bakımı, tırnak sağlığı" />
        <link rel="canonical" href="https://medipodo.com/blog/tirnak-neden-uzamaz" />
        
        {/* Open Graph Meta Tags - WhatsApp, Facebook, LinkedIn önizlemesi için */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Tırnak Neden Uzamaz? Podolog Gözüyle Detaylı İnceleme" />
        <meta property="og:description" content="Ayak tırnağı neden uzamaz? Matriks hasarı, tırnak mantarı, ayakkabı baskısı ve dolaşım bozukluklarının tırnak uzamasına etkisi. Podolojik çözümler." />
        <meta property="og:image" content="https://medipodo.com/images/blog/tirnak-neden-uzamaz/güncel-kapak-görseli-tirnak-uzamamasi.webp" />
        <meta property="og:url" content="https://medipodo.com/blog/tirnak-neden-uzamaz" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tırnak Neden Uzamaz? Podolog Gözüyle Detaylı İnceleme" />
        <meta name="twitter:description" content="Ayak tırnağı neden uzamaz? Matriks hasarı, tırnak mantarı, ayakkabı baskısı ve dolaşım bozukluklarının etkisi." />
        <meta name="twitter:image" content="https://medipodo.com/images/blog/tirnak-neden-uzamaz/güncel-kapak-görseli-tirnak-uzamamasi.webp" />
        
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
                <Badge className="bg-blue-100 text-blue-700">Medikal Ayak Bakımı</Badge>
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
                  <span>15 dk okuma süresi</span>
                </div>
              </div>

              {/* Hero Image - Güncel Kapak Görseli */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/blog/tirnak-neden-uzamaz/güncel-kapak-görseli-tirnak-uzamamasi.webp" 
                  alt="Tırnak neden uzamaz - ayak tırnağı uzama problemleri ve podolojik çözümler Ankara"
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
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
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
                <Link to="/blog/baglica-podolog-hizmetleri" className="text-blue-700 font-semibold hover:underline">Medipodo Ayak Sağlığı Merkezi</Link> olarak 
                Ankara Bağlıca'da, tırnak uzama problemlerini podolojik bakış açısıyla değerlendiriyor ve nedenine yönelik profesyonel çözümler sunuyoruz.
              </p>

              {/* Kısa Tırnaklar Görseli */}
              <div className="mb-12">
                <img 
                  src="/images/blog/tirnak-neden-uzamaz/kisa-tirnaklar.jpg" 
                  alt="Kısa ve uzamayan ayak tırnakları örneği - podolojik değerlendirme gerektiren durum"
                  className="rounded-lg shadow-md w-full max-w-2xl mx-auto"
                />
                <p className="text-center text-sm text-gray-500 mt-2">Uzamayan tırnaklar podolojik değerlendirme gerektirir</p>
              </div>

              {/* Ayak Tırnakları Ne Kadar Sürede Uzar */}
              <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">
                Ayak Tırnakları Ne Kadar Sürede Uzar?
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Tırnak uzama hızı, yaş, genetik faktörler, beslenme durumu ve genel sağlık koşullarına bağlı olarak kişiden kişiye değişir. 
                Ancak genel kabul görmüş ortalama değerler şöyledir:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">El Tırnakları</h3>
                    <p className="text-3xl font-bold text-blue-700 mb-2">~3 mm/ay</p>
                    <p className="text-gray-600">Ortalama aylık uzama hızı</p>
                    <p className="text-sm text-gray-500 mt-2">Tam yenilenme: 4-6 ay</p>
                  </CardContent>
                </Card>
                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Ayak Tırnakları</h3>
                    <p className="text-3xl font-bold text-blue-700 mb-2">~1 mm/ay</p>
                    <p className="text-gray-600">Ortalama aylık uzama hızı</p>
                    <p className="text-sm text-gray-500 mt-2">Tam yenilenme: 12-18 ay</p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                Ayak tırnağının tamamen yenilenmesi <strong>12–18 ay</strong> sürebilir. Bu doğal hızın kalıcı şekilde düşmesi, 
                tırnak üretim merkezinde (matriks) veya tırnak yatağında bir sorun olduğuna işaret eder. 
                Bu nedenle tırnak uzamasında belirgin bir yavaşlama fark edildiğinde, 
                <Link to="/hizmet/ayak-bakimi" className="text-blue-700 font-semibold hover:underline"> medikal ayak bakımı</Link> ile 
                profesyonel değerlendirme yapılması önerilir.
              </p>

              {/* Podolojik Açıdan Nedenler */}
              <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">
                Podolojik Açıdan Tırnak Uzamamasının Nedenleri
              </h2>

              <p className="text-gray-700 leading-relaxed mb-8">
                Tırnak uzamasının yavaşlaması veya durması, tek bir nedene bağlı olmayabilir. Podolojik değerlendirmede 
                birden fazla faktör göz önünde bulundurulur. İşte en sık karşılaşılan nedenler:
              </p>

              {/* ==================== NEDEN 1 - LOKAL TRAVMALAR ==================== */}
              <div className="mb-12 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">1</div>
                  <h3 className="text-2xl font-bold text-blue-900">
                    Lokal Travmalar ve Matriks Hasarı
                  </h3>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded-r-lg">
                  <p className="text-gray-800">
                    <strong className="text-amber-800">Kısaca:</strong> Tırnağın üretim merkezi olan matriks zarar görürse, 
                    tırnak ya çok yavaş uzar ya da hiç uzamaz.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Tırnak matriksi, tırnak plakasının üretildiği canlı doku bölgesidir. Bu bölge tırnak kökünün hemen altında yer alır 
                  ve herhangi bir hasar, tırnağın yapısını, kalınlığını ve uzama hızını doğrudan etkiler. 
                  Matriks hasarı hem akut (ani) hem de kronik (tekrarlayan) travmalardan kaynaklanabilir.
                </p>

                {/* Alt Başlık: Tekrarlayan Mikro Travmalar */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                    <Activity size={20} className="mr-2 text-blue-600" />
                    Tekrarlayan Mikro Travmalar (Ayakkabı Baskısı)
                  </h4>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Dar, sert veya ucu sivri ayakkabılar; özellikle başparmak tırnağı üzerinde sürekli baskı oluşturur. 
                    Bu baskı zamanla matriks hücrelerini yıpratır ve tırnak dokusunun sağlıklı üretilmesini engeller.
                  </p>

                  <div className="bg-white rounded-lg p-6 mb-6 shadow-sm border border-gray-100">
                    <h5 className="font-semibold text-gray-800 mb-3">Mikro travmaların tırnak üzerindeki etkileri:</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Matriks hücrelerinin yıpranması:</strong> Sürekli basınç, tırnak üreten hücrelerin işlevini bozar</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Tırnak yatağında inflamasyon:</strong> Kronik irritasyon, tırnak-yatak bağlantısını zayıflatır</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Kan dolaşımının bozulması:</strong> Sürekli baskı, parmak ucuna giden kan akışını azaltır</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Tırnak deformasyonları:</strong> Uzun vadede <Link to="/blog/tirnak-neden-kalinlasir" className="text-blue-700 font-semibold hover:underline">tırnak kalınlaşması</Link> ve şekil bozuklukları gelişebilir</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <p className="font-semibold text-blue-900 mb-3">📌 Risk Altındaki Gruplar:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700">
                      <span className="bg-white px-3 py-1 rounded text-sm">Sporcular</span>
                      <span className="bg-white px-3 py-1 rounded text-sm">Sağlık çalışanları</span>
                      <span className="bg-white px-3 py-1 rounded text-sm">Asker-Polis</span>
                      <span className="bg-white px-3 py-1 rounded text-sm">Garsonlar</span>
                      <span className="bg-white px-3 py-1 rounded text-sm">Öğretmenler</span>
                      <span className="bg-white px-3 py-1 rounded text-sm">Fabrika işçileri</span>
                    </div>
                  </div>

                  {/* Ayakkabı Baskısı Görseli */}
                  <img 
                    src="/images/blog/tirnak-neden-uzamaz/ayakkabi-baskisi.png" 
                    alt="Dar ayakkabının ayak tırnağına yaptığı baskı ve mikro travma etkisi"
                    className="rounded-lg shadow-md w-full max-w-2xl mx-auto mb-4"
                  />
                  <p className="text-center text-sm text-gray-500 mb-6">Dar ayakkabıların tırnak matriksine yaptığı kronik baskı</p>
                </div>

                {/* Alt Başlık: Akut Travmalar */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                    <AlertTriangle size={20} className="mr-2 text-red-500" />
                    Akut Travmalar (Ani Darbeler)
                  </h4>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Tırnağa alınan şiddetli darbeler (ezilme, düşme, çarpma) matriksi aniden hasarlayabilir. 
                    Travma sonrası tırnak düşse bile, yeni çıkan tırnak kalıcı olarak deforme ve yavaş uzayan bir yapıda olabilir.
                  </p>

                  <div className="bg-white rounded-lg p-6 mb-6 shadow-sm border border-gray-100">
                    <h5 className="font-semibold text-gray-800 mb-3">Akut travma türleri ve sonuçları:</h5>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">⚠️</span>
                        <div>
                          <strong>Ezilme yaralanmaları:</strong> Ağır cisim düşmesi, kapıya parmak sıkışması gibi durumlar. 
                          Matriks hücrelerinin %30-70'i hasar görebilir.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">⚠️</span>
                        <div>
                          <strong>Spor yaralanmaları:</strong> Futbol, basketbol gibi sporlarda topa veya rakibe çarpma. 
                          Subungual hematom (tırnak altı kanama) oluşabilir.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">⚠️</span>
                        <div>
                          <strong>Düşme ve çarpma:</strong> Mobilyaya çarpma, merdivenden düşme gibi ev kazaları. 
                          Tırnak plakası tamamen kopabilir.
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">⚠️</span>
                        <div>
                          <strong>İş kazaları:</strong> Ağır ekipman, makine parçaları ile temas. 
                          Kalıcı matriks hasarı riski yüksektir.
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
                    <p className="text-gray-800">
                      <strong className="text-red-700">Önemli:</strong> Akut travma sonrası tırnak düşse bile, 
                      matriks hasar almışsa yeni çıkan tırnak kalıcı olarak deforme olabilir. Bu nedenle ciddi travmalardan sonra 
                      <Link to="/iletisim" className="text-blue-700 font-semibold hover:underline"> podolojik değerlendirme</Link> önerilir.
                    </p>
                  </div>

                  {/* Akut Travma Görseli */}
                  <img 
                    src="/images/blog/tirnak-neden-uzamaz/ayak-akut-travma.png" 
                    alt="Ayak tırnağında akut travma - ezilme ve darbe sonucu oluşan hasar"
                    className="rounded-lg shadow-md w-full max-w-2xl mx-auto mb-4"
                  />
                  <p className="text-center text-sm text-gray-500 mb-6">Akut travma sonucu oluşan tırnak hasarı</p>
                </div>

                {/* Alt Başlık: Yanlış Tırnak Kesimi */}
                <div>
                  <h4 className="text-xl font-semibold text-blue-800 mb-4">
                    Yanlış Tırnak Kesimi ve Hatalı Pedikür
                  </h4>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Tırnakların aşırı kısa kesilmesi veya kenarların derin temizlenmesi; tırnak yatağına zarar verir, 
                    <Link to="/blog/tirnakbatmasi" className="text-blue-700 font-semibold hover:underline"> batık tırnak</Link> riskini artırır ve uzamayı yavaşlatır.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-red-50 rounded-lg p-4">
                      <h5 className="font-semibold text-red-800 mb-2">❌ Yanlış Uygulamalar</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Tırnağı çok kısa kesmek</li>
                        <li>• Köşeleri oval şekilde yuvarlamak</li>
                        <li>• Tırnak etlerini koparmak</li>
                        <li>• Keskin olmayan makasla kesmek</li>
                        <li>• Steril olmayan aletler kullanmak</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h5 className="font-semibold text-green-800 mb-2">✅ Doğru Uygulamalar</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Düz çizgi şeklinde kesmek</li>
                        <li>• Parmak ucuyla aynı hizada bırakmak</li>
                        <li>• Köşeleri hafifçe törpülemek</li>
                        <li>• Keskin, steril aletler kullanmak</li>
                        <li>• Banyo sonrası yumuşakken kesmek</li>
                      </ul>
                    </div>
                  </div>

                  <img 
                    src="/images/blog/tirnak-neden-uzamaz/dogru-tirnak-kesimi.jpg" 
                    alt="Doğru ve yanlış tırnak kesimi tekniği karşılaştırması"
                    className="rounded-lg shadow-md w-full max-w-2xl mx-auto mb-4"
                  />
                  <p className="text-center text-sm text-gray-500">Doğru tırnak kesimi tekniği - batık tırnak ve matriks hasarını önler</p>
                </div>
              </div>

              {/* ==================== NEDEN 2 - ENFEKSİYONLAR ==================== */}
              <div className="mb-12 bg-gradient-to-br from-gray-50 to-red-50 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">2</div>
                  <h3 className="text-2xl font-bold text-blue-900">
                    Tırnak Enfeksiyonları ve Deformiteler (Onikodistrofiler)
                  </h3>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded-r-lg">
                  <p className="text-gray-800">
                    <strong className="text-amber-800">Kısaca:</strong> Tırnağın yapısı bozulduğunda, sağlıklı uzama için fiziksel alan kalmaz.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Tırnak enfeksiyonları ve yapısal bozukluklar, tırnak plakasının normal üretimini ve uzamasını ciddi şekilde etkiler. 
                  Bu durumlar tedavi edilmediğinde kalıcı hasara yol açabilir.
                </p>

                {/* Onikomikoz */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-blue-800 mb-4">
                    Onikomikoz (Tırnak Mantarı)
                  </h4>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <Link to="/hizmet/tirnak-mantari" className="text-blue-700 font-semibold hover:underline">Tırnak mantarı</Link>, 
                    dermatofit mantarların tırnak plakasını enfekte etmesiyle oluşur. Enfeksiyon hem tırnağın uzamasını engeller 
                    hem de matriks fonksiyonunu bozar.
                  </p>

                  <div className="bg-white rounded-lg p-6 mb-6 shadow-sm border border-gray-100">
                    <h5 className="font-semibold text-gray-800 mb-3">Tırnak mantarının uzamayı engelleyen etkileri:</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                        <span><strong>Tırnak kalınlaşması:</strong> Mantar, tırnak plakasının anormal kalınlaşmasına neden olarak ileriye doğru büyümeyi engeller</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                        <span><strong>Onikoliz:</strong> Tırnağın yatağından ayrılması, beslenme ve uzama sürecini sekteye uğratır</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                        <span><strong>Matriks infiltrasyonu:</strong> Mantar, tırnak köküne kadar ilerleyerek üretim merkezini bozar</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={18} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                        <span><strong>Tırnak altı birikinti:</strong> Keratin ve mantar artıkları birikir, tırnağın yatakla temasını bozar</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Podolojik bakımda tırnak özel frezelerle inceltilerek sağlıklı tırnağın uzaması için alan açılır. 
                    <Link to="/blog/baglica-podolog-hizmetleri" className="text-blue-700 font-semibold hover:underline"> Medikal ayak bakımı</Link> ile 
                    düzenli takip, tedavinin başarısını önemli ölçüde artırır.
                  </p>

                  <div className="mb-6">
                    <img 
                      src="/images/blog/tirnak-neden-uzamaz/tirnak-mantari-ankara.jpg" 
                      alt="Tırnak mantarı tedavisi - Ankara Bağlıca podolog"
                      className="rounded-lg shadow-md w-full max-w-2xl mx-auto"
                    />
                    <p className="text-center text-sm text-gray-500 mt-2">Tırnak mantarı - Podolojik tedavi öncesi</p>
                  </div>
                </div>

                {/* Onikogrifoz */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-blue-800 mb-4">
                    Onikogrifoz (Boynuz Tırnak)
                  </h4>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Genellikle yaşlılık, kronik travma ve dolaşım bozukluklarına bağlı olarak gelişir. 
                    Tırnak aşırı kalınlaşır, kıvrılır ve boynuz benzeri bir görünüm alır.
                  </p>

                  <div className="bg-white rounded-lg p-6 mb-6 shadow-sm border border-gray-100">
                    <h5 className="font-semibold text-gray-800 mb-3">Onikogrifozun tırnak uzamasına etkileri:</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Aşırı kalınlaşmış tırnak ileriye doğru uzayamaz</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Tırnak plakası deformasyonu, normal büyüme yönünü bozar</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Düzenli podolojik inceltme ile bu engel ortadan kaldırılır</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <img 
                      src="/images/blog/tirnak-neden-uzamaz/onikogrifoz.jpg" 
                      alt="Onikogrifoz (Boynuz Tırnak) örneği - kalınlaşmış ve kıvrılmış tırnak"
                      className="rounded-lg shadow-md w-full max-w-2xl mx-auto"
                    />
                    <p className="text-center text-sm text-gray-500 mt-2">Onikogrifoz - Boynuz benzeri kalınlaşmış tırnak</p>
                  </div>
                </div>

                {/* Psoriasis */}
                <div>
                  <h4 className="text-xl font-semibold text-blue-800 mb-4">
                    Psoriasis (Sedef Hastalığı)
                  </h4>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Sedef hastalığı, otoimmün bir cilt hastalığı olup tırnakları da etkileyebilir. 
                    Tırnak matriksindeki inflamasyon, çukurlaşma, kalınlaşma ve uzama hızında belirgin yavaşlamaya neden olabilir.
                  </p>

                  <div className="bg-white rounded-lg p-6 mb-6 shadow-sm border border-gray-100">
                    <h5 className="font-semibold text-gray-800 mb-3">Tırnak sedefinin karakteristik bulguları:</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Pitting:</strong> Tırnak yüzeyinde nokta şeklinde çukurcuklar</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Yağ damlası belirtisi:</strong> Tırnak yatağında sarımsı-kahverengi lekeler</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Subungual hiperkeratoz:</strong> Tırnak altında aşırı keratin birikimi</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Onikoliz:</strong> Tırnağın yatağından ayrılması</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <img 
                      src="/images/blog/tirnak-neden-uzamaz/tirnak-sedefi2.jpg" 
                      alt="Sedef hastalığında tırnak tutulumu"
                      className="rounded-lg shadow-md w-full max-w-2xl mx-auto"
                    />
                    <p className="text-center text-sm text-gray-500 mt-2">Sedef Hastalığında Tırnak Tutulumu</p>
                  </div>
                </div>
              </div>

              {/* ==================== NEDEN 3 - SİSTEMİK HASTALIKLAR ==================== */}
              <div className="mb-12 bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">3</div>
                  <h3 className="text-2xl font-bold text-blue-900">
                    Sistemik Hastalıklar ve Beslenme Eksiklikleri
                  </h3>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded-r-lg">
                  <p className="text-gray-800">
                    <strong className="text-amber-800">Kısaca:</strong> Tırnak, vücudun genel sağlığından doğrudan etkilenir. 
                    Sistemik hastalıklar ve beslenme bozuklukları, tırnak büyümesini yavaşlatabilir.
                  </p>
                </div>

                {/* Dolaşım Bozuklukları */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                    <Heart size={20} className="mr-2 text-red-500" />
                    Dolaşım Bozuklukları
                  </h4>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <Link to="/blog/diyabet-ve-ayak-sagligi" className="text-blue-700 font-semibold hover:underline">Diyabet</Link> ve 
                    periferik arter hastalığı (PAH) gibi durumlarda ayaklara giden kan akışı azalır. Bu durum, matrikse yeterli oksijen 
                    ve besin maddesi ulaşmasını engeller.
                  </p>

                  <div className="bg-white rounded-lg p-6 mb-6 shadow-sm border border-gray-100">
                    <h5 className="font-semibold text-gray-800 mb-3">Dolaşım bozukluğunun tırnak üzerindeki etkileri:</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span><strong>Yetersiz oksijen:</strong> Matriks hücreleri yeterli oksijen alamaz, tırnak üretimi yavaşlar</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span><strong>Besin eksikliği:</strong> Protein, vitamin ve mineraller tırnağa ulaşamaz</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span><strong>Yavaş yara iyileşmesi:</strong> Tırnak çevresindeki hasarlar geç iyileşir</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span><strong>Tırnak kırılganlığı:</strong> Zayıf, kolay kırılan tırnaklar oluşur</span>
                      </li>
                    </ul>
                  </div>

                  <img 
                    src="/images/blog/tirnak-neden-uzamaz/dolasim-bozuklugu.jpg" 
                    alt="Dolaşım bozukluğu ve tırnak sağlığı ilişkisi"
                    className="rounded-lg shadow-md w-full max-w-2xl mx-auto mb-4"
                  />
                  <p className="text-center text-sm text-gray-500 mb-4">Dolaşım bozukluğu - Ayak ve tırnak sağlığını etkiler</p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="text-gray-700">
                      <strong className="text-blue-800">Not:</strong> Diyabetli hastalarda ayak sağlığı kritik öneme sahiptir. 
                      <Link to="/hizmet/diyabetik-ayak" className="text-blue-700 font-semibold hover:underline"> Diyabetik ayak bakımı</Link> ile 
                      düzenli takip, komplikasyonları önlemeye yardımcı olur.
                    </p>
                  </div>
                </div>

                {/* Tiroid Hastalıkları */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-blue-800 mb-4">
                    Tiroid Hastalıkları
                  </h4>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Tiroid hormonları metabolizma hızını doğrudan etkiler. Hipotiroidi (düşük tiroid) durumunda 
                    tırnak uzaması belirgin şekilde yavaşlar ve tırnaklar kırılgan hale gelir.
                  </p>

                  <div className="bg-white rounded-lg p-6 mb-6 shadow-sm border border-gray-100">
                    <h5 className="font-semibold text-gray-800 mb-3">Tiroid bozukluklarında görülen tırnak değişiklikleri:</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span><strong>Yavaş uzama:</strong> Metabolizma yavaşladığında tırnak büyümesi de yavaşlar</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span><strong>Kırılganlık:</strong> Tırnaklar kolayca kırılır ve pullanır</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span><strong>Kuruluk:</strong> Tırnak plakası mat ve kuru görünür</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span><strong>Enine çizgiler (Beau çizgileri):</strong> Hormonal dalgalanmaları yansıtan çizgiler</span>
                      </li>
                    </ul>
                  </div>

                  <img 
                    src="/images/blog/tirnak-neden-uzamaz/troit.hastaligi.jpg" 
                    alt="Tiroid hastalıkları ve tırnak problemleri ilişkisi"
                    className="rounded-lg shadow-md w-full max-w-2xl mx-auto mb-4"
                  />
                  <p className="text-center text-sm text-gray-500 mb-4">Tiroid bozukluklarının tırnak sağlığına etkileri</p>
                </div>

                {/* Vitamin ve Mineral Eksiklikleri */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                    <Droplets size={20} className="mr-2 text-green-500" />
                    Vitamin ve Mineral Eksiklikleri
                  </h4>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Tırnak sağlığı için belirli vitamin ve mineraller kritik öneme sahiptir. 
                    Bu besin maddelerinin eksikliği, tırnak üretimini ve uzamasını olumsuz etkiler.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <Card className="border-green-200">
                      <CardContent className="p-4">
                        <h5 className="font-semibold text-green-800 mb-2">Biotin (B7 Vitamini)</h5>
                        <p className="text-sm text-gray-600">Keratin üretimi için esansiyel. Eksikliğinde tırnaklar zayıf ve kırılgan olur.</p>
                      </CardContent>
                    </Card>
                    <Card className="border-green-200">
                      <CardContent className="p-4">
                        <h5 className="font-semibold text-green-800 mb-2">Demir</h5>
                        <p className="text-sm text-gray-600">Oksijen taşınması için gerekli. Kansızlıkta tırnak uzaması belirgin yavaşlar.</p>
                      </CardContent>
                    </Card>
                    <Card className="border-green-200">
                      <CardContent className="p-4">
                        <h5 className="font-semibold text-green-800 mb-2">Çinko</h5>
                        <p className="text-sm text-gray-600">Protein sentezi ve hücre bölünmesi için gerekli. Eksikliğinde beyaz lekeler oluşabilir.</p>
                      </CardContent>
                    </Card>
                    <Card className="border-green-200">
                      <CardContent className="p-4">
                        <h5 className="font-semibold text-green-800 mb-2">Protein</h5>
                        <p className="text-sm text-gray-600">Tırnağın ana yapı taşı keratindir ve protein gerektirir. Yetersiz protein, zayıf tırnağa yol açar.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <img 
                    src="/images/blog/tirnak-neden-uzamaz/biotin-hang-yiyeceklerde-var.jpg" 
                    alt="Biotin içeren yiyecekler - tırnak sağlığı için beslenme"
                    className="rounded-lg shadow-md w-full max-w-2xl mx-auto mb-4"
                  />
                  <p className="text-center text-sm text-gray-500 mb-4">Biotin (B7 Vitamini) İçeren Besinler - Sağlıklı tırnak uzaması için önemli</p>
                </div>

                {/* İlaç Yan Etkileri */}
                <div>
                  <h4 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                    <Pill size={20} className="mr-2 text-orange-500" />
                    İlaç Yan Etkileri
                  </h4>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Bazı ilaçlar tırnak büyümesini olumsuz etkileyebilir. Özellikle uzun süreli kullanımda bu etkiler belirginleşir.
                  </p>

                  <div className="bg-white rounded-lg p-6 mb-6 shadow-sm border border-gray-100">
                    <h5 className="font-semibold text-gray-800 mb-3">Tırnak büyümesini etkileyen ilaç grupları:</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">💊</span>
                        <span><strong>Kemoterapi ilaçları:</strong> Hızlı bölünen hücreleri hedef aldığından tırnak matriksini de etkiler</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">💊</span>
                        <span><strong>Retinoidler (A vitamini türevleri):</strong> Akne tedavisinde kullanılır, tırnak kırılganlığına neden olabilir</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">💊</span>
                        <span><strong>Bazı antibiyotikler:</strong> Uzun süreli kullanımda tırnak değişiklikleri görülebilir</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">💊</span>
                        <span><strong>Beta blokerler:</strong> Dolaşımı etkileyerek tırnak uzamasını yavaşlatabilir</span>
                      </li>
                    </ul>
                  </div>

                  <img 
                    src="/images/blog/tirnak-neden-uzamaz/ilac-yan-etkileri.jpg" 
                    alt="İlaç yan etkileri ve tırnak sağlığı"
                    className="rounded-lg shadow-md w-full max-w-2xl mx-auto mb-4"
                  />
                  <p className="text-center text-sm text-gray-500">Bazı ilaçların tırnak sağlığı üzerindeki olası etkileri</p>
                </div>
              </div>

              {/* ==================== NEDEN 4 - TIRNAK YEME ==================== */}
              <div className="mb-12 bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">4</div>
                  <h3 className="text-2xl font-bold text-blue-900">
                    Tırnak Yeme Alışkanlığı (Onikofaji)
                  </h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Sürekli tırnak yeme, genellikle stres ve anksiyete ile ilişkili bir alışkanlıktır. 
                  Bu davranış tırnak kökünde (matriks) kalıcı hasara yol açabilir ve tırnağın düzgün uzamasını engelleyebilir.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6 shadow-sm border border-gray-100">
                  <h5 className="font-semibold text-gray-800 mb-3">Tırnak yemenin olumsuz etkileri:</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span><strong>Matriks hasarı:</strong> Sürekli mekanik travma, tırnak üretim merkezini bozar</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span><strong>Enfeksiyon riski:</strong> Açık yaralar bakteri ve mantarlar için giriş kapısı oluşturur</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span><strong>Tırnak deformasyonu:</strong> Düzensiz, dalgalı veya kalınlaşmış tırnaklar oluşabilir</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span><strong>Paronichia:</strong> Tırnak çevresi iltihabı sık görülür</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
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
                <p className="text-center text-sm text-gray-500">Tırnak yeme alışkanlığının tırnak yapısına verdiği hasar</p>
              </div>

              {/* Podolojik Yaklaşım */}
              <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">
                Podolog Olarak Yaklaşımımız
              </h2>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  <Link to="/blog/baglica-podolog-hizmetleri" className="text-blue-700 font-semibold hover:underline">Medipodo Ayak Sağlığı Merkezi</Link> olarak, 
                  tırnak uzama problemlerini multidisipliner bir yaklaşımla değerlendiriyoruz:
                </p>
                
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Detaylı tırnak ve ayak muayenesi:</strong> Tırnak yapısı, renk, kalınlık ve şekil analizi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Matriks hasarı değerlendirmesi:</strong> Travma öyküsü ve matriks fonksiyonu kontrolü</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Mantar enfeksiyonu taraması:</strong> Görsel değerlendirme ve gerekirse laboratuvar yönlendirmesi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Sistemik faktörlerin belirlenmesi:</strong> Diyabet, dolaşım ve tiroid sorgulaması</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Kişiye özel tedavi planı:</strong> Nedene yönelik podolojik müdahale ve takip programı</span>
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
                      3–4 haftada bir yapılan profesyonel <Link to="/hizmet/ayak-bakimi" className="text-blue-700 font-semibold hover:underline">medikal ayak bakımı</Link>, 
                      tırnağın önündeki fiziksel engelleri ortadan kaldırır. Kalınlaşmış tırnakların inceltilmesi, 
                      mantar tedavisi ve düzgün kesim için uzman desteği alınmalıdır.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">🔹 2. Tırnak Kökü Masajı</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Matriks bölgesine günde 2-3 dakika yapılan nazik masaj, kan dolaşımını artırarak tırnak üretimini destekler. 
                      Nemlendirici veya tırnak bakım yağı ile yapıldığında etkinlik artar.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">🔹 3. Nemlendirme ve Bakım Ürünleri</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Tırnak ve çevresinin nemli kalması, kırılmayı önler ve sağlıklı uzamayı destekler. 
                      <Link to="/blog/kis-aylarinda-catlak-topuk-tedavisi" className="text-blue-700 font-semibold hover:underline"> Üre içeren kremler</Link> hem 
                      tırnak hem de çevre cilt için faydalıdır.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">🔹 4. Doğru Ayakkabı Seçimi</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Geniş burunlu, parmakları sıkıştırmayan ayakkabılar mikro travmaları önler. 
                      Özellikle uzun süre ayakta kalanlar ve sporcular için uygun ayakkabı seçimi kritik önem taşır.
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
                      Ayrıca ayak tırnakları daha kalın olduğundan üretim süreci daha uzun sürer.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Tırnak mantarı geçince tırnak hemen uzar mı?</h3>
                    <p className="text-gray-700">
                      Hayır. <Link to="/hizmet/tirnak-mantari" className="text-blue-700 font-semibold hover:underline">Tırnak mantarı tedavisi</Link> sonrası 
                      sağlıklı tırnağın tamamen gelmesi ayak tırnağında 6–18 ay sürebilir. Sabırlı olmak ve düzenli takip önemlidir.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Uzaması duran tırnak tamamen düzelir mi?</h3>
                    <p className="text-gray-700">
                      Matriks kalıcı hasar almadıysa büyük ölçüde düzelebilir. Kalıcı hasarda düzenli 
                      <Link to="/blog/baglica-podolog-hizmetleri" className="text-blue-700 font-semibold hover:underline"> podolojik bakım</Link> ile 
                      kontrol sağlanır ve tırnak estetik açıdan iyileştirilir.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Tırnak uzamasını hızlandırmak mümkün mü?</h3>
                    <p className="text-gray-700">
                      Doğrudan hızlandırmak her zaman mümkün değildir; ancak düzenli bakım, dengeli beslenme, 
                      doğru ayakkabı seçimi ve altta yatan problemin tedavisiyle sağlıklı uzama desteklenebilir.
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
                    <span><Link to="/blog/tirnak-neden-kalinlasir" className="text-blue-700 font-semibold hover:underline">Kalınlaşma</Link>, renk değişimi veya şekil bozukluğu varsa</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle size={20} className="text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span><Link to="/blog/diyabet-ve-ayak-sagligi" className="text-blue-700 font-semibold hover:underline">Diyabet</Link> veya dolaşım probleminiz bulunuyorsa</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle size={20} className="text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Travma sonrası tırnak düştüyse veya deforme olduysa</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle size={20} className="text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span><Link to="/hizmet/tirnak-mantari" className="text-blue-700 font-semibold hover:underline">Mantar enfeksiyonu</Link> şüphesi varsa</span>
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
                  Tırnak uzama problemleri, <Link to="/hizmet/tirnak-mantari" className="text-white underline hover:text-blue-200">tırnak mantarı</Link>, 
                  <Link to="/hizmet/batik-tirnak" className="text-white underline hover:text-blue-200"> batık tırnak</Link> ve 
                  diğer ayak sağlığı sorunlarında kişiye özel podolojik çözümler sunuyoruz.
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
                  <span className="text-gray-700 hover:text-blue-700">Bağlıca Podolog Hizmetleri</span>
                </Link>
                <Link to="/blog/bs-bant-uygulamasi" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <ChevronRight size={20} className="text-blue-600 mr-3" />
                  <span className="text-gray-700 hover:text-blue-700">B/S Bant Uygulaması</span>
                </Link>
                <Link to="/blog/kis-aylarinda-catlak-topuk-tedavisi" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <ChevronRight size={20} className="text-blue-600 mr-3" />
                  <span className="text-gray-700 hover:text-blue-700">Çatlak Topuk Tedavisi</span>
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
