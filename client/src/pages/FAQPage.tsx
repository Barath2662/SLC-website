import React, { useState } from 'react';
import { MetaHead } from '@/seo/MetaHead';
import { SchemaOrg } from '@/seo/SchemaOrg';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import { UniversalEnquiryForm } from '@/components/enquiry/UniversalEnquiryForm';
import { CTABanner } from '@/components/common/CTABanner';
import { HOMEPAGE_FAQS } from '@/data/faq';
import { FAQItem } from '@/types';

export const FAQPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('General');

  const categories = ['General', 'Booking & Enquiry', 'Hill & Outstation', 'Fleet & Drivers'];

  const bookingFaqs: FAQItem[] = [
    {
      question: 'Is there any online payment or advance booking deposit required to enquire?',
      answer: 'No online payment or registration is required to submit an enquiry. Our travel advisors personally discuss your trip requirements, confirm availability, and provide clear travel instructions.'
    },
    {
      question: 'How do I cancel or reschedule my cab booking?',
      answer: 'Simply call our 24x7 helpline (+91 94439 14314) or message us on WhatsApp. We provide flexible rescheduling for family emergencies and travel plan changes.'
    },
    {
      question: 'Do you provide GST tax invoices for corporate travel expenses?',
      answer: 'Yes, we provide official GST invoices for all corporate travel, industrial visits, and business delegate bookings.'
    }
  ];

  const hillFaqs: FAQItem[] = [
    {
      question: 'Are your drivers experienced in driving on Ooty and Valparai hairpin bends?',
      answer: 'Yes! All our hill station drivers are senior commercial drivers with extensive experience negotiating the 36 hairpin bends of Ooty and the 40 hairpin bends of Valparai safely.'
    },
    {
      question: 'Do your vehicles carry valid inter-state permits for Kerala and Karnataka?',
      answer: 'Yes, all our outstation vehicles possess all-India and South India tourist permits for smooth entry into Kerala (Munnar, Wayanad) and Karnataka (Mysore, Coorg, Bangalore).'
    },
    {
      question: 'What time should we start from Coimbatore for an Ooty day trip?',
      answer: 'We recommend departing early morning between 6:00 AM and 7:00 AM to enjoy pleasant weather and avoid peak Mettupalayam ghat road traffic.'
    }
  ];

  const fleetFaqs: FAQItem[] = [
    {
      question: 'Are your cabs air-conditioned and cleaned before every trip?',
      answer: 'Yes, every vehicle undergoes a complete interior cleaning, sanitization check, and AC inspection prior to picking up passengers.'
    },
    {
      question: 'What is the difference between a Tempo Traveller and Force Urbania?',
      answer: 'Force Urbania features a monocoque frame design with superior suspension, individual luxury bucket seats, reduced noise levels, panoramic windows, and modern aesthetic elegance perfect for executive VIP travel.'
    },
    {
      question: 'Can we hire mini buses for school or college student trips?',
      answer: 'Yes, our 29/35-seater Mini Buses and 40+ seater Large Buses are speed-governed, pass safety audits, and are driven by experienced commercial drivers for educational trips.'
    }
  ];

  const getCurrentFaqs = () => {
    switch (activeCategory) {
      case 'Booking & Enquiry':
        return bookingFaqs;
      case 'Hill & Outstation':
        return hillFaqs;
      case 'Fleet & Drivers':
        return fleetFaqs;
      default:
        return HOMEPAGE_FAQS;
    }
  };

  return (
    <>
      <MetaHead
        title="Frequently Asked Questions (FAQ) | Srii Lakshmi Cab"
        description="Find answers to common questions regarding cab rentals, airport drops, outstation tours to Ooty & Munnar, Tempo Traveller bookings, and corporate travel in Coimbatore."
      />
      <SchemaOrg schemaType="FAQPage" />

      {/* Hero Banner */}
      <div className="pt-28 pb-16 bg-gradient-to-b from-black via-dark-card to-dark-bg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'FAQ' }]} />

          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 inline-block mb-3">
              Help Center & FAQs
            </span>
            <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-white tracking-wide leading-tight mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Have questions about booking a cab, airport pickup, outstation trip to Ooty, or vehicle choices? Find quick, transparent answers below.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs & FAQ List */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'gold-gradient-bg text-black shadow-lg font-bold'
                  : 'bg-dark-card border border-slate-800 text-slate-300 hover:border-gold-500/40 hover:text-white'
              }`}
            >
              {cat} FAQs
            </button>
          ))}
        </div>

        <FAQAccordion items={getCurrentFaqs()} />
      </section>

      {/* Universal Travel Lead Form */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <UniversalEnquiryForm
          formTitle="Still Have Questions?"
          formSubtitle="Send us your question or trip details. Our travel advisor will call or message you promptly."
        />
      </section>

      {/* Final Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <CTABanner />
      </div>
    </>
  );
};

export default FAQPage;
