import React from 'react';
import { ShieldCheck, Clock, Award, Users, MapPin, Sparkles } from 'lucide-react';
import PixelCard from '@/components/ui/PixelCard';
import { SectionHeading } from '@/components/common/SectionHeading';
import { BRAND_DETAILS } from '@/constants/brand';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-7 h-7 text-[#C8A44D]" />,
      title: `${BRAND_DETAILS.experienceYears} Years of Legacy`,
      description: 'Serving Coimbatore and South India since 2007 with zero compromise on safety and comfort.',
    },
    {
      icon: <Users className="w-7 h-7 text-[#C8A44D]" />,
      title: 'Senior Highway Chauffeurs',
      description: 'Professional, courteous drivers trained for hill roads (Ooty 36 hairpin bends) and long outstation trips.',
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-emerald-600" />,
      title: 'Sanitized Luxury Fleet',
      description: 'Hatchbacks to 50-seater tourist buses with climate control AC and pristine clean interiors.',
    },
    {
      icon: <Clock className="w-7 h-7 text-[#C8A44D]" />,
      title: '24×7 Instant Dispatch',
      description: 'Guaranteed punctual pickups at CJB Airport, Coimbatore Junction, Singanallur, and city hotels.',
    },
    {
      icon: <MapPin className="w-7 h-7 text-[#C8A44D]" />,
      title: 'All-India & State Permits',
      description: 'Fully permitted commercial vehicles equipped with toll tags for seamless interstate travel.',
    },
    {
      icon: <Sparkles className="w-7 h-7 text-[#C8A44D]" />,
      title: 'Transparent Pricing',
      description: 'Honest communication with no hidden hikes or unexpected surprise charges.',
    },
  ];

  return (
    <section className="py-20 bg-[#F8F6F1] border-y border-[#E7E5E4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="The Srii Lakshmi Advantage"
          title="Why South India Chooses Us Since 2007"
          subtitle="Built on trust, punctuality, and fleet quality—here is why thousands of families and corporates choose Srii Lakshmi Cab."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <PixelCard
              key={idx}
              colors={['#c8a44d', '#e5ca68', '#d4af37', '#b8932e']}
              glowColor="#c8a44d"
              gap={5}
              pixelSize={2}
              speed={40}
              revealDuration={500}
              spotlight={0.55}
              glow={0.45}
              opacity={0.3}
              fade={0.65}
              trigger="hover"
              radius={16}
              clickPulse
              intro
              theme="light"
              className="group border border-[#E7E5E4] hover:border-[#C8A44D]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ background: 'rgba(255,255,255,0.92)' }}
            >
              <div className="p-6 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#C8A44D]/10 border border-[#C8A44D]/25 flex items-center justify-center group-hover:bg-[#C8A44D]/18 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-serif font-bold text-lg text-[#111111]">{item.title}</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">{item.description}</p>
              </div>
            </PixelCard>
          ))}
        </div>
      </div>
    </section>
  );
};
