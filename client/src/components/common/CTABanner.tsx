import React from 'react';
import { Phone, MessageSquare, ShieldCheck, Clock, Award } from 'lucide-react';
import { BRAND_DETAILS } from '@/constants/brand';
import { Button } from '@/components/ui/Button';
import { useContactModal } from '@/context/ContactModalContext';

export const CTABanner: React.FC = () => {
  const { openCallModal, openWhatsAppModal } = useContactModal();

  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-dark-card via-black to-dark-card border border-gold-500/40 p-8 sm:p-12 shadow-2xl gold-border-glow">
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 inline-block">
          24×7 Instant Cab Dispatch
        </span>

        <h2 className="font-serif font-extrabold text-2xl sm:text-4xl text-white tracking-wide leading-tight">
          Ready to Book Your Journey With Srii Lakshmi Cab?
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Whether you need an immediate airport drop, an outstation trip to Ooty, or corporate group travel—our travel desk is online 24×7 to assist you.
        </p>

        {/* Call & WhatsApp CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={openCallModal}
            className="w-full sm:w-auto shadow-xl"
            leftIcon={<Phone className="w-5 h-5" />}
          >
            Call {BRAND_DETAILS.phones[0].display}
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => openWhatsAppModal()}
            className="w-full sm:w-auto"
            leftIcon={<MessageSquare className="w-5 h-5 text-emerald-400" />}
          >
            WhatsApp Instant Enquiry
          </Button>
        </div>

        {/* Feature Trust Bullets */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center space-x-1.5">
            <Clock className="w-4 h-4 text-gold-500" />
            <span>24×7 Round-The-Clock Support</span>
          </div>

          <div className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Verified Commercial Drivers</span>
          </div>

          <div className="flex items-center space-x-1.5">
            <Award className="w-4 h-4 text-gold-500" />
            <span>18+ Years Trusted Heritage</span>
          </div>
        </div>
      </div>
    </div>
  );
};
