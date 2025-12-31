import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, ChevronDown, ChevronUp, Phone, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const TirnakMantariBlog = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Tırnak mantarı tamamen geçer mi?",
      answer: "Evet. Ancak ayak tırnakları yavaş uzar. Tedavi sabır gerektirir."
    },
    {
      question: "Evde kullanılan ürünler neden işe yaramıyor?",
      answer: "Çünkü kalın tırnak tabakası ilacın mantara ulaşmasını engeller."
    },
    {
      question: "Lazer tek başına yeterli mi?",
      answer: "Hayır. Destekleyicidir, tek başına mucize değildir."
    },
    {
      question: "Tedavi sonrası tekrarlar mı?",
      answer: "Yanlış ayakkabı ve bakım alışkanlıkları devam ederse tekrar edebilir."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Tırnak mantarı tamamen geçer mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet. Ancak ayak tırnakları yavaş uzar. Tedavi sabır gerektirir."
        }
      },
      {
        "@type": "Question",
        "name": "Evde kullanılan ürünler neden işe yaramıyor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Çünkü kalın tırnak tabakası ilacın mantara ulaşmasını engeller."
        }
      },
      {
        "@type": "Question",
        "name": "Lazer tek başına yeterli mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hayır. Destekleyicidir, tek başına mucize değildir."
        }
      },
      {
        "@type": "Question",
        "name": "Tedavi sonrası tekrarlar mı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yanlış ayakkabı ve bakım alışkanlıkları devam ederse tekrar edebilir."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Tırnak Mantarı (Onikomikoz) Tedavisi | Podolojik Yaklaşım – Medipodo</title>
        <meta name="description" content="Tırnak mantarı (onikomikoz) nedir, neden geçmez? Dermatofit mantarlar, klinik tipler, tanı ve tedavi. Ankara'da profesyonel podolojik yaklaşım." />
        <meta name="keywords" content="tırnak mantarı, onikomikoz, dermatofit, tırnak mantarı tedavisi, Ankara podolog, ayak mantarı" />
        <link rel="canonical" href="https://medipodo.com/blog/tirnak-mantari-tedavisi" />
        
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Onikomikoz (Tırnak Mantarı): Mikrobiyolojiden Modern Tedaviye Podolojik Bakış" />
        <meta property="og:description" content="Tırnak mantarı neden geçmez? Bilimsel ama anlaşılır açıklama. Tedavi süreci ve podolojik yaklaşım." />
        <meta property="og:image" content="https://medipodo.com/images/blog/tirnak-mantari/onikomikoz.webp" />
        <meta property="og:url" content="https://medipodo.com/blog/tirnak-mantari-tedavisi" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Onikomikoz (Tırnak Mantarı): Podolojik Bakış" />
        <meta name="twitter:description" content="Tırnak mantarı neden geçmez? Bilimsel açıklama ve tedavi süreci." />
        <meta name="twitter:image" content="https://medipodo.com/images/blog/tirnak-mantari/onikomikoz.webp" />

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
              Onikomikoz (Tırnak Mantarı) Tedavisi:<br />
              Podolojik Bakışla Neden, Süreç ve Kalıcı Çözümler
            </h1>
            
            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Podolog Serdar Ceylan</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>18 dakika okuma</span>
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>30 Aralık 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">

            {/* Bu Yazı Kimler İçin Hazırlandı - EN ÜSTTE */}
            <section className="mb-12 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                🔍 Bu yazı kimler için hazırlandı?
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Tırnak mantarı (onikomikoz), oldukça can sıkıcı ve yorucu süreç gerektiren bir problemdir. Geçmeyen kalınlaşmalar, renk değişiklikleri, tırnak altında biriken tabakalar çoğu zaman daha derin bir sorunun habercisi olabilir. <strong>Aman dikkat!</strong>
              </p>

              <p className="text-gray-800 font-medium mb-3">Bu yazı;</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                <li>Tırnak mantarı neden geçmiyor diye merak edenler</li>
                <li>Evde kullanılan ürünlerden sonuç alamayanlar</li>
                <li>Bilimsel ama anlaşılır bir açıklama arayanlar</li>
                <li>Tedavi sürecini gerçekten anlamak isteyenler</li>
              </ul>

              <p className="text-gray-700">için hazırlanmıştır.</p>

              <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
                <p className="text-gray-700">
                  📌 <strong>Aktif tırnak mantarı şikâyetiniz varsa</strong> ve Ankara'da profesyonel destek arıyorsanız,
                </p>
                <p className="mt-2">
                  👉 <Link to="/hizmet/tirnak-mantari" className="text-blue-600 hover:text-blue-800 font-semibold underline">Tırnak Mantarı Tedavisi</Link> hizmet sayfamızı inceleyebilirsiniz.
                </p>
              </div>
            </section>

            {/* Ana Görsel */}
            <img 
              src="/images/blog/tirnak-mantari/onikomikoz.webp" 
              alt="Tırnak mantarı (onikomikoz) - profesyonel podolojik değerlendirme"
              width="800"
              height="400"
              className="w-full h-auto rounded-xl shadow-lg mb-12"
              loading="lazy" decoding="async"
            />

            {/* Onikomikoz Nedir? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Onikomikoz Nedir?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Onikomikoz; tırnak plağının, tırnak yatağının veya tırnak kökünün mantar mikroorganizmaları tarafından enfekte edilmesiyle oluşan bir hastalıktır.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Dünya genelinde görülme sıklığı <strong>%2–14</strong> arasındadır ve yaş ilerledikçe artar. <strong>70 yaş üzerindeki bireylerde her iki kişiden birinde</strong> tırnak mantarı görülmektedir.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-6">
                <p className="text-gray-800 font-medium flex items-center">
                  <AlertTriangle className="mr-2 text-yellow-600" size={20} />
                  Ancak asıl sorun şudur: Tırnak mantarı çoğu zaman fark edildiğinde artık ilerlemiş olur.
                </p>
              </div>
            </section>

            {/* Tırnak Mantarı Neden Kolay Geçmez? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Tırnak Mantarı Neden Kolay Geçmez?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4">Çünkü tırnak;</p>

              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6 ml-4">
                <li>Kalın, sert ve keratin yapılıdır</li>
                <li>Dışarıdan sürülen ürünlerin alt tabakalara ulaşması zordur</li>
                <li>Yanlış kesim ve basınçla daha da savunmasız hâle gelir</li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <p className="text-gray-800 font-medium">
                  Bu yüzden yalnızca "bir şey sürmek" çoğu zaman yeterli olmaz.
                </p>
              </div>
            </section>

            {/* Görsel 2 */}
            <img 
              src="/images/blog/tirnak-mantari/onikomikoz-before.webp" 
              alt="Tırnak mantarı tedavi öncesi görünüm - kalınlaşmış ve renk değişikliği olan tırnak"
              width="800"
              height="400"
              className="w-full h-auto rounded-xl shadow-lg mb-12"
              loading="lazy"
            />

            {/* Medipodo'da Tırnak Mantarı Nasıl Değerlendirilir? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Medipodo'da Tırnak Mantarı Nasıl Değerlendirilir?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Medipodo'da tırnak mantarı tek başına mantar olarak ele alınmaz. Şu sorular mutlaka cevaplanır:
              </p>

              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    Tırnak neden kalınlaştı?
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    Ayak mantarı eşlik ediyor mu?
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    Basınç noktaları tırnağı zedeliyor mu?
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    Yanlış ayakkabı kullanımı var mı?
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    Evde yapılan uygulamalar tırnağa zarar verdi mi?
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                <p className="text-gray-800 font-medium">
                  👉 Çünkü mantar, çoğu zaman <strong>zemini hazır olan tırnağa</strong> yerleşir.
                </p>
              </div>
            </section>

            {/* Bilimsel Arka Plan */}
            <section className="mb-12 bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Bilimsel Arka Plan
              </h2>
              
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Fungal Patojenler ve Mikrobiyoloji
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Onikomikoz, bir veya birden fazla fungal organizmanın tırnak yapısını invaze etmesiyle gelişir.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">En sık görülen patojenler:</h4>

              <div className="space-y-4 mb-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h5 className="font-semibold text-blue-800 mb-2">1. Dermatofit Mantarlar (%90)</h5>
                  <ul className="text-gray-600 text-sm space-y-1 ml-4">
                    <li>• Trichophyton rubrum</li>
                    <li>• Trichophyton mentagrophytes</li>
                    <li>• Epidermophyton floccosum</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h5 className="font-semibold text-blue-800 mb-2">2. Non-dermatofit küfler (%10–15)</h5>
                  <ul className="text-gray-600 text-sm space-y-1 ml-4">
                    <li>• Fusarium</li>
                    <li>• Scopulariopsis</li>
                    <li>• Aspergillus</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h5 className="font-semibold text-blue-800 mb-2">3. Mayalar (%5–10)</h5>
                  <ul className="text-gray-600 text-sm space-y-1 ml-4">
                    <li>• Candida albicans</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Görsel 3 - Distal Onikomikoz */}
            <img 
              src="/images/blog/tirnak-mantari/distal-onikomikoz.webp" 
              alt="Distal-lateral subungual onikomikoz - en sık görülen tırnak mantarı tipi"
              width="800"
              height="400"
              className="w-full h-auto rounded-xl shadow-lg mb-12"
              loading="lazy"
            />

            {/* Klinik Tipler */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Klinik Tipler (Özetlenmiş)
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
                  <p className="font-medium text-gray-800">Distal-lateral subungual onikomikoz</p>
                  <p className="text-sm text-gray-500">(en sık)</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-500">
                  <p className="font-medium text-gray-800">Yüzeyel beyaz onikomikoz</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-yellow-500">
                  <p className="font-medium text-gray-800">Proksimal subungual onikomikoz</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-red-500">
                  <p className="font-medium text-gray-800">Total distrofik onikomikoz</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-500 md:col-span-2">
                  <p className="font-medium text-gray-800">Endonyx onikomikoz</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-gray-800">
                  📌 <strong>Klinik tip, tedavi planını doğrudan etkiler.</strong>
                </p>
              </div>
            </section>

            {/* Görsel 4 - Proksimal Onikomikoz */}
            <img 
              src="/images/blog/tirnak-mantari/proximal-onikomikoz.webp" 
              alt="Proksimal subungual onikomikoz - tırnak kökünden başlayan mantar enfeksiyonu"
              width="800"
              height="400"
              className="w-full h-auto rounded-xl shadow-lg mb-12"
              loading="lazy"
            />

            {/* Tanı */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Tanı: Doğru Tedavinin Temeli
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4">Tırnak mantarı;</p>

              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6 ml-4">
                <li>Sedef</li>
                <li>Travma</li>
                <li>Tırnak batması sonrası deformasyon</li>
              </ul>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">ile karışabilir.</p>

              <p className="text-lg text-gray-700 leading-relaxed">Bu nedenle tanı;</p>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6 ml-4">
                <li>Klinik değerlendirme</li>
                <li>Gerekirse laboratuvar destekli</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">olmalıdır.</p>
            </section>

            {/* Tedavi Neden Kişiye Özel? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Tedavi Neden Kişiye Özel Olmalıdır?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong>Her mantar aynı değildir.</strong> Her tırnak da aynı değildir.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">Tedavi planı;</p>

              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6 ml-4">
                <li>Tırnak tutulumu</li>
                <li>Kalınlık</li>
                <li>Yaş</li>
                <li>Diyabet, dolaşım durumu</li>
                <li>Günlük yaşam alışkanlıkları</li>
              </ul>

              <p className="text-lg text-gray-700 leading-relaxed">gibi faktörlere göre şekillenir.</p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mt-6">
                <p className="text-gray-800 font-medium">
                  👉 Bu nedenle <strong>tek tip tedavi yaklaşımı doğru değildir.</strong>
                </p>
              </div>
            </section>

            {/* Medipodo'dan Podolojik Bakış */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Medipodo'dan Podolojik Bakış
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Tırnak mantarı tedavisinde hedef yalnızca mantarı baskılamak değil; <strong>tırnağın tekrar sağlıklı uzayabileceği ortamı oluşturmaktır.</strong>
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">Bu da;</p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl shadow-md p-6 text-center">
                  <CheckCircle className="mx-auto text-green-600 mb-3" size={40} />
                  <p className="font-medium text-gray-800">Profesyonel tırnak inceltme</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 text-center">
                  <CheckCircle className="mx-auto text-green-600 mb-3" size={40} />
                  <p className="font-medium text-gray-800">Doğru bakım eğitimi</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 text-center">
                  <CheckCircle className="mx-auto text-green-600 mb-3" size={40} />
                  <p className="font-medium text-gray-800">Düzenli takip</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mt-6 text-center">ile mümkündür.</p>
            </section>

            {/* SSS - Accordion */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                ❓ Sık Sorulan Sorular
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

            {/* Sonuç */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Sonuç: Entegre Podolojik Yaklaşım
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Onikomikoz, basit bir kozmetik sorun değildir. <strong>Doğru değerlendirme, doğru teknik ve düzenli takip</strong> gerektirir.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Medipodo Ayak Sağlığı Merkezi olarak; <strong>bilgiye dayalı, hasta odaklı ve sürdürülebilir çözümler</strong> sunuyoruz.
              </p>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ankara'da Tırnak Mantarı Tedavisi Arıyorsanız
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Profesyonel podolojik değerlendirme için bizimle iletişime geçin.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/hizmet/tirnak-mantari"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                >
                  Tırnak Mantarı Tedavisi
                </Link>
                <a
                  href="https://wa.me/905456569747"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-400 transition-all transform hover:scale-105 shadow-lg"
                >
                  <Phone className="mr-2" size={20} />
                  WhatsApp'tan Yazın
                </a>
              </div>
            </section>

          </div>
        </div>
      </article>
    </>
  );
};

export default TirnakMantariBlog;
