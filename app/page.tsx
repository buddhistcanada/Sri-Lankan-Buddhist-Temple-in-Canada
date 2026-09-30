"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { temples } from "../data/temples"
import TempleMap from "../components/TempleMap"

const provinces = ["All Provinces", "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"]
const firstTempleId = "sri-lankan-buddhist-society-calgary"
const heroImage = "https://raw.githubusercontent.com/buddhistcanada/Sri-Lankan-Buddhist-Temple-in-Canada/main/IMG_0323.JPG"

export default function Home() {
  const [query, setQuery] = useState("")
  const [province, setProvince] = useState("All Provinces")
  const filtered = useMemo(() => {
    const matches = temples.filter((t) => {
      const text = `${t.name} ${t.city} ${t.province} ${t.address}`.toLowerCase()
      return (province === "All Provinces" || t.province === province) && text.includes(query.toLowerCase())
    })
    return matches.sort((a, b) => a.id === firstTempleId ? -1 : b.id === firstTempleId ? 1 : 0)
  }, [query, province])

  const contentWidth = 1040

  return (
    <main style={{ minHeight:"100vh", background:"linear-gradient(180deg,#f7f4ef 0%,#f3efe8 52%,#faf9f6 100%)", color:"#2b241e" }}>
      <header style={{ position:"relative", overflow:"hidden", background:"linear-gradient(100deg,rgba(48,25,13,.98),rgba(104,57,28,.90)),#68391c", color:"white", padding:"18px 24px 76px", boxShadow:"0 12px 34px rgba(70,40,15,.15)" }}>
        <div aria-hidden="true" style={{ position:"absolute", right:0, top:0, width:"42%", height:"100%", backgroundImage:`linear-gradient(90deg,rgba(48,25,13,.92),rgba(48,25,13,.22)),url('${heroImage}')`, backgroundSize:"cover", backgroundPosition:"right center", backgroundRepeat:"no-repeat", opacity:.82 }} />
        <div aria-hidden="true" style={{ position:"absolute", right:0, bottom:0, width:"48%", height:2, background:"linear-gradient(270deg,rgba(255,220,170,.65),transparent)" }} />
        <div style={{maxWidth:contentWidth,margin:"0 auto",position:"relative",zIndex:1}}>
          <nav style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:24,marginBottom:66}}>
            <Link href="/" style={{color:'#fff',textDecoration:'none',fontWeight:850,fontSize:16,letterSpacing:.1}}>☸️ Sri Lankan Buddhist Temples in Canada</Link>
            <div style={{display:'flex',gap:26,fontSize:14,fontWeight:750,flexWrap:'wrap'}}>
              <Link href="/" style={{color:'#fff',textDecoration:'none'}}>Home</Link>
              <Link href="/about" style={{color:'#fff',textDecoration:'none'}}>About</Link>
              <Link href="/contact" style={{color:'#fff',textDecoration:'none'}}>Contact Us</Link>
            </div>
          </nav>
          <div style={{maxWidth:900,margin:"0 auto",textAlign:"center"}}>
            <div style={{fontSize:12,letterSpacing:2,textTransform:"uppercase",opacity:.78,marginBottom:14,fontWeight:750}}>Canada Buddhist Temple Directory</div>
            <h1 style={{margin:0,fontSize:"clamp(38px,5vw,64px)",lineHeight:1.04,letterSpacing:-2.2}}>Find Sri Lankan Buddhist temples across Canada</h1>
            <p style={{margin:"20px auto 0",maxWidth:760,fontSize:"clamp(16px,1.55vw,19px)",lineHeight:1.65,color:"rgba(255,255,255,.9)"}}>A public directory designed to help people discover temples, monasteries, meditation centres and Buddhist communities across Canada.</p>
          </div>
        </div>
      </header>

      <section style={{maxWidth:contentWidth,margin:"-42px auto 0",padding:"0 24px 72px",position:"relative"}}>
        <div style={{background:"rgba(255,255,255,.98)",backdropFilter:"blur(10px)",border:"1px solid #e4dbd0",borderRadius:20,padding:"18px 20px 16px",boxShadow:"0 18px 42px rgba(62,43,25,.12)"}}>
          <div style={{display:"grid",gridTemplateColumns:"minmax(0,1fr) 260px",gap:12}}>
            <input aria-label="Search temples" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by temple, city or province..." style={{width:"100%",padding:"15px 17px",border:"1px solid #d7cec3",borderRadius:12,fontSize:16,background:"#fff",outline:"none",boxSizing:"border-box"}}/>
            <select aria-label="Filter by province" value={province} onChange={e=>setProvince(e.target.value)} style={{width:"100%",padding:"15px 17px",border:"1px solid #d7cec3",borderRadius:12,fontSize:16,background:"#fff",color:"#33291f",boxSizing:"border-box"}}>{provinces.map(p=><option key={p}>{p}</option>)}</select>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:12}}>
            <span style={{color:"#65584d",fontSize:13,fontWeight:700}}>{filtered.length} {filtered.length===1?"temple":"temples"} found</span>
            {(query||province!=="All Provinces")&&<button onClick={()=>{setQuery("");setProvince("All Provinces")}} style={{border:0,background:"transparent",color:"#7a451f",fontWeight:750,cursor:"pointer"}}>Clear filters</button>}
          </div>
        </div>

        <section style={{marginTop:40}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"end",gap:20,marginBottom:16}}>
            <div>
              <div style={{fontSize:11,fontWeight:850,letterSpacing:1.7,color:'#8a6c50'}}>EXPLORE BY MAP</div>
              <h2 style={{margin:'6px 0 0',fontSize:"clamp(25px,2.5vw,34px)",lineHeight:1.15,color:'#35271c'}}>Temple locations</h2>
              <p style={{margin:"7px 0 0",color:'#75685d',fontSize:14}}>Select a ☸️ marker for temple details and a direct Google Maps link.</p>
            </div>
            <div style={{display:'flex',gap:8,flexWrap:'wrap',justifyContent:'flex-end'}}>
              <span style={{background:'#eee5d9',color:'#63401f',padding:'8px 12px',borderRadius:999,fontSize:12,fontWeight:800}}>{filtered.length} locations</span>
              <span style={{background:'#eee5d9',color:'#63401f',padding:'8px 12px',borderRadius:999,fontSize:12,fontWeight:800}}>Canada</span>
            </div>
          </div>
          <div style={{background:"#fff",borderRadius:22,padding:10,border:"1px solid #e4dbd0",boxShadow:"0 14px 34px rgba(62,43,25,.08)",overflow:"hidden"}}>
            <TempleMap temples={filtered}/>
          </div>
        </section>

        <section style={{marginTop:46}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"end",marginBottom:17,gap:15}}>
            <div><div style={{fontSize:11,fontWeight:850,letterSpacing:1.7,color:'#8a6c50'}}>DIRECTORY</div><h2 style={{margin:'6px 0 0',fontSize:"clamp(25px,2.5vw,34px)",lineHeight:1.15,color:'#35271c'}}>Temples & Buddhist centres</h2><p style={{margin:"7px 0 0",color:'#75685d',fontSize:14}}>Open a listing for address, contact and map information.</p></div>
            <span style={{background:'#eee5d9',color:'#63401f',padding:'8px 12px',borderRadius:999,fontSize:12,fontWeight:800,whiteSpace:'nowrap'}}>{filtered.length} found</span>
          </div>
          {filtered.length===0 ? <div style={{padding:38,background:"#fff",borderRadius:16,textAlign:"center",border:'1px solid #e5ddd3'}}>No temples match your search or province filter.</div> : <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(285px,1fr))',gap:16}}>{filtered.map((t,index)=><Link key={t.id} href={`/temples/${t.id}`} style={{textDecoration:'none',color:'inherit'}}><article style={{height:'100%',minHeight:190,padding:21,background:index===0?'linear-gradient(145deg,#fffaf0,#fff)':'#fff',borderRadius:17,border:index===0?'1px solid #d6b987':'1px solid #e5ddd3',boxShadow:index===0?'0 10px 26px rgba(117,75,31,.12)':'0 6px 18px rgba(62,43,25,.045)',display:'flex',flexDirection:'column'}}><div style={{display:'flex',justifyContent:'space-between',alignItems:'start',gap:10}}><div style={{fontSize:24}}>☸️</div>{index===0?<span style={{fontSize:11,fontWeight:800,color:'#7a541f',background:'#f0e0bd',padding:'5px 8px',borderRadius:999}}>Featured</span>:<span style={{fontSize:12,fontWeight:750,color:'#86694f'}}>{t.province}</span>}</div><h3 style={{margin:'12px 0 9px',fontSize:18,lineHeight:1.3,color:'#392a1d'}}>{t.name}</h3><p style={{margin:'0 0 16px',color:'#6b625b',lineHeight:1.5,fontSize:14}}>{t.address}, {t.city}{t.postalCode?` ${t.postalCode}`:""}</p><span style={{marginTop:'auto',color:'#7a451f',fontWeight:800,fontSize:14}}>View temple details →</span></article></Link>)}</div>}
        </section>

        <footer style={{marginTop:58,padding:'24px 0 8px',borderTop:'1px solid #ded5ca',display:'flex',justifyContent:'space-between',gap:20,flexWrap:'wrap',color:'#776c62',fontSize:12,lineHeight:1.6}}><span>© {new Date().getFullYear()} Sri Lankan Buddhist Temples in Canada</span><span><Link href='/about'>About</Link> · <Link href='/contact'>Contact Us</Link> · Public-source directory · Map data © OpenStreetMap</span></footer>
      </section>
    </main>
  )
}
