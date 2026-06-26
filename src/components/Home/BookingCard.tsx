import type { ReactNode } from 'react'
import { Car, Navigation, MapPin, Calendar, ChevronDown, ArrowRight } from 'lucide-react'
import MaxContainer from '../layout/MaxContainer'
import { CTAButton } from '../ui'

export default function BookingCard() {
  return (
    <MaxContainer className="relative z-10 -mt-16 rounded-2xl border border-line/60 bg-white p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)] md:-mt-20 md:p-10">
      {/* Service tabs */}
      <div className="flex flex-col gap-6">
        <div className="flex w-full max-w-[642px] items-center gap-2 rounded-2xl border border-line/40 bg-line/10 px-3 py-2">
          <button className="flex items-center gap-2 rounded-2xl border border-brand-soft bg-brand-soft px-4 py-2 text-brand">
            <Car className="h-5 w-5" strokeWidth={1.5} />
            <span className="text-lg font-light">Airport Ride</span>
          </button>
          <button className="flex items-center gap-2 rounded-2xl px-4 py-2 text-ink">
            <Car className="h-5 w-5" strokeWidth={1.5} />
            <span className="text-lg font-light">Car Rentals</span>
          </button>
        </div>

        {/* Radio options */}
        <div className="flex items-center gap-6">
          <Radio checked label="Airport Pick-UP" />
          <Radio label="Airport Drop-off" />
        </div>

        {/* Inputs row */}
        <div className="flex flex-col items-stretch gap-6 md:flex-row md:items-end">
          <Field
            icon={<Navigation className="h-5 w-5 text-ink" strokeWidth={1.5} />}
            label="Airport Pick-up"
            placeholder="Select Airport"
            chevron
          />
          <Field
            icon={<MapPin className="h-5 w-5 text-ink" strokeWidth={1.5} />}
            label="Drop-off Address"
            placeholder="Enter your drop-off address"
          />
          <Field
            icon={<Calendar className="h-5 w-5 text-ink" strokeWidth={1.5} />}
            label="Pickup Date"
            placeholder="Enter your pick-up date"
          />

          <CTAButton
            variant="primary"
            className="shrink-0"
            rightIcon={<ArrowRight className="h-5 w-5" strokeWidth={2} />}
          >
            Book a Ride
          </CTAButton>
        </div>
      </div>
    </MaxContainer>
  )
}

function Radio({ label, checked }: { label: string; checked?: boolean }) {
  return (
    <label className="flex cursor-pointer items-center gap-2">
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full border ${checked ? 'border-brand bg-brand-soft' : 'border-brand bg-white'}`}
      >
        {checked && <span className="h-2 w-2 rounded-full bg-brand" />}
      </span>
      <span className="text-base font-light text-body">{label}</span>
    </label>
  )
}

function Field({
  icon,
  label,
  placeholder,
  chevron,
}: {
  icon: ReactNode
  label: string
  placeholder: string
  chevron?: boolean
}) {
  return (
    <div className="flex flex-1 flex-col gap-2">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-base font-medium text-muted">{label}</span>
      </div>
      <div className="flex h-11 items-center gap-2 rounded-lg border border-[#d5d7da] bg-white px-3.5">
        <input
          placeholder={placeholder}
          className="w-full bg-transparent text-base text-muted placeholder:text-muted focus:outline-none"
        />
        {chevron && <ChevronDown className="h-5 w-5 shrink-0 text-ink" strokeWidth={1.5} />}
      </div>
    </div>
  )
}
