import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MetaHead } from '@/seo/MetaHead';
import { SchemaOrg } from '@/seo/SchemaOrg';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustBar } from '@/components/home/TrustBar';
import { AboutPreview } from '@/components/home/AboutPreview';
import { VehicleRecommendationWizard } from '@/components/home/VehicleRecommendationWizard';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { JourneyTimeline } from '@/components/home/JourneyTimeline';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { SectionHeading } from '@/components/common/SectionHeading';
import { FleetCard } from '@/components/fleet/FleetCard';
import { ServiceCard } from '@/components/services/ServiceCard';
import { DestinationCard } from '@/components/destination/DestinationCard';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import { TestimonialCard } from '@/components/testimonials/TestimonialCard';
import { UniversalEnquiryForm } from '@/components/enquiry/UniversalEnquiryForm';
import { CTABanner } from '@/components/common/CTABanner';
import { Button } from '@/components/ui/Button';

import { FLEET_DATA } from '@/data/fleet';
import { SERVICES_DATA } from '@/data/services';
import { DESTINATIONS_DATA } from '@/data/destinations';
import { HOMEPAGE_FAQS } from '@/data/faq';
import { TESTIMONIALS_DATA } from '@/data/testimonials';
import { ROUTES } from '@/constants/routes';

export const HomePage: React.FC = () => {
  return (
    <>
      <MetaHead
        title="Premium Cab & Taxi Service in Coimbatore Since 2007"
        description="Srii Lakshmi Cab offers premium cab services, airport transfers, outstation taxis, tempo travellers, Urbania, coaches, mini buses, and buses in Coimbatore. Trusted since 2007."
      />
      <SchemaOrg schemaType="LocalBusiness" />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Bar Statistics */}
      <TrustBar />

      {/* 3. About Company Story Preview */}
      <AboutPreview />

      {/* 4. Fleet Showcase */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Premium Fleet"
            title="Vehicles for Every Journey & Group Size"
            subtitle="From compact hatchbacks to executive Urbania and 40+ seater buses, explore our clean, well-maintained fleet driven by experienced professionals."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FLEET_DATA.slice(0, 6).map((vehicle) => (
              <FleetCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to={ROUTES.FLEET}>
              <Button variant="outline" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Explore All Fleet Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Interactive Vehicle Recommendation Wizard */}
      <VehicleRecommendationWizard />

      {/* 6. Services Preview */}
      <section className="py-20 bg-dark-card/40 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Tailored Services"
            title="Travel Solutions for Every Purpose"
            subtitle="Whether you need a 24x7 airport drop, an outstation hill tour, wedding guest mobility, or daily employee transportation."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to={ROUTES.SERVICES}>
              <Button variant="outline" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                View All Travel Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Popular Destinations Preview */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="South India Destinations"
            title="Explore Scenic Places from Coimbatore"
            subtitle="Hassle-free outstation cab travel to Ooty, Munnar, Kodaikanal, Mysore, Isha Foundation, Palani, and major South Indian tourist destinations."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESTINATIONS_DATA.slice(0, 6).map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to={ROUTES.DESTINATIONS}>
              <Button variant="outline" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Explore All South India Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Why Choose Us */}
      <WhyChooseUs />

      {/* 9. Customer Journey Timeline */}
      <JourneyTimeline />

      {/* 10. Customer Testimonials */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Customer Reviews"
            title="What Our Passengers Say"
            subtitle="The trust of our customers has been the driving force behind Srii Lakshmi Cab since 2007."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.slice(0, 3).map((item) => (
              <TestimonialCard key={item.id} testimonial={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 11. Gallery Preview */}
      <GalleryPreview />

      {/* 12. FAQ Section */}
      <section className="py-20 bg-dark-card/40 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about booking cabs, airport transfers, and outstation trips with Srii Lakshmi Cab."
          />

          <FAQAccordion items={HOMEPAGE_FAQS} />
        </div>
      </section>

      {/* 13. Lead Capture Form Section */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <UniversalEnquiryForm
            formTitle="Plan Your Journey With Us"
            formSubtitle="Fill in your trip details below. Our travel advisor will reach out to recommend the right vehicle and best travel plan."
          />
        </div>
      </section>

      {/* 14. Final Call To Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <CTABanner />
      </div>
    </>
  );
};

export default HomePage;
