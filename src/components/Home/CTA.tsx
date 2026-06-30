import { ArrowRight, Package } from 'lucide-react'
import MaxContainer from '../layout/MaxContainer'
import { CTAButton } from '../form'
import ctaRoads from '../../assets/cta-roads.png'

export default function CTA() {
  return (
    <section className="px-4 py-12 md:px-20">
      <MaxContainer className="relative overflow-hidden rounded-3xl bg-[#171717] px-8 py-14 md:px-16">
        {/* decorative crossing-roads graphic */}
        <img
          src={ctaRoads}
          alt=""
          aria-hidden="true"
          className=" hidden md:inline-block pointer-events-none absolute inset-y-0 right-0 h-full w-auto select-none object-cover object-right"
        />

        <div className="relative max-w-130">
          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl md:leading-tight">
            Ready to Experience Seamless Movement?
          </h2>
          <p className="mt-4 text-base text-white/90">
            Join thousands of Nigerians who trust theprofast for their daily rides and cargo needs.
            Get started in minutes.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton
              variant="primary"
              rightIcon={<ArrowRight className="h-5 w-5" strokeWidth={2} />}
            >
              Book a Ride
            </CTAButton>
            <CTAButton
              variant="outline"
              className="border-[#eb8a54] text-[#1a1a1a] hover:bg-white/90"
              rightIcon={<Package className="h-5 w-5" strokeWidth={2} />}
            >
              Send Cargo
            </CTAButton>
          </div>
        </div>
      </MaxContainer>
    </section>
  )
}
