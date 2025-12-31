import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, Phone, ChevronDown, ChevronUp, AlertTriangle, CheckCircle2, Users, Heart } from 'lucide-react';
import { Helmet } from 'react-helmet';

const BatikTirnakNedenleri = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Batık tırnak neden oluşur?",
      answer: "Batık tırnak, en sık yanlış tırnak kesimi, dar ayakkabı kullanımı ve tırnak yapısının genetik olarak içe kıvrık olması nedeniyle oluşur. Tırnağın yan kenarı çevresindeki yumuşak dokuya baskı yaparak batmaya başlar."
    },
    {
      question: "Yanlış tırnak kesimi batık tırnağa nasıl yol açar?",
      answer: "Tırnakların oval veya çok kısa kesilmesi, tırnak köşelerinin deri içine doğru uzamasına neden olur. Bu durum tırnak büyüdükçe cilde baskı yaparak batık tırnak gelişimine yol açar."
    },
    {
      question: "Batık tırnak mantar nedeniyle olur mu?",
      answer: "Evet. Tırnak mantarı tırnağın kalınlaşmasına ve şeklini kaybetmesine neden olur. Kalınlaşan tırnak, yan dokulara baskı yaparak batık tırnak riskini artırır."
    },
    {
      question: "Batık tırnak kendiliğinden geçer mi?",
      answer: "Erken evrede uygun bakım ile ilerlemesi durdurulabilir. Ancak ileri evre batık tırnaklar kendiliğinden iyileşmez ve profesyonel podolojik müdahale gerektirir."
    },
    {
      question: "Batık tırnak oluşmaması için ne yapılmalı?",
      answer: "Batık tırnağı önlemek için tırnaklar düz kesilmeli, dar ayakkabılardan kaçınılmalı, ayak hijyenine dikkat edilmeli ve kalınlaşan tırnaklar ihmal edilmemelidir."
    }
  ];

  // FAQPage JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Batık Tırnak Nedenleri (Unguis Incarnatus) | Medipodo</title>
        <meta name="description" content="Batık tırnak neden oluşur? Yanlış tırnak kesimi, dar ayakkabı, tırnak mantarı ve genetik faktörlerin batık tırnağa etkisi. Podolojik bakış açısıyla önleme ve tedavi." />
        <meta name="keywords" content="batık tırnak nedenleri, unguis incarnatus, batık tırnak, tırnak batması, podoloji, Ankara podolog" />
        <link rel="canonical" href="https://medipodo.com/blog/batik-tirnak-nedenleri" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Batık Tırnak Nedenleri (Unguis Incarnatus)" />
        <meta property="og:description" content="Batık tırnak neden oluşur? Podolojik bakış açısıyla önleme ve tedavi rehberi." />
        <meta property="og:image" content="https://medipodo.com/images/blog/batik-tirnak-ankara-podolog.webp" />
        <meta property="og:url" content="https://medipodo.com/blog/batik-tirnak-nedenleri" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Batık Tırnak Nedenleri (Unguis Incarnatus)" />
        <meta name="twitter:description" content="Batık tırnak neden oluşur? Podolojik bakış açısıyla önleme ve tedavi." />
        <meta name="twitter:image" content="https://medipodo.com/images/blog/batik-tirnak-ankara-podolog.webp" />

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
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
              Batık Tırnak Nedenleri<br />
              <span className="text-blue-200">(Unguis Incarnatus)</span>
            </h1>
            
            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Pdl. Serdar Ceylan</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>20 Kasım 2025 · 10 dakika okuma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Ana Görsel */}
            <img 
              src="/images/blog/batik-tirnak-ankara-podolog.webp" 
              alt="Batık tırnak öncesi ve sonrası görüntüsü"
              width="1200"
              height="675"
              className="w-full h-auto rounded-xl shadow-lg mb-10"
              loading="lazy" decoding="async"
            />

            {/* Giriş */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Batık tırnak, tırnağın yan kenarlarının çevresindeki yumuşak dokuya baskı yapması veya doku içine gömülmesiyle oluşan, ağrılı ve ilerleyici bir ayak sağlığı problemidir. Tıbbi adıyla <strong className="text-blue-900">unguis incarnatus</strong>, hem günlük yaşam kalitesini düşürür hem de tedavi edilmediğinde enfeksiyonlara yol açabilir.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Bu yazıda batık tırnak neden olur, hangi faktörler riski artırır ve nasıl önlenebilir sorularını podolojik bakış açısıyla ele alıyoruz.
              </p>
            </section>

            {/* Batık Tırnak Nedir? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Batık Tırnak Nedir?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Batık tırnak, genellikle ayak başparmağında görülen ve tırnağın yan kenarının deri içine doğru büyümesiyle ortaya çıkan bir durumdur. Erken dönemde hafif hassasiyet ve kızarıklık görülürken, ilerleyen evrelerde şiddetli ağrı, akıntı ve enfeksiyon gelişebilir.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="text-gray-800">
                  👉 Batık tırnak hakkında daha fazla bilgi için <Link to="/blog/tirnakbatmasi" className="text-blue-600 hover:text-blue-800 font-semibold underline">tırnak batması rehberimizi</Link> inceleyebilirsiniz.
                </p>
              </div>
            </section>

            {/* Batık Tırnak Neden Oluşur? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">
                Batık Tırnak Neden Oluşur?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Batık tırnak tek bir nedene bağlı değildir. Çoğu vakada birden fazla faktör birlikte rol oynar.
              </p>

              {/* 1. Yanlış Tırnak Kesimi */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="text-red-500 mr-3" size={24} />
                  Yanlış Tırnak Kesimi
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Batık tırnağın <strong>en yaygın nedeni</strong> yanlış tırnak kesimidir. Özellikle:
                </p>
                <ul className="list-none text-gray-700 space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Tırnakların oval kesilmesi
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Köşelerin derin şekilde alınması
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Tırnağın gereğinden çok kısa kesilmesi
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  tırnak köşelerinin büyüme sırasında deri içine yönelmesine neden olur.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 font-medium flex items-center">
                    <CheckCircle2 className="mr-2" size={20} />
                    Tırnaklar her zaman düz (transvers) kesilmeli, köşeler derinleştirilmemelidir.
                  </p>
                </div>
                <p className="text-gray-700 mt-4">
                  👉 İlgili yazılar: <Link to="/blog/tirnak-neden-uzamaz" className="text-blue-600 hover:text-blue-800 font-semibold underline">Tırnak neden uzamaz</Link> · <Link to="/blog/tirnak-neden-kalinlasir" className="text-blue-600 hover:text-blue-800 font-semibold underline">Tırnak neden kalınlaşır</Link>
                </p>
              </div>

              {/* 2. Dar Ayakkabılar */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  👟 Dar ve Uygun Olmayan Ayakkabılar
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dar burunlu, sert veya ayağa küçük gelen ayakkabılar, parmakları sıkıştırarak tırnağın yan dokulara baskı yapmasına yol açar. Uzun süre bu baskıya maruz kalan tırnak zamanla batmaya başlar.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <span className="text-2xl mb-2 block">👠</span>
                    <p className="text-gray-700 text-sm">Sivri burunlu ayakkabılar</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <span className="text-2xl mb-2 block">👢</span>
                    <p className="text-gray-700 text-sm">Yüksek topuklular</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <span className="text-2xl mb-2 block">👟</span>
                    <p className="text-gray-700 text-sm">Yanlış numara spor ayakkabı</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  👉 İlgili yazılar: <Link to="/blog/ayak-sagligi-ipuclari" className="text-blue-600 hover:text-blue-800 font-semibold underline">Ayak sağlığı ipuçları</Link> · <Link to="/blog/topuk-dikeni" className="text-blue-600 hover:text-blue-800 font-semibold underline">Topuk dikeni</Link>
                </p>
              </div>

              {/* 3. Tırnak Mantarı */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  🦠 Tırnak Mantarı ve Enfeksiyonlar
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tırnak mantarı, tırnağın <strong>kalınlaşmasına</strong>, <strong>sertleşmesine</strong> ve <strong>şeklini kaybetmesine</strong> neden olur. Yapısı bozulan tırnak, yan dokulara daha fazla baskı yaparak batık tırnak oluşumunu kolaylaştırır.
                </p>
                <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg mb-4">
                  <p className="text-purple-800 font-medium">
                    ⚠️ Mantarlı tırnaklarda batık tırnak riski belirgin şekilde artar.
                  </p>
                </div>
                <p className="text-gray-700">
                  👉 İlgili sayfalar: <Link to="/blog/tirnak-mantari-tedavisi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Tırnak mantarı tedavisi</Link> · <Link to="/hizmet/tirnak-mantari" className="text-blue-600 hover:text-blue-800 font-semibold underline">Tırnak mantarı hizmeti</Link>
                </p>
              </div>

              {/* 4. Genetik Faktörler */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  🧬 Genetik ve Anatomik Faktörler
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Bazı kişiler doğuştan batık tırnağa daha yatkındır. Risk oluşturan anatomik özellikler:
                </p>
                <ul className="list-none text-gray-700 space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    İçe kıvrık (kıskaç) tırnak yapısı
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    Kalın yan tırnak kıvrımları
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    Başparmak eğrilikleri (halluks valgus)
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Bu kişilerde doğru tırnak kesimi yapılsa bile batık tırnak daha kolay gelişebilir.
                </p>
                <p className="text-gray-700">
                  👉 İlgili yazı: <Link to="/blog/cocuk-ayak-sagligi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Çocuk ayak sağlığı rehberi</Link>
                </p>
              </div>

              {/* 5. Diyabet */}
              <div className="mb-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl shadow-md p-6 border border-red-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Heart className="text-red-500 mr-3" size={24} />
                  Diyabet ve Sistemik Hastalıklar
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Diyabet gibi sistemik hastalıklarda:
                </p>
                <ul className="list-none text-gray-700 space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">⚠️</span>
                    Duyu kaybı nedeniyle batık tırnak geç fark edilir
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">⚠️</span>
                    Dolaşım bozukluğu iyileşmeyi zorlaştırır
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">⚠️</span>
                    Enfeksiyon riski artar
                  </li>
                </ul>
                <div className="bg-white p-4 rounded-lg border border-red-300">
                  <p className="text-red-800 font-semibold">
                    🔴 Diyabetli bireylerde batık tırnak çok daha dikkatli takip edilmelidir.
                  </p>
                </div>
                <p className="text-gray-700 mt-4">
                  👉 İlgili yazılar: <Link to="/blog/diyabet-ve-ayak-sagligi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Diyabet ve ayak sağlığı</Link> · <Link to="/blog/medikal-ayak-bakimi-kimler-icin-gereklidir" className="text-blue-600 hover:text-blue-800 font-semibold underline">Medikal ayak bakımı kimler için gereklidir</Link>
                </p>
              </div>
            </section>

            {/* Risk Grupları */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">
                Batık Tırnak Kimlerde Daha Sık Görülür?
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-lg transition-shadow">
                  <Users className="mx-auto text-blue-600 mb-3" size={32} />
                  <p className="font-semibold text-gray-900">Sporcular</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-lg transition-shadow">
                  <span className="text-3xl mb-2 block">👞</span>
                  <p className="font-semibold text-gray-900">Uzun süre kapalı ayakkabı giyenler</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-lg transition-shadow">
                  <span className="text-3xl mb-2 block">🧑‍🎓</span>
                  <p className="font-semibold text-gray-900">Ergenlik çağındaki gençler</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-lg transition-shadow">
                  <span className="text-3xl mb-2 block">💉</span>
                  <p className="font-semibold text-gray-900">Diyabet hastaları</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-lg transition-shadow">
                  <span className="text-3xl mb-2 block">👴</span>
                  <p className="font-semibold text-gray-900">Yaşlı bireyler</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="text-gray-800">
                  Risk grubundaki kişilerin düzenli ayak ve tırnak kontrolü yaptırması önemlidir.
                  <br /><br />
                  👉 Profesyonel değerlendirme için <Link to="/ayak-analizi" className="text-blue-600 hover:text-blue-800 font-semibold underline">ayak analizi</Link> hizmetimizden yararlanabilirsiniz.
                </p>
              </div>
            </section>

            {/* Belirtiler */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Batık Tırnak Belirtileri Nelerdir?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Batık tırnak belirtileri evrelere göre değişir:
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center bg-yellow-50 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                  <p className="text-gray-700">Tırnak kenarında kızarıklık ve hassasiyet</p>
                </div>
                <div className="flex items-center bg-orange-50 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                  <p className="text-gray-700">Şişlik ve ağrı</p>
                </div>
                <div className="flex items-center bg-red-50 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                  <p className="text-gray-700">Akıntı ve enfeksiyon</p>
                </div>
                <div className="flex items-center bg-red-100 p-4 rounded-lg">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                  <p className="text-gray-700">Et büyümesi (granülasyon dokusu)</p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-300 p-4 rounded-lg">
                <p className="text-amber-800 font-medium">
                  ⚠️ Belirtiler ilerledikçe evde müdahale yeterli olmaz.
                </p>
              </div>

              <p className="text-gray-700 mt-4">
                👉 Detaylı belirti listesi için <Link to="/blog/tirnakbatmasi" className="text-blue-600 hover:text-blue-800 font-semibold underline">tırnak batması</Link> yazımızı inceleyebilirsiniz.
              </p>
            </section>

            {/* Önleme */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-green-600 pl-4">
                Batık Tırnak Oluşmadan Nasıl Önlenir?
              </h2>
              
              <div className="bg-green-50 rounded-xl p-6 mb-6">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Batık tırnağı önlemek için:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    Tırnaklar düz kesilmeli
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    Dar ve sivri ayakkabılardan kaçınılmalı
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    Ayak hijyenine dikkat edilmeli
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0" size={20} />
                    Kalınlaşan ve şekli bozulan tırnaklar ihmal edilmemelidir
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="text-gray-800 font-semibold">
                  ✨ Düzenli profesyonel ayak bakımı, batık tırnak riskini ciddi oranda azaltır.
                </p>
                <p className="text-gray-700 mt-2">
                  👉 <Link to="/ayak-bakim-kilavuzu" className="text-blue-600 hover:text-blue-800 font-semibold underline">Ayak bakım kılavuzumuzu</Link> ve <Link to="/sikca-sorulan-sorular" className="text-blue-600 hover:text-blue-800 font-semibold underline">SSS</Link> sayfamızı ziyaret edebilirsiniz.
                </p>
              </div>
            </section>

            {/* Ne Yapılmalı? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Batık Tırnak Oluştuysa Ne Yapılmalı?
              </h2>
              
              <div className="bg-red-50 border border-red-200 p-6 rounded-xl mb-6">
                <p className="text-red-800 leading-relaxed">
                  <strong>⚠️ Önemli:</strong> Batık tırnak ilerlemişse, tırnağı keserek veya evde müdahale ederek çözmeye çalışmak durumu daha da kötüleştirebilir.
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Bu aşamada podolojik değerlendirme ve uygun tedavi yöntemleri tercih edilmelidir.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/hizmet/batik-tirnak" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:scale-[1.02] border border-gray-100">
                  <h4 className="font-bold text-blue-900 mb-2">🩺 Batık Tırnak Tedavisi</h4>
                  <p className="text-gray-600 text-sm">Profesyonel podolojik tedavi hizmetlerimiz</p>
                </Link>
                <Link to="/blog/bs-bant-uygulamasi" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:scale-[1.02] border border-gray-100">
                  <h4 className="font-bold text-blue-900 mb-2">🎯 B/S Bant Uygulaması</h4>
                  <p className="text-gray-600 text-sm">Modern ve ağrısız tedavi yöntemi</p>
                </Link>
              </div>
            </section>

            {/* Sonuç */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Sonuç
              </h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Batık tırnak, doğru önlemlerle büyük ölçüde <strong>önlenebilen</strong> ancak ihmal edildiğinde ciddi sorunlara yol açabilen bir problemdir. Erken fark edilen batık tırnaklarda profesyonel destek almak, hem ağrıyı azaltır hem de ileride oluşabilecek komplikasyonların önüne geçer.
                </p>
              </div>
            </section>

            {/* SSS - Accordion */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                ❓ Sıkça Sorulan Sorular
              </h2>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
                      aria-expanded={openFaqIndex === index}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {item.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openFaqIndex === index ? (
                          <ChevronUp className="text-blue-700" size={24} />
                        ) : (
                          <ChevronDown className="text-gray-400" size={24} />
                        )}
                      </div>
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-6 pb-5">
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Batık Tırnak Tedavisi İçin Randevu Alın
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Ağrısız ve profesyonel tedavi için uzman ekibimizle iletişime geçin.
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

export default BatikTirnakNedenleri;
