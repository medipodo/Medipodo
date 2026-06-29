import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  Inbox,
  ClipboardCheck,
  CalendarClock,
  CheckCircle2,
  Archive,
  Search,
  Phone,
  User,
  Image as ImageIcon,
  MessageCircle,
  CalendarPlus,
  X,
  Filter,
  Bell,
  Settings,
  ChevronRight,
  Activity,
  Clock,
  AlertCircle,
  Stethoscope,
  TrendingUp,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '../components/ui/sheet';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

// ---------------------------------------------------------------------------
// MOCK DATA — UI-only. Will be replaced when CRM is wired to Supabase.
// ---------------------------------------------------------------------------
const MOCK = [
  {
    id: 'a1',
    full_name: 'Ayşe Demir',
    phone: '+90 555 123 45 67',
    age: 34,
    gender: 'Kadın',
    chronic_conditions: ['Diyabet'],
    medications: 'Metformin 1000 mg',
    complaint:
      'Sağ ayak başparmağımda 2 haftadır batma ve ağrı var. Sabahları daha şiddetli oluyor, sportif aktivitelerden sonra da artıyor.',
    pain_level: 7,
    problem_areas: ['Batık Tırnak', 'Parmak Arası'],
    foot: 'Sağ',
    images: 3,
    status: 'pending',
    created_at: '2 saat önce',
  },
  {
    id: 'a2',
    full_name: 'Mehmet Yılmaz',
    phone: '+90 532 987 65 43',
    age: 52,
    gender: 'Erkek',
    chronic_conditions: ['Diyabet', 'Kalp Hastalığı'],
    medications: 'Coraspin 100 mg, Glucophage',
    complaint:
      'Topuğumda derin çatlaklar oluştu. Bazen kanıyor. Sürekli ayakta çalışıyorum.',
    pain_level: 5,
    problem_areas: ['Topuk Çatlağı'],
    foot: 'Her İkisi',
    images: 4,
    status: 'pending',
    created_at: '5 saat önce',
  },
  {
    id: 'a3',
    full_name: '',
    phone: '+90 505 444 11 22',
    age: 28,
    gender: 'Erkek',
    chronic_conditions: [],
    medications: null,
    complaint:
      'Tırnaklarımda sarımsı bir renk değişikliği fark ettim. Spor yapıyorum, terlemeden olabilir.',
    pain_level: 2,
    problem_areas: ['Tırnak Mantarı'],
    foot: 'Sağ',
    images: 2,
    status: 'pending',
    created_at: 'Dün',
  },
  {
    id: 'b1',
    full_name: 'Fatma Kaya',
    phone: '+90 542 222 33 44',
    age: 46,
    gender: 'Kadın',
    chronic_conditions: ['Tiroid'],
    medications: 'Levotiron 100',
    complaint:
      'Ayak tabanımda büyük bir nasır oluştu. Yürürken çok rahatsız ediyor.',
    pain_level: 6,
    problem_areas: ['Nasır'],
    foot: 'Sol',
    images: 2,
    status: 'in_review',
    created_at: '1 gün önce',
  },
  {
    id: 'b2',
    full_name: 'Hakan Şahin',
    phone: '+90 533 111 22 33',
    age: 60,
    gender: 'Erkek',
    chronic_conditions: ['Dolaşım Problemi', 'Kan Sulandırıcı Kullanıyorum'],
    medications: 'Eliquis 5 mg',
    complaint: 'Ayak parmaklarımda renk değişikliği ve karıncalanma var.',
    pain_level: 4,
    problem_areas: ['Diğer'],
    foot: 'Her İkisi',
    images: 5,
    status: 'in_review',
    created_at: '2 gün önce',
  },
  {
    id: 'c1',
    full_name: 'Selin Aydın',
    phone: '+90 551 777 88 99',
    age: 31,
    gender: 'Kadın',
    chronic_conditions: ['Hamileyim'],
    medications: null,
    complaint: 'Hamilelik nedeniyle ödem ve siğil oluştu.',
    pain_level: 3,
    problem_areas: ['Siğil'],
    foot: 'Sağ',
    images: 1,
    status: 'appointment_scheduled',
    created_at: '3 gün önce',
    appointment_date: 'Çar, 14:30',
  },
  {
    id: 'd1',
    full_name: 'Burak Polat',
    phone: '+90 506 555 11 22',
    age: 39,
    gender: 'Erkek',
    chronic_conditions: [],
    medications: null,
    complaint: 'Batık tırnak tedavisi sonrası kontrol.',
    pain_level: 0,
    problem_areas: ['Batık Tırnak'],
    foot: 'Sol',
    images: 0,
    status: 'closed',
    created_at: '1 hafta önce',
  },
  {
    id: 'e1',
    full_name: 'Anonim Başvuru',
    phone: '+90 555 000 00 00',
    age: null,
    gender: null,
    chronic_conditions: [],
    medications: null,
    complaint: 'Reklam içerikli mesaj.',
    pain_level: 0,
    problem_areas: [],
    foot: 'Sağ',
    images: 0,
    status: 'spam',
    created_at: '2 hafta önce',
  },
];

