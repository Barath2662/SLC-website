import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ContactModalProvider } from '@/context/ContactModalContext';
import { MainLayout } from '@/components/layout/MainLayout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import FleetPage from '@/pages/FleetPage';
import FleetCategoryPage from '@/pages/FleetCategoryPage';
import ServicesPage from '@/pages/ServicesPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import DestinationsPage from '@/pages/DestinationsPage';
import DestinationDetailPage from '@/pages/DestinationDetailPage';
import GalleryPage from '@/pages/GalleryPage';
import FAQPage from '@/pages/FAQPage';
import ContactPage from '@/pages/ContactPage';
import RequestQuotePage from '@/pages/RequestQuotePage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsPage from '@/pages/TermsPage';
import NotFoundPage from '@/pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ContactModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="fleet" element={<FleetPage />} />
              <Route path="fleet/:slug" element={<FleetCategoryPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="services/:slug" element={<ServiceDetailPage />} />
              <Route path="destinations" element={<DestinationsPage />} />
              <Route path="destinations/:slug" element={<DestinationDetailPage />} />
              <Route path="gallery" element={<GalleryPage />} />
              <Route path="faq" element={<FAQPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="request-quote" element={<RequestQuotePage />} />
              <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="terms" element={<TermsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContactModalProvider>
    </HelmetProvider>
  );
};

export default App;
