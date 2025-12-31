import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
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
import BSBantBlog from './pages/BSBantBlog';
import TirnakKalinlasmaBlog from './pages/TirnakKalinlasmaBlog';
import TirnakMantariBlog from './pages/TirnakMantariBlog';
import TirnakNedenUzamazBlog from './pages/TirnakNedenUzamazBlog';
import MedikalAyakBakimiKimlerBlog from './pages/MedikalAyakBakimiKimlerBlog';
import BatikTirnakNedenleri from './pages/BatikTirnakNedenleri';
import AyakSagligiIpuclariBlog from './pages/AyakSagligiIpuclariBlog';
import AyakAgrisiNedenOlurBlog from './pages/AyakAgrisiNedenOlurBlog';
import AyakAnalizi from './pages/AyakAnalizi';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ProductDetail from './pages/ProductDetail';
import EbookLanding from './pages/EbookLanding';
import FAQ from './pages/FAQ';
import EvdeBakimService from './pages/EvdeBakimService';
import MedikalAyakBakimiService from './pages/MedikalAyakBakimiService';
import NasirTedavisiService from './pages/NasirTedavisiService';

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
          <Route path="/hizmet/evde-bakim" element={<EvdeBakimService />} />
          <Route path="/hizmet/ayak-bakimi" element={<MedikalAyakBakimiService />} />
          <Route path="/hizmet/nasir-tedavisi" element={<NasirTedavisiService />} />
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
          <Route path="/blog/bs-bant-uygulamasi" element={<BSBantBlog />} />
          <Route path="/blog/tirnak-neden-kalinlasir" element={<TirnakKalinlasmaBlog />} />
          <Route path="/blog/tirnak-mantari-tedavisi" element={<TirnakMantariBlog />} />
          <Route path="/blog/tirnak-neden-uzamaz" element={<TirnakNedenUzamazBlog />} />
          <Route path="/blog/medikal-ayak-bakimi-kimler-icin-gereklidir" element={<MedikalAyakBakimiKimlerBlog />} />
          <Route path="/blog/batik-tirnak-nedenleri" element={<BatikTirnakNedenleri />} />
          <Route path="/blog/ayak-sagligi-ipuclari" element={<AyakSagligiIpuclariBlog />} />
          <Route path="/blog/ayak-agrisi-neden-olur" element={<AyakAgrisiNedenOlurBlog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/kadromuz" element={<Team />} />
          <Route path="/ekip" element={<Navigate to="/kadromuz" replace />} />
          <Route path="/ayak-analizi" element={<AyakAnalizi />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/gizlilik-politikasi" element={<PrivacyPolicy />} />
          <Route path="/kullanim-sartlari" element={<TermsOfService />} />
          <Route path="/urun/:slug" element={<ProductDetail />} />
          <Route path="/sikca-sorulan-sorular" element={<FAQ />} />
        </Routes>
        {!isLandingPage && <Footer />}
        {!isLandingPage && <WhatsAppButton />}
    </>
  );
}

function App() {
  return (
    <div className="App" style={{ margin: 0, padding: 0, border: 'none' }}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
