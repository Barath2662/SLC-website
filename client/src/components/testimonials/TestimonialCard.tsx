import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TestimonialItem } from '@/types';
import ReflectiveCard from '@/components/ui/ReflectiveCard';

export interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <ReflectiveCard
      tint="#c8a44d"
      metalness={0.55}
      roughness={0.4}
      blurStrength={10}
      shine={0.65}
      glare={0.35}
      grayscale={0}
      warp={0.15}
      warpScale={1}
      bevel={1.5}
      tiltStrength={8}
      radius={20}
      enableTilt
      intro
      className="h-full"
    >
      {/* Cream/light surface overlay matching the site's light theme */}
      <div
        className="p-6 sm:p-7 flex flex-col justify-between h-full relative"
        style={{
          background: 'linear-gradient(135deg, rgba(248,246,241,0.92) 0%, rgba(255,255,255,0.88) 100%)',
          border: '1px solid rgba(200,164,77,0.2)',
          borderRadius: 20,
          minHeight: 260,
        }}
      >
        <Quote className="w-9 h-9 text-[#C8A44D]/15 absolute top-4 right-4 pointer-events-none" />

        <div className="space-y-4">
          {/* Stars */}
          <div className="flex items-center space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < testimonial.rating ? 'fill-[#C8A44D] text-[#C8A44D]' : 'text-[#D1D5DB]'
                }`}
              />
            ))}
          </div>

          {/* Review text */}
          <p className="text-xs sm:text-sm text-[#374151] leading-relaxed italic">
            "{testimonial.comment}"
          </p>
        </div>

        {/* Customer info */}
        <div className="pt-5 mt-4 border-t border-[#E7E5E4]/80 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full gold-gradient-bg text-black font-serif font-bold text-sm flex items-center justify-center shadow-sm">
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <h4 className="font-serif font-semibold text-[#111111] text-sm">{testimonial.name}</h4>
              <span className="text-[11px] text-[#6B7280]">{testimonial.location}</span>
            </div>
          </div>

          <span className="text-[11px] font-semibold text-[#C8A44D] px-2.5 py-1 rounded-md bg-[#C8A44D]/10 border border-[#C8A44D]/25">
            {testimonial.tripType}
          </span>
        </div>
      </div>
    </ReflectiveCard>
  );
};
