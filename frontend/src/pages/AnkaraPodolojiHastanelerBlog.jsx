
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
54|    "image": "https://customer-assets.emergentagent.com/job_ee16882e-0172-4831-99c6-2da907c9d9d5/artifacts/atv5cvxu_ankarada-podoloji-olan-hastaneler.webp",
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
91|        <meta property="og:image" content="https://customer-assets.emergentagent.com/job_ee16882e-0172-4831-99c6-2da907c9d9d5/artifacts/atv5cvxu_ankarada-podoloji-olan-hastaneler.webp" />
92|        <meta property="og:url" content="https://medipodo.com/blog/ankara-podoloji-bolumu-olan-hastaneler" />
93|        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
94|        <meta property="og:locale" content="tr_TR" />
95|
96|        <meta name="twitter:card" content="summary_large_image" />
97|        <meta name="twitter:title" content="Ankara'da Podoloji Bölümü Olan Hastaneler" />
98|        <meta name="twitter:description" content="Ankara'da podoloji hizmeti veren hastaneler hangileri? SGK karşılıyor mu? Detaylı rehber." />
99|        <meta name="twitter:image" content="https://customer-assets.emergentagent.com/job_ee16882e-0172-4831-99c6-2da907c9d9d5/artifacts/atv5cvxu_ankarada-podoloji-olan-hastaneler.webp" />
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
162|                src="https://customer-assets.emergentagent.com/job_ee16882e-0172-4831-99c6-2da907c9d9d5/artifacts/atv5cvxu_ankarada-podoloji-olan-hastaneler.webp"
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
