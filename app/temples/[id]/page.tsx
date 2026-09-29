import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getTemple } from '../../../data/temples'

export default async function TempleDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const temple = getTemple(id)
  if (!temple) notFound()
  const mapsQuery = encodeURIComponent(`${temple.name}, ${temple.address}, ${temple.city}, ${temple.province}`)
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`

  return <main style={{ minHeight: '100vh', padding: 20, background: '#f7f7f5' }}><div style={{ maxWidth: 800, margin: '0 auto' }}>
    <Link href="/">← Back to temples</Link>
    <article style={{ marginTop: 20, background: 'white', border: '1px solid #ddd', borderRadius: 16, padding: 24 }}>
      <h1>{temple.name}</h1>
      <p>📍 {temple.address}, {temple.city}, {temple.province} {temple.postalCode}</p>
      {temple.phone && <p>☎️ {temple.phone}</p>}
      {temple.website && <p><a href={temple.website} target="_blank" rel="noreferrer">Official website</a></p>}
      <a href={mapsUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: 12, padding: '12px 18px', borderRadius: 10, background: '#6b3f1d', color: 'white', textDecoration: 'none', fontWeight: 700 }}>Open in Google Maps</a>
      <hr style={{ margin: '24px 0', border: 0, borderTop: '1px solid #eee' }} />
      <p style={{ fontSize: 13, color: '#777' }}>Public information source: <a href={temple.sourceUrl} target="_blank" rel="noreferrer">View source</a></p>
    </article>
  </div></main>
}
