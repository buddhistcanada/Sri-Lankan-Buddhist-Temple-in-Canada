// Candidate public-source organizations/temples for later review by the project owner.
// Coordinates are intentionally omitted here. Add a record to the live map only after the owner checks it.
export type CandidateTemple = {
  name: string
  city?: string
  province?: string
  sourceUrl: string
  sourceNote?: string
}

export const candidateTemples: CandidateTemple[] = [
  {
    name: 'Ottawa Buddhist Vihara',
    city: 'Ottawa',
    province: 'Ontario',
    sourceUrl: 'https://www.hc-ottawa.gov.lk/en/posts/6a7f5da9456f4f36dd608e88',
    sourceNote: 'Named by the High Commission of Sri Lanka in Canada among three Sri Lankan Buddhist temples in the Ottawa area in its 2026 Vesak report.',
  },
  {
    name: 'Ottawa Theravada Buddhist Vihara and Cultural Center',
    city: 'Ottawa',
    province: 'Ontario',
    sourceUrl: 'https://www.hc-ottawa.gov.lk/en/posts/6a7f5da9456f4f36dd608e88',
    sourceNote: 'Named by the High Commission of Sri Lanka in Canada among three Sri Lankan Buddhist temples in the Ottawa area in its 2026 Vesak report.',
  },
  {
    name: 'Sri Lankan Buddhist Society of Calgary',
    city: 'Calgary',
    province: 'Alberta',
    sourceUrl: 'https://www.buddhanet.info/wbd/city.php?..=&offset=5100',
    sourceNote: 'Listed in BuddhaNet World Buddhist Directory as Theravada and affiliated with the International Buddhist Foundation of Canada.',
  },
  {
    name: 'Buddhist Society of Newfoundland & Labrador',
    city: "St. John's",
    province: 'Newfoundland and Labrador',
    sourceUrl: 'https://www.buddhanet.info/wbd/country.php?country_id=1&offset=25',
    sourceNote: 'Listed in BuddhaNet World Buddhist Directory as Theravada, Sri Lankan.',
  },
]
