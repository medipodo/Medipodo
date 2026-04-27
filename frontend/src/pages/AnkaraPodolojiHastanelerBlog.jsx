## 📋 ADIMLAR (GitHub üzerinden çok kolay)

### Adım 1: GitHub'da Dosyayı Aç ve Düzenle

1. Tarayıcıda şu URL'i aç:
   **https://github.com/medipodo/Medipodo/blob/main/frontend/src/pages/AnkaraPodolojiHastanelerBlog.jsx**

2. Sağ üstteki **kalem ikonuna 🖉** tıkla ("Edit this file")

### Adım 2: İçeriği Tamamen Sil

1. Editörün içine tıkla
2. **Ctrl + A** (tümünü seç)
3. **Delete** tuşuna bas → tamamen boşalsın

### Adım 3: Aşağıdaki Temiz Versiyonu Yapıştır

⬇️ **Aşağıdaki kodun TAMAMINI** kopyala (`import` ile başlayan ilk satırdan, `export default` ile biten son satıra kadar) ve boş editöre yapıştır:
Action: $ cat /tmp/temiz.jsx
Observation: import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, Phone, ChevronDown, ChevronUp, MessageCircle, Hospital, ShieldCheck, Footprints, AlertTriangle } from 'lucide-react';
import { Helmet } from 'react-helmet';

