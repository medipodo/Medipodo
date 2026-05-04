import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { siteInfo } from '../mock';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${siteInfo.whatsapp}?text=Merhaba, Medipodo web sitenizden yazıyorum. Bilgi alabilir miyim?`,
      '_blank'
    );
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${siteInfo.phoneLink}`;
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      {/* Telefon Ara Butonu - Mavi */}
      <button
        onClick={handlePhoneClick}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-110 relative"
        aria-label="Telefon ile ara"
      >
        <Phone size={28} className="relative z-10" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Hemen Ara
        </span>
      </button>

      {/* WhatsApp Butonu - Yeşil */}
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-110 relative"
        aria-label="WhatsApp ile iletişime geç"
      >
        <MessageCircle size={28} className="relative z-10" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          WhatsApp'tan Yazın
        </span>
        {/* Pulse animasyonu */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></span>
      </button>
    </div>
  );
};

export default WhatsAppButton;
