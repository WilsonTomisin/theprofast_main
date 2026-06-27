/**
 * Central registry of every route path in the app.
 * `as const` makes each value a readonly string literal so paths can be
 * referenced type-safely (e.g. <Link to={ROUTES.ABOUT} />).
 */
export const ROUTES = {
  // Core
  HOME: '/',
  ABOUT: '/about',
  HOW_IT_WORKS: '/how-it-works',
  CAREERS: '/careers',
  BLOG: '/blog',
  CONTACT: '/contact',

  // Ride services
  DAILY_RIDE: '/services/daily-ride',
  CORPORATE_TRANSPORT: '/services/corporate-transport',
  AIRPORT_TRANSFER: '/services/airport-transfer',

  // Cargo services
  LOCAL_CARGO: '/services/local-cargo',
  INTERNATIONAL_SHIPPING: '/services/international-shipping',
  WESHOP4U: '/services/weshop4u',

  // Booking flow
  AIRPORT: '/airport',
  CAR_RENTALS: '/car-rentals',
  VEHICLE_SELECTION: '/vehicle-selection',
  CHECKOUT: '/checkout',

  // Support
  HELP_CENTER: '/help-center',
  SAFETY: '/safety',
  TERMS: '/terms',
  PRIVACY: '/privacy',
  FAQS: '/faqs',

  // Fallback
  NOT_FOUND: '*',
} as const

/** Union of all valid route paths, e.g. '/' | '/about' | ... */
export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]
