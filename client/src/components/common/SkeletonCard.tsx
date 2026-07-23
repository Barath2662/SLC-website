import React from 'react';
import { Card } from '@/components/ui/Card';

export const SkeletonCard: React.FC = () => {
  return (
    <Card className="flex flex-col h-full bg-dark-card border-slate-800 animate-pulse">
      <div className="h-48 w-full bg-slate-800/60 rounded-t-2xl" />
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="h-5 w-3/4 bg-slate-800/80 rounded-md" />
          <div className="h-3 w-full bg-slate-800/60 rounded-md" />
          <div className="h-3 w-5/6 bg-slate-800/60 rounded-md" />
        </div>
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
          <div className="h-4 w-1/3 bg-slate-800/80 rounded-md" />
          <div className="h-8 w-24 bg-slate-800 rounded-xl" />
        </div>
      </div>
    </Card>
  );
};
