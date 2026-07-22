import React from 'react';
import { MetaHead } from '@/seo/MetaHead';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <MetaHead
        title="Our Services | Airport Transfer, Outstation Taxi, Corporate & Wedding"
        description="Comprehensive cab and travel services in Coimbatore: Airport transfers, outstation taxis, corporate travel, wedding transportation, temple tours, and tour packages."
      />
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Services' }]} />
        <h1 className="font-serif font-bold text-3xl md:text-4xl text-white mb-4">
          Travel Solutions for Every Journey
        </h1>
      </div>
    </>
  );
};
export default ServicesPage;
