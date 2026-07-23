import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, Instagram, ExternalLink } from 'lucide-react';
import { MetaHead } from '@/seo/MetaHead';
import { SchemaOrg } from '@/seo/SchemaOrg';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { OfficeMap } from '@/components/common/OfficeMap';
import { UniversalEnquiryForm } from '@/components/enquiry/UniversalEnquiryForm';
import { CTABanner } from '@/components/common/CTABanner';
import { Card } from '@/components/ui/Card';
import { BRAND_DETAILS } from '@/constants/brand';
import { useContactModal } from '@/context/ContactModalContext';

export const ContactPage: React.FC = () => {
  const { openCallModal, openWhatsAppModal } = useContactModal();

  return (
    <>
      <MetaHead
        title="Contact Us | Call, WhatsApp & Office in Singanallur, Coimbatore"
        description="Contact Srii Lakshmi Cab in Singanallur, Coimbatore. Phone: 9443914314. Available 24x7 for cab rentals, airport transfers, and outstation tours."
      />
      <SchemaOrg schemaType="LocalBusiness" />

      {/* Hero Banner */}
      <div className="pt-28 pb-16 bg-gradient-to-b from-black via-dark-card to-dark-bg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Contact Us' }]} />

          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 inline-block mb-3">
              Let's Plan Your Next Journey
            </span>
            <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-white tracking-wide leading-tight mb-4">
              Contact Srii Lakshmi Cab
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you are planning an airport transfer, family vacation to Ooty, corporate travel, or group tour—our team is here 24×7 to assist you.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Cards Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Phone Card */}
          <Card className="p-6 bg-dark-card border-slate-800 space-y-3 hover:border-gold-500/40">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-500">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-white">Phone Numbers</h3>
            <div className="space-y-1 text-xs text-slate-300">
              {BRAND_DETAILS.phones.map((p, idx) => (
                <div key={idx}>
                  <button
                    onClick={openCallModal}
                    className="hover:text-gold-400 font-semibold transition-colors cursor-pointer text-left"
                  >
                    📞 {p.display}
                  </button>
                  {p.primary && <span className="text-gold-400 text-[10px] ml-1.5 font-bold">(Primary)</span>}
                </div>
              ))}
            </div>
          </Card>

          {/* WhatsApp Card */}
          <Card className="p-6 bg-dark-card border-slate-800 space-y-3 hover:border-emerald-500/40">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-white">WhatsApp Chat</h3>
            <p className="text-xs text-slate-300">Instant travel plan assistance & enquiry chat.</p>
            <button
              onClick={() => openWhatsAppModal()}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 pt-1 cursor-pointer"
            >
              <span>Choose WhatsApp Number</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </Card>

          {/* Office Address Card */}
          <Card className="p-6 bg-dark-card border-slate-800 space-y-3 hover:border-gold-500/40">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-500">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-white">Office Address</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{BRAND_DETAILS.address.full}</p>
          </Card>

          {/* Business Hours & Email Card */}
          <Card className="p-6 bg-dark-card border-slate-800 space-y-3 hover:border-gold-500/40">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-500">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-white">Business Hours</h3>
            <p className="text-xs font-semibold text-gold-400">{BRAND_DETAILS.businessHours}</p>
            <div className="pt-2 border-t border-slate-800 text-xs">
              <span className="text-slate-400">Email: </span>
              <a href={`mailto:${BRAND_DETAILS.email}`} className="text-slate-200 hover:text-gold-400 font-medium">
                {BRAND_DETAILS.email}
              </a>
            </div>
          </Card>
        </div>

        {/* Map & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-6">
            <OfficeMap />

            <div className="p-6 rounded-2xl bg-dark-card border border-slate-800 flex items-center space-x-4">
              <Instagram className="w-8 h-8 text-pink-500 shrink-0" />
              <div>
                <h4 className="font-serif font-bold text-white text-sm">Follow Srii Lakshmi Cab on Instagram</h4>
                <p className="text-xs text-slate-400 mb-2">Check out latest fleet updates and customer trip stories.</p>
                <a
                  href={BRAND_DETAILS.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-gold-400 hover:underline inline-flex items-center space-x-1"
                >
                  <span>@sriilakshmicab</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <UniversalEnquiryForm
              formTitle="Send Us a Travel Message"
              formSubtitle="Share your travel details. Our team will contact you with the best vehicle choice and travel plan details."
            />
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <CTABanner />
      </div>
    </>
  );
};

export default ContactPage;
