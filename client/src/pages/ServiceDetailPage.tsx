import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Phone, MessageSquare, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { MetaHead } from '@/seo/MetaHead';
import { SchemaOrg } from '@/seo/SchemaOrg';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { SectionHeading } from '@/components/common/SectionHeading';
import { FleetCard } from '@/components/fleet/FleetCard';
import { DestinationCard } from '@/components/destination/DestinationCard';
import { ServiceCard } from '@/components/services/ServiceCard';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import { UniversalEnquiryForm } from '@/components/enquiry/UniversalEnquiryForm';
import { CTABanner } from '@/components/common/CTABanner';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

import { SERVICES_DATA } from '@/data/services';
import { FLEET_DATA } from '@/data/fleet';
import { DESTINATIONS_DATA } from '@/data/destinations';
import { ROUTES } from '@/constants/routes';
import { useContactModal } from '@/context/ContactModalContext';
import NotFoundPage from './NotFoundPage';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openCallModal, openWhatsAppModal } = useContactModal();

  // Find service by slug
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return <NotFoundPage />;
  }

  // Find recommended vehicles for this service
  const recommendedVehicles = FLEET_DATA.filter((v) =>
    service.recommendedVehicles.some((rv) => v.name.toLowerCase().includes(rv.toLowerCase()) || rv.toLowerCase().includes(v.name.toLowerCase()))
  );
  const displayVehicles = recommendedVehicles.length > 0 ? recommendedVehicles.slice(0, 3) : FLEET_DATA.slice(0, 3);

  // Recommended destinations relevant for this service
  const relatedDestinations = DESTINATIONS_DATA.slice(0, 3);

  // Other related services (exclude current)
  const otherServices = SERVICES_DATA.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      <MetaHead
        title={`${service.title} in Coimbatore | Srii Lakshmi Cab`}
        description={`${service.fullDescription.slice(0, 155)}...`}
      />
      <SchemaOrg schemaType="LocalBusiness" />

      {/* Hero Banner */}
      <div className="pt-28 pb-16 bg-gradient-to-b from-black via-dark-card to-dark-bg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: 'Our Services', path: ROUTES.SERVICES }, { label: service.title }]} />

          <div className="max-w-3xl mt-4 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-400 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 inline-block">
              Dedicated Travel Service
            </span>

            <h1 className="font-serif font-extrabold text-3xl sm:text-5xl text-white tracking-wide leading-tight">
              {service.title}
            </h1>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              {service.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
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
                onClick={() => openWhatsAppModal(`Hello Srii Lakshmi Cab, I am interested in enquiring about ${service.title}.`)}
                leftIcon={<MessageSquare className="w-4 h-4 text-emerald-400" />}
              >
                WhatsApp Enquiry
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Service Overview & Description */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">
              Why Choose Srii Lakshmi Cab for {service.title}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {service.fullDescription}
            </p>

            {/* Key Benefits Matrix */}
            <div className="pt-4 space-y-3">
              <h3 className="font-serif font-bold text-lg text-white">Key Service Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.keyBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-4 rounded-xl bg-dark-card border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Service Trust Card */}
          <div className="lg:col-span-4">
            <Card className="p-6 bg-dark-card border-slate-800 space-y-5">
              <h3 className="font-serif font-bold text-lg text-white border-b border-slate-800 pb-3">
                Service Commitment
              </h3>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center space-x-3 py-1.5">
                  <Clock className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>24×7 Round-The-Clock Dispatch</span>
                </div>

                <div className="flex items-center space-x-3 py-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Verified Highway Commercial Drivers</span>
                </div>

                <div className="flex items-center space-x-3 py-1.5">
                  <Award className="w-4 h-4 text-gold-500 shrink-0" />
                  <span>Transparent Custom Itineraries</span>
                </div>
              </div>

              <div className="pt-2">
                <Link to={`${ROUTES.REQUEST_QUOTE}?service=${encodeURIComponent(service.title)}`}>
                  <Button variant="primary" size="md" className="w-full text-xs" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Enquire for {service.title}
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
            title={`Best Vehicles for ${service.title}`}
            subtitle="Explore our clean, comfortable vehicle categories frequently chosen for this travel service."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {displayVehicles.map((v) => (
              <FleetCard key={v.id} vehicle={v} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: How It Works Process */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Effortless Booking"
          title="How It Works"
          subtitle="Simple 4-step process from enquiry to enjoying your journey."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-dark-card border border-slate-800 space-y-2">
            <span className="font-serif font-extrabold text-2xl text-gold-500">01</span>
            <h3 className="font-serif font-bold text-base text-white">Share Trip Details</h3>
            <p className="text-xs text-slate-300">Tell us your pickup, destination, travel dates & group size.</p>
          </div>

          <div className="p-5 rounded-2xl bg-dark-card border border-slate-800 space-y-2">
            <span className="font-serif font-extrabold text-2xl text-gold-500">02</span>
            <h3 className="font-serif font-bold text-base text-white">Receive Travel Plan</h3>
            <p className="text-xs text-slate-300">Our travel advisor provides customized vehicle recommendations.</p>
          </div>

          <div className="p-5 rounded-2xl bg-dark-card border border-slate-800 space-y-2">
            <span className="font-serif font-extrabold text-2xl text-gold-500">03</span>
            <h3 className="font-serif font-bold text-base text-white">Driver Assigned</h3>
            <p className="text-xs text-slate-300">Driver contact and vehicle details sent prior to departure time.</p>
          </div>

          <div className="p-5 rounded-2xl bg-dark-card border border-slate-800 space-y-2">
            <span className="font-serif font-extrabold text-2xl text-gold-500">04</span>
            <h3 className="font-serif font-bold text-base text-white">Enjoy Your Journey</h3>
            <p className="text-xs text-slate-300">Relax in AC comfort with our courteous driver taking care of the road.</p>
          </div>
        </div>
      </section>

      {/* Section 4: Recommended Destinations */}
      <section className="py-16 bg-dark-card/40 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Popular Routes"
            title={`Top Destinations for ${service.title}`}
            subtitle="Explore popular tourist and pilgrimage spots from Coimbatore."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedDestinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Universal Lead Form */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <UniversalEnquiryForm
          initialService={service.title}
          formTitle={`Enquire for ${service.title}`}
          formSubtitle={`Fill out your journey requirements. Our travel advisor will reach out with the best travel plan for your ${service.title.toLowerCase()}.`}
        />
      </section>

      {/* Section 6: FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 bg-dark-card/40 border-y border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Frequently Asked Questions"
              title={`Questions About ${service.title}`}
            />

            <FAQAccordion items={service.faqs} />
          </div>
        </section>
      )}

      {/* Section 7: Other Services */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Other Services"
          title="Explore Related Travel Services"
          subtitle="Check out our other dedicated travel and transport solutions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {otherServices.map((os) => (
            <ServiceCard key={os.id} service={os} />
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

export default ServiceDetailPage;
