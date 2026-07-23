import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageSquare, ExternalLink, ChevronRight } from 'lucide-react';
import { useContactModal } from '@/context/ContactModalContext';
import { BRAND_DETAILS } from '@/constants/brand';

const NUMBERS = [
  { raw: '9443914314', display: '+91 94439 14314', label: '' },
  { raw: '8012781549', display: '+91 80127 81549', label: '' },
  { raw: '8148251567', display: '+91 81482 51567', label: '' },
];

export const ContactModal: React.FC = () => {
  const { modalType, customMessage, closeModal } = useContactModal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (modalType) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [modalType, closeModal]);

  if (!modalType) return null;

  const isCall = modalType === 'call';

  const defaultMsg = BRAND_DETAILS.whatsapp.defaultMessage;
  const messageToUse = customMessage || defaultMsg;

  const handleSelectNumber = (rawNumber: string) => {
    if (isCall) {
      window.location.href = `tel:+91${rawNumber}`;
    } else {
      const waUrl = `https://wa.me/91${rawNumber}?text=${encodeURIComponent(messageToUse)}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
    closeModal();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal / Bottom Sheet Box */}
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg bg-dark-card border border-slate-800 rounded-t-3xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl z-10 gold-border-glow max-h-[90vh] overflow-y-auto"
        >
          {/* Top Close & Handle */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isCall
                    ? 'bg-gold-500/10 border border-gold-500/30 text-gold-500'
                    : 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                }`}
              >
                {isCall ? <Phone className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-white">
                  {isCall ? 'Choose a Number' : 'Choose WhatsApp Number'}
                </h3>
                <p className="text-xs text-slate-300">
                  {isCall
                    ? 'Select the number you would like to call.'
                    : 'Select the WhatsApp number to chat with.'}
                </p>
              </div>
            </div>

            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="p-2 rounded-full bg-dark-surface border border-slate-800 text-slate-400 hover:text-white hover:border-gold-500/40 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 3 Premium Number Cards */}
          <div className="space-y-3">
            {NUMBERS.map((num) => (
              <button
                key={num.raw}
                onClick={() => handleSelectNumber(num.raw)}
                className="w-full text-left p-4 rounded-2xl bg-dark-surface border border-slate-800 hover:border-gold-500/60 shadow-lg hover:shadow-gold-500/10 transition-all cursor-pointer group flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                      isCall
                        ? 'bg-gold-500/20 text-gold-400 group-hover:bg-gold-500 group-hover:text-black'
                        : 'bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black'
                    } transition-colors`}
                  >
                    {isCall ? <Phone className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
                  </div>

                  <div>
                    <span className="font-serif font-bold text-lg text-white group-hover:text-gold-400 transition-colors block">
                      {isCall ? '📞 ' : '💬 '}{num.display}
                    </span>
                    <span className="text-xs text-slate-400 block font-medium">{num.label}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-slate-400 group-hover:text-gold-400 transition-colors">
                  <span className="text-xs font-semibold hidden sm:inline">
                    {isCall ? 'Call Now' : 'Chat'}
                  </span>
                  {isCall ? <ChevronRight className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                </div>
              </button>
            ))}
          </div>

          {/* Footer note */}
          <p className="text-[11px] text-slate-500 text-center mt-6">
            Available 24×7 for bookings, enquiries & outstation assistance.
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
