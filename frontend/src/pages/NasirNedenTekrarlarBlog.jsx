import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, ChevronDown, ChevronUp, Phone, AlertTriangle, CheckCircle } from 'lucide-react';

const NasirNedenTekrarlarBlog = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Nasır temizlettim ama tekrar çıktı, neden?",
      answer: "Nasır bir sonuçtur, sebep değil. Eğer baskı kaynağı (yanlış ayakkabı, basış bozukluğu veya kemik çıkıntısı) ortadan kaldırılmadıysa nasır tekrar oluşur. Kalıcı çözüm için altta yatan mekanik neden değerlendirilmelidir."
    },
    {
      question: "Nasırın kökü var mı?",
      answer: "Evet, özellikle ağrılı nasırlarda derinin derinine uzanan konik bir çekirdek bulunur. Bu çekirdek tam temizlenmezse rahatlama geçici olur ve nasır kısa sürede geri gelir."
    },
    {
      question: "Evde nasır kesebilir miyim?",
      answer: "Hayır, evde kesmeye çalışmak veya asitli bantlar kullanmak sağlıklı dokuya zarar verebilir ve enfeksiyon riskini artırabilir. Özellikle diyabet hastaları için bu çok tehlikelidir. Profesyonel podolog desteği alınmalıdır."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Nasır temizlettim ama tekrar çıktı, neden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nasır bir sonuçtur, sebep değil. Eğer baskı kaynağı (yanlış ayakkabı, basış bozukluğu veya kemik çıkıntısı) ortadan kaldırılmadıysa nasır tekrar oluşur. Kalıcı çözüm için altta yatan mekanik neden değerlendirilmelidir."
        }
      },
      {
        "@type": "Question",
        "name": "Nasırın kökü var mı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, özellikle ağrılı nasırlarda derinin derinine uzanan konik bir çekirdek bulunur. Bu çekirdek tam temizlenmezse rahatlama geçici olur ve nasır kısa sürede geri gelir."
        }
      },
      {
        "@type": "Question",
        "name": "Evde nasır kesebilir miyim?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hayır, evde kesmeye çalışmak veya asitli bantlar kullanmak sağlıklı dokuya zarar verebilir ve enfeksiyon riskini artırabilir. Özellikle diyabet hastaları için bu çok tehlikelidir. Profesyonel podolog desteği alınmalıdır."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Nasır Neden Tekrar Eder? Kalıcı Nasır Tedavisi | Medipodo</title>
        <meta name="description" content="Nasır temizlendiği halde tekrar mı çıkıyor? Gerçek sebebi ve kalıcı çözüm yollarını öğrenin. Basış bozukluğu ve ayakkabı etkisini keşfedin." />
        <meta name="keywords" content="nasır neden tekrar eder, nasır neden geçmez, nasır temizlettim tekrar çıktı, nasırın kökü var mı, kalıcı nasır tedavisi, ayakta nasır neden olur" />
        <link rel="canonical" href="https://medipodo.com/blog/nasir-neden-tekrar-eder" />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Nasır Neden Tekrar Eder? Kalıcı Nasır Tedavisi" />
        <meta property="og:description" content="Nasır temizlendiği halde tekrar mı çıkıyor? Gerçek sebebi ve kalıcı çözüm yollarını öğrenin." />
        <meta property="og:image" content="https://medipodo.com/blog-images/nasir-tekrar/ankara-nasir-tedavisi.webp" />
        <meta property="og:url" content="https://medipodo.com/blog/nasir-neden-tekrar-eder" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nasır Neden Tekrar Eder?" />
        <meta name="twitter:description" content="Nasır temizlendiği halde tekrar mı çıkıyor? Kalıcı çözüm yollarını öğrenin." />
        <meta name="twitter:image" content="https://medipodo.com/blog-images/nasir-tekrar/ankara-nasir-tedavisi.webp" />

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
              Nasır Neden Sürekli Tekrarlar? Kalıcı Çözüm İçin Bilmeniz Gerekenler
            </h1>
            
            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Podolog Serdar Ceylan</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>8 dakika okuma</span>
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>20 Şubat 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">

            {/* Giriş */}
            <section className="mb-12">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-6">
                <p className="text-xl text-gray-800 italic font-medium">
                  "Nasırı aldırdım ama tekrar çıktı."
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Kliniğe gelen danışanların en sık kurduğu cümlelerden biri bu. Çoğu kişi <strong>nasırı bir deri fazlalığı</strong> zanneder. Oysa nasır, cildin keyfi bir kalınlaşması değil; <strong>vücudun verdiği bir savunma cevabıdır</strong>.
              </p>

              <img 
                src="/blog-images/nasir-tekrar/ankara-nasir-tedavisi.webp" 
                alt="Nasır tedavisi - profesyonel podolog uygulaması"
                className="w-full h-auto rounded-xl shadow-lg mb-6"
                loading="lazy"
              />

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <p className="text-gray-800 font-medium flex items-start">
                  <AlertTriangle className="mr-3 text-red-600 flex-shrink-0 mt-1" size={24} />
                  <span>Eğer <strong>nasır tekrar ediyorsa</strong> sorun deride değil, derinin maruz kaldığı baskıdadır.</span>
                </p>
              </div>
            </section>

            {/* Nasır Bir Sonuçtur */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Nasır Bir Sonuçtur, Sebep Değil
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ayak tabanı gün boyunca vücut ağırlığını taşır. Eğer yük dengeli dağılmazsa, vücut o noktayı korumak için deriyi kalınlaştırır. Bu kalınlaşma zamanla sertleşir ve ağrılı bir çekirdeğe dönüşebilir.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl mb-6">
                <p className="text-lg text-gray-800 font-medium">
                  Yani <strong>nasırın özü</strong> şudur: <br />
                  <span className="text-blue-700 text-xl">Baskı devam ediyorsa, nasır da devam eder.</span>
                </p>
              </div>
            </section>

            {/* Yanlış Ayakkabı */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Yanlış Ayakkabı Seçimi
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Sivri burunlu</strong>, dar kalıp, sert tabanlı ya da ayağa küçük gelen ayakkabılar belirli noktalara sürekli sürtünme uygular. Özellikle parmak üstleri ve tarak kemikleri üzerinde oluşan nasırlar genellikle <strong>ayakkabı kaynaklıdır</strong>.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <p className="text-gray-700">
                  <strong>Önemli:</strong> Ayakkabı değişmeden nasırın kalıcı olarak geçmesini beklemek gerçekçi değildir.
                </p>
              </div>
            </section>

            {/* Basış Bozukluğu */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Basış Bozukluğu ve Yük Dağılımı
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Bazı kişiler farkında olmadan içe ya da dışa basar. Kimi zaman ayak kemerinde çökme olur. Bu durum vücut ağırlığının belirli noktalara aşırı yüklenmesine neden olur.
              </p>

              <img 
                src="/blog-images/nasir-tekrar/ayakta-nasir-nasil-gecer.webp" 
                alt="Ayakta nasır tedavisi ve basış analizi"
                className="w-full max-w-md mx-auto h-auto rounded-xl shadow-lg mb-6"
                loading="lazy"
              />

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mb-6">
                <p className="text-gray-700">
                  Bu nedenle <strong>nasır tedavisinde</strong> sadece yüzey temizliği yeterli değildir. <strong>Basış analizi</strong> yapılmadığında sorun devam eder.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-gray-700">
                  👉 Basış bozukluğunuzun olup olmadığını öğrenmek için <Link to="/ayak-analizi" className="text-blue-600 hover:text-blue-800 font-semibold underline">ayak analizi</Link> sayfamızı ziyaret edebilirsiniz.
                </p>
              </div>
            </section>

            {/* Çekirdek Temizlenmezse */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Nasırın Çekirdeği Tam Temizlenmezse
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Özellikle <strong>"taş varmış gibi" ağrı</strong> yapan nasırlarda derinin derinine uzanan konik bir çekirdek bulunur. Sadece yüzeysel törpüleme yapılırsa rahatlama geçicidir.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <p className="text-gray-800 flex items-start">
                  <AlertTriangle className="mr-3 text-red-600 flex-shrink-0 mt-1" size={24} />
                  <span><strong>Uyarı:</strong> Evde kesmeye çalışmak veya asitli bantlar kullanmak durumu daha da kötüleştirebilir. Bu müdahaleler sağlıklı dokuya zarar verebilir ve enfeksiyon riskini artırabilir.</span>
                </p>
              </div>
            </section>

            {/* Ayak Deformiteleri */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ayak Deformiteleri ve Kemik Çıkıntıları
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Halluks valgus</strong> (başparmak çıkıntısı), <strong>çekiç parmak</strong> veya kemik çıkıntıları ayakkabı içinde sürekli sürtünme oluşturur. Bu tür durumlarda nasır aslında <strong>kemiksel problemin sonucudur</strong>.
              </p>

              <img 
                src="/blog-images/nasir-tekrar/nasir-neden-gecmez.webp" 
                alt="Nasır neden geçmez - ayak tabanında nasır"
                className="w-full max-w-md mx-auto h-auto rounded-xl shadow-lg mb-6"
                loading="lazy"
              />

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <p className="text-gray-700">
                  Kemik yapısı değerlendirilmeden yapılan işlemler uzun vadeli çözüm sağlamaz.
                </p>
              </div>
            </section>

            {/* Diyabet */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Diyabet Hastalarında Risk
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Diyabet hastalarında</strong> his kaybı görülebilir. Bu durumda kişi baskıyı fark etmeyebilir ve nasır altında yara gelişebilir. Bu nedenle <strong>evde müdahale kesinlikle önerilmez</strong>.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl">
                <p className="text-gray-700">
                  👉 Diyabet ve ayak sağlığı ilişkisi hakkında detaylı bilgi için <Link to="/blog/diyabet-ve-ayak-sagligi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Diyabet ve Ayak Sağlığı</Link> yazımızı okuyabilirsiniz.
                </p>
              </div>
            </section>

            {/* Nasır Tekrar Etmemesi İçin */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Nasırın Tekrar Etmemesi İçin Ne Yapılmalı?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Kalıcı yaklaşım</strong> üç aşamalıdır:
              </p>

              <div className="space-y-4 mb-6">
                {[
                  "Profesyonel temizleme (çekirdeğin tamamen alınması)",
                  "Basınç kaynağının tespit edilmesi",
                  "Cildin düzenli bakım ile desteklenmesi"
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-green-50 rounded-lg shadow-md p-4">
                    <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Nasır tedavisi</strong> sadece bir "temizleme işlemi" değildir. Aynı zamanda <strong>ayak mekaniğinin değerlendirilmesini</strong> gerektirir.
              </p>

              <div className="bg-blue-600 text-white rounded-xl p-6">
                <p className="text-lg">
                  👉 Profesyonel <Link to="/hizmet/nasir-tedavisi" className="text-white hover:text-blue-200 underline font-semibold">nasır tedavisi</Link> hakkında detaylı bilgi almak için hizmet sayfamızı ziyaret edebilirsiniz.
                </p>
              </div>
            </section>

            {/* Sonuç */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Sonuç: Nasır Neden Tekrarlar?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Çünkü çoğu zaman <strong>sadece sonucu temizleriz, sebebi değil</strong>.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Eğer:
              </p>

              <ul className="space-y-2 mb-6">
                {[
                  "Aynı noktada sürekli çıkıyorsa",
                  "Temizlendikten kısa süre sonra geri geliyorsa",
                  "Yürürken taş varmış hissi oluşturuyorsa"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                ...altta yatan <strong>mekanik neden</strong> değerlendirilmelidir.
              </p>

              <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl p-8">
                <p className="text-xl font-medium text-blue-100 leading-relaxed mb-4">
                  Nasırın kalıcı olarak kontrol altına alınması, <strong>basıncın ortadan kaldırılması</strong> ile mümkündür.
                </p>
                <p className="text-blue-200 text-sm italic">
                  Bu içerik Medipodo podoloji ekibi tarafından hazırlanmıştır.
                </p>
              </div>
            </section>

            {/* SSS */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Sık Sorulan Sorular
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
                <strong>Nasır neden tekrar eder</strong> sorusu hakkında en çok merak edilen sorular ve cevapları aşağıda bulabilirsiniz.
              </p>

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

            {/* Tıbbi Bilgilendirme */}
            <section className="mb-12">
              <p className="text-xs text-gray-400 leading-relaxed">
                ⚠️ <span className="font-medium">Tıbbi Bilgilendirme:</span> Bu içerik bilgilendirme amaçlıdır; tanı ve tedavi yerine geçmez. Ayak sağlığınızla ilgili şikayetleriniz için mutlaka bir sağlık profesyoneline danışınız.
              </p>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Nasır Sorununuz İçin Profesyonel Destek Alın
              </h2>
              <p className="text-green-100 mb-8 text-lg">
                Tekrarlayan nasır sorununuz için kalıcı çözüm üretiyoruz. Basış analizi ve profesyonel tedavi için randevu alın.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/hizmet/nasir-tedavisi"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                >
                  Nasır Tedavisi
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

export default NasirNedenTekrarlarBlog;
