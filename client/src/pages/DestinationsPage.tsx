import React from 'react';
import { MetaHead } from '@/seo/MetaHead';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const DestinationsPage: React.FC = () => {
  return (
    <>
      <MetaHead
        title="Popular Destinations from Coimbatore | Ooty, Munnar, Kodaikanal"
        description="Explore popular South India travel destinations from Coimbatore with Srii Lakshmi Cab: Ooty, Kodaikanal, Munnar, Valparai, Mysore, Isha Foundation, Palani and more."
      />
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Destinations' }]} />
        <h1 className="font-serif font-bold text-3xl md:text-4xl text-white mb-4">
          Explore South India Destinations
        </h1>
      </div>
    </>
  );
};
export default DestinationsPage;
