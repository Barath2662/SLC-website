import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, Menu, X, ChevronRight } from 'lucide-react';
import { BRAND_DETAILS } from '@/constants/brand';
import { NAV_LINKS, ROUTES } from '@/constants/routes';
import { cn } from '@/utils/cn';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const primaryPhone = BRAND_DETAILS.phones[0].raw;
  const whatsappUrl = `https://wa.me/91${BRAND_DETAILS.whatsapp.number}?text=${encodeURIComponent(BRAND_DETAILS.whatsapp.defaultMessage)}`;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-20 flex items-center',
          isScrolled
            ? 'bg-dark-bg/95 backdrop-blur-md border-b border-gold-500/20 shadow-lg py-2'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          {/* Brand Logo */}
          <Link to={ROUTES.HOME} className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-dark-card border border-gold-500/40 flex items-center justify-center group-hover:border-gold-500 transition-colors shadow-md">
              <span className="font-serif font-bold text-lg text-gold-500 tracking-wider">
                {BRAND_DETAILS.shortName}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg md:text-xl text-white tracking-wide leading-tight group-hover:text-gold-400 transition-colors">
                {BRAND_DETAILS.name}
              </span>
              <span className="text-[10px] text-gold-400 tracking-widest uppercase font-medium">
                Est. {BRAND_DETAILS.establishedYear} • Coimbatore
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'relative py-1 text-sm font-medium transition-colors hover:text-gold-400',
                    isActive ? 'text-gold-500 font-semibold' : 'text-slate-300'
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`tel:${primaryPhone}`}
              className="p-2.5 rounded-lg bg-dark-surface border border-slate-700/60 text-slate-200 hover:text-gold-400 hover:border-gold-500/40 transition-all flex items-center space-x-2 text-xs font-semibold"
              title="Call Srii Lakshmi Cab"
            >
              <Phone className="w-4 h-4 text-gold-500" />
              <span>Call</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-700/50 text-emerald-300 hover:bg-emerald-900/50 transition-all flex items-center space-x-2 text-xs font-semibold"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <Link
              to={ROUTES.REQUEST_QUOTE}
              className="px-4 py-2.5 rounded-lg gold-gradient-bg text-black font-semibold text-xs tracking-wide hover:brightness-110 transition-all shadow-md flex items-center space-x-1.5"
            >
              <span>Request Quote</span>
            </Link>
          </div>

          {/* Mobile Menu & Quick Phone */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href={`tel:${primaryPhone}`}
              className="p-2 rounded-lg bg-gold-500 text-black font-bold flex items-center justify-center"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-dark-surface text-slate-200 border border-slate-700 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-gold-400" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-over Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-dark-bg/98 backdrop-blur-xl animate-in fade-in slide-in-from-right duration-300">
          <div className="flex items-center justify-between p-4 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-dark-card border border-gold-500/40 flex items-center justify-center">
                <span className="font-serif font-bold text-base text-gold-500">{BRAND_DETAILS.shortName}</span>
              </div>
              <span className="font-serif font-bold text-lg text-white">{BRAND_DETAILS.name}</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-dark-surface text-slate-300 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-6 space-y-4">
            <nav className="space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      'flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-colors',
                      isActive
                        ? 'bg-gold-500/10 text-gold-400 border border-gold-500/30'
                        : 'text-slate-200 hover:bg-dark-surface'
                    )}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-6 border-t border-slate-800 space-y-3">
              <Link
                to={ROUTES.REQUEST_QUOTE}
                className="w-full py-3.5 rounded-xl gold-gradient-bg text-black text-center font-semibold text-sm tracking-wide block shadow-lg"
              >
                Request a Quote
              </Link>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${primaryPhone}`}
                  className="py-3 rounded-xl bg-dark-surface border border-slate-700 text-slate-200 flex items-center justify-center space-x-2 text-xs font-semibold"
                >
                  <Phone className="w-4 h-4 text-gold-500" />
                  <span>Call Now</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 rounded-xl bg-emerald-950/60 border border-emerald-700/60 text-emerald-300 flex items-center justify-center space-x-2 text-xs font-semibold"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
