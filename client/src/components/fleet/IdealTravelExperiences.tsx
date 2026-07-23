import React from 'react';
import {
  Plane,
  Briefcase,
  Heart,
  Mountain,
  Users,
  Building,
  GraduationCap,
  Sparkles,
  MapPin,
  Landmark,
  Compass,
  Bus as BusIcon,
  ShieldCheck,
} from 'lucide-react';

export interface IdealExperience {
  title: string;
  subtitle?: string;
  icon?: string;
}

interface IdealTravelExperiencesProps {
  experiences: (string | IdealExperience)[];
  title?: string;
  subtitle?: string;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Airport: <Plane className="w-5 h-5 text-gold-500" />,
  'Airport Transfers': <Plane className="w-5 h-5 text-gold-500" />,
  'Airport Drops': <Plane className="w-5 h-5 text-gold-500" />,
  Business: <Briefcase className="w-5 h-5 text-gold-500" />,
  'Business Travel': <Briefcase className="w-5 h-5 text-gold-500" />,
  'Executive Travel': <Briefcase className="w-5 h-5 text-gold-500" />,
  Couples: <Heart className="w-5 h-5 text-pink-400" />,
  'Couples & Small Families': <Heart className="w-5 h-5 text-pink-400" />,
  'Hill Stations': <Mountain className="w-5 h-5 text-emerald-400" />,
  'Hill Station Trips': <Mountain className="w-5 h-5 text-emerald-400" />,
  Families: <Users className="w-5 h-5 text-gold-400" />,
  'Family Vacations': <Users className="w-5 h-5 text-gold-400" />,
  'Large Groups': <Users className="w-5 h-5 text-gold-400" />,
  'Road Trips': <Compass className="w-5 h-5 text-blue-400" />,
  'Weekend Getaways': <Compass className="w-5 h-5 text-blue-400" />,
  Corporate: <Building className="w-5 h-5 text-gold-500" />,
  'Corporate Events': <Building className="w-5 h-5 text-gold-500" />,
  'Corporate Transportation': <Building className="w-5 h-5 text-gold-500" />,
  'School & College': <GraduationCap className="w-5 h-5 text-purple-400" />,
  'School & Industrial': <GraduationCap className="w-5 h-5 text-purple-400" />,
  School: <GraduationCap className="w-5 h-5 text-purple-400" />,
  College: <GraduationCap className="w-5 h-5 text-purple-400" />,
  'Industrial Visits': <Building className="w-5 h-5 text-blue-400" />,
  'Wedding Guests': <Sparkles className="w-5 h-5 text-gold-400" />,
  'Wedding Transportation': <Sparkles className="w-5 h-5 text-gold-400" />,
  'VIP Guests': <Sparkles className="w-5 h-5 text-gold-400" />,
  'Luxury Tours': <Sparkles className="w-5 h-5 text-gold-400" />,
  'Temple Tours': <Landmark className="w-5 h-5 text-amber-400" />,
  'Pilgrimage Tours': <Landmark className="w-5 h-5 text-amber-400" />,
  'Family Temple Tours': <Landmark className="w-5 h-5 text-amber-400" />,
  'Local Sightseeing': <MapPin className="w-5 h-5 text-gold-500" />,
  'Short Trips': <MapPin className="w-5 h-5 text-gold-500" />,
  'Budget Travel': <ShieldCheck className="w-5 h-5 text-emerald-400" />,
  'Senior Citizen Comfort': <Heart className="w-5 h-5 text-rose-400" />,
  'Large Events': <BusIcon className="w-5 h-5 text-gold-500" />,
  'Tour Packages': <Compass className="w-5 h-5 text-blue-400" />,
  Tours: <Compass className="w-5 h-5 text-blue-400" />,
};

export const IdealTravelExperiences: React.FC<IdealTravelExperiencesProps> = ({
  experiences,
  title = 'Ideal Travel Experiences',
  subtitle = 'Specially recommended for these travel purposes based on passenger capacity, luggage space, and terrain comfort.',
}) => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">{title}</h3>
        {subtitle && <p className="text-xs sm:text-sm text-slate-300 mt-1">{subtitle}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {experiences.map((item, idx) => {
          const itemTitle = typeof item === 'string' ? item : item.title;
          const itemSub = typeof item === 'string' ? undefined : item.subtitle;
          const icon = ICON_MAP[itemTitle] || <Compass className="w-5 h-5 text-gold-500" />;

          return (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-dark-card border border-slate-800 hover:border-gold-500/40 transition-all flex items-start space-x-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-dark-surface border border-slate-800 group-hover:border-gold-500/30 flex items-center justify-center shrink-0 transition-colors">
                {icon}
              </div>
              <div className="space-y-0.5">
                <h4 className="font-serif font-bold text-sm text-white group-hover:text-gold-400 transition-colors">
                  {itemTitle}
                </h4>
                {itemSub && <p className="text-[11px] text-slate-400 leading-snug">{itemSub}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
