import React, { useState } from 'react';
import { MetaHead } from '@/seo/MetaHead';
import { SchemaOrg } from '@/seo/SchemaOrg';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { SectionHeading } from '@/components/common/SectionHeading';
import { FleetCard } from '@/components/fleet/FleetCard';
import { FleetComparisonTable } from '@/components/fleet/FleetComparisonTable';
import { VehicleRecommendationWizard } from '@/components/home/VehicleRecommendationWizard';
import { UniversalEnquiryForm } from '@/components/enquiry/UniversalEnquiryForm';
import { CTABanner } from '@/components/common/CTABanner';
import { FLEET_DATA } from '@/data/fleet';

export const FleetPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Sedan & Hatchback', 'SUV & MVP', 'Tempo Traveller & Urbania', 'Bus & Coach'];

  const filteredFleet = FLEET_DATA.filter((item) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Sedan & Hatchback') return item.id === 'hatchback' || item.id === 'sedan';
    if (activeTab === 'SUV & MVP') return item.id === 'suv' || item.id === 'mvp';
    if (activeTab === 'Tempo Traveller & Urbania') return item.id === 'tempo-traveller' || item.id === 'force-urbania';
    if (activeTab === 'Bus & Coach') return item.id === 'coach' || item.id === 'mini-bus' || item.id === 'bus';
    return true;
  });

  return (
    <>
      <MetaHead
        title="Our Premium Fleet | Cars, Tempo Travellers, Urbania, Coaches & Buses"
        description="Explore our fleet of hatchbacks, sedans, SUVs, MVPs, tempo travellers, Force Urbania, coaches, mini buses, and buses for every travel need in Coimbatore."
      />
      <SchemaOrg schemaType="LocalBusiness" />

      {/* Hero Banner */}
      <div className="pt-28 pb-16 bg-gradient-to-b from-black via-dark-card to-dark-bg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Our Fleet' }]} />

          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 inline-block mb-3">
              Clean, Sanitized & Modern Cabs
            </span>
            <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-white tracking-wide leading-tight mb-4">
              Our Premium Fleet
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              From executive sedans for quick airport drops to 20-seater Force Urbanias and 50-seater tourist buses—our vehicles undergo rigorous safety inspections and interior sanitization before every journey.
            </p>
          </div>
        </div>
      </div>

      {/* Fleet Filter Tabs & Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeTab === cat
                  ? 'gold-gradient-bg text-black shadow-lg font-bold'
                  : 'bg-dark-card border border-slate-800 text-slate-300 hover:border-gold-500/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFleet.map((vehicle) => (
            <FleetCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </section>

      {/* Vehicle Comparison Table without Pricing */}
      <section className="py-16 bg-dark-card/40 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FleetComparisonTable />
        </div>
      </section>

      {/* Interactive Vehicle Advisor Concierge */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Interactive Vehicle Advisor"
          title="Not Sure Which Vehicle Fits Your Group?"
          subtitle="Use our 3-step recommendation tool to find the exact vehicle matching your group size, luggage volume, and travel destination."
        />

        <VehicleRecommendationWizard />
      </section>

      {/* Universal Travel Lead Form */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <UniversalEnquiryForm
          formTitle="Tell Us Your Travel Plan"
          formSubtitle="Share your travel dates and group size. Our travel advisor will recommend the perfect vehicle choice for your trip."
        />
      </section>

      {/* Final Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <CTABanner />
      </div>
    </>
  );
};

export default FleetPage;
