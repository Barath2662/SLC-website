import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { MetaHead } from '@/seo/MetaHead';
import { SchemaOrg } from '@/seo/SchemaOrg';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { DestinationCard } from '@/components/destination/DestinationCard';
import { UniversalEnquiryForm } from '@/components/enquiry/UniversalEnquiryForm';
import { CTABanner } from '@/components/common/CTABanner';
import { DESTINATIONS_DATA } from '@/data/destinations';

export const DestinationsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Hill Station', 'Pilgrimage', 'City / Outstation', 'Leisure & Theme Park'];

  const filteredDestinations = DESTINATIONS_DATA.filter((d) => {
    const matchesCategory = activeCategory === 'All' || d.category === activeCategory;
    const matchesSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <MetaHead
        title="Popular South India Destinations from Coimbatore | Ooty, Munnar, Kodaikanal"
        description="Explore popular South India travel destinations from Coimbatore with Srii Lakshmi Cab: Ooty, Kodaikanal, Munnar, Valparai, Mysore, Isha Foundation, Palani and more."
      />
      <SchemaOrg schemaType="LocalBusiness" />

      {/* Hero Banner */}
      <div className="pt-28 pb-16 bg-gradient-to-b from-black via-dark-card to-dark-bg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Destinations' }]} />

          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 inline-block mb-3">
              South India Travel Guides
            </span>
            <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-white tracking-wide leading-tight mb-4">
              Explore Destinations from Coimbatore
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Plan comfortable outstation cab journeys to famous hill stations, revered temples, heritage cities, and nature reserves across Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search destination (e.g. Ooty, Munnar, Isha)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-dark-bg/90 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-gold-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs & Grid */}
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

        {/* Destination Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-dark-card rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No destinations found matching "{searchQuery}".</p>
          </div>
        )}
      </section>

      {/* Universal Travel Lead Form */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <UniversalEnquiryForm
          formTitle="Plan Your Destination Trip"
          formSubtitle="Tell us where you want to travel from Coimbatore. Our advisor will suggest the best route, vehicle option, and travel plan."
        />
      </section>

      {/* Final Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <CTABanner />
      </div>
    </>
  );
};

export default DestinationsPage;
