import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { siteInfo } from '../mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', path: '/' },
    { name: 'Hizmetler', path: '/hizmetler' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'Blog', path: '/blog' },
    { name: 'Hakkımızda', path: '/hakkimizda' },
    { name: 'Ekip', path: '/ekip' },
    { name: 'İletişim', path: '/iletisim' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_podotherapy/artifacts/b9h35axs_Ads%C4%B1z%20tasar%C4%B1m%20%281%29.png" 
              alt="Medipodo Logo" 
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-blue-900">{siteInfo.name}</span>
              <span className="text-xs text-gray-600">Ayak Bakımı</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-700 ${
                  location.pathname === link.path
                    ? 'text-blue-700'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <a
            href={`tel:${siteInfo.phoneLink}`}
            className="hidden lg:flex items-center space-x-2 bg-blue-700 text-white px-6 py-2.5 rounded-lg hover:bg-blue-800 transition-colors"
          >
            <Phone size={18} />
            <span className="font-medium">{siteInfo.phone}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-700 p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2 px-4 rounded transition-colors ${
                    location.pathname === link.path
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={`tel:${siteInfo.phoneLink}`}
                className="flex items-center justify-center space-x-2 bg-blue-700 text-white px-6 py-2.5 rounded-lg hover:bg-blue-800 transition-colors mt-4"
              >
                <Phone size={18} />
                <span className="font-medium">{siteInfo.phone}</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;