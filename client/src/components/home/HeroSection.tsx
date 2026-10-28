import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, ShieldCheck, Clock, Award, ArrowRight } from 'lucide-react';
import { BRAND_DETAILS } from '@/constants/brand';
import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui/Button';
import { useContactModal } from '@/context/ContactModalContext';

export const HeroSection: React.FC = () => {
  const { openCallModal, openWhatsAppModal } = useContactModal();

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex flex-col justify-between bg-gradient-to-b from-[#F8F6F1] via-[#FCFCFA] to-[#FCFCFA] border-b border-[#E7E5E4] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8A44D]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C8A44D] px-3.5 py-1.5 rounded-full bg-[#C8A44D]/10 border border-[#C8A44D]/30 inline-block gold-border-glow">
              Coimbatore's Premier Cab & Travel Service Since {BRAND_DETAILS.establishedYear}
            </span>

            <h1 className="font-serif font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#111111] tracking-wide leading-tight">
              Comfortable, Punctual & Trusted Journeys Across <span className="gold-gradient-text">South India</span>
            </h1>

            <p className="text-[#4B5563] text-sm sm:text-lg leading-relaxed max-w-2xl font-medium">
              From 24×7 airport pickups at CJB to memorable outstation tours to Ooty, Munnar & Kodaikanal—Srii Lakshmi Cab provides clean, sanitized cars, Tempo Travellers, Force Urbanias, and tourist buses driven by senior highway professionals.
            </p>

            {/* Direct Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="lg"
                onClick={openCallModal}
                className="shadow-xl"
                leftIcon={<Phone className="w-5 h-5" />}
              >
                Call Desk
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => openWhatsAppModal()}
                leftIcon={<MessageSquare className="w-5 h-5 text-emerald-600" />}
              >
                WhatsApp Enquiry
              </Button>

              <Link to={ROUTES.REQUEST_QUOTE}>
                <Button
                  variant="secondary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4 text-[#C8A44D]" />}
                >
                  Plan My Journey
                </Button>
              </Link>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-6 border-t border-[#E7E5E4] flex flex-wrap items-center gap-6 text-xs text-[#4B5563] font-medium">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#C8A44D]" />
                <span>24×7 Instant Dispatch</span>
              </div>

              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified Commercial Drivers</span>
              </div>

              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-[#C8A44D]" />
                <span>18+ Years Trusted Heritage</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-[#C8A44D]/30 shadow-2xl gold-border-glow bg-white group">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop"
                alt="Srii Lakshmi Cab Luxury Fleet"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 space-y-2 text-left">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C8A44D] px-2.5 py-1 rounded-full bg-black/80 border border-[#C8A44D]/40 backdrop-blur-md">
                    18+ Years Excellence
                  </span>
                </div>
                <h3 className="font-serif font-bold text-xl text-white">
                  Force Urbania & Executive Fleet
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Sanitized interiors, European monocoque air suspension & experienced senior drivers for every outstation trip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
