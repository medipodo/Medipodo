import React from 'react';

function CookiePolicy() {
  return (
    <div className="bg-gray-50 min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
            Çerez Politikası
          </h1>

          <div className="space-y-6 text-gray-700 leading-8">
            <p>
              Bu web sitesi, kullanıcı deneyimini iyileştirmek, site performansını değerlendirmek
              ve gerektiğinde üçüncü taraf hizmetleri sunabilmek amacıyla çerezler kullanabilir.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">Çerez Nedir?</h2>
              <p>
                Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınıza kaydedilen küçük
                veri dosyalarıdır. Bu dosyalar sayesinde bazı tercihler hatırlanabilir ve site
                kullanımıyla ilgili teknik bilgiler toplanabilir.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">
                Hangi Tür Çerezler Kullanılabilir?
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Zorunlu çerezler:</strong> Sitenin düzgün çalışması için gerekli olabilir.
                </li>
                <li>
                  <strong>Analitik çerezler:</strong> Site trafiğini ve kullanım alışkanlıklarını
                  anlamaya yardımcı olabilir.
                </li>
                <li>
                  <strong>Üçüncü taraf çerezleri:</strong> Google gibi üçüncü taraf hizmet
                  sağlayıcılar tarafından yerleştirilebilir.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">Üçüncü Taraf Hizmetler</h2>
              <p>
                Web sitemiz doğrudan çerez kullanmıyor olabilir. Ancak reklam, analiz veya benzeri
                hizmetler kullanılması durumunda, ilgili hizmet sağlayıcılar kendi çerezlerini
                kullanabilir.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">
                Çerezleri Nasıl Kontrol Edebilirsiniz?
              </h2>
              <p>
                Tarayıcı ayarlarınız üzerinden çerezleri silebilir, engelleyebilir veya çerez
                tercihlerinizi yönetebilirsiniz. Ancak bazı çerezlerin devre dışı bırakılması,
                sitenin bazı bölümlerinin beklenen şekilde çalışmamasına neden olabilir.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">Daha Fazla Bilgi</h2>
              <p>
                Kişisel verilerin işlenmesi hakkında daha fazla bilgi almak için Gizlilik
                Politikası sayfamızı inceleyebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookiePolicy;
