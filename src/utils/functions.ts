import { airports } from '../lib/data/airports'
import { vehicles, type Vehicle } from '../lib/data/vehicles'

/** Validate an email address format. */
export const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

/** Format a date string as e.g. "Sun, Feb 22, 2026"; returns the input unchanged if unparseable. */
export function formatDate(value: string): string {
  if (!value) return '—'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

/** Format a number as Naira, e.g. "₦ 100,000". */
export const naira = (amount: number) => `₦ ${amount.toLocaleString('en-NG')}`

/** Resolve an airport code to its full label, falling back to the code itself. */
export function airportLabel(code: string | null | undefined): string {
  if (!code) return ''
  return airports.find(a => a.value === code)?.label ?? code
}

/** Resolve a vehicle by id, falling back to the first option. */
export function getVehicle(id: string | null | undefined): Vehicle {
  return vehicles.find(v => v.id === id) ?? vehicles[0]
}
