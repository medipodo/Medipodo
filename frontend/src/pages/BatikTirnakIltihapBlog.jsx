import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Calendar, ChevronDown, ChevronUp, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

const slug = 'batik-tirnak-iltihaplanirsa-ne-yapilmali';
const baseUrl = `https://medipodo.com/blog/${slug}`;
const imageBase = '/images/blog/batik-tirnak-iltihap';

const faqItems = [
  {
    question: 'Batık tırnak iltihabı tehlikeli midir?',
    answer: 'Her batık tırnak ciddi bir enfeksiyon anlamına gelmez. Ancak irinli akıntı, yayılan kızarıklık, giderek artan ağrı, ateş veya titreme gibi belirtiler varsa durumun değerlendirilmesi gerekir. Diyabet veya dolaşım problemi bulunan kişilerde daha erken değerlendirme önemlidir.'
  },
  {
    question: 'Batık tırnaktan iltihap akması normal mi?',
    answer: 'İrinli akıntı, enfeksiyon açısından değerlendirilmesi gereken bir bulgudur. Tırnağı sıkarak veya şişmiş dokuyu delerek akıntıyı boşaltmaya çalışmak yerine profesyonel değerlendirme alınması daha uygundur.'
  },
  {
    question: 'İltihaplı batık tırnak evde kesilir mi?',
    answer: 'Şişmiş ve hassas dokunun içerisindeki tırnak kenarını kişinin kendi başına derinden kesmeye çalışması önerilmez. Kontrolsüz kesim dokuyu daha fazla travmatize edebilir ve geride sivri bir tırnak parçası bırakabilir.'
  },
  {
    question: 'Batık tırnak için antibiyotik kullanılır mı?',
    answer: 'Her batık tırnakta antibiyotik gerekmez. Kızarıklık ve şişlik yalnızca tırnağın oluşturduğu mekanik inflamasyondan da kaynaklanabilir. Antibiyotik gerekip gerekmediğine hekim tarafından karar verilmelidir.'
  },
  {
    question: 'Batık tırnakta neden et oluşur?',
    answer: 'Tırnağın çevredeki dokuya uzun süre baskı yapması sonucunda hassas granülasyon dokusu gelişebilir. Bu doku kolay kanayabilir ve özellikle ilerlemiş batıklarda görülebilir.'
  },
  {
    question: 'Batık tırnak hangi parmakta daha sık olur?',
    answer: 'Batık tırnak en sık ayak başparmağında görülür ancak diğer ayak parmaklarında da gelişebilir.'
  },
  {
    question: 'Batık tırnak neden sürekli tekrarlar?',
    answer: 'Tırnağın çok kısa veya köşelerinin derin kesilmesi, dar ayakkabılar, tırnağın doğal kavisi ve tekrarlayan travmalar sorunun tekrarına katkıda bulunabilir. Tekrarlayan vakalarda altta yatan nedenlerin birlikte değerlendirilmesi gerekir.'
  },
  {
    question: 'İltihaplı batık tırnakla yürünür mü?',
    answer: 'Hafif vakalarda yürümek mümkün olabilir ancak ayakkabı baskısı ağrıyı ve tahrişi artırabilir. Belirgin ağrı, şişlik veya enfeksiyon bulguları varsa değerlendirme alınması daha uygundur.'
  },
  {
    question: 'Batık tırnakta pedikür yaptırılır mı?',
    answer: 'Aktif kızarıklık, şişlik, açık yara veya akıntı bulunan bölgeye kozmetik pedikür kapsamında müdahale edilmesi uygun olmayabilir. Öncelikle mevcut durumun değerlendirilmesi gerekir.'
  },
  {
    question: 'Batık tırnak için ne zaman doktora gidilmeli?',
    answer: 'İrinli akıntı, yayılan kızarıklık, ciddi ağrı, ateş veya titreme varsa; ayrıca diyabet veya ayağın dolaşımını etkileyen bir hastalık bulunuyorsa tıbbi değerlendirme geciktirilmemelidir.'
  }
];

