import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, Phone, ChevronDown, ChevronUp } from 'lucide-react';
import { Helmet } from 'react-helmet';

const MedikalAyakBakimiKimlerBlog = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Medikal ayak bakımı ne sıklıkla yapılmalıdır?",
      answer: "Kişinin ayak yapısına ve mevcut sorunlarına göre değişmekle birlikte genellikle 4–8 hafta aralıklarla önerilir."
    },
    {
      question: "Medikal ayak bakımı acıtır mı?",
      answer: "Hayır. Medikal ayak bakımı ağrısız, kontrollü ve steril koşullarda uygulanır."
    },
    {
      question: "Evde pedikür yeterli olur mu?",
      answer: "Sağlıklı bireylerde destekleyici olabilir ancak nasır, çatlak, diyabet gibi durumlarda yetersiz ve risklidir."
    },
    {
      question: "Diyabet hastaları medikal ayak bakımı yaptırabilir mi?",
      answer: "Evet. Diyabetli bireyler için medikal ayak bakımı koruyucu ve güvenli bir uygulamadır."
    },
    {
      question: "Medikal ayak bakımı estetik bir işlem midir?",
      answer: "Hayır. Medikal ayak bakımı sağlık odaklı, tedavi edici ve koruyucu bir uygulamadır."
    }
  ];

  // FAQPage JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Medikal ayak bakımı ne sıklıkla yapılmalıdır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kişinin ayak yapısına ve mevcut sorunlarına göre değişmekle birlikte genellikle 4–8 hafta aralıklarla önerilir."
        }
      },
      {
        "@type": "Question",
        "name": "Medikal ayak bakımı acıtır mı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hayır. Medikal ayak bakımı ağrısız, kontrollü ve steril koşullarda uygulanır."
        }
      },
      {
        "@type": "Question",
        "name": "Evde pedikür yeterli olur mu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sağlıklı bireylerde destekleyici olabilir ancak nasır, çatlak, diyabet gibi durumlarda yetersiz ve risklidir."
        }
      },
      {
        "@type": "Question",
        "name": "Diyabet hastaları medikal ayak bakımı yaptırabilir mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet. Diyabetli bireyler için medikal ayak bakımı koruyucu ve güvenli bir uygulamadır."
        }
      },
      {
        "@type": "Question",
        "name": "Medikal ayak bakımı estetik bir işlem midir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hayır. Medikal ayak bakımı sağlık odaklı, tedavi edici ve koruyucu bir uygulamadır."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Medikal Ayak Bakımı Kimler İçin Gereklidir? Evde Pedikür Yeterli Olur mu? | Medipodo</title>
        <meta name="description" content="Medikal ayak bakımı kimlere gereklidir? Evde pedikür yeterli olur mu? Diyabet, nasır, çatlak topuk ve tırnak sorunları için profesyonel bakım rehberi." />
        <meta name="keywords" content="medikal ayak bakımı, evde pedikür, podoloji, nasır tedavisi, topuk çatlağı, diyabet ayak bakımı, Ankara podolog" />
        <link rel="canonical" href="https://medipodo.com/blog/medikal-ayak-bakimi-kimler-icin-gereklidir" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Medikal Ayak Bakımı Kimler İçin Gereklidir? Evde Pedikür Yeterli Olur mu?" />
        <meta property="og:description" content="Medikal ayak bakımı kimlere gereklidir? Evde pedikür yeterli olur mu? Profesyonel bakım rehberi." />
        <meta property="og:image" content="https://medipodo.com/images/blog/medikal-ayak-bakimi-ankara-kimlere-yapilir.webp" />
        <meta property="og:url" content="https://medipodo.com/blog/medikal-ayak-bakimi-kimler-icin-gereklidir" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Medikal Ayak Bakımı Kimler İçin Gereklidir?" />
        <meta name="twitter:description" content="Medikal ayak bakımı kimlere gereklidir? Evde pedikür yeterli olur mu?" />
        <meta name="twitter:image" content="https://medipodo.com/images/blog/medikal-ayak-bakimi-ankara-kimlere-yapilir.webp" />

        {/* FAQPage JSON-LD Schema */}
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
              Medikal Ayak Bakımı Kimler İçin Gereklidir?<br />
              Evde Pedikür Yeterli Olur mu?
            </h1>
            
            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Podolog Serdar C.</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>8 dakika okuma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Ana Görsel */}
            <img 
              src="/images/blog/medikal-ayak-bakimi-ankara-kimlere-yapilir.webp" 
              alt="Medikal ayak bakımı Ankara - profesyonel podoloji hizmeti"
              width="1200"
              height="675"
              className="w-full h-auto rounded-xl shadow-lg mb-10"
              loading="lazy" decoding="async"
            />

            {/* Giriş */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ayak bakımına hala günümüzde "Gerekli mi acaba?" gibi bakılsa da bazı ayak ve tırnak problemleri hayat kalitesini olumsuz etkilediğinde kaçınılmaz bir ihtiyaç haline dönüşmektedir.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <Link to="/hizmet/ayak-bakimi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Medikal Ayak Bakımı</Link>, ayak sağlığını korumaya ve mevcut sorunların ilerlemesini önlemeye yönelik klinik temelli bir bakım yaklaşımıdır.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Bu yazıda, medikal ayak bakımının kimler için gerekli olduğunu, evde yapılan bakımın hangi noktalarda yetersiz kaldığını ve profesyonel yaklaşımın neden fark yarattığını net şekilde anlatıyoruz.
              </p>
            </section>

            {/* Medikal Ayak Bakımı Nedir? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Medikal Ayak Bakımı Nedir?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Medikal ayak bakımı; podoloji eğitimi almış uzmanlar tarafından, steril koşullarda, sağlıklı ve sorunlu dokunun ayrımı yapılarak uygulanan profesyonel ayak bakım hizmetidir.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Amaç yalnızca ayağı "yumuşatmak" değil;
              </p>

              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6 ml-4">
                <li>Sorunu doğru analiz etmek</li>
                <li>Sağlıklı dokuya zarar vermeden işlem yapmak</li>
                <li>Tekrar oluşumu azaltmaktır</li>
              </ul>

              <p className="text-lg text-gray-700 leading-relaxed">
                Bu yönüyle medikal ayak bakımı, klasik pedikürden temel olarak ayrılır.
              </p>
            </section>

            {/* Kimler İçin Gereklidir? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">
                Medikal Ayak Bakımı Kimler İçin Gereklidir?
              </h2>

              {/* 1. Nasır */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">🔹 1. Nasır ve Kalınlaşma Sorunu Olanlar</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ayakta oluşan nasırlar yalnızca sert deri değildir. Yanlış müdahalelerde daha da derinleşebilir ve ağrıya neden olabilir.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Medikal bakımda, nasırın lokasyonu ve basınç nedeni değerlendirilir.
                </p>
                <p className="text-gray-700">
                  👉 İlgili hizmet: <Link to="/hizmet/nasir-tedavisi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Nasır Tedavisi</Link>
                </p>
              </div>

              {/* 2. Topuk Çatlağı */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">🔹 2. Topuk Çatlağı Yaşayanlar</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Topuk çatlakları sadece estetik bir problem değildir. Derinleştiğinde enfeksiyon riski oluşturabilir.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Medikal bakımda çatlaklar kontrollü şekilde ele alınır ve cilt bütünlüğü korunur.
                </p>
                <p className="text-gray-700">
                  👉 İlgili hizmet: <Link to="/hizmet/topuk-bakimi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Topuk ve Çatlak Bakımı</Link>
                </p>
              </div>

              {/* 3. Diyabet Hastaları */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">🔹 3. Diyabet Hastaları</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Diyabetli bireylerde basit bir cilt kesisi bile ciddi sonuçlara yol açabilir.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Bu nedenle diyabet hastalarında evde pedikür kesinlikle önerilmez.
                </p>
                <p className="text-gray-700 font-medium">
                  👉 Medikal ayak bakımı, diyabetli bireyler için koruyucu sağlık uygulamasıdır.
                </p>
              </div>

              {/* 4. Tırnak Sorunları */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">🔹 4. Tırnak Sorunları Yaşayanlar</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kalınlaşmış, şekil bozukluğu olan veya hassas tırnaklar evde yanlış kesildiğinde batık ve enfeksiyon riski oluşturur.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Medikal bakımda tırnak kesimi anatomiye uygun yapılır.
                </p>
              </div>

              {/* 5. Yaşlı Bireyler */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">🔹 5. Yaşlı Bireyler</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  İleri yaşta eğilmek, görmek ve kontrol etmek zorlaşır. Bu da yanlış müdahalelere neden olabilir.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Medikal ayak bakımı, yaşlı bireyler için güvenli ve konforlu bir çözümdür.
                </p>
                <p className="text-gray-700">
                  👉 Gerekli durumlarda: <Link to="/hizmet/evde-bakim" className="text-blue-600 hover:text-blue-800 font-semibold underline">Evde Medikal Ayak Bakımı</Link>
                </p>
              </div>
            </section>

            {/* Destek Görsel */}
            <img 
              src="/images/blog/ayak-bakimi-topuk-temizligi.webp" 
              alt="Profesyonel ayak bakımı ve topuk temizliği işlemi"
              width="1200"
              height="675"
              className="w-full h-auto rounded-xl shadow-lg mb-12"
              loading="lazy"
            />

            {/* Evde Pedikür Neden Yetersiz? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Evde Pedikür Neden Yetersiz Kalabilir?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Evde yapılan ayak bakımı, sağlıklı bireylerde destekleyici olabilir.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Ancak şu durumlarda risklidir:
              </p>

              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6 ml-4">
                <li>Jilet / kesici alet kullanımı</li>
                <li>Aşırı ponza veya sert törpü</li>
                <li>Sorunun kaynağını bilmeden yapılan müdahale</li>
                <li>Hijyen ve sterilizasyon eksikliği</li>
              </ul>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                <p className="text-gray-800 font-medium mb-2">Medikal ayak bakımında ise:</p>
                <ul className="text-gray-700 space-y-1">
                  <li>✔ Sağlıklı doku korunur</li>
                  <li>✔ İşlem kontrollüdür</li>
                  <li>✔ Uzman değerlendirmesi vardır</li>
                </ul>
              </div>
            </section>

            {/* Ne Kazandırır? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Medikal Ayak Bakımı Ne Kazandırır?
              </h2>
              
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-3 mb-6 ml-4">
                <li>Ayak sorunlarının ilerlemesi önlenir</li>
                <li>Tekrar oluşum riski azalır</li>
                <li>Yürüme konforu artar</li>
                <li>Enfeksiyon riski minimize edilir</li>
                <li>Ayak sağlığı uzun vadede korunur</li>
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="text-gray-800 font-semibold text-lg">
                  Bu nedenle medikal ayak bakımı, lüks değil ihtiyaçtır.
                </p>
              </div>
            </section>

            {/* Medipodo Yaklaşımı */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Medipodo'da Medikal Ayak Bakımı Yaklaşımı
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Medipodo'da her uygulama:
              </p>

              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-6 ml-4">
                <li>Podolojik değerlendirme ile başlar</li>
                <li>Kişiye özel planlanır</li>
                <li>Steril, ağrısız ve kontrollü şekilde uygulanır</li>
              </ul>

              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Amacımız geçici rahatlama değil, kalıcı ayak sağlığıdır.
              </p>
            </section>

            {/* SSS - Accordion */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                ❓ Sık Sorulan Sorular (SSS)
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
                Profesyonel Ayak Bakımı İçin Randevu Alın
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Ayak sağlığınız için uzman ekibimizle iletişime geçin.
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

export default MedikalAyakBakimiKimlerBlog;
