import { Car, Plane, Briefcase, Truck, Ship, ShoppingBag } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Badge from './Badge'
import MaxContainer from '../layout/MaxContainer'

type Service = { icon: LucideIcon; iconBg: string; iconColor: string; title: string; desc: string }

const rides: Service[] = [
  {
    icon: Plane,
    iconBg: '#f6fef9',
    iconColor: '#039855',
    title: 'Airport Rides',
    desc: 'Stress free pickup and drop-off services for all major airports.',
  },
  {
    icon: Car,
    iconBg: '#f5faff',
    iconColor: '#1570ef',
    title: 'Daily Ride',
    desc: 'Affordable per-seat sharing for daily commuting across Nigeria.',
  },
  {
    icon: Briefcase,
    iconBg: '#fbfaff',
    iconColor: '#7839ee',
    title: 'Corporate Transport',
    desc: 'Reliable staff movement managed through centralized dashboard.',
  },
]

const cargo: Service[] = [
  {
    icon: Truck,
    iconBg: '#fffbfa',
    iconColor: '#d92d20',
    title: 'Local Delivery',
    desc: 'Secure pickup and delivery within cities and across states.',
  },
  {
    icon: Ship,
    iconBg: 'rgba(0,200,179,0.1)',
    iconColor: '#00c8b3',
    title: 'International Shipping',
    desc: 'Global cargo solutions with customs clearance and insurance.',
  },
  {
    icon: ShoppingBag,
    iconBg: '#fffcf5',
    iconColor: '#f79009',
    title: 'Weshop4U',
    desc: 'We buy items abroad, manage shipping, and deliver to your door.',
  },
]

export default function Services() {
  return (
    <section className="px-4 pt-28 pb-10 md:px-20 md:pt-36">
      <MaxContainer>
        <div className="flex flex-col items-center gap-5 text-center">
          <Badge label="Our Services" />
          <div>
            <h2 className="text-3xl font-bold text-ink md:text-5xl md:leading-tight">
              One Platform, Complete Movement Solutions
            </h2>
            <p className="mt-2 text-lg text-body md:text-xl">
              Ride comfortably or send cargo securely with theprofast, powered by smart logistics.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-12">
          <ServiceGroup heading="Ride Services" headingBg="#1570ef" items={rides} />
          <ServiceGroup heading="Cargo Services" headingBg="#12b76a" items={cargo} />
        </div>
      </MaxContainer>
    </section>
  )
}

function ServiceGroup({
  heading,
  headingBg,
  items,
}: {
  heading: string
  headingBg: string
  items: Service[]
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <span
          className="flex h-12 w-12 items-center justify-center rounded-2xl"
          style={{ background: headingBg }}
        >
          <Car className="h-6 w-6 text-white" strokeWidth={1.5} />
        </span>
        <h3 className="text-2xl font-bold text-ink">{heading}</h3>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map(({ icon: Icon, iconBg, iconColor, title, desc }) => (
          <div
            key={title}
            className="flex flex-col gap-6 rounded-3xl border border-line/60 bg-white p-4"
          >
            <span
              className="flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{ background: iconBg }}
            >
              <Icon className="h-6 w-6" strokeWidth={1.6} style={{ color: iconColor }} />
            </span>
            <div className="flex flex-col gap-3">
              <h4 className="text-xl font-bold text-ink">{title}</h4>
              <p className="text-base font-light text-body">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
