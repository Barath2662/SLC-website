import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Calendar, CheckCircle2, Phone, MessageSquare, ArrowRight, Lightbulb, Compass } from 'lucide-react';
import { MetaHead } from '@/seo/MetaHead';
import { SchemaOrg } from '@/seo/SchemaOrg';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { SectionHeading } from '@/components/common/SectionHeading';
import { FleetCard } from '@/components/fleet/FleetCard';
import { DestinationCard } from '@/components/destination/DestinationCard';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import { UniversalEnquiryForm } from '@/components/enquiry/UniversalEnquiryForm';
import { CTABanner } from '@/components/common/CTABanner';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

import { DESTINATIONS_DATA } from '@/data/destinations';
import { FLEET_DATA } from '@/data/fleet';
import { ROUTES } from '@/constants/routes';
import { useContactModal } from '@/context/ContactModalContext';
import NotFoundPage from './NotFoundPage';

export const DestinationDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openCallModal, openWhatsAppModal } = useContactModal();

  // Find destination by slug
  const destination = DESTINATIONS_DATA.find((d) => d.slug === slug);

  if (!destination) {
    return <NotFoundPage />;
  }

  // Find recommended vehicles for this destination
  const recommendedVehicles = FLEET_DATA.filter((v) =>
    destination.recommendedVehicles.some((rv) => v.name.toLowerCase().includes(rv.toLowerCase()) || rv.toLowerCase().includes(v.name.toLowerCase()))
  );
  const displayVehicles = recommendedVehicles.length > 0 ? recommendedVehicles.slice(0, 3) : FLEET_DATA.slice(0, 3);

  // Other related destinations (exclude current)
  const relatedDestinations = DESTINATIONS_DATA.filter((d) => d.id !== destination.id).slice(0, 3);

  return (
    <>
      <MetaHead
        title={`Coimbatore to ${destination.name} Cab Service | Srii Lakshmi Cab`}
        description={`Book comfortable cab rentals from Coimbatore to ${destination.name}. Distance: ${destination.distanceFromCoimbatore}. ${destination.overview.slice(0, 140)}...`}
      />
      <SchemaOrg schemaType="LocalBusiness" />

      {/* Hero Banner */}
      <div className="pt-28 pb-16 bg-gradient-to-b from-black via-dark-card to-dark-bg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Destinations', path: ROUTES.DESTINATIONS }, { label: destination.name }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-4">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 inline-block">
                {destination.category}
              </span>

              <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-white tracking-wide leading-tight">
                Coimbatore to {destination.name} Cab Service
              </h1>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                {destination.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-300 pt-2">
                <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-dark-surface border border-slate-800">
                  <MapPin className="w-4 h-4 text-gold-500" />
                  <span>{destination.distanceFromCoimbatore} from Coimbatore</span>
                </div>

                <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-dark-surface border border-slate-800">
                  <Clock className="w-4 h-4 text-gold-500" />
                  <span>{destination.travelTime} Drive</span>
                </div>

                <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-dark-surface border border-slate-800">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Best Season: {destination.bestTimeToVisit}</span>
                </div>
              </div>

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
                  onClick={() => openWhatsAppModal(`Hello Srii Lakshmi Cab, I want to enquire about a travel package from Coimbatore to ${destination.name}.`)}
                  leftIcon={<MessageSquare className="w-4 h-4 text-emerald-400" />}
                >
                  WhatsApp Enquiry
                </Button>
              </div>
            </div>

            {/* Destination Hero Photography */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-gold-500/30 shadow-2xl gold-border-glow">
                <img
                  src={destination.heroImage}
                  alt={`Coimbatore to ${destination.name} cab rental`}
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Overview & Highlights */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">
              About Travelling to {destination.name}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {destination.overview}
            </p>

            {/* Attractions Checklist */}
            <div className="pt-4 space-y-3">
              <h3 className="font-serif font-bold text-xl text-white flex items-center space-x-2">
                <Compass className="w-5 h-5 text-gold-500" />
                <span>Top Attractions & Places to Visit in {destination.name}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destination.attractions.map((spot, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3.5 rounded-xl bg-dark-card border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">{spot}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Tips Box */}
            <div className="pt-4 space-y-3">
              <h3 className="font-serif font-bold text-xl text-white flex items-center space-x-2">
                <Lightbulb className="w-5 h-5 text-gold-400" />
                <span>Essential Travel Tips for {destination.name}</span>
              </h3>

              <div className="space-y-2">
                {destination.travelTips.map((tip, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-gold-500/10 border border-gold-500/30 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    💡 {tip}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Info Sidebar */}
          <div className="lg:col-span-4">
            <Card className="p-6 bg-dark-card border-slate-800 space-y-5">
              <h3 className="font-serif font-bold text-lg text-white border-b border-slate-800 pb-3">
                Trip Quick Summary
              </h3>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Destination:</span>
                  <span className="font-semibold text-white">{destination.name}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Category:</span>
                  <span className="font-semibold text-gold-400">{destination.category}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Distance:</span>
                  <span className="font-semibold text-slate-200">{destination.distanceFromCoimbatore}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Travel Time:</span>
                  <span className="font-semibold text-slate-200">{destination.travelTime}</span>
                </div>

                <div className="flex justify-between py-1.5">
                  <span className="text-slate-400">Best Season:</span>
                  <span className="font-semibold text-emerald-400">{destination.bestTimeToVisit}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link to={`${ROUTES.REQUEST_QUOTE}?destination=${encodeURIComponent(destination.name)}`}>
                  <Button variant="primary" size="md" className="w-full text-xs" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Plan Trip to {destination.name}
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2: Recommended Vehicles */}
      <section className="py-16 bg-dark-card/40 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Recommended Fleet"
            title={`Best Vehicles to Travel to ${destination.name}`}
            subtitle={`Vehicle categories recommended for optimal comfort on the ${destination.name} route.`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {displayVehicles.map((v) => (
              <FleetCard key={v.id} vehicle={v} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Universal Lead Form */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <UniversalEnquiryForm
          initialDestination={destination.name}
          formTitle={`Plan Your Journey to ${destination.name}`}
          formSubtitle={`Fill out your travel date and group size. Our travel advisor will contact you with a customized travel itinerary and vehicle quote.`}
        />
      </section>

      {/* Section 4: Destination Specific FAQs */}
      {destination.faqs && destination.faqs.length > 0 && (
        <section className="py-16 bg-dark-card/40 border-y border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Destination FAQ"
              title={`Questions About Travelling to ${destination.name}`}
            />

            <FAQAccordion items={destination.faqs} />
          </div>
        </section>
      )}

      {/* Section 5: Other Destinations */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Other Destinations"
          title="Explore More South Indian Destinations"
          subtitle="Discover other scenic hill stations, temples, and heritage places accessible from Coimbatore."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedDestinations.map((rd) => (
            <DestinationCard key={rd.id} destination={rd} />
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

export default DestinationDetailPage;
