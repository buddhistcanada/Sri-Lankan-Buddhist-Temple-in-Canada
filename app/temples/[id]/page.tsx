import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getTemple } from '../../../data/temples'

export default async function TempleDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const temple = getTemple(id)
  if (!temple) notFound()

  const mapsQuery = encodeURIComponent(`${temple.name}, ${temple.address}, ${temple.city}, ${temple.province}`)
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`

  return (
    <main style={{ minHeight: '100vh', background: '#f7f5f0', color: '#2b241e' }}>
      <header style={{ borderBottom: '1px solid #e6ded3', background: 'rgba(255,255,255,.92)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <Link href="/" style={{ textDecoration: 'none', fontWeight: 800, letterSpacing: '.01em' }}>☸️ Sri Lankan Buddhist Temples in Canada</Link>
          <Link href="/" style={{ textDecoration: 'none', fontWeight: 700, color: '#6b3f1d' }}>← All temples</Link>
        </div>
      </header>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '42px 20px 64px' }}>
        <div style={{ fontSize: 13, color: '#876f5b', fontWeight: 700, marginBottom: 12 }}>TEMPLE DIRECTORY · {temple.province.toUpperCase()}</div>
        <article style={{ background: '#fff', border: '1px solid #e4dbcf', borderRadius: 24, overflow: 'hidden', boxShadow: '0 12px 35px rgba(62,42,24,.08)' }}>
          <div style={{ padding: '34px 34px 28px', background: 'linear-gradient(135deg,#fffaf3,#f4eadc)' }}>
            <div style={{ width: 58, height: 58, borderRadius: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', border: '1px solid #e1d1bd', fontSize: 32, marginBottom: 18 }}>☸️</div>
            <h1 style={{ fontSize: 'clamp(28px,5vw,44px)', lineHeight: 1.1, margin: 0, letterSpacing: '-.025em' }}>{temple.name}</h1>
            <p style={{ margin: '12px 0 0', color: '#67584c', fontSize: 16 }}>A Sri Lankan Buddhist community location in Canada.</p>
          </div>

          <div style={{ padding: 34 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 16 }}>
              <section style={{ padding: 20, border: '1px solid #eee5db', borderRadius: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: '#8a6c50', marginBottom: 8 }}>LOCATION</div>
                <div style={{ fontWeight: 700, lineHeight: 1.5 }}>{temple.address}</div>
                <div style={{ color: '#67584c', marginTop: 3 }}>{temple.city}, {temple.province} {temple.postalCode}</div>
              </section>

              {temple.phone && <section style={{ padding: 20, border: '1px solid #eee5db', borderRadius: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: '#8a6c50', marginBottom: 8 }}>PHONE</div>
                <a href={`tel:${temple.phone}`} style={{ fontWeight: 700, textDecoration: 'none' }}>{temple.phone}</a>
              </section>}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 24 }}>
              <a href={mapsUrl} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 19px', borderRadius: 12, background: '#6b3f1d', color: '#fff', textDecoration: 'none', fontWeight: 800 }}>📍 Open in Google Maps</a>
              {temple.website && <a href={temple.website} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 19px', borderRadius: 12, border: '1px solid #d8c8b7', background: '#fff', color: '#6b3f1d', textDecoration: 'none', fontWeight: 800 }}>🌐 Official website</a>}
            </div>

            <div style={{ marginTop: 30, paddingTop: 20, borderTop: '1px solid #eee5db', fontSize: 13, color: '#7b7068' }}>
              Public information source: {temple.sourceUrl ? <a href={temple.sourceUrl} target="_blank" rel="noreferrer" style={{ color: '#6b3f1d', fontWeight: 700 }}>View source</a> : 'Not provided'}
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}
