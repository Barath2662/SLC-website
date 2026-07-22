export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  FLEET: '/fleet',
  FLEET_CATEGORY: '/fleet/:category',
  SERVICES: '/services',
  SERVICE_DETAIL: '/services/:slug',
  DESTINATIONS: '/destinations',
  DESTINATION_DETAIL: '/destinations/:slug',
  GALLERY: '/gallery',
  FAQ: '/faq',
  CONTACT: '/contact',
  REQUEST_QUOTE: '/request-quote',
  PRIVACY_POLICY: '/privacy-policy',
  TERMS: '/terms',
} as const;

export const NAV_LINKS = [
  { name: 'Home', path: ROUTES.HOME },
  { name: 'About', path: ROUTES.ABOUT },
  { name: 'Fleet', path: ROUTES.FLEET },
  { name: 'Services', path: ROUTES.SERVICES },
  { name: 'Destinations', path: ROUTES.DESTINATIONS },
  { name: 'Gallery', path: ROUTES.GALLERY },
  { name: 'Contact', path: ROUTES.CONTACT },
];
