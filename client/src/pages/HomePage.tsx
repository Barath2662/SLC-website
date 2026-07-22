import React from 'react';
import { MetaHead } from '@/seo/MetaHead';
import { BRAND_DETAILS } from '@/constants/brand';

export const HomePage: React.FC = () => {
  return (
    <>
      <MetaHead
        title="Premium Cab & Taxi Service in Coimbatore Since 2005"
        description="Srii Lakshmi Cab offers premium cab services, airport transfers, outstation taxis, tempo travellers, Urbania, coaches, mini buses, and buses in Coimbatore. Trusted since 2005."
      />
      <div className="pt-24 pb-16 min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <span className="text-gold-400 font-medium text-xs tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30">
          Established {BRAND_DETAILS.establishedYear} • Coimbatore
        </span>
        <h1 className="font-serif font-bold text-3xl md:text-5xl text-white max-w-3xl leading-tight mb-4">
          Premium Cab & Travel Services in Coimbatore
        </h1>
        <p className="text-slate-300 max-w-xl text-sm md:text-base leading-relaxed mb-8">
          Safe, comfortable, and reliable transportation across South India for families, corporate teams, airport transfers, and group tours.
        </p>
      </div>
    </>
  );
};
export default HomePage;
