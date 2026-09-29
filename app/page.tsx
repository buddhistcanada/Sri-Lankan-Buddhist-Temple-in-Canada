"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { temples } from "../data/temples"

const provinces = ["All Provinces", "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"]

export default function Home() {
  const [query, setQuery] = useState("")
  const [province, setProvince] = useState("All Provinces")
  const filtered = useMemo(() => temples.filter((t) => {
    const text = `${t.name} ${t.city} ${t.province} ${t.address}`.toLowerCase()
    return (province === "All Provinces" || t.province === province) && text.includes(query.toLowerCase())
  }), [query, province])

  return <main style={{ minHeight: "100vh", background: "#f7f7f5" }}>
    <header style={{ background: "#6b3f1d", color: "white", padding: "28px 20px" }}><div style={{ maxWidth: 1100, margin: "0 auto" }}><h1 style={{ margin: 0, fontSize: "clamp(28px,5vw,44px)" }}>Sri Lankan Buddhist Temples in Canada</h1><p style={{ margin: "10px 0 0", opacity: .9 }}>Find Sri Lankan Buddhist temples across Canada</p></div></header>
    <section style={{ maxWidth: 1100, margin: "0 auto", padding: 20 }}>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 220px", gap: 12, marginBottom: 20 }}>
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search temple, city or province..." style={{ padding: "14px 16px", border: "1px solid #d1d5db", borderRadius: 10, fontSize: 16 }} />
        <select value={province} onChange={e => setProvince(e.target.value)} style={{ padding: "14px 16px", border: "1px solid #d1d5db", borderRadius: 10, fontSize: 16 }}>{provinces.map(p => <option key={p}>{p}</option>)}</select>
      </div>

      <div style={{ minHeight: 300, borderRadius: 16, border: "1px solid #d6d3d1", background: "#e7e5e4", display: "grid", placeItems: "center", marginBottom: 24 }}><div style={{ textAlign: "center" }}><div style={{ fontSize: 48 }}>🗺️</div><h2>Canada Temple Map</h2><p style={{ color: "#57534e", marginBottom: 0 }}>Map markers will use each temple's coordinates as they are added.</p></div></div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><h2>Temples</h2><span style={{ color: "#57534e" }}>{filtered.length} found</span></div>
      {filtered.length === 0 ? <div style={{ padding: 24, background: "white", borderRadius: 14, border: "1px solid #e5e7eb" }}>No temples match your search or province filter.</div> : <div style={{ display: "grid", gap: 12 }}>{filtered.map(t => <Link key={t.id} href={`/temples/${t.id}`} style={{ textDecoration: "none", color: "inherit" }}><article style={{ padding: 20, background: "white", borderRadius: 14, border: "1px solid #e5e7eb" }}><h3 style={{ marginTop: 0 }}>{t.name}</h3><p>{t.address}, {t.city}, {t.province}{t.postalCode ? ` ${t.postalCode}` : ""}</p><strong>View temple details →</strong></article></Link>)}</div>}
    </section>
  </main>
}
