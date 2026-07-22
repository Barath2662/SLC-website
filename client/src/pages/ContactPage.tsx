import React from 'react';
import { MetaHead } from '@/seo/MetaHead';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const ContactPage: React.FC = () => {
  return (
    <>
      <MetaHead
        title="Contact Us | Call, WhatsApp & Visit Office in Singanallur"
        description="Contact Srii Lakshmi Cab in Singanallur, Coimbatore. Phone: 9443914314. Available 24x7 for cab rentals, airport transfers, and outstation tours."
      />
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Contact Us' }]} />
        <h1 className="font-serif font-bold text-3xl md:text-4xl text-white mb-4">
          Contact Srii Lakshmi Cab
        </h1>
      </div>
    </>
  );
};
export default ContactPage;
