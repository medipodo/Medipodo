import React from 'react';
import { Helmet } from 'react-helmet';
import { Award, Target, Heart, Users } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Kişi Odaklılık',
      description: 'Her danışanımıza kişiye özel, özenli ve kapsayıcı hizmet sunuyoruz.'
    },
    {
      icon: Award,
      title: 'Mükemmellik',
      description: 'En yüksek kalite standartlarında hizmet vermeyi taaahhüt ediyoruz.'
    },
    {
      icon: Target,
      title: 'Uzmanlık',
      description: 'Sürekli eğitim ve gelişim ile en güncel tedavi yöntemlerini uyguluyoruz.'
    },
    {
      icon: Users,
      title: 'Şeffaflık',
      description: 'Şirket adı, adres ve iletişim bilgilerimizin netliği ile güven sağlıyoruz.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Hakkımızda - Medipodo Podoloji Merkezi | Ankara</title>
        <meta
          name="description"
          content="Medipodo Ayak Sağlığı Merkezi hakkında bilgi edinin. Uzman podolog kadromuz ve profesyonel hizmet anlayışımızla tanışın."
        />
        <link rel="canonical" href="https://medipodo.com/hakkimizda" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hakkımızda - Medipodo Podoloji Merkezi | Ankara" />
        <meta
          property="og:description"
          content="Medipodo Ayak Sağlığı Merkezi hakkında bilgi edinin. Uzman podolog kadromuz ve profesyonel hizmet anlayışımızla tanışın."
        />
        <meta property="og:image" content="https://medipodo.com/images/medipodo-og-home-v2.jpg" />
        <meta property="og:url" content="https://medipodo.com/hakkimizda" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hakkımızda - Medipodo Podoloji Merkezi" />
        <meta
          name="twitter:description"
          content="Uzman podolog kadromuz ve profesyonel hizmet anlayışımızla tanışın."
        />
        <meta name="twitter:image" content="https://medipodo.com/images/medipodo-og-home-v2.jpg" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: 'Ana Sayfa', url: 'https://medipodo.com/' },
        { name: 'Hakkımızda', url: 'https://medipodo.com/hakkimizda' }
      ]} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">Hakkımızda</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Medipodo Medikal Sağlık Hizmeti San. ve Tic. Ltd. Şti., Ankara'da ayak sağlığı ve
                podoloji alanında uzmanlaşmış öncü bir uygulama merkezidir.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl font-bold text-blue-950 mb-6">Hikayemiz</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Medipodo Bağlıca Ayak Bakımı, ayak sağlığının yaşam kalitesi üzerindeki etkisini
                      gerçekten anlayan bir vizyonla kuruldu. Çünkü biz, sağlıklı adımların sadece
                      fiziksel değil; konforlu ve özgüvenli bir yaşamın temeli olduğuna inanıyoruz.
                    </p>

                    <p>
                      Bu hikâye, Podolog{' '}
                      <a
                        href="https://www.linkedin.com/in/serdar-ceylan-52038027b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 font-semibold hover:underline"
                      >
                        Serdar Ceylan
                      </a>{' '}
                      'ın mesleğine duyduğu tutkuyla başladı. Ankara Üniversitesi Podoloji programından
                      mezun olduktan sonra, ayak sağlığını yalnızca bir hizmet alanı değil, insanların
                      günlük yaşamını doğrudan etkileyen önemli bir ihtiyaç olarak gördü. Zamanla
                      edindiği deneyimle, her danışanın hayatına dokunan çözümler üretmeyi kendine
                      amaç edindi.
                    </p>

                    <p>
                      Serdar Ceylan aynı zamanda{' '}
                      <a
                        href="https://ayaktakip.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 font-semibold hover:underline"
                      >
                        AyakTakip iOS uygulamasının
                      </a>{' '}
                      ve{' '}
                      <a
                        href="https://pedizone.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 font-semibold hover:underline"
                      >
                        Pedizone ayak sağlığı ürünlerinin
                      </a>{' '}
                      yaratıcısıdır. Ayrıca{' '}
                      <a
                        href="https://www.medieste.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 font-semibold hover:underline"
                      >
                        Medieste markasının kurucusudur
                      </a>
                      . Bu projeler ve markalar, ayak sağlığı ile bakım alanında teknoloji, inovasyon
                      ve güvenilir çözümleri bir araya getiren vizyonunun güçlü bir yansımasıdır.
                    </p>

                    <p>
                      Bugün Medipodo; sadece bir podoloji merkezi değil, emek, tecrübe ve gerçekten
                      iyi hissettirme isteğiyle kurulmuş bir merkezdir.
                    </p>

                    <p>
                      Yılların deneyimi ve sürekli gelişim anlayışımızla; batık tırnak, tırnak mantarı,
                      nasır ve kapsamlı ayak bakımı alanlarında uzmanlaştık. Modern ekipmanlarımız ve
                      bilimsel yöntemlerimizle etkili sonuçlar sunarken, her danışanımıza bireysel
                      yaklaşmayı önceliğimiz haline getirdik.
                    </p>

                    <p>
                      Steril ve özenli bir ortamda; yalnızca bakım değil, aynı zamanda güven ve rahatlık
                      sunuyoruz. Çünkü bizim için her danışan, bu hikâyenin en değerli parçasıdır.
                    </p>
                  </div>

                  {/* AYAKTAKIP BLOCK */}
                  <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0">
                      <img
                        src="/images/ayak-takip.webp"
                        alt="AyakTakip iOS uygulaması ayak sağlığı takip uygulaması"
                        className="h-16 w-auto object-contain"
                        loading="lazy"
                      />
                    </div>

                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-semibold text-blue-950 mb-1">
                        AyakTakip iOS Uygulaması
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Serdar Ceylan tarafından geliştirilen AyakTakip, ayak sağlığınızı takip etmenizi
                        ve düzenli bakım alışkanlığı kazanmanızı sağlayan yenilikçi bir mobil uygulamadır.
                      </p>

                      <a
                        href="https://ayaktakip.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition"
                      >
                        App Store'da İncele
                      </a>
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl">
                    <img
                      src="/images/medipodo-logo.png"
                      alt="Medipodo Logo"
                      className="w-full h-auto"
                      loading="eager"
                      fetchpriority="high"
                    />
                    
                    {/* Marka Tescil Belgesi */}
                    <div className="mt-6">
                      <img
                        src="/images/medipodo-marka-tescil-belgesi.webp"
                        alt="Medipodo Marka Tescil Belgesi - TPE Türk Patent Enstitüsü"
                        className="w-full h-auto rounded-lg shadow-md border border-gray-200"
                        loading="lazy"
                      />
                    </div>
                    
                    <div className="mt-6 text-center">
                      <h3 className="text-2xl font-bold text-blue-950 mb-2">Medipodo Ayak Bakımı</h3>
                      <p className="text-gray-600">Ankara'nın Güvenilir Podoloji Merkezi</p>
                      <p className="text-gray-600 text-sm mt-2">
                        📍 <a
                          href="https://maps.app.goo.gl/AUy4SG5YPAZA3vwQ9"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-blue-700"
                        >
                          Etimesgut, Ankara
                        </a>
                      </p>
                      <p className="text-gray-600 text-sm">📞 0545 656 9747</p>
                      <p className="text-gray-600 text-sm">🏢 VKN: 6141845571 | Etimesgut Vergi Dairesi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Değerlerimiz</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hizmetlerimizde ve hasta ilişkilerimizde rehber ilkelerimiz
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="text-blue-700" size={32} />
                      </div>
                      <h3 className="text-xl font-semibold text-blue-950 mb-3">{value.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-2 border-blue-200">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-blue-950 mb-4">Misyonumuz</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Ankara toplumuna en yüksek kalitede podoloji ve ayak bakımı hizmetleri sunarak,
                      insanların ayak sağlığını iyileştirmek ve yaşam kalitelerini artırmak. Her
                      hastası kişiye özel yaklaşımla tedavi etmek ve sürdürülebilir çözümler üretmek.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-blue-200">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-blue-950 mb-4">Vizyonumuz</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Türkiye'de ayak sağlığı ve podoloji alanında öncü ve referans merkez olmak.
                      İnovatif tedavi yöntemleri, sürekli eğitim ve hasta memnuniyeti odaklı hizmet
                      anlayışıyla sektörde standartlar belirlemek.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                <div className="text-blue-100">Yıllık Deneyim</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
                <div className="text-blue-100">Mutlu Hasta</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">3</div>
                <div className="text-blue-100">Uzman Ekip</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">%98</div>
                <div className="text-blue-100">Başarı Oranı</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
