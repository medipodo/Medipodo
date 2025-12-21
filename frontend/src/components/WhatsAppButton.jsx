import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteInfo } from '../mock';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(
      `https://wa.me/${siteInfo.whatsapp}?text=Merhaba, Medipodo web sitenizden yazıyorum. Bilgi alabilir miyim?`,
      '_blank'
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 group hover:scale-110"
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle size={28} className="relative z-10" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        WhatsApp'tan Yazın
      </span>
      {/* Pulse animasyonu - canlı görünüm için */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></span>
    </button>
  );
};

export default WhatsAppButton;