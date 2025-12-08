import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, Phone, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet';

const TopukDikeniBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Topuk Dikeni (Calcaneal Spur) Nedir ve Nasıl Geçer? | Medipodo Bağlıca</title>
        <meta 
          name="description" 
          content="Topuk dikeni (Epin Calcanei) nedir, belirtileri nelerdir ve nasıl tedavi edilir? Podolojik yaklaşım, kişiye özel tabanlık, bantlama ve modern tedavi yöntemleri." 
        />
        <meta 
          name="keywords" 
          content="topuk dikeni, calcaneal spur, epin calcanei, plantar fasiit, topuk ağrısı, ayak tabanı ağrısı, topuk dikeni tedavisi, tabanlık, podoloji, Medipodo Bağlıca Ankara" 
        />

        <meta property="og:title" content="Topuk Dikeni (Calcaneal Spur) Nedir ve Nasıl Geçer? | Medipodo" />
        <meta property="og:description" content="Topuk dikeni nedir, belirtileri nelerdir ve nasıl tedavi edilir? Podolojik yaklaşımlar ve kalıcı çözümler." />
        <meta 
          property="og:image" 
          content="https://medipodo.com/blog-images/topuk-dikeni/kapak-gorseli-topuk-dikeni.jpg" 
        />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://medipodo.com/blog/topuk-dikeni-plantar-fasiit" />
      </Helmet>

      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        
        {/* HERO */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-32 pb-16">
          <div className="container mx-auto px-4">

            <Link to="/blog" className="inline-flex items-center text-blue-100 hover:text-white mb-6">
              <ArrowLeft size={20} className="mr-2" />
              Blog'a Dön
            </Link>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Topuk Dikeni Nedir ve Nasıl Geçer?
            </h1>

            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Medipodo Podoloji Ekibi</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>15 dakika okuma</span>
              </div>
            </div>

          </div>
        </div>

        {/* CONTENT */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">

            {/* Giriş */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                Sabah uyandığınızda topuğunuza batan keskin acı sizi zorluyorsa, bu durum çoğu zaman halk arasında 
                <strong> topuk dikeni </strong> olarak bilinen <strong> Epin Calcanei </strong> ile ilişkilidir.
              </p>

              <div className="my-8 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/blog-images/topuk-dikeni/1.jpg"
                  alt="Topuk dikeni sabah ağrısı örnek görsel"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Bu yazıda, topuk dikeninin oluşum mekanizmasını, belirtilerini ve modern podolojik tedavi yöntemlerini 
                bilimsel bir bakış açısıyla açıklıyoruz.
              </p>
            </div>

            {/* Topuk Dikeni Nedir */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-600 pl-4">
                Topuk Dikeni Nedir?
              </h2>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
                <h3 className="text-xl font-semibold mb-3">💡 Önemli Bilgi</h3>
                <p className="text-gray-700 mb-3">
                  Topuk dikeni, plantar fasyanın topuğa yapıştığı noktada oluşan kemiksi bir çıkıntıdır.
                </p>
                <p className="text-gray-700 mb-3">
                  Asıl ağrı, çoğu zaman kemiğin kendisinden değil, plantar fasyanın gerilmesinden kaynaklanır.
                </p>
                <p className="text-gray-700">
                  Bu nedenle tedavi, dikeni “yok etmeye” değil, <strong>biyomekanik yükü düzeltmeye</strong> odaklanır.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <img 
                    src="/blog-images/topuk-dikeni/2.jpg"
                    alt="Plantar fasya anatomisi görseli"
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img 
                    src="/blog-images/topuk-dikeni/3.jpg"
                    alt="Topuk dikeni röntgen görüntüsü"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Risk Faktörleri */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Topuk Dikenine Neden Olan Risk Faktörleri
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">

                {/* Kartlar */}
                {[
                  { icon:"⚙️", color:"red-500", title:"Mekanik Yüklenme", text:"Sert zeminlerde uzun süre ayakta kalmak." },
                  { icon:"👟", color:"orange-500", title:"Yanlış Ayakkabı", text:"Düz, desteksiz veya sert tabanlı ayakkabılar." },
                  { icon:"⚖️", color:"yellow-500", title:"Aşırı Kilo", text:"Vücut ağırlığındaki artış plantar fasyayı zorlar." },
                  { icon:"🦶", color:"green-500", title:"Ayak Yapısı Bozukluğu", text:"Düz tabanlık veya yüksek kavis fasya gerilimini artırır." },
                  { icon:"💪", color:"purple-500", title:"Aşil Kısalığı", text:"Gergin baldır kasları fasyayı çeker." },
                  { icon:"🏃", color:"pink-500", title:"Ani Aktivite Artışı", text:"Hazırlıksız spor yüklenmeleri." },
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-${item.color}`}
                  >
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <span className="text-2xl mr-2">{item.icon}</span>
                      {item.title}
                    </h3>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                ))}

              </div>
            </section>

            {/* Podolojik Tedavi */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">
                Podolojik Yaklaşım ile Topuk Dikeni Tedavisi
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
                Tedavide amaç ağrıyı bastırmak değil, plantar fasyadaki yükü azaltarak iyileşme döngüsünü desteklemektir.
              </p>

              {/* 1 - Analiz */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 mb-6">
                <h3 className="text-xl font-semibold mb-3">
                  1️⃣ Biyomekanik Analiz
                </h3>
                <p className="text-gray-700 mb-4">
                  Yürüme analizi ile plantar fasyanın hangi noktada aşırı gerildiği tespit edilir.
                </p>
              </div>

              {/* 2 - Tabanlık */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600 mb-6">
                <h3 className="text-xl font-semibold mb-3">
                  2️⃣ Kişiye Özel Tabanlık
                </h3>
                <p className="text-gray-700 mb-4">
                  Fasya üzerindeki yükü azaltan en etkili podolojik tedavidir.
                </p>
              </div>

              {/* 3 - Bantlama */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600 mb-6">
                <h3 className="text-xl font-semibold mb-3">
                  3️⃣ Manuel Terapi & Bantlama
                </h3>
                <p className="text-gray-700 mb-4">
                  Kinezyolojik bantlama ve manuel teknikler ile gerginlik azaltılır.
                </p>
              </div>

              {/* 4 - Egzersiz */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600 mb-6">
                <h3 className="text-xl font-semibold mb-3">
                  4️⃣ Ev Egzersiz Programı
                </h3>
                <p className="text-gray-700">
                  Aşil ve plantar fasya germe rutinleri tedavinin kalıcılığını sağlar.
                </p>
              </div>

            </section>

          </div>
        </div>
      </article>
    </>
  );
};

export default TopukDikeniBlog;
