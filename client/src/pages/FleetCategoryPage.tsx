import React from 'react';
import { useParams } from 'react-router-dom';
import { MetaHead } from '@/seo/MetaHead';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ROUTES } from '@/constants/routes';

export const FleetCategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const categoryName = category
    ? category.replace('-', ' ').toUpperCase()
    : 'Vehicle Details';

  return (
    <>
      <MetaHead
        title={`${categoryName} Rental in Coimbatore`}
        description={`Rent premium ${categoryName} in Coimbatore for local travel, airport transfers, and outstation trips with Srii Lakshmi Cab.`}
      />
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Fleet', path: ROUTES.FLEET }, { label: categoryName }]} />
        <h1 className="font-serif font-bold text-3xl md:text-4xl text-white mb-4">
          {categoryName} Rental
        </h1>
      </div>
    </>
  );
};
export default FleetCategoryPage;
