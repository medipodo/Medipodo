import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, AlertTriangle, CheckCircle, XCircle, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';

const TirnakKalinlasmaBlog = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Tırnak neden kalınlaşır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tırnak kalınlaşması; tekrarlayan travmalar, tırnak mantarı, dar ayakkabılar, yaşlanma, dolaşım bozuklukları ve yanlış tırnak kesimi nedeniyle oluşabilir."
        }
      },
      {
        "@type": "Question",
        "name": "Kalınlaşmış tırnak mantar mıdır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Her kalınlaşmış tırnak mantar değildir. Travma, basınç ve dolaşım sorunları da benzer görüntü oluşturabilir. Kesin tanı için uzman değerlendirmesi gerekir."
        }
      },
      {
        "@type": "Question",
        "name": "Kalınlaşmış tırnak kendiliğinden düzelir mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Genellikle kendiliğinden düzelmez. Altta yatan neden tedavi edilmezse tırnak kalınlaşması ilerleyebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Kalın tırnak evde kesilir mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kalınlaşmış tırnakların evde zorlanarak kesilmesi önerilmez. Uygun teknik ve ekipman gerektirdiği için medikal ayak bakımı ile yapılmalıdır."
        }
      },
      {
        "@type": "Question",
        "name": "Kalınlaşmış tırnak bulaşıcı mıdır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kalınlaşma mantar kaynaklıysa bulaşıcı olabilir. Travma veya dolaşım nedenli kalınlaşmalar bulaşıcı değildir."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Tırnak Neden Kalınlaşır? Ayak Tırnağı Kalınlaşmasının 7 Nedeni</title>
        <meta name="description" content="Ayak tırnağı neden kalınlaşır? Mantar, dar ayakkabı, travma ve dolaşım sorunları kalın tırnağa yol açabilir. Belirtiler ve çözümler burada." />
        <link rel="canonical" href="https://medipodo.com/blog/tirnak-neden-kalinlasir" />
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
              <span className="text-gray-900">Tırnak Kalınlaşması</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-8 pb-12 bg-gradient-to-br from-blue-50 via-white to-blue-50">
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
                Tırnak Neden Kalınlaşır? Neyin Belirtisidir?
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
                <div className="flex items-center">
                  <User size={18} className="mr-2" />
                  <span>Podolog Serdar Ceylan</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2" />
                  <span>19 Aralık 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock size={18} className="mr-2" />
                  <span>10 dk okuma süresi</span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
                <img 
                  src="/images/blog/tirnak-kalinlasmasi/blog-kapak görseli-tirnak-kalinlasmasi.jpg" 
                  alt="Tırnak kalınlaşması - ayak tırnağı kalınlaşmasının nedenleri ve tedavisi"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <article className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Giriş */}
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Ayak tırnağında kalınlaşma, tırnağı oluşturan hücrelerin normalden farklı çalışması sonucu ortaya çıkar.
                Bu değişim çoğu zaman tırnak kökünü (matriks) etkileyen travmalar, enfeksiyonlar veya dolaşım sorunlarıyla ilişkilidir.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Kalınlaşma bir anda oluşmaz; haftalar ve aylar içinde yavaş yavaş gelişir.
                Çoğu kişi durumu fark ettiğinde tırnak yapısı zaten belirgin şekilde değişmiştir.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                <p className="text-gray-800 leading-relaxed mb-0">
                  Bu tür tırnak değişimleri, çoğu zaman profesyonel bir değerlendirme gerektirir.{' '}
                  <Link to="/hizmet/medikal-ayak-bakimi" className="text-blue-700 font-semibold hover:underline">
                    Medikal ayak bakımı
                  </Link>{' '}
                  ile tırnak yapısı güvenli şekilde incelenebilir ve altta yatan nedenler belirlenebilir.
                </p>
              </div>

              {/* Örnek Görsel - Öncesi Sonrası */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div>
                  <img 
                    src="/images/blog/tirnak-kalinlasmasi/örnek tırnak kalınlaşması- öncesi.jpg" 
                    alt="Tırnak kalınlaşması örneği - tedavi öncesi"
                    className="rounded-lg shadow-md w-full"
                  />
                  <p className="text-center text-sm text-gray-500 mt-2">Tedavi Öncesi</p>
                </div>
                <div>
                  <img 
                    src="/images/blog/tirnak-kalinlasmasi/örnek tırnak kalınlaşması- sonrası.jpg" 
                    alt="Tırnak kalınlaşması örneği - tedavi sonrası"
                    className="rounded-lg shadow-md w-full"
                  />
                  <p className="text-center text-sm text-gray-500 mt-2">Tedavi Sonrası</p>
                </div>
              </div>

              {/* Tırnak Kalınlaşması Nedir */}
              <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">
                Tırnak Kalınlaşması Nedir? (Basitçe Anlatalım)
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Tırnak kalınlaşması; tırnak plağının normalden daha sert, opak ve hacimli hale gelmesidir.
                Bu süreç genellikle yavaş ilerler, bu nedenle çoğu kişi fark ettiğinde tırnak belirgin şekilde kalınlaşmış olur.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-amber-800 mb-4">Kalınlaşan tırnak çoğu zaman:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">–</span>
                    Uzama paterni değişir (yavaşlayabilir veya düzensizleşir)
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">–</span>
                    Kesimi zorlaşır (Aşırı kalınlaşabilir)
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">–</span>
                    Renk değiştirir (sarı, gri, kahverengi)
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">–</span>
                    Ayakkabı içinde baskı ve hassasiyet oluşturur
                  </li>
                </ul>
              </div>

              {/* Sararmış Kalın Tırnak Görseli */}
              <div className="mb-12">
                <img 
                  src="/images/blog/tirnak-kalinlasmasi/sararmis-kalin-tirnak.jpg" 
                  alt="Sararmış ve kalınlaşmış ayak tırnağı örneği"
                  className="rounded-lg shadow-md w-full max-w-2xl mx-auto"
                />
              </div>

              {/* 7 Neden */}
              <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">
                Tırnak Neden Kalınlaşır? En Yaygın 7 Neden
              </h2>

              {/* Neden 1 - Travma */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  1. Tekrarlayan Travmalar (En sık neden)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dar ayakkabılar, sert burunlu spor ayakkabılar veya uzun süre ayakta kalmak; tırnak kökünde (matriks) mikro hasarlara yol açabilir.
                  Bu hasarlar sonucunda üretilen tırnak dokusu zamanla daha kalın ve düzensiz hale gelir.
                </p>

                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <p className="font-semibold text-blue-900 mb-2">📌 Özellikle:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Sporcular</li>
                    <li>• Sağlık çalışanları</li>
                    <li>• Asker-Polis</li>
                    <li>• Gün boyu ayakta çalışanlar</li>
                  </ul>
                </div>

                <img 
                  src="/images/blog/tirnak-kalinlasmasi/dar ayakkabının ayak tırnağına yaptığı basınç.jpg" 
                  alt="Dar ayakkabının ayak tırnağına yaptığı basınç"
                  className="rounded-lg shadow-md w-full max-w-2xl mx-auto mb-4"
                />
              </div>

              {/* Neden 2 - Mantar */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  2. Tırnak Mantarı (Onikomikoz)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Mantar enfeksiyonları tırnak yapısını bozarak kalınlaşmaya neden olabilir.
                  Bu durumda tırnakta sıklıkla:
                </p>

                <ul className="text-gray-700 space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-red-500 mr-2" />
                    Kalınlaşma
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-red-500 mr-2" />
                    Sararma
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-red-500 mr-2" />
                    Ufalanma
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={18} className="text-red-500 mr-2" />
                    Tırnak altında birikinti
                  </li>
                </ul>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-r-lg">
                  <p className="text-gray-800 leading-relaxed">
                    <strong className="text-red-700">⚠️ Önemli:</strong>{' '}
                    Her kalınlaşma mantar değildir; ancak mantar enfeksiyonlarının büyük kısmı kalınlaşmayla başlar.
                  </p>
                  <p className="text-gray-700 mt-3">
                    Tırnak mantarı şüphesi olan kişiler için detaylı değerlendirme,{' '}
                    <Link to="/hizmet/tirnak-mantari" className="text-blue-700 font-semibold hover:underline">
                      Ankara'da podolog
                    </Link>{' '}
                    tarafından yapılmalıdır.
                  </p>
                </div>

                <img 
                  src="/images/blog/tirnak-kalinlasmasi/mantara bağlı kalınlaşmış sarı ayak tırnağı görünümü.jpg" 
                  alt="Mantara bağlı kalınlaşmış sarı ayak tırnağı görünümü"
                  className="rounded-lg shadow-md w-full max-w-2xl mx-auto mb-4"
                />
              </div>

              {/* Neden 3 - Yanlış Kesim */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  3. Yanlış Tırnak Kesimi
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tırnağın çok kısa veya köşelerden derin kesilmesi, tırnak yatağında basınç dağılımını bozar.
                  Bu durum uzun vadede tırnak kökünü etkileyerek kalınlaşmaya zemin hazırlayabilir.
                </p>

                <img 
                  src="/images/blog/tirnak-kalinlasmasi/dogru-yanlis-tirnak-kesimi.jpg" 
                  alt="Doğru ve yanlış ayak tırnağı kesimi örneği"
                  className="rounded-lg shadow-md w-full max-w-2xl mx-auto mb-4"
                />
              </div>

              {/* Neden 4 - Yaşlanma */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  4. Yaşlanmaya Bağlı Değişimler
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Yaş ilerledikçe:
                </p>

                <ul className="text-gray-700 space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Dolaşım yavaşlar
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Tırnak uzama hızı azalır
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Hücre yenilenmesi düşer
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Buna bağlı olarak tırnaklar daha kalın, sert ve opak hale gelebilir.
                </p>

                <img 
                  src="/images/blog/tirnak-kalinlasmasi/yaşlanmaya bağlı kalınlaşmış ayak tırnakları.jpg" 
                  alt="Yaşlanmaya bağlı kalınlaşmış ayak tırnakları"
                  className="rounded-lg shadow-md w-full max-w-2xl mx-auto mb-4"
                />
              </div>

              {/* Neden 5 - Dolaşım */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  5. Dolaşım Bozuklukları
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ayaklara giden kan akışının azalması, tırnağın yeterince beslenememesine neden olur.
                  Bu durum kalınlaşma ile birlikte renk koyulaşması şeklinde kendini gösterebilir.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded-r-lg">
                  <p className="text-gray-800">
                    📌 <Link to="/blog/diyabet-ve-ayak-sagligi" className="text-blue-700 font-semibold hover:underline">Diyabet hastalarında</Link> daha sık görülür.
                  </p>
                </div>
              </div>

              {/* Neden 6 - Cilt Hastalıkları */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  6. Cilt Hastalıkları (Psoriasis vb.)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sedef hastalığı gibi bazı cilt hastalıkları tırnakları da etkileyebilir.
                  Bu durumda kalınlaşmaya ek olarak:
                </p>

                <ul className="text-gray-700 space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Dalgalı yüzey
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Çukurcuklar
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">•</span>
                    Tırnağın yatağından ayrılması
                  </li>
                </ul>
              </div>

              {/* Neden 7 - İhmal */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  7. Uzun Süre Tedavi Edilmeyen Tırnak Sorunları
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Başlangıçta hafif olan tırnak problemleri, zamanla ihmal edildikçe ilerleyerek kalınlaşmaya yol açabilir.
                  Evde yapılan yanlış ve bilinçsiz müdahaleler durumu daha da ağırlaştırabilir.
                </p>
              </div>

              {/* Onikogrifoz Örneği */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div>
                  <img 
                    src="/images/blog/tirnak-kalinlasmasi/örnek tırnak kalınlaşması-onikogrifoz öncesi.jpg" 
                    alt="İleri derece tırnak kalınlaşması (onikogrifoz) - tedavi öncesi"
                    className="rounded-lg shadow-md w-full"
                  />
                  <p className="text-center text-sm text-gray-500 mt-2">İleri Derece Kalınlaşma - Öncesi</p>
                </div>
                <div>
                  <img 
                    src="/images/blog/tirnak-kalinlasmasi/örnek tırnak kalınlaşması-onikogrifoz (sonrasına ekle).jpg" 
                    alt="İleri derece tırnak kalınlaşması (onikogrifoz) - tedavi sonrası"
                    className="rounded-lg shadow-md w-full"
                  />
                  <p className="text-center text-sm text-gray-500 mt-2">İleri Derece Kalınlaşma - Sonrası</p>
                </div>
              </div>

              {/* Nasıl Anlaşılır */}
              <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">
                Kalınlaşmış Tırnak Nasıl Anlaşılır?
              </h2>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Tırnak kesimi zorlaştıysa</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Renk değişikliği başladıysa</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Ayakkabı içinde baskı hissediliyorsa</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Tırnak altı dolu ve sert görünüyorsa</span>
                  </li>
                </ul>
                <p className="mt-4 text-green-800 font-semibold">
                  → Kalınlaşma süreci başlamış olabilir.
                </p>
              </div>

              {/* Tedavi */}
              <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">
                Kalınlaşmış Tırnak Nasıl Tedavi Edilir?
              </h2>

              <div className="space-y-6 mb-8">
                <Card className="border-blue-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">🔹 Medikal Ayak Bakımı</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Kalınlaşmış tırnakların kontrollü şekilde inceltilmesi ve tırnak yatağının rahatlatılması gerekir.
                      Bu işlemler podolog tarafından yapılmalıdır. Evde el frezeleriyle yapılan kontrolsüz inceltmeler başka sorunlara yol açabilir.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">🔹 Düzenli Bakım Ürünleri</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Tırnak ve çevresinin nemli kalması, sertleşmenin ilerlemesini yavaşlatabilir.
                      Üre içeren ayak kremleri ve tırnak bakım serumları destekleyici rol oynar.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-gray-700">
                        Özellikle tırnak kalınlaşmasına eşlik eden sertlik ve mat görünümde,{' '}
                        <Link to="/urun/pedizone-foot-nail-care-serum" className="text-blue-700 font-semibold hover:underline">
                          PediZone Tırnak Bakım Serumu 50 ml
                        </Link>{' '}
                        düzenli kullanımda tırnak plağının daha esnek hale gelmesine yardımcı olabilir.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Tırnak Kuretajı Görseli */}
              <div className="mb-12">
                <img 
                  src="/images/blog/tirnak-kalinlasmasi/tirnak-kuretajı.jpg" 
                  alt="Podolog tarafından kalınlaşmış tırnak bakımı"
                  className="rounded-lg shadow-md w-full max-w-2xl mx-auto"
                />
              </div>

              {/* Evde Yapılmaması Gerekenler */}
              <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">
                Evde Yapılmaması Gerekenler
              </h2>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <XCircle size={20} className="text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Tırnağı zorlayarak kesmek</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle size={20} className="text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Aşırı törpüleme</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle size={20} className="text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Mantarlı tırnağı sürekli oje ile kapatmak</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle size={20} className="text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Asitli ürünleri bilinçsiz kullanmak</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
                <p className="text-gray-700">
                  Evde bilinçsiz müdahaleler yerine, tırnağın yapısını zorlamadan bakım yapılması önemlidir.
                  Bu noktada podolog önerisiyle kullanılan{' '}
                  <Link to="/urun/pedizone-foot-nail-care-serum" className="text-blue-700 font-semibold hover:underline">
                    tırnak bakım serumları
                  </Link>, süreci destekleyebilir.
                </p>
              </div>

              {/* Ne Zaman Uzman Desteği */}
              <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">
                Ne Zaman Uzman Desteği Alınmalı?
              </h2>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <AlertTriangle size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Tırnak hızla kalınlaşıyorsa</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Ağrı oluşuyorsa</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Renk koyulaşması artıyorsa</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle size={20} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Diyabet hastasıysanız</span>
                  </li>
                </ul>
                <p className="mt-4 text-amber-800 font-semibold">
                  👉 Medikal ayak bakımı geciktirilmemelidir.
                </p>
              </div>

              {/* Podolojik Muayene Görseli */}
              <div className="mb-12">
                <img 
                  src="/images/blog/tirnak-kalinlasmasi/podolojik-muayene.jpg" 
                  alt="Podolog tarafından ayak muayenesi"
                  className="rounded-lg shadow-md w-full max-w-2xl mx-auto"
                />
              </div>

              {/* SSS */}
              <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">
                Sık Sorulan Sorular
              </h2>

              <div className="space-y-4 mb-12">
                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Kalınlaşmış tırnak kendiliğinden düzelir mi?</h3>
                    <p className="text-gray-700">
                      Genellikle hayır. Altta yatan neden tedavi edilmezse ilerleyebilir.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Kalınlaşmış tırnak mantar mıdır?</h3>
                    <p className="text-gray-700">
                      Her zaman değil. Travma ve dolaşım sorunları da benzer görüntü oluşturabilir.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Kalın tırnak evde kesilir mi?</h3>
                    <p className="text-gray-700">
                      Evde zorlanarak kesilmesi önerilmez. Uygun teknik ve ekipman gerekir.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Kalınlaşmış tırnak bulaşıcı mı?</h3>
                    <p className="text-gray-700">
                      Sadece mantar kaynaklıysa bulaşıcı olabilir.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Sonuç */}
              <h2 className="text-3xl font-bold text-blue-950 mb-6 mt-12">
                Sonuç: Tırnak Kalınlaşması Ciddiye Alınmalıdır
              </h2>

              <p className="text-gray-700 leading-relaxed mb-8">
                Tırnak kalınlaşması çoğu zaman tırnağın üretim sürecinde bir şeylerin yolunda gitmediğini gösterir.
                Erken fark edildiğinde kontrol altına alınabilir, ihmal edildiğinde ise günlük yaşamı zorlaştırabilir.
              </p>

              {/* Lokal CTA */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  Ankara Bağlıca'da Medikal Ayak Bakımı ve Podoloji Desteği
                </h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Medipodo Ayak Sağlığı Merkezi, Ankara Bağlıca bölgesinde podolog eşliğinde{' '}
                  <Link to="/hizmet/medikal-ayak-bakimi" className="text-white font-semibold underline hover:text-blue-200">
                    medikal ayak bakımı
                  </Link>{' '}
                  hizmeti sunmaktadır.
                  Kalınlaşmış tırnak, tırnak mantarı ve ayak sağlığı sorunlarında Ankara'da podolog arayanlar için kişiye özel çözümler uygulanır.
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
                <Link to="/blog/batik-tirnak-nedenleri" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <ChevronRight size={20} className="text-blue-600 mr-3" />
                  <span className="text-gray-700 hover:text-blue-700">Batık Tırnak Neden Olur?</span>
                </Link>
                <Link to="/blog/tirnak-mantari-belirtileri-tedavi" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <ChevronRight size={20} className="text-blue-600 mr-3" />
                  <span className="text-gray-700 hover:text-blue-700">Tırnak Mantarı Belirtileri ve Tedavisi</span>
                </Link>
                <Link to="/blog/diyabet-ve-ayak-sagligi" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <ChevronRight size={20} className="text-blue-600 mr-3" />
                  <span className="text-gray-700 hover:text-blue-700">Diyabet ve Ayak Sağlığı</span>
                </Link>
                <Link to="/hizmet/medikal-ayak-bakimi" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
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

export default TirnakKalinlasmaBlog;
