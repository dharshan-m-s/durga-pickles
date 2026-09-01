import React from 'react';
import { Link,useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, MessageCircle, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { products } from '../data/products';
import GlowCard from '../components/GlowCard';

export default function ProductDetail(){
 const {id}=useParams(); const p=products.find(x=>x.id===id);
 if(!p) return <section className="empty-page"><div className="container"><h1>Product not found.</h1><Link to="/products">Back to products</Link></div></section>;
 return <section className="product-detail-premium"><div className="container">
  <Link className="back-link-premium" to="/products"><ArrowLeft size={15}/> Back to collection</Link>
  <div className="detail-layout-premium">
   <motion.div className="detail-photo-panel" initial={{opacity:0,x:-25}} animate={{opacity:1,x:0}} transition={{duration:.7}}><GlowCard><div className="detail-photo"><img src={p.image} alt={p.name}/><div className="detail-chip">SINCE 1996</div></div></GlowCard></motion.div>
   <motion.div className="detail-copy-premium" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.08}}>
    <div className="eyebrow-line">{p.category}</div><h1>{p.name}</h1><p>{p.description}</p>
    <div className="detail-specs"><div><span>Net weight</span><b>{p.size}</b></div><div><span>Brand</span><b>Durga</b></div><div><span>Origin</span><b>Pazhayannur, Kerala</b></div></div>
    <div className="detail-note">The information shown here is limited to details visible or supplied for this product.</div>
    <div className="detail-actions-premium"><a className="btn-premium" href={`https://wa.me/919020654578?text=${encodeURIComponent('Hello Durga Pickles, I am interested in '+p.name+'.')}`} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Enquire on WhatsApp</a><a className="light-outline-btn" href="tel:+914884225174"><Phone size={16}/> Call</a></div>
   </motion.div>
  </div>
 </div></section>
}
