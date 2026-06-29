import { useState, type FormEvent, type ReactNode } from 'react'
import { useNavigate } from 'react-router'
import { Plane, Car, Navigation, LocateFixed, MapPin, Calendar, ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import MaxContainer from '../layout/MaxContainer'
import { CTAButton, TextField, SelectField } from '../form'
import { ROUTES } from '../../lib/types/Routes'
import { airports } from '../../lib/data/airports'
import { carRentalLocations } from '../../lib/data/bookingOptions'

type Service = 'airport' | 'car'
type AirportMode = 'pickup' | 'dropoff'
type CarType = 'intrastate' | 'interstate'

export default function BookingCard() {
  const navigate = useNavigate()
  const [service, setService] = useState<Service>('airport')
  const [airportMode, setAirportMode] = useState<AirportMode>('pickup')
  const [carType, setCarType] = useState<CarType>('intrastate')

  const [location, setLocation] = useState('') // airport code or pick-up location
  const [address, setAddress] = useState('')
  const [date, setDate] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const isAirport = service === 'airport'

  const locationError = submitted && !location
    ? isAirport ? 'Please select an airport' : 'Please select a pick-up location'
    : undefined
  const addressError = submitted && !address.trim() ? 'Please enter an address' : undefined
  const dateError = submitted && !date ? 'Please choose a date' : undefined

  function switchService(next: Service) {
    setService(next)
    setLocation('')
    setSubmitted(false)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    if (!location || !address.trim() || !date) return

    if (isAirport) {
      const q = new URLSearchParams({ tab: airportMode, airport: location, address, date })
      navigate(`${ROUTES.AIRPORT}?${q.toString()}`)
    } else {
      const q = new URLSearchParams({ location, address, date })
      const base = carType === 'interstate' ? ROUTES.CAR_RENTALS_INTERSTATE : ROUTES.CAR_RENTALS
      navigate(`${base}?${q.toString()}`)
    }
  }

  const selectLabel = isAirport
    ? airportMode === 'pickup' ? 'Airport Pick-up' : 'Airport Drop-off'
    : 'Pick-up Location'
  const addressLabel = isAirport && airportMode === 'dropoff' ? 'Pick-up Address' : 'Drop-off Address'

  return (
    <MaxContainer className="relative z-10 -mt-16 rounded-2xl border border-line/60 bg-white p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)] md:-mt-20 md:p-10">
      <div className="flex flex-col gap-6">
        {/* Service tabs */}
        <div className="flex w-full max-w-160.5 items-center gap-2 rounded-2xl border border-line/40 bg-line/10 px-3 py-2">
          <ServiceTab active={isAirport} onClick={() => switchService('airport')} icon={Plane}>
            Airport Ride
          </ServiceTab>
          <ServiceTab active={!isAirport} onClick={() => switchService('car')} icon={Car}>
            Car Rentals
          </ServiceTab>
        </div>

        {/* Mode row */}
        {isAirport ? (
          <div className="flex items-center gap-6">
            <Radio checked={airportMode === 'pickup'} onChange={() => setAirportMode('pickup')} label="Airport Pick-UP" />
            <Radio checked={airportMode === 'dropoff'} onChange={() => setAirportMode('dropoff')} label="Airport Drop-off" />
          </div>
        ) : (
          <div className="flex items-center gap-6">
            <Radio checked={carType === 'intrastate'} onChange={() => setCarType('intrastate')} label="Intrastate" />
            <Radio checked={carType === 'interstate'} onChange={() => setCarType('interstate')} label="Interstate" />
          </div>
        )}

        {/* Inputs */}
        <form onSubmit={handleSubmit} className="flex flex-col items-stretch gap-6 md:flex-row md:items-start">
          <SelectField
            icon={isAirport
              ? <Navigation className="h-5 w-5 text-ink" strokeWidth={1.5} />
              : <LocateFixed className="h-5 w-5 text-ink" strokeWidth={1.5} />}
            label={selectLabel}
            placeholder={isAirport ? 'Select Airport' : 'Select Pick up location'}
            options={isAirport ? airports : carRentalLocations}
            value={location}
            onChange={e => setLocation(e.target.value)}
            error={locationError}
            containerClassName="flex-1"
          />
          <TextField
            icon={<MapPin className="h-5 w-5 text-ink" strokeWidth={1.5} />}
            label={addressLabel}
            placeholder="Enter your address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            error={addressError}
            containerClassName="flex-1"
          />
          <TextField
            icon={<Calendar className="h-5 w-5 text-ink" strokeWidth={1.5} />}
            label="Pickup Date"
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            error={dateError}
            containerClassName="flex-1"
          />

          <CTAButton
            type="submit"
            variant="primary"
            className="shrink-0 md:mt-[1.625rem]"
            rightIcon={<ArrowRight className="h-5 w-5" strokeWidth={2} />}
          >
            {isAirport ? 'Book a Ride' : 'Find a Car'}
          </CTAButton>
        </form>
      </div>
    </MaxContainer>
  )
}

function ServiceTab({
  active,
  onClick,
  icon: Icon,
  children,
}: {
  active: boolean
  onClick: () => void
  icon: LucideIcon
  children: ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex flex-1 items-center justify-center gap-2 rounded-2xl px-4 py-2 transition ${
        active ? 'border border-brand-soft bg-brand-soft text-brand' : 'text-ink hover:bg-white'
      }`}
    >
      <Icon className="h-5 w-5" strokeWidth={1.5} />
      <span className="text-base font-light sm:text-lg">{children}</span>
    </button>
  )
}

function Radio({ label, checked, onChange }: { label: string; checked?: boolean; onChange?: () => void }) {
  return (
    <label className="flex cursor-pointer items-center gap-2">
      <input type="radio" checked={checked} onChange={onChange} className="sr-only" />
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full border ${checked ? 'border-brand bg-brand-soft' : 'border-brand bg-white'}`}
      >
        {checked && <span className="h-2 w-2 rounded-full bg-brand" />}
      </span>
      <span className="text-base font-light text-body">{label}</span>
    </label>
  )
}
