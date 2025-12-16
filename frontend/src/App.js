import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import BaglicaPodologBlog from './pages/BaglicaPodologBlog';
import CatlakTopukBlog from './pages/CatlakTopukBlog';
import AyakKokusuBlog from './pages/AyakKokusuBlog';
import DiyabetAyakBlog from './pages/DiyabetAyakBlog';
import BatikTirnakBlog from './pages/BatikTirnakBlog';
import RefleksolojiBlog from './pages/RefleksolojiBlog';
import NasirSigilBlog from './pages/NasirSigilBlog';
import TopukDikeniBlog from './pages/TopukDikeniBlog';
import CocukAyakSagligiBlog from './pages/CocukAyakSagligiBlog';
import AyakAnalizi from './pages/AyakAnalizi';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ProductDetail from './pages/ProductDetail';
import EbookLanding from './pages/EbookLanding';

function AppContent() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/ayak-bakim-kilavuzu';

  return (
    <>
      <ScrollToTop />
      {!isLandingPage && <Header />}
        <Routes>
          {/* Landing Page - No Header/Footer */}
          <Route path="/ayak-bakim-kilavuzu" element={<EbookLanding />} />
          
          {/* Regular Pages with Header/Footer */}
          <Route path="/" element={<Home />} />
          <Route path="/hizmetler" element={<Services />} />
          <Route path="/hizmet/:serviceId" element={<ServiceDetail />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/baglica-podolog-hizmetleri" element={<BaglicaPodologBlog />} />
          <Route path="/blog/kis-aylarinda-catlak-topuk-tedavisi" element={<CatlakTopukBlog />} />
          <Route path="/blog/ayak-kokusu-ve-mantar-iliskisi" element={<AyakKokusuBlog />} />
          <Route path="/blog/diyabet-ve-ayak-sagligi" element={<DiyabetAyakBlog />} />
          <Route path="/blog/tirnakbatmasi" element={<BatikTirnakBlog />} />
          <Route path="/blog/ankara-baglica-refleksoloji" element={<RefleksolojiBlog />} />
          <Route path="/blog/nasir-sigil-farklari" element={<NasirSigilBlog />} />
          <Route path="/blog/topuk-dikeni" element={<TopukDikeniBlog />} />
          <Route path="/blog/cocuk-ayak-sagligi" element={<CocukAyakSagligiBlog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/kadromuz" element={<Team />} />
          <Route path="/ayak-analizi" element={<AyakAnalizi />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/gizlilik-politikasi" element={<PrivacyPolicy />} />
          <Route path="/kullanim-sartlari" element={<TermsOfService />} />
          <Route path="/urun/:slug" element={<ProductDetail />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </BrowserRouter>
    </div>
  );
}

export default App;
