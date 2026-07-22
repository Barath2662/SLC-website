import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, ArrowUp, Calendar } from 'lucide-react';
import { BRAND_DETAILS } from '@/constants/brand';
import { ROUTES } from '@/constants/routes';

export const FloatingCTA: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const primaryPhone = BRAND_DETAILS.phones[0].raw;
  const whatsappUrl = `https://wa.me/91${BRAND_DETAILS.whatsapp.number}?text=${encodeURIComponent(BRAND_DETAILS.whatsapp.defaultMessage)}`;

  return (
    <>
      {/* Mobile Sticky Bottom CTA Bar (375px - 768px) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-dark-bg/95 backdrop-blur-lg border-t border-gold-500/30 p-2.5 shadow-2xl">
        <div className="grid grid-cols-3 gap-2">
          <a
            href={`tel:${primaryPhone}`}
            className="py-2.5 px-2 rounded-xl bg-dark-surface border border-slate-700 text-slate-100 flex items-center justify-center space-x-1.5 text-xs font-semibold"
          >
            <Phone className="w-4 h-4 text-gold-500 shrink-0" />
            <span>Call</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-2 rounded-xl bg-emerald-950/80 border border-emerald-600/60 text-emerald-300 flex items-center justify-center space-x-1.5 text-xs font-semibold"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>WhatsApp</span>
          </a>

          <Link
            to={ROUTES.REQUEST_QUOTE}
            className="py-2.5 px-2 rounded-xl gold-gradient-bg text-black flex items-center justify-center space-x-1.5 text-xs font-bold shadow-md"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>Quote</span>
          </Link>
        </div>
      </div>

      {/* Desktop Floating Action Buttons (Bottom Right) */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col space-y-3">
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-dark-card border border-slate-700 text-slate-300 hover:text-gold-400 hover:border-gold-500/50 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group relative"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute right-14 bg-black/90 text-white text-xs font-semibold py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-emerald-500/30">
            WhatsApp Us
          </span>
        </a>

        <a
          href={`tel:${primaryPhone}`}
          className="w-12 h-12 rounded-full bg-dark-card border border-gold-500/60 text-gold-400 hover:bg-gold-500 hover:text-black shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group relative"
          title="Call Srii Lakshmi Cab"
          aria-label="Call Srii Lakshmi Cab"
        >
          <Phone className="w-5 h-5" />
          <span className="absolute right-14 bg-black/90 text-white text-xs font-semibold py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gold-500/30">
            Call 9443914314
          </span>
        </a>
      </div>
    </>
  );
};
