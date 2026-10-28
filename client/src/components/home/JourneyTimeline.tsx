import React from 'react';
import { Car, Send, CheckCircle2, Smile } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export const JourneyTimeline: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Vehicle',
      description: 'Select your preferred vehicle category or use our interactive vehicle wizard.',
      icon: <Car className="w-6 h-6 text-gold-500" />,
    },
    {
      number: '02',
      title: 'Share Trip Details',
      description: 'Fill out our quick enquiry form or message us directly on WhatsApp/Phone.',
      icon: <Send className="w-6 h-6 text-gold-500" />,
    },
    {
      number: '03',
      title: 'Receive Confirmation',
      description: 'Our travel advisor contacts you with the best vehicle recommendation & travel plan.',
      icon: <CheckCircle2 className="w-6 h-6 text-gold-500" />,
    },
    {
      number: '04',
      title: 'Enjoy Your Journey',
      description: 'Your verified driver arrives punctually for a safe, comfortable South India trip.',
      icon: <Smile className="w-6 h-6 text-gold-500" />,
    },
  ];

  return (
    <section className="py-20 bg-[#F4F1EA] border-y border-[#E7E5E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C8A44D] px-3 py-1 rounded-full bg-[#C8A44D]/10 border border-[#C8A44D]/30 inline-block mb-3">
            Simple 4-Step Process
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#111111] tracking-wide mb-3">
            How Your Journey Begins
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed font-medium">
            Booking travel with Srii Lakshmi Cab is effortless, transparent, and completely personal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <Card key={idx} className="p-6 relative bg-white border-[#E7E5E4] flex flex-col justify-between shadow-md">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C8A44D]/10 border border-[#C8A44D]/30 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="font-serif font-extrabold text-3xl text-[#C8A44D]/40">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-[#111111] mb-2">{step.title}</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
