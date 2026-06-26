import { useState } from 'react'
import { ChevronDown, Phone, Mail, LayoutGrid, Car, Package, CreditCard, ShieldCheck, CalendarClock } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PageHero, MaxContainer } from '../components/layout'

type Category = 'All Questions' | 'Ride Services' | 'Cargo Services' | 'Payment' | 'Safety' | 'Booking'

type Faq = { category: Exclude<Category, 'All Questions'>; q: string; a: string }

const categories: { label: Category; icon: LucideIcon }[] = [
  { label: 'All Questions', icon: LayoutGrid },
  { label: 'Ride Services', icon: Car },
  { label: 'Cargo Services', icon: Package },
  { label: 'Payment', icon: CreditCard },
  { label: 'Safety', icon: ShieldCheck },
  { label: 'Booking', icon: CalendarClock },
]

const faqs: Faq[] = [
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

export default function FaqPage() {
  const [active, setActive] = useState<Category>('All Questions')
  const [openQ, setOpenQ] = useState<string | null>(null)

  const visible = active === 'All Questions' ? faqs : faqs.filter(f => f.category === active)

  return (
    <main>
      <PageHero
        title="Frequently Asked Questions"
          subtitle="Find quick answers to common questions about our services, booking process, and more. Can't find what you're looking for? Our team is here to help."
        />

        <section className="px-4 py-16 md:px-20">
          <MaxContainer className="max-w-4xl">
            {/* Category tabs */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(({ label, icon: Icon }) => {
                const isActive = active === label
                return (
                  <button
                    key={label}
                    onClick={() => {
                      setActive(label)
                      setOpenQ(null)
                    }}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive ? 'bg-brand text-white' : 'border border-line/70 bg-white text-body hover:bg-line/20'
                    }`}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.6} />
                    {label}
                  </button>
                )
              })}
            </div>

            {/* Accordion */}
            <div className="mt-8 flex flex-col gap-3">
              {visible.map(({ q, a }) => {
                const isOpen = openQ === q
                return (
                  <div key={q} className="overflow-hidden rounded-2xl border border-line/70 bg-white">
                    <button
                      onClick={() => setOpenQ(isOpen ? null : q)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-base font-medium text-ink">{q}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        strokeWidth={1.6}
                      />
                    </button>
                    {isOpen && (
                      <p className="px-5 pb-5 text-base font-light leading-relaxed text-body">{a}</p>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Still have a question */}
            <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl bg-line/20 px-6 py-8 text-center">
              <p className="text-base font-medium text-ink">
                Still have a question? Contact our support team
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-body">
                <a href="tel:+2341234567890" className="inline-flex items-center gap-2 hover:text-brand">
                  <Phone className="h-4 w-4" strokeWidth={1.6} /> +234 123 456 7890
                </a>
                <a href="mailto:support@theprofast.com" className="inline-flex items-center gap-2 hover:text-brand">
                  <Mail className="h-4 w-4" strokeWidth={1.6} /> support@theprofast.com
                </a>
              </div>
            </div>
          </MaxContainer>
        </section>
    </main>
  )
}
