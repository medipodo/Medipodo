import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hizmetler" element={<Services />} />
          <Route path="/hizmet/:serviceId" element={<ServiceDetail />} />
          <Route path="/galeri" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/baglica-podolog-hizmetleri" element={<BaglicaPodologBlog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/kadromuz" element={<Team />} />
          <Route path="/iletisim" element={<Contact />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
 