const FAQAccordion = ({ item, isOpen, onClick }) => (
  <div className="border border-gray-200 rounded-lg mb-3">
    <button
      type="button"
      className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-lg"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <span className="font-medium text-blue-950">{item.question}</span>
      {isOpen ? <ChevronUp size={20} className="text-blue-600" /> : <ChevronDown size={20} className="text-gray-400" />}
    </button>
    {isOpen && <div className="px-5 pb-4 text-gray-600 leading-relaxed">{item.answer}</div>}
  </div>
);

const BatikTirnakIltihapBlog = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Batık Tırnak İltihaplanırsa Ne Yapılmalı? | MediPodo</title>
        <meta name="description" content="Batık tırnak iltihaplandığında ne yapılmalı? Şişlik, kızarıklık ve akıntı durumunda yapılması gerekenleri, kaçınılması gereken müdahaleleri ve ne zaman uzmana başvurulacağını öğrenin." />
        <link rel="canonical" href={baseUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Batık Tırnak İltihaplanırsa Ne Yapılmalı? | MediPodo" />
        <meta property="og:description" content="Batık tırnak iltihaplandığında ne yapılmalı? Şişlik, kızarıklık ve akıntı durumunda yapılması gerekenleri, kaçınılması gereken müdahaleleri ve ne zaman uzmana başvurulacağını öğrenin." />
        <meta property="og:image" content={`https://medipodo.com${imageBase}/batik-tirnak-iltihap-2.webp`} />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Batık Tırnak İltihaplanırsa Ne Yapılmalı? | MediPodo" />
        <meta name="twitter:description" content="İltihaplı batık tırnakta hangi belirtilere dikkat edilmeli, evde hangi hatalardan kaçınılmalı ve ne zaman profesyonel değerlendirme alınmalı?" />
        <meta name="twitter:image" content={`https://medipodo.com${imageBase}/batik-tirnak-iltihap-2.webp`} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Batık Tırnak İltihaplanırsa Ne Yapılmalı?',
          description: 'Batık tırnak iltihaplandığında ne yapılmalı? Şişlik, kızarıklık ve akıntı durumunda yapılması gerekenler.',
          image: `https://medipodo.com${imageBase}/batik-tirnak-iltihap-2.webp`,
          author: { '@type': 'Person', name: 'Podolog Serdar Ceylan' },
          publisher: { '@type': 'Organization', name: 'MediPodo Ayak Sağlığı Merkezi', url: 'https://medipodo.com' },
          datePublished: '2026-08-21',
          dateModified: '2026-08-21',
          mainEntityOfPage: { '@type': 'WebPage', '@id': baseUrl }
        })}</script>
      </Helmet>

      <BreadcrumbSchema items={[
        { name: 'Ana Sayfa', url: 'https://medipodo.com/' },
        { name: 'Blog', url: 'https://medipodo.com/blog' },
        { name: 'Batık Tırnak İltihaplanırsa Ne Yapılmalı?', url: baseUrl }
      ]} />

      <div className="min-h-screen">
        <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <Link to="/blog">
              <Button variant="ghost" className="mb-6 text-blue-700">
                <ArrowLeft className="mr-2" size={18} />
                Blog'a Dön
              </Button>
            </Link>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {['Batık Tırnak', 'İltihap', 'Tırnak Sağlığı', 'Ayak Sağlığı', 'Podoloji', 'Ankara'].map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-700">{tag}</Badge>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">Batık Tırnak İltihaplanırsa Ne Yapılmalı?</h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center space-x-2"><User size={18} /><span>Podolog Serdar Ceylan</span></div>
                <div className="flex items-center space-x-2"><Calendar size={18} /><span>21 Ağustos 2026</span></div>
                <div className="flex items-center space-x-2"><Clock size={18} /><span>15 dk</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <img src={`${imageBase}/batik-tirnak-iltihap-2.webp`} alt="İltihaplanmış ve kızarık batık tırnak görünümü" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <article className="max-w-4xl mx-auto text-left">
              <div className="text-left">
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">Batık tırnağın çevresinde kızarıklık, şişlik, hassasiyet veya akıntı oluşması, tırnak kenarındaki dokunun belirgin şekilde tahriş olduğunu ve bazı durumlarda enfeksiyon gelişmiş olabileceğini düşündürür. Özellikle <strong className="font-semibold text-blue-950">irinli akıntı, giderek artan ağrı, yayılan kızarıklık veya belirgin ısı artışı</strong> varsa bölgeyi evde kesmeye, oymaya ya da tırnak kenarını çıkarmaya çalışmak yerine sağlık profesyoneli tarafından değerlendirilmesi daha doğru olur.</p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">Batık tırnak yalnızca tırnağın yanlış uzamasından ibaret değildir. Tırnak kenarı çevredeki dokuya sürekli baskı yaptığında bölgede inflamasyon gelişebilir. Bu baskı devam ettikçe doku daha hassas hale gelebilir, şişebilir ve enfeksiyona açık bir alan oluşabilir.</p>
                <blockquote className="border-l-4 border-blue-600 bg-blue-50 px-5 py-4 text-blue-950 not-italic"><strong>Kısa cevap:</strong> Batık tırnak iltihaplandığında öncelikle tırnağa uygulanan basınç azaltılmalı, bölge temiz ve kuru tutulmalı ve tırnak kenarı kesilip çıkarılmaya çalışılmamalıdır. İrin, yayılan kızarıklık, şiddetli ağrı veya ateş gibi bulgular varsa profesyonel değerlendirme geciktirilmemelidir.</blockquote>

                <hr />
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">Batık Tırnak Neden İltihaplanır?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">Batık tırnakta temel sorun, tırnak plağının kenarının tırnağı çevreleyen deriyle sürekli temas etmesi veya doku içerisine doğru baskı yapmasıdır.</p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">Bu durum başlangıçta yalnızca yürürken veya ayakkabı giyerken hissedilen hafif bir hassasiyet şeklinde başlayabilir. Ancak baskının devam etmesiyle tırnak kenarındaki deri kızarabilir ve şişebilir. Deri bütünlüğünün bozulduğu durumlarda bakterilerin bölgeye ulaşması da kolaylaşabilir.</p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">Batık tırnağın ilerlemesine katkıda bulunabilen durumlar arasında şunlar bulunur:</p>
                <ul><li>Tırnakların çok kısa kesilmesi</li><li>Tırnak köşelerinin derinden alınması</li><li>Dar veya sivri burunlu ayakkabı kullanılması</li><li>Tırnak yapısının fazla kavisli olması</li><li>Ayağın uzun süre nemli kalması ve yoğun terleme</li><li>Tırnağın darbe alması</li><li>Tırnak kenarının sürekli kurcalanması</li><li>Daha önce batık gelişmiş tırnağın yanlış kesilmeye devam edilmesi</li></ul>
                <img src={`${imageBase}/batik-tirnak-iltihap-3.webp`} alt="Kızarık ve şişmiş batık tırnak çevresi" className="w-full h-auto rounded-lg shadow-md" />

                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">Batık Tırnakta İltihap Olduğu Nasıl Anlaşılır?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">Her kızarık batık tırnak enfekte olmuş anlamına gelmez. Tırnağın deriye uyguladığı mekanik baskı da kızarıklık, hassasiyet ve şişliğe neden olabilir. Bu nedenle yalnızca tırnağın görünümüne bakılarak kesin bir ayrım yapmak her zaman mümkün değildir.</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Batık tırnakta görülebilecek bulgular</h3>
                <div className="overflow-x-auto not-prose"><table className="w-full border-collapse text-base"><thead><tr className="bg-blue-50"><th className="border border-gray-200 px-4 py-3 text-left">Bulgu</th><th className="border border-gray-200 px-4 py-3 text-left">Ne düşündürebilir?</th></tr></thead><tbody>{[
                  ['Hafif kızarıklık', 'Tırnak baskısına bağlı tahriş/inflamasyon'],
                  ['Dokununca hassasiyet', 'Tırnak kenarındaki basınç'],
                  ['Tırnak kenarında şişlik', 'Devam eden inflamasyon'],
                  ['Yürürken ağrı', 'Ayakkabı ve tırnak baskısının artması'],
                  ['Kanama', 'Hassas dokunun travmatize olması'],
                  ['İrinli akıntı', 'Enfeksiyon açısından değerlendirilmesi gereken bulgu'],
                  ['Kötü kokulu akıntı', 'Enfeksiyon eşlik edebileceğini düşündürebilir'],
                  ['Kızarıklığın yayılması', 'Daha ileri değerlendirme gerektirebilir'],
                  ['Ateş veya titreme', 'Gecikmeden tıbbi değerlendirme gerektirir']
                ].map(([finding, meaning]) => <tr key={finding}><td className="border border-gray-200 px-4 py-3 font-medium">{finding}</td><td className="border border-gray-200 px-4 py-3">{meaning}</td></tr>)}</tbody></table></div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">Burada önemli nokta, <strong className="font-semibold text-blue-950">iltihabi reaksiyon ile enfeksiyonun aynı şey olmadığıdır.</strong> Batık tırnağın oluşturduğu yabancı cisim benzeri mekanik etki, enfeksiyon bulunmasa bile belirgin kızarıklık ve şişliğe yol açabilir.</p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">Batık Tırnak İltihaplanırsa Evde İlk Olarak Ne Yapılabilir?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">Hafif vakalarda amaç tırnağın çevresindeki dokuyu daha fazla travmatize etmemek ve bölgedeki basıncı azaltmaktır.</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Tırnak kenarını kesmeye çalışmayın</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">En sık karşılaşılan hatalardan biri, ağrıyan tırnak köşesinin makas veya tırnak pensiyle mümkün olduğunca derinden kesilmeye çalışılmasıdır. Şişmiş dokunun içine girerek tırnak parçası aramak; dokunun yaralanmasına, kanamaya, mevcut inflamasyonun artmasına ve geride sivri bir tırnak parçası kalmasına neden olabilir.</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Ayağa baskı yapan ayakkabılardan uzak durun</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">Tırnağın çevresindeki doku hassassa dar ayakkabı içerisindeki her adım aynı bölgeye tekrar baskı uygulayabilir. Mümkün olduğunca parmaklara yeterli alan bırakan, geniş burunlu ayakkabılar tercih edilmelidir.</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Bölgeyi temiz tutun</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">Batık bulunan bölgenin hijyenine dikkat edilmeli, ayağın uzun süre nemli kalmasına izin verilmemelidir. Ayak yıkandıktan sonra özellikle parmak çevresi dikkatlice kurulanmalıdır.</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Tırnağı kurcalamayın</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">Tırnağın altına sivri cisim sokmak, tırnak kenarını kaldırmaya çalışmak veya şişmiş dokuyu sıkmak uygun değildir.</p>
                <img src={`${imageBase}/batik-tirnak-iltihap-1.webp`} alt="Tırnak çevresine kontrolsüz ev müdahalesinden kaçınma" className="w-full h-auto rounded-lg shadow-md" />

                <hr />
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">İltihaplı Batık Tırnak Kesilir mi?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">İltihaplı ve şişmiş bir tırnağın kenarını kişinin kendi başına derinden kesmesi önerilmez.</p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left"><strong className="font-semibold text-blue-950">Profesyonel olarak tırnağın sorun oluşturan bölümüne müdahale edilmesi ile kişinin evde tırnak köşesini oyması aynı işlem değildir.</strong></p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">Batığın seviyesine göre profesyonel değerlendirmede tırnak kenarındaki basıncın azaltılması, uygun konservatif yöntemler veya daha ileri vakalarda farklı tıbbi girişimler değerlendirilebilir. Hangi yöntemin uygun olduğu tırnağın görünümüne, çevre dokunun durumuna, akıntı bulunup bulunmamasına ve batığın tekrarlayıp tekrarlamadığına göre değişir.</p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">İltihaplı Batık Tırnağa Antibiyotik Gerekir mi?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">Batık tırnakta kızarıklık görülmesi tek başına antibiyotik kullanılması gerektiği anlamına gelmez. Batığın oluşturduğu mekanik baskı çevre dokuda enfeksiyon olmadan da inflamasyona yol açabilir.</p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">Özellikle enfeksiyonun çevre dokuya yayıldığını düşündüren durumlarda hekim değerlendirmesi gerekir. <strong className="font-semibold text-blue-950">Antibiyotik hekimin değerlendirmesi ve önerisi doğrultusunda kullanılmalıdır.</strong></p>
                <img src={`${imageBase}/batik-tirnak-iltihap-4.webp`} alt="İltihap bulguları görülen ayak başparmağı" className="w-full h-auto rounded-lg shadow-md" />

                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">Batık Tırnakta Hangi Durumlarda Beklenmemeli?</h2>
                <div className="overflow-x-auto not-prose"><table className="w-full border-collapse text-base"><thead><tr className="bg-blue-50"><th className="border border-gray-200 px-4 py-3 text-left">Durum</th><th className="border border-gray-200 px-4 py-3 text-left">Yaklaşım</th></tr></thead><tbody>{[
                  ['Hafif hassasiyet, belirgin akıntı yok', 'Basıncı azaltma ve takip düşünülebilir'],
                  ['Ağrı giderek artıyor', 'Değerlendirme önerilir'],
                  ['Tırnak kenarında irin var', 'Profesyonel değerlendirme önerilir'],
                  ['Kızarıklık parmağa doğru yayılıyor', 'Tıbbi değerlendirme geciktirilmemeli'],
                  ['Belirgin şişlik ve zonklama var', 'Değerlendirme önerilir'],
                  ['Ateş veya titreme eşlik ediyor', 'Gecikmeden sağlık kuruluşuna başvurulmalı'],
                  ['Sorun sürekli aynı bölgede tekrarlıyor', 'Batığın nedeni ve tırnak yapısı değerlendirilmelidir'],
                  ['Diyabet veya dolaşım problemi bulunuyor', 'Evde müdahale yerine erken profesyonel değerlendirme tercih edilmelidir']
                ].map(([condition, action]) => <tr key={condition}><td className="border border-gray-200 px-4 py-3 font-medium">{condition}</td><td className="border border-gray-200 px-4 py-3">{action}</td></tr>)}</tbody></table></div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">Diyabeti Olanlarda İltihaplı Batık Tırnak Neden Daha Önemlidir?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">Diyabeti olan kişilerde ayaktaki küçük yaralanmaların dahi daha dikkatli değerlendirilmesi gerekir. Özellikle dolaşım bozukluğu veya ayakta duyu kaybı bulunan kişiler, tırnağın oluşturduğu travmayı başlangıçta yeterince fark etmeyebilir.</p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">Bu nedenle diyabeti bulunan bir kişinin batık tırnağı kendi başına kesmeye, şişmiş bölgeyi boşaltmaya veya tırnak kenarını sivri bir cisimle kaldırmaya çalışması uygun değildir.</p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">Batık Tırnakta Et Parçası Neden Oluşur?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">İlerlemiş veya uzun süredir devam eden batık tırnaklarda tırnağın yanında kırmızı, hassas ve kolay kanayabilen bir doku görülebilir. Halk arasında bazen “tırnağın yanında et çıktı” şeklinde tarif edilen bu görünüm, bölgenin uzun süreli tahrişine bağlı gelişen granülasyon dokusu ile ilişkili olabilir.</p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">Bu dokunun yalnızca kesilmesi veya koparılması, tırnağın oluşturduğu baskı devam ettiği sürece temel problemi ortadan kaldırmaz. Asıl değerlendirilmesi gereken nokta, tırnağın neden hâlâ o bölgeye baskı uyguladığıdır.</p>
                <img src={`${imageBase}/batik-tirnak-iltihap-5.webp`} alt="Uzun süren batık tırnakta kızarıklık ve şişlik" className="w-full h-auto rounded-lg shadow-md" />

                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">Batık Tırnak İltihabı Kendiliğinden Geçer mi?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">Hafif ve erken dönemdeki tahriş, tırnağa uygulanan baskının azaltılmasıyla gerileyebilir. Ancak tırnak kenarı sürekli olarak dokuya baskı yapmaya devam ediyorsa belirtiler tekrarlayabilir veya ilerleyebilir.</p>
                <ul><li>İrinli akıntı</li><li>Artan şişlik</li><li>Giderek şiddetlenen ağrı</li><li>Yayılan kızarıklık</li></ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">Batık Tırnakta Profesyonel Değerlendirmede Nelere Bakılır?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">Batık tırnak değerlendirilirken yalnızca ağrıyan köşeye bakmak yeterli değildir. Tırnağın genel yapısı ve batığın oluşmasına katkıda bulunabilecek faktörlerin birlikte değerlendirilmesi gerekir.</p>
                <ul><li>Tırnağın hangi kenarında batık olduğu</li><li>Tırnak kenarının dokuya ne kadar baskı yaptığı</li><li>Kızarıklık ve şişliğin derecesi</li><li>Akıntı bulunup bulunmadığı</li><li>Granülasyon dokusu gelişip gelişmediği</li><li>Tırnak plağının şekli ve kavisi</li><li>Daha önce aynı bölgede batık yaşanıp yaşanmadığı</li><li>Tırnağın nasıl kesildiği</li><li>Kullanılan ayakkabıların parmaklara yaptığı baskı</li></ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">Batık Tırnak Tekrarlar mı?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">Evet. Özellikle batığa neden olan faktör devam ediyorsa sorun aynı tırnakta tekrar görülebilir. Tırnağın her ağrıdığında köşesini derinden kesmek bir süre rahatlama sağlayabilir; ancak tırnak yeniden uzarken sivri kalan kenar tekrar çevredeki dokuya baskı yapabilir.</p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">Batık Tırnak Tekrarını Azaltmak İçin Nelere Dikkat Edilebilir?</h2>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tırnakları aşırı kısa kesmeyin</h3><p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">Tırnağı parmak ucunun çok gerisine kadar kesmek yerine yeterli uzunluk bırakılması tercih edilir.</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Köşeleri sürekli oymayın</h3><p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">Tırnak kenarlarının derinden alınması, tırnak uzadıkça yeniden sorun oluşturabilecek sivri bir kenar bırakabilir.</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ayakkabı seçimine dikkat edin</h3><p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">Parmakları birbirine sıkıştıran veya başparmak üzerine sürekli baskı yapan ayakkabılar batık şikâyetlerini artırabilir.</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ayağı kuru tutun</h3><p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">Yoğun terleme nedeniyle tırnak çevresindeki derinin uzun süre nemli ve yumuşak kalması bazı kişilerde tahrişi kolaylaştırabilir.</p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">Ankara'da İltihaplı Batık Tırnak İçin Nereye Başvurulabilir?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left">Batık tırnakta uygulanacak yaklaşım, problemin hangi aşamada olduğuna göre değişebilir. Ankara'da batık tırnak nedeniyle başvuran kişilerde öncelikle tırnak ve çevre dokunun mevcut durumu değerlendirilmelidir.</p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 text-left"><strong className="font-semibold text-blue-950">MediPodo Ankara Bağlıca'da</strong> batık tırnak ve ayak sağlığı konusunda değerlendirme hizmeti sunmaktadır. Podolojik değerlendirmede amaç yalnızca ağrıyan bölgeye müdahale etmek değil, batığın oluşmasına veya tekrarlamasına katkıda bulunabilecek faktörleri de değerlendirmektir.</p>
                <blockquote className="border-l-4 border-blue-600 bg-blue-50 px-5 py-4 text-blue-950 not-italic"><strong>Önemli:</strong> Bu içerik genel bilgilendirme amacıyla hazırlanmıştır. Muayene, tanı veya kişiye özel tedavi önerisinin yerine geçmez. Özellikle enfeksiyon şüphesi, diyabet, dolaşım problemi veya hızla ilerleyen belirtilerde sağlık profesyoneline başvurulmalıdır.</blockquote>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-blue-950 mb-6">Sıkça Sorulan Sorular</h2>
                <div className="space-y-2">{faqItems.map((item, index) => <FAQAccordion key={item.question} item={item} isOpen={openFAQ === index} onClick={() => setOpenFAQ(openFAQ === index ? null : index)} />)}</div>
              </div>
            </article>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-950 mb-6">Diğer Yazıları Keşfedin</h2>
            <Link to="/blog"><Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white">Tüm Blog Yazıları</Button></Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default BatikTirnakIltihapBlog;
