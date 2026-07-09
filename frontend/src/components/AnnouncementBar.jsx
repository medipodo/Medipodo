import React, { useEffect, useState } from 'react';
import { Sparkles, Star, ShieldCheck, Clock } from 'lucide-react';

/**
 * AnnouncementBar — thin rotating strip above the header.
 * - 4 short messages, auto-rotate every 4.5s.
 * - Slate-900 surface + subtle gradient sheen.
 * - Reduced-motion aware.
 */

const MESSAGES = [
  {
    icon: Sparkles,
    text: 'Ücretsiz ön değerlendirme · 24 saat içinde podolog geri dönüşü',
  },
  {
    icon: Star,
    text: 'Google\'da 5 yıldız ortalama · gerçek hasta yorumlarıyla desteklenir',
  },
  {
    icon: ShieldCheck,
    text: 'KVKK uyumlu · fotoğraf ve veriler güvence altında',
  },
  {
    icon: Clock,
    text: 'Ankara Bağlıca · Pazartesi–Cumartesi 09:30–19:00 · Pazar kapalı',
  },
];

const AnnouncementBar = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;
    const id = setInterval(() => setI((v) => (v + 1) % MESSAGES.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative z-[60] bg-slate-900 text-white overflow-hidden">
      {/* subtle sheen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'linear-gradient(90deg, rgba(16,185,129,0.14) 0%, rgba(15,23,42,0) 30%, rgba(15,23,42,0) 70%, rgba(59,130,246,0.14) 100%)',
        }}
      />
      <div className="container mx-auto px-4">
        <div className="relative h-9 flex items-center justify-center">
          {MESSAGES.map((msg, idx) => {
            const Icon = msg.icon;
            const active = idx === i;
            return (
              <div
                key={idx}
                className={`absolute inset-0 flex items-center justify-center gap-2 text-[12.5px] tracking-tight transition-all duration-500 ${
                  active
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-1 pointer-events-none'
                }`}
              >
                <Icon size={13} className="text-emerald-400 flex-shrink-0" />
                <span className="truncate">{msg.text}</span>
              </div>
            );
          })}
        </div>
      </div>
      {/* progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5">
        <div
          key={i}
          className="h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-blue-400"
          style={{ animation: 'annBar 4500ms linear' }}
        />
      </div>
      <style>{`
        @keyframes annBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBar;
