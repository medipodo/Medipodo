import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
  BellRing,
  Settings,
  ChevronRight,
  Activity,
  Clock,
  AlertCircle,
  Stethoscope,
  TrendingUp,
  Loader2,
  RefreshCcw,
  MoreVertical,
  Trash2,
  ClipboardCheck as ClipboardCheckIcon,
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
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '../components/ui/dropdown-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../components/ui/alert-dialog';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';
import { Toaster, toast } from '../components/ui/sonner';

// ---------------------------------------------------------------------------
// WhatsApp helpers
// ---------------------------------------------------------------------------
/**
 * Normalize a Turkish phone number for wa.me deep-linking.
 * - Strips spaces, dashes, parentheses, dots.
 * - Removes a leading "+" if any.
 * - "+90..." / "90..." -> "90..."
 * - "0..."             -> "90..."
 * - Bare 10-digit local (e.g. "5551234567") -> "905551234567"
 * Returns "" if the result doesn't look like a valid international number.
 */
function normalizePhoneForWhatsApp(raw) {
  if (!raw) return '';
  let digits = String(raw).replace(/[\s().\-]/g, '');
  if (digits.startsWith('+')) digits = digits.slice(1);
  // strip any residual non-digits
  digits = digits.replace(/\D/g, '');
  if (!digits) return '';
  if (digits.startsWith('90')) {
    // keep as-is
  } else if (digits.startsWith('0')) {
    digits = '90' + digits.slice(1);
  } else if (digits.length === 10) {
    // bare TR mobile without leading 0
    digits = '90' + digits;
  }
  // Basic sanity check: 11-15 digits total
  if (digits.length < 11 || digits.length > 15) return '';
  return digits;
}

function buildWhatsAppMessage({ fullName, internalNotes }) {
  const name = (fullName || '').trim();
  const greeting = name ? `Merhaba ${name},` : 'Merhaba,';
  return (
    `${greeting}\n\n` +
    `Medipodo'ya göndermiş olduğunuz ücretsiz ön değerlendirme başvurunuz podoloğumuz tarafından incelenmiştir.\n\n` +
    `Podoloğumuzun ön değerlendirmesi:\n\n` +
    `${(internalNotes || '').trim()}\n\n` +
    `Sorularınız olursa bizimle dilediğiniz zaman iletişime geçebilirsiniz.\n\n` +
    `Sağlıklı günler dileriz.\n\n` +
    `Medipodo`
  );
}

// ---------------------------------------------------------------------------
// API helpers
// ---------------------------------------------------------------------------
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api/crm`;

async function apiFetch(path, options = {}) {
  const res = await fetch(`${API}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  if (!res.ok) {
    let msg = `İstek başarısız (${res.status})`;
    try {
      const data = await res.json();
      if (data?.detail) msg = data.detail;
    } catch (_) {
      /* ignore */
    }
    throw new Error(msg);
  }
  // 204 No Content (e.g. DELETE) has no body.
  if (res.status === 204) return null;
  const contentType = res.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    // The API only speaks JSON. Anything else = misconfigured backend URL.
    throw new Error('Beklenmeyen yanıt (JSON değil). Backend URL ayarını kontrol edin.');
  }
  return res.json();
}

function formatRelative(iso) {
  if (!iso) return '';
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  const diffSec = Math.round((Date.now() - date.getTime()) / 1000);
  if (diffSec < 60) return 'az önce';
  if (diffSec < 3600) return `${Math.floor(diffSec / 60)} dk önce`;
  if (diffSec < 86400) return `${Math.floor(diffSec / 3600)} saat önce`;
  if (diffSec < 86400 * 7) return `${Math.floor(diffSec / 86400)} gün önce`;
  if (diffSec < 86400 * 30) return `${Math.floor(diffSec / 86400 / 7)} hafta önce`;
  return date.toLocaleDateString('tr-TR');
}

