import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import type { IconType } from 'react-icons'
import { ROUTES } from '../types/Routes'

/** Footer link labels that map to real, built routes. */
export const footerRouteForLabel: Record<string, string> = {
  Contact: ROUTES.CONTACT,
  FAQs: ROUTES.FAQS,
}

export const footerColumns = [
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

export const footerSocials: { label: string; Icon: IconType }[] = [
  { label: 'Facebook', Icon: FaFacebookF },
  { label: 'X', Icon: FaXTwitter },
  { label: 'Instagram', Icon: FaInstagram },
  { label: 'LinkedIn', Icon: FaLinkedinIn },
]
