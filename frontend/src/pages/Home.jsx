import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Sparkles, ShieldCheck, Heart, Scissors, CircleDot, Zap } from 'lucide-react';
import { services, whyChooseUs, galleryImages, blogPosts } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import OptimizedImage from '../components/OptimizedImage';

const iconMap = {
  Award, Sparkles, ShieldCheck, Heart, Scissors, CircleDot, Zap
};

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFFM0E4QSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Ankara'nın Güvenilir Podoloji Merkezi
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 mb-6 leading-tight">
              Sağlıklı Ayaklar,
              <span className="block text-blue-700">Mutlu Yaşam</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              Profesyonel podoloji hizmetleri ile ayak sağlığınızda uzman yaklaşım. Modern teknikler ve deneyimli kadromuzla yanınızdayız.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/iletisim">
                <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 text-lg">
                  Randevu Alın
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/hizmetler">
                <Button size="lg" variant="outline" className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg">
                  Hizmetlerimiz
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Neden Medipodo?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ayak sağlığınız için en iyi hizmeti sunmak için burayız
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <Card key={index} className="border-2 hover:border-blue-300 transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-blue-700" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-950 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Hizmetlerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ayak sağlığınız için kapsamlı profesyonel hizmetler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Card key={service.id} className="hover:shadow-xl transition-all hover:-translate-y-1 bg-white overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="text-blue-700" size={20} />
                        </div>
                        <h3 className="text-xl font-semibold text-blue-950">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.shortDesc}</p>
                      <Link to={`/hizmet/${service.id}`}>
                        <Button variant="link" className="text-blue-700 p-0 h-auto font-semibold">
                          Detaylı Bilgi
                          <ArrowRight className="ml-1" size={16} />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link to="/hizmetler">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white">
                Tüm Hizmetleri Görün
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Önce & Sonra</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Profesyonel tedavilerimizin başarılı sonuçları
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.slice(0, 3).map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <OptimizedImage
                      src={item.before}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-blue-950 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/galeri">
              <Button size="lg" variant="outline" className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50">
                Tüm Galeriyi Görün
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Blog & Haberler</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ayak sağlığı hakkında faydalı bilgiler
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-950 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
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
          <div className="text-center mt-8">
            <Link to="/blog">
              <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white">
                Tüm Blog Yazıları
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ayak Sağlığınız İçin Hemen İletişime Geçin</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Uzman podoloji ekibimiz, ayak sağlığınız için size en uygun tedavi planını oluşturmaya hazır.
          </p>
          <Link to="/iletisim">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg">
              Randevu Alın
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;