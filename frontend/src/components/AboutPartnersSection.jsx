import React from 'react';
import { ExternalLink } from 'lucide-react';

const ECOSYSTEM_BRANDS = [
  { key: 'pedizone',  name: 'PediZone',  tagline: 'Ayak Sağlığı Ürünleri',              href: 'https://pedizone.com/',  hotspot: { left: 22, top: 28, width: 12, height: 60 }, color: '#DC2626' },
  { key: 'medipodo',  name: 'MediPodo',  tagline: 'Podoloji Hizmetleri',                href: '/',                       hotspot: { left: 39, top: 28, width: 14, height: 60 }, color: '#2563EB', self: true },
  { key: 'medieste',  name: 'MediEste',  tagline: 'Sağlıklı Güzellik',                  href: 'https://medieste.com/',  hotspot: { left: 56, top: 28, width: 12, height: 60 }, color: '#10B981' },
  { key: 'ayaktakip', name: 'AyakTakip', tagline: 'Akıllı Takip · Sağlıklı Adımlar',    href: 'https://ayaktakip.com/', hotspot: { left: 73, top: 20, width: 14, height: 68 }, color: '#0EA5E9' },
];

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

        {/* Ekosistem — Biz Birlikte Daha Güçlüyüz */}
        <div className="max-w-6xl mx-auto mb-14">
          <div className="text-center mb-6 max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl text-slate-900 mb-3">
              Biz Birlikte Daha Güçlüyüz
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Podolog Serdar Ceylan öncülüğünde kurulan 4 marka; ayak sağlığından güzelliğe,
              ürün geliştirmeden dijital takibe kadar bütüncül bir sağlık ekosistemi oluşturuyor.
            </p>
          </div>

          {/* Tıklanabilir hotspot'lu görsel */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gray-50">
            <img
              src="/upload/ekosistem/ekosistem-serdar-ceylan.webp"
              alt="Medipodo Ekosistem - PediZone, MediPodo, MediEste, AyakTakip markaları"
              className="w-full h-auto block"
              loading="lazy"
            />
            {ECOSYSTEM_BRANDS.map((b) => (
              <a
                key={b.key}
                href={b.href}
                target={b.self ? undefined : '_blank'}
                rel={b.self ? undefined : 'noreferrer'}
                className="absolute rounded-2xl hover:bg-white/10 transition-all"
                style={{
                  left: `${b.hotspot.left}%`,
                  top: `${b.hotspot.top}%`,
                  width: `${b.hotspot.width}%`,
                  height: `${b.hotspot.height}%`,
                }}
                aria-label={b.name}
              >
                <span className="sr-only">{b.name}</span>
              </a>
            ))}
          </div>

          {/* Alttaki renkli marka kartları */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {ECOSYSTEM_BRANDS.map((b) => (
              <a
                key={b.key}
                href={b.href}
                target={b.self ? undefined : '_blank'}
                rel={b.self ? undefined : 'noreferrer'}
                className="group bg-white border border-gray-200 rounded-2xl p-4 md:p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                style={{ borderTop: `3px solid ${b.color}` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-900">{b.name}</span>
                  {!b.self && <ExternalLink size={14} className="text-slate-400" />}
                </div>
                <p className="text-xs md:text-sm text-slate-600">{b.tagline}</p>
              </a>
            ))}
          </div>
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
