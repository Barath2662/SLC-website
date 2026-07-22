import React from 'react';
import { MetaHead } from '@/seo/MetaHead';

export const TermsPage: React.FC = () => {
  return (
    <>
      <MetaHead title="Terms & Conditions" />
      <div className="pt-24 pb-16 max-w-4xl mx-auto px-4">
        <h1 className="font-serif font-bold text-3xl text-white mb-6">Terms & Conditions</h1>
        <p className="text-slate-300 text-sm leading-relaxed">
          Travel arrangements are confirmed after direct communication with our team.
        </p>
      </div>
    </>
  );
};
export default TermsPage;
