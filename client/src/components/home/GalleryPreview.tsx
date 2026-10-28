import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye } from 'lucide-react';
import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui/Button';

export const GalleryPreview: React.FC = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop',
      title: 'Force Urbania Luxury Transport',
      category: 'Fleet Showcase',
    },
    {
      url: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800&auto=format&fit=crop',
      title: 'Ooty Tea Garden Tour Route',
      category: 'Destinations',
    },
    {
      url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop',
      title: 'SUV Hill Station Expedition',
      category: 'Hill Station Travel',
    },
    {
      url: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=800&auto=format&fit=crop',
      title: 'Isha Foundation Adiyogi Trip',
      category: 'Temple Pilgrimage',
    },
    {
      url: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800&auto=format&fit=crop',
      title: 'Tempo Traveller Group Outing',
      category: 'Group Travel',
    },
    {
      url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop',
      title: 'Executive Sedan Airport Drop',
      category: 'Corporate Transfers',
    },
  ];

  return (
    <section className="py-20 bg-[#FCFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C8A44D] px-3 py-1 rounded-full bg-[#C8A44D]/10 border border-[#C8A44D]/30 inline-block mb-3">
              Photo Showcase
            </span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#111111] tracking-wide">
              Srii Lakshmi Cab Gallery
            </h2>
          </div>

          <div className="mt-4 md:mt-0">
            <Link to={ROUTES.GALLERY}>
              <Button variant="outline" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                View Full Photo Gallery
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="group relative h-64 rounded-2xl overflow-hidden bg-white border border-[#E7E5E4] hover:border-[#C8A44D]/40 shadow-md cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <span className="self-start text-[10px] font-bold uppercase tracking-wider text-[#C8A44D] px-2.5 py-1 rounded-full bg-black/60 border border-[#C8A44D]/30">
                  {img.category}
                </span>

                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-lg text-white group-hover:text-[#C8A44D] transition-colors">
                    {img.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-[#C8A44D] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
