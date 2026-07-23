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
    <Card className="p-6 text-center bg-dark-card/90 border-gold-500/20 hover:border-gold-500/40">
      {icon && <div className="w-10 h-10 mx-auto mb-3 text-gold-500 flex items-center justify-center">{icon}</div>}
      <div className="font-serif font-bold text-3xl md:text-4xl text-gold-400 gold-gradient-text mb-1">
        {value}
      </div>
      <div className="font-semibold text-white text-sm tracking-wide mb-1">{label}</div>
      {description && <div className="text-xs text-slate-400 leading-snug">{description}</div>}
    </Card>
  );
};
