"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { temples } from "../data/temples"
import TempleMap from "../components/TempleMap"

const provinces = ["All Provinces", "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"]

export default function Home() {
  const [query, setQuery] = useState("")
  const [province, setProvince] = useState("All Provinces")
  const filtered = useMemo(() => temples.filter((t) => {
    const text = `${t.name} ${t.city} ${t.province} ${t.address}`.toLowerCase()
    return (province === "All Provinces" || t.province === province) && text.includes(query.toLowerCase())
  }), [query, province])

  return <main style={{ minHeight: "100vh", background: "linear-gradient(180deg,#faf8f4 0%,#f4f0e9 100%)" }}>
    <header style={{ background: "linear-gradient(135deg,#5b3217 0%,#7a4a25 55%,#9a6638 100%)", color: "white", padding: "34px 20px 38px", boxShadow: "0 8px 30px rgba(70,40,15,.14)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:12 }}>
          <div aria-hidden="true" style={{ width:48, height:48, borderRadius:"50%", background:"rgba(255,255,255,.14)", display:"grid", placeItems:"center", fontSize:28, border:"1px solid rgba(255,255,255,.25)" }}>☸️</div>
          <span style={{ fontSize:13, letterSpacing:1.4, textTransform:"uppercase", opacity:.82 }}>Canada Buddhist Temple Directory</span>
        </div>
        <h1 style={{ margin:0, fontSize:"clamp(30px,5vw,48px)", lineHeight:1.08, letterSpacing:-1 }}>Sri Lankan Buddhist Temples in Canada</h1>
        <p style={{ margin:"14px 0 0", maxWidth:700, fontSize:"clamp(16px,2.2vw,19px)", lineHeight:1.55, color:"rgba(255,255,255,.9)" }}>Explore Sri Lankan Buddhist temples and Buddhist centres across Canada using the interactive map.</p>
      </div>
    </header>

    <section style={{ maxWidth:1180, margin:"-22px auto 0", padding:"0 20px 48px", position:"relative" }}>
      <div style={{ background:"rgba(255,255,255,.96)", border:"1px solid #e8e0d6", borderRadius:20, padding:18, boxShadow:"0 14px 35px rgba(62,43,25,.10)" }}>
        <div style={{ display:"grid", gridTemplateColumns:"minmax(0,1fr) 250px", gap:12 }}>
          <label style={{ position:"relative", display:"block" }}>
            <span style={{ position:"absolute", left:15, top:14, fontSize:18, color:"#7c6b5b" }}>⌕</span>
            <input aria-label="Search temples" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by temple, city or province..." style={{ width:"100%", padding:"14px 16px 14px 43px", border:"1px solid #d8d0c6", borderRadius:12, fontSize:16, background:"#fff", outline:"none" }} />
          </label>
          <select aria-label="Filter by province" value={province} onChange={e => setProvince(e.target.value)} style={{ width:"100%", padding:"14px 16px", border:"1px solid #d8d0c6", borderRadius:12, fontSize:16, background:"#fff", color:"#33291f" }}>{provinces.map(p => <option key={p}>{p}</option>)}</select>
        </div>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", gap:12, marginTop:14, flexWrap:"wrap" }}>
          <span style={{ color:"#65584d", fontSize:14 }}>{filtered.length} {filtered.length === 1 ? "temple" : "temples"} found</span>
          {(query || province !== "All Provinces") && <button onClick={() => { setQuery(""); setProvince("All Provinces") }} style={{ border:0, background:"transparent", color:"#7a451f", fontWeight:700, cursor:"pointer", padding:4 }}>Clear filters</button>}
        </div>
      </div>

      <section style={{ marginTop:28 }}>
        <div style={{ display:"flex", alignItems:"end", justifyContent:"space-between", gap:12, marginBottom:12 }}>
          <div><h2 style={{ margin:0, fontSize:"clamp(22px,3vw,30px)", color:"#35271c" }}>Temple Map</h2><p style={{ margin:"5px 0 0", color:"#75685d", fontSize:14 }}>Touch a ☸️ marker to view temple details or open Google Maps.</p></div>
        </div>
        <div style={{ background:"white", borderRadius:20, padding:10, border:"1px solid #e5ddd3", boxShadow:"0 10px 28px rgba(62,43,25,.07)" }}><TempleMap temples={filtered} /></div>
      </section>

      <section style={{ marginTop:32 }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}><div><h2 style={{ margin:0, fontSize:"clamp(22px,3vw,30px)", color:"#35271c" }}>Temples & Centres</h2><p style={{ margin:"5px 0 0", color:"#75685d", fontSize:14 }}>Select a listing for contact and location information.</p></div><span style={{ background:"#eee5d9", color:"#63401f", padding:"7px 11px", borderRadius:999, fontSize:13, fontWeight:700 }}>{filtered.length} found</span></div>
        {filtered.length === 0 ? <div style={{ padding:28, background:"white", borderRadius:16, border:"1px solid #e5ddd3", textAlign:"center", color:"#6b625b" }}>No temples match your search or province filter.</div> : <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(270px,1fr))", gap:14 }}>{filtered.map(t => <Link key={t.id} href={`/temples/${t.id}`} style={{ textDecoration:"none", color:"inherit" }}><article style={{ height:"100%", padding:20, background:"rgba(255,255,255,.96)", borderRadius:16, border:"1px solid #e5ddd3", boxShadow:"0 5px 16px rgba(62,43,25,.045)", transition:"transform .18s ease, box-shadow .18s ease" }}><div style={{ fontSize:24, marginBottom:9 }}>☸️</div><h3 style={{ margin:"0 0 9px", fontSize:18, lineHeight:1.3, color:"#392a1d" }}>{t.name}</h3><p style={{ margin:"0 0 15px", color:"#6b625b", lineHeight:1.5, fontSize:14 }}>{t.address}, {t.city}, {t.province}{t.postalCode ? ` ${t.postalCode}` : ""}</p><span style={{ color:"#7a451f", fontWeight:750, fontSize:14 }}>View temple details →</span></article></Link>)}</div>}
      </section>

      <footer style={{ marginTop:42, paddingTop:20, borderTop:"1px solid #ded5ca", color:"#776c62", fontSize:12, lineHeight:1.6 }}>Temple information is compiled from public sources. Please confirm current details with the organization before visiting. Map data © OpenStreetMap contributors.</footer>
    </section>
  </main>
}
