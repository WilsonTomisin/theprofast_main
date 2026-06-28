import { useState } from 'react'
import { Link } from 'react-router'
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react'
import MaxContainer from './MaxContainer'
import NavDropdown from './NavDropdown'
import { CTAButton } from '../form'
import { navMenus } from '../../lib/data/navMenus'
import logo from '../../assets/logo.svg'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-20">
      <MaxContainer
        as="nav"
        className="relative flex h-18 items-center justify-between gap-4 rounded-2xl bg-white px-5 md:px-10"
      >
        {/* Left: logo + desktop links */}
        <div className="flex items-center gap-12">
          <img src={logo} alt="theprofast" className="h-9 w-auto" />
          <ul className="hidden items-center gap-1 lg:flex">
            {navMenus.map(menu => (
              <li key={menu.label} className="group relative">
                <button className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-base text-ink/90 transition hover:text-brand">
                  {menu.label}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" strokeWidth={1.5} />
                </button>
                {/* pt-3 keeps the hover bridge between the trigger and the panel */}
                <div className="invisible absolute left-0 top-full z-50 translate-y-1 pt-3 opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <NavDropdown items={menu.items} />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: desktop actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <CTAButton variant="primary" rightIcon={<ArrowRight className="h-5 w-5" strokeWidth={2} />}>
            Book a Ride
          </CTAButton>
          <CTAButton variant="outline" rightIcon={<ArrowRight className="h-5 w-5" strokeWidth={2} />}>
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
          <div className="absolute inset-x-0 top-[calc(100%+0.5rem)] flex max-h-[80vh] flex-col gap-1 overflow-y-auto rounded-2xl border border-line/60 bg-white p-4 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.3)] lg:hidden">
            {navMenus.map(menu => (
              <div key={menu.label}>
                <button
                  type="button"
                  onClick={() => setOpenSection(s => (s === menu.label ? null : menu.label))}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-ink transition hover:bg-ink/5"
                >
                  {menu.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${openSection === menu.label ? 'rotate-180' : ''}`}
                    strokeWidth={1.5}
                  />
                </button>
                {openSection === menu.label && (
                  <ul className="flex flex-col pb-2 pl-3">
                    {menu.items.map(item =>
                      item.comingSoon || !item.to ? (
                        <li key={item.title} className="flex items-center gap-2 px-3 py-2 text-sm text-muted">
                          {item.title}
                          {item.comingSoon && (
                            <span className="rounded-full bg-brand-soft px-2 py-0.5 text-xs font-medium text-brand">Coming Soon</span>
                          )}
                        </li>
                      ) : (
                        <li key={item.title}>
                          <Link
                            to={item.to}
                            onClick={() => setOpen(false)}
                            className="block px-3 py-2 text-sm text-body transition hover:text-brand"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ),
                    )}
                  </ul>
                )}
              </div>
            ))}

            <div className="mt-2 flex flex-col gap-3">
              <CTAButton variant="primary" fullWidth rightIcon={<ArrowRight className="h-5 w-5" strokeWidth={2} />}>
                Book a Ride
              </CTAButton>
              <CTAButton variant="outline" fullWidth rightIcon={<ArrowRight className="h-5 w-5" strokeWidth={2} />}>
                Book Cargo
              </CTAButton>
            </div>
          </div>
        )}
      </MaxContainer>
    </header>
  )
}
