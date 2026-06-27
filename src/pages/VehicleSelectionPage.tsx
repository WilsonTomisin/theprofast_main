import { useState, type ReactNode } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router'
import { MapPin, Navigation, Users, Calendar, Clock, Star, Pencil, ArrowRight } from 'lucide-react'
import { PageHero, MaxContainer } from '../components/layout'
import { CTAButton } from '../components/form'
import { ROUTES } from '../lib/types/Routes'
import { airportLabel } from '../lib/data/airports'
import { vehicles, naira, type VehicleType, type VehicleBadge } from '../lib/data/vehicles'

const filters: Array<'All' | VehicleType> = ['All', 'Sedan', 'SUV', 'G-wagon', 'Van', 'Luxury buses']

const badgeStyles: Record<VehicleBadge, string> = {
  'Most Popular': 'bg-brand-soft text-brand',
  'Best Value': 'bg-blue-50 text-blue-600',
  Premium: 'bg-purple-50 text-purple-600',
}

export default function VehicleSelectionPage() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const [filter, setFilter] = useState<'All' | VehicleType>('All')

  const tab = params.get('tab') === 'dropoff' ? 'dropoff' : 'pickup'
  const airport = airportLabel(params.get('airport')) || 'Murtala Muhammed International Airport (Lagos)'
  const address = params.get('address') || 'New gra Ikeja'
  const passengers = params.get('passengers') || '2'
  const date = params.get('date') || '15-04-2025'
  const time = params.get('time') || '9:00 PM'

  const origin = tab === 'pickup' ? airport : address
  const destination = tab === 'pickup' ? address : airport

  const visible = filter === 'All' ? vehicles : vehicles.filter(v => v.type === filter)

  const selectVehicle = (id: string) => {
    const next = new URLSearchParams(params)
    next.set('vehicle', id)
    navigate(`${ROUTES.CHECKOUT}?${next.toString()}`)
  }

  return (
    <main>
      <PageHero
        centered
        title="Vehicle Selection"
        backTo={`${ROUTES.AIRPORT}?tab=${tab}`}
        backLabel="Back to Airport Rides"
      />

      {/* Trip summary bar */}
      <section className="relative z-10 px-4 md:px-20">
        <MaxContainer className="-mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-line/60 bg-white px-5 py-4 text-sm shadow-[0_12px_40px_-24px_rgba(0,0,0,0.25)]">
          <SummaryItem icon={<Navigation className="h-4 w-4 text-brand" strokeWidth={1.6} />} text={origin} />
          <ArrowRight className="hidden h-4 w-4 text-muted sm:block" strokeWidth={1.6} />
          <SummaryItem icon={<MapPin className="h-4 w-4 text-brand" strokeWidth={1.6} />} text={destination} />
          <span className="hidden h-5 w-px bg-line md:block" />
          <SummaryItem icon={<Users className="h-4 w-4 text-muted" strokeWidth={1.6} />} text={`No. of Passengers : ${passengers}`} />
          <SummaryItem icon={<Calendar className="h-4 w-4 text-muted" strokeWidth={1.6} />} text={date} />
          <SummaryItem icon={<Clock className="h-4 w-4 text-muted" strokeWidth={1.6} />} text={time} />
          <Link
            to={`${ROUTES.AIRPORT}?tab=${tab}`}
            className="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-brand px-3 py-1.5 text-sm font-medium text-brand transition hover:bg-brand-soft"
          >
            <Pencil className="h-3.5 w-3.5" strokeWidth={1.6} /> Edit
          </Link>
        </MaxContainer>
      </section>

      {/* Choose vehicle */}
      <section className="px-4 py-12 md:px-20">
        <MaxContainer>
          <h2 className="text-2xl font-bold text-ink">Choose vehicle</h2>
          <p className="mt-1 text-base text-body">Kindly choose your desired vehicle</p>

          <div className="mt-8 flex flex-col gap-8 lg:flex-row">
            {/* Filter sidebar */}
            <aside className="lg:w-60 lg:shrink-0">
              <div className="rounded-2xl border border-line/60 bg-white p-5">
                <h3 className="text-sm font-bold text-ink">Filter By Vehicle Type</h3>
                <div className="mt-4 flex flex-col gap-1">
                  {filters.map(f => (
                    <label key={f} className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 hover:bg-line/10">
                      <input
                        type="radio"
                        name="vehicle-filter"
                        checked={filter === f}
                        onChange={() => setFilter(f)}
                        className="h-4 w-4 accent-brand"
                      />
                      <span className={`text-base ${filter === f ? 'font-medium text-ink' : 'text-body'}`}>{f}</span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Vehicle list */}
            <div className="flex flex-1 flex-col gap-5">
              {visible.map(v => (
                <article
                  key={v.id}
                  className="flex flex-col gap-5 rounded-2xl border border-line/60 bg-white p-4 sm:flex-row sm:items-center"
                >
                  <img
                    src={v.image}
                    alt={v.name}
                    className="h-40 w-full rounded-xl object-cover sm:h-28 sm:w-44"
                  />
                  <div className="flex flex-1 flex-col gap-2">
                    <h3 className="text-lg font-bold text-ink">{v.name}</h3>
                    <p className="text-sm text-body">{v.specs}</p>
                    <div className="flex flex-wrap gap-2">
                      {v.badges.map(badge => (
                        <span key={badge} className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${badgeStyles[badge]}`}>
                          {badge === 'Most Popular' && <Star className="h-3 w-3" strokeWidth={2} />}
                          {badge}
                        </span>
                      ))}
                    </div>
                    <p className="mt-1 text-lg font-bold text-ink">
                      <span className="text-sm font-normal text-body">Starting Price: </span>
                      {naira(v.price)}
                    </p>
                  </div>
                  <CTAButton
                    variant="primary"
                    className="shrink-0"
                    onClick={() => selectVehicle(v.id)}
                    rightIcon={<ArrowRight className="h-5 w-5" strokeWidth={2} />}
                  >
                    Select
                  </CTAButton>
                </article>
              ))}
            </div>
          </div>
        </MaxContainer>
      </section>
    </main>
  )
}

function SummaryItem({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-ink">
      {icon}
      <span className="font-medium">{text}</span>
    </span>
  )
}
