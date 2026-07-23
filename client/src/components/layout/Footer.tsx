import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { BRAND_DETAILS } from '@/constants/brand';
import { ROUTES } from '@/constants/routes';
import { useContactModal } from '@/context/ContactModalContext';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { openCallModal, openWhatsAppModal } = useContactModal();

  return (
    <footer className="bg-gradient-to-b from-dark-card via-black to-black border-t border-slate-800 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to={ROUTES.HOME} className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl gold-gradient-bg flex items-center justify-center font-serif font-extrabold text-black text-xl shadow-lg">
                {BRAND_DETAILS.shortName}
              </div>
              <span className="font-serif font-extrabold text-xl text-white tracking-wider">
                {BRAND_DETAILS.name}
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Coimbatore’s premier cab rental & travel service company since {BRAND_DETAILS.establishedYear}. Specializing in outstation taxis, airport drops, tempo travellers, Force Urbania, and tourist bus rentals.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-slate-200">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
                <span>{BRAND_DETAILS.address.full}</span>
              </div>

              <div className="flex items-center space-x-2 text-slate-200">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a href={`mailto:${BRAND_DETAILS.email}`} className="hover:text-gold-400">
                  {BRAND_DETAILS.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to={ROUTES.HOME} className="hover:text-gold-400 transition-colors">Home</Link></li>
              <li><Link to={ROUTES.ABOUT} className="hover:text-gold-400 transition-colors">About Us</Link></li>
              <li><Link to={ROUTES.FLEET} className="hover:text-gold-400 transition-colors">Our Fleet</Link></li>
              <li><Link to={ROUTES.SERVICES} className="hover:text-gold-400 transition-colors">Travel Services</Link></li>
              <li><Link to={ROUTES.DESTINATIONS} className="hover:text-gold-400 transition-colors">Popular Destinations</Link></li>
              <li><Link to={ROUTES.GALLERY} className="hover:text-gold-400 transition-colors">Photo Gallery</Link></li>
              <li><Link to={ROUTES.FAQ} className="hover:text-gold-400 transition-colors">FAQ & Help</Link></li>
              <li><Link to={ROUTES.CONTACT} className="hover:text-gold-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Fleet Rentals */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Fleet Rentals
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to={`${ROUTES.FLEET}/sedan`} className="hover:text-gold-400 transition-colors">Sedan Taxi Rental</Link></li>
              <li><Link to={`${ROUTES.FLEET}/suv`} className="hover:text-gold-400 transition-colors">SUV & MVP Rentals</Link></li>
              <li><Link to={`${ROUTES.FLEET}/tempo-traveller`} className="hover:text-gold-400 transition-colors">Tempo Traveller 15 Seater</Link></li>
              <li><Link to={`${ROUTES.FLEET}/force-urbania`} className="hover:text-gold-400 transition-colors">Force Urbania Luxury</Link></li>
              <li><Link to={`${ROUTES.FLEET}/mini-bus`} className="hover:text-gold-400 transition-colors">Mini Bus Rental</Link></li>
              <li><Link to={`${ROUTES.FLEET}/bus`} className="hover:text-gold-400 transition-colors">Tourist Bus 40+ Seater</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              24×7 Contact Desk
            </h4>
            <div className="space-y-2 text-xs">
              <button
                onClick={openCallModal}
                className="w-full text-left font-bold text-gold-400 hover:underline block cursor-pointer"
              >
                📞 Click to Call
              </button>
              <p>
                +91 94439 14314, +91 80127 81549, +91 81482 51567
              </p>

              <button
                onClick={() => openWhatsAppModal()}
                className="w-full text-left font-semibold text-emerald-400 hover:underline block cursor-pointer"
              >
                💬 WhatsApp Chat
              </button>

              <div className="pt-2 text-[11px] text-slate-400">
                <span>Business Hours: </span>
                <span className="text-white font-medium">{BRAND_DETAILS.businessHours}</span>
              </div>

              <div className="pt-2">
                <a
                  href={BRAND_DETAILS.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-slate-300 hover:text-gold-400"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {BRAND_DETAILS.name}. All rights reserved. Registered under Tamil Nadu Transport Department.
          </div>

          <div className="flex items-center space-x-4">
            <Link to={ROUTES.PRIVACY_POLICY} className="hover:text-gold-400 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to={ROUTES.TERMS} className="hover:text-gold-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
