import vehicle1 from '../../assets/vehicle-1.png'
import vehicle2 from '../../assets/vehicle-2.png'
import vehicle3 from '../../assets/vehicle-3.png'

export type VehicleType = 'Sedan' | 'SUV' | 'G-wagon' | 'Van' | 'Luxury buses'
export type VehicleBadge = 'Most Popular' | 'Best Value' | 'Premium'

export type Vehicle = {
  id: string
  type: VehicleType
  name: string
  specs: string
  badges: VehicleBadge[]
  price: number
  image: string
}

export const vehicles: Vehicle[] = [
  { id: 'corolla', type: 'Sedan', name: 'Sedan — Toyota Corolla', specs: '3 seats · 2 bags · AC · Driver rating 4.8', badges: ['Most Popular', 'Best Value'], price: 100000, image: vehicle1 },
  { id: 'accord', type: 'Sedan', name: 'Sedan — Honda Accord', specs: '3 seats · 2 bags · AC · Driver rating 4.8', badges: ['Best Value'], price: 120000, image: vehicle1 },
  { id: 'rav4', type: 'SUV', name: 'SUV — Toyota RAV4', specs: '5 seats · 4 bags · AC · Driver rating 4.7', badges: ['Most Popular'], price: 150000, image: vehicle2 },
  { id: 'gclass', type: 'G-wagon', name: 'G-wagon — Mercedes G-Class', specs: '4 seats · 3 bags · AC · Driver rating 4.9', badges: ['Premium'], price: 350000, image: vehicle3 },
  { id: 'hiace', type: 'Van', name: 'Van — Toyota HiAce', specs: '12 seats · 8 bags · AC · Driver rating 4.6', badges: ['Best Value'], price: 200000, image: vehicle2 },
  { id: 'coaster', type: 'Luxury buses', name: 'Luxury Bus — Toyota Coaster', specs: '30 seats · 20 bags · AC · Driver rating 4.5', badges: [], price: 500000, image: vehicle3 },
]

/** Resolve a vehicle by id, falling back to the first option. */
export function getVehicle(id: string | null | undefined): Vehicle {
  return vehicles.find(v => v.id === id) ?? vehicles[0]
}

/** Flat add-on price when security personnel is requested. */
export const SECURITY_PRICE = 100000

/** Format a number as Naira, e.g. ₦ 100,000. */
export const naira = (n: number) => `₦ ${n.toLocaleString('en-NG')}`
