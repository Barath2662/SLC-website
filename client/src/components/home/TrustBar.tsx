import React from 'react';
import { Award, ShieldCheck, MapPin, Users, Clock } from 'lucide-react';
import { StatisticCounter } from '@/components/common/StatisticCounter';

export const TrustBar: React.FC = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatisticCounter
          value="20+"
          label="Years Experience"
          description="Serving since 2005"
          icon={<Award className="w-6 h-6" />}
        />

        <StatisticCounter
          value="9+"
          label="Vehicle Types"
          description="Hatchback to Bus"
          icon={<Users className="w-6 h-6" />}
        />

        <StatisticCounter
          value="100%"
          label="South India"
          description="TN, KL, KA, AP Coverage"
          icon={<MapPin className="w-6 h-6" />}
        />

        <StatisticCounter
          value="100%"
          label="Safe & Verified"
          description="Professional Drivers"
          icon={<ShieldCheck className="w-6 h-6" />}
        />

        <StatisticCounter
          value="24×7"
          label="Travel Desk"
          description="Instant Assistance"
          icon={<Clock className="w-6 h-6" />}
        />
      </div>
    </section>
  );
};
