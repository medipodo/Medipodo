import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, Phone, ChevronDown, ChevronUp, AlertTriangle, CheckCircle2, Heart, Stethoscope, Activity, HelpCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';

const PodologHangiHastaliklaraBakarBlog = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Podolog neye bakar?",
      answer: "Podolog; batık tırnak, nasır, tırnak problemleri, çatlak topuk, medikal ayak bakımı ve çeşitli ayak sağlığı sorunlarıyla ilgilenir."
    },
    {
      question: "Podolog doktor mudur?",
      answer: "Podolog, ayak sağlığı alanında eğitim almış sağlık profesyonelidir. Tanı ve tedavi gerektiren tıbbi durumlarda hekimlerle birlikte çalışır."
    },
    {
      question: "Podoloğa hangi şikâyetlerle gidilir?",
      answer: "Batık tırnak, nasır, tırnak mantarı nedeniyle oluşan deformasyonlar, kalınlaşmış tırnaklar, çatlak topuk ve düzenli ayak bakımı ihtiyacı gibi durumlarda podoloğa başvurulabilir."
    },
    {
      question: "Podolog tırnak mantarını tedavi eder mi?",
      answer: "Podolog, mantarlı veya deforme olmuş tırnağın bakımını yapabilir ve sürecin takip edilmesine yardımcı olabilir. Ancak gerekli durumlarda dermatoloji değerlendirmesi gerekebilir."
    },
    {
      question: "Batık tırnak için hangi bölüme gidilir?",
      answer: "Batık tırnağın durumuna göre dermatoloji, genel cerrahi veya podoloji değerlendirmesi tercih edilebilir. Özellikle tekrarlayan batıklarda nedenin belirlenmesi önemlidir."
    },
    {
      question: "Podolog fiyatları ne kadar?",
      answer: "Podolog fiyatları; uygulanacak işlem, problemin durumu, seans süresi ve gereken bakım türüne göre değişebilir."
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

  return (
    <>
      <Helmet>
        <title>Podolog Hangi Hastalıklara Bakar? Hangi Durumlarda Podoloğa Gitmelisiniz? (2026 Rehberi)</title>
        <meta name="description" content="Ayakta oluşan batık tırnak, nasır, mantar, çatlak topuk ve benzeri sorunlarda podolog hangi tedavileri uygular? Podoloğa hangi durumlarda gidilmesi gerektiğini öğrenin." />
        <meta name="keywords" content="podolog hangi hastalıklara bakar, podolog nedir, podoloğa ne zaman gidilir, batık tırnak, nasır, tırnak mantarı, çatlak topuk, medikal ayak bakımı, Ankara podolog" />
        <link rel="canonical" href="https://medipodo.com/blog/podolog-hangi-hastaliklara-bakar" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Podolog Hangi Hastalıklara Bakar? (2026 Rehberi)" />
        <meta property="og:description" content="Batık tırnak, nasır, mantar, çatlak topuk gibi sorunlarda podolog hangi tedavileri uygular? Hangi durumlarda podoloğa gidilmelidir?" />
        <meta property="og:image" content="https://medipodo.com/images/blog/podolog-hangi-hastaliklara-bakar-kapak.webp" />
        <meta property="og:url" content="https://medipodo.com/blog/podolog-hangi-hastaliklara-bakar" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Podolog Hangi Hastalıklara Bakar? (2026 Rehberi)" />
        <meta name="twitter:description" content="Batık tırnak, nasır, mantar, çatlak topuk gibi sorunlarda podolog hangi tedavileri uygular?" />
        <meta name="twitter:image" content="https://medipodo.com/images/blog/podolog-hangi-hastaliklara-bakar-kapak.webp" />

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
              Blog&apos;a Dön
            </Link>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Podolog Hangi Hastalıklara Bakar?<br />
              <span className="text-blue-200">Hangi Durumlarda Podoloğa Gitmelisiniz?</span>
            </h1>

            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Podolog Serdar Ceylan</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>2026 Rehberi · 12 dakika okuma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">

            {/* Ana Görsel */}
            <img
              src="/images/blog/podolog-hangi-hastaliklara-bakar-kapak.webp"
              alt="Podolog ayak ve tırnak problemlerini değerlendirirken"
              width="1200"
              height="675"
              className="w-full h-auto rounded-xl shadow-lg mb-10"
              loading="lazy"
              decoding="async"
            />

            {/* Giriş */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ayakta oluşan her problem için aynı uzmana başvurmak doğru değildir. Kimi zaman dermatoloji, kimi zaman ortopedi, kimi zaman da podoloji değerlendirmesi gerekebilir. Bu nedenle birçok kişi ilk olarak şu sorunun cevabını arar:
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
                <p className="text-xl text-gray-800 italic font-medium">
                  &quot;Podolog hangi hastalıklara bakar?&quot;
                </p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Podolog; ayak ve ayak tırnaklarında oluşan birçok problemin değerlendirilmesi, korunması ve uygun podolojik bakımının uygulanması konusunda eğitim almış sağlık profesyonelidir. Özellikle batık tırnak, nasır, kalınlaşmış tırnak, mantar nedeniyle bozulan tırnak yapısı, diyabetik ayak bakımı ve medikal ayak bakımı gibi konular podolojinin çalışma alanına girer.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ancak her ayak şikâyeti podolog tarafından tedavi edilmez. Kırık, ileri dolaşım bozukluğu, ciddi enfeksiyon veya cerrahi gerektiren durumlarda ilgili hekim tarafından değerlendirme gerekebilir. Bu nedenle podoloğun hangi sorunlarla ilgilendiğini bilmek, doğru sağlık profesyoneline daha hızlı ulaşmanıza yardımcı olur.
              </p>
            </section>

            {/* Podolog Nedir? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Podolog Nedir?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Podolog; ayak sağlığının korunmasına yönelik çalışan, ayak ve tırnak problemlerini değerlendiren, podolojik bakım uygulayan sağlık profesyonelidir.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Amaç yalnızca mevcut şikâyeti gidermek değildir. Aynı problemin tekrar oluşmasına neden olabilecek faktörleri belirlemek de podolojik değerlendirmenin önemli bir parçasıdır.
              </p>

              <img
                src="/images/blog/podolog-ilgilendigi-ayak-problemleri.webp"
                alt="Podologların değerlendirdiği yaygın ayak ve tırnak problemleri"
                width="1200"
                height="800"
                className="w-full h-auto rounded-xl shadow-lg mb-6"
                loading="lazy"
                decoding="async"
              />

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Örneğin sürekli tekrar eden bir nasır yalnızca temizlenerek kalıcı olarak çözülemeyebilir. Basış bozukluğu, yanlış ayakkabı seçimi veya ayağın belirli bir bölgesine aşırı yük binmesi gibi nedenler araştırılmadığında sorun kısa süre sonra yeniden oluşabilir.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Benzer şekilde sık tekrarlayan batık tırnaklarda da yalnızca ağrıyı azaltmaya odaklanmak yerine tırnağın neden battığını anlamak gerekir.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="text-gray-800">
                  Bu nedenle podolojik değerlendirme, yalnızca görünen soruna değil, sorunun oluşma nedenine de odaklanır.
                  <br /><br />
                  👉 Daha fazla bilgi için <Link to="/blog/podolog-fiyatlari-ankara" className="text-blue-600 hover:text-blue-800 font-semibold underline">podolog nedir ve hangi durumlarda başvurulur?</Link> yazımıza göz atabilirsiniz.
                </p>
              </div>
            </section>

            {/* Podolog Hangi Hastalıklara Bakar? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">
                Podolog Hangi Hastalıklara Bakar?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Podologlar ayakta ve ayak tırnaklarında görülen birçok farklı problemle ilgilenir. En sık başvurulan durumlar şunlardır:
              </p>

              <div className="grid md:grid-cols-2 gap-3 mb-8">
                {[
                  'Batık tırnak',
                  'Nasır',
                  'Tırnak mantarı',
                  'Kalınlaşmış tırnak',
                  'Deforme olmuş tırnaklar',
                  'Diyabetik ayak bakımı',
                  'Çatlak topuk',
                  'Sertleşmiş deri (hiperkeratoz)',
                  'Sporcularda oluşan tırnak travmaları',
                  'Basınca bağlı oluşan ayak problemleri',
                  'Düzenli medikal ayak bakımı gerektiren durumlar'
                ].map((item, i) => (
                  <div key={i} className="flex items-center bg-white rounded-lg shadow-sm border border-gray-100 p-3">
                    <CheckCircle2 className="text-blue-600 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Şimdi bu sorunlara biraz daha yakından bakalım.
              </p>
            </section>

            {/* Batık Tırnak */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Batık Tırnak
              </h2>

              <img
                src="/images/blog/batik-tirnak-podolog-oncesi-sonrasi.webp"
                alt="Batık tırnak probleminde podolojik bakım öncesi ve sonrası"
                width="1200"
                height="675"
                className="w-full h-auto rounded-xl shadow-lg mb-6"
                loading="lazy"
                decoding="async"
              />

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Batık tırnak, podoloji kliniklerine en sık başvurulan problemlerden biridir. Tırnağın kenar kısmının çevre dokunun içine doğru ilerlemesiyle oluşur ve zamanla ağrı, kızarıklık, hassasiyet hatta enfeksiyon gelişebilir.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Erken dönemde müdahale edildiğinde çoğu kişide cerrahi işlem gerekmeden podolojik uygulamalarla rahatlama sağlanabilir. Tırnağın yapısı, batmanın derecesi ve kişinin günlük yaşamı değerlendirilerek uygun yöntem belirlenir.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="text-gray-800">
                  👉 Detay için <Link to="/hizmet/batik-tirnak" className="text-blue-600 hover:text-blue-800 font-semibold underline">batık tırnak tedavisi</Link> hizmet sayfamızı, ilgili yazı için ise <Link to="/blog/tirnakbatmasi" className="text-blue-600 hover:text-blue-800 font-semibold underline">batık tırnak sorunlarında podolojik yaklaşım</Link> yazımızı inceleyebilirsiniz.
                </p>
              </div>
            </section>

            {/* Nasır */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Nasır
              </h2>

              <img
                src="/images/blog/nasir-tedavisi-podolog.webp"
                alt="Ayakta basınca bağlı oluşan nasır bölgeleri ve podolojik bakım"
                width="1200"
                height="675"
                className="w-full h-auto rounded-xl shadow-lg mb-6"
                loading="lazy"
                decoding="async"
              />

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Nasır; cildin uzun süre aynı noktadan basınca veya sürtünmeye maruz kalması sonucu oluşan koruyucu bir deri kalınlaşmasıdır.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Ancak birçok kişi nasırı yalnızca sertleşmiş deri olarak düşünür. Oysa özellikle derinleşmiş nasırlar yürürken ciddi ağrıya neden olabilir.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Podolojik değerlendirmede yalnızca nasır temizlenmez. Aynı zamanda tekrar oluşmasına neden olan faktörler de incelenir.
              </p>

              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500 mb-6">
                <p className="text-gray-800 font-semibold mb-3">Örneğin;</p>
                <ul className="list-none text-gray-700 space-y-2">
                  <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> Yanlış ayakkabı</li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> Basış bozukluğu</li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> Parmak deformiteleri</li>
                  <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> Ayağın belirli bölgelerine aşırı yük binmesi</li>
                </ul>
                <p className="text-gray-700 mt-4">gibi nedenler tekrar eden nasırın arkasındaki asıl sebep olabilir.</p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="text-gray-800">
                  👉 Detay için <Link to="/hizmet/nasir-tedavisi" className="text-blue-600 hover:text-blue-800 font-semibold underline">nasır tedavisi</Link> hizmet sayfamızı, ilgili yazı için <Link to="/blog/nasir-neden-tekrar-eder" className="text-blue-600 hover:text-blue-800 font-semibold underline">tekrar eden nasırların nedenleri</Link> yazımızı inceleyebilirsiniz.
                </p>
              </div>
            </section>

            {/* Tırnak Mantarı */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Tırnak Mantarı
              </h2>

              <img
                src="/images/blog/pedizone-mantar-serumu-ankara.webp"
                alt="Tırnak mantarının farklı evrelerde görünümü ve podolojik bakım süreci"
                width="1200"
                height="675"
                className="w-full h-auto rounded-xl shadow-lg mb-6"
                loading="lazy"
                decoding="async"
              />

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Kalınlaşan, rengi değişen, kırılgan hale gelen veya şekli bozulan tırnakların önemli nedenlerinden biri mantar enfeksiyonudur.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Tırnak mantarında uygulanacak yaklaşım, mantarın yaygınlığına ve tırnağın durumuna göre değişebilir. Podolojik bakım, tırnağın sağlıklı şekilde takip edilmesine ve hekimin planladığı tedaviyi destekleyen bakım uygulamalarına katkı sağlayabilir.
              </p>

              <div className="bg-amber-50 border border-amber-300 p-4 rounded-lg mb-6">
                <p className="text-amber-800 font-medium">
                  ⚠️ Tırnakta oluşan her sararma veya kalınlaşmanın mantar anlamına gelmediği de unutulmamalıdır. Travmalar, yaşlanma ve bazı sistemik hastalıklar da benzer görünüme neden olabilir.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="text-gray-800">
                  👉 Detay için <Link to="/hizmet/tirnak-mantari" className="text-blue-600 hover:text-blue-800 font-semibold underline">tırnak mantarı bakımı</Link> hizmet sayfamızı, ilgili yazı için <Link to="/blog/tirnak-mantari-tedavisi" className="text-blue-600 hover:text-blue-800 font-semibold underline">tırnak mantarında profesyonel ayak bakımı</Link> yazımızı inceleyebilirsiniz.
                </p>
              </div>
            </section>

            {/* Medikal Ayak Bakımı */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Medikal Ayak Bakımı
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Her ayak problemi hastalık kaynaklı değildir.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Bazı kişilerde;
              </p>

              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-500 mb-6">
                <ul className="list-none text-gray-700 space-y-2">
                  <li className="flex items-start"><span className="text-teal-500 mr-2">•</span> sık nasır oluşması,</li>
                  <li className="flex items-start"><span className="text-teal-500 mr-2">•</span> çatlak topuk,</li>
                  <li className="flex items-start"><span className="text-teal-500 mr-2">•</span> kalınlaşmış deri,</li>
                  <li className="flex items-start"><span className="text-teal-500 mr-2">•</span> tırnak kesiminde zorlanma,</li>
                  <li className="flex items-start"><span className="text-teal-500 mr-2">•</span> yaşa bağlı ayak değişiklikleri</li>
                </ul>
                <p className="text-gray-700 mt-4">gibi nedenlerle düzenli medikal ayak bakımı gerekebilir.</p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Bu bakım yalnızca estetik amaç taşımaz. Özellikle risk grubundaki kişilerde oluşabilecek daha ciddi problemlerin önlenmesine katkı sağlayabilir.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="text-gray-800">
                  👉 İlgili sayfa: <Link to="/hizmet/ayak-bakimi" className="text-blue-600 hover:text-blue-800 font-semibold underline">medikal ayak bakımı</Link> · <Link to="/blog/medikal-ayak-bakimi-kimler-icin-gereklidir" className="text-blue-600 hover:text-blue-800 font-semibold underline">podolog tarafından yapılan medikal ayak bakımı</Link>
                </p>
              </div>
            </section>

            {/* Featured Snippet */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl p-8 text-white shadow-xl">
                <div className="flex items-center mb-4">
                  <HelpCircle className="mr-3" size={28} />
                  <h3 className="text-2xl font-bold">Öne Çıkan Bilgi</h3>
                </div>
                <p className="text-xl font-semibold mb-3 text-blue-100">
                  Podolog hangi hastalıklara bakar?
                </p>
                <p className="text-lg leading-relaxed">
                  Podolog; batık tırnak, nasır, tırnak mantarı, çatlak topuk, kalınlaşmış tırnak, diyabetik ayak bakımı gerektiren durumlar ve medikal ayak bakımı kapsamında değerlendirilen birçok ayak ve tırnak problemiyle ilgilenir. Cerrahi veya tıbbi tedavi gerektiren durumlarda ise ilgili hekimle iş birliği içinde çalışılır.
                </p>
              </div>
            </section>

            {/* Diyabet Hastaları */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">
                Diyabet Hastaları Neden Podoloğa Gitmeli?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Diyabet, ayak sağlığı açısından daha fazla dikkat gerektiren hastalıklardan biridir. Çünkü diyabete bağlı olarak sinir hasarı (nöropati), dolaşım problemleri ve yara iyileşmesinde gecikme gibi durumlar ortaya çıkabilir.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Bu nedenle diyabet hastalarında küçük görünen bir sorun zaman içinde daha ciddi hale gelebilir.
              </p>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl shadow-md p-6 border border-red-200 mb-6">
                <div className="flex items-center mb-4">
                  <Heart className="text-red-500 mr-3" size={24} />
                  <p className="font-bold text-gray-900">Örneğin:</p>
                </div>
                <ul className="list-none text-gray-700 space-y-2">
                  <li className="flex items-start"><span className="text-red-500 mr-2">⚠️</span> Fark edilmeyen küçük kesiler</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">⚠️</span> Tırnak batmaları</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">⚠️</span> Basınca bağlı yaralar</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">⚠️</span> Kalınlaşmış nasırlar</li>
                  <li className="flex items-start"><span className="text-red-500 mr-2">⚠️</span> Yanlış tırnak kesimine bağlı oluşan yaralanmalar</li>
                </ul>
                <p className="text-gray-700 mt-4">düzenli takip gerektirebilir.</p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Podolojik değerlendirmede amaç yalnızca mevcut problemi gidermek değil, risk oluşturabilecek noktaları erken fark etmektir.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Diyabetli bireylerde özellikle:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex items-start">
                  <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-800">Tırnak kesiminin doğru yapılması</span>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex items-start">
                  <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-800">Basınç noktalarının kontrol edilmesi</span>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex items-start">
                  <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-800">Cilt bütünlüğünün değerlendirilmesi</span>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex items-start">
                  <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-800">Uygun ayak bakım alışkanlıklarının oluşturulması</span>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                ayak sağlığının korunmasında önemli rol oynar.
              </p>

              <div className="bg-red-50 border border-red-200 p-6 rounded-xl mb-6">
                <p className="text-red-800 leading-relaxed">
                  <strong>Not:</strong> Diyabetik ayakta gelişen açık yara, ileri enfeksiyon, dolaşım problemi veya ciddi renk değişiklikleri mutlaka hekim değerlendirmesi gerektiren durumlardır.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="text-gray-800">
                  👉 İlgili yazı: <Link to="/blog/diyabet-ve-ayak-sagligi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Diyabet ve Ayak Sağlığı</Link>
                </p>
              </div>
            </section>

            {/* Podolog Hangi Durumlarda Uygulama Yapar? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">
                Podolog Hangi Durumlarda Uygulama Yapar?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Podologlar ayak ve tırnak sağlığıyla ilgili birçok farklı durumda kişiye özel uygulamalar gerçekleştirir.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                En sık uygulanan işlemler arasında:
              </p>

              {/* Batık Tırnak Bakımı */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Stethoscope className="text-blue-500 mr-3" size={24} />
                  Batık Tırnak Bakımı
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tırnağın çevre dokuya baskı yapması sonucu oluşan ağrı ve rahatsızlığın azaltılmasına yönelik uygulamalardır.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Bazı durumlarda tırnağın doğru uzama yönünü desteklemek için tırnak teli uygulamaları tercih edilebilir.
                </p>
                <p className="text-gray-700">
                  👉 İlgili yazı: <Link to="/blog/tirnak-teli-fiyatlari-ankara" className="text-blue-600 hover:text-blue-800 font-semibold underline">Tırnak Teli Takma Fiyatları Ankara</Link>
                </p>
              </div>

              {/* Kalınlaşmış Tırnak Bakımı */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Activity className="text-purple-500 mr-3" size={24} />
                  Kalınlaşmış Tırnak Bakımı
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Yaş, travma, mantar veya çeşitli nedenlerle tırnak normal yapısını kaybedebilir.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kalınlaşan tırnak:
                </p>
                <ul className="list-none text-gray-700 space-y-2 mb-4">
                  <li className="flex items-start"><span className="text-purple-500 mr-2">•</span> Ayakkabı içinde baskı oluşturabilir,</li>
                  <li className="flex items-start"><span className="text-purple-500 mr-2">•</span> Ağrıya neden olabilir,</li>
                  <li className="flex items-start"><span className="text-purple-500 mr-2">•</span> Kesilmesini zorlaştırabilir.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Podolojik bakım ile tırnak daha kontrollü şekilde inceltilerek kişinin günlük yaşam konforu artırılabilir.
                </p>
                <p className="text-gray-700">
                  👉 İlgili yazı: <Link to="/blog/tirnak-neden-kalinlasir" className="text-blue-600 hover:text-blue-800 font-semibold underline">Kalınlaşmış tırnak problemleri</Link>
                </p>
              </div>

              {/* Çatlak Topuk Bakımı */}
              <div className="mb-8 bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Çatlak Topuk Bakımı
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Topuk bölgesindeki aşırı kuruluk ve deri kalınlaşması zamanla çatlaklara neden olabilir.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Özellikle derin çatlaklarda:
                </p>
                <ul className="list-none text-gray-700 space-y-2 mb-4">
                  <li className="flex items-start"><span className="text-emerald-500 mr-2">•</span> Yürüme sırasında ağrı,</li>
                  <li className="flex items-start"><span className="text-emerald-500 mr-2">•</span> Hassasiyet,</li>
                  <li className="flex items-start"><span className="text-emerald-500 mr-2">•</span> Açılma ve kanama</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  görülebilir.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Düzenli bakım ve doğru ürün kullanımı çatlak oluşumunun kontrol edilmesine yardımcı olabilir.
                </p>
                <p className="text-gray-700">
                  👉 İlgili yazı: <Link to="/blog/kis-aylarinda-catlak-topuk-tedavisi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Kış Aylarında Çatlak Topuk Tedavisi</Link>
                </p>
              </div>
            </section>

            {/* Podolog Hangi Hastalıklara Bakmaz? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-4">
                Podolog Hangi Hastalıklara Bakmaz?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Bu soru sık karıştırılır. Podolog ayak sağlığı konusunda önemli bir uzmandır ancak her ayak problemi podolojik bakım kapsamında değildir.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Aşağıdaki durumlarda doktor değerlendirmesi gerekir:
              </p>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                <ul className="list-none text-gray-700 space-y-3">
                  <li className="flex items-start"><AlertTriangle className="text-red-500 mr-3 flex-shrink-0 mt-0.5" size={20} /> Kemik kırıkları</li>
                  <li className="flex items-start"><AlertTriangle className="text-red-500 mr-3 flex-shrink-0 mt-0.5" size={20} /> İleri düzey eklem problemleri</li>
                  <li className="flex items-start"><AlertTriangle className="text-red-500 mr-3 flex-shrink-0 mt-0.5" size={20} /> Cerrahi gerektiren durumlar</li>
                  <li className="flex items-start"><AlertTriangle className="text-red-500 mr-3 flex-shrink-0 mt-0.5" size={20} /> İleri enfeksiyonlar</li>
                  <li className="flex items-start"><AlertTriangle className="text-red-500 mr-3 flex-shrink-0 mt-0.5" size={20} /> Sebebi belirlenmemiş ciddi şişlikler</li>
                  <li className="flex items-start"><AlertTriangle className="text-red-500 mr-3 flex-shrink-0 mt-0.5" size={20} /> Dolaşım bozukluğu şüphesi</li>
                  <li className="flex items-start"><AlertTriangle className="text-red-500 mr-3 flex-shrink-0 mt-0.5" size={20} /> İleri diyabetik ayak yaraları</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Podolog gerektiğinde dermatoloji, ortopedi veya ilgili diğer branşlarla birlikte çalışabilir.
              </p>
            </section>

            {/* Dermatolog mu Podolog mu? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Dermatolog mu Podolog mu?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Ayak ve tırnak problemlerinde en çok sorulan sorulardan biri de budur.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Cevap, problemin nedenine göre değişir.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-pink-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Dermatolog tercih edilebilecek durumlar:</h3>
                  <ul className="list-none text-gray-700 space-y-2">
                    <li className="flex items-start"><span className="text-pink-500 mr-2">•</span> Cilt hastalıkları</li>
                    <li className="flex items-start"><span className="text-pink-500 mr-2">•</span> Egzama</li>
                    <li className="flex items-start"><span className="text-pink-500 mr-2">•</span> Bazı mantar enfeksiyonları</li>
                    <li className="flex items-start"><span className="text-pink-500 mr-2">•</span> İlaç tedavisi gerektiren deri problemleri</li>
                    <li className="flex items-start"><span className="text-pink-500 mr-2">•</span> Tanı gerektiren cilt değişiklikleri</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Podolog tercih edilebilecek durumlar:</h3>
                  <ul className="list-none text-gray-700 space-y-2">
                    <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> Batık tırnak</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> Nasır</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> Tırnak şekil bozuklukları</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> Kalınlaşmış tırnak</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> Medikal ayak bakımı ihtiyacı</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> Basınca bağlı oluşan ayak problemleri</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="text-gray-800 font-medium">
                  Bazı durumlarda en doğru yaklaşım iki alanın birlikte değerlendirmesidir.
                </p>
              </div>
            </section>

            {/* Podolog İlk Muayenede Ne Yapar? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Podolog İlk Muayenede Ne Yapar?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Podolog değerlendirmesi yalnızca mevcut şikâyete bakılarak yapılmaz.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                İlk görüşmede genellikle şu noktalar incelenir:
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Şikâyetin geçmişi değerlendirilir</h3>
                      <ul className="list-none text-gray-700 space-y-1.5">
                        <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> Sorun ne zaman başladı?</li>
                        <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> Daha önce aynı problem yaşandı mı?</li>
                        <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> Kullanılan ayakkabı türü nedir?</li>
                        <li className="flex items-start"><span className="text-blue-500 mr-2">•</span> Daha önce uygulanan yöntemler nelerdir?</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Ayak ve tırnak yapısı incelenir</h3>
                      <ul className="list-none text-gray-700 space-y-1.5">
                        <li className="flex items-start"><span className="text-emerald-500 mr-2">•</span> Tırnak şekli</li>
                        <li className="flex items-start"><span className="text-emerald-500 mr-2">•</span> Deri yapısı</li>
                        <li className="flex items-start"><span className="text-emerald-500 mr-2">•</span> Basınç noktaları</li>
                        <li className="flex items-start"><span className="text-emerald-500 mr-2">•</span> Renk değişimleri</li>
                        <li className="flex items-start"><span className="text-emerald-500 mr-2">•</span> Kalınlaşmalar</li>
                      </ul>
                      <p className="text-gray-700 mt-3">değerlendirilir.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">Kişiye uygun bakım planı oluşturulur</h3>
                      <p className="text-gray-700">
                        Herkesin ayak yapısı ve problemi farklıdır. Bu nedenle uygulanacak bakım kişiye göre planlanır.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Podoloğa Ne Zaman Gidilmeli? */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Podoloğa Ne Zaman Gidilmeli?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ayakta veya tırnaklarda aşağıdaki değişiklikler fark edildiğinde profesyonel değerlendirme almak faydalı olabilir:
              </p>

              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {[
                  'Tırnak kenarında ağrı oluşması',
                  'Tırnağın ete doğru ilerlemesi',
                  'Tekrarlayan nasır oluşumu',
                  'Ayakta sürekli sertleşme',
                  'Tırnak renginde değişiklik',
                  'Tırnakta kalınlaşma',
                  'Yürürken belirli noktada ağrı oluşması',
                  'Ayak bakımını kendi başına yapmakta zorlanma'
                ].map((item, i) => (
                  <div key={i} className="flex items-start bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                    <CheckCircle2 className="text-green-600 mr-3 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                <p className="text-gray-800 font-medium">
                  ✨ Erken değerlendirme, birçok problemin ilerlemeden kontrol altına alınmasına yardımcı olabilir.
                  <br /><br />
                  👉 <Link to="/hizmetler" className="text-blue-600 hover:text-blue-800 font-semibold underline">Podolog hizmetleri</Link> · <Link to="/baglica-podolog-fiyatlari" className="text-blue-600 hover:text-blue-800 font-semibold underline">podolog fiyatları</Link>
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

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mt-6">
                <p className="text-gray-800">
                  👉 <Link to="/hizmet/batik-tirnak" className="text-blue-600 hover:text-blue-800 font-semibold underline">Batık tırnak tedavisi</Link> · <Link to="/baglica-podolog-fiyatlari" className="text-blue-600 hover:text-blue-800 font-semibold underline">Podolog Fiyatları Ankara</Link>
                </p>
              </div>
            </section>

            {/* Sonuç */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Sonuç
              </h2>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ayak sağlığı problemleri çoğu zaman günlük yaşam kalitesini etkileyen ancak uzun süre ihmal edilen sorunlardır.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Batık tırnak, nasır, tırnak deformasyonları veya tekrarlayan ayak problemleri yalnızca geçici çözümlerle kontrol altına alınmaya çalışıldığında tekrar edebilir.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Podolog değerlendirmesi, problemin nedenini anlamaya ve kişiye uygun bakım yaklaşımını belirlemeye yardımcı olur.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  Ayaklarınızda devam eden ağrı, şekil değişikliği veya tırnak problemi varsa erken değerlendirme almak, ilerleyen dönemde daha büyük sorunların önüne geçebilir.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ayak Sağlığınız İçin Randevu Alın
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Profesyonel podolojik değerlendirme ve kişiye özel bakım planı için uzman ekibimizle iletişime geçin.
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

export default PodologHangiHastaliklaraBakarBlog;
