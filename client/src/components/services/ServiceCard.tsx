import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Compass, Briefcase, Sparkles, Landmark, Users, ShieldCheck, GraduationCap, Building, MapPin, ArrowRight } from 'lucide-react';
import { ServiceItem } from '@/types';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/constants/routes';

interface ServiceCardProps {
  service: ServiceItem;
}

const iconMap: Record<string, React.ReactNode> = {
  Plane: <Plane className="w-6 h-6 text-gold-500" />,
  Compass: <Compass className="w-6 h-6 text-gold-500" />,
  Briefcase: <Briefcase className="w-6 h-6 text-gold-500" />,
  Sparkles: <Sparkles className="w-6 h-6 text-gold-500" />,
  Landmark: <Landmark className="w-6 h-6 text-gold-500" />,
  Users: <Users className="w-6 h-6 text-gold-500" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-gold-500" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-gold-500" />,
  Building: <Building className="w-6 h-6 text-gold-500" />,
  MapPin: <MapPin className="w-6 h-6 text-gold-500" />,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const iconKey = service.iconName || service.icon || '';
  const iconComponent = iconMap[iconKey] || <Compass className="w-6 h-6 text-gold-500" />;

  return (
    <Card className="flex flex-col h-full bg-dark-card border-slate-800 hover:border-gold-500/40 transition-all duration-300 group overflow-hidden shadow-xl">
      {/* Image Banner */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-900">
        <img
          src={service.imageUrl}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        <div className="absolute bottom-3 left-3 p-2.5 rounded-xl bg-black/80 border border-gold-500/30 backdrop-blur-md">
          {iconComponent}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="font-serif font-bold text-xl text-white group-hover:text-gold-400 transition-colors">
            {service.title}
          </h3>

          <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
            {service.shortDescription}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
          <Link to={`${ROUTES.SERVICES}/${service.slug}`} className="w-full">
            <Button
              variant="outline"
              size="sm"
              className="w-full text-xs"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Service Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};
