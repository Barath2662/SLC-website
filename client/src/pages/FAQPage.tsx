import React from 'react';
import { MetaHead } from '@/seo/MetaHead';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const FAQPage: React.FC = () => {
  return (
    <>
      <MetaHead title="Frequently Asked Questions (FAQ)" />
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'FAQ' }]} />
        <h1 className="font-serif font-bold text-3xl md:text-4xl text-white mb-4">
          Frequently Asked Questions
        </h1>
      </div>
    </>
  );
};
export default FAQPage;
