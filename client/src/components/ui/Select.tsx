import React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
  placeholder?: string;
  leftIcon?: React.ReactNode;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, placeholder, leftIcon, className, id, required, ...props }, ref) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label htmlFor={selectId} className="block text-xs font-semibold uppercase tracking-wider text-slate-800">
            {label} {required && <span className="text-[#C8A44D]">*</span>}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <span className="absolute left-3.5 text-slate-500 pointer-events-none shrink-0 z-10">
              {leftIcon}
            </span>
          )}
          <select
            ref={ref}
            id={selectId}
            required={required}
            className={cn(
              'w-full bg-white border border-[#D6D3D1] rounded-xl px-4 py-3 text-sm text-[#111111] transition-all duration-200 focus:outline-none focus:border-[#C8A44D] focus:ring-2 focus:ring-[#C8A44D]/20 appearance-none pr-10 disabled:opacity-50 cursor-pointer',
              leftIcon && 'pl-11',
              error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled className="bg-white text-slate-400">
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-white text-[#111111]">
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3.5 pointer-events-none shrink-0" />
        </div>
        {error && <p className="text-xs text-red-600 font-medium mt-1">{error}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';
