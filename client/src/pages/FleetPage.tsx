import React from 'react';
import { MetaHead } from '@/seo/MetaHead';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const FleetPage: React.FC = () => {
  return (
    <>
      <MetaHead
        title="Our Fleet | Hatchbacks, Sedans, SUVs, Urbania & Buses"
        description="Explore our fleet of hatchbacks, sedans, SUVs, MUVs, tempo travellers, Force Urbania, coaches, mini buses, and buses for every travel need in Coimbatore."
      />
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Our Fleet' }]} />
        <h1 className="font-serif font-bold text-3xl md:text-4xl text-white mb-4">
          Our Premium Fleet
        </h1>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl">
          Comfortable vehicles for every journey, from solo travel to large group tours across South India.
        </p>
      </div>
    </>
  );
};
export default FleetPage;