const SIDEBAR_ITEMS = [
  { key: 'new', label: 'Yeni Başvurular', icon: Inbox, statuses: ['pending'] },
  { key: 'reviewed', label: 'İncelenenler', icon: ClipboardCheck, statuses: ['in_review', 'contacted'] },
  { key: 'appointments', label: 'Randevular', icon: CalendarClock, statuses: ['appointment_scheduled'] },
  { key: 'completed', label: 'Tamamlananlar', icon: CheckCircle2, statuses: ['closed'] },
  { key: 'archive', label: 'Arşiv', icon: Archive, statuses: ['spam'] },
];

const STATUS_OPTIONS = [
  { value: 'pending', label: 'Pending' },
  { value: 'in_review', label: 'Reviewed' },
  { value: 'appointment_scheduled', label: 'Appointment' },
  { value: 'closed', label: 'Completed' },
];

const STATUS_BADGE = {
  pending: { label: 'Yeni', className: 'bg-amber-100 text-amber-800 border-amber-200' },
  in_review: { label: 'İnceleme', className: 'bg-blue-100 text-blue-800 border-blue-200' },
  contacted: { label: 'İletişimde', className: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
  appointment_scheduled: { label: 'Randevu', className: 'bg-violet-100 text-violet-800 border-violet-200' },
  closed: { label: 'Tamamlandı', className: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  spam: { label: 'Arşiv', className: 'bg-gray-100 text-gray-600 border-gray-200' },
};

// Reusable placeholder image (medical-ish gradient, no external load)
const MOCK_IMAGE =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='%23dbeafe'/><stop offset='1' stop-color='%23bfdbfe'/></linearGradient></defs><rect width='200' height='200' fill='url(%23g)'/><text x='50%25' y='52%25' font-family='sans-serif' font-size='44' fill='%231e3a8a' text-anchor='middle' dominant-baseline='middle' opacity='0.55'>📷</text></svg>";

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
const CRM = () => {
  const [activeTab, setActiveTab] = useState('new');
  const [query, setQuery] = useState('');
  const [openItem, setOpenItem] = useState(null);

  const counts = useMemo(() => {
    const map = {};
    for (const item of SIDEBAR_ITEMS) {
      map[item.key] = MOCK.filter((r) => item.statuses.includes(r.status)).length;
    }
    return map;
  }, []);

  const tab = SIDEBAR_ITEMS.find((s) => s.key === activeTab) || SIDEBAR_ITEMS[0];

  const filtered = useMemo(() => {
    const list = MOCK.filter((r) => tab.statuses.includes(r.status));
    if (!query.trim()) return list;
    const q = query.trim().toLowerCase();
    return list.filter((r) =>
      [r.full_name, r.phone, r.complaint, ...(r.problem_areas || [])]
        .filter(Boolean)
        .some((field) => field.toLowerCase().includes(q)),
    );
  }, [tab, query]);

  // KPI mock numbers (for a useful top row)
  const kpis = useMemo(
    () => [
      { label: 'Bugün Gelen', value: 4, delta: '+33%', icon: TrendingUp, accent: 'text-emerald-600' },
      { label: 'Bekleyen', value: counts.new || 0, delta: 'aksiyon gerek', icon: AlertCircle, accent: 'text-amber-600' },
      { label: 'Bu Hafta Randevu', value: 6, delta: '2 yarın', icon: CalendarClock, accent: 'text-violet-600' },
      { label: 'Ort. Yanıt Süresi', value: '4s 12dk', delta: 'son 7 gün', icon: Activity, accent: 'text-blue-600' },
    ],
    [counts.new],
  );

  return (
    <>
      <Helmet>
        <title>Medipodo CRM — Yönetim Paneli</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-slate-50 text-slate-900" data-testid="crm-page">
        <div className="flex min-h-screen">
          {/* -------------------- Sidebar -------------------- */}
          <aside
            className="hidden md:flex w-64 lg:w-72 flex-col border-r border-slate-200 bg-white"
            data-testid="crm-sidebar"
          >
            <div className="px-5 py-5 border-b border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center shadow-sm">
                <Stethoscope size={20} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-blue-950 leading-tight">Medipodo</div>
                <div className="text-[11px] text-slate-500 leading-tight">Podolog Paneli</div>
              </div>
            </div>

            <nav className="flex-1 p-3 space-y-1">
              <div className="px-2 pt-2 pb-1 text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                Başvurular
              </div>
              {SIDEBAR_ITEMS.map((item) => {
                const Icon = item.icon;
                const active = activeTab === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => setActiveTab(item.key)}
                    data-testid={`sidebar-${item.key}`}
                    className={`group w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      active
                        ? 'bg-blue-50 text-blue-900'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <Icon size={18} className={active ? 'text-blue-700' : 'text-slate-400 group-hover:text-slate-600'} />
                    <span className="flex-1 text-left">{item.label}</span>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-md ${
                        active ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {counts[item.key]}
                    </span>
                  </button>
                );
              })}
            </nav>

            <div className="p-4 border-t border-slate-100">
              <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100/60 border border-blue-100 p-4">
                <div className="flex items-center gap-2 text-blue-900 font-semibold text-sm mb-1">
                  <Activity size={14} />
                  Sistem Sağlığı
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  Tüm servisler çalışıyor. Son güncelleme: az önce.
                </div>
              </div>
            </div>
          </aside>

          {/* -------------------- Main -------------------- */}
          <main className="flex-1 min-w-0 flex flex-col">
            {/* Topbar */}
            <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-slate-200">
              <div className="px-5 lg:px-8 py-4 flex items-center gap-4">
                <div className="md:hidden">
                  <Select value={activeTab} onValueChange={setActiveTab}>
                    <SelectTrigger className="w-44" data-testid="mobile-tab-select">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {SIDEBAR_ITEMS.map((s) => (
                        <SelectItem key={s.key} value={s.key}>
                          {s.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex-1 max-w-lg relative">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="İsim, telefon, şikayet ara…"
                    className="pl-9 h-10 bg-slate-50 border-slate-200 focus-visible:bg-white"
                    data-testid="crm-search"
                  />
                </div>

                <div className="hidden lg:flex items-center gap-2">
                  <Button variant="outline" size="sm" className="border-slate-200 text-slate-700">
                    <Filter size={14} className="mr-1.5" />
                    Filtrele
                  </Button>
                  <button
                    className="relative w-9 h-9 rounded-lg border border-slate-200 hover:bg-slate-50 flex items-center justify-center"
                    aria-label="Bildirimler"
                  >
                    <Bell size={16} className="text-slate-600" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
                  </button>
                  <button
                    className="w-9 h-9 rounded-lg border border-slate-200 hover:bg-slate-50 flex items-center justify-center"
                    aria-label="Ayarlar"
                  >
                    <Settings size={16} className="text-slate-600" />
                  </button>
                  <div className="ml-2 flex items-center gap-2 pl-3 border-l border-slate-200">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 text-white flex items-center justify-center text-xs font-semibold">
                      DR
                    </div>
                    <div className="leading-tight">
                      <div className="text-sm font-semibold text-slate-900">Dr. Rana</div>
                      <div className="text-[11px] text-slate-500">Podolog</div>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* Page body */}
            <div className="flex-1 px-5 lg:px-8 py-6 lg:py-8 max-w-[1500px] w-full mx-auto">
              {/* Heading + tab title */}
              <div className="flex flex-wrap items-end justify-between gap-3 mb-6">
                <div>
                  <div className="text-xs uppercase tracking-wider text-blue-700 font-semibold mb-1">
                    {tab.label}
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                    {tab.key === 'new' && 'Bugün incelenmeyi bekleyenler'}
                    {tab.key === 'reviewed' && 'Podolog tarafından incelenmiş başvurular'}
                    {tab.key === 'appointments' && 'Planlanmış randevular'}
                    {tab.key === 'completed' && 'Sonuçlandırılmış başvurular'}
                    {tab.key === 'archive' && 'Spam / Arşivlenmiş kayıtlar'}
                  </h1>
                  <p className="text-sm text-slate-500 mt-1">
                    Toplam <strong className="text-slate-700">{filtered.length}</strong> kayıt
                    {query.trim() && (
                      <>
                        {' '}
                        — “<em className="text-slate-700">{query.trim()}</em>” için filtrelendi
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* KPIs */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                {kpis.map((k) => {
                  const Icon = k.icon;
                  return (
                    <div
                      key={k.label}
                      className="rounded-xl border border-slate-200 bg-white p-4 hover:shadow-sm transition-shadow"
                      data-testid={`kpi-${k.label}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-slate-500">{k.label}</div>
                        <Icon size={16} className={k.accent} />
                      </div>
                      <div className="mt-2 text-2xl font-bold text-slate-900 leading-tight">{k.value}</div>
                      <div className="mt-0.5 text-[11px] text-slate-500">{k.delta}</div>
                    </div>
                  );
                })}
              </div>

              {/* Cards grid */}
              {filtered.length === 0 ? (
                <EmptyState />
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4" data-testid="application-grid">
                  {filtered.map((row) => (
                    <ApplicationCard key={row.id} row={row} onOpen={() => setOpenItem(row)} />
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>

        {/* -------------------- Detail Drawer -------------------- */}
        <Sheet open={!!openItem} onOpenChange={(open) => !open && setOpenItem(null)}>
          <SheetContent
            side="right"
            className="w-full sm:max-w-xl overflow-y-auto p-0"
            data-testid="detail-drawer"
          >
            {openItem && <ApplicationDetail row={openItem} onClose={() => setOpenItem(null)} />}
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

// ---------------------------------------------------------------------------
// Application Card
// ---------------------------------------------------------------------------
const ApplicationCard = ({ row, onOpen }) => {
  const status = STATUS_BADGE[row.status] || STATUS_BADGE.pending;
  const displayName = row.full_name && row.full_name.trim() ? row.full_name : 'İsimsiz';

  return (
    <button
      type="button"
      onClick={onOpen}
      data-testid={`application-card-${row.id}`}
      className="group text-left bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md hover:border-blue-200 transition-all relative"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center font-semibold text-sm">
            {displayName === 'İsimsiz' ? <User size={18} /> : initials(displayName)}
          </div>
          <div className="min-w-0">
            <div className="font-semibold text-slate-900 truncate">{displayName}</div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
              <Phone size={11} />
              <span className="truncate">{row.phone}</span>
              {row.age != null && <span className="text-slate-300">•</span>}
              {row.age != null && <span>{row.age} yaş</span>}
            </div>
          </div>
        </div>
        <Badge variant="outline" className={`shrink-0 ${status.className}`}>
          {status.label}
        </Badge>
      </div>

      {/* Problem areas + foot */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {row.problem_areas.slice(0, 3).map((p) => (
          <span
            key={p}
            className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-800 text-xs font-medium border border-blue-100"
          >
            {p}
          </span>
        ))}
        {row.problem_areas.length > 3 && (
          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-medium">
            +{row.problem_areas.length - 3}
          </span>
        )}
        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">
          {row.foot} ayak
        </span>
      </div>

      {/* Chronic */}
      {row.chronic_conditions.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {row.chronic_conditions.map((c) => (
            <span
              key={c}
              className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 text-xs font-medium border border-amber-100"
            >
              ⚠ {c}
            </span>
          ))}
        </div>
      )}

      {/* Pain meter */}
      <PainMeter level={row.pain_level} />

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1">
            <ImageIcon size={12} />
            <span className="font-medium text-slate-700">{row.images}</span> foto
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={12} />
            {row.created_at}
          </span>
        </div>
        <ChevronRight
          size={16}
          className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all"
        />
      </div>
    </button>
  );
};

// ---------------------------------------------------------------------------
// Detail Drawer Content
// ---------------------------------------------------------------------------
const ApplicationDetail = ({ row, onClose }) => {
  const [status, setStatus] = useState(
    STATUS_OPTIONS.some((o) => o.value === row.status) ? row.status : 'pending',
  );
  const [notes, setNotes] = useState('');
  const displayName = row.full_name && row.full_name.trim() ? row.full_name : 'İsimsiz';
  const statusMeta = STATUS_BADGE[row.status] || STATUS_BADGE.pending;

  return (
    <>
      {/* Sheet header — sticky */}
      <SheetHeader className="sticky top-0 z-10 bg-white border-b border-slate-200 px-6 py-4 space-y-0">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className={statusMeta.className}>
                {statusMeta.label}
              </Badge>
              <span className="text-xs text-slate-500">#{row.id.toUpperCase()}</span>
            </div>
            <SheetTitle className="text-xl font-bold text-slate-900 truncate">
              {displayName}
            </SheetTitle>
            <div className="flex items-center gap-1.5 text-sm text-slate-500 mt-0.5">
              <Phone size={12} />
              {row.phone}
              {row.age != null && <span className="text-slate-300">•</span>}
              {row.age != null && <span>{row.age} yaş</span>}
              {row.gender && <span className="text-slate-300">•</span>}
              {row.gender && <span>{row.gender}</span>}
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-500"
            aria-label="Kapat"
            data-testid="drawer-close"
          >
            <X size={18} />
          </button>
        </div>
      </SheetHeader>

      <div className="px-6 py-6 space-y-6">
        {/* Quick action buttons */}
        <div className="grid grid-cols-2 gap-2">
          <Button
            className="bg-green-600 hover:bg-green-700 text-white h-11"
            data-testid="whatsapp-button"
          >
            <MessageCircle size={16} className="mr-2" />
            WhatsApp Gönder
          </Button>
          <Button
            variant="outline"
            className="border-blue-200 text-blue-800 hover:bg-blue-50 h-11"
            data-testid="appointment-button"
          >
            <CalendarPlus size={16} className="mr-2" />
            Randevu Oluştur
          </Button>
        </div>

        {/* Status selector */}
        <Section title="Durum">
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger data-testid="status-select" className="h-11">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {STATUS_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Section>

        {/* Photos */}
        <Section title={`Fotoğraflar (${row.images})`}>
          {row.images === 0 ? (
            <div className="text-sm text-slate-500 bg-slate-50 border border-dashed border-slate-200 rounded-lg py-6 text-center">
              Fotoğraf yüklenmemiş.
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: row.images }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg overflow-hidden border border-slate-200 bg-slate-50 group cursor-pointer"
                >
                  <img
                    src={MOCK_IMAGE}
                    alt={`Foto ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          )}
        </Section>

        {/* Complaint */}
        <Section title="Şikayet">
          <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 border border-slate-100 rounded-lg p-4">
            {row.complaint}
          </p>
        </Section>

        {/* Pain meter */}
        <Section title="Ağrı Seviyesi">
          <PainMeter level={row.pain_level} large />
        </Section>

        {/* Problem areas + foot */}
        <Section title="Sorun Bölgesi">
          <div className="flex flex-wrap gap-1.5">
            {row.problem_areas.length === 0 && (
              <span className="text-sm text-slate-500">Seçim yapılmamış</span>
            )}
            {row.problem_areas.map((p) => (
              <span
                key={p}
                className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 text-sm font-medium border border-blue-100"
              >
                {p}
              </span>
            ))}
            <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-sm font-medium">
              {row.foot} ayak
            </span>
          </div>
        </Section>

        {/* Chronic + meds */}
        <Section title="Sağlık Geçmişi">
          <div className="space-y-3">
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1.5">
                Kronik Rahatsızlıklar
              </div>
              {row.chronic_conditions.length === 0 ? (
                <span className="text-sm text-slate-500">Belirtilmemiş</span>
              ) : (
                <div className="flex flex-wrap gap-1.5">
                  {row.chronic_conditions.map((c) => (
                    <span
                      key={c}
                      className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-sm font-medium border border-amber-100"
                    >
                      ⚠ {c}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1.5">
                Kullandığı İlaçlar
              </div>
              <p className="text-sm text-slate-700">
                {row.medications || <span className="text-slate-500">Belirtilmemiş</span>}
              </p>
            </div>
          </div>
        </Section>

        {/* Internal notes */}
        <Section title="İç Notlar (sadece podologlar görür)">
          <Textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={5}
            placeholder="Bu başvuruyla ilgili iç değerlendirme, telefon görüşme notları, takip planı…"
            className="resize-none"
            data-testid="internal-notes"
          />
        </Section>

        {/* Meta */}
        <Section title="Başvuru Bilgisi">
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-0.5">
                Geliş zamanı
              </dt>
              <dd className="text-slate-800">{row.created_at}</dd>
            </div>
            {row.appointment_date && (
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-0.5">
                  Randevu
                </dt>
                <dd className="text-slate-800">{row.appointment_date}</dd>
              </div>
            )}
          </dl>
        </Section>

        {/* Sticky-ish save bar */}
        <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100 pt-4">
          <Button variant="ghost" onClick={onClose} data-testid="drawer-cancel">
            Kapat
          </Button>
          <Button className="bg-blue-700 hover:bg-blue-800 text-white" data-testid="drawer-save">
            Değişiklikleri Kaydet
          </Button>
        </div>
      </div>
    </>
  );
};

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------
const Section = ({ title, children }) => (
  <div>
    <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
      {title}
    </div>
    {children}
  </div>
);

const PainMeter = ({ level, large = false }) => {
  const pct = Math.round((Math.max(0, Math.min(10, level)) / 10) * 100);
  const color = level >= 7 ? 'bg-red-500' : level >= 4 ? 'bg-amber-500' : 'bg-emerald-500';
  return (
    <div className={large ? 'space-y-2' : 'space-y-1'}>
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>Ağrı</span>
        <span>
          <strong className="text-slate-900">{level}</strong> / 10
        </span>
      </div>
      <div className={`w-full ${large ? 'h-2.5' : 'h-1.5'} rounded-full bg-slate-100 overflow-hidden`}>
        <div className={`h-full rounded-full transition-all ${color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
};

const EmptyState = () => (
  <div className="border border-dashed border-slate-200 rounded-xl bg-white p-12 text-center" data-testid="empty-state">
    <div className="mx-auto w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-3">
      <Inbox size={22} className="text-blue-700" />
    </div>
    <div className="text-base font-semibold text-slate-900 mb-1">Bu sekmede kayıt yok</div>
    <p className="text-sm text-slate-500 max-w-md mx-auto">
      Arama terimini değiştirin veya yan menüden başka bir sekme seçin.
    </p>
  </div>
);

const initials = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join('');

export default CRM;
