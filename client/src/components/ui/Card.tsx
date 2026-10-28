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
      dark: 'bg-white border border-[#E7E5E4] text-[#111111] shadow-md',
      glass: 'bg-white/90 backdrop-blur-md border border-[#E7E5E4] text-[#111111] shadow-lg',
      cream: 'bg-[#F8F6F1] border border-[#E7E5E4] text-[#111111] shadow-sm',
    };

    const hoverStyles = hoverEffect
      ? 'hover:-translate-y-1.5 hover:border-[#C8A44D]/50 hover:shadow-xl'
      : '';

    const glowStyles = goldGlow ? 'gold-border-glow border-[#C8A44D]/40' : '';

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
