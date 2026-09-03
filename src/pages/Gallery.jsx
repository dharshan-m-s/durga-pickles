import React,{useState} from 'react';
import { X, ArrowUpRight, ZoomIn } from 'lucide-react';
import { motion,AnimatePresence } from 'motion/react';
import Reveal from '../components/Reveal';
import { galleryItems } from '../data/gallery';

export default function Gallery(){
 const [sel,setSel]=useState(null);
 return <section className="gallery-page-premium"><div className="container">
  <Reveal><div className="gallery-intro"><div><div className="eyebrow-line">GALLERY</div><h1>Real Durga.<br/><em>Up close.</em></h1></div><p>Original product photographs supplied for the Durga website. Tap any image to inspect the full-resolution source photograph.</p></div></Reveal>
  <div className="gallery-mosaic-premium">{galleryItems.map(([src,label,type],i)=><motion.button key={src} className={`gallery-tile-premium tile-${i%4} gallery-${type}`} onClick={()=>setSel({src,label})} whileHover={{y:-5}} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.05}} transition={{duration:.48,delay:i*.025}} aria-label={`Open ${label}`}>
    <img src={src} alt={label} loading={i<4?'eager':'lazy'} decoding="async"/>
    <span>{label}<ArrowUpRight size={16}/></span>
    <i aria-hidden="true"><ZoomIn size={15}/></i>
  </motion.button>)}</div>
 </div>
 <AnimatePresence>{sel&&<motion.div className="lightbox-premium" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSel(null)} role="dialog" aria-modal="true" aria-label={sel.label}>
   <motion.div className="lightbox-panel" initial={{scale:.96,y:18}} animate={{scale:1,y:0}} exit={{scale:.98}} onClick={e=>e.stopPropagation()}>
    <button onClick={()=>setSel(null)} aria-label="Close image"><X/></button><img src={sel.src} alt={sel.label}/><div>{sel.label}<small>Original supplied photograph · no quality reduction</small></div>
   </motion.div>
 </motion.div>}</AnimatePresence>
 </section>
}
