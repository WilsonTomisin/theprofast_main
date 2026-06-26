import type { ReactNode } from 'react'
import { Phone, Mail, ShieldAlert, MapPin, Clock, HelpCircle, Send, ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Link } from 'react-router'
import { PageHero, MaxContainer } from '../components/layout'
import { CTAButton } from '../components/ui'
import { ROUTES } from '../lib/types/Routes'

type InfoCard = {
  icon: LucideIcon
  iconBg: string
  iconColor: string
  title: string
  subtitle: string
  value: string
}

const infoCards: InfoCard[] = [
  { icon: Phone, iconBg: '#eff8ff', iconColor: '#1570ef', title: 'Call Us', subtitle: 'Speak directly with our team', value: '+234 123 456 7890' },
  { icon: Mail, iconBg: '#f4f3ff', iconColor: '#7839ee', title: 'Email Us', subtitle: 'Send us a detailed message', value: 'support@theprofast.com' },
  { icon: ShieldAlert, iconBg: '#fff4ed', iconColor: '#e15100', title: 'Emergency', subtitle: '24/7 emergency hotline', value: '+234 987 654 3210' },
]

const supportHours = [
  { label: 'Phone Support:', value: '24/7' },
  { label: 'Email Response:', value: 'Within 2 hours' },
  { label: 'Emergency Line:', value: '24/7' },
]

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Get in Touch"
        subtitle="Have questions or need assistance? Our dedicated support team is available 24/7 to help you with any inquiries about our services."
      />

      {/* Info cards */}
      <section className="relative z-10 px-4 md:px-20">
        <MaxContainer className="-mt-12 grid gap-6 md:grid-cols-3">
          {infoCards.map(({ icon: Icon, iconBg, iconColor, title, subtitle, value }) => (
            <div key={title} className="flex flex-col items-center gap-3 rounded-2xl border border-line/60 bg-white p-6 text-center shadow-[0_12px_40px_-24px_rgba(0,0,0,0.25)]">
              <span className="flex h-12 w-12 items-center justify-center rounded-full" style={{ background: iconBg }}>
                <Icon className="h-6 w-6" strokeWidth={1.6} style={{ color: iconColor }} />
              </span>
              <h3 className="text-lg font-bold text-ink">{title}</h3>
              <p className="text-sm text-body">{subtitle}</p>
              <p className="text-sm font-medium" style={{ color: iconColor }}>{value}</p>
            </div>
          ))}
        </MaxContainer>
      </section>

      {/* Form + info rail */}
      <section className="px-4 py-16 md:px-20">
        <MaxContainer className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <div className="rounded-3xl border border-line/60 bg-white p-6 md:p-8">
            <h2 className="text-2xl font-bold text-ink">Send Us a Message</h2>
            <p className="mt-2 text-base text-body">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form className="mt-6 flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
              <Field label="Full Name" placeholder="Enter your full name" />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email Address" type="email" placeholder="Enter your email" />
                <Field label="Phone Number" type="tel" placeholder="Enter your phone number" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-ink">Message *</label>
                <textarea
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  className="resize-none rounded-lg border border-[#d5d7da] px-3.5 py-2.5 text-base text-ink placeholder:text-muted focus:border-brand focus:outline-none"
                />
              </div>
              <CTAButton
                type="submit"
                variant="primary"
                fullWidth
                leftIcon={<Send className="h-5 w-5" strokeWidth={2} />}
                onClick={async () => {
                  await new Promise(r => setTimeout(r, 1200))
                }}
              >
                Send Message
              </CTAButton>
            </form>
          </div>

          {/* Right rail */}
          <div className="flex flex-col gap-6">
            <RailCard icon={MapPin} iconColor="#1570ef" title="Our Offices">
              <p className="font-medium text-ink">Lagos (Head Office)</p>
              <p className="text-sm text-body">Plot 123, Victoria Island</p>
              <p className="text-sm text-body">Lagos, Nigeria</p>
              <p className="mt-2 text-sm text-muted">Mon-Sat: 8:00 AM - 6:00 PM</p>
            </RailCard>

            <RailCard icon={Clock} iconColor="#e15100" title="Support Hours">
              <ul className="flex flex-col gap-2">
                {supportHours.map(({ label, value }) => (
                  <li key={label} className="flex items-center justify-between text-sm">
                    <span className="text-body">{label}</span>
                    <span className="font-medium text-ink">{value}</span>
                  </li>
                ))}
              </ul>
            </RailCard>

            <RailCard icon={HelpCircle} iconColor="#7839ee" title="Quick Answers">
              <p className="text-sm text-body">
                Looking for quick answers? Check out our FAQ section for instant help with common questions.
              </p>
              <Link
                to={ROUTES.FAQS}
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
              >
                Visit FAQ <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </RailCard>
          </div>
        </MaxContainer>
      </section>
    </main>
  )
}

function Field({
  label,
  type = 'text',
  placeholder,
}: {
  label: string
  type?: string
  placeholder: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-ink">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="h-11 rounded-lg border border-[#d5d7da] px-3.5 text-base text-ink placeholder:text-muted focus:border-brand focus:outline-none"
      />
    </div>
  )
}

function RailCard({
  icon: Icon,
  iconColor,
  title,
  children,
}: {
  icon: LucideIcon
  iconColor: string
  title: string
  children: ReactNode
}) {
  return (
    <div className="rounded-3xl border border-line/60 bg-white p-6">
      <div className="mb-4 flex items-center gap-3">
        <Icon className="h-5 w-5" strokeWidth={1.6} style={{ color: iconColor }} />
        <h3 className="text-lg font-bold text-ink">{title}</h3>
      </div>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  )
}
