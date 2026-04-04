import React from 'react';
import '@/App.css';

const AyakAgrisiNedenOlur = () => {
  return (
    <div className="blog-container">
      <article className="blog-article">
        <header className="blog-header">
          <h1>Ayak Ağrısı Neden Olur? Sebepler ve Çözüm Önerileri</h1>
          <div className="blog-meta">
            <span>Medipodo Sağlık</span>
            <span>•</span>
            <span>7 dk okuma</span>
          </div>
        </header>

        <div className="blog-content">
          <p>
            Ayak ağrısı, günlük yaşamı olumsuz etkileyen yaygın bir şikayettir. 
            Birçok farklı nedeni olabilen ayak ağrısının kaynağını anlamak, 
            doğru çözüm yollarını bulmak için önemlidir.
          </p>

          <h2>Ayak Ağrısının Yaygın Nedenleri</h2>
          
          <h3>1. Plantar Fasiit</h3>
          <p>
            Topuk ve ayak tabanındaki ağrının en sık nedenlerinden biridir. 
            Özellikle sabah ilk adımda hissedilen keskin ağrı ile karakterizedir. 
            Uzun süre ayakta kalma veya yoğun fiziksel aktivite tetikleyici olabilir.
          </p>

          <h3>2. Bunyon (Halluks Valgus)</h3>
          <p>
            Başparmağın dışa doğru eğilmesiyle oluşan kemik çıkıntısıdır. 
            Dar ve sivri ayakkabılar bu durumu kötüleştirebilir. 
            Ağrı ve şişlik görülebilir.
          </p>

          <h3>3. Topuk Dikeni</h3>
          <p>
            Topuk kemiğinde oluşan kalsiyum birikintisidir. 
            Plantar fasiit ile birlikte görülebilir ve benzer belirtiler gösterir.
          </p>

          <h3>4. Metatarsalji</h3>
          <p>
            Ayak tabanının ön kısmındaki ağrıdır. Yüksek topuklu ayakkabı kullanımı 
            veya yoğun koşu aktiviteleri bu duruma yol açabilir.
          </p>

          <h2>Ayak Ağrısını Azaltmak İçin Öneriler</h2>
          <ul>
            <li>Rahat ve destekleyici ayakkabılar giyin</li>
            <li>Uzun süre ayakta kalmaktan kaçının</li>
            <li>Düzenli ayak egzersizleri yapın</li>
            <li>Ağrılı bölgeye buz uygulayın (15-20 dakika)</li>
            <li>Ayaklarınızı yükseltip dinlendirin</li>
          </ul>

          <h2>Takip ve Gözlem</h2>
          <p>
            Ayaktaki değişimlerin takibi için fotoğraf ve not kaydı tutulması önerilir. 
            Bu noktada{' '}
            <a 
              href="https://ayaktakip.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ayaktakip-link"
              data-testid="ayaktakip-link"
            >
              AyakTakip
            </a>{' '}
            gibi dijital çözümler kullanılabilir. Böylece ağrınızın seyrini ve 
            uygulanan yöntemlerin etkisini daha iyi değerlendirebilirsiniz.
          </p>

          <h2>Ne Zaman Doktora Gitmelisiniz?</h2>
          <p>
            Aşağıdaki durumlarda mutlaka bir sağlık profesyoneline danışın:
          </p>
          <ul>
            <li>Ağrı şiddetli ve sürekli ise</li>
            <li>Şişlik, kızarıklık veya ısı artışı varsa</li>
            <li>Yürümekte güçlük çekiyorsanız</li>
            <li>Ağrı yaralanma sonrası başladıysa</li>
            <li>Evde uygulanan yöntemlerle iyileşme olmuyorsa</li>
          </ul>

          <h2>Sonuç</h2>
          <p>
            Ayak ağrısı birçok farklı nedenden kaynaklanabilir. Doğru teşhis için 
            semptomlarınızı takip etmek ve gerektiğinde uzman görüşü almak önemlidir.
          </p>
        </div>
      </article>
    </div>
  );
};

export default AyakAgrisiNedenOlur;
