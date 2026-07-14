import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  CheckCircle2,
  ShieldCheck,
  UserCheck,
  Clock,
  UploadCloud,
  X,
  Image as ImageIcon,
  Sparkles,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Checkbox } from '../components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Slider } from '../components/ui/slider';
import { Button } from '../components/ui/button';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const TRUST_CARDS = [
  {
    icon: ShieldCheck,
    title: 'Tamamen Ücretsiz',
    description: 'Ön değerlendirme için hiç ücret almıyoruz.',
  },
  {
    icon: UserCheck,
    title: 'Uzman Podolog İnceler',
    description: 'Fotoğraflarınızı deneyimli ekibimiz tek tek inceler.',
  },
  {
    icon: Clock,
    title: '24 Saatte Geri Dönüş',
    description: 'Çoğunlukla aynı gün, en geç 24 saat içinde yazıyoruz.',
  },
];

const CHRONIC_CONDITIONS = [
  'Diyabet',
  'Dolaşım Problemi',
  'Kalp Hastalığı',
  'Böbrek Hastalığı',
  'Tiroid',
  'Kan Sulandırıcı Kullanıyorum',
  'Hamileyim',
  'Hiçbiri',
];

const PROBLEM_AREAS = [
  'Batık Tırnak',
  'Tırnak Mantarı',
  'Nasır',
  'Topuk Çatlağı',
  'Siğil',
  'Parmak Arası',
  'Diğer',
];

const ACCEPTED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
const MAX_IMAGES = 5;

