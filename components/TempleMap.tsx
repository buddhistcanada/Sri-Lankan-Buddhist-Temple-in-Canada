"use client"

import { useEffect, useRef } from "react"
import { temples } from "../data/temples"

export default function TempleMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let map: any
    let cleanup = () => {}
    const load = async () => {
      const L = await import("leaflet")
      await import("leaflet/dist/leaflet.css")
      if (!mapRef.current) return
      map = L.map(mapRef.current).setView([56.1304, -106.3468], 4)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap contributors" }).addTo(map)
      const markers = temples.filter(t => t.latitude != null && t.longitude != null)
      markers.forEach(t => {
        const marker = L.marker([t.latitude!, t.longitude!]).addTo(map)
        marker.bindPopup(`<strong>${t.name}</strong><br>${t.city}, ${t.province}<br><a href="/temples/${t.id}">View details</a>`)
      })
      if (markers.length) map.fitBounds(markers.map(t => [t.latitude!, t.longitude!]), { padding: [30, 30] })
      cleanup = () => map?.remove()
    }
    load()
    return () => cleanup()
  }, [])

  return <div ref={mapRef} style={{ height: 440, width: "100%", borderRadius: 16, overflow: "hidden", border: "1px solid #d6d3d1" }} aria-label="Interactive map of Sri Lankan Buddhist temples in Canada" />
}
