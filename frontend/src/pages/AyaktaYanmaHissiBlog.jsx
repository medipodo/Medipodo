import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Helmet } from 'react-helmet';

// FAQ Accordion Component
const FAQAccordion = ({ question, answer, isOpen, onClick }) => (
  <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
    <button
      onClick={onClick}
      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
      aria-expanded={isOpen}
    >
      <h3 className="text-lg font-semibold text-gray-900 pr-4">
        {question}
      </h3>
      <div className="flex-shrink-0">
        {isOpen ? (
          <ChevronUp className="text-blue-700" size={24} />
        ) : (
          <ChevronDown className="text-gray-400" size={24} />
        )}
      </div>
    </button>
    {isOpen && (
      <div className="px-6 pb-5">
        <p className="text-gray-700 leading-relaxed">
          {answer}
        </p>
      </div>
    )}
  </div>
);

const AyaktaYanmaHissiBlog = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Ayakta yanma hissi kendiliğinden geçer mi?",
      answer: "Hafif ve geçici durumlar kendiliğinden azalabilir; ancak tekrarlayan yanma hissi mutlaka değerlendirilmelidir."
    },
    {
      question: "Ayakta yanma hissi ayakkabıdan kaynaklanır mı?",
      answer: "Evet. Yanlış ayakkabı seçimi yanma hissinin en sık nedenlerinden biridir."
    },
    {
      question: "Gece artan yanma hissi önemli midir?",
      answer: "Gece artan ve uzun süren yanma hissi ciddiye alınmalı ve değerlendirilmelidir."
    },
    {
      question: "Evde müdahale etmek doğru mu?",
      answer: "Kesici aletlerle müdahale etmek veya bilinçsiz ürün kullanımı önerilmez."
    },
    {
      question: "Podolog ayakta yanma hissinde ne yapar?",
      answer: "Ayağın basış yapısını, cilt ve tırnak durumunu değerlendirir ve önleyici bakım planı oluşturur."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ayakta Yanma Hissi Neden Olur? Podolojik Bakış Açısıyla Değerlendirme | Medipodo</title>
        <meta name="description" content="Ayakta yanma hissi neden olur? Ayak tabanı, parmaklar ve ayak üstünde yanma hissinin nedenleri. Podolojik bakış açısıyla değerlendirme ve ne zaman uzmana başvurulmalı." />
        <meta name="keywords" content="ayakta yanma hissi, ayak yanması nedenleri, ayak tabanında yanma, gece ayak yanması, podoloji, Ankara podolog" />
        <link rel="canonical" href="https://medipodo.com/blog/ayakta-yanma-hissi-neden-olur" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Ayakta Yanma Hissi Neden Olur? Podolojik Bakış Açısıyla Değerlendirme" />
        <meta property="og:description" content="Ayakta yanma hissi neden olur? Podolojik bakış açısıyla değerlendirme ve çözüm önerileri." />
        <meta property="og:image" content="https://medipodo.com/images/blog/ayak-yanmasi.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://medipodo.com/blog/ayakta-yanma-hissi-neden-olur" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayakta Yanma Hissi Neden Olur?" />
        <meta name="twitter:description" content="Podolojik bakış açısıyla ayakta yanma hissi nedenleri." />
        <meta name="twitter:image" content="https://medipodo.com/images/blog/ayak-yanmasi.webp" />
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
              Ayakta Yanma Hissi Neden Olur?<br />
              <span className="text-blue-200">Podolojik Bakış Açısıyla Değerlendirme</span>
            </h1>
            
            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Podolog Serdar Ceylan</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>10 dakika okuma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Ana Görsel */}
            <img 
              src="/images/blog/ayak-yanmasi.webp" 
              alt="Ayakta yanma hissinin farklı bölgelerde nasıl hissedildiğini gösteren podolojik değerlendirme"
              width="1200"
              height="630"
              className="w-full h-auto rounded-xl shadow-lg mb-10"
              loading="lazy"
              decoding="async"
            />

            {/* Giriş */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ayakta yanma hissi çoğu kişi tarafından tam olarak tarif edilemez. <em>"Isı var ama sıcak değil"</em>, <em>"ağrı değil ama rahatsız edici"</em> gibi ifadelerle anlatılır. Bu nedenle çoğu zaman önemsenmez ya da geçici bir durum sanılır. Oysa podoloji pratiğinde ayakta yanma hissi, <strong className="text-blue-900">ayağın verdiği erken uyarı sinyallerinden biri</strong> olarak değerlendirilir.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Bu his bazen gün sonunda ortaya çıkar, bazen geceleri artar, bazen de yalnızca belirli bir bölgede hissedilir. Yanmanın ne zaman başladığı, hangi bölgede yoğunlaştığı ve ne kadar sürdüğü; ayak yapısı, basış şekli ve bazı durumlarda genel sağlık durumu hakkında önemli ipuçları verir.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Bu yazıda "ayakta yanma hissi neden olur?" sorusunu genel geçer cevaplarla geçiştirmek yerine, yanmanın ayağın hangi bölgesinde ortaya çıktığına göre ele alacağız. Çünkü doğru yorum, doğru soruyla başlar.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mt-6">
                <p className="text-gray-800">
                  👉 Ayak ağrıları hakkında kapsamlı bilgi için <Link to="/blog/ayak-agrisi-neden-olur" className="text-blue-600 hover:text-blue-800 font-semibold underline">Ayak Ağrısı Neden Olur?</Link> yazımızı da inceleyebilirsiniz.
                </p>
              </div>
            </section>

            {/* Ayak Tabanında Yanma Hissi */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ayak Tabanında Yanma Hissi Neden Olur?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ayak tabanında hissedilen yanma, genellikle sinirler veya dolaşım ile ilişkilidir.
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Sinir Uçlarının Hassaslaşması</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Uzun süre ayakta kalma, sert zeminlerde çalışma veya yanlış ayakkabı kullanımı ayak tabanındaki sinir uçlarının hassaslaşmasına neden olabilir. Bu durum yanma ve karıncalanma hissiyle kendini gösterebilir.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Basış Bozuklukları</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ayağın belirli noktalarına normalden fazla yük binmesi, bazı bölgelerde ısı ve yanma hissine yol açabilir. Düz tabanlık veya yüksek kavis gibi yapısal durumlar bu hissi artırabilir.
                  </p>
                </div>
              </div>
            </section>

            {/* Ayak Parmaklarında Yanma Hissi */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ayak Parmaklarında Yanma Hissi
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Parmaklarda yanma hissi çoğu zaman lokal problemlere işaret eder.
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Dolaşımın Yavaşlaması</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Soğuklukla birlikte hissedilen yanma, parmaklara giden kan akışının yeterli olmamasıyla ilişkili olabilir.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Tırnak ve Cilt Problemleri</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Batık tırnak, nasır veya sertleşmiş cilt alanları çevredeki dokular üzerinde baskı oluşturarak yanma hissine neden olabilir.
                  </p>
                  <p className="text-gray-700">
                    👉 İlgili içerik: <Link to="/blog/batik-tirnak-nedenleri" className="text-blue-600 hover:text-blue-800 font-semibold underline">Batık tırnak nedenleri</Link>
                  </p>
                </div>
              </div>
            </section>

            {/* Ayak Üstünde ve Yanlarında Yanma */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ayak Üstünde ve Yanlarında Yanma
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ayağın üst kısmında hissedilen yanma çoğu zaman dış etkenlere bağlıdır.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl shadow-md p-5">
                  <h3 className="text-lg font-bold text-blue-900 mb-3">Ayakkabı Baskısı</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Dar, sert veya ayağın yapısına uygun olmayan ayakkabılar ayak sırtındaki sinirleri baskılayarak yanmaya neden olabilir.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                  <h3 className="text-lg font-bold text-blue-900 mb-3">Tendon ve Yumuşak Doku Hassasiyeti</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Ayağın üstünden geçen tendonların zorlanması, özellikle gün sonunda yanma ve gerginlik hissi oluşturabilir.
                  </p>
                </div>
              </div>
            </section>

            {/* Gece Artan Yanma Hissi */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-orange-500 pl-4">
                Gece Artan Ayakta Yanma Hissi Ne Anlama Gelir?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Geceleri belirginleşen yanma hissi genellikle dinlenme sırasında fark edilir hale gelir. Gün içinde bastırılan hisler, hareketsizlikte daha net algılanır.
              </p>

              <div className="space-y-4">
                <div className="bg-orange-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-orange-900 mb-3">Sinir Kaynaklı Hassasiyet</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Bazı durumlarda sinir iletiminin etkilenmesi, özellikle geceleri yanma hissinin artmasına neden olabilir.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-orange-900 mb-3">Sistemik Faktörler</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Uzun süredir devam eden ve geceleri artan yanma hissi, yalnızca ayağa değil genel sağlık durumuna da bağlı olabilir.
                  </p>
                </div>
              </div>
            </section>

            {/* Hangi Hastalıklarla İlişkili */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-500 pl-4">
                Ayakta Yanma Hissi Hangi Hastalıklarla İlişkili Olabilir?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Her yanma hissi bir hastalık anlamına gelmez; ancak bazı durumlarda altta yatan nedenler araştırılmalıdır.
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-red-900 mb-3">Diyabet</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Diyabete bağlı sinir hassasiyeti ayaklarda yanma, karıncalanma veya uyuşma şeklinde hissedilebilir.
                  </p>
                  <p className="text-gray-700">
                    👉 İlgili içerik: <Link to="/blog/diyabet-ve-ayak-sagligi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Diyabet ve ayak sağlığı</Link>
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Dolaşım Problemleri</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ayakta renk değişimi, soğukluk veya şişlik ile birlikte yanma hissi dolaşım sorunlarına işaret edebilir.
                  </p>
                </div>
              </div>
            </section>

            {/* Ne Zaman Podoloğa Gidilmeli */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ayakta Yanma Hissinde Ne Zaman Podoloğa Gidilmeli?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Aşağıdaki durumlarda profesyonel değerlendirme geciktirilmemelidir:
              </p>

              <div className="bg-amber-50 rounded-xl p-6 mb-6">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <AlertCircle className="text-amber-500 mr-3 flex-shrink-0" size={20} />
                    Yanma hissi uzun süredir devam ediyorsa
                  </li>
                  <li className="flex items-center text-gray-700">
                    <AlertCircle className="text-amber-500 mr-3 flex-shrink-0" size={20} />
                    Geceleri artıyorsa
                  </li>
                  <li className="flex items-center text-gray-700">
                    <AlertCircle className="text-amber-500 mr-3 flex-shrink-0" size={20} />
                    Uyuşma veya his kaybı eşlik ediyorsa
                  </li>
                  <li className="flex items-center text-gray-700">
                    <AlertCircle className="text-amber-500 mr-3 flex-shrink-0" size={20} />
                    Ciltte renk değişimi veya hassasiyet varsa
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-gray-800">
                  👉 Profesyonel değerlendirme için <Link to="/ayak-analizi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Ayak Analizi</Link> hizmeti yol gösterici olabilir.
                </p>
              </div>
            </section>

            {/* SSS - Accordion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">
                Ayakta Yanma Hissi Hakkında Sık Sorulan Sorular
              </h2>

              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <FAQAccordion
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openFaqIndex === index}
                    onClick={() => toggleFaq(index)}
                  />
                ))}
              </div>
            </section>

            {/* Kapanış */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Ayakta yanma hissi, çoğu zaman göz ardı edilen ancak önemli ipuçları taşıyan bir durumdur. Bu hissi yalnızca geçici bir rahatsızlık olarak görmek yerine, ne zaman ve nerede ortaya çıktığını gözlemlemek doğru yaklaşımın ilk adımıdır.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Şikayetler devam ediyorsa, profesyonel bir değerlendirme yol gösterici olabilir.
                </p>
              </div>
            </section>

            {/* Bilgilendirici CTA - Satışsız */}
            <section className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-200">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Daha Fazla Bilgi Almak İster misiniz?
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Ayak sağlığı ve podoloji hakkında daha fazla bilgi edinmek için blogumuzun diğer içeriklerini inceleyebilirsiniz.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/blog/ayak-sagligi-rehberi"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
                  >
                    Ayak Sağlığı Tam Rehberi
                  </Link>
                  <Link
                    to="/blog"
                    className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-medium border border-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    Tüm Blog Yazıları
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </div>
      </article>
    </>
  );
};

export default AyaktaYanmaHissiBlog;
