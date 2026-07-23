import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { DestinationItem } from '@/types';
import { Card } from '@/components/ui/Card';
import { ROUTES } from '@/constants/routes';

export interface DestinationCardProps {
  destination: DestinationItem;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <Card className="flex flex-col h-full group bg-dark-card border-slate-800 hover:border-gold-500/40">
      <div className="relative h-52 w-full overflow-hidden bg-slate-900">
        <img
          src={destination.heroImage}
          alt={`Coimbatore to ${destination.name} cab rental`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/30 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-gold-500/40 text-gold-400 px-3 py-1 rounded-full text-xs font-semibold">
          {destination.category}
        </div>

        {/* Distance Badge */}
        <div className="absolute bottom-3 right-3 bg-dark-surface/90 text-slate-200 px-2.5 py-1 rounded-lg text-xs font-medium flex items-center space-x-1 border border-slate-700">
          <Clock className="w-3 h-3 text-gold-500 shrink-0" />
          <span>{destination.distanceFromCoimbatore} • {destination.travelTime}</span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center space-x-1.5 text-xs text-gold-400 font-medium mb-1">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>From Coimbatore</span>
          </div>

          <h3 className="font-serif font-bold text-xl text-white group-hover:text-gold-400 transition-colors mb-2">
            {destination.name}
          </h3>

          <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
            {destination.tagline}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-medium">Best: {destination.bestTimeToVisit}</span>
          <Link
            to={`${ROUTES.DESTINATIONS}/${destination.slug}`}
            className="inline-flex items-center space-x-1 text-xs font-bold text-gold-400 hover:text-gold-300 group-hover:translate-x-1 transition-all"
          >
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </Card>
  );
};
