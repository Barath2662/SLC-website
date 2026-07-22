import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BRAND_DETAILS } from '@/constants/brand';

interface MetaHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  keywords?: string[];
  type?: string;
}

export const MetaHead: React.FC<MetaHeadProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = `${BRAND_DETAILS.siteUrl}/og-image.jpg`,
  keywords,
  type = 'website',
}) => {
  const pageTitle = title
    ? `${title} | ${BRAND_DETAILS.name}`
    : `${BRAND_DETAILS.name} | Premium Cab & Taxi Service in Coimbatore Since 2005`;

  const pageDescription =
    description ||
    'Srii Lakshmi Cab offers premium cab services, airport transfers, outstation taxis, tempo travellers, Urbania, coaches, mini buses, and buses in Coimbatore. Trusted since 2005.';

  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : BRAND_DETAILS.siteUrl);

  const keywordString = keywords
    ? keywords.join(', ')
    : 'Cab Service in Coimbatore, Taxi Service Coimbatore, Airport Taxi Coimbatore, Outstation Taxi, Tempo Traveller Rental Coimbatore, Force Urbania Coimbatore, Bus Rental Coimbatore';

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={keywordString} />
      <link rel="canonical" href={currentUrl} />

      {/* OpenGraph Tags */}
      <meta property="og:site_name" content={BRAND_DETAILS.name} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};
