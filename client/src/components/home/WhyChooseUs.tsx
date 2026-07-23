import React from 'react';
import { ShieldCheck, Clock, Award, Users, MapPin, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/common/SectionHeading';
import { BRAND_DETAILS } from '@/constants/brand';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6 text-gold-500" />,
      title: `${BRAND_DETAILS.experienceYears} Years of Legacy`,
      description: 'Serving Coimbatore and South India since 2005 with zero compromise on safety and comfort.',
    },
    {
      icon: <Users className="w-6 h-6 text-gold-500" />,
      title: 'Senior Highway Chauffeurs',
      description: 'Professional, courteous drivers trained for hill roads (Ooty 36 hairpin bends) and long outstation trips.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: 'Sanitized Luxury Fleet',
      description: 'Hatchbacks to 50-seater tourist buses with climate control AC and pristine clean interiors.',
    },
    {
      icon: <Clock className="w-6 h-6 text-gold-500" />,
      title: '24×7 Instant Dispatch',
      description: 'Guaranteed punctual pickups at CJB Airport, Coimbatore Junction, Singanallur, and city hotels.',
    },
    {
      icon: <MapPin className="w-6 h-6 text-gold-500" />,
      title: 'All-India & State Permits',
      description: 'Fully permitted commercial vehicles equipped with toll tags for seamless interstate travel.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gold-500" />,
      title: 'Transparent Pricing',
      description: 'Honest communication with no hidden hikes or unexpected surprise charges.',
    },
  ];

  return (
    <section className="py-20 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="The Srii Lakshmi Advantage"
          title="Why South India Chooses Us Since 2005"
          subtitle="Built on trust, punctuality, and fleet quality—here is why thousands of families and corporates choose Srii Lakshmi Cab."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <Card key={idx} className="p-6 bg-dark-card border-slate-800 space-y-3 hover:border-gold-500/40">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="font-serif font-bold text-lg text-white">{item.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
