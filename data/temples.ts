export type Temple = {
  id: string
  name: string
  address: string
  city: string
  province: string
  postalCode: string
  phone?: string
  website?: string
  latitude: number
  longitude: number
  sourceUrl?: string
}

// Initial structure only. Temple records will be added from public sources.
export const temples: Temple[] = []

export function getTemple(id: string) {
  return temples.find((temple) => temple.id === id)
}
