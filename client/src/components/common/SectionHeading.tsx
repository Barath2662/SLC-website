import React from 'react';
import { cn } from '@/utils/cn';

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
}) => {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={cn('flex flex-col max-w-3xl mb-12', alignment[align], className)}>
      {badge && (
        <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-gold-400 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 mb-3">
          {badge}
        </span>
      )}
      <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-wide leading-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
