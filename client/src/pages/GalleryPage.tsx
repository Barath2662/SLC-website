import React from 'react';
import { MetaHead } from '@/seo/MetaHead';
import { Breadcrumb } from '@/components/common/Breadcrumb';

export const GalleryPage: React.FC = () => {
  return (
    <>
      <MetaHead title="Photo Gallery | Fleet & Tour Showcase" />
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Gallery' }]} />
        <h1 className="font-serif font-bold text-3xl md:text-4xl text-white mb-4">
          Photo Gallery
        </h1>
      </div>
    </>
  );
};
export default GalleryPage;