function formatDateTimeLocal(iso) {
  // Convert ISO -> 'YYYY-MM-DDTHH:MM' for <input type=datetime-local>
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function localToIso(local) {
  if (!local) return null;
  const d = new Date(local);
  if (Number.isNaN(d.getTime())) return null;
  return d.toISOString();
}


// All status values relevant to the CRM (matches the backend whitelist).
const ALL_STATUSES = [
  'pending',
  'in_review',
  'contacted',
  'appointment_scheduled',
  'closed',
  'spam',
];

// Tab key -> backend status filter (sent as repeated ?status=)
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

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
const CRM = () => {
  const [activeTab, setActiveTab] = useState('new');
  const [query, setQuery] = useState('');
  const [openItemId, setOpenItemId] = useState(null);

  // Data
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listError, setListError] = useState('');
  const [counts, setCounts] = useState({});
  const [refreshKey, setRefreshKey] = useState(0);

  // Quick actions
  const [pendingDeleteId, setPendingDeleteId] = useState(null);
  const [deleteBusy, setDeleteBusy] = useState(false);

  // Notifications
  const [notifPermission, setNotifPermission] = useState(
    typeof Notification !== 'undefined' ? Notification.permission : 'denied'
  );
  const [notifEnabled, setNotifEnabled] = useState(false);
  const knownPendingIdsRef = React.useRef(null); // Set<string> once initialized
  const openItemIdRef = React.useRef(null);
  useEffect(() => {
    openItemIdRef.current = openItemId;
  }, [openItemId]);

  // Settings modal
  const [settingsOpen, setSettingsOpen] = useState(false);

  const tab = SIDEBAR_ITEMS.find((s) => s.key === activeTab) || SIDEBAR_ITEMS[0];

  // Debounce search
  const [debouncedQuery, setDebouncedQuery] = useState('');
  useEffect(() => {
    const id = setTimeout(() => setDebouncedQuery(query.trim()), 300);
    return () => clearTimeout(id);
  }, [query]);

  // Fetch list whenever tab / search / refresh changes
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setListError('');
    const params = new URLSearchParams();
    tab.statuses.forEach((s) => params.append('status', s));
    if (debouncedQuery) params.append('q', debouncedQuery);
    params.append('limit', '200');
    apiFetch(`/assessment-requests?${params.toString()}`)
      .then((data) => {
        if (!cancelled) setRows(data.items || []);
      })
      .catch((err) => {
        if (!cancelled) {
          setRows([]);
          setListError(err.message);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [tab.key, tab.statuses, debouncedQuery, refreshKey]);

  // Fetch counts for sidebar (one call covering all statuses)
  useEffect(() => {
    let cancelled = false;
    const params = new URLSearchParams();
    ALL_STATUSES.forEach((s) => params.append('status', s));
    params.append('limit', '200');
    apiFetch(`/assessment-requests?${params.toString()}`)
      .then((data) => {
        if (cancelled) return;
        const map = {};
        for (const item of SIDEBAR_ITEMS) {
          map[item.key] = (data.items || []).filter((r) => item.statuses.includes(r.status)).length;
        }
        setCounts(map);
      })
      .catch(() => {
        /* sidebar counts are best-effort; ignore errors */
      });
    return () => {
      cancelled = true;
    };
  }, [refreshKey]);

  const refresh = useCallback(() => setRefreshKey((k) => k + 1), []);

  const handleSaved = useCallback(
    (updated) => {
      // Update list in place
      setRows((prev) => {
        const matchesTab = tab.statuses.includes(updated.status);
        const without = prev.filter((r) => r.id !== updated.id);
        return matchesTab ? [updated, ...without] : without;
      });
      // Refresh sidebar counts
      setRefreshKey((k) => k + 1);
    },
    [tab.statuses],
  );

  // ----- Quick actions -----------------------------------------------------
  const handleQuickStatus = useCallback(
    async (row, nextStatus, successMsg) => {
      try {
        const updated = await apiFetch(`/assessment-requests/${row.id}`, {
          method: 'PATCH',
          body: JSON.stringify({ status: nextStatus }),
        });
        setRows((prev) => {
          const matchesTab = tab.statuses.includes(updated.status);
          const without = prev.filter((r) => r.id !== updated.id);
          return matchesTab ? [updated, ...without] : without;
        });
        setRefreshKey((k) => k + 1);
        toast.success(successMsg);
      } catch (err) {
        toast.error(err.message || 'İşlem başarısız.');
      }
    },
    [tab.statuses],
  );

  const confirmDelete = useCallback(async () => {
    if (!pendingDeleteId) return;
    setDeleteBusy(true);
    try {
      await apiFetch(`/assessment-requests/${pendingDeleteId}`, { method: 'DELETE' });
      setRows((prev) => prev.filter((r) => r.id !== pendingDeleteId));
      setRefreshKey((k) => k + 1);
      if (openItemId === pendingDeleteId) setOpenItemId(null);
      toast.success('Kayıt kalıcı olarak silindi.');
      setPendingDeleteId(null);
    } catch (err) {
      toast.error(err.message || 'Kayıt silinemedi.');
    } finally {
      setDeleteBusy(false);
    }
  }, [pendingDeleteId, openItemId]);

  // ----- Notifications -----------------------------------------------------
  const toggleNotifications = useCallback(async () => {
    if (typeof Notification === 'undefined') {
      toast.error('Bu tarayıcı bildirimleri desteklemiyor.');
      return;
    }
    if (Notification.permission === 'granted') {
      setNotifEnabled((v) => {
        const next = !v;
        toast.success(next ? 'Bildirimler açıldı.' : 'Bildirimler kapatıldı.');
        return next;
      });
      return;
    }
    if (Notification.permission === 'denied') {
      toast.error('Bildirim izni engellenmiş. Tarayıcı ayarlarından izin verin.');
      return;
    }
    try {
      const result = await Notification.requestPermission();
      setNotifPermission(result);
      if (result === 'granted') {
        setNotifEnabled(true);
        toast.success('Bildirimler açıldı.');
      } else {
        toast.error('Bildirim izni verilmedi.');
      }
    } catch {
      toast.error('Bildirim izni alınamadı.');
    }
  }, []);

  // Poll for new pending records every 30s while enabled.
  useEffect(() => {
    if (!notifEnabled || notifPermission !== 'granted') return undefined;

    let cancelled = false;

    const fetchPending = async () => {
      try {
        const params = new URLSearchParams();
        params.append('status', 'pending');
        params.append('limit', '50');
        const data = await apiFetch(`/assessment-requests?${params.toString()}`);
        if (cancelled) return;
        const items = data?.items || [];
        const ids = new Set(items.map((i) => i.id));
        if (knownPendingIdsRef.current === null) {
          knownPendingIdsRef.current = ids;
          return;
        }
        const fresh = items.filter((i) => !knownPendingIdsRef.current.has(i.id));
        knownPendingIdsRef.current = ids;
        if (fresh.length > 0) {
          fresh.slice(0, 3).forEach((rec) => {
            try {
              const nm = (rec.full_name && rec.full_name.trim()) || 'Yeni başvuru';
              const notif = new Notification('Medipodo CRM — Yeni başvuru', {
                body: `${nm}${rec.phone ? ' · ' + rec.phone : ''}`,
                icon: '/favicon.ico',
                tag: `medipodo-${rec.id}`,
              });
              notif.onclick = () => {
                try { window.focus(); } catch { /* noop */ }
                setActiveTab('new');
                setOpenItemId(rec.id);
                notif.close();
              };
            } catch {
              /* browser may throw if backgrounded — ignore */
            }
          });
          setRefreshKey((k) => k + 1);
        }
      } catch {
        /* silent — polling is best-effort */
      }
    };

    // Prime + interval
    fetchPending();
    const id = setInterval(fetchPending, 30000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [notifEnabled, notifPermission]);

  // KPIs from real data
  const kpis = useMemo(() => {
    const totalPending = counts.new || 0;
    const totalAppointments = counts.appointments || 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayCount = rows.filter((r) => {
      if (!r.created_at) return false;
      const d = new Date(r.created_at);
      return d.getTime() >= today.getTime();
    }).length;
    return [
      { label: 'Bu Sekmede Bugün', value: todayCount, delta: 'son 24 saat', icon: TrendingUp, accent: 'text-emerald-600' },
      { label: 'Bekleyen', value: totalPending, delta: 'aksiyon gerek', icon: AlertCircle, accent: 'text-amber-600' },
      { label: 'Randevular', value: totalAppointments, delta: 'planlandı', icon: CalendarClock, accent: 'text-violet-600' },
      { label: 'Bu Sekmede', value: rows.length, delta: 'görüntülenen', icon: Activity, accent: 'text-blue-600' },
    ];
  }, [rows, counts]);

  const filtered = rows; // filtering done server-side

  return (
    <>
      <Helmet>
        <title>Medipodo CRM — Yönetim Paneli</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Toaster position="top-right" richColors closeButton />
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
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={refresh}
                    className="border-slate-200 text-slate-700"
                    data-testid="refresh-button"
                  >
                    <RefreshCcw size={14} className="mr-1.5" />
                    Yenile
                  </Button>
                  <Button variant="outline" size="sm" className="border-slate-200 text-slate-700">
                    <Filter size={14} className="mr-1.5" />
                    Filtrele
                  </Button>
                  <button
                    className="relative w-9 h-9 rounded-lg border border-slate-200 hover:bg-slate-50 flex items-center justify-center"
                    aria-label="Bildirimler"
                    data-testid="notifications-toggle"
                    onClick={toggleNotifications}
                    title={
                      notifPermission === 'granted'
                        ? notifEnabled
                          ? 'Bildirimler açık — kapatmak için tıklayın'
                          : 'Bildirimler kapalı — açmak için tıklayın'
                        : 'Bildirimler için izin verin'
                    }
                  >
                    {notifEnabled && notifPermission === 'granted' ? (
                      <BellRing size={16} className="text-blue-700" />
                    ) : (
                      <Bell size={16} className="text-slate-600" />
                    )}
                    {notifEnabled && notifPermission === 'granted' && (
                      <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500" />
                    )}
                  </button>
                  <button
                    className="w-9 h-9 rounded-lg border border-slate-200 hover:bg-slate-50 flex items-center justify-center"
                    aria-label="Ayarlar"
                    data-testid="settings-button"
                    onClick={() => setSettingsOpen(true)}
                  >
                    <Settings size={16} className="text-slate-600" />
                  </button>
                  <div className="ml-2 flex items-center gap-2 pl-3 border-l border-slate-200">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 text-white flex items-center justify-center text-xs font-semibold">
                      SC
                    </div>
                    <div className="leading-tight">
                      <div className="text-[11px] text-slate-500">Podolog</div>
                      <div className="text-sm font-semibold text-slate-900">Serdar Ceylan</div>
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
              {loading ? (
                <div className="border border-slate-200 rounded-xl bg-white p-12 text-center" data-testid="list-loading">
                  <Loader2 className="mx-auto mb-3 animate-spin text-blue-600" size={28} />
                  <p className="text-sm text-slate-500">Başvurular yükleniyor…</p>
                </div>
              ) : listError ? (
                <div className="border border-red-200 rounded-xl bg-red-50 p-8 text-center" data-testid="list-error">
                  <AlertCircle className="mx-auto mb-2 text-red-500" size={28} />
                  <p className="text-sm text-red-800 font-medium mb-1">Veriler alınamadı</p>
                  <p className="text-xs text-red-600 mb-4">{listError}</p>
                  <Button variant="outline" size="sm" onClick={refresh} className="border-red-200 text-red-700">
                    <RefreshCcw size={14} className="mr-1.5" />
                    Tekrar dene
                  </Button>
                </div>
              ) : filtered.length === 0 ? (
                <EmptyState />
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4" data-testid="application-grid">
                  {filtered.map((row) => (
                    <ApplicationCard
                      key={row.id}
                      row={row}
                      onOpen={() => setOpenItemId(row.id)}
                      onMarkReviewed={() =>
                        handleQuickStatus(row, 'in_review', 'İncelendi olarak işaretlendi.')
                      }
                      onArchive={() => handleQuickStatus(row, 'spam', 'Arşive taşındı.')}
                      onDelete={() => setPendingDeleteId(row.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>

        {/* -------------------- Detail Drawer -------------------- */}
        <Sheet open={!!openItemId} onOpenChange={(open) => !open && setOpenItemId(null)}>
          <SheetContent
            side="right"
            className="w-full sm:max-w-xl overflow-y-auto p-0"
            data-testid="detail-drawer"
          >
            {openItemId && (
              <ApplicationDetail
                recordId={openItemId}
                onClose={() => setOpenItemId(null)}
                onSaved={handleSaved}
              />
            )}
          </SheetContent>
        </Sheet>

        {/* -------------------- Delete confirmation -------------------- */}
        <AlertDialog
          open={!!pendingDeleteId}
          onOpenChange={(open) => !open && !deleteBusy && setPendingDeleteId(null)}
        >
          <AlertDialogContent data-testid="delete-confirm">
            <AlertDialogHeader>
              <AlertDialogTitle>Kaydı kalıcı olarak sil?</AlertDialogTitle>
              <AlertDialogDescription>
                Bu işlem geri alınamaz. Başvuru kaydı ve yüklenen tüm fotoğraflar kalıcı olarak silinecektir.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel disabled={deleteBusy}>Vazgeç</AlertDialogCancel>
              <AlertDialogAction
                onClick={(e) => {
                  e.preventDefault();
                  confirmDelete();
                }}
                disabled={deleteBusy}
                className="bg-red-600 hover:bg-red-700 focus:ring-red-500"
                data-testid="delete-confirm-button"
              >
                {deleteBusy ? (
                  <>
                    <Loader2 size={14} className="mr-1.5 animate-spin" />
                    Siliniyor…
                  </>
                ) : (
                  'Evet, sil'
                )}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* -------------------- Settings modal -------------------- */}
        <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />
      </div>
    </>
  );
};

// ---------------------------------------------------------------------------
// Application Card
// ---------------------------------------------------------------------------
const ApplicationCard = ({ row, onOpen, onMarkReviewed, onArchive, onDelete }) => {
  const status = STATUS_BADGE[row.status] || STATUS_BADGE.pending;
  const displayName = row.full_name && row.full_name.trim() ? row.full_name : 'İsimsiz';
  const problemAreas = row.problem_areas || [];
  const chronics = row.chronic_conditions || [];
  const canMarkReviewed = row.status === 'pending';

  return (
    <div
      className="group relative bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md hover:border-blue-200 transition-all"
      data-testid={`application-card-${row.id}`}
    >
      {/* Quick actions menu — top-right, absolute so it doesn't disturb layout */}
      <div className="absolute top-3 right-3 z-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              onClick={(e) => e.stopPropagation()}
              className="w-7 h-7 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center"
              aria-label="Hızlı işlemler"
              data-testid={`card-actions-${row.id}`}
            >
              <MoreVertical size={16} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            {canMarkReviewed && (
              <DropdownMenuItem
                onClick={(e) => {
                  e.stopPropagation();
                  onMarkReviewed?.();
                }}
                data-testid={`quick-review-${row.id}`}
              >
                <ClipboardCheckIcon size={14} className="mr-2 text-blue-700" />
                İncelendi olarak işaretle
              </DropdownMenuItem>
            )}
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                onArchive?.();
              }}
              data-testid={`quick-archive-${row.id}`}
            >
              <Archive size={14} className="mr-2 text-slate-600" />
              Arşivle
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                onDelete?.();
              }}
              className="text-red-600 focus:text-red-700 focus:bg-red-50"
              data-testid={`quick-delete-${row.id}`}
            >
              <Trash2 size={14} className="mr-2" />
              Sil
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Clickable body */}
      <button
        type="button"
        onClick={onOpen}
        className="text-left w-full"
        data-testid={`application-card-body-${row.id}`}
      >
      <div className="flex items-start justify-between gap-3 mb-3 pr-8">
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
        {problemAreas.slice(0, 3).map((p) => (
          <span
            key={p}
            className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-800 text-xs font-medium border border-blue-100"
          >
            {p}
          </span>
        ))}
        {problemAreas.length > 3 && (
          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-medium">
            +{problemAreas.length - 3}
          </span>
        )}
        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">
          {row.foot} ayak
        </span>
      </div>

      {/* Chronic */}
      {chronics.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {chronics.map((c) => (
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
      <PainMeter level={row.pain_level ?? 0} />

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1">
            <ImageIcon size={12} />
            <span className="font-medium text-slate-700">{(row.image_paths || []).length}</span> foto
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={12} />
            {formatRelative(row.created_at)}
          </span>
        </div>
        <ChevronRight
          size={16}
          className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all"
        />
      </div>
      </button>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Detail Drawer Content
// ---------------------------------------------------------------------------
const ApplicationDetail = ({ recordId, onClose, onSaved }) => {
  const [record, setRecord] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');

  // Editable fields
  const [status, setStatus] = useState('pending');
  const [notes, setNotes] = useState('');
  const [reviewedBy, setReviewedBy] = useState('');
  const [appointmentDateLocal, setAppointmentDateLocal] = useState('');
  const [appointmentCreated, setAppointmentCreated] = useState(false);

  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState('');

  // Fetch full record + signed URLs
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setLoadError('');
    apiFetch(`/assessment-requests/${recordId}`)
      .then((data) => {
        if (cancelled) return;
        setRecord(data);
        setImages(data.images || []);
        setStatus(data.status || 'pending');
        setNotes(data.internal_notes || '');
        setReviewedBy(data.reviewed_by || '');
        setAppointmentDateLocal(formatDateTimeLocal(data.appointment_date));
        setAppointmentCreated(Boolean(data.appointment_created));
      })
      .catch((err) => {
        if (!cancelled) setLoadError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [recordId]);

  const handleSave = useCallback(async () => {
    if (!record) return;
    setSaving(true);
    setSaveError('');
    const payload = {};
    if (status !== record.status) payload.status = status;
    if ((notes || '') !== (record.internal_notes || '')) {
      payload.internal_notes = notes || null;
    }
    if ((reviewedBy || '') !== (record.reviewed_by || '')) {
      payload.reviewed_by = reviewedBy || null;
    }
    const newApt = localToIso(appointmentDateLocal);
    if (newApt !== (record.appointment_date || null)) {
      payload.appointment_date = newApt;
    }
    if (Boolean(appointmentCreated) !== Boolean(record.appointment_created)) {
      payload.appointment_created = appointmentCreated;
    }
    if (Object.keys(payload).length === 0) {
      setSaving(false);
      onClose();
      return;
    }
    try {
      const updated = await apiFetch(`/assessment-requests/${recordId}`, {
        method: 'PATCH',
        body: JSON.stringify(payload),
      });
      setRecord(updated);
      onSaved?.(updated);
      onClose();
    } catch (err) {
      setSaveError(err.message);
    } finally {
      setSaving(false);
    }
  }, [
    record,
    status,
    notes,
    reviewedBy,
    appointmentDateLocal,
    appointmentCreated,
    recordId,
    onClose,
    onSaved,
  ]);

  if (loading) {
    return (
      <div className="p-10 text-center text-slate-500" data-testid="drawer-loading">
        <Loader2 className="mx-auto mb-2 animate-spin text-blue-600" size={28} />
        Kayıt yükleniyor…
      </div>
    );
  }

  if (loadError || !record) {
    return (
      <div className="p-10 text-center" data-testid="drawer-error">
        <AlertCircle className="mx-auto mb-2 text-red-500" size={28} />
        <p className="text-sm text-slate-700 mb-4">{loadError || 'Kayıt yüklenemedi.'}</p>
        <Button variant="outline" onClick={onClose}>Kapat</Button>
      </div>
    );
  }

  const displayName = record.full_name && record.full_name.trim() ? record.full_name : 'İsimsiz';
  const statusMeta = STATUS_BADGE[record.status] || STATUS_BADGE.pending;
  const problemAreas = record.problem_areas || [];
  const chronics = record.chronic_conditions || [];

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
              <span className="text-xs text-slate-500">#{record.id.slice(0, 8).toUpperCase()}</span>
            </div>
            <SheetTitle className="text-xl font-bold text-slate-900 truncate">
              {displayName}
            </SheetTitle>
            <div className="flex items-center gap-1.5 text-sm text-slate-500 mt-0.5">
              <Phone size={12} />
              {record.phone}
              {record.age != null && <span className="text-slate-300">•</span>}
              {record.age != null && <span>{record.age} yaş</span>}
              {record.gender && <span className="text-slate-300">•</span>}
              {record.gender && <span>{record.gender}</span>}
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
            onClick={() => {
              // 1) İç Notlar zorunlu
              if (!notes || !notes.trim()) {
                toast.error(
                  'Lütfen önce "İç Notlar" alanına podoloğun ön değerlendirmesini yazın.'
                );
                return;
              }
              // 2) Telefonu normalize et
              const number = normalizePhoneForWhatsApp(record?.phone);
              if (!number) {
                toast.error('Geçerli telefon numarası bulunamadı.');
                return;
              }
              // 3) Mesajı hazırla ve WhatsApp'ı yeni sekmede aç
              const message = buildWhatsAppMessage({
                fullName: record?.full_name,
                internalNotes: notes,
              });
              const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
              window.open(url, '_blank', 'noopener,noreferrer');
            }}
          >
            <MessageCircle size={16} className="mr-2" />
            WhatsApp Gönder
          </Button>
          <Button
            variant="outline"
            className="border-blue-200 text-blue-800 hover:bg-blue-50 h-11"
            data-testid="appointment-button"
            onClick={() => {
              setAppointmentCreated(true);
              if (!appointmentDateLocal) {
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                tomorrow.setHours(10, 0, 0, 0);
                setAppointmentDateLocal(formatDateTimeLocal(tomorrow.toISOString()));
              }
            }}
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
        <Section title={`Fotoğraflar (${images.length})`}>
          {images.length === 0 ? (
            <div className="text-sm text-slate-500 bg-slate-50 border border-dashed border-slate-200 rounded-lg py-6 text-center">
              Fotoğraf yüklenmemiş.
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-2">
              {images.map((img, i) => (
                <a
                  key={img.path}
                  href={img.signed_url || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="aspect-square rounded-lg overflow-hidden border border-slate-200 bg-slate-50 group cursor-pointer block"
                  onClick={(e) => {
                    if (!img.signed_url) e.preventDefault();
                  }}
                >
                  {img.signed_url ? (
                    <img
                      src={img.signed_url}
                      alt={`Foto ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">
                      Yüklenemedi
                    </div>
                  )}
                </a>
              ))}
            </div>
          )}
        </Section>

        {/* Complaint */}
        <Section title="Şikayet">
          <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 border border-slate-100 rounded-lg p-4 whitespace-pre-wrap">
            {record.complaint}
          </p>
        </Section>

        {/* Pain meter */}
        <Section title="Ağrı Seviyesi">
          <PainMeter level={record.pain_level ?? 0} large />
        </Section>

        {/* Problem areas + foot */}
        <Section title="Sorun Bölgesi">
          <div className="flex flex-wrap gap-1.5">
            {problemAreas.length === 0 && (
              <span className="text-sm text-slate-500">Seçim yapılmamış</span>
            )}
            {problemAreas.map((p) => (
              <span
                key={p}
                className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 text-sm font-medium border border-blue-100"
              >
                {p}
              </span>
            ))}
            <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-sm font-medium">
              {record.foot} ayak
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
              {chronics.length === 0 ? (
                <span className="text-sm text-slate-500">Belirtilmemiş</span>
              ) : (
                <div className="flex flex-wrap gap-1.5">
                  {chronics.map((c) => (
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
              <p className="text-sm text-slate-700 whitespace-pre-wrap">
                {record.medications || <span className="text-slate-500">Belirtilmemiş</span>}
              </p>
            </div>
          </div>
        </Section>

        {/* Reviewed by */}
        <Section title="İnceleyen">
          <Input
            value={reviewedBy}
            onChange={(e) => setReviewedBy(e.target.value)}
            placeholder="ör. Serdar Ceylan"
            maxLength={120}
            data-testid="reviewed-by"
          />
        </Section>

        {/* Appointment */}
        <Section title="Randevu">
          <div className="space-y-3">
            <Input
              type="datetime-local"
              value={appointmentDateLocal}
              onChange={(e) => setAppointmentDateLocal(e.target.value)}
              data-testid="appointment-date"
            />
            <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={appointmentCreated}
                onChange={(e) => setAppointmentCreated(e.target.checked)}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                data-testid="appointment-created"
              />
              Randevu oluşturuldu
            </label>
          </div>
        </Section>

        {/* Internal notes */}
        <Section title="İç Notlar (sadece podologlar görür)">
          <Textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={5}
            maxLength={8000}
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
              <dd className="text-slate-800">{formatRelative(record.created_at)}</dd>
            </div>
            {record.reviewed_at && (
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-0.5">
                  İncelendi
                </dt>
                <dd className="text-slate-800">{formatRelative(record.reviewed_at)}</dd>
              </div>
            )}
            {record.updated_at && (
              <div>
                <dt className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-0.5">
                  Son güncelleme
                </dt>
                <dd className="text-slate-800">{formatRelative(record.updated_at)}</dd>
              </div>
            )}
          </dl>
        </Section>

        {saveError && (
          <div
            className="rounded-lg border border-red-200 bg-red-50 text-red-700 text-sm p-3 flex items-start gap-2"
            data-testid="save-error"
          >
            <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
            <span>{saveError}</span>
          </div>
        )}

        {/* Sticky-ish save bar */}
        <div className="pt-2 flex items-center justify-end gap-2 border-t border-slate-100 pt-4">
          <Button variant="ghost" onClick={onClose} data-testid="drawer-cancel" disabled={saving}>
            Kapat
          </Button>
          <Button
            className="bg-blue-700 hover:bg-blue-800 text-white"
            data-testid="drawer-save"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? (
              <>
                <Loader2 size={16} className="mr-2 animate-spin" />
                Kaydediliyor…
              </>
            ) : (
              'Değişiklikleri Kaydet'
            )}
          </Button>
        </div>
      </div>
    </>
  );
};

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------
const HealthStatusRow = ({ label, value }) => {
  const ok = value === 'ok';
  return (
    <div className="flex items-center justify-between py-2 border-b border-slate-100 last:border-b-0">
      <span className="text-sm text-slate-700">{label}</span>
      <span
        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-1 rounded-md ${
          ok
            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
            : 'bg-red-50 text-red-700 border border-red-200'
        }`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${ok ? 'bg-emerald-500' : 'bg-red-500'}`} />
        {value || 'unknown'}
      </span>
    </div>
  );
};

const SettingsDialog = ({ open, onOpenChange }) => {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    setLoading(true);
    setError('');
    setHealth(null);
    apiFetch('/health')
      .then((data) => {
        if (!cancelled) setHealth(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message || 'Sağlık bilgileri alınamadı.');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md" data-testid="settings-dialog">
        <DialogHeader>
          <DialogTitle>Ayarlar</DialogTitle>
          <DialogDescription>Sistem durumu ve sürüm bilgisi.</DialogDescription>
        </DialogHeader>
        {loading ? (
          <div className="py-8 text-center text-sm text-slate-500">
            <Loader2 className="mx-auto mb-2 animate-spin text-blue-600" size={22} />
            Yükleniyor…
          </div>
        ) : error ? (
          <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
            {error}
          </div>
        ) : health ? (
          <div className="space-y-0.5">
            <div className="flex items-center justify-between py-2 border-b border-slate-100">
              <span className="text-sm text-slate-700">CRM Sürümü</span>
              <span className="text-sm font-semibold text-slate-900">
                v{health.crm_version || '—'}
              </span>
            </div>
            <HealthStatusRow label="Backend" value={health.backend} />
            <HealthStatusRow label="Supabase" value={health.supabase} />
            <HealthStatusRow label="Render" value={health.render} />
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
};

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