const OnDegerlendirme = () => {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [submitState, setSubmitState] = useState('idle'); // idle | submitting | success | error
  const [submitError, setSubmitError] = useState('');
  const [touched, setTouched] = useState(false);

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    age: '',
    gender: '',
    chronic: [],
    medications: '',
    complaint: '',
    painLevel: 5,
    problemAreas: [],
    foot: '',
    images: [],
    kvkk: false,
  });

  const updateField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const toggleArrayField = (key, value, exclusive = null) => {
    setForm((prev) => {
      const exists = prev[key].includes(value);
      let next;
      if (exists) {
        next = prev[key].filter((v) => v !== value);
      } else {
        // If selecting "Hiçbiri" -> clear others. If selecting another -> remove "Hiçbiri".
        if (exclusive && value === exclusive) {
          next = [value];
        } else if (exclusive && prev[key].includes(exclusive)) {
          next = [...prev[key].filter((v) => v !== exclusive), value];
        } else {
          next = [...prev[key], value];
        }
      }
      return { ...prev, [key]: next };
    });
  };

  const handleFiles = (fileList) => {
    const incoming = Array.from(fileList).filter((file) =>
      ACCEPTED_TYPES.includes(file.type) || /\.(jpe?g|png|webp)$/i.test(file.name),
    );
    setForm((prev) => {
      const remainingSlots = MAX_IMAGES - prev.images.length;
      const newOnes = incoming.slice(0, remainingSlots).map((file) => ({
        id: `${file.name}-${file.size}-${Date.now()}-${Math.random()}`,
        file,
        url: URL.createObjectURL(file),
        name: file.name,
      }));
      return { ...prev, images: [...prev.images, ...newOnes] };
    });
  };

  const removeImage = (id) => {
    setForm((prev) => {
      const removed = prev.images.find((img) => img.id === id);
      if (removed) URL.revokeObjectURL(removed.url);
      return { ...prev, images: prev.images.filter((img) => img.id !== id) };
    });
  };

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const isValid =
    form.phone.trim() &&
    form.complaint.trim() &&
    form.foot &&
    form.kvkk;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched(true);
    setSubmitError('');
    if (!isValid || submitState === 'submitting') return;

    setSubmitState('submitting');
    try {
      const fd = new FormData();
      fd.append('phone', form.phone.trim());
      fd.append('complaint', form.complaint.trim());
      fd.append('foot', form.foot);
      fd.append('kvkk_accepted', 'true');
      if (form.fullName.trim()) fd.append('full_name', form.fullName.trim());
      if (form.age) fd.append('age', String(form.age));
      if (form.gender) fd.append('gender', form.gender);
      if (form.medications.trim()) fd.append('medications', form.medications.trim());
      fd.append('pain_level', String(form.painLevel));
      if (form.chronic.length) fd.append('chronic_conditions', form.chronic.join(','));
      if (form.problemAreas.length) fd.append('problem_areas', form.problemAreas.join(','));
      form.images.forEach((img) => fd.append('images', img.file));

      const res = await fetch(`${API}/assessment-requests`, {
        method: 'POST',
        body: fd,
      });
      if (!res.ok) {
        let msg = 'Başvurunuz gönderilemedi. Lütfen tekrar deneyin.';
        try {
          const data = await res.json();
          if (data?.detail) msg = data.detail;
        } catch (_) {
          /* ignore */
        }
        throw new Error(msg);
      }

      // Cleanup preview object URLs
      form.images.forEach((img) => URL.revokeObjectURL(img.url));
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setSubmitState('success');
    } catch (err) {
      setSubmitError(err.message || 'Beklenmeyen bir hata oluştu.');
      setSubmitState('error');
    }
  };

  const resetForm = () => {
    form.images.forEach((img) => URL.revokeObjectURL(img.url));
    setForm({
      fullName: '',
      phone: '',
      age: '',
      gender: '',
      chronic: [],
      medications: '',
      complaint: '',
      painLevel: 5,
      problemAreas: [],
      foot: '',
      images: [],
      kvkk: false,
    });
    setTouched(false);
    setSubmitError('');
    setSubmitState('idle');
  };

  if (submitState === 'success') {
    return (
      <>
        <Helmet>
          <title>Başvurunuz Alındı - Medipodo</title>
        </Helmet>
        <div
          className="min-h-screen bg-gradient-to-b from-blue-50/40 via-white to-white flex items-center justify-center px-4 pt-32 pb-16"
          data-testid="success-page"
        >
          <Card className="max-w-xl w-full shadow-xl border-blue-100">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="text-green-600" size={44} />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4 leading-tight">
                Başvurunuz başarıyla alındı.
              </h1>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Podologlarımız en kısa sürede inceleyerek sizinle iletişime geçecektir.
              </p>
              <div className="mt-8">
                <Button
                  type="button"
                  onClick={resetForm}
                  variant="outline"
                  className="border-blue-200 text-blue-800 hover:bg-blue-50"
                  data-testid="success-new"
                >
                  Yeni başvuru gönder
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Ücretsiz Ön Değerlendirme - Medipodo Podoloji Merkezi</title>
        <meta
          name="description"
          content="Ayak veya tırnak probleminizin fotoğraflarını gönderin. Uzman podolog ekibimiz ücretsiz ön değerlendirme yaparak 24 saat içinde sizinle iletişime geçsin."
        />
        <link rel="canonical" href="https://medipodo.com/ucretsiz-on-degerlendirme" />
        <meta property="og:title" content="Ücretsiz Ön Değerlendirme - Medipodo" />
        <meta
          property="og:description"
          content="Fotoğraflarınızı gönderin, uzman podolog ekibimiz ücretsiz ön değerlendirme yapsın."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://medipodo.com/ucretsiz-on-degerlendirme" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-blue-50/40 via-white to-white" data-testid="on-degerlendirme-page">
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              {/* Podolog Serdar Ceylan */}
              <div className="flex flex-col items-center mb-6">
                <div className="relative">
                  <img
                    src="/images/team/podolog-serdar-ceylan.webp"
                    alt="Podolog Serdar Ceylan - Medipodo Ankara"
                    className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-xl ring-2 ring-blue-100"
                    loading="eager"
                    fetchPriority="high"
                    width="128"
                    height="128"
                  />
                  <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
                </div>
                <p className="mt-3 text-sm md:text-base font-semibold text-blue-950">
                  Podolog Serdar Ceylan
                </p>
                <p className="text-xs text-gray-500">Medipodo Ayak Sağlığı Merkezi</p>
              </div>
              <h1
                className="text-4xl md:text-5xl font-bold text-blue-950 mb-5 leading-tight"
                data-testid="page-title"
              >
                Ücretsiz Ön Değerlendirme
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ayağınızla veya tırnağınızla ilgili bir sorununuz mu var?
                <br className="hidden md:block" />
                Birkaç fotoğraf yükleyin, podologlarımız bakıp en kısa sürede size dönsün.
              </p>
            </div>

            {/* Trust Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mt-12">
              {TRUST_CARDS.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <Card
                    key={card.title}
                    className="border-blue-100/80 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    data-testid={`trust-card-${idx}`}
                  >
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-blue-700" size={22} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-950 mb-1 flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-green-600" />
                          {card.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <form
              onSubmit={handleSubmit}
              className="max-w-4xl mx-auto"
              data-testid="on-degerlendirme-form"
              noValidate
            >
              <Card className="shadow-xl border-blue-100">
                <CardContent className="p-6 md:p-10 space-y-10">
                  {/* Kişisel Bilgiler */}
                  <FormSection
                    step="1"
                    title="Sizi Tanıyalım"
                    description="Dönüş yapabilmemiz için kısa birkaç bilgiye ihtiyacımız var."
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field label="Ad Soyad">
                        <Input
                          type="text"
                          placeholder="Adınız ve soyadınız (isteğe bağlı)"
                          value={form.fullName}
                          onChange={(e) => updateField('fullName', e.target.value)}
                          data-testid="input-fullname"
                          className="h-11"
                        />
                      </Field>
                      <Field label="Telefon" required>
                        <Input
                          type="tel"
                          placeholder="0555 555 55 55"
                          value={form.phone}
                          onChange={(e) => updateField('phone', e.target.value)}
                          data-testid="input-phone"
                          required
                          className="h-11"
                        />
                        {touched && !form.phone.trim() && (
                          <p className="text-xs text-red-600 mt-1">Telefon numarası zorunludur.</p>
                        )}
                      </Field>
                      <Field label="Yaş">
                        <Input
                          type="number"
                          min="1"
                          max="120"
                          placeholder="Örn: 42"
                          value={form.age}
                          onChange={(e) => updateField('age', e.target.value)}
                          data-testid="input-age"
                          className="h-11"
                        />
                      </Field>
                      <Field label="Cinsiyet">
                        <RadioGroup
                          value={form.gender}
                          onValueChange={(v) => updateField('gender', v)}
                          className="flex flex-wrap gap-3"
                          data-testid="radio-gender"
                        >
                          {['Kadın', 'Erkek', 'Belirtmek istemiyorum'].map((g) => (
                            <label
                              key={g}
                              className={`cursor-pointer flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all ${
                                form.gender === g
                                  ? 'border-blue-700 bg-blue-50 text-blue-900 ring-2 ring-blue-200'
                                  : 'border-gray-200 hover:border-blue-300 text-gray-700'
                              }`}
                            >
                              <RadioGroupItem value={g} className="border-blue-300" />
                              <span className="text-sm font-medium">{g}</span>
                            </label>
                          ))}
                        </RadioGroup>
                      </Field>
                    </div>
                  </FormSection>

                  <Divider />

                  {/* Kronik Rahatsızlıklar */}
                  <FormSection
                    step="2"
                    title="Bilinen Bir Rahatsızlığınız Var mı?"
                    description="Varsa işaretleyin, yoksa 'Hiçbiri'yi seçebilirsiniz."
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {CHRONIC_CONDITIONS.map((cond) => {
                        const id = `chronic-${cond}`;
                        const checked = form.chronic.includes(cond);
                        return (
                          <label
                            key={cond}
                            htmlFor={id}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-all ${
                              checked
                                ? 'border-blue-700 bg-blue-50'
                                : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/40'
                            }`}
                          >
                            <Checkbox
                              id={id}
                              checked={checked}
                              onCheckedChange={() =>
                                toggleArrayField('chronic', cond, 'Hiçbiri')
                              }
                              data-testid={`chronic-${cond.replace(/\s+/g, '-').toLowerCase()}`}
                            />
                            <span className="text-sm font-medium text-gray-800">{cond}</span>
                          </label>
                        );
                      })}
                    </div>
                  </FormSection>

                  <Divider />

                  {/* İlaçlar */}
                  <FormSection
                    step="3"
                    title="Düzenli Kullandığınız İlaçlar"
                    description="İsterseniz boş bırakabilirsiniz."
                  >
                    <Textarea
                      placeholder="Örn. tansiyon ilacı, kan sulandırıcı… (isteğe bağlı)"
                      value={form.medications}
                      onChange={(e) => updateField('medications', e.target.value)}
                      rows={3}
                      className="resize-none"
                      data-testid="textarea-medications"
                    />
                  </FormSection>

                  <Divider />

                  {/* Şikayetiniz */}
                  <FormSection
                    step="4"
                    title="Sizi En Çok Ne Rahatsız Ediyor?"
                    description="Ne zaman başladı, nasıl bir his veriyor? Detay arttıkça değerlendirme isabetli olur."
                    required
                  >
                    <Textarea
                      placeholder="Örn. 2 haftadır sağ ayak başparmağımda batma hissi var, kızarıklık oluştu…"
                      value={form.complaint}
                      onChange={(e) => updateField('complaint', e.target.value)}
                      rows={6}
                      className="resize-none"
                      data-testid="textarea-complaint"
                      required
                    />
                    {touched && !form.complaint.trim() && (
                      <p className="text-xs text-red-600 mt-1">Lütfen şikayetinizi kısaca yazın.</p>
                    )}
                  </FormSection>

                  <Divider />

                  {/* Ağrı Seviyesi */}
                  <FormSection
                    step="5"
                    title="Ağrınız Ne Kadar?"
                    description="0: hiç ağrı yok · 10: dayanılmaz ağrı"
                  >
                    <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-5">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-600">Ağrı seviyesi</span>
                        <span
                          className="inline-flex items-center justify-center min-w-[3rem] h-10 px-3 rounded-lg bg-blue-700 text-white font-bold text-lg"
                          data-testid="pain-value"
                        >
                          {form.painLevel}
                        </span>
                      </div>
                      <Slider
                        value={[form.painLevel]}
                        onValueChange={(val) => updateField('painLevel', val[0])}
                        min={0}
                        max={10}
                        step={1}
                        data-testid="slider-pain"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-3">
                        <span className="text-green-600 font-medium">0 · Ağrı yok</span>
                        <span>5 · Orta</span>
                        <span className="text-red-600 font-medium">10 · Çok şiddetli</span>
                      </div>
                    </div>
                  </FormSection>

                  <Divider />

                  {/* Sorunlu Bölge */}
                  <FormSection
                    step="6"
                    title="Sorun Nerede?"
                    description="Birden fazla bölge seçebilirsiniz."
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {PROBLEM_AREAS.map((area) => {
                        const id = `area-${area}`;
                        const checked = form.problemAreas.includes(area);
                        return (
                          <label
                            key={area}
                            htmlFor={id}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-all ${
                              checked
                                ? 'border-blue-700 bg-blue-50'
                                : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/40'
                            }`}
                          >
                            <Checkbox
                              id={id}
                              checked={checked}
                              onCheckedChange={() => toggleArrayField('problemAreas', area)}
                              data-testid={`area-${area.replace(/\s+/g, '-').toLowerCase()}`}
                            />
                            <span className="text-sm font-medium text-gray-800">{area}</span>
                          </label>
                        );
                      })}
                    </div>
                  </FormSection>

                  <Divider />

                  {/* Sorun Hangi Ayakta */}
                  <FormSection
                    step="7"
                    title="Hangi Ayağınızda?"
                    description="Şikayetin olduğu ayağı seçin."
                    required
                  >
                    <RadioGroup
                      value={form.foot}
                      onValueChange={(v) => updateField('foot', v)}
                      className="grid grid-cols-1 sm:grid-cols-3 gap-3"
                      data-testid="radio-foot"
                    >
                      {['Sol', 'Sağ', 'Her İkisi'].map((opt) => (
                        <label
                          key={opt}
                          className={`cursor-pointer flex items-center justify-center gap-2 px-4 py-4 rounded-lg border-2 transition-all font-medium ${
                            form.foot === opt
                              ? 'border-blue-700 bg-blue-50 text-blue-900 shadow-sm'
                              : 'border-gray-200 hover:border-blue-300 text-gray-700'
                          }`}
                        >
                          <RadioGroupItem value={opt} className="border-blue-300" />
                          {opt}
                        </label>
                      ))}
                    </RadioGroup>
                    {touched && !form.foot && (
                      <p className="text-xs text-red-600 mt-1">Lütfen bir seçim yapınız.</p>
                    )}
                  </FormSection>

                  <Divider />

                  {/* Fotoğraf Yükleme */}
                  <FormSection
                    step="8"
                    title="Fotoğraflarınızı Ekleyin"
                    description="Net ve aydınlık çekimler daha doğru değerlendirme sağlar. En fazla 5 fotoğraf."
                  >
                    <div
                      onDragOver={(e) => {
                        e.preventDefault();
                        setIsDragging(true);
                      }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={onDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`group cursor-pointer border-2 border-dashed rounded-xl p-8 md:p-10 text-center transition-all ${
                        isDragging
                          ? 'border-blue-700 bg-blue-50'
                          : 'border-blue-200 hover:border-blue-500 hover:bg-blue-50/60 bg-blue-50/30'
                      }`}
                      data-testid="dropzone"
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
                        multiple
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files) handleFiles(e.target.files);
                          e.target.value = '';
                        }}
                        data-testid="file-input"
                      />
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white border border-blue-100 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                        <UploadCloud className="text-blue-700" size={28} />
                      </div>
                      <p className="text-blue-950 font-semibold mb-1">
                        Fotoğrafları buraya sürükleyin
                      </p>
                      <p className="text-sm text-gray-600">
                        veya <span className="text-blue-700 font-medium">tıklayıp seçin</span> · JPG, PNG, WEBP · en fazla 5 adet
                      </p>
                    </div>

                    {form.images.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-5" data-testid="image-previews">
                        {form.images.map((img) => (
                          <div
                            key={img.id}
                            className="relative group aspect-square rounded-lg overflow-hidden border border-blue-100 bg-gray-50 shadow-sm"
                          >
                            <img
                              src={img.url}
                              alt={img.name}
                              className="w-full h-full object-cover"
                            />
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeImage(img.id);
                              }}
                              className="absolute top-1.5 right-1.5 w-7 h-7 rounded-full bg-white/90 hover:bg-red-500 hover:text-white text-gray-800 flex items-center justify-center shadow-md transition-colors"
                              aria-label="Fotoğrafı kaldır"
                              data-testid={`remove-image-${img.id}`}
                            >
                              <X size={14} />
                            </button>
                            <div className="absolute bottom-0 left-0 right-0 px-2 py-1 bg-gradient-to-t from-black/60 to-transparent text-white text-[10px] truncate flex items-center gap-1">
                              <ImageIcon size={10} />
                              <span className="truncate">{img.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <p className="text-xs text-gray-500 mt-3">
                      {form.images.length}/{MAX_IMAGES} fotoğraf yüklendi
                    </p>
                  </FormSection>

                  <Divider />

                  {/* KVKK */}
                  <FormSection step="9" title="Son Bir Onay" required>
                    <label
                      htmlFor="kvkk"
                      className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${
                        form.kvkk
                          ? 'border-blue-700 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <Checkbox
                        id="kvkk"
                        checked={form.kvkk}
                        onCheckedChange={(v) => updateField('kvkk', Boolean(v))}
                        className="mt-1"
                        data-testid="checkbox-kvkk"
                      />
                      <span className="text-sm text-gray-700 leading-relaxed">
                        Verilerimin yalnızca <strong className="text-blue-950">ön değerlendirme amacıyla</strong> kullanılmasını kabul ediyorum.
                        Bilgileriniz KVKK kapsamında korunur, üçüncü kişilerle paylaşılmaz.
                      </span>
                    </label>
                    {touched && !form.kvkk && (
                      <p className="text-xs text-red-600 mt-1">Gönderebilmemiz için onay vermeniz gerekiyor.</p>
                    )}
                  </FormSection>

                  {/* Submit */}
                  <div className="pt-2">
                    {submitState === 'error' && submitError && (
                      <div
                        className="mb-3 p-3 rounded-lg border border-red-200 bg-red-50 text-red-700 text-sm flex items-start gap-2"
                        data-testid="submit-error"
                      >
                        <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                        <span>{submitError}</span>
                      </div>
                    )}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitState === 'submitting'}
                      className="w-full h-14 text-base font-semibold bg-blue-700 hover:bg-blue-800 text-white shadow-lg hover:shadow-xl transition-all rounded-xl disabled:opacity-70 disabled:cursor-not-allowed"
                      data-testid="submit-button"
                    >
                      {submitState === 'submitting' ? (
                        <>
                          <Loader2 size={18} className="mr-2 animate-spin" />
                          Gönderiliyor…
                        </>
                      ) : (
                        '📸 Podoloğa Gönder'
                      )}
                    </Button>
                    <p className="text-center text-xs text-gray-500 mt-3">
                      Gönderdikten sonra podoloğumuz en geç 24 saat içinde size dönüş yapacak.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

const FormSection = ({ step, title, description, required, children }) => (
  <div className="space-y-4">
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-700 text-white text-sm font-bold flex items-center justify-center mt-0.5">
        {step}
      </div>
      <div className="flex-1">
        <h2 className="text-lg md:text-xl font-bold text-blue-950">
          {title}
          {required && <span className="text-red-500 ml-1">*</span>}
        </h2>
        {description && (
          <p className="text-sm text-gray-600 mt-0.5">{description}</p>
        )}
      </div>
    </div>
    <div className="pl-0 md:pl-11">{children}</div>
  </div>
);

const Field = ({ label, required, className = '', children }) => (
  <div className={`space-y-1.5 ${className}`}>
    <Label className="text-sm font-medium text-gray-700">
      {label}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </Label>
    {children}
  </div>
);

const Divider = () => <div className="border-t border-gray-100" />;

export default OnDegerlendirme;
