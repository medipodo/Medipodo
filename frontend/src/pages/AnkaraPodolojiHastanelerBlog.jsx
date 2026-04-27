
Action: file_editor view /app/output/frontend/src/pages/AnkaraPodolojiHastanelerBlog.jsx
Observation: [Showing lines 1-200 of 591 total] /app/output/frontend/src/pages/AnkaraPodolojiHastanelerBlog.jsx:
1|import React, { useState, useEffect } from 'react';
2|import { Link } from 'react-router-dom';
3|import { Clock, User, ArrowLeft, Phone, ChevronDown, ChevronUp, MessageCircle, Hospital, ShieldCheck, Footprints, AlertTriangle } from 'lucide-react';
4|import { Helmet } from 'react-helmet';
5|
6|const AnkaraPodolojiHastanelerBlog = () => {
7|  const [openFaqIndex, setOpenFaqIndex] = useState(null);
8|
9|  useEffect(() => {
10|    window.scrollTo(0, 0);
11|  }, []);
12|
13|  const toggleFaq = (index) => {
14|    setOpenFaqIndex(openFaqIndex === index ? null : index);
15|  };
16|
17|  const faqItems = [
18|    {
19|      question: "Devlet hastanesinde podolog var mı?",
20|      answer: "Genellikle ayrı bir podoloji bölümü bulunmaz. Hizmet ortopedi veya dermatoloji altında verilir."
21|    },
22|    {
23|      question: "Podoloji ücretli mi?",
24|      answer: "Evet, podoloji hizmetleri çoğunlukla özel kapsamda sunulur."
25|    },
26|    {
27|      question: "Batık tırnak için hastane mi podolog mu?",
28|      answer: "Hafif ve orta vakalarda podolog, ileri vakalarda hastane tercih edilir."
29|    },
30|    {
31|      question: "Tırnak mantarı için nereye gidilmeli?",
32|      answer: "İlaç tedavisi için dermatoloji, bakım süreci için podolog tercih edilmelidir."
33|    }
34|  ];
35|
36|  const faqSchema = {
37|    "@context": "https://schema.org",
38|    "@type": "FAQPage",
39|    "mainEntity": faqItems.map(item => ({
40|      "@type": "Question",
41|      "name": item.question,
42|      "acceptedAnswer": {
43|        "@type": "Answer",
44|        "text": item.answer
45|      }
46|    }))
47|  };
48|
49|  const articleSchema = {
50|    "@context": "https://schema.org",
51|    "@type": "Article",
52|    "headline": "Ankara'da Podoloji Bölümü Olan Hastaneler",
53|    "description": "Ankara'da podoloji hizmeti veren hastaneler hangileri? Devlet hastanesinde podoloji var mı? SGK karşılıyor mu? Detaylı rehber.",
54|    "image": "https://medipodo.com/blog-images/ankara-podoloji/ankarada-podoloji-olan-hastaneler.webp",
55|    "author": {
56|      "@type": "Organization",
57|      "name": "Medipodo"
58|    },
59|    "publisher": {
60|      "@type": "Organization",
61|      "name": "Medipodo",
62|      "logo": {
63|        "@type": "ImageObject",
64|        "url": "https://medipodo.com/images/logo.png"
65|      }
66|    },
67|    "mainEntityOfPage": "https://medipodo.com/blog/ankara-podoloji-bolumu-olan-hastaneler"
68|  };
69|
70|  const breadcrumbSchema = {
71|    "@context": "https://schema.org",
72|    "@type": "BreadcrumbList",
73|    "itemListElement": [
74|      { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://medipodo.com/" },
75|      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://medipodo.com/blog" },
76|      { "@type": "ListItem", "position": 3, "name": "Ankara'da Podoloji Bölümü Olan Hastaneler", "item": "https://medipodo.com/blog/ankara-podoloji-bolumu-olan-hastaneler" }
77|    ]
78|  };
79|
80|  return (
81|    <>
82|      <Helmet>
83|        <title>Ankara'da Podoloji Bölümü Olan Hastaneler | Medipodo</title>
84|        <meta name="description" content="Ankara'da podoloji hizmeti veren hastaneler hangileri? Devlet hastanesinde podoloji var mı? SGK karşılıyor mu? Tüm detaylar bu rehberde." />
85|        <meta name="keywords" content="ankara podoloji hastaneleri, ankara podoloji bölümü olan hastaneler, devlet hastanesinde podoloji, sgk podoloji, başkent üniversitesi podoloji, acıbadem podoloji, podolog ankara" />
86|        <link rel="canonical" href="https://medipodo.com/blog/ankara-podoloji-bolumu-olan-hastaneler" />
87|
88|        <meta property="og:type" content="article" />
89|        <meta property="og:title" content="Ankara'da Podoloji Bölümü Olan Hastaneler" />
90|        <meta property="og:description" content="Ankara'da podoloji hizmeti veren hastaneler hangileri? Devlet hastanesinde podoloji var mı? SGK karşılıyor mu? Tüm detaylar bu rehberde." />
91|        <meta property="og:image" content="https://medipodo.com/blog-images/ankara-podoloji/ankarada-podoloji-olan-hastaneler.webp" />
92|        <meta property="og:url" content="https://medipodo.com/blog/ankara-podoloji-bolumu-olan-hastaneler" />
93|        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
94|        <meta property="og:locale" content="tr_TR" />
95|
96|        <meta name="twitter:card" content="summary_large_image" />
97|        <meta name="twitter:title" content="Ankara'da Podoloji Bölümü Olan Hastaneler" />
98|        <meta name="twitter:description" content="Ankara'da podoloji hizmeti veren hastaneler hangileri? SGK karşılıyor mu? Detaylı rehber." />
99|        <meta name="twitter:image" content="https://medipodo.com/blog-images/ankara-podoloji/ankarada-podoloji-olan-hastaneler.webp" />
100|
101|        <script type="application/ld+json">
102|          {JSON.stringify(articleSchema)}
103|        </script>
104|        <script type="application/ld+json">
105|          {JSON.stringify(faqSchema)}
106|        </script>
107|        <script type="application/ld+json">
108|          {JSON.stringify(breadcrumbSchema)}
109|        </script>
110|      </Helmet>
111|
112|      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
113|        {/* Hero */}
114|        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-32 pb-16">
115|          <div className="container mx-auto px-4">
116|            <Link to="/blog" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors" data-testid="back-to-blog">
117|              <ArrowLeft size={20} className="mr-2" />
118|              Blog'a Dön
119|            </Link>
120|
121|            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" data-testid="blog-title">
122|              Ankara'da Podoloji Bölümü<br />
123|              <span className="text-blue-200">Olan Hastaneler</span>
124|            </h1>
125|
126|            <div className="flex flex-wrap gap-6 text-blue-100">
127|              <div className="flex items-center">
128|                <User size={18} className="mr-2" />
129|                <span>Podolog Serdar Ceylan</span>
130|              </div>
131|              <div className="flex items-center">
132|                <Clock size={18} className="mr-2" />
133|                <span>Medipodo · 9 dakika okuma</span>
134|              </div>
135|            </div>
136|          </div>
137|        </div>
138|
139|        {/* Content */}
140|        <div className="container mx-auto px-4 py-12">
141|          <div className="max-w-4xl mx-auto">
142|
143|            {/* Giriş */}
144|            <section className="mb-10">
145|              <p className="text-xl text-gray-700 leading-relaxed mb-6">
146|                Ankara'da podoloji hizmeti arayanların ilk baktığı yer genellikle hastaneler oluyor. Ancak çoğu kişinin bilmediği önemli bir detay var: Türkiye'de podoloji, her hastanede bağımsız bir bölüm olarak yer almaz.
147|              </p>
148|              <p className="text-lg text-gray-700 leading-relaxed mb-6">
149|                Bu yüzden "Ankara'da podoloji var mı?" sorusunun cevabı çoğu zaman beklenenden farklıdır.
150|              </p>
151|              <p className="text-lg text-gray-700 leading-relaxed mb-6 bg-blue-50 p-4 rounded-lg border-l-2 border-blue-400 italic">
152|                Ayrıca en çok merak edilen konulardan biri de şudur: SGK podoloji hizmetini karşılıyor mu?
153|              </p>
154|              <p className="text-lg text-gray-700 leading-relaxed">
155|                Bu içerikte Ankara'da podoloji hizmeti sunan hastaneleri, bu hizmetin kapsamını ve hangi durumda nereye başvurmanız gerektiğini net şekilde bulabilirsiniz.
156|              </p>
157|            </section>
158|
159|            {/* Kapak Görseli */}
160|            <div className="mb-12">
161|              <img
162|                src="https://medipodo.com/blog-images/ankara-podoloji/ankarada-podoloji-olan-hastaneler.webp"
163|                alt="Ankara'da podoloji bölümü olan hastaneler - kapsamlı rehber"
164|                width="1200"
165|                height="675"
166|                className="w-full h-auto rounded-xl shadow-lg"
167|                loading="eager"
168|              />
169|            </div>
170|
171|            {/* Öne Çıkan Snippet Cevap */}
172|            <section className="mb-12">
173|              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 rounded-xl p-6 md:p-8 shadow-sm">
174|                <h2 className="text-xl md:text-2xl font-bold text-blue-950 mb-3">
175|                  Ankara'da podoloji bölümü olan hastaneler hangileridir?
176|                </h2>
177|                <p className="text-gray-700 leading-relaxed">
178|                  Ankara'da podoloji hizmeti sunan başlıca hastaneler; <strong>Başkent Üniversitesi Hastanesi</strong>, <strong>Acıbadem Ankara Hastanesi</strong> ve <strong>Kızılay Sağlık Merkezi</strong>'dir. Devlet hastanelerinde ise podoloji genellikle ayrı bir bölüm olarak bulunmaz, ortopedi veya dermatoloji altında hizmet verilir.
179|                </p>
180|              </div>
181|            </section>
182|
183|            {/* ==================== */}
184|            {/* HASTANELER */}
185|            {/* ==================== */}
186|            <section className="mb-12">
187|              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
188|                Ankara'da Podoloji Hizmeti Veren Hastaneler
189|              </h2>
190|              <p className="text-lg text-gray-700 leading-relaxed mb-8">
191|                Ankara'da podoloji hizmeti sunan hastane sayısı oldukça sınırlıdır ve bu hizmet genellikle özel hastanelerde bulunur.
192|              </p>
193|
194|              <div className="mb-6 bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-400">
195|                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
196|                  <Hospital size={22} className="text-blue-500 mr-2" />
197|                  Başkent Üniversitesi Hastanesi
198|                </h3>
199|                <p className="text-gray-700 leading-relaxed">
200|                  Podoloji hizmeti bulunan sayılı özel hastanelerden biridir. Ayak sağlığına yönelik bakım ve uygulamalar yapılmaktadır.
 [200 lines shown. Remaining: lines 201-591 (391 lines). Use view_range parameter to continue.]
 
Action: file_editor view /app/output/frontend/src/pages/AnkaraPodolojiHastanelerBlog.jsx
Observation: [Showing lines 201-400 of 591 total] /app/output/frontend/src/pages/AnkaraPodolojiHastanelerBlog.jsx:
201|                </p>
202|              </div>
203|
204|              <div className="mb-6 bg-white rounded-xl shadow-md p-6 border-l-4 border-teal-400">
205|                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
206|                  <Hospital size={22} className="text-teal-500 mr-2" />
207|                  Acıbadem Ankara Hastanesi
208|                </h3>
209|                <p className="text-gray-700 leading-relaxed">
210|                  Ayak sağlığı ve podoloji kapsamında hizmet sunan özel hastaneler arasında yer alır.
211|                </p>
212|              </div>
213|
214|              <div className="mb-6 bg-white rounded-xl shadow-md p-6 border-l-4 border-amber-400">
215|                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
216|                  <Hospital size={22} className="text-amber-500 mr-2" />
217|                  Kızılay Sağlık Merkezi
218|                </h3>
219|                <p className="text-gray-700 leading-relaxed">
220|                  Podoloji hizmeti sunan merkezlerden biridir. Daha çok temel bakım uygulamaları yapılır.
221|                </p>
222|              </div>
223|
224|              <div className="mb-6 bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-400">
225|                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
226|                  <Hospital size={22} className="text-purple-500 mr-2" />
227|                  Ankara Üniversitesi (Cebeci Yerleşkesi)
228|                </h3>
229|                <p className="text-gray-700 leading-relaxed">
230|                  Podoloji eğitimi ve uygulamaları bulunan akademik bir yapıdır. Klinik hizmetten ziyade eğitim ağırlıklıdır.
231|                </p>
232|              </div>
233|            </section>
234|
235|            {/* ==================== */}
236|            {/* SGK */}
237|            {/* ==================== */}
238|            <section className="mb-12">
239|              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
240|                SGK Podoloji Hizmetini Karşılıyor mu?
241|              </h2>
242|              <p className="text-lg text-gray-700 leading-relaxed mb-6">
243|                SGK (Sosyal Güvenlik Kurumu) podoloji hizmetlerini genel olarak karşılamaz. Bunun temel nedeni, podoloji uygulamalarının çoğunlukla "bakım ve koruyucu hizmet" kapsamında değerlendirilmesidir.
244|              </p>
245|              <p className="text-gray-700 leading-relaxed mb-6">
246|                Devlet hastanelerinde ayak sağlığıyla ilgili işlemler yapılabilse de, bu hizmetler genellikle ortopedi, dermatoloji veya diyabetik ayak birimleri üzerinden yürütülür. Tıbbi tedavi gerektiren durumlarda SGK belirli işlemleri karşılayabilir.
247|              </p>
248|
249|              <p className="text-gray-700 mb-4 font-semibold">
250|                Ancak aşağıdaki podolojik uygulamalar çoğunlukla SGK kapsamına girmez:
251|              </p>
252|
253|              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
254|                <ul className="space-y-3 text-gray-700">
255|                  <li className="flex items-start">
256|                    <ShieldCheck size={18} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
257|                    <span>Batık tırnak bakımı (ameliyatsız)</span>
258|                  </li>
259|                  <li className="flex items-start">
260|                    <ShieldCheck size={18} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
261|                    <span>Nasır temizliği</span>
262|                  </li>
263|                  <li className="flex items-start">
264|                    <ShieldCheck size={18} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
265|                    <span>Medikal ayak bakımı</span>
266|                  </li>
267|                  <li className="flex items-start">
268|                    <ShieldCheck size={18} className="text-amber-600 mr-3 mt-1 flex-shrink-0" />
269|                    <span>Tırnak mantarında düzenli bakım süreçleri</span>
270|                  </li>
271|                </ul>
272|              </div>
273|
274|              <p className="text-gray-700 leading-relaxed mb-4">
275|                Özetle; podoloji hizmetleri büyük ölçüde özel hizmet olarak sunulur ve genellikle ücretlidir.
276|              </p>
277|
278|              <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg border-l-2 border-blue-400 italic">
279|                👉 Özellikle tekrar eden ayak problemlerinde düzenli bakım gerektiği için podoloji merkezleri daha sürdürülebilir bir çözüm sunar.
280|              </p>
281|            </section>
282|
283|            {/* ==================== */}
284|            {/* DEVLET HASTANELERI */}
285|            {/* ==================== */}
286|            <section className="mb-12">
287|              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
288|                Devlet Hastanelerinde Podoloji Var mı?
289|              </h2>
290|              <p className="text-lg text-gray-700 leading-relaxed mb-6">
291|                <strong>Kısa cevap:</strong> Genellikle yoktur.
292|              </p>
293|              <p className="text-gray-700 leading-relaxed mb-6">
294|                Devlet hastanelerinde "podoloji" adıyla ayrı bir bölüm çoğunlukla bulunmaz. Bunun yerine:
295|              </p>
296|
297|              <div className="grid md:grid-cols-3 gap-4 mb-6">
298|                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-blue-500">
299|                  <h3 className="font-bold text-gray-900 mb-2">Ortopedi</h3>
300|                  <p className="text-sm text-gray-600">Yapısal ve cerrahi değerlendirme</p>
301|                </div>
302|                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-teal-500">
303|                  <h3 className="font-bold text-gray-900 mb-2">Dermatoloji</h3>
304|                  <p className="text-sm text-gray-600">Cilt ve tırnak hastalıkları</p>
305|                </div>
306|                <div className="bg-white rounded-xl shadow-md p-5 border-t-4 border-amber-500">
307|                  <h3 className="font-bold text-gray-900 mb-2">Diyabetik Ayak Birimleri</h3>
308|                  <p className="text-sm text-gray-600">Diyabete bağlı ayak komplikasyonları</p>
309|                </div>
310|              </div>
311|
312|              <p className="text-gray-700 leading-relaxed">
313|                üzerinden dolaylı hizmet verilir. Bu nedenle kullanıcılar podoloji hizmeti olmadığını düşünebilir, ancak aslında hizmet farklı branşlar altında sunulmaktadır.
314|              </p>
315|            </section>
316|
317|            {/* ==================== */}
318|            {/* NEDEN SINIRLI */}
319|            {/* ==================== */}
320|            <section className="mb-12">
321|              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
322|                Hastanelerde Podoloji Hizmeti Neden Sınırlı?
323|              </h2>
324|              <p className="text-lg text-gray-700 leading-relaxed mb-6">
325|                Hastaneler daha çok:
326|              </p>
327|
328|              <ul className="space-y-2 text-gray-700 mb-6 bg-white rounded-xl shadow-md p-6">
329|                <li className="flex items-start"><span className="text-blue-500 mr-3 mt-1 font-bold">•</span>Tanı koyma</li>
330|                <li className="flex items-start"><span className="text-blue-500 mr-3 mt-1 font-bold">•</span>Tıbbi müdahale</li>
331|                <li className="flex items-start"><span className="text-blue-500 mr-3 mt-1 font-bold">•</span>Cerrahi işlemler</li>
332|              </ul>
333|
334|              <p className="text-gray-700 leading-relaxed mb-6">üzerine odaklanır. Bu nedenle:</p>
335|
336|              <ul className="space-y-2 text-gray-700 mb-6 bg-amber-50 rounded-xl p-6 border border-amber-200">
337|                <li className="flex items-start"><span className="text-amber-600 mr-3 mt-1 font-bold">•</span>Uzun süreli bakım süreçleri</li>
338|                <li className="flex items-start"><span className="text-amber-600 mr-3 mt-1 font-bold">•</span>Kişiye özel düzenli uygulamalar</li>
339|                <li className="flex items-start"><span className="text-amber-600 mr-3 mt-1 font-bold">•</span>Tekrarlayan ayak problemleri</li>
340|              </ul>
341|
342|              <p className="text-gray-700 leading-relaxed">genellikle sınırlı kalır.</p>
343|            </section>
344|
345|            {/* ==================== */}
346|            {/* MERKEZ vs HASTANE */}
347|            {/* ==================== */}
348|            <section className="mb-12">
349|              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
350|                Podoloji Merkezi ile Hastane Arasındaki Fark
351|              </h2>
352|              <p className="text-lg text-gray-700 leading-relaxed mb-8">
353|                Podoloji merkezleri özellikle bakım ve süreç yönetiminde öne çıkar.
354|              </p>
355|
356|              <p className="text-gray-700 mb-4 font-semibold">Örnek olarak:</p>
357|
358|              <div className="grid md:grid-cols-3 gap-6 mb-6">
359|                <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
360|                  <h3 className="font-bold text-gray-900 mb-2">Batık Tırnak</h3>
361|                  <p className="text-gray-700 text-sm">Ameliyatsız çözümler</p>
362|                </div>
363|                <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-teal-500">
364|                  <h3 className="font-bold text-gray-900 mb-2">Nasır</h3>
365|                  <p className="text-gray-700 text-sm">Tekrar etmeyi önleyen uygulamalar</p>
366|                </div>
367|                <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-amber-500">
368|                  <h3 className="font-bold text-gray-900 mb-2">Tırnak Mantarı</h3>
369|                  <p className="text-gray-700 text-sm">Düzenli takip gerektirir</p>
370|                </div>
371|              </div>
372|
373|              <p className="text-gray-700 leading-relaxed">
374|                👉 Detaylı hizmetlere göz at: <Link to="/hizmetler" className="text-blue-600 hover:text-blue-800 font-semibold underline">Medipodo Hizmetlerimiz</Link>
375|              </p>
376|            </section>
377|
378|            {/* ==================== */}
379|            {/* HANGİ DURUMDA HANGİSİ */}
380|            {/* ==================== */}
381|            <section className="mb-12">
382|              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
383|                Hangi Durumda Hastane, Hangi Durumda Podolog?
384|              </h2>
385|
386|              <div className="grid md:grid-cols-2 gap-6 mb-6">
387|                <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-red-500">
388|                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
389|                    <Hospital size={20} className="text-red-500 mr-2" />
390|                    Hastane Tercih Edilmeli
391|                  </h3>
392|                  <ul className="space-y-2 text-gray-700">
393|                    <li className="flex items-start"><span className="text-red-500 mr-2 font-bold">•</span>Enfeksiyon varsa</li>
394|                    <li className="flex items-start"><span className="text-red-500 mr-2 font-bold">•</span>Diyabetik komplikasyon varsa</li>
395|                    <li className="flex items-start"><span className="text-red-500 mr-2 font-bold">•</span>Cerrahi gerekiyorsa</li>
396|                  </ul>
397|                </div>
398|                <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500">
399|                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
400|                    <Footprints size={20} className="text-green-500 mr-2" />
 [200 lines shown. Remaining: lines 401-591 (191 lines). Use view_range parameter to continue.]
 
Action: file_editor view /app/output/frontend/src/pages/AnkaraPodolojiHastanelerBlog.jsx
Observation: [Showing lines 401-591 of 591 total] /app/output/frontend/src/pages/AnkaraPodolojiHastanelerBlog.jsx:
401|                    Podoloji Merkezi Tercih Edilmeli
402|                  </h3>
403|                  <ul className="space-y-2 text-gray-700">
404|                    <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">•</span>Batık tırnak</li>
405|                    <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">•</span>Nasır</li>
406|                    <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">•</span>Tırnak mantarı</li>
407|                    <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">•</span>Düzenli ayak bakımı</li>
408|                  </ul>
409|                </div>
410|              </div>
411|
412|              <p className="text-gray-700 leading-relaxed">
413|                👉 Batık tırnak hakkında detay: <Link to="/blog/batik-tirnak-nedenleri" className="text-blue-600 hover:text-blue-800 font-semibold underline">Batık Tırnak Nedenleri</Link>
414|              </p>
415|            </section>
416|
417|            {/* ==================== */}
418|            {/* ÖNERİ */}
419|            {/* ==================== */}
420|            <section className="mb-12">
421|              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
422|                Ankara'da Podoloji Hizmeti Arayanlar İçin Öneri
423|              </h2>
424|              <p className="text-lg text-gray-700 leading-relaxed mb-6">
425|                Eğer sadece geçici çözüm değil, aynı zamanda:
426|              </p>
427|
428|              <div className="bg-blue-50 rounded-xl p-6 mb-6">
429|                <div className="space-y-3">
430|                  <div className="flex items-center bg-white p-3 rounded-lg">
431|                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
432|                    <span className="text-gray-700 font-medium">Düzenli takip</span>
433|                  </div>
434|                  <div className="flex items-center bg-white p-3 rounded-lg">
435|                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
436|                    <span className="text-gray-700 font-medium">Tekrar etmeyen sonuç</span>
437|                  </div>
438|                  <div className="flex items-center bg-white p-3 rounded-lg">
439|                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
440|                    <span className="text-gray-700 font-medium">Kişiye özel bakım</span>
441|                  </div>
442|                </div>
443|              </div>
444|
445|              <p className="text-gray-700 leading-relaxed mb-4">
446|                arıyorsanız, podoloji merkezleri daha doğru bir tercih olabilir.
447|              </p>
448|
449|              <p className="text-gray-700 leading-relaxed">
450|                👉 Ücretsiz analiz hakkında bilgi: <Link to="/ayak-analizi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Ayak Analizi</Link>
451|              </p>
452|            </section>
453|
454|            {/* ==================== */}
455|            {/* WHATSAPP CTA - ORTA */}
456|            {/* ==================== */}
457|            <section className="mb-12">
458|              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 md:p-8 text-white">
459|                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
460|                  <div className="flex items-center">
461|                    <MessageCircle size={32} className="mr-4 flex-shrink-0" />
462|                    <div>
463|                      <p className="font-bold text-lg">Podoloji hizmeti hakkında sorunuz mu var?</p>
464|                      <p className="text-green-100">Durumunuza özel bilgi almak için WhatsApp üzerinden fotoğraf göndererek ön değerlendirme talep edebilirsiniz.</p>
465|                    </div>
466|                  </div>
467|                  <a
468|                    href="https://wa.me/905456569747?text=Merhaba,%20Ankara'da%20podoloji%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
469|                    target="_blank"
470|                    rel="noopener noreferrer"
471|                    className="bg-white text-green-600 px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-colors flex items-center whitespace-nowrap"
472|                    data-testid="whatsapp-mid-cta"
473|                  >
474|                    <MessageCircle size={20} className="mr-2" />
475|                    WhatsApp'tan Yazın
476|                  </a>
477|                </div>
478|              </div>
479|            </section>
480|
481|            {/* ==================== */}
482|            {/* SSS */}
483|            {/* ==================== */}
484|            <section className="mb-12">
485|              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
486|                Sıkça Sorulan Sorular (SSS)
487|              </h2>
488|
489|              <div className="space-y-4">
490|                {faqItems.map((item, index) => (
491|                  <div
492|                    key={index}
493|                    className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden"
494|                  >
495|                    <button
496|                      onClick={() => toggleFaq(index)}
497|                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
498|                      aria-expanded={openFaqIndex === index}
499|                      data-testid={`faq-toggle-${index}`}
500|                    >
501|                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
502|                        {item.question}
503|                      </h3>
504|                      <div className="flex-shrink-0">
505|                        {openFaqIndex === index ? (
506|                          <ChevronUp className="text-blue-700" size={24} />
507|                        ) : (
508|                          <ChevronDown className="text-gray-400" size={24} />
509|                        )}
510|                      </div>
511|                    </button>
512|                    {openFaqIndex === index && (
513|                      <div className="px-6 pb-5">
514|                        <p className="text-gray-700 leading-relaxed">
515|                          {item.answer}
516|                        </p>
517|                        {index === 3 && (
518|                          <p className="text-gray-600 mt-3">
519|                            Detaylı bilgi: <Link to="/blog/tirnak-mantari-tedavisi" className="text-blue-600 hover:text-blue-800 font-semibold underline">Tırnak Mantarı Tedavisi</Link>
520|                          </p>
521|                        )}
522|                      </div>
523|                    )}
524|                  </div>
525|                ))}
526|              </div>
527|            </section>
528|
529|            {/* ==================== */}
530|            {/* MEDIPODO BAĞLICA */}
531|            {/* ==================== */}
532|            <section className="mb-10">
533|              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
534|                Medipodo Ankara Bağlıca'da Podolojik Bakım
535|              </h2>
536|              <p className="text-lg text-gray-700 leading-relaxed mb-6">
537|                Medipodo olarak Ankara Bağlıca'da, ayak sağlığına yönelik podolojik bakım hizmetleri sunuyoruz. Her danışanın ihtiyacına göre planlanan bakım süreci ile ilerlenir.
538|              </p>
539|              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
540|                <p className="text-gray-700 leading-relaxed mb-4">
541|                  Hastane yerine düzenli takip gerektiren batık tırnak, nasır ve tırnak mantarı gibi konularda uzman desteği almak için podoloji merkezimiz ile iletişime geçebilirsiniz.
542|                </p>
543|                <p className="text-gray-700">
544|                  Hizmetlerimiz ve fiyatlarımız hakkında daha fazla bilgi için <Link to="/baglica-podolog-fiyatlari" className="text-blue-600 hover:text-blue-800 font-semibold underline">Bağlıca podolog fiyatları</Link> sayfamızı veya <Link to="/blog/podolog-fiyatlari-ankara" className="text-blue-600 hover:text-blue-800 font-semibold underline">Podolog Fiyatları Ankara</Link> rehberimizi inceleyebilirsiniz.
545|                </p>
546|              </div>
547|            </section>
548|
549|            {/* ==================== */}
550|            {/* SON CTA */}
551|            {/* ==================== */}
552|            <section className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl p-8 md:p-10 text-white text-center">
553|              <h2 className="text-2xl md:text-3xl font-bold mb-4">
554|                Profesyonel Podolojik Destek Alın
555|              </h2>
556|              <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
557|                Durumunuza özel bakım planı için bizimle iletişime geçebilirsiniz. WhatsApp üzerinden fotoğraf göndererek ön değerlendirme talep edebilirsiniz.
558|              </p>
559|              <div className="flex flex-wrap justify-center gap-4">
560|                <a
561|                  href="https://wa.me/905456569747?text=Merhaba,%20Ankara'da%20podoloji%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum"
562|                  target="_blank"
563|                  rel="noopener noreferrer"
564|                  className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-400 transition-all transform hover:scale-105 shadow-lg"
565|                  data-testid="whatsapp-bottom-cta"
566|                >
567|                  <MessageCircle className="mr-2" size={24} />
568|                  WhatsApp ile Yazın
569|                </a>
570|                <a
571|                  href="tel:05456569747"
572|                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
573|                >
574|                  <Phone className="mr-2" size={24} />
575|                  0545 656 97 47
576|                </a>
577|              </div>
578|              <p className="text-blue-200 mt-6 text-sm">
579|                Ankara Bağlıca'da profesyonel ayak bakımı hizmeti
580|              </p>
581|            </section>
582|
583|          </div>
584|        </div>
585|      </article>
586|    </>
587|  );
588|};
589|
590|export default AnkaraPodolojiHastanelerBlog;
591|
[End of file]
