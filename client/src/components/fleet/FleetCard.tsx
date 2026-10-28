import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Luggage, ArrowRight, CheckCircle2, Car } from 'lucide-react';
import { VehicleCategory } from '@/types';
import ReflectiveCard from '@/components/ui/ReflectiveCard';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/constants/routes';

interface FleetCardExtended extends VehicleCategory {
  models?: string[];
  idealTravelExperiences?: string[];
}

interface FleetCardProps {
  vehicle: FleetCardExtended;
}

export const FleetCard: React.FC<FleetCardProps> = ({ vehicle }) => {
  const experiences = (vehicle as FleetCardExtended).idealTravelExperiences ?? vehicle.idealUseCases;

  return (
    <ReflectiveCard
      tint="#ffffff"
      metalness={0.45}
      roughness={0.45}
      blurStrength={6}
      shine={0.6}
      glare={0.3}
      grayscale={0}
      warp={0.1}
      warpScale={1}
      bevel={1}
      tiltStrength={8}
      radius={20}
      enableTilt
      intro
      className="h-full flex flex-col"
    >
      <div
        className="flex flex-col h-full overflow-hidden"
        style={{
          background: 'rgba(255,255,255,0.94)',
          border: '1px solid rgba(200,164,77,0.18)',
          borderRadius: 20,
        }}
      >
        {/* Image Banner */}
        <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#F8F6F1]">
          <img
            src={vehicle.imageUrl}
            alt={`Srii Lakshmi Cab ${vehicle.name}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Capacity Badges */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
            <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-black/75 border border-[#C8A44D]/40 backdrop-blur-md">
              <Users className="w-3.5 h-3.5 text-[#C8A44D]" />
              <span className="font-semibold">{vehicle.passengerCapacity} Seats</span>
            </div>
            <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-black/75 border border-white/20 backdrop-blur-md">
              <Luggage className="w-3.5 h-3.5 text-slate-300" />
              <span className="text-[11px] text-slate-200">{vehicle.luggageCapacity}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-xl text-[#111111] hover:text-[#C8A44D] transition-colors">
                {vehicle.name}
              </h3>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C8A44D] px-2 py-0.5 rounded bg-[#C8A44D]/10 border border-[#C8A44D]/30">
                AC Luxury
              </span>
            </div>

            <p className="text-xs text-[#4B5563] leading-relaxed">
              {vehicle.tagline}
            </p>

            {/* Models list */}
            {(vehicle as FleetCardExtended).models && (vehicle as FleetCardExtended).models!.length > 0 && (
              <div className="pt-1 flex items-start space-x-1.5">
                <Car className="w-3.5 h-3.5 text-[#C8A44D] shrink-0 mt-0.5" />
                <span className="text-[11px] text-[#374151] font-medium leading-snug">
                  {(vehicle as FleetCardExtended).models!.join(' · ')}
                </span>
              </div>
            )}

            {/* Travel Experiences */}
            <div className="pt-2 space-y-1.5">
              <span className="text-[11px] font-bold text-[#C8A44D] uppercase tracking-wider block">
                Ideal For:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {experiences.slice(0, 4).map((exp, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-[#F8F6F1] border border-[#E7E5E4] text-[#374151] font-medium inline-flex items-center space-x-1"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#C8A44D] shrink-0" />
                    <span>{exp}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-3 border-t border-[#E7E5E4] flex items-center gap-2">
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
      </div>
    </ReflectiveCard>
  );
};
