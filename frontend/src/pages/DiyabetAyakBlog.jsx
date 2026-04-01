import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, Phone, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';

const DiyabetAyakBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Diyabet Hastalarında Ayak Sağlığının Önemi: Görünmez Tehlikeler | Medipodo</title>
        <meta name="description" content="Diyabetik ayak sendromundan korunma yolları, günlük bakım rutini ve podolog tavsiyeleri. Medipodo ile ayak sağlığınızı koruyun." />
        <meta name="keywords" content="diyabet, diyabetik ayak, nöropati, anjiyopati, ayak sağlığı, podolog, Medipodo, diyabet bakımı" />
        <link rel="canonical" href="https://medipodo.com/blog/diyabet-ve-ayak-sagligi" />
        
        {/* Open Graph Meta Tags - WhatsApp, Facebook, LinkedIn önizlemesi için */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Diyabet Hastalarında Ayak Sağlığının Önemi: Görünmez Tehlikeler" />
        <meta property="og:description" content="Diyabetik ayak sendromundan korunma yolları, günlük bakım rutini ve podolog tavsiyeleri." />
        <meta property="og:image" content="https://medipodo.com/images/medipodo-og-home-v2.jpg" />
        <meta property="og:url" content="https://medipodo.com/blog/diyabet-ve-ayak-sagligi" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Diyabet Hastalarında Ayak Sağlığının Önemi" />
        <meta name="twitter:description" content="Diyabetik ayak sendromundan korunma yolları ve podolog tavsiyeleri." />
        <meta name="twitter:image" content="https://medipodo.com/images/medipodo-og-home-v2.jpg" />
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
              Diyabet Hastalarında Ayak Sağlığının Önemi: Görünmez Tehlikeler ve Korunma Yolları
            </h1>
            
            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Medipodo Podolog Ekibi</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>18 dakika okuma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Giriş */}
            <section className="mb-12">
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-8">
                <div className="flex items-start">
                  <AlertCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-red-900 text-lg mb-2">Önemli Uyarı</h3>
                    <p className="text-red-800">
                      Dünya Sağlık Örgütü'ne göre, diyabetli bireylerin yaklaşık %15'i hayatlarının bir döneminde diyabetik ayak ülseri geliştirme riskiyle karşı karşıyadır. Erken teşhis ve düzenli bakım hayat kurtarır.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Diyabet, kan şekeri seviyelerinin yüksek seyretmesiyle karakterize kronik bir hastalıktır. Vücuttaki birçok sistemi etkilemekle birlikte, ayaklar üzerindeki etkileri genellikle en ciddi ve en çok göz ardı edilen komplikasyonlardan biridir.
              </p>

              <div className="my-8">
                <img 
                  src="/blog-images/diyabet/diyabet-yarasi-ulser1.webp" 
                  alt="Diyabetik ayak kontrolü" 
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Bu durum, sadece yaşam kalitesini düşürmekle kalmaz, aynı zamanda ampütasyon (uzuv kesilmesi) riskini de önemli ölçüde artırır. Bu yazıda, diyabetin ayak sağlığı üzerindeki etkilerini, risk faktörlerini ve Medipodo olarak önerdiğimiz koruyucu bakım stratejilerini detaylı bir şekilde ele alacağız.
              </p>
            </section>

            {/* Bölüm 1: Diyabetik Ayak Sendromu */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-2">
                1. Diyabetik Ayak Sendromu: Görünmez Tehlikeler
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Diyabetik ayak sendromu, diyabetin neden olduğu sinir hasarı (nöropati) ve damar hasarı (anjiyopati) sonucu ortaya çıkan, ayaklarda yara, enfeksiyon ve doku yıkımı ile karakterize bir durumdur. Bu iki temel mekanizma, ayakları dış etkenlere karşı savunmasız hale getirir.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <img 
                  src="/blog-images/diyabet/diyabetik-ayak2.webp" 
                  alt="Diyabetik nöropati" 
                  className="w-full rounded-xl shadow-lg"
                />
                <img 
                  src="/blog-images/diyabet/yasli-eller3.webp" 
                  alt="Ayak muayenesi" 
                  className="w-full rounded-xl shadow-lg"
                />
              </div>

              {/* Nöropati Alt Bölümü */}
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  1.1. Diyabetik Nöropati: Duyu Kaybı ve Şekil Bozuklukları
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Yüksek kan şekeri seviyeleri zamanla ayak ve bacaklardaki sinirlere zarar verir. Bu duruma diyabetik nöropati denir. <em className="text-blue-900 font-semibold">"Diyabetik sinir hastalığı, bacaklarda ve ayaklarda duyu kaybına yol açabilir ve bu da ayak yarası ve bacak kesilmesi ile (amputasyon) sonuçlanabilir."</em>
                </p>

                <h4 className="font-bold text-gray-900 mb-3 text-lg">Nöropatinin Ayak Sağlığına Etkileri:</h4>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-bold text-blue-800 mb-2">🔴 Duyu Kaybı (Periferik Nöropati)</h5>
                    <p className="text-gray-700">
                      Ağrı, sıcaklık ve basınç hissinin azalması veya tamamen kaybolması. Bu, hastanın ayakkabı vurması, kesik veya yanık gibi yaralanmaları fark edememesine neden olur.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-bold text-blue-800 mb-2">🔴 Motor Nöropati</h5>
                    <p className="text-gray-700">
                      Ayak kaslarında zayıflama ve dengesizlik. Bu durum, parmaklarda çekiç parmak veya pençe parmak gibi şekil bozukluklarına yol açarak ayakta anormal basınç noktaları oluşturur.
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-bold text-blue-800 mb-2">🔴 Otonom Nöropati</h5>
                    <p className="text-gray-700">
                      Terleme mekanizmasının bozulması. Ayak derisi kurur, çatlar ve yarıklar oluşur. Bu çatlaklar, enfeksiyon için giriş kapısı görevi görür.
                    </p>
                  </div>
                </div>
              </div>

              <div className="my-8">
                <img 
                  src="/blog-images/diyabet/diyabetik-ayak-yarasi-4.webp" 
                  alt="Diyabetik ayak deformiteleri" 
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>

              {/* Anjiyopati Alt Bölümü */}
              <div className="bg-red-50 rounded-xl p-6 mb-6">
                <h3 className="text-2xl font-bold text-red-900 mb-4">
                  1.2. Diyabetik Anjiyopati: Kan Akışı Sorunları
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Diyabet, aynı zamanda ayaklara kan taşıyan damarları da etkileyerek daralmasına ve sertleşmesine neden olur. Bu duruma diyabetik anjiyopati (periferik arter hastalığı) denir.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start">
                    <XCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">
                      <strong>Yetersiz Oksijen ve Besin:</strong> Kan akışının azalması, ayak dokularına yeterli oksijen ve besin maddesinin ulaşmasını engeller.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">
                      <strong>Yavaş İyileşme:</strong> Bir yara oluştuğunda, iyileşme süreci yavaşlar ve enfeksiyon riski artar. Yetersiz kan akışı, enfeksiyonla savaşan bağışıklık hücrelerinin de yara bölgesine ulaşmasını zorlaştırır.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <img 
                  src="/blog-images/diyabet/ayak-yanmasi5.webp" 
                  alt="Damar sağlığı" 
                  className="w-full rounded-xl shadow-lg"
                />
                <img 
                  src="/blog-images/diyabet/kan-dolasimi6.webp" 
                  alt="Kan dolaşımı kontrolü" 
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </section>

            {/* Bölüm 2: Günlük Bakım Rehberi */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-2">
                2. Podolog'dan Diyabetik Ayak Eğitimi: Adım Adım Günlük Bakım Rehberi
              </h2>

              <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-8 mb-8">
                <p className="text-lg text-gray-800 leading-relaxed italic">
                  <strong>Değerli hastamız,</strong> diyabetle yaşamak, ayaklarınıza özel bir ilgi göstermenizi gerektirir. Unutmayın, ayaklarınızdaki en küçük bir yara bile, fark edilmezse ciddi sorunlara yol açabilir. Bu yüzden, size bir podolog olarak, her gün uygulamanız gereken hayati bir bakım rutinini öğreteceğim. Bu rutin, ayaklarınızı koruma kalkanınızdır. Lütfen bu adımları bir görev değil, sağlığınız için bir yatırım olarak görün.
                </p>
              </div>

              <div className="my-8">
                <img 
                  src="/blog-images/diyabet/kan-sekeri-olc7.webp" 
                  alt="Günlük ayak bakımı" 
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>

              {/* Günlük Kontrol */}
              <div className="bg-yellow-50 rounded-xl p-6 mb-8 border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  ⏰ Günlük Kontrol: Ayaklarınızın Dili
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Her gün, tercihen akşamları, ayaklarınızı detaylıca kontrol etmek için 5 dakikanızı ayırın. Bu, erken teşhis için en önemli adımdır.
                </p>

                <div className="bg-white rounded-lg p-5 mb-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-3">Kontrol Alanı - Nasıl Yapılır? Neye Dikkat Edilmeli?</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-blue-900 mb-2">👣 Ayak Derisi ve Tırnaklar:</h5>
                      <p className="text-gray-700 mb-2">
                        Ayaklarınızın üstünü, altını, parmak aralarını ve tırnaklarınızı inceleyin.
                      </p>
                      <div className="bg-blue-50 p-3 rounded-lg mb-2">
                        <p className="text-sm text-gray-700">
                          <strong>💡 Yaşlı hastalarımız veya eğilmekte zorlananlar için:</strong> Ayak tabanınızı kontrol etmekte zorlanıyorsanız, küçük bir el aynası kullanın.
                        </p>
                      </div>
                      <p className="text-gray-700">
                        <strong>Kontrol edilecekler:</strong> Kızarıklık, şişlik, kabarcık, kesik, morarma, su toplaması, tırnaklarda renk değişimi veya batık belirtisi.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-blue-900 mb-2">👟 Ayakkabı ve Çorap:</h5>
                      <p className="text-gray-700">
                        Ayakkabınızı giymeden önce mutlaka elinizle içini kontrol edin. Çoraplarınızı çıkardıktan sonra dikiş izi veya kan lekesi olup olmadığına bakın. Ayakkabı içinde kalmış küçük bir taş, yırtık bir astar veya katlanmış bir çorap, fark etmeden ciddi bir yara açabilir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-8">
                <img 
                  src="/blog-images/diyabet/diyabetik-beslenme8.webp" 
                  alt="Ayak muayene teknikleri" 
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>

              {/* DO's & DON'Ts Tablosu */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  ✅ Yapılması ve ❌ Yapılmaması Gerekenler
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-bold">Alan</th>
                        <th className="px-6 py-4 text-left font-bold">✅ Yapılması Gerekenler</th>
                        <th className="px-6 py-4 text-left font-bold">❌ Yapılmaması Gerekenler</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">Temizlik ve Kurutma</td>
                        <td className="px-6 py-4 text-gray-700">
                          Ayaklarınızı her gün ılık su ve tahriş etmeyen sabunla yıkayın. Su sıcaklığını elinizle değil, dirseğinizle kontrol edin. 5 dakikadan fazla suda tutmayın.
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          Cildin aşırı yumuşaması yaralanma riskini artırır.
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">Nemlendirme</td>
                        <td className="px-6 py-4 text-gray-700">
                          Topuk ve taban gibi kuru bölgelere üre içeren, podolog onaylı nemlendiriciler sürün.
                        </td>
                        <td className="px-6 py-4 text-red-700 font-semibold">
                          ASLA parmak aralarına nemlendirici sürmeyin. Kalan nem, mantar enfeksiyonuna yol açar.
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">Yaralanma Riski</td>
                        <td className="px-6 py-4 text-gray-700">
                          Evde bile olsa, ayağınıza tam oturan, koruyucu terlikler giyin. Çıplak ayakla dolaşmayın.
                        </td>
                        <td className="px-6 py-4 text-red-700">
                          Nöropati nedeniyle hissedilmeyen kesikler enfeksiyon kapısıdır.
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">Isı ve Kimyasallar</td>
                        <td className="px-6 py-4 text-gray-700">
                          Ayaklarınızı ısıtıcı, kalorifer veya sıcak su torbasına yaklaştırmayın.
                        </td>
                        <td className="px-6 py-4 text-red-700 font-semibold">
                          Nasır sökücü kimyasallar, jilet veya keskin aletler kullanmayın. Bu müdahaleler sadece podolog tarafından yapılmalıdır.
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">Ayakkabı Seçimi</td>
                        <td className="px-6 py-4 text-gray-700">
                          Ayak parmaklarınızı sıkıştırmayan, dikişsiz, yumuşak derili ve ortopedik tabanlı ayakkabılar tercih edin.
                        </td>
                        <td className="px-6 py-4 text-red-700">
                          Parmak arası terlik, sivri burunlu, topuklu veya dar ayakkabılar giymeyin.
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900">Profesyonel Bakım</td>
                        <td className="px-6 py-4 text-gray-700">
                          Tırnak ve nasır bakımı için düzenli olarak (genellikle 6-8 haftada bir) podoloğunuzu ziyaret edin.
                        </td>
                        <td className="px-6 py-4 text-red-700">
                          Tırnaklarınızı çok kısa veya kavisli kesmeyin. Tırnak batması ve enfeksiyon riskini artırır.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <img 
                  src="/blog-images/diyabet/ebu-evrelendirilemeyen-basinc-ulseri10.webp" 
                  alt="Doğru ayakkabı seçimi" 
                  className="w-full rounded-xl shadow-lg"
                />
                <img 
                  src="/blog-images/diyabet/diyabet-gunu-11.webp" 
                  alt="Profesyonel podoloji bakımı" 
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </section>

            {/* Bölüm 3: Medipodo'nun Rolü */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-2">
                3. Medipodo'nun Koruyucu Rolü
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Medipodo olarak, diyabetli bireylerin ayak sağlığını korumak için kapsamlı bir yaklaşım sunuyoruz:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600">
                  <div className="text-blue-600 mb-4">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Düzenli Podolojik Bakım</h3>
                  <p className="text-gray-700">
                    Tırnakların doğru kesilmesi, nasır ve sertleşmiş derilerin (kallus) güvenli bir şekilde temizlenmesi ve olası problemlerin erken tespiti.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600">
                  <div className="text-blue-600 mb-4">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Basınç Analizi ve Tabanlık</h3>
                  <p className="text-gray-700">
                    Yürüme analizi (gait analysis) yaparak ayaktaki anormal basınç noktalarını tespit ediyor ve kişiye özel ortopedik tabanlıklar ile bu basıncı dengeliyoruz.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border-t-4 border-blue-600">
                  <div className="text-blue-600 mb-4">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Diyabetik Ayak Eğitimi</h3>
                  <p className="text-gray-700">
                    Hastalarımıza ve hasta yakınlarına, günlük ayak bakımı, ayakkabı seçimi ve acil durum yönetimi hakkında detaylı eğitimler veriyoruz.
                  </p>
                </div>
              </div>
            </section>

            {/* SSS Bölümü */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-2">
                4. Sık Sorulan Sorular (SSS)
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    1. Diyabetli bir birey için ayaktaki küçük bir yara neden bu kadar tehlikelidir?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Diyabetli bireylerde duyu kaybı (nöropati) nedeniyle küçük yaralar fark edilmeyebilir. Kan akışının zayıf olması (anjiyopati) nedeniyle bu yaralar hızla enfekte olabilir ve iyileşmesi çok uzun sürebilir. Fark edilmeyen ve tedavi edilmeyen küçük bir yara, ciddi bir enfeksiyona, ülsere ve hatta ampütasyona yol açabilir.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    2. Ayaklarımı sıcak suda dinlendirmek iyi bir fikir mi?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Kesinlikle hayır. Nöropati nedeniyle sıcaklık hissi bozulmuş olabilir. Sizin için ılık gelen bir su, aslında cildinizi yakabilir. Ayaklarınızı yıkarken suyun sıcaklığını mutlaka dirseğinizle kontrol edin ve 5 dakikadan uzun süre suda tutmaktan kaçının.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    3. Nasırlarımı kendim kesebilir miyim?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Asla. Nasırları kesmek veya nasır sökücü bantlar kullanmak, sağlıklı dokuya zarar vererek kanamaya ve enfeksiyona açık yaralar oluşturabilir. Nasır bakımı mutlaka bir podolog tarafından yapılmalıdır.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    4. Ayakkabı alırken nelere dikkat etmeliyim?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ayakkabı alışverişinizi, ayaklarınızın en şiş olduğu akşam saatlerinde yapın. Ayakkabının burnu geniş, dikişsiz ve yumuşak malzemeden yapılmış olmalıdır. Ayakkabıyı giydiğinizde, en uzun parmağınız ile ayakkabının ucu arasında yaklaşık 1 cm boşluk kalmalıdır.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    5. Herhangi bir nemlendiriciyi kullanabilir miyim?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Hayır. Özellikle üre içeren, diyabetik ciltler için formüle edilmiş ve podologunuzun önerdiği medikal nemlendiricileri tercih edin. Parfümlü veya alkollü ürünlerden kaçının. Nemlendiriciyi asla parmak aralarınıza sürmeyin.
                  </p>
                </div>
              </div>
            </section>

            {/* Sonuç */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold mb-6">
                  5. Sonuç: Koruyucu Bakım Hayat Kurtarır
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  Diyabetik ayak sağlığı, bir lüks değil, hayati bir zorunluluktur. Günlük olarak uygulayacağınız basit bakım rutinleri ve düzenli podolog kontrolleri, sizi ampütasyona kadar gidebilecek ciddi komplikasyonlardan korur.
                </p>
                <p className="text-xl font-bold">
                  Unutmayın, ayaklarınız sizi hayat boyu taşıyacak en değerli varlıklarınızdır. Onlara iyi bakın.
                </p>
              </div>
            </section>

            {/* CTA - Randevu */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 text-center shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Diyabetik Ayak Bakımı İçin Randevu Alın
              </h3>
              <p className="text-gray-700 mb-6">
                Medipodo'da uzman podologlarımız, diyabetik ayak sağlığınız için size özel bakım planı hazırlar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+905456569747" 
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
                >
                  <Phone size={20} className="mr-2" />
                  Hemen Ara: 0545 656 97 47
                </a>
                <Link 
                  to="/iletisim" 
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Online Randevu
                </Link>
              </div>
            </div>

            {/* Referanslar */}
            <div className="mt-12 p-6 bg-gray-50 rounded-xl border-t-4 border-gray-300">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Referanslar:</h3>
              <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
                <li>Dünya Sağlık Örgütü (WHO) - Diabetes</li>
                <li>Türkiye Diyabet Cemiyeti - Diyabetik Ayak</li>
                <li>Amerikan Diyabet Birliği (ADA) - Foot Complications</li>
                <li>Koç Üniversitesi Hastanesi - Diyabetik Ayak</li>
                <li>Acıbadem Sağlık Grubu - Diyabetik Ayak Bakımı</li>
                <li>Memorial Sağlık Grubu - Diyabetik Ayak Yaraları</li>
                <li>Cleveland Clinic - Diabetic Foot Care</li>
                <li>Mayo Clinic - Diabetic Neuropathy and Foot Care</li>
                <li>International Diabetes Federation (IDF) - Foot Care</li>
              </ol>
            </div>

            {/* Kapsamlı Rehber Bağlantısı */}
            <div className="mt-8">
              <Link to="/blog/ayak-sagligi-rehberi" className="block p-5 bg-blue-50 rounded-xl hover:shadow-md transition-shadow border border-blue-200">
                <p className="font-semibold text-blue-600 text-lg">Ayak Sağlığı Tam Rehberi (2026)</p>
                <p className="text-sm text-gray-600 mt-1">Tüm ayak problemleri, evde bakım yöntemleri ve uzman önerileri tek rehberde</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default DiyabetAyakBlog;
