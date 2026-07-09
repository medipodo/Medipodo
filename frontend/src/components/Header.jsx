import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import { siteInfo } from '../mock';
/**
 * Header — Concept C "Trusted Clinic" style.
 * - Off-white glass surface, subtle border, refined typography.
 * - Slate text hierarchy · blue primary · emerald accent for "available" cue.
 * - Structure and links UNCHANGED from previous header.
 */
const navLinks = [
  { name: 'Ana Sayfa', path: '/' },
  { name: 'Hizmetler', path: '/hizmetler' },
  { name: 'Galeri', path: '/galeri' },
  { name: 'Blog', path: '/blog' },
  { name: 'S.S.S.', path: '/sikca-sorulan-sorular', mobileName: 'Sık Sorulan Sorular' },
  { name: 'Ayak Analizi', path: '/ayak-analizi' },
  { name: 'Ücretsiz Ön Değerlendirme', path: '/ucretsiz-on-degerlendirme', mobileName: 'Ücretsiz Ön Değerlendirme' },
  { name: 'Hakkımızda', path: '/hakkimizda' },
  { name: 'Kadromuz', path: '/kadromuz' },
  { name: 'İletişim', path: '/iletisim' },
];
// WhatsApp icon (inline SVG — lucide-react does not ship a WhatsApp glyph)
const WhatsAppIcon = ({ size = 18, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.02 0C5.4 0 .02 5.38.02 12a11.9 11.9 0 0 0 1.6 5.98L0 24l6.2-1.62A11.94 11.94 0 0 0 12.02 24c6.62 0 12-5.38 12-12 0-3.2-1.25-6.21-3.5-8.52ZM12.02 21.82a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.68.96.98-3.59-.23-.37a9.82 9.82 0 1 1 18.27-5.24 9.82 9.82 0 0 1-9.98 9.82Zm5.39-7.36c-.29-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.29-.77.96-.94 1.16-.17.2-.35.22-.64.07-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.44.13-.59.13-.13.29-.35.44-.52.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.11 3.22 5.11 4.51.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.56-.35Z" />
  </svg>
);
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  // WhatsApp link — istenen numara ve mesaj
  const waHref = `https://wa.me/905456569747?text=${encodeURIComponent(
    'Merhaba medipodo web sitesinden ulaşıyorum.'
  )}`;
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <header
        className={`transition-all duration-200 ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-xl border-b border-slate-200/70 shadow-[0_1px_0_0_rgba(15,23,42,0.03),0_10px_30px_-10px_rgba(15,23,42,0.08)]'
            : 'bg-white/70 backdrop-blur-md border-b border-transparent'
        }`}
      >
      <div className="container mx-auto px-4 lg:px-6">
        <div className={`flex items-center justify-between transition-all ${isScrolled ? 'h-14' : 'h-16'}`}>
          {/* -------------------- Logo -------------------- */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center shadow-sm shadow-blue-900/20 group-hover:shadow-md group-hover:shadow-blue-900/30 transition-shadow">
                <span className="text-white font-bold text-[15px] tracking-tight">M</span>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[15px] font-bold text-slate-900 tracking-tight">
                {siteInfo.name}
              </span>
              <span className="text-[10px] text-slate-500 tracking-[0.14em] uppercase font-semibold mt-0.5">
                Ayak Sağlığı
              </span>
            </div>
          </Link>
          {/* -------------------- Right group: nav + CTA -------------------- */}
          <div className="hidden lg:flex items-center gap-5">
            <nav className="flex items-center gap-1">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-2.5 py-2 text-[13.5px] font-medium tracking-tight transition-colors rounded-lg ${
                      active
                        ? 'text-blue-700'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    )}
                  </Link>
                );
              })}
            </nav>
            {/* Availability + phone (desktop) */}
            <a
              href={`tel:${siteInfo.phoneLink}`}
              className="inline-flex items-center gap-2.5 h-10 pl-3 pr-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-all shadow-sm hover:shadow-md group ml-2 border-l border-slate-200/0"
              data-testid="header-phone"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <Phone size={14} className="opacity-90" />
              <span className="tracking-tight">{siteInfo.phone}</span>
            </a>
          </div>
          {/* -------------------- Mobile actions: WhatsApp + Phone + Hamburger -------------------- */}
          <div className="lg:hidden flex items-center gap-2">
            {/* WhatsApp (mobile) — yeşil */}
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="relative w-10 h-10 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center transition-all shadow-sm hover:shadow-md"
              data-testid="header-whatsapp-mobile"
            >
              <WhatsAppIcon size={18} className="opacity-95" />
              <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-200" />
              </span>
            </a>
            {/* Phone (mobile) — mavi */}
            <a
              href={`tel:${siteInfo.phoneLink}`}
              aria-label="Telefon"
              className="relative w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-all shadow-sm hover:shadow-md"
              data-testid="header-phone-mobile"
            >
              <Phone size={18} className="opacity-95" />
              <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
            </a>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-900 flex items-center justify-center transition-colors"
              aria-label={isMobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>
      {/* -------------------- Mobile sheet -------------------- */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-150 ease-out bg-white/95 backdrop-blur-xl border-t border-slate-200/70 ${
          isMobileMenuOpen ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          {/* Availability pill on mobile — dynamic (Sunday = closed) */}
          {(() => {
            const isSunday = new Date().getDay() === 0;
            return (
              <div
                className={`mb-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-semibold uppercase tracking-wider ${
                  isSunday
                    ? 'bg-red-50 border-red-200 text-red-700'
                    : 'bg-emerald-50 border-emerald-200 text-emerald-800'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isSunday ? 'bg-red-500' : 'bg-emerald-500'
                  }`}
                />
                {isSunday ? 'Bugün kapalıyız · Pazar' : 'Bugün açığız · 09:30–19:00'}
              </div>
            );
          })()}
          <nav className="flex flex-col">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`group flex items-center justify-between px-3 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                    active
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-700 hover:bg-slate-100/70'
                  }`}
                >
                  <span className="tracking-tight">{link.mobileName || link.name}</span>
                  <ChevronRight
                    size={16}
                    className={`transition-transform ${
                      active ? 'text-blue-700 translate-x-0.5' : 'text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
          <a
            href={`tel:${siteInfo.phoneLink}`}
            className="mt-4 flex items-center justify-center gap-2.5 h-12 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
          >
            <Phone size={16} />
            <span>{siteInfo.phone}</span>
          </a>
        </div>
      </div>
      </header>
    </div>
  );
};
export default Header;
