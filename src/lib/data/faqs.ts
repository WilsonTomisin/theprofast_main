import { LayoutGrid, Car, Package, CreditCard, ShieldCheck, CalendarClock } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type FaqCategory =
  | 'All Questions'
  | 'Ride Services'
  | 'Cargo Services'
  | 'Payment'
  | 'Safety'
  | 'Booking'

export type Faq = { category: Exclude<FaqCategory, 'All Questions'>; q: string; a: string }

export const faqCategories: { label: FaqCategory; icon: LucideIcon }[] = [
  { label: 'All Questions', icon: LayoutGrid },
  { label: 'Ride Services', icon: Car },
  { label: 'Cargo Services', icon: Package },
  { label: 'Payment', icon: CreditCard },
  { label: 'Safety', icon: ShieldCheck },
  { label: 'Booking', icon: CalendarClock },
]

export const faqs: Faq[] = [
  { category: 'Ride Services', q: 'What types of ride services does THEPROFAST offer?', a: 'We offer Airport Rides, Daily Rides, and Corporate Transport across Nigeria — covering both intra-state and inter-state journeys.' },
  { category: 'Ride Services', q: 'How do I book a ride?', a: 'Create an account, choose your service, enter your pickup and drop-off details, and confirm. You can book in seconds from the web or app.' },
  { category: 'Ride Services', q: 'What is the difference between Intra-State and Inter-State rides?', a: 'Intra-state rides take place within a single state, while inter-state rides move you between different states.' },
  { category: 'Ride Services', q: 'What security options are available?', a: 'You can request vetted drivers and add on-trip security personnel for sensitive journeys. Every trip is tracked in real time.' },
  { category: 'Ride Services', q: 'Can I modify or cancel my ride booking?', a: 'Yes. You can modify or cancel a booking from your dashboard before the driver is dispatched; cancellation terms may apply.' },
  { category: 'Cargo Services', q: 'What cargo and delivery services do you provide?', a: 'We handle local delivery, inter-state cargo, international shipping, and Weshop4U personal shopping and forwarding.' },
  { category: 'Cargo Services', q: 'How does the Weshop4U service work?', a: 'We buy items on your behalf abroad, manage the shipping and customs, and deliver them to your door in Nigeria.' },
  { category: 'Cargo Services', q: 'What are the shipping options for international cargo?', a: 'We offer air and sea freight with full customs clearance and insurance, depending on your timeline and budget.' },
  { category: 'Cargo Services', q: 'Do you handle customs clearance?', a: 'Yes. Our international shipping service includes customs clearance and all required documentation.' },
  { category: 'Cargo Services', q: 'What items cannot be shipped?', a: 'Hazardous materials, illegal goods, improperly packaged perishables, and items restricted by law cannot be shipped.' },
  { category: 'Payment', q: 'What payment methods do you accept?', a: 'We accept debit and credit cards, bank transfers, and supported mobile wallets.' },
  { category: 'Payment', q: 'When do I pay for my booking?', a: 'Payment is taken at the time of booking confirmation. Approved corporate accounts can be billed on invoice.' },
  { category: 'Payment', q: 'Do you offer refunds?', a: 'Yes. Eligible cancellations are refunded according to our refund policy, typically within a few business days.' },
  { category: 'Payment', q: 'Are prices shown on the website final?', a: 'Quoted prices are final unless your trip details change — for example distance, stops, or service type.' },
  { category: 'Safety', q: 'How do you ensure passenger and cargo safety?', a: 'Every trip is GPS-tracked, drivers are verified, and cargo is insured for complete peace of mind.' },
  { category: 'Safety', q: 'Are your drivers vetted and trained?', a: 'Yes. All drivers go through background checks, document verification, and service training before joining.' },
  { category: 'Safety', q: 'What happens in case of an emergency during my trip?', a: 'Use the in-app emergency option or call our 24/7 hotline; our team responds immediately and can dispatch support.' },
  { category: 'Safety', q: 'Is my cargo insured?', a: 'Yes. Cargo shipments are insured against loss or damage as part of our service.' },
  { category: 'Booking', q: 'How far in advance should I book?', a: 'You can book on demand or schedule ahead. For airport and inter-state trips we recommend booking a few hours in advance.' },
  { category: 'Booking', q: 'Can I book for someone else?', a: "Absolutely. Just enter the rider's details and contact information during booking." },
  { category: 'Booking', q: 'Do you offer corporate accounts?', a: 'Yes. Corporate accounts give you centralized staff movement, dashboards, and consolidated billing.' },
  { category: 'Booking', q: 'How do I track my ride or shipment?', a: 'Track your ride or package live with GPS from your dashboard or the tracking link we send you.' },
  { category: 'Booking', q: "What if my driver is late or doesn't show up?", a: "Contact support immediately — we'll reassign a driver or process a refund, and you can track ETA live throughout." },
]
