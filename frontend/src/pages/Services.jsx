import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Scissors, ShieldCheck, Sparkles, CircleDot, Heart, Zap, Calendar, Clock } from 'lucide-react';
import { services, blogPosts } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

const iconMap = {
  Scissors, ShieldCheck, Sparkles, CircleDot, Heart, Zap
};

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Hizmetlerimiz - Medipodo Podoloji Merkezi | Ankara</title>
        <meta name="description" content="Medipodo'da sunulan profesyonel podoloji hizmetleri: Batık tırnak tedavisi, tırnak mantarı, nasır tedavisi, medikal ayak bakımı ve daha fazlası." />
        <link rel="canonical" href="https://medipodo.com/hizmetler" />
        
        {/* Open Graph Meta Tags - WhatsApp, Facebook, LinkedIn önizlemesi için */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hizmetlerimiz - Medipodo Podoloji Merkezi | Ankara" />
        <meta property="og:description" content="Medipodo'da sunulan profesyonel podoloji hizmetleri: Batık tırnak tedavisi, tırnak mantarı, nasır tedavisi, medikal ayak bakımı ve daha fazlası." />
        <meta property="og:image" content="https://medipodo.com/images/medipodo-og-home-v2.jpg" />
        <meta property="og:url" content="https://medipodo.com/hizmetler" />
        <meta property="og:site_name" content="Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:locale" content="tr_TR" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hizmetlerimiz - Medipodo Podoloji Merkezi" />
        <meta name="twitter:description" content="Profesyonel podoloji hizmetleri: Batık tırnak, tırnak mantarı, nasır tedavisi ve daha fazlası." />
        <meta name="twitter:image" content="https://medipodo.com/images/medipodo-og-home-v2.jpg" />
      </Helmet>
      
      <BreadcrumbSchema items={[
        { name: 'Ana Sayfa', url: 'https://medipodo.com/' },
        { name: 'Hizmetler', url: 'https://medipodo.com/hizmetler' }
      ]} />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">Hizmetlerimiz</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ayak sağlığınız için profesyonel podoloji hizmetleri. Modern ekipman ve uzman kadromuzla her türlü ayak problemi için çözüm sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Görsel - Kompakt Aspect Ratio - Tıklanabilir */}
                    <Link to={`/hizmet/${service.id}`} className="block">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </Link>
                    
                    {/* İçerik */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Icon ve Başlık */}
                      <div className="flex items-start space-x-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <Icon size={20} />
                        </div>
                        <Link to={`/hizmet/${service.id}`}>
                          <h3 className="text-xl font-semibold text-blue-950 line-clamp-2 group-hover:text-blue-700 transition-colors">
                            {service.title}
                          </h3>
                        </Link>
                      </div>
                      
                      {/* Açıklama */}
                      <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3 flex-grow text-sm">
                        {service.fullDesc}
                      </p>
                      
                      {/* Buton */}
                      <Link to={`/hizmet/${service.id}`} className="mt-auto">
                        <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white group-hover:shadow-lg transition-all">
                          Detaylı Bilgi
                          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* İlgili Blog Yazıları */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Hizmetlerimiz Hakkında Bilgi Edinin</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ayak sağlığı ve podolojik bakım hakkında faydalı bilgiler içeren blog yazılarımız
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.slice(0, 6).map((post) => (
              <Card key={post.id} className="hover:shadow-xl transition-all hover:-translate-y-1 bg-white border-0 shadow-md">
                <CardContent className="p-0">
                  <Link to={post.customUrl || `/blog/${post.slug}`} className="block">
                    <div className="relative aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <Link to={post.customUrl || `/blog/${post.slug}`}>
                      <h3 className="text-lg font-semibold text-blue-950 mb-2 line-clamp-2 hover:text-blue-700 transition-colors">{post.title}</h3>
                    </Link>
                    <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blog">
              <Button variant="outline" size="lg" className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50">
                Tüm Blog Yazılarını Gör
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Hangi Hizmetimiz Sizin İçin Uygun?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Emin değilseniz, uzman ekibimiz size en uygun tedaviyi belirlemek için yardımcı olacaktır.
          </p>
          <Link to="/iletisim">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg">
              Ücretsiz Danışma
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
      </div>
    </>
  );
};

export default Services;