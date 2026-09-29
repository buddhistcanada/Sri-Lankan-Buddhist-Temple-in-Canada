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

// Public-source records. Keep sourceUrl with every record so information can be reviewed later.
export const temples: Temple[] = [
  {
    id: 'toronto-maha-vihara',
    name: 'Toronto Maha Vihara',
    address: '4698 Kingston Road',
    city: 'Scarborough',
    province: 'Ontario',
    postalCode: 'M1E 2P9',
    phone: '(416) 208-9276',
    website: 'https://www.torontomahavihara.com/',
    latitude: 43.776,
    longitude: -79.208,
    sourceUrl: 'https://www.torontomahavihara.com/main.php',
  },
  {
    id: 'hilda-jayewardenaramaya',
    name: 'Hilda Jayewardenaramaya Buddhist Monastery',
    address: '1481 Heron Road',
    city: 'Ottawa',
    province: 'Ontario',
    postalCode: 'K1V 6A2',
    phone: '1-613-321-5677',
    website: 'https://buddhisttempleottawa.org/',
    latitude: 45.350,
    longitude: -75.648,
    sourceUrl: 'https://buddhisttempleottawa.org/history.asp',
  },
  {
    id: 'calgary-buddhist-maha-vihara',
    name: 'Calgary Buddhist Maha Vihara',
    address: 'Calgary, Alberta, Canada',
    city: 'Calgary',
    province: 'Alberta',
    postalCode: '',
    website: 'https://calgarybmv.ca/',
    latitude: 51.0447,
    longitude: -114.0719,
    sourceUrl: 'https://calgarybmv.ca/',
  },
  {
    id: 'waterloo-wellington-buddhist-monastery',
    name: 'Waterloo Wellington Buddhist Monastery and Meditation Centre',
    address: '229 Royal Oak Road',
    city: 'Kitchener',
    province: 'Ontario',
    postalCode: 'N2N 1E3',
    website: 'https://wwbmmc.ca/',
    latitude: 43.4516,
    longitude: -80.4925,
    sourceUrl: 'https://wwbmmc.ca/about-wwbmmc/history/',
  },
  {
    id: 'mahamevnawa-markham',
    name: 'Mahamevnawa Buddhist Monastery / Buddha Meditation Centre of Greater Toronto',
    address: '11175 Kennedy Road',
    city: 'Markham',
    province: 'Ontario',
    postalCode: 'L6C 1P2',
    phone: '+1 905-927-7117',
    website: 'https://www.mahamevnawa.ca/',
    latitude: 43.928,
    longitude: -79.305,
    sourceUrl: 'https://www.mahamevnawa.ca/we-care-for-you-past-projects/sri-lanka-day-poson-poya-2012',
  },
]

export function getTemple(id: string) {
  return temples.find((temple) => temple.id === id)
}
