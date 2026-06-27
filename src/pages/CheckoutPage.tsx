import { useState } from 'react'
import type { ReactNode } from 'react'
import { Link, useSearchParams } from 'react-router'
import { Phone, User, Mail, Navigation, MapPin, Calendar, Clock, Car, ShieldCheck, Pencil } from 'lucide-react'
import { PageHero, MaxContainer } from '../components/layout'
import { CTAButton, TextField } from '../components/form'
import { ROUTES } from '../lib/types/Routes'
import { airportLabel } from '../lib/data/airports'
import { getVehicle, naira, SECURITY_PRICE } from '../lib/data/vehicles'

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

function formatDate(d: string): string {
  if (!d) return '—'
  const date = new Date(d)
  if (Number.isNaN(date.getTime())) return d
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
}

export default function CheckoutPage() {
  const [params] = useSearchParams()

  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

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

  const emailError = email.length > 0 && !isEmail(email) ? 'The email address is not correct' : undefined
  const canSubmit = phone.trim() !== '' && name.trim() !== '' && isEmail(email)

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
              />
              <TextField
                label="Name"
                icon={<User className="h-4 w-4 text-ink" strokeWidth={1.6} />}
                placeholder="Enter your name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <TextField
                label="Email"
                type="email"
                icon={<Mail className="h-4 w-4 text-ink" strokeWidth={1.6} />}
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                error={emailError}
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
                }}
              >
                Book Ride
              </CTAButton>
            </div>
          </div>
        </MaxContainer>
      </section>
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
