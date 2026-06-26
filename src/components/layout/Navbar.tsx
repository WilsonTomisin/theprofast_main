import { ChevronDown, ArrowRight } from 'lucide-react'
import MaxContainer from './MaxContainer'
import { CTAButton } from '../ui'
import logo from '../../assets/logo.svg'

const links = ['Ride', 'Cargo', 'Resources']

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-20">
      <MaxContainer
        as="nav"
        className="flex h-18 items-center justify-between gap-4 rounded-2xl bg-white px-6 md:px-10"
      >
        <div className="flex items-center gap-12">
          <img src={logo} alt="theprofast" className="h-9 w-auto" />
          <ul className="hidden items-center gap-6 lg:flex">
            {links.map(l => (
              <li key={l}>
                <CTAButton
                  variant="ghost"
                  className="px-2 text-ink/90 hover:text-brand"
                  rightIcon={<ChevronDown className="h-4 w-4" strokeWidth={1.5} />}
                >
                  {l}
                </CTAButton>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex">
            <CTAButton
              variant="primary"
              rightIcon={<ArrowRight className="h-5 w-5" strokeWidth={2} />}
            >
              Book a Ride
            </CTAButton>
          </div>
          <CTAButton
            variant="outline"
            rightIcon={<ArrowRight className="h-5 w-5" strokeWidth={2} />}
          >
            Book Cargo
          </CTAButton>
        </div>
      </MaxContainer>
    </header>
  )
}
