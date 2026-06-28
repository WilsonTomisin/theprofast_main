import { useState } from 'react'
import { ChevronDown, Phone, Mail } from 'lucide-react'
import { PageHero, MaxContainer } from '../components/layout'
import { faqCategories, faqs, type FaqCategory } from '../lib/data/faqs'

export default function FaqPage() {
  const [active, setActive] = useState<FaqCategory>('All Questions')
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
            {/* FaqCategory tabs */}
            <div className="flex flex-wrap justify-center gap-3">
              {faqCategories.map(({ label, icon: Icon }) => {
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
