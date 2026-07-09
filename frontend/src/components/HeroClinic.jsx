import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Star,
  Check,
  ClipboardList,
} from 'lucide-react';
import { Button } from './ui/button';

/**
 * HeroClinic — Concept C "Trusted Clinic" hero (revision B2).
 *
 * Layout: desktop 60/40 split, mobile stacked.
 * Left:  kicker → ROTATING headline + subhead (3.8s) → paired CTAs
 * Right: floating card composition (SQUARE photo + floating meta cards)
 * BG:    soft cool white + subtle blue/emerald radial glows
 *
 * Changes vs previous:
 * - Rating card 4.9 → 5.0
 * - Photo aspect: 4/5 → 1/1 (square)
 * - Removed trust chips row entirely
 * - Headline + subhead now auto-rotate through 4 variations every 3.8s
 */

const ROTATING = [
  {
    highlight: 'Batık tırnak',
    prefix: '',
    suffix: 'artık dert değil. Endişe etmeyin!',
    sub: (
      <>
        Ortoniksi ve konfor odaklı bakımla{' '}
        <strong className="text-slate-800">acısız</strong> çözüm. Ön değerlendirmen ücretsiz, süreç şeffaf. Ücretsiz ön görüşme için randevu almayı unutma
      </>
    ),
    image: '/images/slider/mobile/batik-tirnak-podolog.webp',
  },
  {
    highlight: 'Fotoğraf gönder,',
    prefix: '',
    suffix: 'ücretsiz değerlendirmeni al.',
    sub: (
      <>
        Ayağının fotoğrafını yükle, kısa formu doldur. Podolog{' '}
        <strong className="text-slate-800">Serdar Ceylan</strong> 24 saat içinde sana özel öneriyle geri döner.
      </>
    ),
    image: '/images/slider/mobile/ankara-podolog.jpg',
  },
  {
    highlight: 'Ayak Bakımlarında',
    prefix: '',
    suffix: 'Bütüncül Yaklaşım.',
    sub: (
      <>
        Ankara Üniversitesi Podoloji mezunu{' '}
        <strong className="text-slate-800">Serdar Ceylan</strong>&apos;ın yıllar içinde geliştirdiği ayak sağlığı sistemi — sorunun kaynağına odaklanan bütüncül yaklaşım.
      </>
    ),
    image: '/images/slider/mobile/6.webp',
  },
  {
    highlight: 'dijital podoloji',
    prefix: 'Ayak sağlığında',
    suffix: 'güvencesi.',
    sub: (
      <>
        Batık tırnak, mantar, nasır ve topuk çatlaklarında{' '}
        <strong className="text-slate-800">podolog gözüyle</strong> ön değerlendirme — tamamen ücretsiz, 24 saat içinde geri dönüş.
      </>
    ),
    image: '/images/slider/mobile/podolog-serdar-ceylan.webp',
  },
];

