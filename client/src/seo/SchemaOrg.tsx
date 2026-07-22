import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BRAND_DETAILS } from '@/constants/brand';

interface SchemaOrgProps {
  schemaType?: 'LocalBusiness' | 'Organization' | 'Service' | 'FAQPage';
  data?: Record<string, unknown>;
}

export const SchemaOrg: React.FC<SchemaOrgProps> = ({ schemaType = 'LocalBusiness', data }) => {
  const baseLocalBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': schemaType === 'LocalBusiness' ? 'TaxiService' : schemaType,
    '@id': `${BRAND_DETAILS.siteUrl}/#organization`,
    name: BRAND_DETAILS.name,
    legalName: BRAND_DETAILS.name,
    url: BRAND_DETAILS.siteUrl,
    logo: `${BRAND_DETAILS.siteUrl}/favicon.svg`,
    description:
      'Premium cab services, airport transfers, outstation taxis, tempo travellers, Urbania, and bus rentals in Coimbatore since 2005.',
    telephone: BRAND_DETAILS.phones[0].display,
    email: BRAND_DETAILS.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${BRAND_DETAILS.address.doorNo}, ${BRAND_DETAILS.address.street}, ${BRAND_DETAILS.address.area}`,
      addressLocality: BRAND_DETAILS.address.city,
      addressRegion: BRAND_DETAILS.address.state,
      postalCode: BRAND_DETAILS.address.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '11.0000',
      longitude: '77.0200',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    priceRange: '₹₹',
    areaServed: [
      'Coimbatore',
      'Tiruppur',
      'Pollachi',
      'Nilgiris',
      'Tamil Nadu',
      'Kerala',
      'Karnataka',
      'South India',
    ],
    foundingDate: '2005',
    ...data,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(baseLocalBusinessSchema)}
      </script>
    </Helmet>
  );
};
