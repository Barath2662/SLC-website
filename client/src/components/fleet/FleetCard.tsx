import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Luggage, ArrowRight, CheckCircle2 } from 'lucide-react';
import { VehicleCategory } from '@/types';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/constants/routes';

interface FleetCardProps {
  vehicle: VehicleCategory;
}

export const FleetCard: React.FC<FleetCardProps> = ({ vehicle }) => {
  const experiences = vehicle.idealTravelExperiences || vehicle.idealUseCases;

  return (
    <Card className="flex flex-col h-full bg-dark-card border-slate-800 hover:border-gold-500/40 transition-all duration-300 group overflow-hidden shadow-xl">
      {/* Image Banner with Capacity Badges */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
        <img
          src={vehicle.imageUrl}
          alt={`Srii Lakshmi Cab ${vehicle.name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* Capacity Badges */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
          <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-black/80 border border-gold-500/30 backdrop-blur-md">
            <Users className="w-3.5 h-3.5 text-gold-400" />
            <span className="font-semibold">{vehicle.passengerCapacity} Seats</span>
          </div>

          <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-black/80 border border-slate-700 backdrop-blur-md">
            <Luggage className="w-3.5 h-3.5 text-slate-300" />
            <span className="text-[11px] text-slate-300">{vehicle.luggageCapacity}</span>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-xl text-white group-hover:text-gold-400 transition-colors">
              {vehicle.name}
            </h3>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-gold-400 px-2 py-0.5 rounded bg-gold-500/10 border border-gold-500/30">
              AC Luxury
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            {vehicle.tagline}
          </p>

          {/* Ideal Travel Experiences Badges */}
          <div className="pt-2 space-y-1.5">
            <span className="text-[11px] font-bold text-gold-400 uppercase tracking-wider block">
              Ideal Travel Experiences:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {experiences.slice(0, 4).map((exp, idx) => (
                <span
                  key={idx}
                  className="text-[11px] px-2.5 py-1 rounded-lg bg-dark-surface border border-slate-800 text-slate-200 font-medium inline-flex items-center space-x-1"
                >
                  <CheckCircle2 className="w-3 h-3 text-gold-500 shrink-0" />
                  <span>{exp}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-slate-800 flex items-center gap-2">
          <Link to={`${ROUTES.FLEET}/${vehicle.slug}`} className="flex-1">
            <Button
              variant="outline"
              size="sm"
              className="w-full text-xs"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Vehicle Specs
            </Button>
          </Link>

          <Link to={`${ROUTES.REQUEST_QUOTE}?vehicle=${encodeURIComponent(vehicle.name)}`} className="flex-1">
            <Button variant="primary" size="sm" className="w-full text-xs">
              Get Quote
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};
