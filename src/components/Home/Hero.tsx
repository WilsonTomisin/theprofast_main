import type { ReactNode } from 'react'
import { Car, Clock } from 'lucide-react'
import heroBg from '../../assets/hero-bg.png'
import BookingCard from './BookingCard'
import MaxContainer from '../layout/MaxContainer'

export default function Hero() {
  return (
    // Pulled up under the sticky navbar (≈88px tall) so the image fills the top
    <section className="relative -mt-22">
      {/* Full-bleed image band spanning the entire viewport width */}
      <div className="relative w-full overflow-hidden">
        {/* Background image */}
        <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        {/* Overlay spans the full image width */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/55 to-black/20" />

        {/* Content centered in a max-width container */}
        <MaxContainer className="relative px-4 pt-32 pb-24 md:px-20 md:pt-40 md:pb-28">
          <div className="max-w-185.75">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur">
              <Car className="h-5 w-5 text-white" strokeWidth={1.5} />
              <span className="text-sm font-medium text-white">Ride Service</span>
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl md:leading-tight">
              One Platform, Complete Movement Solutions
            </h1>

            <p className="mt-4 max-w-xl text-lg text-line md:text-2xl md:leading-snug">
              Airport rides, inter-state travel, and corporate transport book in seconds, track in
              real-time.
            </p>

            <div className="mt-8 flex flex-wrap gap-6">
              <Chip
                icon={<Car className="h-5 w-5 text-white" strokeWidth={1.6} />}
                bg="#00c8b3"
                label="Rides"
              />
              <Chip
                icon={<Clock className="h-5 w-5 text-white" strokeWidth={1.6} />}
                bg="#6155f5"
                label="On-Time Pickup"
              />
            </div>
          </div>
        </MaxContainer>
      </div>

      {/* Booking card stays centered and overlaps the hero band */}
      <div className="px-4 md:px-20">
        <BookingCard />
      </div>
    </section>
  )
}

function Chip({ icon, bg, label }: { icon: ReactNode; bg: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="flex h-10 w-10 items-center justify-center rounded-[10px]"
        style={{ background: bg }}
      >
        {icon}
      </span>
      <span className="text-base font-medium text-white">{label}</span>
    </div>
  )
}
