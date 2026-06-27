import { useState, type FormEvent } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { Plane, MapPin, Calendar, Clock, Users, ShieldCheck, ArrowRight } from 'lucide-react'
import { PageHero } from '../components/layout'
import { CTAButton, TextField, SelectField } from '../components/form'
import { ROUTES } from '../lib/types/Routes'
import { airports } from '../lib/data/airports'

const passengerOptions = [
  { label: '1 Passenger', value: '1' },
  { label: '2 Passengers', value: '2' },
  { label: '3 Passengers', value: '3' },
  { label: '4 Passengers', value: '4' },
  { label: '5+ Passengers', value: '5' },
]

const securityOptions = [
  { label: '1 Security Personnel', value: '1' },
  { label: '2 Security Personnel', value: '2' },
  { label: 'Armed Escort', value: 'armed' },
  { label: 'Plain-clothes Escort', value: 'plain' },
]

type Tab = 'pickup' | 'dropoff'

export default function AirportPage() {
  const [params, setParams] = useSearchParams()
  const navigate = useNavigate()
  const tab: Tab = params.get('tab') === 'dropoff' ? 'dropoff' : 'pickup'
  const isPickup = tab === 'pickup'
  const [security, setSecurity] = useState(false)

  const setTab = (next: Tab) => setParams({ tab: next })

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const next = new URLSearchParams({ tab })
    for (const key of ['airport', 'address', 'date', 'time', 'passengers']) {
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
        title="Airport Rides"
        subtitle="Seamless pickup and drop-off services for all major airports."
      />

      <section className="relative z-10 px-4 pb-20 md:px-20">
        <div className="mx-auto -mt-16 max-w-4xl rounded-3xl border border-line/60 bg-white p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)] md:-mt-24 md:p-8">
          <h2 className="text-xl font-bold text-ink">Trip Type</h2>

          {/* Trip Type tabs — tracked in the URL via ?tab=pickup|dropoff */}
          <div className="mt-4 grid grid-cols-2 gap-2 rounded-2xl bg-line/20 p-1.5">
            {(['pickup', 'dropoff'] as const).map(t => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                aria-pressed={tab === t}
                className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                  tab === t ? 'bg-brand-soft text-brand' : 'text-body hover:bg-white'
                }`}
              >
                {t === 'pickup' ? 'Airport Pick-up' : 'Airport Drop-off'}
              </button>
            ))}
          </div>

          <form className="mt-6 flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Field order swaps based on the selected trip type */}
            {isPickup ? (
              <>
                <SelectField
                  name="airport"
                  icon={<Plane className="h-5 w-5 text-ink" strokeWidth={1.5} />}
                  label="Airport Pick-up"
                  placeholder="Select Airport"
                  options={airports}
                />
                <TextField
                  name="address"
                  icon={<MapPin className="h-5 w-5 text-ink" strokeWidth={1.5} />}
                  label="Drop-off Address"
                  placeholder="Enter your destination address"
                />
              </>
            ) : (
              <>
                <TextField
                  name="address"
                  icon={<MapPin className="h-5 w-5 text-ink" strokeWidth={1.5} />}
                  label="Pick-up Address"
                  placeholder="Enter your pick-up address"
                />
                <SelectField
                  name="airport"
                  icon={<Plane className="h-5 w-5 text-ink" strokeWidth={1.5} />}
                  label="Airport Drop-off"
                  placeholder="Select Airport"
                  options={airports}
                />
              </>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <TextField
                name="date"
                icon={<Calendar className="h-5 w-5 text-ink" strokeWidth={1.5} />}
                label="Pickup Date"
                type="date"
              />
              <TextField
                name="time"
                icon={<Clock className="h-5 w-5 text-ink" strokeWidth={1.5} />}
                label="Pickup Time"
                type="time"
              />
            </div>

            <SelectField
              name="passengers"
              icon={<Users className="h-5 w-5 text-ink" strokeWidth={1.5} />}
              label="Number of Passengers"
              placeholder="Kindly state number of passenger and luggages"
              options={passengerOptions}
            />

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
                <span className="block text-sm text-body">
                  Professional security escort for your airport transfer
                </span>
              </span>
            </label>

            {security && (
              <SelectField
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
