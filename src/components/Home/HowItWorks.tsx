import { UserPlus, ListChecks, MapPin, Star } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Badge from './Badge'
import MaxContainer from '../layout/MaxContainer'

type Step = {
  n: string
  color: string
  iconBg: string
  icon: LucideIcon
  title: string
  desc: string
}

const steps: Step[] = [
  {
    n: '01',
    color: '#875bf7',
    iconBg: '#fbfaff',
    icon: UserPlus,
    title: 'Create Account',
    desc: 'Sign up in seconds using your phone number or email.',
  },
  {
    n: '02',
    color: '#2e90fa',
    iconBg: '#f5faff',
    icon: ListChecks,
    title: 'Choose Service',
    desc: 'Select between Ride or Cargo, and enter your details.',
  },
  {
    n: '03',
    color: '#fac515',
    iconBg: '#fefdf0',
    icon: MapPin,
    title: 'Track in Real-Time',
    desc: 'Monitor your ride or package with live GPS tracking.',
  },
  {
    n: '04',
    color: '#12b76a',
    iconBg: '#f6fef9',
    icon: Star,
    title: 'Complete & Rate',
    desc: 'Arrive safely or receive your cargo, then share feedback.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-line/20 px-4 py-16 md:px-20 md:py-24">
      <MaxContainer className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <Badge label="How It Works" />
          <div>
            <h2 className="text-3xl font-bold text-ink md:text-5xl md:leading-tight">
              Simple Steps to Get Started
            </h2>
            <p className="mx-auto mt-2 max-w-[533px] text-lg text-body md:text-xl">
              Getting started with theprofast is quick and easy, whether you need a ride or want to
              send cargo.
            </p>
          </div>
        </div>

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ n, color, iconBg, icon: Icon, title, desc }) => (
            <div
              key={n}
              className="flex flex-col items-center gap-4 rounded-[32px] bg-white px-6 py-8 text-center"
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full text-base font-bold text-white"
                style={{ background: color }}
              >
                {n}
              </span>
              <span
                className="flex h-16 w-16 items-center justify-center rounded-2xl"
                style={{ background: iconBg }}
              >
                <Icon className="h-8 w-8" strokeWidth={2.2} style={{ color }} />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-ink">{title}</h3>
                <p className="text-base font-light text-body">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </MaxContainer>
    </section>
  )
}
