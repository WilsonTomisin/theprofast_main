import type { ReactNode } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { Link } from 'react-router'
import { ROUTES } from '../../lib/types/Routes'
import logo from '../../assets/logo.svg'

// Footer labels that map to real, built routes.
const routeForLabel: Record<string, string> = {
  Contact: ROUTES.CONTACT,
  FAQs: ROUTES.FAQS,
}

const columns = [
  {
    title: 'Services',
    links: ['Daily Ride', 'Corporate Transport', 'Airport Transfer', 'Local Cargo', 'International Shipping', 'Weshop4U'],
  },
  {
    title: 'Company',
    links: ['About Us', 'How It Works', 'Careers', 'Blog', 'Contact'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Safety', 'Terms of Service', 'Privacy Policy', 'FAQs'],
  },
]

const socials = [
  { label: 'Facebook', Icon: FaFacebookF },
  { label: 'X', Icon: FaXTwitter },
  { label: 'Instagram', Icon: FaInstagram },
  { label: 'LinkedIn', Icon: FaLinkedinIn },
]

export default function Footer() {
  return (
    <footer className="bg-ink px-4 pt-20 md:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          {/* Info */}
          <div className="max-w-117.75">
            <img src={logo} alt="theprofast" className="h-16 w-auto brightness-0 invert" />
            <p className="mt-6 text-base text-line">
              Innovative transport and logistics solutions, specializing in reliable rides across Nigeria and secure cargo delivery worldwide.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <ContactLine icon={<Mail className="h-4.5 w-4.5" strokeWidth={1.5} />} text="info@theprofast.com" />
              <ContactLine icon={<Phone className="h-4.5 w-4.5" strokeWidth={1.5} />} text="+234 XXX XXX XXXX" />
              <ContactLine icon={<MapPin className="h-4.5 w-4.5" strokeWidth={1.5} />} text="Lagos, Nigeria" />
            </div>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-12 lg:gap-32">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-6">
                <h4 className="text-base font-bold text-white">{col.title}</h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      {routeForLabel[l] ? (
                        <Link to={routeForLabel[l]} className="text-base text-line transition hover:text-white">
                          {l}
                        </Link>
                      ) : (
                        <a href="#" className="text-base text-line transition hover:text-white">
                          {l}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="mt-12 border-white/20" />

        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-sm text-line">© 2025 THEPROFAST. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {socials.map(({ label, Icon }) => (
              <a key={label} href="#" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:bg-white/10">
                <Icon className="h-4.5 w-4.5 text-line" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function ContactLine({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 text-line">
      <span className="text-line">{icon}</span>
      <span className="text-base font-light">{text}</span>
    </div>
  )
}
