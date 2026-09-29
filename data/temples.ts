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

// Public-source records. Coordinates are included as approximate map points and can be checked by the project owner.
export const temples: Temple[] = [
  {
    id: 'toronto-maha-vihara', name: 'Toronto Maha Vihara', address: '4698 Kingston Road', city: 'Scarborough', province: 'Ontario', postalCode: 'M1E 2P9', phone: '(416) 208-9276', website: 'https://www.torontomahavihara.com/', latitude: 43.776, longitude: -79.208, sourceUrl: 'https://www.torontomahavihara.com/Contact.htm',
  },
  {
    id: 'hilda-jayewardenaramaya', name: 'Hilda Jayewardenaramaya Buddhist Monastery', address: '1481 Heron Road', city: 'Ottawa', province: 'Ontario', postalCode: 'K1V 6A2', phone: '1-613-321-5677', website: 'https://buddhisttempleottawa.org/', latitude: 45.350, longitude: -75.648, sourceUrl: 'https://buddhisttempleottawa.org/',
  },
  {
    id: 'calgary-buddhist-maha-vihara', name: 'Calgary Buddhist Maha Vihara', address: '64 Templemont Circle NE', city: 'Calgary', province: 'Alberta', postalCode: '', phone: '+1 (825) 205-3379', website: 'https://calgarybmv.ca/', latitude: 51.1115, longitude: -113.9405, sourceUrl: 'https://calgarybmv.ca/about/',
  },
  {
    id: 'waterloo-wellington-buddhist-monastery', name: 'Waterloo Wellington Buddhist Monastery and Meditation Centre', address: '1145 Roseville Road', city: 'Cambridge', province: 'Ontario', postalCode: 'N1R 5S3', phone: '1 (519) 267-0397', website: 'https://wwbmmc.ca/', latitude: 43.398, longitude: -80.326, sourceUrl: 'https://wwbmmc.ca/',
  },
  {
    id: 'mahamevnawa-markham', name: 'Mahamevnawa Buddhist Monastery / Buddha Meditation Centre of Greater Toronto', address: '11175 Kennedy Road', city: 'Markham', province: 'Ontario', postalCode: 'L6C 1P2', phone: '+1 905-927-7117', website: 'https://www.mahamevnawa.ca/', latitude: 43.928, longitude: -79.305, sourceUrl: 'https://www.mahamevnawa.ca/',
  },
  {
    id: 'ottawa-buddhist-vihara', name: 'Ottawa Buddhist Vihara', address: 'Ottawa, Ontario, Canada', city: 'Ottawa', province: 'Ontario', postalCode: '', website: '', latitude: 45.4215, longitude: -75.6972, sourceUrl: 'https://www.hc-ottawa.gov.lk/en/posts/6a7f5da9456f4f36dd608e88',
  },
  {
    id: 'ottawa-theravada-buddhist-vihara', name: 'Ottawa Theravada Buddhist Vihara and Cultural Center', address: 'Ottawa, Ontario, Canada', city: 'Ottawa', province: 'Ontario', postalCode: '', website: '', latitude: 45.4215, longitude: -75.6972, sourceUrl: 'https://www.hc-ottawa.gov.lk/en/posts/6a7f5da9456f4f36dd608e88',
  },
  {
    id: 'sri-lankan-buddhist-society-calgary', name: 'Sri Lankan Buddhist Society of Calgary', address: 'Calgary, Alberta, Canada', city: 'Calgary', province: 'Alberta', postalCode: '', website: '', latitude: 51.0447, longitude: -114.0719, sourceUrl: 'https://www.buddhanet.info/wbd/city.php?..=&offset=5100',
  },
  {
    id: 'buddhist-society-newfoundland-labrador', name: 'Buddhist Society of Newfoundland & Labrador', address: "St. John's, Newfoundland and Labrador, Canada", city: "St. John's", province: 'Newfoundland and Labrador', postalCode: '', website: '', latitude: 47.5615, longitude: -52.7126, sourceUrl: 'https://www.buddhanet.info/wbd/country.php?country_id=1&offset=25',
  },
]

export function getTemple(id: string) {
  return temples.find((temple) => temple.id === id)
}
