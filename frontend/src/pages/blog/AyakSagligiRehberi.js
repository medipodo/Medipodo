import React from 'react';
import '@/App.css';

const AYAKTAKIP_IMAGE = "https://customer-assets.emergentagent.com/job_79831a6c-16c9-4c26-8b15-a02d1458d096/artifacts/1jh0qnna_ayak-takip-profil.webp";

const AyakSagligiRehberi = () => {
  return (
    <div className="blog-container">
      <article className="blog-article">
        <header className="blog-header">
          <h1>Ayak Sağlığı Rehberi: Kapsamlı Bakım Kılavuzu</h1>
          <div className="blog-meta">
            <span>Medipodo Sağlık</span>
            <span>•</span>
            <span>10 dk okuma</span>
          </div>
        </header>

        <div className="blog-content">
          <p>
            Ayaklarımız, vücudumuzun tüm ağırlığını taşıyan ve günlük yaşamımızda 
            en çok kullandığımız organlardan biridir. Doğru bakım ile ayak sağlığınızı 
            koruyabilir ve olası sorunların önüne geçebilirsiniz.
          </p>

          <h2>Ayak Sağlığı Neden Önemli?</h2>
          <p>
            Ayak sağlığı, genel sağlığımızın önemli bir göstergesidir. Ayaklardaki problemler; 
            yürüyüş bozukluklarına, diz ve bel ağrılarına, hatta duruş problemlerine yol açabilir. 
            Düzenli bakım ve kontrol, bu sorunların önlenmesinde kritik rol oynar.
          </p>

          <h2>Temel Ayak Bakımı Adımları</h2>
          <p>
            Günlük ayak bakımı, sağlıklı ayakların temelini oluşturur. İşte dikkat etmeniz gereken 
            temel adımlar:
          </p>
          <ul>
            <li><strong>Temizlik:</strong> Ayaklarınızı her gün ılık su ve yumuşak sabunla yıkayın</li>
            <li><strong>Kurulama:</strong> Özellikle parmak aralarını iyice kurulayın</li>
            <li><strong>Nemlendirme:</strong> Topuk ve taban için nemlendirici kullanın</li>
            <li><strong>Tırnak bakımı:</strong> Tırnaklarınızı düz kestirin, kenarları yuvarlatmayın</li>
          </ul>

          <h2>Düzenli Takibin Önemi</h2>
          <p>
            Ayak sağlığını izlerken düzenli kayıt tutmak önerilir.{' '}
            <a 
              href="https://ayaktakip.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ayaktakip-link"
              data-testid="ayaktakip-link"
            >
              AyakTakip
            </a>{' '}
            uygulaması bu süreci daha sistemli hale getirmeye yardımcı olabilir. 
            Böylece ayaklarınızdaki değişimleri zamanında fark edebilirsiniz.
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

          <h2>Doğru Ayakkabı Seçimi</h2>
          <p>
            Ayak sağlığı için doğru ayakkabı seçimi çok önemlidir:
          </p>
          <ul>
            <li>Ayaklarınızı öğleden sonra ölçtürün (gün içinde şişerler)</li>
            <li>Parmak uçlarında 1-1.5 cm boşluk bırakın</li>
            <li>Nefes alan malzemeler tercih edin</li>
            <li>Yüksek topuklu ayakkabıları uzun süre kullanmaktan kaçının</li>
          </ul>

          <h2>Egzersiz ve Ayak Sağlığı</h2>
          <p>
            Düzenli egzersiz, ayak kaslarını güçlendirir ve kan dolaşımını iyileştirir. 
            Basit ayak egzersizleri günlük rutininize eklenebilir:
          </p>
          <ul>
            <li>Parmak uçlarında yükselme</li>
            <li>Ayak bileği çevirme hareketleri</li>
            <li>Havlu toplama egzersizi</li>
            <li>Düzenli yürüyüş</li>
          </ul>

          <h2>Sonuç</h2>
          <p>
            Ayak sağlığı, yaşam kalitemizi doğrudan etkileyen önemli bir konudur. 
            Düzenli bakım, doğru ayakkabı seçimi ve erken müdahale ile ayaklarınızı 
            sağlıklı tutabilirsiniz.
          </p>
        </div>
      </article>
    </div>
  );
};

export default AyakSagligiRehberi;
