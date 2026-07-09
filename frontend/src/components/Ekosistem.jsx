import { ExternalLink } from "lucide-react";

const BRANDS = [
  { key:"pedizone",  name:"PediZone",  tagline:"Ayak Sağlığı Ürünleri", href:"https://pedizone.com/",  hotspot:{left:22,top:28,width:12,height:60}, color:"#DC2626" },
  { key:"medipodo",  name:"MediPodo",  tagline:"Podoloji Hizmetleri",   href:"/",                       hotspot:{left:39,top:28,width:14,height:60}, color:"#2563EB", self:true },
  { key:"medieste",  name:"MediEste",  tagline:"Sağlıklı Güzellik",     href:"https://medieste.com/",  hotspot:{left:56,top:28,width:12,height:60}, color:"#10B981" },
  { key:"ayaktakip", name:"AyakTakip", tagline:"Akıllı Takip · Sağlıklı Adımlar", href:"https://ayaktakip.com/", hotspot:{left:73,top:20,width:14,height:68}, color:"#0EA5E9" },
];

export default function Ekosistem() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl text-slate-900 mb-4">Biz Birlikte Daha Güçlüyüz</h2>
          <p className="text-slate-600 leading-relaxed">
            Podolog Serdar Ceylan öncülüğünde kurulan 4 marka; ayak sağlığından güzelliğe, ürün geliştirmeden dijital takibe kadar bütüncül bir sağlık ekosistemi oluşturuyor.
          </p>
        </div>

        {/* Tıklanabilir hotspot'lu görsel */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gray-50">
          <img src="/upload/ekosistem/ekosistem-serdar-ceylan.webp" alt="Ekosistem" className="w-full h-auto block" loading="lazy" />
          {BRANDS.map(b => (
            <a
              key={b.key}
              href={b.href}
              target={b.self ? undefined : "_blank"}
              rel={b.self ? undefined : "noreferrer"}
              className="absolute rounded-2xl hover:bg-white/10 transition-all"
              style={{ left:`${b.hotspot.left}%`, top:`${b.hotspot.top}%`, width:`${b.hotspot.width}%`, height:`${b.hotspot.height}%` }}
              aria-label={b.name}
            >
              <span className="sr-only">{b.name}</span>
            </a>
          ))}
        </div>

        {/* Alttaki renkli kartlar (mobil + erişilebilirlik) */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {BRANDS.map(b => (
            <a
              key={b.key}
              href={b.href}
              target={b.self ? undefined : "_blank"}
              rel={b.self ? undefined : "noreferrer"}
              className="group bg-white border border-gray-200 rounded-2xl p-4 md:p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              style={{ borderTop:`3px solid ${b.color}` }}
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
    </section>
  );
}
