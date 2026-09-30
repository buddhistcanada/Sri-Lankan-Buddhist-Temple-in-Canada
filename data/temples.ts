export type Temple = {
  id: string
  name: string
  address: string
  city: string
  province: string
  postalCode: string
  phone?: string
  email?: string
  website?: string
  photoUrl?: string
  photoSourceUrl?: string
  latitude: number
  longitude: number
  sourceUrl?: string
}

// Public-source records. Contact emails are included only when publicly listed by a temple/organization source.
export const temples: Temple[] = [
  { id:'toronto-maha-vihara', name:'Toronto Maha Vihara', address:'4698 Kingston Road', city:'Scarborough', province:'Ontario', postalCode:'M1E 2P9', phone:'(416) 208-9276', email:'torontomahavihara@rogers.com', website:'https://www.torontomahavihara.com/', photoSourceUrl:'https://www.torontomahavihara.com/main.php', latitude:43.776, longitude:-79.208, sourceUrl:'https://www.torontomahavihara.com/Contact.htm' },
  { id:'hilda-jayewardenaramaya', name:'Hilda Jayewardenaramaya Buddhist Monastery', address:'1481 Heron Road', city:'Ottawa', province:'Ontario', postalCode:'K1V 6A2', phone:'1-613-321-5677', email:'bcc.ottawa@rogers.com', website:'https://buddhisttempleottawa.org/', photoSourceUrl:'https://www.buddhisttempleottawa.org/gallery.asp', latitude:45.350, longitude:-75.648, sourceUrl:'https://buddhisttempleottawa.org/history.asp' },
  { id:'calgary-buddhist-maha-vihara', name:'Calgary Buddhist Maha Vihara', address:'64 Templemont Circle NE', city:'Calgary', province:'Alberta', postalCode:'', phone:'+1 (825) 205-3379', email:'calgarybmv@gmail.com', website:'https://calgarybmv.ca/', latitude:51.1115, longitude:-113.9405, sourceUrl:'https://calgarybmv.ca/' },
  { id:'waterloo-wellington-buddhist-monastery', name:'Waterloo Wellington Buddhist Monastery and Meditation Centre', address:'1145 Roseville Road', city:'Cambridge', province:'Ontario', postalCode:'N1R 5S3', phone:'1 (519) 267-0397', email:'info@wwbmmc.ca', website:'https://wwbmmc.ca/', photoUrl:'https://wwbmmc.ca/wp-content/uploads/2021/08/IMG_0390-1540x866.jpg', photoSourceUrl:'https://wwbmmc.ca/', latitude:43.359348, longitude:-80.352998, sourceUrl:'https://wwbmmc.ca/about-wwbmmc/history/' },
  { id:'mahamevnawa-markham', name:'Mahamevnawa Buddhist Monastery / Buddha Meditation Centre of Greater Toronto', address:'11175 Kennedy Road', city:'Markham', province:'Ontario', postalCode:'L6C 1P2', phone:'+1 905-927-7117', email:'info@mahamevnawa.ca', website:'https://www.mahamevnawa.ca/', photoSourceUrl:'https://www.mahamevnawa.ca/', latitude:43.926524, longitude:-79.324728, sourceUrl:'https://mahamevnawa.org/worldwide-mahamevnawa-branches/' },
  { id:'ottawa-buddhist-vihara', name:'Ottawa Buddhist Vihara', address:'Ottawa, Ontario, Canada', city:'Ottawa', province:'Ontario', postalCode:'', email:'buddhistvihara@gmail.com', website:'', latitude:45.4215, longitude:-75.6972, sourceUrl:'https://www.hc-ottawa.gov.lk/en/posts/6a7f5da9456f4f36dd608e88' },
  { id:'ottawa-theravada-buddhist-vihara', name:'Ottawa Theravada Buddhist Vihara and Cultural Center', address:'1153 St. Pierre Street', city:'Orleans', province:'Ontario', postalCode:'K1C 1L4', phone:'613-424-4482', email:'ottawabuddhistmonastery@gmail.com', website:'https://theravadabuddhistvihara.wordpress.com/', latitude:45.465, longitude:-75.482, sourceUrl:'https://ottawabuddhist.org/' },
  { id:'sri-lankan-buddhist-society-calgary', name:'Sri Lankan Buddhist Society of Calgary', address:'8315 Centre Street Northwest', city:'Calgary', province:'Alberta', postalCode:'T3K 1J5', phone:'(403) 764-7889', email:'slbsc.yyc@gmail.com', website:'http://ehipassiko-calgary.org/', latitude:51.1347, longitude:-114.0636, sourceUrl:'http://ehipassiko-calgary.org/' },
  { id:'buddhist-society-newfoundland-labrador', name:'Buddhist Society of Newfoundland & Labrador', address:"St. John's, Newfoundland and Labrador, Canada", city:"St. John's", province:'Newfoundland and Labrador', postalCode:'', website:'', latitude:47.5615, longitude:-52.7126, sourceUrl:'https://www.buddhanet.info/wbd/country.php?country_id=1&offset=25' },
  { id:'manitoba-buddhist-vihara', name:'Manitoba Buddhist Vihara and Cultural Association', address:'88 Cadboro Road', city:'Winnipeg', province:'Manitoba', postalCode:'R3Y 1R7', phone:'(204) 269-6026', email:'mbvcamedia@gmail.com', website:'https://mbvca.com/', latitude:49.772, longitude:-97.214, sourceUrl:'https://mbvca.com/children-programs' },
  { id:'mahamevnawa-winnipeg', name:'Mahamevnawa Buddhist Monastery Winnipeg / Buddha Meditation Centre', address:"2610 St Mary’s Road", city:'Winnipeg', province:'Manitoba', postalCode:'R2N 4A2', phone:'204-869-5272', email:'info@mahamevnawawinnipeg.org', website:'https://www.mahamevnawawinnipeg.org/', photoUrl:'https://www.mahamevnawawinnipeg.org/uploads/9/4/3/9/94398901/dsc-1843_1_orig.jpg', photoSourceUrl:'https://www.mahamevnawawinnipeg.org/mindfulness-meditation-club.html', latitude:49.822, longitude:-97.111, sourceUrl:'https://www.mahamevnawawinnipeg.org/contact.html' },
  { id:'mahamevnawa-saskatoon', name:'Mahamevnawa Buddha Meditation Centre - Saskatoon', address:'Box 99 D, RR 3', city:'Saskatoon', province:'Saskatchewan', postalCode:'S7K 3J6', phone:'+1 306 361 1772', email:'info@mahamevnawasaskatoon.com', website:'https://www.mahamevnawasaskatoon.com/', photoUrl:'https://images.squarespace-cdn.com/content/v1/668ac68742d15d44083d0fd1/bab1a3ef-f38a-4952-874e-dc59aecab761/Vajrasana-1.png', photoSourceUrl:'https://www.mahamevnawasaskatoon.com/buddhist-world-1', latitude:52.1579, longitude:-106.6702, sourceUrl:'https://mahamevnawa.org/worldwide-mahamevnawa-branches/' },
  { id:'mahamevnawa-edmonton', name:'Mahamevnawa Buddha Meditation Centre - Edmonton', address:'22711 122 Ave NW', city:'Edmonton', province:'Alberta', postalCode:'T5S 2C1', phone:'+1 780 732 0991', email:'info.mahamevnawa@gmail.com', website:'https://mahamevnawaedmonton.com/', latitude:53.572, longitude:-113.666, sourceUrl:'https://mahamevnawa.org/worldwide-mahamevnawa-branches/' },
  { id:'mahamevnawa-vancouver', name:'Mahamevnawa Buddha Meditation Society / Vancouver Centre', address:'6937 134A Street', city:'Surrey', province:'British Columbia', postalCode:'V3W 8G6', phone:'(778) 939-5241', email:'mahamevnawabc@gmail.com', website:'https://www.mahamevnawavancouver.com/', latitude:49.129, longitude:-122.856, sourceUrl:'https://mahamevnawa.org/worldwide-mahamevnawa-branches/' },
  { id:'mahamevnawa-halton', name:'Buddha Meditation Centre of Halton', address:'148 Main Street South', city:'Acton', province:'Ontario', postalCode:'L7J 1X9', phone:'+1 519 929 9696', email:'info@buddhisthalton.org', website:'https://buddhisthalton.org/', latitude:43.63, longitude:-80.041, sourceUrl:'https://mahamevnawa.org/worldwide-mahamevnawa-branches/' },
  { id:'theravada-buddhist-community-halifax', name:'Theravada Buddhist Community', address:'41 Swan Crescent', city:'Halifax', province:'Nova Scotia', postalCode:'', phone:'(902) 443-5493', website:'', latitude:44.65, longitude:-63.58, sourceUrl:'https://www.buddhanet.info/wbd/province.php?offset=5100' },
  { id:'buddhist-vihara-society-bc', name:'Buddhist Vihara Society in BC', address:'18941 80th Avenue', city:'Surrey', province:'British Columbia', postalCode:'V4N 4J1', phone:'+1 604 888 1162', email:'info@bvs.org', website:'https://www.bvs.org/', latitude:49.128, longitude:-122.837, sourceUrl:'https://www.bvs.org/' },
  { id:'ottawa-buddhist-vihara-site', name:'Ottawa Buddhist Vihara', address:'Ottawa, Ontario, Canada', city:'Ottawa', province:'Ontario', postalCode:'', email:'buddhistvihara@gmail.com', website:'https://ottawabuddhistvihara.ca/', latitude:45.4215, longitude:-75.6972, sourceUrl:'https://ottawabuddhistvihara.ca/about/' },
  { id:'westend-buddhist-centre', name:'Westend Buddhist Centre / Halton-Peel Buddhist Society', address:'3133 Cawthra Road', city:'Mississauga', province:'Ontario', postalCode:'L5A 2X4', phone:'', website:'http://www.westendbuddhist.com', latitude:43.597911, longitude:-79.603021, sourceUrl:'https://www.buddhanet.info/wbd/province.php?offset=75&province_id=18' },
  { id:'windsor-buddhist-vihara', name:'Windsor Buddhist Vihara', address:'691 Campbell Avenue', city:'Windsor', province:'Ontario', postalCode:'N9B 2H6', phone:'(519) 256-4223', website:'http://www.windsorbuddhistvihara.com', latitude:42.300, longitude:-83.050, sourceUrl:'https://www.buddhanet.info/wbd/province.php?offset=75&province_id=18' },
  { id:'pitaka-society-edmonton', name:'Pitaka Society', address:'Edmonton, Alberta, Canada', city:'Edmonton', province:'Alberta', postalCode:'', website:'', latitude:53.5461, longitude:-113.4938, sourceUrl:'https://www.buddhanet.info/wbd/province.php?offset=25&province_id=9' },
  { id:'lanka-ramaya-montreal', name:'Lanka Ramaya Buddhist Temple', address:'Montreal, Quebec, Canada', city:'Montreal', province:'Quebec', postalCode:'', website:'', latitude:45.5019, longitude:-73.5674, sourceUrl:'https://buddhistchannel.tv/index.php?id=66%2C34%2C0%2C0%2C1%2C0' },
]

export function getTemple(id: string) {
  return temples.find((temple) => temple.id === id)
}
