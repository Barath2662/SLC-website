import React from 'react';
import { useParams } from 'react-router-dom';
import { MetaHead } from '@/seo/MetaHead';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ROUTES } from '@/constants/routes';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const title = slug ? slug.replace('-', ' ').toUpperCase() : 'Service Detail';

  return (
    <>
      <MetaHead title={`${title} Service in Coimbatore`} />
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Services', path: ROUTES.SERVICES }, { label: title }]} />
        <h1 className="font-serif font-bold text-3xl md:text-4xl text-white mb-4">
          {title}
        </h1>
      </div>
    </>
  );
};
export default ServiceDetailPage;
