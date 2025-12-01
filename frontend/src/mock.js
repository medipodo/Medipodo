// Mock Data for Medipodo Podology Center

import { enrichedBlogPosts } from './blog_content';

export const siteInfo = {
  name: 'Medipodo',
  fullName: 'Medipodo Ayak Bakımı',
  tagline: 'Profesyonel Podoloji ve Ayak Bakım Merkezi',
  phone: '0545 656 97 47',
  phoneLink: '05456569747',
  whatsapp: '905456569747',
  address: 'Bağlıca Mah. Mert Cad. 4/2 Etimesgut, Ankara',
  email: 'info@medipodo.com',
  mapCoordinates: { lat: 39.897085007400506, lng: 32.64813457116447 },
  workingHours: 'Pazartesi - Cumartesi: 09:00 - 18:00',
  logo: 'https://customer-assets.emergentagent.com/job_podotherapy/artifacts/b9h35axs_Adsız%20tasarım%20%281%29.png'
};

export const services = [
  {
    id: 'batik-tirnak',
    title: 'Batık Tırnak',
    shortDesc: 'Ağrısız, sancısız ortoniksi uygulamaları',
    fullDesc: 'Batık tırnak, tırnağın kenarlarının cilde batması sonucu oluşan ağrılı bir durumdur. Profesyonel podoloji yaklaşımımızla, ağrısız ve kalıcı çözümler sunuyoruz. Modern teknikler ve steril koşullarda gerçekleştirdiğimiz tedavilerimiz ile enfeksiyon riskini minimize ederken, hızlı iyileşme sağlıyoruz.',
    icon: 'Scissors',
    image: '/images/services/Batik-Tirnak-tedavisi.jpg',
    benefits: [
      'Ağrısız tedavi yöntemleri',
      'Kalıcı çözümler',
      'Enfeksiyon riski minimizasyonu',
      'Profesyonel hijyen standartları'
    ],
    process: [
      'Detaylı muayene ve analiz',
      'Steril aletlerle işlem',
      'Ağrı kontrolü ve rahatlama',
      'Takip ve bakım önerileri'
    ]
  },
  {
    id: 'tirnak-mantari',
    title: 'Tırnak Mantarı Tedavisi',
    shortDesc: 'Etkili tırnak mantarı tedavisi ile sağlıklı tırnaklar',
    fullDesc: 'Tırnak mantarı, tırnak yapısını bozan ve estetik sorunlara yol açan fungal bir enfeksiyondur. Modern tedavi yöntemlerimizle kalıcı çözüm sağlıyoruz. Uzman podologlarımız, kişiye özel tedavi planları hazırlayarak, tırnaklarınızın sağlığına kavuşmasını sağlar. Tedavi sürecinde düzenli takip ile başarı oranını maksimuma çıkarıyoruz.',
    icon: 'ShieldCheck',
    image: '/images/services/Tirnak-Mantari.jpg',
    benefits: [
      'Modern tedavi protokolleri',
      'Hızlı iyileşme süreci',
      'Tekrarlama riskini azaltma',
      'Kişiye özel tedavi planı'
    ],
    process: [
      'Fungal analiz ve teşhis',
      'Tedavi planlaması',
      'Düzenli uygulama seansları',
      'Kontrol ve koruyucu önlemler'
    ]
  },
  {
    id: 'topuk-bakimi',
    title: 'Topuk Bakımı ve Çatlak Tedavisi',
    shortDesc: 'Çatlak topuklar için profesyonel bakım ve tedavi',
    fullDesc: 'Topuk çatlakları ve kalınlaşmaları hem estetik hem de sağlık problemi oluşturabilir. Özel bakım protokollerimizle topuklarınızı yeniden sağlıklı hale getiriyoruz. Profesyonel peeling ve nemlendirme uygulamalarımız, cildinizin derinlemesine beslenmesini sağlar. Uzun süreli sonuçlar için evde bakım önerilerimizle sürecin devamını destekliyoruz.',
    icon: 'Sparkles',
    image: '/images/services/Topuk-Bakimi.jpg',
    benefits: [
      'Derinlemesine nemlendirme',
      'Kalınlaşmış deri temizliği',
      'Yumuşak ve sağlıklı cilt',
      'Uzun süreli sonuçlar'
    ],
    process: [
      'Cilt analizi',
      'Profesyonel peeling işlemi',
      'Özel bakım uygulaması',
      'Evde bakım önerileri'
    ]
  },
  {
    id: 'nasir-tedavisi',
    title: 'Nasır ve Kalınlaşma Tedavisi',
    shortDesc: 'Ağrılı nasırların profesyonel tedavisi',
    fullDesc: 'Ayak tabanında oluşan nasırlar ve kalınlaşmalar yürüme konforu ve yaşam kalitenizi olumsuz etkiler. Uzman podoloji hizmetimizle rahatlayın. Özel cihazlarımız ve profesyonel tekniklerimizle, nasırlarınızı ağrısız bir şekilde temizliyor, basınç noktalarınızı analiz ederek tekrar oluşumunu önlemeye yönelik öneriler sunuyoruz.',
    icon: 'CircleDot',
    image: '/images/services/Nasir-Kalinlasma.jpg',
    benefits: [
      'Ağrısız temizleme',
      'Anında rahatlama',
      'Tekrar oluşumu önleme',
      'Profesyonel cilt bakımı'
    ],
    process: [
      'Nasır analizi ve lokasyon tespiti',
      'Özel aletlerle temizlik',
      'Basınç noktası değerlendirmesi',
      'Önleyici öneriler'
    ]
  },
  {
    id: 'ayak-bakimi',
    title: 'Medikal Ayak Bakımı',
    shortDesc: 'Kapsamlı profesyonel ayak bakımı hizmeti',
    fullDesc: 'Ayaklarınızın sağlığı için kapsamlı bakım programı. Temizlikten bakıma, tırnak kesiminden cilt bakımına kadar tüm ihtiyaçlarınız için buradayız. Steril koşullarda, profesyonel ürünler kullanarak gerçekleştirdiğimiz medikal ayak bakımı, hem tedavi edici hem de rahatlat',
    icon: 'Heart',
    image: '/images/services/Medikal-Ayak-Bakimi.jpg',
    benefits: [
      'Komple ayak bakımı',
      'Hijyenik koşullar',
      'Profesyonel ürünler',
      'Rahatlatıcı deneyim'
    ],
    process: [
      'Genel ayak muayenesi',
      'Tırnak ve cilt bakımı',
      'Masaj ve nemlendirme',
      'Özel bakım önerileri'
    ]
  },
  {
    id: 'evde-bakim',
    title: 'Evde Medikal Ayak Bakımı',
    shortDesc: 'Evinizin konforunda profesyonel ayak bakımı hizmeti',
    fullDesc: 'Sağlık sorunları nedeniyle merkezimize ulaşmakta zorluk mu yaşıyorsunuz? Evde medikal ayak bakımı hizmetimizle yanınızdayız. Özellikle yatalak hastalar, yaşlı bireyler, hareket zorluğu yaşayanlar ve dolaşım bozukluğu olan hastalarımız için ideal bir çözümdür. Ankara genelinde geniş hizmet bölgemizde, steril malzemeler ve profesyonel ekibimizle evinize geliyoruz.',
    icon: 'Zap',
    image: '/images/services/evde-bakim.jpg',
    benefits: [
      'Ev konforunda hizmet',
      'Yatalak ve yaşlı hastalara özel',
      'Steril malzeme ve cihazlar',
      'Geniş hizmet bölgesi',
      'Profesyonel podolog ekibi',
      'Dolaşım bozukluğu olan hastalara uygun'
    ],
    process: [
      'Randevu ve hazırlık (en az 1 gün önceden)',
      'Adresinize geliyoruz (1 Podolog + 1 Yardımcı)',
      'Kapsamlı ayak muayenesi ve bakımı',
      'Tırnak kesimi, mantar tedavisi, nasır temizliği',
      'Peeling, masaj ve serum uygulaması',
      'Takip ve bakım önerileri'
    ]
  }
];

