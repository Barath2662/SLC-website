import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { MetaHead } from '@/seo/MetaHead';
import { SchemaOrg } from '@/seo/SchemaOrg';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { UniversalEnquiryForm } from '@/components/enquiry/UniversalEnquiryForm';
import { CTABanner } from '@/components/common/CTABanner';
import { ShieldCheck, Clock, Award } from 'lucide-react';
import { BRAND_DETAILS } from '@/constants/brand';

export const RequestQuotePage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const vehicle = searchParams.get('vehicle') || undefined;
  const destination = searchParams.get('destination') || undefined;
  const service = searchParams.get('service') || undefined;

  return (
    <>
      <MetaHead
        title="Request a Free Travel Quote | Srii Lakshmi Cab"
        description="Tell us about your travel requirements and receive a customized vehicle recommendation and travel plan from Srii Lakshmi Cab."
      />
      <SchemaOrg schemaType="LocalBusiness" />

      {/* Hero Banner */}
      <div className="pt-28 pb-16 bg-gradient-to-b from-black via-dark-card to-dark-bg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Request a Quote' }]} />

          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 inline-block mb-3">
              Lead Generation & Travel Concierge
            </span>
            <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-white tracking-wide leading-tight mb-4">
              Tell Us About Your Journey
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Complete the form below with your journey details. Our travel advisor will personally contact you with the most suitable vehicle choice and custom travel plan.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <UniversalEnquiryForm
              initialVehicle={vehicle}
              initialDestination={destination}
              initialService={service}
              formTitle="Journey Consultation Request"
              formSubtitle="We never share your details or collect advance payments online to enquire."
            />
          </div>

          {/* Right Sidebar Trust Banner */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-dark-card border border-gold-500/30 space-y-4 gold-border-glow">
              <h3 className="font-serif font-bold text-xl text-white border-b border-slate-800 pb-3">
                Why Enquire With Us?
              </h3>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Fast Advisor Contact</span>
                    <span className="text-slate-400">Response within 15–30 mins during business hours.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Zero Obligation</span>
                    <span className="text-slate-400">No advance payment required to receive guidance.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Award className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">20+ Years Trusted Brand</span>
                    <span className="text-slate-400">Punctual drivers & sanitized clean vehicles.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-dark-card border border-slate-800 text-center space-y-3">
              <h4 className="font-serif font-bold text-base text-white">Prefer Calling Directly?</h4>
              <p className="text-xs text-slate-400">Speak with our travel desk right away:</p>
              <a
                href={`tel:${BRAND_DETAILS.phones[0].raw}`}
                className="font-serif font-bold text-lg text-gold-400 hover:underline block"
              >
                {BRAND_DETAILS.phones[0].display}
              </a>
            </div>
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

export default RequestQuotePage;
