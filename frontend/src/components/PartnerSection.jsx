import React from 'react';

const partners = [
  {
    name: 'AyakTakip',
    logo: '/images/partners/ayaktakip.png',
    alt: 'AyakTakip hasta takip sistemi',
    description: 'Hasta Takip Sistemi',
    url: 'https://ayaktakip.com/',
    title: 'AyakTakip resmi web sitesi',
  },
  {
    name: 'Pedizone',
    logo: '/images/partners/pedizone.png',
    alt: 'Pedizone ayak bakım ürünleri',
    description: 'Profesyonel Ayak Bakım Ürünleri',
    url: 'https://pedizone.com/',
    title: 'Pedizone resmi web sitesi',
  },
  {
    name: 'Medipodo',
    logo: '/images/partners/medipodo.png',
    alt: 'Medipodo ayak sağlığı merkezi',
    description: 'Ayak Sağlığı Merkezi Ankara',
    url: null,
    title: null,
  },
  {
    name: 'Medieste',
    logo: '/images/partners/medieste.png',
    alt: 'Medieste sağlıklı güzellik çözümleri',
    description: 'Sağlıklı Güzellik Çözümleri',
    url: 'https://www.medieste.com/',
    title: 'Medieste resmi web sitesi',
  },
  {
    name: 'Trendyol',
    logo: '/images/partners/trendyol.png',
    alt: 'Trendyol Medipodo online satış platformu',
    description: 'Online Satış Platformu',
    url: 'https://www.trendyol.com/magaza/medipodo-m-1114633?channelId=1&sst=0&sk=1',
    title: 'Trendyol Medipodo mağazası',
  },
  {
    name: 'Hepsiburada',
    logo: '/images/partners/hepsiburada.png',
    alt: 'Hepsiburada Medipodo online satış platformu',
    description: 'Online Satış Platformu',
    url: 'https://www.hepsiburada.com/magaza/medipodo?markalar=pedizone',
    title: 'Hepsiburada Medipodo mağazası',
  },
  {
    name: 'Ortomek',
    logo: '/images/partners/ortomek.png',
    alt: 'Ortomek kişiye özel tabanlık',
    description: 'Kişiye Özel Tabanlık Çözümleri',
    url: 'https://share.google/k8ICwh4VVdat1itTd',
    title: 'Ortomek tabanlık çözümleri',
  },
  {
    name: 'Amazon',
    logo: '/images/partners/amazon.png',
    alt: 'Amazon Medipodo online satış platformu',
    description: 'Online Satış Platformu',
    url: 'https://www.amazon.com.tr/s?me=AMMP0XZD7GV7U&marketplaceID=A33AVAJ2PDY3EV',
    title: 'Amazon Medipodo mağazası',
  },
];

const PartnerCard = ({ partner }) => {
  const cardContent = (
    <>
      <img
        src={partner.logo}
        alt={partner.alt}
        className="max-h-[60px] object-contain transition-all duration-300"
        loading="lazy"
      />
      <span className="text-xs text-gray-500 mt-2 text-center">
        {partner.description}
      </span>
    </>
  );

  const baseClasses =
    'bg-white p-6 rounded-xl shadow-sm flex flex-col items-center justify-center h-24 transition-all duration-300 hover:scale-105 hover:shadow-md';

  if (partner.url) {
    return (
      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        title={partner.title}
        className={baseClasses}
        data-testid={`partner-link-${partner.name.toLowerCase()}`}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div
      className={`${baseClasses} cursor-default`}
      data-testid={`partner-card-${partner.name.toLowerCase()}`}
    >
      {cardContent}
    </div>
  );
};

const PartnerSection = () => {
  return (
    <section className="bg-gray-50 py-16" data-testid="partner-section">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          data-testid="partner-section-title"
        >
          Çözüm Ortaklarımız
        </h2>
        <p
          className="text-center text-gray-600 max-w-2xl mx-auto mb-10"
          data-testid="partner-section-description"
        >
          Medipodo olarak ayak sağlığı hizmetlerimizi güçlendirmek için alanında
          uzman çözüm ortakları ile birlikte çalışıyoruz.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <PartnerCard key={partner.name} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
