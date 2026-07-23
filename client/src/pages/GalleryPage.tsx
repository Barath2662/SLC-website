import React, { useState } from 'react';
import { Eye, Image as ImageIcon } from 'lucide-react';
import { MetaHead } from '@/seo/MetaHead';
import { SchemaOrg } from '@/seo/SchemaOrg';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { LightboxModal } from '@/components/gallery/LightboxModal';
import { UniversalEnquiryForm } from '@/components/enquiry/UniversalEnquiryForm';
import { CTABanner } from '@/components/common/CTABanner';
import { GALLERY_DATA } from '@/data/gallery';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const categories = ['All', 'Fleet', 'Customer Trips', 'Destinations', 'Wedding Travel', 'Corporate Travel'];

  const filteredImages = GALLERY_DATA.filter((img) => {
    if (activeCategory === 'All') return true;
    return img.category === activeCategory;
  });

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <MetaHead
        title="Photo Gallery | Fleet, Destinations & Travel Memories"
        description="Browse photo gallery of Srii Lakshmi Cab's premium fleet, customer holiday trips to Ooty, Munnar & Kodaikanal, wedding logistics, and corporate travel."
      />
      <SchemaOrg schemaType="LocalBusiness" />

      {/* Hero Banner */}
      <div className="pt-28 pb-16 bg-gradient-to-b from-black via-dark-card to-dark-bg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Gallery' }]} />

          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 inline-block mb-3">
              Photo Showcase & Memories
            </span>
            <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-white tracking-wide leading-tight mb-4">
              Srii Lakshmi Cab Gallery
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore authentic photos of our executive fleet, customer hill station trips, wedding guest transportation, and South Indian travel destinations.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'gold-gradient-bg text-black shadow-lg font-bold'
                  : 'bg-dark-card border border-slate-800 text-slate-300 hover:border-gold-500/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pinterest-Style Masonry Grid */}
        {filteredImages.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((img, idx) => (
              <div
                key={img.id}
                onClick={() => openLightbox(idx)}
                className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-dark-card border border-slate-800 hover:border-gold-500/40 shadow-xl cursor-pointer transition-all duration-300"
              >
                <img
                  src={img.imageUrl}
                  alt={img.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-75 group-hover:opacity-95 transition-opacity" />

                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  <span className="self-start text-[10px] font-bold uppercase tracking-wider text-gold-400 px-2.5 py-1 rounded-full bg-black/70 border border-gold-500/30">
                    {img.category}
                  </span>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-base text-white group-hover:text-gold-400 transition-colors">
                        {img.title}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-1">{img.caption}</p>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-gold-500 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-dark-card rounded-2xl border border-slate-800 max-w-md mx-auto space-y-3">
            <ImageIcon className="w-10 h-10 text-slate-500 mx-auto" />
            <h3 className="font-serif font-bold text-lg text-white">New Memories Coming Soon</h3>
            <p className="text-xs text-slate-400">Photos for this category will be uploaded shortly.</p>
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        items={filteredImages}
        currentIndex={selectedIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setSelectedIndex(idx)}
      />

      {/* Universal Travel Lead Form */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <UniversalEnquiryForm
          formTitle="Plan Your Next Trip With Us"
          formSubtitle="Inspired by our travel gallery? Fill in your trip details and let our travel advisor customize the perfect travel plan for you."
        />
      </section>

      {/* Final Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <CTABanner />
      </div>
    </>
  );
};

export default GalleryPage;
