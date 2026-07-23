import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { FLEET_DATA } from '@/data/fleet';
import { Button } from '@/components/ui/Button';
import { ROUTES } from '@/constants/routes';

export const FleetComparisonTable: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 inline-block">
          Side-by-Side Comparison
        </span>
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">
          Compare Vehicle Capacities & Ideal Uses
        </h2>
        <p className="text-xs sm:text-sm text-slate-300">
          Compare passenger capacities, luggage limits, and ideal use cases to select the right vehicle category for your group.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-dark-card shadow-2xl">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-dark-surface border-b border-slate-800 text-gold-400 font-serif font-bold text-sm">
              <th className="p-4 min-w-[180px]">Vehicle Category</th>
              <th className="p-4 min-w-[120px]">Capacity</th>
              <th className="p-4 min-w-[160px]">Luggage Volume</th>
              <th className="p-4 min-w-[280px]">Ideal Travel Experiences</th>
              <th className="p-4 min-w-[140px] text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-200">
            {FLEET_DATA.map((v) => {
              const experiences = v.idealTravelExperiences || v.idealUseCases;
              return (
                <tr key={v.id} className="hover:bg-dark-surface/50 transition-colors">
                  <td className="p-4 font-bold text-white flex items-center space-x-3">
                    <img src={v.imageUrl} alt={v.name} className="w-10 h-10 rounded-lg object-cover border border-slate-700" />
                    <div>
                      <span className="block font-serif text-sm text-white">{v.name}</span>
                      <span className="text-[10px] text-slate-400 font-normal">{v.tagline}</span>
                    </div>
                  </td>
                  <td className="p-4 font-semibold text-gold-400">
                    {v.passengerCapacity} Seats
                  </td>
                  <td className="p-4 text-slate-300">
                    {v.luggageCapacity}
                  </td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-1.5">
                      {experiences.slice(0, 3).map((use: string, i: number) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-dark-surface border border-slate-800 text-[10px] text-slate-300 inline-flex items-center space-x-1"
                        >
                          <CheckCircle2 className="w-2.5 h-2.5 text-gold-500 shrink-0" />
                          <span>{use}</span>
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <Link to={`${ROUTES.REQUEST_QUOTE}?vehicle=${encodeURIComponent(v.name)}`}>
                      <Button variant="outline" size="sm" className="text-[11px] px-3 py-1" rightIcon={<ArrowRight className="w-3 h-3" />}>
                        Enquire
                      </Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
