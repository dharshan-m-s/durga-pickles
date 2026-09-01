import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import GlowCard from './GlowCard';

export default function ProductCard({product,index=0}){
 return <motion.article className="product-card-premium" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.6,delay:index*.045,ease:[.22,1,.36,1]}}>
   <GlowCard>
    <Link to={`/products/${product.id}`} className="product-visual">
      <img src={product.image} alt={product.name} loading="lazy"/>
      <span className="product-category">{product.category}</span><span className="product-arrow"><ArrowUpRight size={17}/></span>
    </Link>
    <div className="product-copy"><div><h3>{product.name}</h3><p>{product.description}</p></div><div className="product-bottom"><span>{product.size}</span><Link to={`/products/${product.id}`}>View details</Link></div></div>
   </GlowCard>
 </motion.article>
}
