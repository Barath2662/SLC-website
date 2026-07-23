import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';

export const FloatingCTA: React.FC = () => {
  const { openCallModal, openWhatsAppModal } = useContactModal();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <button
        onClick={() => openWhatsAppModal()}
        aria-label="Chat on WhatsApp"
        title="Choose WhatsApp Number"
        className="w-13 h-13 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer group border-2 border-emerald-400"
      >
        <MessageSquare className="w-6 h-6 fill-current group-hover:rotate-12 transition-transform" />
      </button>

      {/* Direct Call Button */}
      <button
        onClick={openCallModal}
        aria-label="Call Srii Lakshmi Cab"
        title="Choose a Number to Call"
        className="w-13 h-13 rounded-full gold-gradient-bg text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer group border-2 border-gold-400 gold-border-glow"
      >
        <Phone className="w-6 h-6 fill-current group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
};
