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

      const templeIcon = L.divIcon({
        className: "temple-dharma-marker",
        html: '<span style="display:flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:50%;background:#fff8ef;border:2px solid #7a451f;box-shadow:0 2px 7px rgba(0,0,0,.28);font-size:27px;line-height:1">☸️</span>',
        iconSize: [42, 42],
        iconAnchor: [21, 21],
        popupAnchor: [0, -20],
      })

      temples.forEach(t => {
        const mapsQuery = encodeURIComponent(`${t.name}, ${t.address}, ${t.city}, ${t.province}`)
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`
        const marker = L.marker([t.latitude, t.longitude], { icon: templeIcon }).addTo(map)
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
