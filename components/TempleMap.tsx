"use client"

import { Suspense, useMemo, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Stars, useTexture } from "@react-three/drei"
import * as THREE from "three"
import type { Temple } from "../data/temples"

function latLon(lat:number, lon:number, radius:number): [number,number,number] {
  const phi = lat * Math.PI / 180
  const theta = lon * Math.PI / 180
  return [radius * Math.cos(phi) * Math.cos(theta), radius * Math.sin(phi), -radius * Math.cos(phi) * Math.sin(theta)]
}

function Earth({ night, onSelect, temples }: { night:boolean; onSelect:(t:Temple)=>void; temples:Temple[] }) {
  const group = useRef<THREE.Group>(null)
  const earth = useTexture("https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg")
  const lights = useTexture("https://threejs.org/examples/textures/planets/earth_lights_2048.png")
  const markers = useMemo(()=>temples.map(t=>({t,position:latLon(t.latitude,t.longitude,1.018)})),[temples])
  useFrame((_,delta)=>{ if(group.current) group.current.rotation.y += delta*0.0035 })
  return <group ref={group}>
    <mesh><sphereGeometry args={[1,128,128]}/><meshStandardMaterial map={earth} emissiveMap={night?lights:undefined} emissive={night?new THREE.Color("#f5d9a0"):new THREE.Color("#000") } emissiveIntensity={night?.72:0} roughness={1}/></mesh>
    {markers.map(({t,position})=><group key={t.id} position={position}><mesh onClick={e=>{e.stopPropagation();onSelect(t)}}><sphereGeometry args={[.014,16,16]}/><meshBasicMaterial color="#f5c75a"/></mesh><mesh scale={[2.5,2.5,2.5]}><sphereGeometry args={[.014,12,12]}/><meshBasicMaterial color="#f5c75a" transparent opacity={.06}/></mesh></group>)}
    <mesh scale={[1.012,1.012,1.012]}><sphereGeometry args={[1,128,128]}/><meshBasicMaterial color="#8fc7e8" transparent opacity={.045} blending={THREE.AdditiveBlending} side={THREE.BackSide}/></mesh>
  </group>
}

export default function TempleMap({ temples }:{temples:Temple[]}) {
  const [night,setNight]=useState(false)
  const [selected,setSelected]=useState<Temple|null>(null)
  const mapsUrl=selected?`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${selected.name}, ${selected.address}, ${selected.city}, ${selected.province}`)}`:""
  return <div style={{position:'relative',height:'clamp(500px,72vw,700px)',overflow:'hidden',background:night?'#01040b':'#f5f7f8'}}>
    <Canvas camera={{position:[0,0,2.7],fov:36}} dpr={[1,2]} gl={{antialias:true}}>
      <ambientLight intensity={night?.08:.48}/><directionalLight position={night?[-4,1,4]:[4,2,5]} intensity={night?.38:1.55}/>
      {night&&<Stars radius={9} depth={5} count={1800} factor={1.6} saturation={0} fade speed={.12}/>}<Suspense fallback={null}><Earth night={night} onSelect={setSelected} temples={temples}/></Suspense>
      <OrbitControls enablePan={false} minDistance={1.48} maxDistance={4.2} enableDamping dampingFactor={.055} rotateSpeed={.34} zoomSpeed={.55}/>
    </Canvas>
    <div style={{position:'absolute',top:18,right:18}}><button aria-label="Toggle day and night" onClick={()=>setNight(v=>!v)} style={{border:'1px solid rgba(255,255,255,.28)',borderRadius:999,padding:'9px 13px',background:night?'rgba(10,14,23,.68)':'rgba(255,255,255,.78)',backdropFilter:'blur(12px)',color:night?'#fff':'#302820',cursor:'pointer',fontWeight:700,fontSize:13}}>{night?'☀️ Day':'🌙 Night'}</button></div>
    {selected&&<div style={{position:'absolute',left:18,bottom:18,maxWidth:'min(360px,calc(100% - 36px))',background:'rgba(255,255,255,.94)',backdropFilter:'blur(14px)',borderRadius:16,padding:16,boxShadow:'0 14px 38px rgba(0,0,0,.18)',border:'1px solid rgba(255,255,255,.8)'}}><button aria-label="Close" onClick={()=>setSelected(null)} style={{float:'right',border:0,background:'transparent',fontSize:20,cursor:'pointer'}}>×</button><div style={{fontSize:21}}>☸️</div><strong style={{display:'block',marginTop:4,lineHeight:1.3}}>{selected.name}</strong><div style={{fontSize:13,color:'#665d55',marginTop:5,lineHeight:1.45}}>{selected.address}, {selected.city}, {selected.province}</div><div style={{display:'flex',gap:14,marginTop:12,flexWrap:'wrap'}}><a href={`/temples/${selected.id}`} style={{fontWeight:800,color:'#70431f'}}>Temple Details →</a><a href={mapsUrl} target="_blank" rel="noreferrer" style={{fontWeight:800,color:'#70431f'}}>Google Maps ↗</a></div></div>}
  </div>
}
