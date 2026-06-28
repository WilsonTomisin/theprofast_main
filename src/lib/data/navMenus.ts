import {
  Plane, MapPin, Navigation, Building2, CalendarDays,
  Truck, Ship, ShoppingBag, HelpCircle, Mail, Info, ListChecks,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { ROUTES } from '../types/Routes'

export type NavMenuItem = {
  icon: LucideIcon
  title: string
  description: string
  to?: string
  comingSoon?: boolean
}

export const navMenus: { label: string; items: NavMenuItem[] }[] = [
  {
    label: 'Ride',
    items: [
      { icon: Plane, title: 'Airport Rides', description: 'Seamless pickup and drop-off services for all major airports.', to: ROUTES.AIRPORT },
      { icon: MapPin, title: 'Car Rentals - Intrastate', description: 'Rent reliable and verified vehicles for travel within your state.', to: ROUTES.CAR_RENTALS },
      { icon: Navigation, title: 'Car Rentals - Interstate', description: 'Rent reliable and verified vehicles for travel across states.', to: ROUTES.CAR_RENTALS_INTERSTATE },
      { icon: Building2, title: 'Corporate Rides', description: 'Get your workforce to and from work safely, comfortably, and on time with a tailored transportation solution.', comingSoon: true },
      { icon: CalendarDays, title: 'Share Daily Ride', description: 'Enjoy safe, comfortable, and reliable rides to and from work daily.', comingSoon: true },
    ],
  },
  {
    label: 'Cargo',
    items: [
      { icon: Truck, title: 'Local Delivery', description: 'Secure pickup and delivery within cities and across states.', comingSoon: true },
      { icon: Ship, title: 'International Shipping', description: 'Global cargo solutions with customs clearance and insurance.', comingSoon: true },
      { icon: ShoppingBag, title: 'Weshop4U', description: 'We buy items abroad, manage shipping, and deliver to your door.', comingSoon: true },
    ],
  },
  {
    label: 'Resources',
    items: [
      { icon: HelpCircle, title: 'FAQ', description: 'Find quick answers to common questions about our services.', to: ROUTES.FAQS },
      { icon: Mail, title: 'Contact Us', description: 'Get in touch with our dedicated support team.', to: ROUTES.CONTACT },
      { icon: Info, title: 'About Us', description: 'Learn more about theprofast and our mission.', comingSoon: true },
      { icon: ListChecks, title: 'How It Works', description: 'See how booking a ride or cargo works, step by step.', comingSoon: true },
    ],
  },
]
