import React from 'react';
import { MetaHead } from '@/seo/MetaHead';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const RequestQuotePage: React.FC = () => {
  return (
    <>
      <MetaHead
        title="Request a Free Quote | Plan Your Trip"
        description="Tell us about your trip details and receive a customized travel quote and vehicle recommendation from Srii Lakshmi Cab advisors."
      />
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Request Quote' }]} />
        <h1 className="font-serif font-bold text-3xl md:text-4xl text-white mb-4">
          Tell Us About Your Journey
        </h1>
      </div>
    </>
  );
};
export default RequestQuotePage;
