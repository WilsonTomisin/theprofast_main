import { useState } from 'react'
import type { ReactNode } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router'
import { Phone, User, Mail, Navigation, MapPin, Calendar, Clock, Car, ShieldCheck, Pencil } from 'lucide-react'
import { PageHero, MaxContainer } from '../components/layout'
import { CTAButton, TextField } from '../components/form'
import SuccessModal from '../components/ui/SuccessModal'
import { ROUTES } from '../lib/types/Routes'
import { airportLabel } from '../lib/data/airports'
import { getVehicle, naira, SECURITY_PRICE } from '../lib/data/vehicles'

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

type FieldKey = 'phone' | 'name' | 'email'

function formatDate(d: string): string {
  if (!d) return '—'
  const date = new Date(d)
  if (Number.isNaN(date.getTime())) return d
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
}

export default function CheckoutPage() {
  const [params] = useSearchParams()
  const navigate = useNavigate()

  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [touched, setTouched] = useState<Record<FieldKey, boolean>>({ phone: false, name: false, email: false })
  const [success, setSuccess] = useState(false)

  const tab = params.get('tab') === 'dropoff' ? 'dropoff' : 'pickup'
  const airport = airportLabel(params.get('airport')) || 'Murtala Muhammed International Airport (Lagos)'
  const address = params.get('address') || 'New gra Ikeja'
  const date = params.get('date') || ''
  const time = params.get('time') || ''
  const hasSecurity = params.get('security') === '1'
  const vehicle = getVehicle(params.get('vehicle'))

  const origin = tab === 'pickup' ? airport : address
  const destination = tab === 'pickup' ? address : airport
  const total = vehicle.price + (hasSecurity ? SECURITY_PRICE : 0)

  // Validation for every field — errors only surface once a field is touched.
  const errors: Record<FieldKey, string | undefined> = {
    phone: phone.trim() === '' ? 'Phone number is required' : undefined,
    name: name.trim() === '' ? 'Name is required' : undefined,
    email: email.trim() === '' ? 'Email is required' : !isEmail(email) ? 'The email address is not correct' : undefined,
  }
  const errorFor = (key: FieldKey) => (touched[key] ? errors[key] : undefined)
  const markTouched = (key: FieldKey) => setTouched(t => ({ ...t, [key]: true }))
  const canSubmit = !errors.phone && !errors.name && !errors.email

  const editHref = `${ROUTES.VEHICLE_SELECTION}?${params.toString()}`

  return (
    <main>
      <PageHero
        centered
        tall
        title="Airport Rides"
        subtitle="Seamless pickup and drop-off services for all major airports."
        backTo={editHref}
        backLabel="Back to Vehicle Selection"
      />

      <section className="relative z-10 px-4 pb-20 md:px-20">
        <MaxContainer className="-mt-16 grid gap-6 rounded-3xl border border-line/60 bg-white p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)] md:-mt-24 md:p-8 lg:grid-cols-2 lg:gap-10">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold text-ink">Contact Info</h2>
            <p className="mt-1 text-sm text-body">Kindly enter your information details</p>

            <form className="mt-6 flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
              <TextField
                label="Phone Number"
                type="tel"
                icon={<Phone className="h-4 w-4 text-ink" strokeWidth={1.6} />}
                placeholder="Enter your phone number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                onBlur={() => markTouched('phone')}
                error={errorFor('phone')}
              />
              <TextField
                label="Name"
                icon={<User className="h-4 w-4 text-ink" strokeWidth={1.6} />}
                placeholder="Enter your name"
                value={name}
                onChange={e => setName(e.target.value)}
                onBlur={() => markTouched('name')}
                error={errorFor('name')}
              />
              <TextField
                label="Email"
                type="email"
                icon={<Mail className="h-4 w-4 text-ink" strokeWidth={1.6} />}
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onBlur={() => markTouched('email')}
                error={errorFor('email')}
              />
            </form>
          </div>

          {/* Booking Summary */}
          <div className="rounded-2xl border border-line/60 bg-line/5 p-5 md:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-ink">Booking Summary</h2>
              <Link
                to={editHref}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
              >
                <Pencil className="h-3.5 w-3.5" strokeWidth={1.6} /> Edit Details
              </Link>
            </div>

            <div className="mt-5 flex flex-col gap-4">
              <Row label="Service" value="Airport Rides" />

              <div className="grid grid-cols-2 gap-4">
                <Detail icon={<Navigation className="h-4 w-4 text-brand" strokeWidth={1.6} />} label="Pick-up" value={origin} />
                <Detail icon={<MapPin className="h-4 w-4 text-brand" strokeWidth={1.6} />} label="Drop-off" value={destination} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Detail icon={<Calendar className="h-4 w-4 text-muted" strokeWidth={1.6} />} label="Pick-up Date" value={formatDate(date)} />
                <Detail icon={<Clock className="h-4 w-4 text-muted" strokeWidth={1.6} />} label="Pick-up Time" value={time || '—'} />
              </div>

              <hr className="border-line/70" />

              <LineItem icon={<Car className="h-4 w-4 text-muted" strokeWidth={1.6} />} label="Vehicle" value={vehicle.name} price={naira(vehicle.price)} />
              {hasSecurity && (
                <LineItem icon={<ShieldCheck className="h-4 w-4 text-muted" strokeWidth={1.6} />} label="Security" value="Security Personnel" price={naira(SECURITY_PRICE)} />
              )}

              <hr className="border-line/70" />

              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-ink">Total</span>
                <span className="text-lg font-bold text-ink">{naira(total)}</span>
              </div>

              <CTAButton
                type="submit"
                variant="primary"
                fullWidth
                disabled={!canSubmit}
                onClick={async () => {
                  await new Promise(r => setTimeout(r, 1200))
                  setSuccess(true)
                }}
              >
                Book Ride
              </CTAButton>
            </div>
          </div>
        </MaxContainer>
      </section>

      <SuccessModal
        open={success}
        onClose={() => setSuccess(false)}
        title="Booking Submitted Successfully!"
        message="Thank you for choosing theprofast. Your ride booking request has been received and payment confirmed."
        primaryLabel="Back to Home"
        onPrimary={() => navigate(ROUTES.HOME)}
        secondaryLabel="Book Another Ride"
        onSecondary={() => navigate(ROUTES.AIRPORT)}
        footer={
          <>
            <p className="text-sm text-muted">Need help? Contact our support team</p>
            <div className="mt-1 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm">
              <a href="tel:+2341234567890" className="inline-flex items-center gap-1.5 text-body hover:text-brand">
                <Phone className="h-4 w-4" strokeWidth={1.6} /> +234 123 456 7890
              </a>
              <a href="mailto:support@theprofast.com" className="inline-flex items-center gap-1.5 text-body hover:text-brand">
                <Mail className="h-4 w-4" strokeWidth={1.6} /> support@theprofast.com
              </a>
            </div>
          </>
        }
      >
        <div className="flex flex-col gap-3 text-left">
          <div className="flex items-start gap-3 rounded-xl border border-line/60 p-3">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-green-600" strokeWidth={1.6} />
            <div>
              <p className="text-sm font-semibold text-ink">Confirmation Email</p>
              <p className="text-sm text-body">A confirmation email has been sent to {email || 'your email'}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-line/60 p-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-green-600" strokeWidth={1.6} />
            <div>
              <p className="text-sm font-semibold text-ink">We'll Contact You</p>
              <p className="text-sm text-body">
                Our team will reach out to you within 1 hour for your booking and driver details
              </p>
            </div>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <p className="text-sm font-semibold text-ink">What's Next?</p>
            <ul className="mt-2 flex flex-col gap-1.5 text-sm text-body">
              {[
                'Check your email for booking confirmation',
                'Our team will email you for your booking details',
                "You'll receive payment receipt",
                'Track your ride in real-time on the day',
              ].map(item => (
                <li key={item} className="flex gap-2">
                  <span className="text-blue-500">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SuccessModal>
    </main>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-medium uppercase tracking-wide text-muted">{label}</span>
      <span className="text-base font-medium text-ink">{value}</span>
    </div>
  )
}

function Detail({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted">
        {icon}
        {label}
      </span>
      <span className="text-sm font-medium text-ink">{value}</span>
    </div>
  )
}

function LineItem({ icon, label, value, price }: { icon: ReactNode; label: string; value: string; price: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="flex flex-col gap-1">
        <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-muted">
          {icon}
          {label}
        </span>
        <span className="text-sm font-medium text-ink">{value}</span>
      </div>
      <span className="text-base font-bold text-ink">{price}</span>
    </div>
  )
}
