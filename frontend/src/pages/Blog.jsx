import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Search, X } from 'lucide-react';
import { blogPosts } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

// Türkçe karakterleri normalize et (arama için):
// "İ" → "i", "Ş" → "s", "Ğ" → "g", vb. → büyük/küçük ve aksan farkını ortadan kaldırır
const normalize = (str = '') =>
  str
    .toLocaleLowerCase('tr-TR')
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .trim();

const Blog = () => {
  const [query, setQuery] = useState('');

  const filteredPosts = useMemo(() => {
    const q = normalize(query);
    if (!q) return blogPosts;
    return blogPosts.filter((post) => {
      const haystack = normalize(
        `${post.title} ${post.excerpt || ''} ${(post.tags || []).join(' ')}`
      );
      return haystack.includes(q);
    });
  }, [query]);

  const hasQuery = query.trim().length > 0;

  return (
    <>
      <Helmet>
        <title>Blog - Medipodo Podoloji Merkezi | Ayak Sağlığı Makaleleri</title>
        <meta name="description" content="Ayak sağlığı, podoloji ve ayak bakımı hakkında faydalı bilgiler. Batık tırnak, tırnak mantarı, nasır ve daha fazlası." />
        <link rel="canonical" href="https://medipodo.com/blog" />
        {/* Arama yapılırken noindex — duplicate içerik sinyali önler */}
        {hasQuery && <meta name="robots" content="noindex,follow" />}

        {/* Open Graph Meta Tags - WhatsApp, Facebook, LinkedIn önizlemesi için */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog - Medipodo Podoloji Merkezi | Ayak Sağlığı Makaleleri" />
        <meta property="og:description" content="Ayak sağlığı, podoloji ve ayak bakımı hakkında faydalı bilgiler. Batık tırnak, tırnak mantarı, nasır ve daha fazlası." />
        <meta property="og:image" content="https://medipodo.com/images/medipodo-og-home-v2.jpg" />
        <meta property="og:url" content="https://medipodo.com/blog" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - Medipodo Podoloji Merkezi" />
        <meta name="twitter:description" content="Ayak sağlığı, podoloji ve ayak bakımı hakkında faydalı bilgiler." />
        <meta name="twitter:image" content="https://medipodo.com/images/medipodo-og-home-v2.jpg" />
      </Helmet>

      <BreadcrumbSchema items={[
        { name: 'Ana Sayfa', url: 'https://medipodo.com/' },
        { name: 'Blog', url: 'https://medipodo.com/blog' }
      ]} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">Blog & Haberler</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Ayak sağlığı, podoloji ve genel sağlık hakkında uzman görüşleri ve faydalı bilgiler.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative" data-testid="blog-search-container">
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={20}
                    aria-hidden="true"
                  />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Aramak istediğiniz konu… (örn. tırnak mantarı, batık tırnak, nasır)"
                    aria-label="Blog yazılarında ara"
                    data-testid="blog-search-input"
                    className="w-full pl-12 pr-12 py-3.5 text-base bg-white border border-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
                  />
                  {hasQuery && (
                    <button
                      type="button"
                      onClick={() => setQuery('')}
                      aria-label="Aramayı temizle"
                      data-testid="blog-search-clear"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <X size={18} />
                    </button>
                  )}
                </div>

                {hasQuery && (
                  <p
                    className="mt-3 text-sm text-gray-600"
                    data-testid="blog-search-results-count"
                    aria-live="polite"
                  >
                    {filteredPosts.length > 0 ? (
                      <>
                        <span className="font-semibold text-blue-900">{filteredPosts.length}</span> sonuç bulundu
                      </>
                    ) : (
                      <>Sonuç bulunamadı</>
                    )}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {filteredPosts.length === 0 ? (
              <div
                className="max-w-xl mx-auto text-center py-12"
                data-testid="blog-no-results"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
                  <Search className="text-blue-400" size={28} aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-semibold text-blue-950 mb-2">
                  Aradığınız yazıya ulaşılamadı
                </h2>
                <p className="text-gray-600 mb-6">
                  "<span className="font-medium">{query}</span>" için sonuç yok. Farklı bir kelime deneyin veya tüm yazılara göz atın.
                </p>
                <Button
                  onClick={() => setQuery('')}
                  className="bg-blue-700 hover:bg-blue-800 text-white"
                  data-testid="blog-clear-and-show-all"
                >
                  Tüm yazıları göster
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-testid="blog-posts-grid">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-xl transition-all hover:-translate-y-1">
                    <CardContent className="p-0">
                      <Link to={post.customUrl || `/blog/${post.slug}`} className="block">
                        <div className="relative aspect-video overflow-hidden cursor-pointer">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      </Link>
                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-700">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Link to={post.customUrl || `/blog/${post.slug}`} className="block group">
                          <h2 className="text-2xl font-semibold text-blue-950 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors cursor-pointer">
                            {post.title}
                          </h2>
                        </Link>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <Calendar size={16} className="mr-1" />
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <Clock size={16} className="mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                        <Link to={post.customUrl || `/blog/${post.slug}`}>
                          <Button variant="link" className="text-blue-700 p-0 h-auto font-semibold">
                            Devamını Oku
                            <ArrowRight className="ml-1" size={16} />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
