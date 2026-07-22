import React from 'react';
import { BRAND_DETAILS } from '@/constants/brand';

interface LoadingSpinnerProps {
  fullScreen?: boolean;
  message?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  fullScreen = true,
  message = 'Planning your journey...',
}) => {
  if (!fullScreen) {
    return (
      <div className="flex flex-col items-center justify-center p-8 space-y-4">
        <div className="w-10 h-10 border-3 border-gold-500/30 border-t-gold-500 rounded-full animate-spin"></div>
        <p className="text-sm font-medium text-slate-400">{message}</p>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-bg text-white px-4">
      {/* Brand Emblem */}
      <div className="relative mb-6">
        <div className="w-20 h-20 rounded-2xl bg-dark-card border border-gold-500/40 flex items-center justify-center gold-border-glow animate-pulse">
          <span className="font-serif font-bold text-2xl text-gold-500 tracking-wider">
            {BRAND_DETAILS.shortName}
          </span>
        </div>
      </div>

      {/* Brand Title */}
      <h2 className="font-serif font-semibold text-xl text-slate-100 mb-1">
        {BRAND_DETAILS.name}
      </h2>
      <p className="text-xs text-gold-400 uppercase tracking-widest mb-8">
        Premium Travel Partner Since {BRAND_DETAILS.establishedYear}
      </p>

      {/* Progress Bar Loader */}
      <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden mb-4">
        <div className="h-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-300 animate-[pulse_1.5s_infinite]"></div>
      </div>

      <p className="text-xs text-slate-400 tracking-wide font-medium">{message}</p>
    </div>
  );
};
