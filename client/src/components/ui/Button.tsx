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
        'bg-[#C8A44D] text-white shadow-lg hover:bg-[#B8932E] hover:shadow-gold-500/20 font-bold',
      secondary:
        'bg-[#111111] text-white hover:bg-[#1F2937] shadow-md font-semibold',
      outline:
        'bg-white border-2 border-[#C8A44D] text-[#C8A44D] hover:bg-[#C8A44D] hover:text-white shadow-sm font-semibold',
      ghost:
        'bg-transparent text-slate-700 hover:text-[#C8A44D] hover:bg-[#F4F1EA]',
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
