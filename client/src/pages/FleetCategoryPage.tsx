import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Users, Luggage, CheckCircle2, Phone, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { MetaHead } from '@/seo/MetaHead';
import { SchemaOrg } from '@/seo/SchemaOrg';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { SectionHeading } from '@/components/common/SectionHeading';
import { FleetCard } from '@/components/fleet/FleetCard';
import { DestinationCard } from '@/components/destination/DestinationCard';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import { UniversalEnquiryForm } from '@/components/enquiry/UniversalEnquiryForm';
import { CTABanner } from '@/components/common/CTABanner';
import { IdealTravelExperiences } from '@/components/fleet/IdealTravelExperiences';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

import { FLEET_DATA } from '@/data/fleet';
import { DESTINATIONS_DATA } from '@/data/destinations';
import { ROUTES } from '@/constants/routes';
import { useContactModal } from '@/context/ContactModalContext';
import NotFoundPage from './NotFoundPage';

export const FleetCategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openCallModal, openWhatsAppModal } = useContactModal();

  // Find vehicle category by slug
  const vehicle = FLEET_DATA.find((v) => v.slug === slug);

  if (!vehicle) {
    return <NotFoundPage />;
  }

  // Filter related destinations suitable for this vehicle
  const relatedDestinations = DESTINATIONS_DATA.filter((d) =>
    d.recommendedVehicles.some(
      (rv) => rv.toLowerCase() === vehicle.name.toLowerCase() || vehicle.name.toLowerCase().includes(rv.toLowerCase())
    )
  ).slice(0, 3);
  const displayDestinations = relatedDestinations.length > 0 ? relatedDestinations : DESTINATIONS_DATA.slice(0, 3);

  // Other related vehicles
  const relatedVehicles = FLEET_DATA.filter((v) => v.id !== vehicle.id).slice(0, 3);

  return (
    <>
      <MetaHead
        title={`${vehicle.name} Taxi & Rental Service in Coimbatore | Srii Lakshmi Cab`}
        description={`Rent ${vehicle.name} in Coimbatore for outstation trips, airport drops, and family tours. ${vehicle.passengerCapacity} Seater AC. ${vehicle.tagline}.`}
      />
      <SchemaOrg schemaType="LocalBusiness" />

      {/* Hero Banner */}
      <div className="pt-28 pb-16 bg-gradient-to-b from-black via-dark-card to-dark-bg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Our Fleet', path: ROUTES.FLEET }, { label: vehicle.name }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-4">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 inline-block">
                Premium Fleet Category
              </span>

              <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-white tracking-wide leading-tight">
                {vehicle.name} Rental in Coimbatore
              </h1>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                {vehicle.tagline}
              </p>

              {/* Specs Pills */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-300 pt-2">
                <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-dark-surface border border-slate-800">
                  <Users className="w-4 h-4 text-gold-500" />
                  <span>{vehicle.passengerCapacity} Passenger Capacity</span>
                </div>

                <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-dark-surface border border-slate-800">
                  <Luggage className="w-4 h-4 text-gold-500" />
                  <span>{vehicle.luggageCapacity}</span>
                </div>

                <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-dark-surface border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>All-India & South India Permit</span>
                </div>
              </div>

              {/* CTAs triggering Contact Modal */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={openCallModal}
                  leftIcon={<Phone className="w-4 h-4" />}
                >
                  Call Desk
                </Button>

                <Button
                  variant="outline"
                  size="md"
                  onClick={() => openWhatsAppModal(`Hello Srii Lakshmi Cab, I want to enquire about renting a ${vehicle.name}.`)}
                  leftIcon={<MessageSquare className="w-4 h-4 text-emerald-400" />}
                >
                  WhatsApp Enquiry
                </Button>
              </div>
            </div>

            {/* Vehicle Hero Image */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl gold-border-glow">
                <img
                  src={vehicle.imageUrl}
                  alt={`Srii Lakshmi Cab ${vehicle.name}`}
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Overview & Specs */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-3">
                Vehicle Overview
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {vehicle.overview}
              </p>
            </div>

            {/* Ideal Travel Experiences Rich Component */}
            <IdealTravelExperiences
              experiences={vehicle.idealTravelExperiences || vehicle.idealUseCases}
            />

            {/* Vehicle Feature Checklist Matrix */}
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-xl text-white">
                Vehicle Amenities & Features
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {vehicle.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3.5 rounded-xl bg-dark-card border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Info Sidebar Card */}
          <div className="lg:col-span-4">
            <Card className="p-6 bg-dark-card border-slate-800 space-y-5">
              <h3 className="font-serif font-bold text-lg text-white border-b border-slate-800 pb-3">
                Quick Specifications
              </h3>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Category:</span>
                  <span className="font-semibold text-gold-400">{vehicle.name}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Seating Capacity:</span>
                  <span className="font-semibold text-slate-200">{vehicle.passengerCapacity} Passengers</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Luggage Space:</span>
                  <span className="font-semibold text-slate-200">{vehicle.luggageCapacity}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Air Conditioning:</span>
                  <span className="font-semibold text-emerald-400">Climate Control AC</span>
                </div>

                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">Permit Status:</span>
                  <span className="font-semibold text-emerald-400">All India & South India</span>
                </div>
              </div>

              <div className="pt-2">
                <Link to={`${ROUTES.REQUEST_QUOTE}?vehicle=${encodeURIComponent(vehicle.name)}`}>
                  <Button variant="primary" size="md" className="w-full text-xs" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Request Quote for {vehicle.name}
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2: Recommended Routes / Destinations */}
      <section className="py-16 bg-dark-card/40 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Recommended Destinations"
            title={`Top Routes to Travel in a ${vehicle.name}`}
            subtitle={`Explore popular outstation and pilgrimage routes frequently booked with our ${vehicle.name} fleet.`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {displayDestinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Pre-filled Lead Capture Form */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <UniversalEnquiryForm
          initialVehicle={vehicle.name}
          formTitle={`Enquire for ${vehicle.name} Rental`}
          formSubtitle={`Share your travel date and route details. Our travel desk will send a customized quote for ${vehicle.name}.`}
        />
      </section>

      {/* Section 4: Vehicle Specific FAQs */}
      {vehicle.faqs && vehicle.faqs.length > 0 && (
        <section className="py-16 bg-dark-card/40 border-y border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Vehicle FAQ"
              title={`Questions About Renting a ${vehicle.name}`}
            />

            <FAQAccordion items={vehicle.faqs} />
          </div>
        </section>
      )}

      {/* Section 5: Related Fleet */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Other Fleet Categories"
          title="Explore Other Vehicle Options"
          subtitle="Compare alternative vehicle categories available for your trip."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedVehicles.map((rv) => (
            <FleetCard key={rv.id} vehicle={rv} />
          ))}
        </div>
      </section>

      {/* Final CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <CTABanner />
      </div>
    </>
  );
};

export default FleetCategoryPage;
