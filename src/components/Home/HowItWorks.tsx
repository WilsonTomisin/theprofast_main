import Badge from './Badge'
import MaxContainer from '../layout/MaxContainer'
import { howItWorksSteps } from '../../lib/data/home'

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
            <p className="mx-auto mt-2 max-w-133.25 text-lg text-body md:text-xl">
              Getting started with theprofast is quick and easy, whether you need a ride or want to
              send cargo.
            </p>
          </div>
        </div>

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps.map(({ n, color, iconBg, icon: Icon, title, desc }) => (
            <div
              key={n}
              className="flex flex-col items-center gap-4 rounded-4xl bg-white px-6 py-8 text-center"
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
