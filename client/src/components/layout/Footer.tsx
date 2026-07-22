import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, ExternalLink, ShieldCheck } from 'lucide-react';
import { BRAND_DETAILS } from '@/constants/brand';
import { ROUTES } from '@/constants/routes';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-slate-300 border-t border-gold-500/20 pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-dark-card border border-gold-500/40 flex items-center justify-center">
                <span className="font-serif font-bold text-lg text-gold-500">{BRAND_DETAILS.shortName}</span>
              </div>
              <span className="font-serif font-bold text-xl text-white tracking-wide">{BRAND_DETAILS.name}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Founded in {BRAND_DETAILS.establishedYear}, {BRAND_DETAILS.name} has been providing dependable travel solutions from Coimbatore for over two decades. We deliver safe, comfortable, and customer-focused travel experiences across South India.
            </p>
            <div className="flex items-center space-x-2 text-xs text-gold-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-gold-500" />
              <span>Trusted Travel Partner Since {BRAND_DETAILS.establishedYear}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-white text-base mb-4 tracking-wide border-b border-gold-500/30 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to={ROUTES.HOME} className="hover:text-gold-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to={ROUTES.ABOUT} className="hover:text-gold-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to={ROUTES.FLEET} className="hover:text-gold-400 transition-colors">Our Fleet</Link>
              </li>
              <li>
                <Link to={ROUTES.SERVICES} className="hover:text-gold-400 transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to={ROUTES.DESTINATIONS} className="hover:text-gold-400 transition-colors">Popular Destinations</Link>
              </li>
              <li>
                <Link to={ROUTES.GALLERY} className="hover:text-gold-400 transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to={ROUTES.FAQ} className="hover:text-gold-400 transition-colors">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link to={ROUTES.REQUEST_QUOTE} className="hover:text-gold-400 transition-colors">Request a Quote</Link>
              </li>
            </ul>
          </div>

          {/* Fleet Categories */}
          <div>
            <h3 className="font-serif font-semibold text-white text-base mb-4 tracking-wide border-b border-gold-500/30 pb-2 inline-block">
              Our Fleet & Services
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to={`${ROUTES.FLEET}/hatchback`} className="hover:text-gold-400 transition-colors">Hatchback & Sedan Cabs</Link>
              </li>
              <li>
                <Link to={`${ROUTES.FLEET}/suv`} className="hover:text-gold-400 transition-colors">SUV & MUV Rentals</Link>
              </li>
              <li>
                <Link to={`${ROUTES.FLEET}/tempo-traveller`} className="hover:text-gold-400 transition-colors">Tempo Traveller (12 to 20 Seater)</Link>
              </li>
              <li>
                <Link to={`${ROUTES.FLEET}/force-urbania`} className="hover:text-gold-400 transition-colors">Force Urbania Luxury Rental</Link>
              </li>
              <li>
                <Link to={`${ROUTES.FLEET}/coach`} className="hover:text-gold-400 transition-colors">21 Seater Coach & Mini Bus</Link>
              </li>
              <li>
                <Link to={`${ROUTES.FLEET}/bus`} className="hover:text-gold-400 transition-colors">Tourist Bus Rentals</Link>
              </li>
              <li>
                <Link to={`${ROUTES.SERVICES}/airport-transfer`} className="hover:text-gold-400 transition-colors">Coimbatore Airport Transfers</Link>
              </li>
              <li>
                <Link to={`${ROUTES.SERVICES}/outstation-taxi`} className="hover:text-gold-400 transition-colors">South India Outstation Taxis</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-white text-base mb-4 tracking-wide border-b border-gold-500/30 pb-2 inline-block">
              Contact & Office
            </h3>
            
            <div className="flex items-start space-x-3 text-xs">
              <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
              <span className="text-slate-300 leading-relaxed">{BRAND_DETAILS.address.full}</span>
            </div>

            <div className="flex items-center space-x-3 text-xs">
              <Phone className="w-4 h-4 text-gold-500 shrink-0" />
              <div className="space-x-2">
                {BRAND_DETAILS.phones.map((phone, i) => (
                  <a key={i} href={`tel:${phone.raw}`} className="hover:text-gold-400 transition-colors">
                    {phone.display}
                    {i < BRAND_DETAILS.phones.length - 1 && ' • '}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-3 text-xs">
              <Mail className="w-4 h-4 text-gold-500 shrink-0" />
              <a href={`mailto:${BRAND_DETAILS.email}`} className="hover:text-gold-400 transition-colors">
                {BRAND_DETAILS.email}
              </a>
            </div>

            <div className="flex items-center space-x-3 text-xs">
              <Clock className="w-4 h-4 text-gold-500 shrink-0" />
              <span className="text-gold-400 font-semibold">{BRAND_DETAILS.businessHours}</span>
            </div>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href={BRAND_DETAILS.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-card border border-slate-800 text-slate-300 hover:text-gold-400 hover:border-gold-500/40 transition-colors flex items-center space-x-1.5 text-xs"
              >
                <Instagram className="w-4 h-4 text-pink-500" />
                <span>Instagram</span>
              </a>

              <a
                href={BRAND_DETAILS.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-card border border-slate-800 text-slate-300 hover:text-gold-400 hover:border-gold-500/40 transition-colors flex items-center space-x-1.5 text-xs"
              >
                <ExternalLink className="w-4 h-4 text-blue-400" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
          <p>© {currentYear} {BRAND_DETAILS.name}. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to={ROUTES.PRIVACY_POLICY} className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link to={ROUTES.TERMS} className="hover:text-slate-400 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
