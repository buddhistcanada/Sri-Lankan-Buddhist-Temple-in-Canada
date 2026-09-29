"use client"

import { useEffect, useRef } from "react"
import type { Temple } from "../data/temples"

export default function TempleMap({ temples }: { temples: Temple[] }) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let map: any
    let cancelled = false
    const load = async () => {
      const L = await import("leaflet")
      await import("leaflet/dist/leaflet.css")
      if (cancelled || !mapRef.current) return
      map = L.map(mapRef.current).setView([56.1304, -106.3468], 4)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap contributors" }).addTo(map)

      temples.forEach(t => {
        const mapsQuery = encodeURIComponent(`${t.name}, ${t.address}, ${t.city}, ${t.province}`)
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`
        const marker = L.marker([t.latitude, t.longitude]).addTo(map)
        marker.bindPopup(`
          <div style="min-width:180px">
            <strong>${t.name.replace(/[&<>]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;' }[c] || c))}</strong>
            <br>${t.city}, ${t.province}
            <div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap">
              <a href="/temples/${t.id}" style="font-weight:700">Temple details</a>
              <a href="${mapsUrl}" target="_blank" rel="noreferrer">Google Maps</a>
            </div>
          </div>
        `)
      })

      if (temples.length === 1) {
        map.setView([temples[0].latitude, temples[0].longitude], 12)
      } else if (temples.length > 1) {
        map.fitBounds(temples.map(t => [t.latitude, t.longitude] as [number, number]), { padding: [30, 30] })
      }
    }
    load()
    return () => { cancelled = true; map?.remove() }
  }, [temples])

  return <div>
    <div ref={mapRef} style={{ height: 440, width: "100%", borderRadius: 16, overflow: "hidden", border: "1px solid #d6d3d1" }} aria-label="Interactive map of Sri Lankan Buddhist temples in Canada" />
    <p style={{ fontSize: 12, color: '#666', marginTop: 8 }}>Map data © OpenStreetMap contributors. Temple information is from public sources.</p>
  </div>
}
