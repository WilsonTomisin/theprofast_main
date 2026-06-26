import { useState } from 'react'
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react'
import MaxContainer from './MaxContainer'
import { CTAButton } from '../form'
import logo from '../../assets/logo.svg'

const links = ['Ride', 'Cargo', 'Resources']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-20">
      <MaxContainer
        as="nav"
        className="relative flex h-18 items-center justify-between gap-4 rounded-2xl bg-white px-5 md:px-10"
      >
        {/* Left: logo + desktop links */}
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

        {/* Right: desktop actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <CTAButton
            variant="primary"
            rightIcon={<ArrowRight className="h-5 w-5" strokeWidth={2} />}
          >
            Book a Ride
          </CTAButton>
          <CTAButton
            variant="outline"
            rightIcon={<ArrowRight className="h-5 w-5" strokeWidth={2} />}
          >
            Book Cargo
          </CTAButton>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink transition hover:bg-ink/5 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile menu panel */}
        {open && (
          <div className="absolute inset-x-0 top-[calc(100%+0.5rem)] flex flex-col gap-2 rounded-2xl border border-line/60 bg-white p-4 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.3)] lg:hidden">
            <ul className="flex flex-col">
              {links.map(l => (
                <li key={l}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base text-ink transition hover:bg-ink/5"
                  >
                    {l}
                    <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex flex-col gap-3">
              <CTAButton
                variant="primary"
                fullWidth
                rightIcon={<ArrowRight className="h-5 w-5" strokeWidth={2} />}
              >
                Book a Ride
              </CTAButton>
              <CTAButton
                variant="outline"
                fullWidth
                rightIcon={<ArrowRight className="h-5 w-5" strokeWidth={2} />}
              >
                Book Cargo
              </CTAButton>
            </div>
          </div>
        )}
      </MaxContainer>
    </header>
  )
}
