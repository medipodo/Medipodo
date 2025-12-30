import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Medipodo Podoloji Merkezi | Ayak Sağlığı Makaleleri</title>
        <meta name="description" content="Ayak sağlığı, podoloji ve ayak bakımı hakkında faydalı bilgiler. Batık tırnak, tırnak mantarı, nasır ve daha fazlası." />
        <link rel="canonical" href="https://medipodo.com/blog" />
        
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
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">Blog & Haberler</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ayak sağlığı, podoloji ve genel sağlık hakkında uzman görüşleri ve faydalı bilgiler.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-0">
                  <Link to={`/blog/${post.slug}`} className="block">
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
                    <Link to={`/blog/${post.slug}`} className="block group">
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
                    <Link to={`/blog/${post.slug}`}>
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
        </div>
      </section>
      </div>
    </>
  );
};

export default Blog;