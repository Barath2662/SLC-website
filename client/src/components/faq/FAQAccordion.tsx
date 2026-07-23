import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '@/types';
import { cn } from '@/utils/cn';

export interface FAQAccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, allowMultiple = false }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]); // Open first item by default

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      if (openIndexes.includes(index)) {
        setOpenIndexes(openIndexes.filter((i) => i !== index));
      } else {
        setOpenIndexes([...openIndexes, index]);
      }
    } else {
      if (openIndexes.includes(index)) {
        setOpenIndexes([]);
      } else {
        setOpenIndexes([index]);
      }
    }
  };

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIndexes.includes(idx);
        return (
          <div
            key={idx}
            className={cn(
              'rounded-xl transition-all duration-300 border overflow-hidden',
              isOpen
                ? 'bg-dark-card border-gold-500/40 shadow-lg'
                : 'bg-dark-card/60 border-slate-800 hover:border-slate-700'
            )}
          >
            <button
              onClick={() => toggleIndex(idx)}
              className="w-full text-left p-4 sm:p-5 flex items-center justify-between space-x-4 focus:outline-none cursor-pointer"
              aria-expanded={isOpen}
            >
              <div className="flex items-center space-x-3">
                <HelpCircle className={cn('w-5 h-5 shrink-0 transition-colors', isOpen ? 'text-gold-400' : 'text-slate-500')} />
                <span className={cn('font-serif font-medium text-base sm:text-lg transition-colors', isOpen ? 'text-gold-400' : 'text-white')}>
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300',
                  isOpen && 'rotate-180 text-gold-400'
                )}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pl-12 animate-in fade-in duration-200">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