const HeroClinic = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;
    const id = setInterval(() => setIdx((v) => (v + 1) % ROTATING.length), 3800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-50 pt-20 lg:pt-24">
      {/* Soft blue/emerald radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            'radial-gradient(1200px 600px at 20% 20%, rgba(59,130,246,0.10), transparent 60%), radial-gradient(900px 500px at 90% 10%, rgba(16,185,129,0.08), transparent 60%)',
        }}
      />
      {/* Faint grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,23,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-2 pb-8 lg:pt-4 lg:pb-12">
          {/* -------------------- LEFT (60%) -------------------- */}
          <div className="lg:col-span-7 max-w-2xl">
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur border border-slate-200/80 px-3.5 py-1.5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700">
                Podolog Serdar Ceylan · Ankara
              </span>
            </div>

            {/* ROTATING content — CSS grid stacking auto-sizes to LARGEST slide,
                so no text collision even on big screens with the longest slide. */}
            <div className="mt-5 grid">
              {ROTATING.map((item, i) => {
                const active = i === idx;
                return (
                  <div
                    key={i}
                    className={`col-start-1 row-start-1 transition-all duration-300 ease-out ${
                      active
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-1 pointer-events-none'
                    }`}
                  >
                    <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-6xl 2xl:text-[64px] leading-[1.05] font-bold tracking-tight text-slate-900">
                      {item.prefix && <>{item.prefix}{' '}</>}
                      <span className="relative inline-block">
                        <span className="relative z-10 text-blue-700">{item.highlight}</span>
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-0 bottom-1 h-3 bg-emerald-200/60 -z-0 rounded"
                        />
                      </span>{' '}
                      {item.suffix}
                    </h1>
                    <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
                      {item.sub}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Rotation dots — hidden (kept for programmatic advance) */}
            <div className="hidden">
              {ROTATING.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Slayt ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? 'w-6 bg-slate-900' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            {/* CTAs — equal weight */}
            <div className="mt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link to="/ucretsiz-on-degerlendirme" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white font-semibold h-12 px-6 text-base shadow-sm hover:shadow-md transition-all group"
                  data-testid="hero-primary-cta"
                >
                  Ücretsiz Ön Değerlendirme
                  <ArrowRight
                    className="ml-2 transition-transform group-hover:translate-x-0.5"
                    size={18}
                  />
                </Button>
              </Link>
              <Link to="/iletisim" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto h-12 px-6 border-slate-300 bg-white hover:bg-slate-50 hover:border-slate-900 text-slate-900 font-semibold text-base transition-all"
                  data-testid="hero-secondary-cta"
                >
                  Randevu Al
                </Button>
              </Link>
            </div>

            <p className="mt-3 text-[13px] text-slate-500 flex items-center gap-1.5">
              <Check size={14} className="text-emerald-600" />
              Ücretsiz · KVKK Uyumlu · 24 saat içinde geri dönüş
            </p>
          </div>

          {/* -------------------- RIGHT (40%) -------------------- */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-sm xl:max-w-md">
              {/* Backdrop blob */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-blue-100 via-blue-50 to-emerald-50 blur-2xl opacity-70"
              />

              {/* Main photo card — SQUARE + rotating in sync with headline */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-blue-900/10 bg-white">
                <div className="aspect-square w-full relative">
                  {ROTATING.map((item, i) => (
                    <img
                      key={i}
                      src={item.image}
                      alt={`${item.prefix ? item.prefix + ' ' : ''}${item.highlight} ${item.suffix}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-out ${
                        i === idx ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      fetchPriority={i === 0 ? 'high' : 'auto'}
                    />
                  ))}
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating — top right: Rating (Google) */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 lg:-right-6 bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 animate-[float_6s_ease-in-out_infinite]">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-[22px] sm:h-[22px]" aria-label="Google">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-0.5 text-amber-500">
                    <Star size={11} fill="currentColor" />
                    <Star size={11} fill="currentColor" />
                    <Star size={11} fill="currentColor" />
                    <Star size={11} fill="currentColor" />
                    <Star size={11} fill="currentColor" />
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">Google puanı</div>
                </div>
              </div>

              {/* Floating — bottom right: mini-form preview (desktop only) */}
              <div className="hidden md:block absolute -bottom-10 lg:-bottom-14 right-4 lg:right-0 bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 p-3.5 w-56">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                    <ClipboardList size={14} />
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Ön Değerlendirme
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[12px] text-slate-700">
                    <div className="w-4 h-4 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-emerald-500">
                      <Check size={10} className="text-white" strokeWidth={3} />
                    </div>
                    Şikayet ve fotoğraf
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-slate-700">
                    <div className="w-4 h-4 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-emerald-500">
                      <Check size={10} className="text-white" strokeWidth={3} />
                    </div>
                    Sağlık geçmişi
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-slate-400">
                    <div className="w-4 h-4 rounded-full border-2 border-slate-300" />
                    Podolog değerlendirmesi
                  </div>
                </div>
                <div className="mt-3 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  );
};

export default HeroClinic;
