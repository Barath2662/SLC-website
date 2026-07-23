import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TestimonialItem } from '@/types';
import { Card } from '@/components/ui/Card';

export interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card className="p-6 sm:p-7 flex flex-col justify-between h-full bg-dark-card border-slate-800 relative">
      <Quote className="w-10 h-10 text-gold-500/10 absolute top-4 right-4 pointer-events-none" />
      
      <div className="space-y-4">
        {/* Rating Stars */}
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating ? 'fill-gold-400 text-gold-400' : 'text-slate-600'
              }`}
            />
          ))}
        </div>

        {/* Comment Text */}
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
          "{testimonial.comment}"
        </p>
      </div>

      {/* Customer Info */}
      <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-400 font-serif font-bold text-sm flex items-center justify-center">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <h4 className="font-serif font-semibold text-white text-sm">{testimonial.name}</h4>
            <span className="text-[11px] text-slate-400">{testimonial.location}</span>
          </div>
        </div>

        <span className="text-[11px] font-medium text-gold-400/90 px-2.5 py-1 rounded-md bg-gold-500/10 border border-gold-500/20">
          {testimonial.tripType}
        </span>
      </div>
    </Card>
  );
};
