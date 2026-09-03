import React from 'react';
import { Link,useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, MessageCircle, Phone, Maximize2 } from 'lucide-react';
import { motion } from 'motion/react';
import { products } from '../data/products';
import GlowCard from '../components/GlowCard';
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';

export default function ProductDetail(){
 const {id}=useParams(); const p=products.find(x=>x.id===id); const [zoom,setZoom]=useState(false);
 if(!p) return <section className="empty-page"><div className="container"><h1>Product not found.</h1><Link to="/products">Back to products</Link></div></section>;
 return <section className="product-detail-premium"><div className="container">
  <Link className="back-link-premium" to="/products"><ArrowLeft size={15}/> Back to collection</Link>
  <div className="detail-layout-premium">
   <motion.div className="detail-photo-panel" initial={{opacity:0,x:-25}} animate={{opacity:1,x:0}} transition={{duration:.7}}><GlowCard><button className="detail-photo" onClick={()=>setZoom(true)} aria-label={`View full-resolution photograph of ${p.name}`}><img src={p.image} alt={p.name}/><div className="detail-chip">SINCE 1996</div><span className="detail-zoom"><Maximize2 size={15}/> Full photo</span></button></GlowCard></motion.div>
   <motion.div className="detail-copy-premium" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.08}}>
    <div className="eyebrow-line">{p.category}</div><h1>{p.name}</h1><p>{p.description}</p>
    <div className="detail-specs"><div><span>Net weight</span><b>{p.size}</b></div><div><span>Brand</span><b>Durga</b></div><div><span>Origin</span><b>Pazhayannur, Kerala</b></div></div>
    <div className="detail-note">Product details shown here are based on the current Durga packaging and product list.</div>
    <div className="detail-actions-premium"><a className="btn-premium" href={`https://wa.me/919020654578?text=${encodeURIComponent('Hello Durga Pickles, I am interested in '+p.name+'.')}`} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Enquire on WhatsApp</a><a className="light-outline-btn" href="tel:+914884225174"><Phone size={16}/> Call</a></div>
   </motion.div>
  </div>
 </div>
 <AnimatePresence>{zoom&&<motion.div className="lightbox-premium" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setZoom(false)} role="dialog" aria-modal="true"><motion.div className="lightbox-panel" initial={{scale:.96,y:18}} animate={{scale:1,y:0}} exit={{scale:.98}} onClick={e=>e.stopPropagation()}><button onClick={()=>setZoom(false)} aria-label="Close image">×</button><img src={p.image} alt={p.name}/><div>{p.name}<small>Original supplied photograph · no quality reduction</small></div></motion.div></motion.div>}</AnimatePresence>
 </section>
}
