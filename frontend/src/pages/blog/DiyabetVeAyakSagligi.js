import React from 'react';
import '@/App.css';

const AYAKTAKIP_IMAGE = "https://customer-assets.emergentagent.com/job_79831a6c-16c9-4c26-8b15-a02d1458d096/artifacts/1jh0qnna_ayak-takip-profil.webp";

const DiyabetVeAyakSagligi = () => {
  return (
    <div className="blog-container">
      <article className="blog-article">
        <header className="blog-header">
          <h1>Diyabet ve Ayak Sağlığı: Bilmeniz Gerekenler</h1>
          <div className="blog-meta">
            <span>Medipodo Sağlık</span>
            <span>•</span>
            <span>8 dk okuma</span>
          </div>
        </header>

        <div className="blog-content">
          <p>
            Diyabet, dünya genelinde milyonlarca insanı etkileyen kronik bir hastalıktır. 
            Bu hastalığın en önemli komplikasyonlarından biri de ayak sağlığı üzerindeki etkileridir. 
            Diyabetik ayak, erken teşhis ve düzenli takip ile kontrol altına alınabilir.
          </p>

          <h2>Diyabetin Ayaklara Etkisi</h2>
          <p>
            Yüksek kan şekeri seviyeleri zamanla sinirlere ve kan damarlarına zarar verebilir. 
            Bu durum özellikle ayaklarda his kaybına (nöropati) ve kan dolaşımı bozukluklarına yol açabilir. 
            His kaybı olan hastalar, ayaklarındaki yaraları veya çatlakları fark edemeyebilir.
          </p>

          <h2>Diyabetik Ayak Takibinin Önemi</h2>
          <p>
            Diyabetik ayak komplikasyonlarının önlenmesinde düzenli takip kritik öneme sahiptir. 
            Günlük ayak kontrolü yapılması, herhangi bir değişikliğin erken fark edilmesini sağlar. 
            Diyabetik ayak takibinde düzenli kayıt tutmak önemlidir. Bu süreçte{' '}
            <a 
              href="https://ayaktakip.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ayaktakip-link"
              data-testid="ayaktakip-link"
            >
              AyakTakip
            </a>{' '}
            gibi uygulamalar takip oluşturmayı kolaylaştırabilir.
          </p>

          <div className="app-showcase" data-testid="app-showcase">
            <img 
              src={AYAKTAKIP_IMAGE}
              alt="AyakTakip ayak sağlığı takip uygulaması ekranı"
              className="app-mockup"
              data-testid="ayaktakip-mockup"
            />
            <p className="app-caption">AyakTakip mobil uygulama ekranı</p>
          </div>

          <h2>Günlük Ayak Bakımı İpuçları</h2>
          <ul>
            <li>Her gün ayaklarınızı ılık su ile yıkayın ve iyice kurulayın</li>
            <li>Parmak aralarını kontrol edin ve kuru tutun</li>
            <li>Nemlendirici krem kullanın ancak parmak aralarına sürmeyin</li>
            <li>Rahat, kapalı ve uygun ayakkabılar tercih edin</li>
            <li>Çıplak ayakla yürümekten kaçının</li>
          </ul>

          <h2>Ne Zaman Doktora Başvurmalı?</h2>
          <p>
            Ayaklarınızda şişlik, kızarıklık, sıcaklık artışı, yara veya renk değişikliği 
            fark ettiğinizde mutlaka sağlık kuruluşuna başvurun. Erken müdahale, 
            ciddi komplikasyonların önlenmesinde hayati önem taşır.
          </p>

          <h2>Sonuç</h2>
          <p>
            Diyabetli bireylerin ayak sağlığına özel bir önem vermesi gerekmektedir. 
            Düzenli kontrol, doğru bakım ve erken müdahale ile diyabetik ayak komplikasyonları 
            büyük ölçüde önlenebilir.
          </p>
        </div>
      </article>
    </div>
  );
};

export default DiyabetVeAyakSagligi;
