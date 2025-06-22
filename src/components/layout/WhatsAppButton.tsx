import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const whatsappNumber = '+919876543210';
  const message = 'Hello! I would like to know more about your saree collections.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-30 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 duration-300"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppButton;