import React from 'react';
import { MetaHead } from '@/seo/MetaHead';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const AboutPage: React.FC = () => {
  return (
    <>
      <MetaHead
        title="About Us | Trusted Travel Partner Since 2005"
        description="Learn about Srii Lakshmi Cab, a trusted travel company in Coimbatore providing reliable taxi and travel services across South India since 2005."
      />
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'About Us' }]} />
        <h1 className="font-serif font-bold text-3xl md:text-4xl text-white mb-4">
          About Srii Lakshmi Cab
        </h1>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl">
          Founded in 2005, Srii Lakshmi Cab has been providing dependable travel solutions from Coimbatore for over two decades.
        </p>
      </div>
    </>
  );
};
export default AboutPage;
