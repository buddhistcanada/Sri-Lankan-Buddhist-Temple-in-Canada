"use client"

import { Suspense, useMemo, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Stars, useTexture } from "@react-three/drei"
import * as THREE from "three"
import type { Temple } from "../data/temples"

const CANADA = { lat: 56, lon: -106 }

function latLon(lat:number, lon:number, radius:number): [number,number,number] {
  const phi = lat * Math.PI / 180
  const theta = lon * Math.PI / 180
  return [radius * Math.cos(phi) * Math.cos(theta), radius * Math.sin(phi), -radius * Math.cos(phi) * Math.sin(theta)]
}

function Earth({ night, onSelect, temples }: { night:boolean; onSelect:(t:Temple)=>void; temples:Temple[] }) {
  const group = useRef<THREE.Group>(null)
  const earth = useTexture("https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg")
  const lights = useTexture("https://threejs.org/examples/textures/planets/earth_lights_2048.png")
  useFrame((_,delta)=>{ if(group.current) group.current.rotation.y += delta*0.012 })
  const markers = useMemo(()=>temples.map(t=>({t,position:latLon(t.latitude,t.longitude,1.035)})),[temples])
  const canada = latLon(CANADA.lat,CANADA.lon,1.045)
  return <group ref={group}>
    <mesh><sphereGeometry args={[1,96,96]}/><meshStandardMaterial map={earth} emissiveMap={night?lights:undefined} emissive={night?new THREE.Color("#fff0c7"):new THREE.Color("#000000")} emissiveIntensity={night?.95:0} roughness={1}/></mesh>
    {markers.map(({t,position})=><group key={t.id} position={position}><mesh onClick={e=>{e.stopPropagation();onSelect(t)}}><sphereGeometry args={[.026,20,20]}/><meshBasicMaterial color="#f4c44f"/></mesh><mesh scale={[1.5,1.5,1.5]}><sphereGeometry args={[.026,12,12]}/><meshBasicMaterial color="#f4c44f" transparent opacity={.12}/></mesh></group>)}
    <mesh position={canada}><sphereGeometry args={[.045,20,20]}/><meshBasicMaterial color="#fff" transparent opacity={.28}/></mesh>
    <mesh><sphereGeometry args={[1.045,96,96]}/><meshBasicMaterial color="#e7b36c" transparent opacity={.055} side={THREE.BackSide}/></mesh>
  </group>
}

export default function TempleMap({ temples }:{temples:Temple[]}) {
  const [night,setNight]=useState(false)
  const [selected,setSelected]=useState<Temple|null>(null)
  const mapsUrl=selected?`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${selected.name}, ${selected.address}, ${selected.city}, ${selected.province}`)}`:""
  const resetKey = `${CANADA.lat}-${CANADA.lon}`
  return <div style={{position:'relative',height:'clamp(440px,62vw,610px)',borderRadius:22,overflow:'hidden',background:night?'radial-gradient(circle at 50% 45%,#111c36,#020611 70%)':'linear-gradient(180deg,#dceef8,#edf5f8)'}}>
    <Canvas key={resetKey} camera={{position:[0,0,2.75],fov:38}} dpr={[1,2]}>
      <ambientLight intensity={night?.13:.72}/><directionalLight position={night?[-3,2,4]:[3,2,4]} intensity={night?.5:1.7}/>
      {night&&<Stars radius={8} depth={4} count={2400} factor={2} fade speed={.22}/>}<Suspense fallback={null}><Earth night={night} onSelect={setSelected} temples={temples}/></Suspense>
      <OrbitControls enablePan={false} minDistance={1.55} maxDistance={4.5} enableDamping dampingFactor={.07} rotateSpeed={.45} zoomSpeed={.65}/>
    </Canvas>
    <div style={{position:'absolute',top:15,left:15,right:15,display:'flex',justifyContent:'space-between',alignItems:'center',gap:10,pointerEvents:'none'}}><div style={{background:'rgba(255,255,255,.91)',padding:'10px 14px',borderRadius:13,fontWeight:800,fontSize:13,pointerEvents:'auto',boxShadow:'0 4px 16px rgba(0,0,0,.08)'}}>🌍 Canada · {temples.length} locations</div><button aria-label="Toggle day and night" onClick={()=>setNight(v=>!v)} style={{pointerEvents:'auto',border:'1px solid rgba(0,0,0,.08)',borderRadius:13,padding:'10px 14px',background:'rgba(255,255,255,.94)',cursor:'pointer',fontWeight:800,boxShadow:'0 4px 16px rgba(0,0,0,.08)'}}>{night?'☀️ Day':'🌙 Night'}</button></div>
    <div style={{position:'absolute',bottom:14,left:14,right:14,display:'flex',justifyContent:'center',pointerEvents:'none'}}><div style={{background:'rgba(24,28,36,.76)',color:'#fff',padding:'8px 14px',borderRadius:999,fontSize:12,backdropFilter:'blur(8px)'}}>Drag to rotate · Pinch / scroll to zoom · Touch a ☸️ location</div></div>
    {selected&&<div style={{position:'absolute',left:15,bottom:55,maxWidth:'min(360px,calc(100% - 30px))',background:'rgba(255,255,255,.97)',borderRadius:18,padding:17,boxShadow:'0 14px 35px rgba(0,0,0,.2)',border:'1px solid #e7ddd1'}}><button aria-label="Close" onClick={()=>setSelected(null)} style={{float:'right',border:0,background:'transparent',fontSize:21,cursor:'pointer'}}>×</button><div style={{fontSize:23}}>☸️</div><strong style={{display:'block',marginTop:5,lineHeight:1.3}}>{selected.name}</strong><div style={{fontSize:13,color:'#665d55',marginTop:5,lineHeight:1.45}}>{selected.address}, {selected.city}, {selected.province}</div><div style={{display:'flex',gap:14,marginTop:13,flexWrap:'wrap'}}><a href={`/temples/${selected.id}`} style={{fontWeight:800,color:'#70431f'}}>Temple Details →</a><a href={mapsUrl} target="_blank" rel="noreferrer" style={{fontWeight:800,color:'#70431f'}}>Google Maps ↗</a></div></div>}
  </div>
}
