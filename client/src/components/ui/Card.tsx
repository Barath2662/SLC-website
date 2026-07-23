import React from 'react';
import { cn } from '@/utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'dark' | 'glass' | 'cream';
  hoverEffect?: boolean;
  goldGlow?: boolean;
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'dark',
      hoverEffect = true,
      goldGlow = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'rounded-2xl transition-all duration-300 overflow-hidden';

    const variants = {
      dark: 'bg-dark-card border border-slate-800 text-slate-100 shadow-xl',
      glass: 'bg-dark-surface/80 backdrop-blur-md border border-gold-500/20 text-slate-100 shadow-2xl',
      cream: 'bg-cream-card border border-amber-900/10 text-slate-900 shadow-md',
    };

    const hoverStyles = hoverEffect
      ? 'hover:-translate-y-1.5 hover:border-gold-500/40 hover:shadow-2xl hover:shadow-gold-500/10'
      : '';

    const glowStyles = goldGlow ? 'gold-border-glow border-gold-500/40' : '';

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], hoverStyles, glowStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
