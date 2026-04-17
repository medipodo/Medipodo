import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, Phone, ChevronDown, ChevronUp, Sun, AlertTriangle, CheckCircle, XCircle, Footprints, Droplets, ThermometerSun, Lightbulb, AlertCircle, Award, Star, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet';

const YazlikAyakkabiSecimiBlog = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Güçlendirilmiş FAQ - Her cevap 100-150+ kelime
  const faqItems = [
    {
      question: "Yazın açık ayakkabı giymek zararlı mı?",
      answer: `Açık ayakkabı giymek doğru model seçildiğinde zararlı değil, hatta faydalı bile olabilir. Ayağın hava alması terlemeyi azaltır ve mantar oluşum riskini düşürür.

Asıl sorun ayakkabının kalitesi ve kullanım koşullarıyla ilgili. Plastik sandaletler, parmak arası terlikler veya taban desteği olmayan modeller uzun vadede ayak sağlığına zarar verir.

Dikkat edilmesi gerekenler: Anatomik taban desteği olan modeller tercih edin. Kayışların sürtünme yapmadığından emin olun. Havuz ve plaj gibi nemli ortamlarda terlik giyin ama günlük kullanım için farklı bir model tercih edin. Ayaklarınızı güneşten korumak için SPF içeren krem kullanmayı unutmayın.

Topuk çatlakları açık ayakkabılarda sık görülür. Düzenli nemlendirme ve ölü deri temizliği bu sorunu önler.`
    },
    {
      question: "Terleyen ayaklar için en iyi ayakkabı hangisi?",
      answer: `Terleyen ayaklar için en iyi tercih mesh kumaşlı spor ayakkabılar ve doğal deri sandaletlerdir. Bu malzemeler hava sirkülasyonu sağlar ve nemi dışarı atar.

Kesinlikle kaçınılması gerekenler: Plastik ve PVC sandaletler, suni deri ayakkabılar ve tamamen kapalı sentetik modeller. Bu malzemeler ayakta sera etkisi yaratır ve terlemeyi katlar.

Ek önlemler de şart: Pamuklu veya merino yünü çoraplar kullanın. Aynı ayakkabıyı arka arkaya günlerce giymeyin, en az 24 saat havalandırın. Antibakteriyel ayak spreyi veya talk pudrası faydalı olabilir.

Eğer aşırı terleme (hiperhidrozis) varsa ve evde önlemlerle kontrol altına alınamıyorsa, bu durum tıbbi değerlendirme gerektirebilir. Bazen altta yatan mantar enfeksiyonu da terlemeyi artırır.`
    },
    {
      question: "Plaj terliği günlük ayakkabı olarak kullanılabilir mi?",
      answer: `Hayır, plaj terlikleri günlük kullanım için tasarlanmamıştır ve uzun vadede ciddi ayak sorunlarına yol açabilir.

Neden zararlı? Birincisi, taban desteği yok denecek kadar az. Düz ve sert tabanlar plantar fasiiti (topuk ağrısı) tetikler, ayak kemerinin çökmesine neden olur. İkincisi, ayak parmakları sürekli kasılarak terliği tutmaya çalışır. Bu durum uzun vadede çekiç parmak ve parmak deformitelerine yol açar.

Üçüncüsü, koruma sağlamaz. Taş, cam veya sert nesnelere karşı ayak savunmasız kalır. Dördüncüsü, kaygan zeminlerde düşme riski yüksektir.

Plaj terliği sadece şu durumlarda kullanılmalı: Plajda, havuz kenarında, otel duşunda veya ortak kullanım alanlarında mantar bulaşmasını önlemek için. Bunun dışında anatomik tabanlı sandalet veya destekli ayakkabılar tercih edilmelidir.`
    },
    {
      question: "Yazın spor ayakkabı giyilir mi, ayak bunalmaz mı?",
      answer: `Yazın spor ayakkabı rahatlıkla giyilebilir, hatta uzun yürüyüşler için en doğru tercihtir. Önemli olan doğru modeli seçmek.

Yaz için ideal spor ayakkabı özellikleri: Mesh (file) kumaşlı üst kısım - hava sirkülasyonu sağlar. Hafif ve esnek taban - ayağı yormaz. Nefes alabilen iç astar - nem birikimini önler. Açık renkler - güneş ısısını daha az emer.

Kaçınılması gerekenler: Tamamen deri veya sentetik kapalı modeller, kalın tabanlı basketbol ayakkabıları, kışlık koşu ayakkabıları.

Kritik kural: Spor ayakkabıyı asla çorapsız giymeyin. Çorapsız kullanım ter birikimi, koku ve mantar enfeksiyonu demektir. Ter emici, antibakteriyel özellikli spor çorapları tercih edin. Nike Dri-FIT, Adidas Climalite gibi teknolojiler bu konuda başarılı.`
    },
    {
      question: "Ayak kokusunu önlemek için ne yapmalıyım?",
      answer: `Ayak kokusu bakterilerin terle etkileşiminden kaynaklanır. Önlemenin yolu tutarlı hijyen ve doğru malzeme seçiminden geçer.

Günlük rutin şart: Ayakları sabah ve akşam yıkayın. Parmak aralarını özellikle dikkatli kurulayın - burası bakterilerin en sevdiği bölge. Antibakteriyel sabun kullanabilirsiniz ama aşırıya kaçmayın, cildin doğal dengesini bozar.

Ayakkabı stratejisi: En az 2-3 çift ayakkabıyı dönüşümlü kullanın. Aynı ayakkabıyı arka arkaya günlerce giymeyin. Akşamları ayakkabıları açık havada bırakın. İçine sedir ağacı tabanlık veya aktif karbon koyabilirsiniz.

Çorap seçimi kritik: Pamuklu veya merino yünü çoraplar en iyi ter emiciler. Sentetik çoraplardan kaçının. Günde bir kez çorap değiştirin.

Eğer koku kronikleştiyse ve bu önlemlerle geçmiyorsa, altta yatan mantar enfeksiyonu olabilir. Bu durumda profesyonel podolojik değerlendirme almanızı öneririm.`
    },
    {
      question: "Düz tabanlı mıyım nasıl anlarım, hangi ayakkabı uygun?",
      answer: `Düz taban (pes planus) testi basit: Islak ayakla kağıda basın. Ayak izinizin iç kısmı tamamen doluysa, yani taban çukurluğu görünmüyorsa düz tabanlısınız.

Düz taban belirtileri: Uzun yürüyüşlerde ayak yorgunluğu, ayak bileği içe doğru dönme, ayakkabı iç kenarının daha çabuk aşınması, bazen diz ve bel ağrısı.

Düz taban için doğru ayakkabı: Motion control veya stability kategorisi spor ayakkabılar tercih edin. Kemer desteği güçlü modeller seçin. Çok yumuşak, desteksiz ayakkabılardan kaçının.

Sandalet seçerken de dikkat: Anatomik tabanlı, ayak kemerini destekleyen modeller şart. Birkenstock tarzı mantar tabanlı sandaletler iyi bir tercih.

Önemli not: Düz taban her zaman sorun değildir. Ağrı veya rahatsızlık yoksa tedavi gerekmeyebilir. Ama semptomlar varsa ortopedik tabanlık veya özel ayakkabı gerekebilir.`
    }
  ];

  // JSON-LD Schemas
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer.replace(/\n\n/g, ' ').replace(/\n/g, ' ')
      }
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Yazın Ayakkabı Seçimi Nasıl Yapılmalı? Uzman Rehberi (2026)",
    "description": "Yazın ayakkabı seçimi nasıl yapılmalı? Terleyen ayaklar için en doğru ayakkabılar, mantar oluşumunu önleme, ayak tipine göre seçim ve uzman podolog önerileri.",
    "image": "https://medipodo.com/blog-images/yazlik-ayakkabi/kapak.webp",
    "author": {
      "@type": "Person",
      "name": "Podolog Serdar Ceylan",
      "jobTitle": "Uzman Podolog",
      "description": "15 yıllık deneyimli podolog, 10.000+ hasta tedavisi",
      "worksFor": {
        "@type": "MedicalBusiness",
        "name": "Medipodo Ayak Sağlığı Merkezi",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ankara",
          "addressRegion": "Bağlıca"
        }
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Medipodo Ayak Sağlığı Merkezi",
      "logo": {
        "@type": "ImageObject",
        "url": "https://medipodo.com/images/logo.png"
      }
    },
    "datePublished": "2026-04-07",
    "dateModified": "2026-04-07",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://medipodo.com/blog/yaz-aylarinda-ayakkabi-secimi"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://medipodo.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://medipodo.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Yazın Ayakkabı Seçimi", "item": "https://medipodo.com/blog/yaz-aylarinda-ayakkabi-secimi" }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Yazın Doğru Ayakkabı Nasıl Seçilir?",
    "description": "Yaz aylarında ayak sağlığını koruyacak doğru ayakkabı seçimi için adım adım rehber",
    "totalTime": "PT5M",
    "step": [
      { "@type": "HowToStep", "name": "Malzeme Kontrolü", "text": "Nefes alabilen malzeme seçin: deri, mesh veya keten" },
      { "@type": "HowToStep", "name": "Taban Desteği", "text": "Anatomik taban desteği olan modelleri tercih edin" },
      { "@type": "HowToStep", "name": "Parmak Alanı", "text": "Parmakları sıkıştırmayan geniş burun kısmı seçin" },
      { "@type": "HowToStep", "name": "Deneme Zamanı", "text": "Ayakkabıyı akşam saatlerinde deneyin" },
      { "@type": "HowToStep", "name": "Yürüyüş Testi", "text": "Mağazada en az 5 dakika yürüyerek test edin" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Yazın Ayakkabı Seçimi Nasıl Yapılmalı? Uzman Rehberi (2026) | Medipodo</title>
        <meta name="description" content="Yazın ayakkabı seçimi nasıl yapılmalı? Terleyen ayaklar için en doğru ayakkabılar, mantar oluşumunu önleme, ayak tipine göre seçim rehberi. 15 yıllık uzman podolog önerileri." />
        <meta name="keywords" content="yazın ayakkabı seçimi nasıl yapılmalı, yazlık ayakkabı seçimi, terleyen ayak için ayakkabı, mantar oluşumunu önleyen ayakkabı, yazın ayak bakımı, düz taban ayakkabı, podolog Ankara" />
        <link rel="canonical" href="https://medipodo.com/blog/yaz-aylarinda-ayakkabi-secimi" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Yazın Ayakkabı Seçimi Nasıl Yapılmalı? Uzman Rehberi (2026)" />
        <meta property="og:description" content="Terleyen ayaklar için doğru ayakkabılar, mantar önleme ve ayak tipine göre seçim. Uzman podolog rehberi." />
        <meta property="og:image" content="https://medipodo.com/blog-images/yazlik-ayakkabi/kapak.webp" />
        <meta property="og:url" content="https://medipodo.com/blog/yaz-aylarinda-ayakkabi-secimi" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yazın Ayakkabı Seçimi Nasıl Yapılmalı?" />
        <meta name="twitter:description" content="Terleyen ayaklar için doğru ayakkabılar ve yazlık ayak bakımı rehberi." />
        <meta name="twitter:image" content="https://medipodo.com/blog-images/yazlik-ayakkabi/kapak.webp" />

        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
      </Helmet>

      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-500 text-white pt-32 pb-16">
          <div className="container mx-auto px-4">
            <Link to="/blog" className="inline-flex items-center text-orange-100 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Blog'a Dön
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <Sun size={20} className="text-yellow-200" />
              <span className="text-orange-100 text-sm font-medium uppercase tracking-wide">Uzman Rehberi 2026</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Yazın Ayakkabı Seçimi Nasıl Yapılmalı?<br />
              <span className="text-yellow-200">Uzman Podolog Rehberi</span>
            </h1>

            <div className="flex flex-wrap gap-6 text-orange-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Podolog Serdar Ceylan</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>7 Nisan 2026 · 15 dakika okuma</span>
              </div>
              <div className="flex items-center">
                <Award size={18} className="mr-2" />
                <span>15 yıllık deneyim</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="container mx-auto px-4 -mt-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <img 
              src="/blog-images/yazlik-ayakkabi/kapak.webp" 
              alt="Yazın ayakkabı seçimi nasıl yapılmalı - sandalet sneaker ve yazlık ayakkabı modelleri karşılaştırması"
              className="w-full rounded-xl shadow-2xl"
            />
            <p className="text-center text-sm text-gray-500 mt-2">Yazlık ayakkabı seçiminde doğru modeli bulmak ayak sağlığının temelidir</p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Giriş - İlk 100 kelimede ana keyword */}
            <div className="prose prose-lg max-w-none mb-10">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                <strong>Yazın ayakkabı seçimi nasıl yapılmalı?</strong> Bu soru her yaz binlerce kişinin aklına geliyor. 
                Çünkü yanlış tercih sadece rahatsızlık vermekle kalmıyor; <Link to="/hizmet/batik-tirnak" className="text-blue-600 hover:underline">tırnak batması</Link>, 
                mantar enfeksiyonları ve kronik topuk ağrısına kadar uzanan ciddi sorunlara zemin hazırlıyor.
              </p>
              <p className="text-gray-600 leading-relaxed">
                15 yıldır podoloji pratiği yapıyorum. Bu sürede 10.000'den fazla hastanın ayaklarına baktım. 
                Yaz aylarında gördüğüm şikayetlerin %70'i yanlış ayakkabı seçiminden kaynaklanıyor. 
                Bu rehberde size net cevaplar vereceğim: Hangi ayakkabı almalısınız, hangisinden kaçınmalısınız, 
                ve ayak tipinize göre doğru seçimi nasıl yaparsınız.
              </p>
            </div>

            {/* ⚠️ EN SIK YAPILAN HATA KUTUSU */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-red-800 mb-2">En Sık Yapılan Hata</h3>
                  <p className="text-red-700">
                    Plaj terliğini günlük ayakkabı olarak kullanmak. Kliniğime yaz sonunda gelen hastaların 
                    yarısından fazlası bu hatayı yapıyor. Plaj terliği plaj için, günlük kullanım için anatomik 
                    sandalet veya destekli ayakkabı şart.
                  </p>
                </div>
              </div>
            </div>

            {/* 🔴 FEATURED SNIPPET - 6 Madde, 1 Satır */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-orange-300 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <CheckCircle className="text-orange-500" size={28} />
                  Yazın Ayakkabı Seçerken Dikkat Edilmesi Gerekenler
                </h2>
                <ol className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <span className="text-gray-800 font-medium">Nefes alabilen malzeme: deri, mesh veya keten</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <span className="text-gray-800 font-medium">Anatomik taban desteği şart</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <span className="text-gray-800 font-medium">Parmak alanı geniş, sıkıştırmayan</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    <span className="text-gray-800 font-medium">Akşam saatlerinde deneyin (ayak şişer)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                    <span className="text-gray-800 font-medium">Sentetik ve plastik malzemeden kaçının</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
                    <span className="text-gray-800 font-medium">Mağazada en az 5 dakika yürüyerek test edin</span>
                  </li>
                </ol>
              </div>
            </section>

            {/* 🔴 YENİ BÖLÜM: Hangi Yazlık Ayakkabı Tercih Edilmeli? */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Footprints className="text-blue-600" size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Hangi Yazlık Ayakkabı Tercih Edilmeli?
                </h2>
              </div>

              <p className="text-gray-700 mb-6">
                "Ne satın alacağım?" sorusunun cevabı kullanım amacınıza göre değişir. 
                İşte her durum için doğru tercih:
              </p>

              {/* Sandalet */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 border border-gray-100">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src="/blog-images/yazlik-ayakkabi/sandalet.webp" 
                      alt="Anatomik tabanlı yazlık sandalet - ayak sağlığı için doğru seçim"
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">1. Sandalet</h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2 text-sm">Avantajları</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Ayak nefes alır</li>
                          <li>• Terleme azalır</li>
                          <li>• Şık ve rahat</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2 text-sm">Dezavantajları</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Kayış sürtünmesi</li>
                          <li>• Koruma az</li>
                          <li>• Toz/kir maruziyeti</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-sm text-gray-700">
                        <strong>Ne zaman tercih edilmeli:</strong> Günlük kullanım, ofis, kısa yürüyüşler. 
                        Anatomik tabanlı ve kayışları yumuşak modeller seçin.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ortopedik Terlik */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 border border-gray-100">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2. Ortopedik / Anatomik Terlik</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2 text-sm">Avantajları</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Mükemmel taban desteği</li>
                        <li>• Topuk ve kemer desteği</li>
                        <li>• Plantar fasiit önler</li>
                        <li>• Uzun süreli konfor</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2 text-sm">Dezavantajları</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Fiyatı yüksek</li>
                        <li>• Model çeşitliliği az</li>
                        <li>• Görsel olarak sade</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-sm text-gray-700">
                      <strong>Ne zaman tercih edilmeli:</strong> Ev içi kullanım, topuk ağrısı olanlar, 
                      düz tabanlılar, yaşlılar. Birkenstock, Scholl gibi markalar önerilir.
                    </p>
                  </div>
                </div>
              </div>

              {/* Spor Ayakkabı */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 border border-gray-100">
                <div className="md:flex md:flex-row-reverse">
                  <div className="md:w-2/5">
                    <img 
                      src="/blog-images/yazlik-ayakkabi/sneaker.webp" 
                      alt="Yazlık mesh kumaşlı spor ayakkabı - uzun yürüyüşler için ideal"
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">3. Nefes Alabilen Spor Ayakkabı</h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2 text-sm">Avantajları</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• En iyi taban desteği</li>
                          <li>• Şok emici</li>
                          <li>• Koruma sağlar</li>
                          <li>• Uzun yürüyüşe uygun</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2 text-sm">Dezavantajları</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Çorapla giyilmeli</li>
                          <li>• Sıcakta bunaltabilir</li>
                          <li>• Her ortama uygun değil</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-sm text-gray-700">
                        <strong>Ne zaman tercih edilmeli:</strong> Uzun yürüyüşler, şehir turu, spor, 
                        aktif günler. Mesh kumaşlı modeller şart.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 💡 UZMAN ÖNERİSİ KUTUSU */}
              <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-yellow-800 mb-2">Uzman Önerisi</h4>
                    <p className="text-yellow-700">
                      Tek bir ayakkabıyla yaz geçirmeye çalışmayın. En az 3 farklı model bulundurun: 
                      1) Günlük kullanım için anatomik sandalet, 2) Uzun yürüyüşler için mesh spor ayakkabı, 
                      3) Ev için ortopedik terlik. Ayakkabıları dönüşümlü kullanmak hem ayak sağlığını korur 
                      hem de ayakkabıların ömrünü uzatır.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 🔴 YENİ BÖLÜM: Yanlış Seçimin Uzun Vadeli Zararları */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="text-red-600" size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Yazın Yanlış Ayakkabı Seçmenin Uzun Vadeli Zararları
                </h2>
              </div>

              <p className="text-gray-700 mb-6">
                Yanlış ayakkabı seçimi sadece o anki rahatsızlıkla kalmaz. Yıllar içinde kalıcı hasarlara yol açar. 
                İşte kliniğimde en sık gördüğüm uzun vadeli sorunlar:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3">Bunion (Halluks Valgus)</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Dar burunlu ayakkabılar başparmağı içe doğru iter. Yıllar içinde kemik çıkıntısı oluşur. 
                    İlerlemiş vakalarda cerrahi gerekebilir.
                  </p>
                  <p className="text-red-600 text-xs font-medium">Geri dönüşü zor, önlenmesi kolay.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3">Kronik Plantar Fasiit</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Düz tabanlı terlikler ve desteksiz ayakkabılar ayak tabanındaki bandı sürekli gerer. 
                    Sabahları yataktan kalkınca dayanılmaz topuk ağrısı başlar.
                  </p>
                  <p className="text-red-600 text-xs font-medium">Tedavisi aylarca sürebilir.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3">Kronik Tırnak Mantarı</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Nefes almayan ayakkabılarda mantar yerleşir ve tedavi edilmezse kalıcı hale gelir. 
                    <Link to="/hizmet/tirnak-mantari" className="text-blue-600 hover:underline ml-1">Tırnak mantarı tedavisi</Link> aylar sürer.
                  </p>
                  <p className="text-red-600 text-xs font-medium">Bulaşıcıdır, aileye yayılabilir.</p>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-red-500 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3">Çekiç Parmak</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Parmak arası terlikler parmaklarda sürekli kasılmaya neden olur. 
                    Zamanla parmaklar kalıcı olarak bükülü konumda kalır.
                  </p>
                  <p className="text-red-600 text-xs font-medium">İleri vakalarda cerrahi gerekir.</p>
                </div>
              </div>

              {/* Görsel: Doğru vs Yanlış */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-4 text-center">Doğru vs Yanlış Ayakkabı Seçimi</h4>
                <div className="flex items-center justify-center gap-8 flex-wrap">
                  <div className="text-center">
                    <div className="w-36 h-28 bg-green-100 rounded-xl flex items-center justify-center mb-2">
                      <CheckCircle className="text-green-600" size={48} />
                    </div>
                    <span className="text-sm font-medium text-green-700">Anatomik, destekli, nefes alan</span>
                  </div>
                  <div className="text-3xl text-gray-400 font-bold">vs</div>
                  <div className="text-center">
                    <div className="w-36 h-28 bg-red-100 rounded-xl flex items-center justify-center mb-2">
                      <XCircle className="text-red-600" size={48} />
                    </div>
                    <span className="text-sm font-medium text-red-700">Düz, dar, plastik, desteksiz</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 🔴 YENİ BÖLÜM: Ayak Tipine Göre Seçim */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Footprints className="text-purple-600" size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Ayak Tipine Göre Ayakkabı Seçimi
                </h2>
              </div>

              <p className="text-gray-700 mb-6">
                Herkesin ayağı farklı. Kendi ayak tipinizi bilmeden doğru ayakkabı seçemezsiniz. 
                İşte basit bir test ve her tip için öneriler:
              </p>

              {/* Ayak Tipi Testi */}
              <div className="bg-purple-50 rounded-xl p-6 mb-8">
                <h4 className="font-bold text-purple-900 mb-4">Ayak Tipinizi Nasıl Anlarsınız? (30 Saniyelik Test)</h4>
                <ol className="space-y-2 text-gray-700">
                  <li><strong>1.</strong> Ayağınızı ıslatın</li>
                  <li><strong>2.</strong> Kuru bir kağıda basın</li>
                  <li><strong>3.</strong> İzi inceleyin:</li>
                </ol>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🦶</div>
                    <p className="font-semibold text-gray-900">Düz Taban</p>
                    <p className="text-xs text-gray-600">İç kısım tamamen dolu</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🦶</div>
                    <p className="font-semibold text-gray-900">Normal Kemer</p>
                    <p className="text-xs text-gray-600">Orta kısımda hafif boşluk</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🦶</div>
                    <p className="font-semibold text-gray-900">Yüksek Kemer</p>
                    <p className="text-xs text-gray-600">Orta kısımda geniş boşluk</p>
                  </div>
                </div>
              </div>

              {/* Düz Taban */}
              <div className="bg-white rounded-xl p-6 mb-6 border border-purple-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Düz Taban (Pes Planus) İçin Ayakkabı</h4>
                <p className="text-gray-700 mb-4">
                  Düz tabanlı kişilerde ayak içe doğru döner (pronasyon). Bu durum diz, kalça ve bel ağrılarına yol açabilir. 
                  Doğru ayakkabı bu sorunu büyük ölçüde önler.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h5 className="font-semibold text-green-800 mb-2">Tercih Edilmeli</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ Motion control spor ayakkabılar</li>
                      <li>✓ Stability kategorisi modeller</li>
                      <li>✓ Güçlü kemer desteği</li>
                      <li>✓ Sert topuk çanağı</li>
                      <li>✓ Ortopedik tabanlık desteği</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <h5 className="font-semibold text-red-800 mb-2">Kaçınılmalı</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✗ Çok yumuşak tabanlar</li>
                      <li>✗ Minimalist ayakkabılar</li>
                      <li>✗ Düz sandaletler</li>
                      <li>✗ Babet ve mokasen</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Yüksek Kemer */}
              <div className="bg-white rounded-xl p-6 mb-6 border border-purple-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Yüksek Kemer (Pes Cavus) İçin Ayakkabı</h4>
                <p className="text-gray-700 mb-4">
                  Yüksek kemerli ayaklarda şok emilimi zayıftır. Topuk ve ön ayakta aşırı basınç noktaları oluşur. 
                  Nasır ve metatarsalji (ön ayak ağrısı) sık görülür.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h5 className="font-semibold text-green-800 mb-2">Tercih Edilmeli</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✓ Cushioning kategorisi spor ayakkabılar</li>
                      <li>✓ Ekstra yastıklamalı modeller</li>
                      <li>✓ Esnek tabanlar</li>
                      <li>✓ Geniş burun alanı</li>
                      <li>✓ Şok emici jel tabanlıklar</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <h5 className="font-semibold text-red-800 mb-2">Kaçınılmalı</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✗ Sert ve rijit tabanlar</li>
                      <li>✗ Stabilite ayakkabıları</li>
                      <li>✗ Yüksek topuk</li>
                      <li>✗ İnce tabanlı modeller</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 🔴 YENİ BÖLÜM: En Sık Yapılan 5 Kritik Hata */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <XCircle className="text-red-600" size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Yazlık Ayakkabı Seçiminde En Sık Yapılan 5 Kritik Hata
                </h2>
              </div>

              <p className="text-gray-700 mb-6">
                15 yıllık pratiğimde binlerce hastanın ayaklarına baktım. Yaz sonunda gelen şikayetlerin 
                %70'i bu 5 hatadan kaynaklanıyor:
              </p>

              <div className="space-y-5">
                <div className="bg-white rounded-xl p-6 border-l-4 border-red-500 shadow-md">
                  <div className="flex items-start gap-4">
                    <span className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">1</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Plaj Terliğini Günlük Ayakkabı Yapmak</h4>
                      <p className="text-gray-600 mb-2">
                        Bu en yaygın ve en zararlı hata. Plaj terlikleri taban desteği sıfır, şok emici değil. 
                        Günlük kullanımda plantar fasiit, topuk ağrısı ve çekiç parmak garantili.
                      </p>
                      <p className="text-green-700 text-sm font-medium">
                        Çözüm: Plaj terliği sadece plajda. Günlük için anatomik sandalet veya destekli ayakkabı.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-red-500 shadow-md">
                  <div className="flex items-start gap-4">
                    <span className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">2</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">"Alışırım" Diye Dar Ayakkabı Almak</h4>
                      <p className="text-gray-600 mb-2">
                        Ayakkabı açılmaz, ayak ayakkabıya uydurulmaya zorlanır. Sonuç: <Link to="/hizmet/batik-tirnak" className="text-blue-600 hover:underline">batık tırnak</Link>, 
                        <Link to="/hizmet/nasir-tedavisi" className="text-blue-600 hover:underline ml-1">nasır</Link> ve bunion.
                      </p>
                      <p className="text-green-700 text-sm font-medium">
                        Çözüm: İlk denemede rahat gelmeyen ayakkabıyı almayın. Asla.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-red-500 shadow-md">
                  <div className="flex items-start gap-4">
                    <span className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">3</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Spor Ayakkabıyı Çorapsız Giymek</h4>
                      <p className="text-gray-600 mb-2">
                        "Yaz sıcağında çorap giymem" diyenler kış sonuna kadar mantar tedavisi görüyor. 
                        Ter ayakkabı içinde kalır, bakteri ürer, koku ve mantar kaçınılmaz.
                      </p>
                      <p className="text-green-700 text-sm font-medium">
                        Çözüm: Mutlaka çorap. Ter emici, antibakteriyel spor çorapları ideal.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-red-500 shadow-md">
                  <div className="flex items-start gap-4">
                    <span className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">4</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Aynı Ayakkabıyı Her Gün Giymek</h4>
                      <p className="text-gray-600 mb-2">
                        Ayakkabılar en az 24 saat havalanmalı. Her gün aynı çifti giyerseniz nem ve bakteri birikir. 
                        Koku, mantar ve ayakkabının erken yıpranması kaçınılmaz.
                      </p>
                      <p className="text-green-700 text-sm font-medium">
                        Çözüm: En az 2-3 çift ayakkabıyı dönüşümlü kullanın.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border-l-4 border-red-500 shadow-md">
                  <div className="flex items-start gap-4">
                    <span className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">5</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Sabah Ayakkabı Denemek</h4>
                      <p className="text-gray-600 mb-2">
                        Ayaklar gün içinde şişer, akşama yarım numara büyür. Sabah "tam oldu" dediğiniz ayakkabı 
                        akşam sıkar, tırnak batması ve nasır yapar.
                      </p>
                      <p className="text-green-700 text-sm font-medium">
                        Çözüm: Ayakkabı denemesi her zaman akşam saatlerinde yapılmalı.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Terleyen Ayaklar Bölümü */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Droplets className="text-blue-600" size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Terleyen Ayaklar İçin Ayakkabı ve Bakım Rehberi
                </h2>
              </div>

              <p className="text-gray-700 mb-6">
                Aşırı ayak terlemesi (hiperhidrozis) yazın kabusu. Doğru ayakkabı ve bakım stratejisiyle 
                kontrol altına alınabilir.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-4">Terleyen Ayaklar İçin Ayakkabı Kriterleri</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-green-700 mb-3">Tercih Edilmeli</h5>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm"><CheckCircle className="text-green-500" size={16} /><span>Mesh kumaşlı spor ayakkabılar</span></li>
                      <li className="flex items-center gap-2 text-sm"><CheckCircle className="text-green-500" size={16} /><span>Doğal deri sandaletler</span></li>
                      <li className="flex items-center gap-2 text-sm"><CheckCircle className="text-green-500" size={16} /><span>Keten ve kanvas ayakkabılar</span></li>
                      <li className="flex items-center gap-2 text-sm"><CheckCircle className="text-green-500" size={16} /><span>Çıkarılabilir/yıkanabilir tabanlık</span></li>
                      <li className="flex items-center gap-2 text-sm"><CheckCircle className="text-green-500" size={16} /><span>Antibakteriyel iç astar</span></li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-red-700 mb-3">Kaçınılmalı</h5>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm"><XCircle className="text-red-500" size={16} /><span>Plastik/PVC sandaletler</span></li>
                      <li className="flex items-center gap-2 text-sm"><XCircle className="text-red-500" size={16} /><span>Suni deri (nefes almaz)</span></li>
                      <li className="flex items-center gap-2 text-sm"><XCircle className="text-red-500" size={16} /><span>Tamamen kapalı sentetik</span></li>
                      <li className="flex items-center gap-2 text-sm"><XCircle className="text-red-500" size={16} /><span>Kauçuk çizmeler/botlar</span></li>
                      <li className="flex items-center gap-2 text-sm"><XCircle className="text-red-500" size={16} /><span>Çorapsız kapalı ayakkabı</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 💡 Uzman Önerisi */}
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <Lightbulb className="text-yellow-300 flex-shrink-0" size={28} />
                  <div>
                    <h4 className="font-bold mb-2">Terleyen Ayaklar İçin Günlük Rutin</h4>
                    <ul className="space-y-1 text-sm text-blue-50">
                      <li>• Sabah ve akşam ayakları yıkayın, parmak aralarını iyice kurulayın</li>
                      <li>• Antibakteriyel ayak spreyi veya talk pudrası kullanın</li>
                      <li>• Pamuklu veya merino yünü çoraplar giyin</li>
                      <li>• Ayakkabıları dönüşümlü kullanın, her gün aynı çifti giymeyin</li>
                      <li>• Akşamları ayakkabıları açık havada havalandırın</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Bölümü */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Sık Sorulan Sorular
              </h2>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                      {openFaqIndex === index ? (
                        <ChevronUp className="text-orange-500 flex-shrink-0" size={24} />
                      ) : (
                        <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                      )}
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-6 pb-5 border-t border-gray-100">
                        <div className="text-gray-700 pt-4 leading-relaxed whitespace-pre-line">{item.answer}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 🔴 E-E-A-T: Genişletilmiş Author Bölümü */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="w-28 h-28 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User size={56} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold">Podolog Serdar Ceylan</h3>
                      <div className="flex items-center gap-1 bg-orange-500 px-2 py-1 rounded text-xs font-medium">
                        <Shield size={12} />
                        <span>Doğrulanmış Uzman</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">Uzman Podolog | Medipodo Ayak Sağlığı Merkezi Kurucusu</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Award className="text-orange-400" size={16} />
                          <span><strong className="text-white">Deneyim:</strong> 15+ yıl aktif podoloji pratiği</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="text-orange-400" size={16} />
                          <span><strong className="text-white">Tedavi:</strong> 10.000+ hasta</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="text-orange-400" size={16} />
                          <span><strong className="text-white">Uzmanlık:</strong> Batık tırnak, tırnak mantarı, diyabetik ayak</span>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Award className="text-orange-400" size={16} />
                          <span><strong className="text-white">Eğitim:</strong> Ankara Üniversitesi Podoloji mezunu</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="text-orange-400" size={16} />
                          <span><strong className="text-white">Sertifikalar:</strong> Ortoniksi, medikal ayak bakımı</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Footprints className="text-orange-400" size={16} />
                          <span><strong className="text-white">Teknikler:</strong> Tırnak teli, B/S bant, lazer</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="text-orange-400" size={16} />
                          <span><strong className="text-white">Klinik:</strong> Ankara Bağlıca</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 rounded-lg p-4">
                      <p className="text-gray-300 text-sm italic">
                        "Ayak sağlığı, genel sağlığın aynasıdır. 15 yıldır her gün onlarca hastanın ayaklarına bakıyorum. 
                        Gördüğüm şikayetlerin büyük çoğunluğu önlenebilir sorunlar. Doğru ayakkabı seçimi ve basit bir 
                        bakım rutini ile birçok problemi daha oluşmadan önleyebilirsiniz. Bu rehberi klinik deneyimlerimden 
                        yola çıkarak yazdım."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Sonuç */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Sonuç: Doğru Seçim = Sağlıklı Yazı</h2>
                <p className="text-orange-50 leading-relaxed mb-4">
                  <strong>Yazın ayakkabı seçimi nasıl yapılmalı?</strong> sorusunun cevabı artık netleşti: 
                  Ayak tipinize uygun, nefes alabilen malzemeden, anatomik taban destekli bir model seçin. 
                  Plaj terliğini plajda bırakın, aynı ayakkabıyı her gün giymeyin, çorapsız spor ayakkabı giymeyin.
                </p>
                <p className="text-orange-50 leading-relaxed mb-4">
                  Bu basit kurallar, <Link to="/hizmet/batik-tirnak" className="text-white underline font-medium">tırnak batması</Link>, 
                  <Link to="/hizmet/tirnak-mantari" className="text-white underline font-medium ml-1">tırnak mantarı</Link> ve 
                  <Link to="/hizmet/nasir-tedavisi" className="text-white underline font-medium ml-1">nasır</Link> gibi sorunların 
                  büyük çoğunluğunu önler.
                </p>
                <p className="text-orange-100 text-sm">
                  Bu içerik 15 yıllık podoloji deneyimine dayanır ancak tıbbi teşhis yerine geçmez. 
                  Devam eden şikayetlerde profesyonel değerlendirme önerilir.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ayak Yapınıza Uygun Öneriler Almak İster misiniz?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Ücretsiz ayak analizi ile ayak tipinizi öğrenin ve size özel öneriler alın. 
                  Veya profesyonel podolojik değerlendirme için randevu alın.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/ayak-analizi"
                    className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors shadow-lg"
                  >
                    <Footprints size={20} className="mr-2" />
                    Ücretsiz Ayak Analizi
                  </Link>
                  <Link 
                    to="/iletisim"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-blue-500 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                  >
                    <Phone size={20} className="mr-2" />
                    Randevu Al
                  </Link>
                </div>
                <p className="text-gray-500 text-sm mt-4">
                  Veya arayın: <a href="tel:+905456569747" className="text-blue-600 font-semibold">0545 656 97 47</a>
                </p>
              </div>
            </section>

          </div>
        </div>
      </article>
    </>
  );
};

export default YazlikAyakkabiSecimiBlog;
