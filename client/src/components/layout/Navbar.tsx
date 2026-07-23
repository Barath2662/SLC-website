import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';
import { BRAND_DETAILS } from '@/constants/brand';
import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui/Button';
import { useContactModal } from '@/context/ContactModalContext';
import { MobileMenuDrawer } from './MobileMenuDrawer';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openCallModal, openWhatsAppModal } = useContactModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: ROUTES.HOME },
    { label: 'About Us', path: ROUTES.ABOUT },
    { label: 'Our Fleet', path: ROUTES.FLEET },
    { label: 'Services', path: ROUTES.SERVICES },
    { label: 'Destinations', path: ROUTES.DESTINATIONS },
    { label: 'Gallery', path: ROUTES.GALLERY },
    { label: 'FAQ', path: ROUTES.FAQ },
    { label: 'Contact Us', path: ROUTES.CONTACT },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-bg/95 backdrop-blur-md border-b border-slate-800 shadow-2xl py-3'
            : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Emblem */}
          <Link to={ROUTES.HOME} className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl gold-gradient-bg flex items-center justify-center font-serif font-extrabold text-black text-xl shadow-lg group-hover:scale-105 transition-transform">
              {BRAND_DETAILS.shortName}
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-extrabold text-lg sm:text-xl tracking-wider text-white group-hover:text-gold-400 transition-colors leading-none">
                {BRAND_DETAILS.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold mt-1">
                Since {BRAND_DETAILS.establishedYear} • Coimbatore
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-gold-400 relative py-1 ${
                    isActive ? 'text-gold-400 font-bold' : 'text-slate-200'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 gold-gradient-bg rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action Bar */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Call Button triggering Choose a Number modal */}
            <Button
              variant="primary"
              size="sm"
              onClick={openCallModal}
              leftIcon={<Phone className="w-3.5 h-3.5" />}
            >
              Call Us
            </Button>

            {/* WhatsApp Button triggering Choose WhatsApp Number modal */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => openWhatsAppModal()}
              leftIcon={<MessageSquare className="w-3.5 h-3.5 text-emerald-400" />}
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-dark-card border border-slate-800 text-slate-200 hover:text-gold-400 hover:border-gold-500/40 transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenuDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};
