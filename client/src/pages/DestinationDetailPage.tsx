import React from 'react';
import { useParams } from 'react-router-dom';
import { MetaHead } from '@/seo/MetaHead';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ROUTES } from '@/constants/routes';

export const DestinationDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const destinationName = slug ? slug.replace('-', ' ').toUpperCase() : 'Destination';

  return (
    <>
      <MetaHead
        title={`Coimbatore to ${destinationName} Cab Service`}
        description={`Travel from Coimbatore to ${destinationName} with comfort, safe drivers, and reliable vehicles from Srii Lakshmi Cab.`}
      />
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Destinations', path: ROUTES.DESTINATIONS }, { label: destinationName }]} />
        <h1 className="font-serif font-bold text-3xl md:text-4xl text-white mb-4">
          Travel to {destinationName}
        </h1>
      </div>
    </>
  );
};
export default DestinationDetailPage;
