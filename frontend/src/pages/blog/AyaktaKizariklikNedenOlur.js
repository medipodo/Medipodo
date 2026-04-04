import React from 'react';
import '@/App.css';

const AyaktaKizariklikNedenOlur = () => {
  return (
    <div className="blog-container">
      <article className="blog-article">
        <header className="blog-header">
          <h1>Ayakta Kızarıklık Neden Olur? Belirtiler ve Öneriler</h1>
          <div className="blog-meta">
            <span>Medipodo Sağlık</span>
            <span>•</span>
            <span>6 dk okuma</span>
          </div>
        </header>

        <div className="blog-content">
          <p>
            Ayakta kızarıklık, birçok farklı durumun göstergesi olabilir. 
            Basit bir tahrişten ciddi enfeksiyonlara kadar geniş bir yelpazede 
            nedenleri olan bu belirtiyi görmezden gelmemek önemlidir.
          </p>

          <h2>Ayakta Kızarıklığın Yaygın Nedenleri</h2>

          <h3>1. Selülit</h3>
          <p>
            Derinin bakteriyel enfeksiyonudur. Kızarıklık, şişlik, sıcaklık ve 
            hassasiyet ile kendini gösterir. Tedavi edilmezse ciddi komplikasyonlara 
            yol açabilir.
          </p>

          <h3>2. Kontakt Dermatit</h3>
          <p>
            Ayakkabı malzemesi, çorap veya deterjan gibi maddelere karşı 
            alerjik reaksiyondur. Kızarıklık yanında kaşıntı ve döküntü görülebilir.
          </p>

          <h3>3. Mantar Enfeksiyonu</h3>
          <p>
            Özellikle parmak aralarında görülür. Kızarıklık, kaşıntı, soyulma 
            ve kötü koku eşlik edebilir. Nemli ortamlar mantarın gelişimini kolaylaştırır.
          </p>

          <h3>4. Gut Hastalığı</h3>
          <p>
            Özellikle ayak başparmağını etkileyen bir artrit türüdür. 
            Ani başlayan şiddetli ağrı, kızarıklık ve şişlik tipiktir.
          </p>

          <h3>5. Dolaşım Bozuklukları</h3>
          <p>
            Venöz yetmezlik veya periferik arter hastalığı ayaklarda kızarıklığa 
            neden olabilir. Genellikle şişlik ve yorgunluk hissi eşlik eder.
          </p>

          <h2>Dikkat Edilmesi Gerekenler</h2>
          <ul>
            <li>Kızarıklığın yayılıp yayılmadığını gözlemleyin</li>
            <li>Ateş olup olmadığını kontrol edin</li>
            <li>Eşlik eden belirtileri not edin</li>
            <li>Olası tetikleyicileri düşünün (yeni ayakkabı, deterjan vs.)</li>
          </ul>

          <h2>Değişimleri Takip Edin</h2>
          <p>
            Düzenli gözlem ve kayıt, ayak sağlığı takibinde önemli bir adımdır.{' '}
            <a 
              href="https://ayaktakip.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ayaktakip-link"
              data-testid="ayaktakip-link"
            >
              AyakTakip
            </a>{' '}
            uygulaması bu süreci destekleyebilir. Kızarıklığın seyrini fotoğraflarla 
            kaydetmek, doktor ziyaretinizde faydalı olabilir.
          </p>

          <h2>Ne Zaman Acil Yardım Almalısınız?</h2>
          <p>
            Şu durumlarda hemen sağlık kuruluşuna başvurun:
          </p>
          <ul>
            <li>Kızarıklık hızla yayılıyorsa</li>
            <li>Yüksek ateş varsa</li>
            <li>Şiddetli ağrı hissediyorsanız</li>
            <li>Ayakta açık yara veya iltihap varsa</li>
            <li>Diyabet hastasıysanız</li>
          </ul>

          <h2>Sonuç</h2>
          <p>
            Ayakta kızarıklık önemsenmeyen bir belirti gibi görünse de altta yatan 
            ciddi durumların göstergesi olabilir. Belirtilerinizi takip edin ve 
            gerektiğinde profesyonel yardım alın.
          </p>
        </div>
      </article>
    </div>
  );
};

export default AyaktaKizariklikNedenOlur;