export const galleryImages = [
  {
    id: 1,
    before: '/images/gallery/g1.jpg',
    after: '/images/gallery/g1.jpg',
    title: 'Medikal Akrilik Tırnak',
    description: 'Deformite sonucu tırnak kalmayan bölgeye doğal tırnak uygulaması yaptık'
  },
  {
    id: 2,
    before: '/images/gallery/g2.jpg',
    after: '/images/gallery/g2.jpg',
    title: 'Ciltte Aşırı Kalınlaşma (Hiperkeratoz) ',
    description: 'Profesyonel medikal ayak bakımı ile harika sonuçlar'
  },
  {
    id: 3,
    before: '/images/gallery/g3.jpg',
    after: '/images/gallery/g3.jpg',
    title: 'Topuk Bakımı Sonuçları',
    description: 'Derin bakım ile yenilenen ayaklar'
  },
  {
    id: 4,
    before: '/images/gallery/g4.jpg',
    after: '/images/gallery/g4.jpg',
    title: 'Onikogrifoz Tırnak Temizliği',
    description: '7 yıl hiç kesilmemiş-Ağrısız uygulama, temiz görüntü'
  },
  {
    id: 5,
    before: '/images/gallery/g5.jpg',
    after: '/images/gallery/g5.jpg',
    title: 'Tırnak Restorasyonu',
    description: 'Hasarlı tırnak onarımı ve bakımı'
  },
  {
    id: 6,
    before: '/images/gallery/g6.jpg',
    after: '/images/gallery/g6.jpg',
    title: 'Soyulabilir Ayak Maskelerini Önermiyoruz - İşte Sebebi',
    description: 'Medikal ayak bakımı ve Pedizone %15 Üreli Intense Repair Cream Kullanım Sonucu'
  },
  {
    id: 7,
    before: '/images/gallery/g7.jpg',
    after: '/images/gallery/g7.jpg',
    title: 'Batık Tırnak ve Ortoniksi',
    description: 'Ortoniksi uygulaması ile batık tırnak tedavisi'
  },
  {
    id: 8,
    before: '/images/gallery/g8.jpg',
    after: '/images/gallery/g8.jpg',
    title: 'Enfeksiyonlu Batık Tırnak Vakası',
    description: 'B/S Bant ile yakaladığımız başarı'
  },
  {
    id: 9,
    before: '/images/gallery/g9.jpg',
    after: '/images/gallery/g9.jpg',
    title: 'Batık Tırnak Tedavisi',
    description: 'Ağrısız batık tırnak tedavisi ve iyileşme süreci'
  },
  {
    id: 10,
    before: '/images/gallery/g10.jpg',
    after: '/images/gallery/g10.jpg',
    title: 'Tırnak Mantarı Tedavisi',
    description: 'Kalıcı tırnak mantarı tedavisi sonuçları'
  }
];