const AnkaraPodolojiHastanelerBlog = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Devlet hastanesinde podolog var mı?",
      answer: "Genellikle ayrı bir podoloji bölümü bulunmaz. Hizmet ortopedi veya dermatoloji altında verilir."
    },
    {
      question: "Podoloji ücretli mi?",
      answer: "Evet, podoloji hizmetleri çoğunlukla özel kapsamda sunulur."
    },
    {
      question: "Batık tırnak için hastane mi podolog mu?",
      answer: "Hafif ve orta vakalarda podolog, ileri vakalarda hastane tercih edilir."
    },
    {
      question: "Tırnak mantarı için nereye gidilmeli?",
      answer: "İlaç tedavisi için dermatoloji, bakım süreci için podolog tercih edilmelidir."
    }
  ];

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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ankara'da Podoloji Bölümü Olan Hastaneler",
    "description": "Ankara'da podoloji hizmeti veren hastaneler hangileri? Devlet hastanesinde podoloji var mı? SGK karşılıyor mu? Detaylı rehber.",
    "image": "https://customer-assets.emergentagent.com/job_ee16882e-0172-4831-99c6-2da907c9d9d5/artifacts/atv5cvxu_ankarada-podoloji-olan-hastaneler.webp",
    "author": {
      "@type": "Organization",
      "name": "Medipodo"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Medipodo",
      "logo": {
        "@type": "ImageObject",
        "url": "https://medipodo.com/images/logo.png"
      }
    },
    "mainEntityOfPage": "https://medipodo.com/blog/ankara-podoloji-bolumu-olan-hastaneler"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://medipodo.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://medipodo.com/blog" },
      { "@type": "ListItem", "position": 3, "name": "Ankara'da Podoloji Bölümü Olan Hastaneler", "item": "https://medipodo.com/blog/ankara-podoloji-bolumu-olan-hastaneler" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Ankara'da Podoloji Bölümü Olan Hastaneler | Medipodo</title>
        <meta name="description" content="Ankara'da podoloji hizmeti veren hastaneler hangileri? Devlet hastanesinde podoloji var mı? SGK karşılıyor mu? Tüm detaylar bu rehberde." />
        <meta name="keywords" content="ankara podoloji hastaneleri, ankara podoloji bölümü olan hastaneler, devlet hastanesinde podoloji, sgk podoloji, başkent üniversitesi podoloji, acıbadem podoloji, podolog ankara" />
        <link rel="canonical" href="https://medipodo.com/blog/ankara-podoloji-bolumu-olan-hastaneler" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Ankara'da Podoloji Bölümü Olan Hastaneler" />
        <meta property="og:description" content="Ankara'da podoloji hizmeti veren hastaneler hangileri? Devlet hastanesinde podoloji var mı? SGK karşılıyor mu? Tüm detaylar bu rehberde." />
        <meta property="og:image" content="https://customer-assets.emergentagent.com/job_ee16882e-0172-4831-99c6-2da907c9d9d5/artifacts/atv5cvxu_ankarada-podoloji-olan-hastaneler.webp" />
        <meta property="og:url" content="https://medipodo.com/blog/ankara-podoloji-bolumu-olan-hastaneler" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ankara'da Podoloji Bölümü Olan Hastaneler" />
        <meta name="twitter:description" content="Ankara'da podoloji hizmeti veren hastaneler hangileri? SGK karşılıyor mu? Detaylı rehber." />
        <meta name="twitter:image" content="https://customer-assets.emergentagent.com/job_ee16882e-0172-4831-99c6-2da907c9d9d5/artifacts/atv5cvxu_ankarada-podoloji-olan-hastaneler.webp" />

        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-32 pb-16">
          <div className="container mx-auto px-4">
            <Link to="/blog" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors" data-testid="back-to-blog">
              <ArrowLeft size={20} className="mr-2" />
              Blog'a Dön
            </Link>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="blog-title">
              Ankara'da Podoloji Bölümü<br />
              <span className="text-blue-200">Olan Hastaneler</span>
            </h1>

            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Podolog Serdar Ceylan</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>Medipodo · 9 dakika okuma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">

            {/* Giriş */}
            <section className="mb-10">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Ankara'da podoloji hizmeti arayanların ilk baktığı yer genellikle hastaneler oluyor. Ancak çoğu kişinin bilmediği önemli bir detay var: Türkiye'de podoloji, her hastanede bağımsız bir bölüm olarak yer almaz.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Bu yüzden "Ankara'da podoloji var mı?" sorusunun cevabı çoğu zaman beklenenden farklıdır.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 bg-blue-50 p-4 rounded-lg border-l-2 border-blue-400 italic">
                Ayrıca en çok merak edilen konulardan biri de şudur: SGK podoloji hizmetini karşılıyor mu?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Bu içerikte Ankara'da podoloji hizmeti sunan hastaneleri, bu hizmetin kapsamını ve hangi durumda nereye başvurmanız gerektiğini net şekilde bulabilirsiniz.
              </p>
            </section>

            {/* Kapak Görseli */}
            <div className="mb-12">
              <img
                src="https://customer-assets.emergentagent.com/job_ee16882e-0172-4831-99c6-2da907c9d9d5/artifacts/atv5cvxu_ankarada-podoloji-olan-hastaneler.webp"
                alt="Ankara'da podoloji bölümü olan hastaneler - kapsamlı rehber"
                width="1200"
                height="675"
                className="w-full h-auto rounded-xl shadow-lg"
                loading="eager"
              />
            </div>

            {/* Öne Çıkan Snippet Cevap */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 rounded-xl p-6 md:p-8 shadow-sm">
                <h2 className="text-xl md:text-2xl font-bold text-blue-950 mb-3">
                  Ankara'da podoloji bölümü olan hastaneler hangileridir?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Ankara'da podoloji hizmeti sunan başlıca hastaneler; <strong>Başkent Üniversitesi Hastanesi</strong>, <strong>Acıbadem Ankara Hastanesi</strong> ve <strong>Kızılay Sağlık Merkezi</strong>'dir. Devlet hastanelerinde ise podoloji genellikle ayrı bir bölüm olarak bulunmaz, ortopedi veya dermatoloji altında hizmet verilir.
                </p>
              </div>
            </section>

            {/* ==================== */}
            {/* HASTANELER */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ankara'da Podoloji Hizmeti Veren Hastaneler
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Ankara'da podoloji hizmeti sunan hastane sayısı oldukça sınırlıdır ve bu hizmet genellikle özel hastanelerde bulunur.
              </p>

              <div className="mb-6 bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-400">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Hospital size={22} className="text-blue-500 mr-2" />
                  Başkent Üniversitesi Hastanesi
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Podoloji hizmeti bulunan sayılı özel hastanelerden biridir. Ayak sağlığına yönelik bakım ve uygulamalar yapılmaktadır.
                </p>
              </div>

              <div className="mb-6 bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-400">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Hospital size={22} className="text-teal-500 mr-2" />
                  Acıbadem Ankara Hastanesi
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ayak sağlığı ve podoloji kapsamında hizmet sunan özel hastaneler arasında yer alır.
                </p>
              </div>

              <div className="mb-6 bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-400">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Hospital size={22} className="text-amber-500 mr-2" />
                  Kızılay Sağlık Merkezi
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Podoloji hizmeti sunan merkezlerden biridir. Daha çok temel bakım uygulamaları yapılır.
                </p>
              </div>

              <div className="mb-6 bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-400">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Hospital size={22} className="text-purple-500 mr-2" />
                  Ankara Üniversitesi (Cebeci Yerleşkesi)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Podoloji eğitimi ve uygulamaları bulunan akademik bir yapıdır. Klinik hizmetten ziyade eğitim ağırlıklıdır.
                </p>
              </div>
            </section>

            {/* ==================== */}
            {/* SGK */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                SGK Podoloji Hizmetini Karşılıyor mu?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                SGK (Sosyal Güvenlik Kurumu) podoloji hizmetlerini genel olarak karşılamaz. Bunun temel nedeni, podoloji uygulamalarının çoğunlukla "bakım ve koruyucu hizmet" kapsamında değerlendirilmesidir.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Devlet hastanelerinde ayak sağlığıyla ilgili işlemler yapılabilse de, bu hizmetler genellikle ortopedi, dermatoloji veya diyabetik ayak birimleri üzerinden yürütülür. Tıbbi tedavi gerektiren durumlarda SGK belirli işlemleri karşılayabilir.
              </p>

              <p className="text-gray-700 mb-4 font-semibold">
                Ancak aşağıdaki podolojik uygulamalar çoğunlukla SGK kapsamına girmez:
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ShieldCheck size={18} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Batık tırnak bakımı (ameliyatsız)</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck size={18} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Nasır temizliği</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck size={18} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Medikal ayak bakımı</span>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck size={18} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
                    <span>Tırnak mantarında düzenli bakım süreçleri</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Özetle; podoloji hizmetleri büyük ölçüde özel hizmet olarak sunulur ve genellikle ücretlidir.
              </p>

              <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg border-l-2 border-blue-400 italic">
                👉 Özellikle tekrar eden ayak problemlerinde düzenli bakım gerektiği için podoloji merkezleri daha sürdürülebilir bir çözüm sunar.
              </p>
            </section>

            {/* ==================== */}
            {/* DEVLET HASTANELERI */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Devlet Hastanelerinde Podoloji Var mı?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Kısa cevap:</strong> Genellikle yoktur.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Devlet hastanelerinde "podoloji" adıyla ayrı bir bölüm çoğunlukla bulunmaz. Bunun yerine:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-blue-500">
                  <h3 className="font-bold text-gray-900 mb-2">Ortopedi</h3>
                  <p className="text-sm text-gray-600">Yapısal ve cerrahi değerlendirme</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-teal-500">
                  <h3 className="font-bold text-gray-900 mb-2">Dermatoloji</h3>
                  <p className="text-sm text-gray-600">Cilt ve tırnak hastalıkları</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-amber-500">
                  <h3 className="font-bold text-gray-900 mb-2">Diyabetik Ayak Birimleri</h3>
                  <p className="text-sm text-gray-600">Diyabete bağlı ayak komplikasyonları</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                üzerinden dolaylı hizmet verilir. Bu nedenle kullanıcılar podoloji hizmeti olmadığını düşünebilir, ancak aslında hizmet farklı branşlar altında sunulmaktadır.
              </p>
            </section>

            {/* ==================== */}
            {/* NEDEN SINIRLI */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Hastanelerde Podoloji Hizmeti Neden Sınırlı?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Hastaneler daha çok:
              </p>

              <ul className="space-y-2 text-gray-700 mb-6 bg-white rounded-xl shadow-md p-6">
                <li className="flex items-start"><span className="text-blue-500 mr-3 mt-1 font-bold">•</span>Tanı koyma</li>
                <li className="flex items-start"><span className="text-blue-500 mr-3 mt-1 font-bold">•</span>Tıbbi müdahale</li>
                <li className="flex items-start"><span className="text-blue-500 mr-3 mt-1 font-bold">•</span>Cerrahi işlemler</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">üzerine odaklanır. Bu nedenle:</p>

              <ul className="space-y-2 text-gray-700 mb-6 bg-amber-50 rounded-xl p-6 border border-amber-200">
                <li className="flex items-start"><span className="text-amber-600 mr-3 mt-1 font-bold">•</span>Uzun süreli bakım süreçleri</li>
                <li className="flex items-start"><span className="text-amber-600 mr-3 mt-1 font-bold">•</span>Kişiye özel düzenli uygulamalar</li>
                <li className="flex items-start"><span className="text-amber-600 mr-3 mt-1 font-bold">•</span>Tekrarlayan ayak problemleri</li>
              </ul>

              <p className="text-gray-700 leading-relaxed">genellikle sınırlı kalır.</p>
            </section>

            {/* ==================== */}
            {/* MERKEZ vs HASTANE */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Podoloji Merkezi ile Hastane Arasındaki Fark
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Podoloji merkezleri özellikle bakım ve süreç yönetiminde öne çıkar.
              </p>

              <p className="text-gray-700 mb-4 font-semibold">Örnek olarak:</p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
                  <h3 className="font-bold text-gray-900 mb-2">Batık Tırnak</h3>
                  <p className="text-gray-700 text-sm">Ameliyatsız çözümler</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-teal-500">
                  <h3 className="font-bold text-gray-900 mb-2">Nasır</h3>
                  <p className="text-gray-700 text-sm">Tekrar etmeyi önleyen uygulamalar</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-amber-500">
                  <h3 className="font-bold text-gray-900 mb-2">Tırnak Mantarı</h3>
                  <p className="text-gray-700 text-sm">Düzenli takip gerektirir</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                👉 Detaylı hizmetlere göz at: <Link to="/hizmetler" className="text-blue-600 hover:text-blue-800 font-semibold underline">Medipodo Hizmetlerimiz</Link>
              </p>
            </section>

            {/* ==================== */}
            {/* HANGİ DURUMDA HANGİSİ */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Hangi Durumda Hastane, Hangi Durumda Podolog?
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-red-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Hospital size={20} className="text-red-500 mr-2" />
                    Hastane Tercih Edilmeli
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-red-500 mr-2 font-bold">•</span>Enfeksiyon varsa</li>
                    <li className="flex items-start"><span className="text-red-500 mr-2 font-bold">•</span>Diyabetik komplikasyon varsa</li>
                    <li className="flex items-start"><span className="text-red-500 mr-2 font-bold">•</span>Cerrahi gerekiyorsa</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <Footprints size={20} className="text-green-500 mr-2" />
                    Podoloji Merkezi Tercih Edilmeli
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">•</span>Batık tırnak</li>
                    <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">•</span>Nasır</li>
                    <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">•</span>Tırnak mantarı</li>
                    <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">•</span>Düzenli ayak bakımı</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                👉 Batık tırnak hakkında detay: <Link to="/blog/batik-tirnak-nedenleri" className="text-blue-600 hover:text-blue-800 font-semibold underline">Batık Tırnak Nedenleri</Link>
              </p>
            </section>

            {/* ==================== */}
            {/* ÖNERİ */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ankara'da Podoloji Hizmeti Arayanlar İçin Öneri
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Eğer sadece geçici çözüm değil, aynı zamanda:
              </p>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">Düzenli takip</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">Tekrar etmeyen sonuç</span>
                  </div>
                  <div className="flex items-center bg-white p-3 rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">Kişiye özel bakım</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                arıyorsanız, podoloji merkezleri daha doğru bir tercih olabilir.
              </p>

              <p className="text-gray-700 leading-relaxed">
                👉 Ücretsiz analiz hakkında bilgi: <Link to="/ayak-analizi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Ayak Analizi</Link>
              </p>
            </section>

            {/* ==================== */}
            {/* WHATSAPP CTA - ORTA */}
            {/* ==================== */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 md:p-8 text-white">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center">
                    <MessageCircle size={32} className="mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-lg">Podoloji hizmeti hakkında sorunuz mu var?</p>
                      <p className="text-green-100">Durumunuza özel bilgi almak için WhatsApp üzerinden fotoğraf göndererek ön değerlendirme talep edebilirsiniz.</p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/905456569747?text=Merhaba,%20Ankara'da%20podoloji%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-green-600 px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-colors flex items-center whitespace-nowrap"
                    data-testid="whatsapp-mid-cta"
                  >
                    <MessageCircle size={20} className="mr-2" />
                    WhatsApp'tan Yazın
                  </a>
                </div>
              </div>
            </section>

            {/* ==================== */}
            {/* SSS */}
            {/* ==================== */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Sıkça Sorulan Sorular (SSS)
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
                      data-testid={`faq-toggle-${index}`}
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
                        {index === 3 && (
                          <p className="text-gray-600 mt-3">
                            Detaylı bilgi: <Link to="/blog/tirnak-mantari-tedavisi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Tırnak Mantarı Tedavisi</Link>
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* ==================== */}
            {/* MEDIPODO BAĞLICA */}
            {/* ==================== */}
            <section className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Medipodo Ankara Bağlıca'da Podolojik Bakım
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Medipodo olarak Ankara Bağlıca'da, ayak sağlığına yönelik podolojik bakım hizmetleri sunuyoruz. Her danışanın ihtiyacına göre planlanan bakım süreci ile ilerlenir.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Hastane yerine düzenli takip gerektiren batık tırnak, nasır ve tırnak mantarı gibi konularda uzman desteği almak için podoloji merkezimiz ile iletişime geçebilirsiniz.
                </p>
                <p className="text-gray-700">
                  Hizmetlerimiz ve fiyatlarımız hakkında daha fazla bilgi için <Link to="/baglica-podolog-fiyatlari" className="text-blue-600 hover:text-blue-800 font-semibold underline">Bağlıca podolog fiyatları</Link> sayfamızı veya <Link to="/blog/podolog-fiyatlari-ankara" className="text-blue-600 hover:text-blue-800 font-semibold underline">Podolog Fiyatları Ankara</Link> rehberimizi inceleyebilirsiniz.
                </p>
              </div>
            </section>

            {/* ==================== */}
            {/* SON CTA */}
            {/* ==================== */}
            <section className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl p-8 md:p-10 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Profesyonel Podolojik Destek Alın
              </h2>
              <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
                Durumunuza özel bakım planı için bizimle iletişime geçebilirsiniz. WhatsApp üzerinden fotoğraf göndererek ön değerlendirme talep edebilirsiniz.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/905456569747?text=Merhaba,%20Ankara'da%20podoloji%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-400 transition-all transform hover:scale-105 shadow-lg"
                  data-testid="whatsapp-bottom-cta"
                >
                  <MessageCircle className="mr-2" size={24} />
                  WhatsApp ile Yazın
                </a>
                <a
                  href="tel:05456569747"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                >
                  <Phone className="mr-2" size={24} />
                  0545 656 97 47
                </a>
              </div>
              <p className="text-blue-200 mt-6 text-sm">
                Ankara Bağlıca'da profesyonel ayak bakımı hizmeti
              </p>
            </section>

          </div>
        </div>
      </article>
    </>
  );
};

export default AnkaraPodolojiHastanelerBlog;
Exit code: 0
