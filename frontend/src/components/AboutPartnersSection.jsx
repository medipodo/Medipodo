import React from 'react';

const aboutPartners = [
  {
    name: 'AyakTakip',
    logo: '/images/partners/ayaktakip.png',
    alt: 'AyakTakip hasta takip sistemi',
    url: null,
    title: null,
  },
  {
    name: 'Pedizone',
    logo: '/images/partners/pedizone.png',
    alt: 'Pedizone ayak bakım ürünleri',
    url: 'https://pedizone.com/',
    title: 'Pedizone resmi web sitesi',
  },
  {
    name: 'Medipodo',
    logo: '/images/partners/medipodo.png',
    alt: 'Medipodo ayak sağlığı merkezi',
    url: null,
    title: null,
  },
  {
    name: 'Medieste',
    logo: '/images/partners/medieste.png',
    alt: 'Medieste sağlıklı güzellik çözümleri',
    url: null,
    title: null,
  },
  {
    name: 'Trendyol',
    logo: '/images/partners/trendyol.png',
    alt: 'Trendyol Medipodo online satış platformu',
    url: 'https://www.trendyol.com/magaza/medipodo-m-1114633?channelId=1&sst=0&sk=1',
    title: 'Trendyol Medipodo mağazası',
  },
  {
    name: 'Hepsiburada',
    logo: '/images/partners/hepsiburada.png',
    alt: 'Hepsiburada Medipodo online satış platformu',
    url: null,
    title: null,
  },
  {
    name: 'Ortomek',
    logo: '/images/partners/ortomek.png',
    alt: 'Ortomek kişiye özel tabanlık',
    url: null,
    title: null,
  },
  {
    name: 'Amazon',
    logo: '/images/partners/amazon.png',
    alt: 'Amazon Medipodo online satış platformu',
    url: null,
    title: null,
  },
];

const LogoItem = ({ partner }) => {
  const img = (
    <img
      src={partner.logo}
      alt={partner.alt}
      className="max-h-[50px] object-contain"
      loading="lazy"
    />
  );

  const wrapperClasses =
    'flex items-center justify-center h-16 opacity-80 hover:opacity-100 transition';

  if (partner.url) {
    return (
      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        title={partner.title}
        className={wrapperClasses}
        data-testid={`about-partner-link-${partner.name.toLowerCase()}`}
      >
        {img}
      </a>
    );
  }

  return (
    <div
      className={wrapperClasses}
      data-testid={`about-partner-logo-${partner.name.toLowerCase()}`}
    >
      {img}
    </div>
  );
};

const AboutPartnersSection = () => {
  return (
    <section
      className="py-16 bg-white"
      data-testid="about-partners-section"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold text-blue-950 mb-4"
            data-testid="about-partners-title"
          >
            İş Ortaklarımız ve Çözüm Ağımız
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Medipodo olarak ayak sağlığı hizmetlerimizi geliştirirken, farklı
            alanlarda uzmanlaşmış çözüm ortakları ile birlikte çalışıyoruz.
            Kullandığımız sistemler, ürünler ve destek hizmetleri; danışanlarımıza
            daha kapsamlı ve güvenilir bir deneyim sunmamıza yardımcı olur.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {aboutPartners.map((partner) => (
            <LogoItem key={partner.name} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPartnersSection;