// ============================================
// BLOG YAZILARINI BURADAN DEĞİŞTİREBİLİRSİNİZ
// ============================================
// Zenginleştirilmiş, SEO dostu blog içerikleri
// Podolojik yaklaşım ve bilimsel temeller içerir

export const blogPosts = enrichedBlogPosts.length > 0 ? enrichedBlogPosts : [
  {
    id: 'ayak-sagligi-ipuclari',
    title: 'Ayak Sağlığı İçin 10 Önemli İpucu',
    slug: 'ayak-sagligi-ipuclari',
    excerpt: 'Sağlıklı ayaklar için günlük hayatınızda uygulayabileceğiniz pratik öneriler ve profesyonel tavsiyeleri keşfedin.',
    content: `# Ayak Sağlığı İçin 10 Önemli İpucu

Ayaklarımız günlük yaşamımızda en çok kullandığımız ancak en az önem verdiğimiz organlarımızdan biridir. Sağlıklı ayaklar, aktif ve konforlu bir yaşamın temelidir.

## 1. Doğru Ayakkabı Seçimi

Ayakkabı seçimi ayak sağlığının temelidir. Dar, yüksek topuklu veya düz tabanlı ayakkabılar birçok ayak probleminin ana nedenidir. Ayakkabınız ayağınıza tam oturmalı, ancak sıkmamalı, nefes alabilen malzemelerden yapılmış olmalı ve uygun taban desteği sağlamalıdır.

## 2. Günlük Ayak Hijyeni

Her gün ayaklarınızı ılık suyla yıkayın ve özellikle parmak aralarını iyice kurulayın. Nemli ortam mantar ve bakterilerin üremesine zemin hazırlar.

## 3. Tırnak Bakımı

Tırnaklarınızı düz bir şekilde, çok kısa kesmeden kesmeye özen gösterin. Batık tırnak oluşumunu önlemek için köşeleri aşırı derecede kısaltmayın.

## 4. Nemlendirme

Ayaklarınızı, özellikle topuk bölgenizi düzenli olarak nemlendirecek kremler kullanın. Ancak parmak aralarına krem sürmekten kaçının.

## 5. Çorap Seçimi

Pamuklu, ter emici çoraplar tercih edin. Sentetik malzemeler ter birikmesine ve mantar oluşumuna neden olabilir.

## 6. Ayakkabılarınızı Dinlendirin

Aynı ayakkabıyı art arda günler giymekten kaçının. Ayakkabılarınızın havalanması ve kuruması için zaman tanıyın.

## 7. Düzenli Egzersiz

Ayak parmaklarınızı hareket ettirin, ayak bileklerinizi döndürün. Basit egzersizler dolaşımı artırır ve ayak sağlığını destekler.

## 8. Diyabet Kontrolü

Diyabet hastaysanız, ayak sağlığınıza ekstra dikkat gösterin ve düzenli kontrolleri ihmal etmeyin.

## 9. Erken Müdahale

Herhangi bir ağrı, şişlik, renk değişikliği veya yara durumunda uzman bir podologa başvurun. Erken teşhis tedaviyi kolaylaştırır.

## 10. Profesyonel Ayak Bakımı

Yılda en az bir kez profesyonel ayak bakımı yaptırmanız, olası problemlerin erken tespiti için önemlidir.

**Profesyonel destek için Medipodo Ayak Bakımı merkezimizi ziyaret edebilirsiniz.**`,
    author: 'Dr. Ayşe Demir',
    date: '2024-01-15',
    readTime: '5 dakika',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
    tags: ['Ayak Sağlığı', 'Önleyici Bakım', 'Sağlıklı Yaşam']
  },
  {
    id: 'batik-tirnak-nedenleri',
    title: 'Batık Tırnak Nedenleri ve Korunma Yolları',
    slug: 'batik-tirnak-nedenleri',
    excerpt: 'Batık tırnak oluşumunun ana nedenleri ve bu rahatsızlıktan korunmak için alınabilecek önlemler hakkında detaylı bilgi.',
    content: `# Batık Tırnak Nedenleri ve Korunma Yolları

Batık tırnak, tırnağın kenarlarının yanındaki yumuşak dokuya batması sonucu oluşan ağrılı bir durumdur. Bu yaygın problemi anlamak ve önlemek için kapsamlı bilgiler sunuyoruz.`,
    author: 'Uzm. Mehmet Kaya',
    date: '2024-01-20',
    readTime: '7 dakika',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop',
    tags: ['Batık Tırnak', 'Tedavi', 'Önleme']
  },
  {
    id: 'tirnak-mantari-tedavisi',
    title: 'Tırnak Mantarı: Modern Tedavi Yöntemleri',
    slug: 'tirnak-mantari-tedavisi',
    excerpt: 'Tırnak mantarı tedavisinde güncel yaklaşımlar, tedavi süreçleri ve kalıcı çözüm yöntemlerini öğrenin.',
    content: `# Tırnak Mantarı: Modern Tedavi Yöntemleri

Tırnak mantarı, dünya çapında milyonlarca insanı etkileyen yaygın bir sağlık problemidir. Modern tedavi yöntemleri ile bu rahatsızlıktan tamamen kurtulmak mümkün.`,
    author: 'Dr. Zeynep Arslan',
    date: '2024-01-25',
    readTime: '8 dakika',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=400&fit=crop',
    tags: ['Tırnak Mantarı', 'Onikomikoz', 'Modern Tedavi']
  },
  {
    id: 'tirnakbatmasi',
    title: 'Tırnak Batması Neden Olur? En Sık Yapılan Hatalar ve Doğru Çözümler',
    slug: 'tirnakbatmasi',
    excerpt: 'Tırnak batmasının nedenleri, evde yapılan hatalar, podolojik yöntemler ve kalıcı çözümler. Medipodo ile tırnak batması sorununu çözün.',
    content: 'Tırnak Batması Neden Olur? En Sık Yapılan Hatalar ve Doğru Çözümler',
    author: 'Medipodo Podolog Ekibi',
    date: '2024-12-01',
    readTime: '15 dakika',
    image: '/blog-images/batik-tirnak/1.jpg',
    tags: ['Tırnak Batması', 'Podoloji', 'Tedavi']
  }
];

