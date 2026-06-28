import { Phone, Mail, ShieldAlert } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type ContactInfoCard = {
  icon: LucideIcon
  iconBg: string
  iconColor: string
  title: string
  subtitle: string
  value: string
}

export const contactInfoCards: ContactInfoCard[] = [
  { icon: Phone, iconBg: '#eff8ff', iconColor: '#1570ef', title: 'Call Us', subtitle: 'Speak directly with our team', value: '+234 123 456 7890' },
  { icon: Mail, iconBg: '#f4f3ff', iconColor: '#7839ee', title: 'Email Us', subtitle: 'Send us a detailed message', value: 'support@theprofast.com' },
  { icon: ShieldAlert, iconBg: '#fff4ed', iconColor: '#e15100', title: 'Emergency', subtitle: '24/7 emergency hotline', value: '+234 987 654 3210' },
]

export const supportHours = [
  { label: 'Phone Support:', value: '24/7' },
  { label: 'Email Response:', value: 'Within 2 hours' },
  { label: 'Emergency Line:', value: '24/7' },
]
