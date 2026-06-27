export type Airport = { label: string; value: string }

/** Airports served by theprofast (from the Figma "Airport Drop down"). */
export const airports: Airport[] = [
  { label: 'Akanu Ibiam International Airport (Enugu)', value: 'ENU' },
  { label: 'Akure Airport (Akure)', value: 'AKR' },
  { label: 'Asaba International Airport (Asaba)', value: 'ABB' },
  { label: 'Benin Airport (Benin City)', value: 'BNI' },
  { label: 'Ibadan Airport (Ibadan)', value: 'IBA' },
  { label: 'Ilorin International Airport (Ilorin)', value: 'ILR' },
  { label: 'Kaduna International Airport (Kaduna)', value: 'KAD' },
  { label: 'Mallam Aminu Kano International Airport (Kano)', value: 'KAN' },
  { label: 'Margaret Ekpo International Airport (Calabar)', value: 'CBQ' },
  { label: 'Minna Airport (Minna)', value: 'MXJ' },
  { label: 'Murtala Muhammed International Airport (Lagos)', value: 'LOS' },
]

/** Resolve an airport code to its full label, falling back to the code itself. */
export function airportLabel(code: string | null | undefined): string {
  if (!code) return ''
  return airports.find(a => a.value === code)?.label ?? code
}
