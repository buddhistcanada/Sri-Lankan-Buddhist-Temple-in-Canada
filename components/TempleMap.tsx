"use client"

import { Suspense, useMemo, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Stars, useTexture } from "@react-three/drei"
import * as THREE from "three"
import type { Temple } from "../data/temples"

function Earth({ night, onSelect, temples }: { night: boolean; onSelect: (t: Temple) => void; temples: Temple[] }) {
  const group = useRef<THREE.Group>(null)
  const texture = useTexture("https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg")
  const lights = useTexture("https://threejs.org/examples/textures/planets/earth_lights_2048.png")
  useFrame((_, delta) => { if (group.current) group.current.rotation.y += delta * 0.018 })
  const markers = useMemo(() => temples.map(t => {
    const lat = t.latitude * Math.PI / 180
    const lon = t.longitude * Math.PI / 180
    const r = 1.035
    return { t, position: [r * Math.cos(lat) * Math.cos(lon), r * Math.sin(lat), -r * Math.cos(lat) * Math.sin(lon)] as [number,number,number] }
  }), [temples])
  return <group ref={group}>
    <mesh><sphereGeometry args={[1,64,64]} /><meshStandardMaterial map={texture} emissiveMap={night ? lights : undefined} emissive={night ? new THREE.Color("#fff0c7") : new THREE.Color("#000000")} emissiveIntensity={night ? 0.8 : 0} roughness={1}/></mesh>
    {markers.map(({t,position}) => <group key={t.id} position={position}><mesh onClick={(e)=>{e.stopPropagation();onSelect(t)}}><sphereGeometry args={[0.035,16,16]}/><meshBasicMaterial color="#f2c14e"/></mesh></group>)}
    <mesh><sphereGeometry args={[1.035,64,64]} /><meshBasicMaterial color="#d8b27a" transparent opacity={0.08} side={THREE.BackSide}/></mesh>
  </group>
}

export default function TempleMap({ temples }: { temples: Temple[] }) {
  const [night, setNight] = useState(false)
  const [selected, setSelected] = useState<Temple | null>(null)
  const mapsUrl = selected ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${selected.name}, ${selected.address}, ${selected.city}, ${selected.province}`)}` : ""
  return <div style={{position:'relative',height:520,borderRadius:18,overflow:'hidden',background:night?'#020712':'#dcebf5'}}>
    <Canvas camera={{position:[0,0,3.1],fov:42}} dpr={[1,2]}>
      <ambientLight intensity={night ? 0.16 : 0.7}/><directionalLight position={[3,2,4]} intensity={night ? 0.35 : 1.8}/>
      {night && <Stars radius={8} depth={3} count={1800} factor={2} fade speed={0.3}/>}<Suspense fallback={null}><Earth night={night} onSelect={setSelected} temples={temples}/></Suspense>
      <OrbitControls enablePan={false} minDistance={1.8} maxDistance={4.2} enableDamping dampingFactor={0.08}/>
    </Canvas>
    <div style={{position:'absolute',top:14,left:14,right:14,display:'flex',justifyContent:'space-between',alignItems:'center',pointerEvents:'none'}}><div style={{background:'rgba(255,255,255,.9)',padding:'9px 13px',borderRadius:12,fontWeight:800,fontSize:13,pointerEvents:'auto'}}>🌍 Canada · {temples.length} locations</div><button onClick={()=>setNight(v=>!v)} style={{pointerEvents:'auto',border:0,borderRadius:12,padding:'9px 13px',background:'rgba(255,255,255,.92)',cursor:'pointer',fontWeight:800}}>{night?'☀️ Day':'🌙 Night'}</button></div>
    <div style={{position:'absolute',bottom:14,left:14,right:14,display:'flex',justifyContent:'center',pointerEvents:'none'}}><div style={{background:'rgba(20,25,32,.78)',color:'#fff',padding:'8px 13px',borderRadius:999,fontSize:12}}>Drag to rotate · Pinch/scroll to zoom · Touch a golden marker</div></div>
    {selected && <div style={{position:'absolute',left:14,bottom:55,maxWidth:330,background:'rgba(255,255,255,.97)',borderRadius:16,padding:16,boxShadow:'0 12px 30px rgba(0,0,0,.2)'}}><button onClick={()=>setSelected(null)} style={{float:'right',border:0,background:'transparent',fontSize:20,cursor:'pointer'}}>×</button><div style={{fontSize:23}}>☸️</div><strong style={{display:'block',marginTop:5}}>{selected.name}</strong><div style={{fontSize:13,color:'#665d55',marginTop:5}}>{selected.address}, {selected.city}, {selected.province}</div><div style={{display:'flex',gap:8,marginTop:12}}><a href={`/temples/${selected.id}`} style={{fontWeight:800,color:'#70431f'}}>Details</a><a href={mapsUrl} target="_blank" rel="noreferrer" style={{fontWeight:800,color:'#70431f'}}>Google Maps ↗</a></div></div>}
  </div>
}
