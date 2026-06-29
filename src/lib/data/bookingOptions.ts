export type Option = { label: string; value: string }

export const passengerOptions: Option[] = [
  { label: '1 Passenger', value: '1' },
  { label: '2 Passengers', value: '2' },
  { label: '3 Passengers', value: '3' },
  { label: '4 Passengers', value: '4' },
  { label: '5+ Passengers', value: '5' },
]

export const securityOptions: Option[] = [
  { label: '1 Security Personnel', value: '1' },
  { label: '2 Security Personnel', value: '2' },
  { label: 'Armed Escort', value: 'armed' },
  { label: 'Plain-clothes Escort', value: 'plain' },
]

export const driverStayOptions: Option[] = [
  { label: 'Driver returns same day', value: 'same-day' },
  { label: 'Driver stays overnight', value: 'overnight' },
  { label: 'Driver stays for trip duration', value: 'full-trip' },
]

export type IntrastateTrip = 'oneway' | 'round' | 'fullday'

/** Trip-type tabs for the intrastate car rental form. */
export const intrastateTripTabs: { value: IntrastateTrip; label: string }[] = [
  { value: 'oneway', label: 'One-Way' },
  { value: 'round', label: 'Round Trip' },
  { value: 'fullday', label: 'Full Day' },
]

/** Pick-up locations for car rentals. */
export const carRentalLocations: Option[] = [
  { label: 'Lagos', value: 'lagos' },
  { label: 'Abuja', value: 'abuja' },
  { label: 'Port Harcourt', value: 'port-harcourt' },
  { label: 'Ibadan', value: 'ibadan' },
  { label: 'Benin City', value: 'benin-city' },
  { label: 'Enugu', value: 'enugu' },
  { label: 'Kano', value: 'kano' },
  { label: 'Calabar', value: 'calabar' },
]
