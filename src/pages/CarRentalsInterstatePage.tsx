import { useState, type FormEvent } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { LocateFixed, MapPin, Calendar, Clock, Users, ShieldCheck, ArrowRight } from 'lucide-react'
import { PageHero } from '../components/layout'
import { CTAButton, TextField, SelectField } from '../components/form'
import { ROUTES } from '../lib/types/Routes'
import { carRentalLocations as locations, driverStayOptions, securityOptions } from '../lib/data/bookingOptions'

type Trip = 'oneway' | 'round'

export default function CarRentalsInterstatePage() {
  const [params, setParams] = useSearchParams()
  const navigate = useNavigate()
  const trip: Trip = params.get('trip') === 'round' ? 'round' : 'oneway'
  const [security, setSecurity] = useState(false)

  // Prefill from URL params (e.g. when arriving from the landing booking card).
  const prefill = {
    location: params.get('location') ?? undefined,
    address: params.get('address') ?? undefined,
    date: params.get('date') ?? undefined,
  }

  const setTrip = (next: Trip) => setParams({ trip: next })

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const next = new URLSearchParams({ service: 'car-interstate', trip })
    for (const key of ['location', 'address', 'date', 'time', 'driverStay']) {
      const value = data.get(key)
      if (value) next.set(key, String(value))
    }
    if (security) next.set('security', '1')
    navigate(`${ROUTES.VEHICLE_SELECTION}?${next.toString()}`)
  }

  return (
    <main>
      <PageHero
        centered
        tall
        title="Car Rentals - Interstate"
        subtitle="Rent reliable and verified vehicles for travel across states."
      />

      <section className="relative z-10 px-4 pb-20 md:px-20">
        <div className="mx-auto -mt-16 max-w-4xl rounded-3xl border border-line/60 bg-white p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)] md:-mt-24 md:p-8">
          <h2 className="text-xl font-bold text-ink">Trip Type</h2>

          {/* Trip Type tabs — tracked in the URL via ?trip=oneway|round */}
          <div className="mt-4 grid grid-cols-2 gap-2 rounded-2xl bg-line/20 p-1.5">
            {(['oneway', 'round'] as const).map(t => (
              <button
                key={t}
                type="button"
                onClick={() => setTrip(t)}
                aria-pressed={trip === t}
                className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                  trip === t ? 'bg-brand-soft text-brand' : 'text-body hover:bg-white'
                }`}
              >
                {t === 'oneway' ? 'One-Way' : 'Round Trip (Full Engagement)'}
              </button>
            ))}
          </div>

          <form className="mt-6 flex flex-col gap-5" onSubmit={handleSubmit}>
            <SelectField
              name="location"
              icon={<LocateFixed className="h-5 w-5 text-ink" strokeWidth={1.5} />}
              label="Pick-up Location"
              placeholder="Select Pick up location"
              options={locations}
              defaultValue={prefill.location}
            />
            <TextField
              name="address"
              icon={<MapPin className="h-5 w-5 text-ink" strokeWidth={1.5} />}
              label="Drop-off Address"
              placeholder="Enter your destination address"
              defaultValue={prefill.address}
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <TextField
                name="date"
                icon={<Calendar className="h-5 w-5 text-ink" strokeWidth={1.5} />}
                label="Pickup Date"
                type="date"
                defaultValue={prefill.date}
              />
              <TextField
                name="time"
                icon={<Clock className="h-5 w-5 text-ink" strokeWidth={1.5} />}
                label="Pickup Time"
                type="time"
              />
            </div>

            {/* Driver Stay Option only applies to a Round Trip (Full Engagement) */}
            {trip === 'round' && (
              <SelectField
                name="driverStay"
                icon={<Users className="h-5 w-5 text-ink" strokeWidth={1.5} />}
                label="Driver Stay Option"
                placeholder="Select Driver Stay Option"
                options={driverStayOptions}
              />
            )}

            {/* Security personnel toggle */}
            <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-line/60 bg-line/10 p-4">
              <input
                type="checkbox"
                checked={security}
                onChange={e => setSecurity(e.target.checked)}
                className="mt-0.5 h-5 w-5 accent-brand"
              />
              <span>
                <span className="block font-medium text-ink">Add Security Personnel</span>
                <span className="block text-sm text-body">Professional security escort for your trip</span>
              </span>
            </label>

            {security && (
              <SelectField
                name="securityOption"
                icon={<ShieldCheck className="h-5 w-5 text-ink" strokeWidth={1.5} />}
                label="Security Options"
                placeholder="Select your preferred security options"
                options={securityOptions}
              />
            )}

            <CTAButton
              type="submit"
              variant="primary"
              fullWidth
              rightIcon={<ArrowRight className="h-5 w-5" strokeWidth={2} />}
            >
              Continue to Vehicle Selection
            </CTAButton>
          </form>
        </div>
      </section>
    </main>
  )
}
