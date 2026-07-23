import React, { useState } from 'react';
import { MetaHead } from '@/seo/MetaHead';
import { SchemaOrg } from '@/seo/SchemaOrg';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServiceCard } from '@/components/services/ServiceCard';
import { UniversalEnquiryForm } from '@/components/enquiry/UniversalEnquiryForm';
import { CTABanner } from '@/components/common/CTABanner';
import { SERVICES_DATA } from '@/data/services';

export const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Airport & Outstation', 'Corporate & Events', 'Group & Educational', 'Pilgrimage & Local'];

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Airport & Outstation') return s.id === 'airport-transfer' || s.id === 'outstation-taxi';
    if (activeCategory === 'Corporate & Events') return s.id === 'corporate-travel' || s.id === 'wedding-transportation';
    if (activeCategory === 'Group & Educational') return s.id === 'employee-transport' || s.id === 'industrial-visits' || s.id === 'school-college-trips';
    if (activeCategory === 'Pilgrimage & Local') return s.id === 'temple-tours' || s.id === 'family-tours' || s.id === 'local-sightseeing';
    return true;
  });

  return (
    <>
      <MetaHead
        title="Our Travel Services | Airport Transfers, Outstation Taxis & Group Travel"
        description="Comprehensive cab and travel services in Coimbatore: Airport transfers, outstation taxis, corporate travel, wedding transportation, temple tours, and tour packages."
      />
      <SchemaOrg schemaType="LocalBusiness" />

      {/* Hero Banner */}
      <div className="pt-28 pb-16 bg-gradient-to-b from-black via-dark-card to-dark-bg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Our Services' }]} />

          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 inline-block mb-3">
              Personalized Travel Solutions
            </span>
            <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-white tracking-wide leading-tight mb-4">
              Travel Solutions for Every Journey
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether you are travelling alone for a business meeting, taking your family on a hill holiday, coordinating wedding guest logistics, or arranging student industrial visits—Srii Lakshmi Cab provides dependable transportation across South India.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
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
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Universal Travel Lead Form */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <UniversalEnquiryForm
          formTitle="Tell Us Your Travel Requirements"
          formSubtitle="Share your travel dates and requirements. Our travel advisor will recommend the best vehicle and travel plan for your trip."
        />
      </section>

      {/* Final Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <CTABanner />
      </div>
    </>
  );
};

export default ServicesPage;
