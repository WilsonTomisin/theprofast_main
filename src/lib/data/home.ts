import {
  Car, Plane, Briefcase, Truck, Ship, ShoppingBag,
  UserPlus, ListChecks, MapPin, Star,
  Clock, ShieldCheck, Wallet, Headphones, Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Service = { icon: LucideIcon; iconBg: string; iconColor: string; title: string; desc: string }

export const rideServices: Service[] = [
  { icon: Plane, iconBg: '#f6fef9', iconColor: '#039855', title: 'Airport Rides', desc: 'Stress free pickup and drop-off services for all major airports.' },
  { icon: Car, iconBg: '#f5faff', iconColor: '#1570ef', title: 'Daily Ride', desc: 'Affordable per-seat sharing for daily commuting across Nigeria.' },
  { icon: Briefcase, iconBg: '#fbfaff', iconColor: '#7839ee', title: 'Corporate Transport', desc: 'Reliable staff movement managed through centralized dashboard.' },
]

export const cargoServices: Service[] = [
  { icon: Truck, iconBg: '#fffbfa', iconColor: '#d92d20', title: 'Local Delivery', desc: 'Secure pickup and delivery within cities and across states.' },
  { icon: Ship, iconBg: 'rgba(0,200,179,0.1)', iconColor: '#00c8b3', title: 'International Shipping', desc: 'Global cargo solutions with customs clearance and insurance.' },
  { icon: ShoppingBag, iconBg: '#fffcf5', iconColor: '#f79009', title: 'Weshop4U', desc: 'We buy items abroad, manage shipping, and deliver to your door.' },
]

export type Step = { n: string; color: string; iconBg: string; icon: LucideIcon; title: string; desc: string }

export const howItWorksSteps: Step[] = [
  { n: '01', color: '#875bf7', iconBg: '#fbfaff', icon: UserPlus, title: 'Create Account', desc: 'Sign up in seconds using your phone number or email.' },
  { n: '02', color: '#2e90fa', iconBg: '#f5faff', icon: ListChecks, title: 'Choose Service', desc: 'Select between Ride or Cargo, and enter your details.' },
  { n: '03', color: '#fac515', iconBg: '#fefdf0', icon: MapPin, title: 'Track in Real-Time', desc: 'Monitor your ride or package with live GPS tracking.' },
  { n: '04', color: '#12b76a', iconBg: '#f6fef9', icon: Star, title: 'Complete & Rate', desc: 'Arrive safely or receive your cargo, then share feedback.' },
]

export type Feature = { icon: LucideIcon; iconBg: string; iconColor: string; title: string; desc: string }

export const whyChooseUsFeatures: Feature[] = [
  { icon: Clock, iconBg: '#dbeafe', iconColor: '#3b82f6', title: 'On-Time Service', desc: 'Reliable scheduling and real-time tracking ensure punctuality.' },
  { icon: ShieldCheck, iconBg: '#d1fae5', iconColor: '#10b981', title: 'Safe & Secure', desc: 'Verified drivers and insured cargo for complete peace of mind.' },
  { icon: Wallet, iconBg: '#fef3c7', iconColor: '#f59e0b', title: 'Affordable Pricing', desc: 'Transparent, competitive rates with no hidden fees.' },
  { icon: Headphones, iconBg: '#fce7f3', iconColor: '#ec4899', title: '24/7 Support', desc: 'Round-the-clock customer service whenever you need us.' },
  { icon: MapPin, iconBg: '#ccfbf1', iconColor: '#14b8a6', title: 'Nationwide Coverage', desc: 'From Lagos to Abuja and everywhere in between.' },
  { icon: Zap, iconBg: '#ede9fe', iconColor: '#8b5cf6', title: 'Fast Processing', desc: 'Quick booking, instant matching, and efficient delivery.' },
]
