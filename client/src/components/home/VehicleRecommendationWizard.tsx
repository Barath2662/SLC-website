import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Luggage, MapPin, ArrowRight, RefreshCw, Car } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/constants/routes';

export const VehicleRecommendationWizard: React.FC = () => {
  const [passengers, setPassengers] = useState<number | null>(null);
  const [luggage, setLuggage] = useState<string | null>(null);
  const [tripType, setTripType] = useState<string | null>(null);

  const getRecommendation = () => {
    if (!passengers) return null;

    if (passengers <= 4) {
      if (luggage === 'Heavy' || tripType === 'Outstation / Hill Station') {
        return {
          vehicle: 'Sedan (Dzire / Etios)',
          slug: 'sedan',
          reason: 'Provides smooth highway stability, climate control AC, and deep boot space for heavy luggage.',
        };
      }
      return {
        vehicle: 'Hatchback',
        slug: 'hatchback',
        reason: 'Economical, compact, and ideal for local city navigation and short outstation runs.',
      };
    }

    if (passengers <= 7) {
      if (tripType === 'Temple Tour / Senior Citizens') {
        return {
          vehicle: 'MVP (Innova / Xylo)',
          slug: 'mvp',
          reason: 'Low step-in height, comfortable captain seating, and smooth suspension ideal for elderly family members.',
        };
      }
      return {
        vehicle: 'SUV (Innova Crysta)',
        slug: 'suv',
        reason: 'High ground clearance, powerful hill torque, and dual AC vents perfect for Ooty & Valparai hairpin bends.',
      };
    }

    if (passengers <= 15) {
      return {
        vehicle: 'Tempo Traveller (12-15 Seater)',
        slug: 'tempo-traveller',
        reason: 'High headroom, 2x1 pushback leather recliners, and separate rear boot space so your whole family travels together.',
      };
    }

    if (passengers <= 20) {
      return {
        vehicle: 'Force Urbania Luxury (17 Seater)',
        slug: 'force-urbania',
        reason: 'European monocoque air-suspension van with panoramic sealed glass windows, ideal for VIP delegations & weddings.',
      };
    }

    if (passengers <= 35) {
      return {
        vehicle: 'Mini Bus (29-35 Seater)',
        slug: 'mini-bus',
        reason: 'Speed-governed, spacious medium bus ideal for college industrial visits and factory staff routes.',
      };
    }

    return {
      vehicle: 'Luxury Tourist Bus (40-50 Seater)',
      slug: 'bus',
      reason: 'Air-suspension 40+ seater luxury coach with under-floor luggage bay for wedding parties & temple packages.',
    };
  };

  const rec = getRecommendation();

  const handleReset = () => {
    setPassengers(null);
    setLuggage(null);
    setTripType(null);
  };

  return (
    <Card className="p-6 sm:p-8 bg-dark-card border-gold-500/30 rounded-3xl shadow-2xl gold-border-glow">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 inline-block">
            Journey Concierge
          </span>
          <h3 className="font-serif font-bold text-2xl text-white">Find Your Perfect Vehicle</h3>
          <p className="text-xs sm:text-sm text-slate-300">Answer 3 quick questions to receive a tailored vehicle match.</p>
        </div>

        {/* Question 1: Passengers */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center space-x-1.5">
            <Users className="w-4 h-4 text-gold-500" />
            <span>1. How many passengers are travelling?</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {[4, 7, 15, 20, 35].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setPassengers(num)}
                className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  passengers === num
                    ? 'gold-gradient-bg text-black font-bold shadow-md border-gold-400'
                    : 'bg-dark-surface border-slate-800 text-slate-300 hover:border-gold-500/40 hover:text-white'
                }`}
              >
                {num <= 4 ? '1-4 People' : num <= 7 ? '5-7 People' : num <= 15 ? '8-15 People' : num <= 20 ? '16-20 People' : '21+ Group'}
              </button>
            ))}
          </div>
        </div>

        {/* Question 2: Luggage */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center space-x-1.5">
            <Luggage className="w-4 h-4 text-gold-500" />
            <span>2. What is your luggage volume?</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            {['Light (Handbags)', 'Moderate (2-3 Bags)', 'Heavy (Multiple Suitcases)'].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setLuggage(opt.split(' ')[0])}
                className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  luggage === opt.split(' ')[0]
                    ? 'gold-gradient-bg text-black font-bold shadow-md border-gold-400'
                    : 'bg-dark-surface border-slate-800 text-slate-300 hover:border-gold-500/40 hover:text-white'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Question 3: Trip Type */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center space-x-1.5">
            <MapPin className="w-4 h-4 text-gold-500" />
            <span>3. What type of journey is this?</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {['Local City Trip', 'Airport Transfer', 'Outstation / Hill Station', 'Temple Tour / Senior Citizens'].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setTripType(type)}
                className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  tripType === type
                    ? 'gold-gradient-bg text-black font-bold shadow-md border-gold-400'
                    : 'bg-dark-surface border-slate-800 text-slate-300 hover:border-gold-500/40 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Recommendation Result Card */}
        {rec && (
          <div className="pt-4 border-t border-slate-800 animate-in fade-in duration-300">
            <div className="p-5 rounded-2xl bg-gradient-to-r from-gold-500/10 via-dark-surface to-dark-surface border border-gold-500/40 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Car className="w-5 h-5 text-gold-500" />
                  <span className="text-xs uppercase tracking-widest text-gold-400 font-bold">Recommended Vehicle:</span>
                </div>
                <button
                  onClick={handleReset}
                  className="text-xs text-slate-400 hover:text-gold-400 flex items-center space-x-1"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset Tool</span>
                </button>
              </div>

              <h4 className="font-serif font-extrabold text-2xl text-white">{rec.vehicle}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">💡 {rec.reason}</p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link to={`${ROUTES.FLEET}/${rec.slug}`}>
                  <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    View {rec.vehicle} Specs
                  </Button>
                </Link>

                <Link to={`${ROUTES.REQUEST_QUOTE}?vehicle=${encodeURIComponent(rec.vehicle)}`}>
                  <Button variant="outline" size="sm">
                    Request Travel Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
