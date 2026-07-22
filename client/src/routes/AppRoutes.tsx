import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { ROUTES } from '@/constants/routes';

// Lazy loaded page modules for optimal code splitting
const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const FleetPage = lazy(() => import('@/pages/FleetPage'));
const FleetCategoryPage = lazy(() => import('@/pages/FleetCategoryPage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const ServiceDetailPage = lazy(() => import('@/pages/ServiceDetailPage'));
const DestinationsPage = lazy(() => import('@/pages/DestinationsPage'));
const DestinationDetailPage = lazy(() => import('@/pages/DestinationDetailPage'));
const GalleryPage = lazy(() => import('@/pages/GalleryPage'));
const FAQPage = lazy(() => import('@/pages/FAQPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const RequestQuotePage = lazy(() => import('@/pages/RequestQuotePage'));
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('@/pages/TermsPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner fullScreen message="Loading Srii Lakshmi Cab..." />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />

          <Route path={ROUTES.FLEET} element={<FleetPage />} />
          <Route path={ROUTES.FLEET_CATEGORY} element={<FleetCategoryPage />} />

          <Route path={ROUTES.SERVICES} element={<ServicesPage />} />
          <Route path={ROUTES.SERVICE_DETAIL} element={<ServiceDetailPage />} />

          <Route path={ROUTES.DESTINATIONS} element={<DestinationsPage />} />
          <Route path={ROUTES.DESTINATION_DETAIL} element={<DestinationDetailPage />} />

          <Route path={ROUTES.GALLERY} element={<GalleryPage />} />
          <Route path={ROUTES.FAQ} element={<FAQPage />} />
          <Route path={ROUTES.CONTACT} element={<ContactPage />} />
          <Route path={ROUTES.REQUEST_QUOTE} element={<RequestQuotePage />} />

          <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicyPage />} />
          <Route path={ROUTES.TERMS} element={<TermsPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
