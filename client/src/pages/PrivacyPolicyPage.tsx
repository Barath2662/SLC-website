import React from 'react';
import { MetaHead } from '@/seo/MetaHead';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <MetaHead title="Privacy Policy" />
      <div className="pt-24 pb-16 max-w-4xl mx-auto px-4">
        <h1 className="font-serif font-bold text-3xl text-white mb-6">Privacy Policy</h1>
        <p className="text-slate-300 text-sm leading-relaxed">
          We respect your privacy. Information submitted through this website is used only to respond to your travel enquiry.
        </p>
      </div>
    </>
  );
};
export default PrivacyPolicyPage;
