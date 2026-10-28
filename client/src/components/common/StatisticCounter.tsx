import React from 'react';
import { Card } from '@/components/ui/Card';

export interface StatisticItemProps {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

export const StatisticCounter: React.FC<StatisticItemProps> = ({
  value,
  label,
  description,
  icon,
}) => {
  return (
    <Card className="p-6 text-center bg-white border-[#E7E5E4] hover:border-[#C8A44D]/40 shadow-md">
      {icon && <div className="w-10 h-10 mx-auto mb-3 text-[#C8A44D] flex items-center justify-center">{icon}</div>}
      <div className="font-serif font-bold text-3xl md:text-4xl gold-gradient-text mb-1">
        {value}
      </div>
      <div className="font-semibold text-[#111111] text-sm tracking-wide mb-1">{label}</div>
      {description && <div className="text-xs text-[#6B7280] leading-snug">{description}</div>}
    </Card>
  );
};
