import Badge from './Badge'
import MaxContainer from '../layout/MaxContainer'
import { whyChooseUsFeatures } from '../../lib/data/home'
import whyImg from '../../assets/why-choose.png'

export default function WhyChooseUs() {
  return (
    <section className="px-4 py-16 md:px-20 md:py-24">
      <MaxContainer className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
        <div className="relative w-full max-w-127 shrink-0">
          <img
            src={whyImg}
            alt="theprofast service"
            className="aspect-508/432 w-full rounded-3xl object-cover"
          />
          <span className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-3xl bg-ink lg:block" />
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <Badge label="Why choose us" />
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold text-ink md:text-5xl md:leading-tight">
                Movement That Delivers Value
              </h2>
              <p className="text-lg text-body md:text-xl">
                With theprofast, you get more than transportation you get reliability, safety, and a
                commitment to excellence every step of the way.
              </p>
            </div>
          </div>

          <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {whyChooseUsFeatures.map(({ icon: Icon, iconBg, iconColor, title, desc }) => (
              <div key={title} className="flex gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                  style={{ background: iconBg }}
                >
                  <Icon className="h-6 w-6" strokeWidth={2} style={{ color: iconColor }} />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-black text-ink">{title}</h3>
                  <p className="text-sm font-light text-muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxContainer>
    </section>
  )
}
