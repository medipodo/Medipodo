import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, AlertCircle, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
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

const AyakAgrisiNedenOlurBlog = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Ayak ağrısı kendiliğinden geçer mi?",
      answer: "Hafif zorlanmalarda geçebilir, ancak tekrarlayan ağrılar mutlaka değerlendirilmelidir."
    },
    {
      question: "Sabah ilk adımda ayak ağrısı neden olur?",
      answer: "En sık plantar fasiit ile ilişkilidir."
    },
    {
      question: "Ayak ağrısı ayakkabıdan kaynaklanır mı?",
      answer: "Evet. Yanlış ayakkabı seçimi ayak ağrılarının en yaygın nedenlerindendir."
    },
    {
      question: "Ayak ağrısı için evde ne yapılmamalı?",
      answer: "Kesici aletlerle müdahale etmek ve bilinçsiz tabanlık kullanmak önerilmez."
    },
    {
      question: "Podolog ayak ağrısında ne yapar?",
      answer: "Basış analizi yapar, cilt ve tırnak yapısını değerlendirir ve önleyici bakım planı oluşturur."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ayak Ağrısı Neden Olur? Podolojik Bakış Açısıyla Ağrı Nedenleri | Medipodo</title>
        <meta name="description" content="Ayak ağrısı neden olur? Ayak tabanı, topuk, ayak üstü ve parmak ağrılarının nedenleri. Podolojik bakış açısıyla ağrı nedenleri ve ne zaman uzmana başvurulmalı." />
        <meta name="keywords" content="ayak ağrısı neden olur, ayak ağrısı nedenleri, topuk ağrısı, plantar fasiit, ayak tabanı ağrısı, podoloji, Ankara podolog" />
        <link rel="canonical" href="https://medipodo.com/blog/ayak-agrisi-neden-olur" />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Ayak Ağrısı Neden Olur? Podolojik Bakış Açısıyla Ağrı Nedenleri" />
        <meta property="og:description" content="Ayak ağrısı neden olur? Podolojik bakış açısıyla ağrı nedenleri ve çözüm önerileri." />
        <meta property="og:image" content="https://medipodo.com/images/blog/ayak-agrisi-neden-olur.webp" />
        <meta property="og:url" content="https://medipodo.com/blog/ayak-agrisi-neden-olur" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayak Ağrısı Neden Olur?" />
        <meta name="twitter:description" content="Podolojik bakış açısıyla ayak ağrısı nedenleri." />
        <meta name="twitter:image" content="https://medipodo.com/images/blog/ayak-agrisi-neden-olur.webp" />
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
              Ayak Ağrısı Neden Olur?<br />
              <span className="text-blue-200">Podolojik Bakış Açısıyla Ağrı Nedenleri</span>
            </h1>
            
            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Medipodo Podoloji Ekibi</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>12 dakika okuma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Ana Görsel */}
            <img 
              src="/images/blog/ayak-agrisi-neden-olur.webp" 
              alt="Ayak ağrısının nedenlerini gösteren podolojik değerlendirme görseli"
              width="1200"
              height="675"
              className="w-full h-auto rounded-xl shadow-lg mb-10"
              loading="lazy"
              decoding="async"
            />

            {/* Giriş */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ayak ağrısı çoğu zaman yanlış yorumlanır. "Biraz yürüdüm, ondan oldu", "ayakkabım sertti", "geçer" denir. Oysa podoloji pratiğinde sık gördüğümüz şey şudur: <strong className="text-blue-900">Ağrı, ayağın verdiği ilk uyarıdır.</strong> Ve bu uyarı çoğu zaman rastlantısal değildir.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Bazı ayak ağrıları sabah yataktan kalkarken kendini belli eder, bazıları gün içinde artar, bazıları ise yalnızca belirli bir noktada hissedilir. Bu farklar tesadüf değildir. Ağrının yeri, zamanı ve şiddeti; basış biçiminizden ayakkabı seçiminize, hatta bazı durumlarda genel sağlık durumunuza kadar pek çok ipucu taşır.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Bu yazıda "ayak ağrısı neden olur?" sorusunu tek bir başlık altında geçiştirmek yerine, ağrıyı ayağın hangi bölgesinde ortaya çıktığına göre ele alacağız. Çünkü doğru soruyu sormadan doğru çözümü bulmak mümkün değildir.
              </p>
            </section>

            {/* Ayak Tabanı Ağrısı */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ayak Tabanı Ağrısı Neden Olur?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ayak tabanı ağrısı, en sık karşılaşılan ayak şikayetlerinden biridir ve genellikle uzun süre ayakta kalan bireylerde görülür.
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Plantar Fasiit</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ayak tabanında topuktan parmaklara uzanan plantar fasya dokusunun zorlanmasıyla ortaya çıkar. Özellikle sabah ilk adımlarda hissedilen batıcı ağrı tipiktir.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Uzun Süre Ayakta Kalma</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Sert zeminlerde uzun süre ayakta çalışmak, ayak tabanındaki yumuşak dokuların yorulmasına ve ağrıya yol açar.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Yanlış Ayakkabı Seçimi</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Taban desteği yetersiz, çok sert ya da tamamen düz ayakkabılar ayak tabanına binen yükü artırır.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mt-6">
                <h4 className="font-bold text-amber-900 mb-3 flex items-center">
                  <AlertCircle className="mr-2" size={20} />
                  Ne Zaman Ciddiye Alınmalı?
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ağrı birkaç haftadır devam ediyorsa</li>
                  <li>• Sabahları belirginleşiyorsa</li>
                  <li>• Dinlenmeyle geçmiyorsa</li>
                </ul>
                <p className="text-gray-700 mt-3 font-medium">
                  Bu durumlarda profesyonel değerlendirme gereklidir.
                </p>
              </div>
            </section>

            {/* Topuk Ağrısı */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Topuk Ağrısı (Plantar Fasiit ve Topuk Dikeni)
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Topuk ağrısı çoğu zaman "topuk dikeni" olarak adlandırılsa da, asıl problem genellikle plantar fasiittir.
              </p>

              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Sabah İlk Adımda Ağrı Ne Anlama Gelir?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Gece boyunca kısalan plantar fasya dokusu, sabah basıldığında ani gerilme yaşar ve ağrı oluşur.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Topuk Dikeni Gerçekten Diken midir?</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Hayır.</strong> Topuk dikeni, kemiksi bir çıkıntıdır ve çoğu zaman ağrının nedeni değil, sonucudur.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
                <h4 className="font-bold text-red-900 mb-3">Evde Yapılan Yanlışlar</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Sert cisimlerle topuğu bastırmak
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Bilinçsiz tabanlık kullanmak
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Ağrı varken zorlayıcı egzersizler yapmak
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <h4 className="font-bold text-blue-900 mb-2">Podolojik Değerlendirme Neden Önemlidir?</h4>
                <p className="text-gray-700">
                  Basış analizi yapılmadan uygulanan çözümler sorunu kalıcı hale getirebilir.
                </p>
              </div>
            </section>

            {/* Ayak Üstü Ağrısı */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ayak Üstü Ağrısı
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ayak üstü ağrıları genellikle dış baskılara veya tendon problemlerine bağlıdır.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl shadow-md p-5">
                  <h3 className="text-lg font-bold text-blue-900 mb-3">Ayakkabı Baskısı</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Dar veya bağcıkları aşırı sıkılan ayakkabılar ayak sırtında ağrıya neden olabilir.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                  <h3 className="text-lg font-bold text-blue-900 mb-3">Tendinitler</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Ayağın üst kısmından geçen tendonların aşırı kullanımı iltihaplanmaya yol açabilir.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-5">
                  <h3 className="text-lg font-bold text-blue-900 mb-3">Sinir Sıkışmaları</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Uzun süreli baskı, uyuşma ve yanma hissi ile birlikte ağrı oluşturabilir.
                  </p>
                </div>
              </div>
            </section>

            {/* İkinci Görsel - Ortalarda */}
            <section className="mb-12">
              <img 
                src="/images/blog/ayaklarim-neden-agrir.webp" 
                alt="Ayak ağrısı bölgeleri - topuk ve taban ağrısı gösterimi"
                width="1200"
                height="675"
                className="w-full h-auto rounded-xl shadow-lg"
                loading="lazy"
                decoding="async"
              />
            </section>

            {/* Ayak Parmaklarında Ağrı */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ayak Parmaklarında Ağrı
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Parmak ağrıları çoğu zaman tırnak ve cilt problemleriyle ilişkilidir.
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Batık Tırnak</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Yanlış tırnak kesimi sonucu tırnağın et dokusuna batmasıyla oluşur ve ciddi ağrıya yol açar.
                  </p>
                  <p className="text-gray-700">
                    👉 İlgili içerik: <Link to="/blog/batik-tirnak-nedenleri" className="text-blue-600 hover:text-blue-800 font-semibold underline">Batık tırnak nedenleri</Link>
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Nasır Oluşumu</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Sürekli basınç ve sürtünme, sertleşmiş cilt alanları oluşturur.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Parmak Deformasyonları</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Çekiç parmak ve halluks valgus gibi deformasyonlar zamanla ağrıya neden olur.
                  </p>
                </div>
              </div>
            </section>

            {/* Ayak Bileği Ağrısı */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ayak Bileği Ağrısı
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ayak bileği, vücudun en hareketli eklemlerinden biridir ve yaralanmalara açıktır.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-orange-50 rounded-xl p-5">
                  <h3 className="text-lg font-bold text-orange-900 mb-3">Burkulmalar</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Bağ dokularının zorlanmasıyla oluşur ve yeterince dinlendirilmezse kronikleşebilir.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-xl p-5">
                  <h3 className="text-lg font-bold text-orange-900 mb-3">Bağ Zedelenmeleri</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Tekrarlayan burkulmalar bağlarda kalıcı hasara yol açabilir.
                  </p>
                </div>

                <div className="bg-orange-50 rounded-xl p-5">
                  <h3 className="text-lg font-bold text-orange-900 mb-3">Duruş ve Basış Bozuklukları</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Yanlış basış, ayak bileğine normalden fazla yük bindirir.
                  </p>
                </div>
              </div>
            </section>

            {/* Sistemik Hastalıklar */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-500 pl-4">
                Ayak Ağrısı Hangi Hastalıkların Belirtisi Olabilir?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Bazı ayak ağrıları yalnızca lokal değil, sistemik problemlerin işareti olabilir.
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-red-900 mb-3">Diyabet</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Sinir hasarına bağlı olarak ağrı, yanma veya his kaybı görülebilir.
                  </p>
                  <p className="text-gray-700">
                    👉 İlgili içerik: <Link to="/blog/diyabet-ve-ayak-sagligi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Diyabet ve ayak sağlığı</Link>
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Dolaşım Problemleri</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Soğukluk, renk değişimi ve ağrı dolaşım bozukluğuna işaret edebilir.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Romatizmal Hastalıklar</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Eklem tutulumları ayak ve ayak bileğinde ağrıya neden olabilir.
                  </p>
                </div>
              </div>
            </section>

            {/* Ne Zaman Podoloğa Gidilmeli */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ayak Ağrısında Ne Zaman Podoloğa Gidilmeli?
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Aşağıdaki durumlarda gecikmeden profesyonel destek alınmalıdır:
              </p>

              <div className="bg-amber-50 rounded-xl p-6 mb-6">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">1</span>
                    1 haftadan uzun süren ağrı
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">2</span>
                    Gece artan ağrılar
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">3</span>
                    Uyuşma veya yanma hissi
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">4</span>
                    Açık yara, kızarıklık veya renk değişimi
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
                Ayak Ağrısı Hakkında Sık Sorulan Sorular
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

            {/* Sonuç */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Ayak Ağrısını Hafife Almayın
              </h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Ayak ağrısı, günlük yaşam kalitesini düşüren ve zamanla daha ciddi problemlere yol açabilen bir durumdur. Erken dönemde yapılan doğru değerlendirme, hem ağrının kaynağını ortaya koyar hem de kalıcı sorunların önüne geçer.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ayak sağlığınızla ilgili şikayetleriniz devam ediyorsa, bir podoloji uzmanına danışmanız en doğru adım olacaktır.
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
                  Ayak sağlığı ve podoloji hakkında daha fazla bilgi edinmek, yaşadığınız şikayetleri daha iyi anlamak için blogumuzun diğer içeriklerini inceleyebilirsiniz.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    to="/blog"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
                  >
                    Tüm Blog Yazıları
                  </Link>
                  <Link
                    to="/ayak-analizi"
                    className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-medium border border-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    Ayak Analizi Hakkında
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

export default AyakAgrisiNedenOlurBlog;
