import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500/50 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98] cursor-pointer';

    const variants = {
      primary:
        'gold-gradient-bg text-black shadow-lg hover:brightness-110 hover:shadow-gold-500/20 font-bold',
      secondary:
        'bg-dark-card border border-slate-700/80 text-white hover:border-gold-500/50 hover:bg-dark-surface shadow-md',
      outline:
        'bg-transparent border-2 border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black shadow-sm',
      ghost:
        'bg-transparent text-slate-300 hover:text-gold-400 hover:bg-white/5',
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-2 space-x-1.5',
      md: 'text-sm px-5 py-2.5 space-x-2',
      lg: 'text-base px-7 py-3.5 space-x-2.5',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin text-current shrink-0" />
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
