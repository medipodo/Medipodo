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
        <title>Topuk Dikeni (Calcanei Epin) Nedir ve Nasıl Önlenir? | Medipodo Bağlıca</title>
        <meta name="description" content="Topuk dikeni (Epin Calcanei) nedir, belirtileri nelerdir ve nasıl önlenir? Podolojik yaklaşımlar, biyomekanik analiz, ortez tedavisi ve kalıcı çözümler." />
        <meta name="keywords" content="topuk dikeni, calcanei epin, plantar fasiit, topuk ağrısı, ayak tabanı ağrısı, topuk dikeni tedavisi, ortez, tabanlık, podoloji, Medipodo, Bağlıca, Ankara" />
        <link rel="canonical" href="https://medipodo.com/blog/topuk-dikeni" />
      </Helmet>

      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

        {/* Sonuç ve CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sonuç ve Profesyonel Destek
            </h2>

            <p className="text-lg text-blue-100 mb-6 leading-relaxed">
              Ağrılı adımlar kaderiniz değil. Doğru teşhis ve bütüncül bir podolojik yaklaşımla,
              sabahları yataktan ağrısız kalkmak ve gün boyu konforla yürümek mümkündür.
            </p>

            <p className="text-lg text-blue-100 mb-6 leading-relaxed">
              <strong>Medipodo Bağlıca Ayak Sağlığı Merkezi</strong> olarak Ankara Bağlıca’da
              modern podolojik yöntemler ile hizmet veriyoruz.
            </p>

            {/* 🔔 TIBBİ BİLGİLENDİRME UYARISI – EKLENEN KISIM */}
            <div className="bg-blue-800 bg-opacity-50 p-4 rounded-lg mb-8">
              <p className="text-sm text-blue-100 italic leading-relaxed">
                <strong>Not:</strong> Bu blog içeriği yalnızca bilgilendirme amacıyla hazırlanmıştır;
                tanı ve tedavi yerine geçmez. Ayak sağlığınızla ilgili şikâyetleriniz için
                mutlaka doktorunuza veya yetkili sağlık uzmanına başvurunuz.
              </p>
            </div>

            {/* CTA Butonları */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:05456569747"
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors flex items-center"
              >
                <Phone size={20} className="mr-2" />
                Randevu: 0545 656 97 47
              </a>

              <a
                href="https://wa.me/905456569747"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-colors"
              >
                WhatsApp ile İletişim
              </a>
            </div>
          </div>
        </section>

        {/* Adres */}
        <section className="mb-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-start space-x-3">
              <MapPin size={24} className="text-blue-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Adres</h3>
                <p className="text-gray-700">
                  Bağlıca Mah. Mert Cad. 4/2 Etimesgut, Ankara
                </p>
              </div>
            </div>
          </div>
        </section>

      </article>
    </>
  );
};

export default TopukDikeniBlog;
