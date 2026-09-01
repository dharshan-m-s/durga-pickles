import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';

export default function AnimatedNumber({value, suffix=''}){
 const ref=React.useRef(null); const inView=useInView(ref,{once:true,amount:.5}); const [n,setN]=useState(0);
 useEffect(()=>{if(!inView)return; const end=parseInt(value,10); const start=performance.now(); let id;
  const tick=(now)=>{const p=Math.min(1,(now-start)/900); const e=1-Math.pow(1-p,3); setN(Math.round(end*e)); if(p<1) id=requestAnimationFrame(tick)};
  id=requestAnimationFrame(tick); return()=>cancelAnimationFrame(id);
 },[inView,value]);
 return <motion.span ref={ref}>{n}{suffix}</motion.span>
}
