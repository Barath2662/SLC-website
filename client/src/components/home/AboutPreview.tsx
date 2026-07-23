import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, ArrowRight, Award } from 'lucide-react';
import { BRAND_DETAILS } from '@/constants/brand';
import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui/Button';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 bg-dark-card/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image Stack */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl gold-border-glow">
              <img
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop"
                alt="Srii Lakshmi Cab premium travel fleet in Coimbatore"
                className="w-full h-[400px] sm:h-[480px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Overlaid Experience Floating Badge */}
            <div className="absolute -bottom-6 -right-2 sm:bottom-6 sm:-right-6 bg-dark-bg/95 border border-gold-500/40 backdrop-blur-xl p-5 rounded-2xl shadow-2xl flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl gold-gradient-bg text-black font-serif font-extrabold text-xl flex items-center justify-center shrink-0">
                20+
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-base">Years of Excellence</h4>
                <p className="text-xs text-slate-400">Serving Coimbatore & South India since 2005</p>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Value Proposition */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 inline-block">
                About {BRAND_DETAILS.name}
              </span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white tracking-wide leading-tight">
                Travel with Confidence & Executive Comfort
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Founded in {BRAND_DETAILS.establishedYear}, {BRAND_DETAILS.name} has been providing dependable travel solutions from Coimbatore for over two decades. We believe every journey deserves comfort, safety, and professional service.
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              From airport transfers and family vacations to corporate travel, wedding logistics, and multi-day South India tour packages, we offer a diverse fleet driven by seasoned, courteous highway professionals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center space-x-2 text-xs font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                <span>Well-Maintained Clean Fleet</span>
              </div>

              <div className="flex items-center space-x-2 text-xs font-medium text-slate-200">
                <ShieldCheck className="w-4 h-4 text-gold-500 shrink-0" />
                <span>Hill Road Expert Drivers</span>
              </div>

              <div className="flex items-center space-x-2 text-xs font-medium text-slate-200">
                <Award className="w-4 h-4 text-gold-500 shrink-0" />
                <span>Transparent Custom Packages</span>
              </div>

              <div className="flex items-center space-x-2 text-xs font-medium text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                <span>24x7 Direct Travel Desk</span>
              </div>
            </div>

            <div className="pt-4">
              <Link to={ROUTES.ABOUT}>
                <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