export const teamMembers = [
  {
    id: 1,
    name: 'Serdar Ceylan',
    title: 'Podolog',
    bio: 'Uzun yıllar podoloji alanında deneyimli; ortoniksi uygulamaları, batık tırnak, tırnak ve ayak mantarı alanında başarısını ispatlamış uzman.',
    image: '/images/team/serdar-ceylan.jpg',
    specialties: ['Ortoniksi Uygulamaları', 'Batık Tırnak', 'Tırnak Mantarı']
  },
  {
    id: 2,
    name: 'Şaziye Kunt',
    title: 'Uzm. Refleksolog',
    bio: 'Medikal el ve ayak bakımı konusunda deneyimli, refleksoloji uygulayıcısı.',
    image: '/images/team/saziye-kunt.jpg',
    specialties: ['Medikal Pediküir', 'Nasır Tedavisi', 'Topuk Bakımı']
  },
  {
    id: 3,
    name: 'Sevda Karataş',
    title: 'Usta Öğretici',
    bio: 'Yılların ustalık deneyimini öğrencilerine aktararak onların profesyonel bir başlangıç yapmasını sağlıyor.',
    image: '/images/team/sevda-karatas.jpg',
    specialties: ['Evde Bakım', 'Mantar Tedavisi', 'Önleyici Bakım']
  }
];

export const whyChooseUs = [
  {
    title: 'Uzman Kadro',
    description: 'Alanında deneyimli ve sertifikalı podoloji uzmanları',
    icon: 'Award'
  },
  {
    title: 'Modern Ekipman',
    description: 'En güncel teknoloji ve steril medikal ekipmanlar',
    icon: 'Sparkles'
  },
  {
    title: 'Hijyenik Ortam',
    description: 'Tam sterilizasyon ve hijyen standartlarına uygunluk',
    icon: 'ShieldCheck'
  },
  {
    title: 'Kişiye Özel Tedavi',
    description: 'Her hasta için özel hazırlanan tedavi programları',
    icon: 'Heart'
  }
];
