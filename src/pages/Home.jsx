import React from 'react';
import { ArrowRight, ArrowUpRight, ChevronDown, Leaf, MessageCircle, MoveRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Reveal from '../components/Reveal';
import ProductCard from '../components/ProductCard';
import GlowCard from '../components/GlowCard';
import MagneticButton from '../components/MagneticButton';
import Marquee from '../components/Marquee';
import AnimatedNumber from '../components/AnimatedNumber';
import { products } from '../data/products';

const ease=[.22,1,.36,1];

export default function Home(){
 const featured=products.slice(0,5);
 return <>
  <section className="hero-premium">
    <div className="hero-ambient hero-ambient-a"/><div className="hero-ambient hero-ambient-b"/>
    <div className="hero-grid-premium container">
      <div className="hero-copy-premium">
        <Reveal><div className="hero-eyebrow"><span className="live-dot"/> DURGA PICKLES <i>•</i> SINCE 1996</div></Reveal>
        <motion.h1 initial={{opacity:0,y:45}} animate={{opacity:1,y:0}} transition={{duration:.9,ease}}>
          Taste with a <em>history.</em>
        </motion.h1>
        <motion.p initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.14,ease}}>
          Durga Pickles by Sree Durga Food Products, Pazhayannur, Thrissur, Kerala.
        </motion.p>
        <motion.div className="hero-actions-premium" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.22,ease}}>
          <MagneticButton href="/products" className="btn-premium"><span>Explore products</span><ArrowRight size={17}/></MagneticButton>
          <Link to="/contact" className="quiet-link">Enquire <MoveRight size={16}/></Link>
        </motion.div>
        <Reveal delay={.25}><div className="hero-metrics">
          <div><b><AnimatedNumber value={1996}/></b><span>Established</span></div>
          <div><b>Kerala</b><span>Pazhayannur · Thrissur</span></div>
          <div><b>Durga</b><span>Sree Durga Food Products</span></div>
        </div></Reveal>
      </div>
      <div className="hero-visual-premium">
        <div className="hero-stage">
          <div className="stage-grid"/>
          <div className="stage-sun"/>
          <motion.div className="hero-main-photo" initial={{opacity:0,scale:.94,rotate:2}} animate={{opacity:1,scale:1,rotate:-1}} transition={{duration:1.05,ease}} whileHover={{scale:1.018}}>
            <img src="/products/all-products.jpg" alt="Durga Pickles product collection"/>
            <div className="photo-gloss"/>
          </motion.div>
          <motion.div className="year-seal" initial={{opacity:0,scale:.65,rotate:-15}} animate={{opacity:1,scale:1,rotate:-8}} transition={{duration:.8,delay:.35,ease}}>
            <small>SINCE</small><strong>1996</strong><span>DURGA</span>
          </motion.div>
          <motion.div className="hero-tag hero-tag-1" animate={{y:[0,-7,0]}} transition={{repeat:Infinity,duration:4,ease:'easeInOut'}}><Sparkles size={14}/><span>Pickles</span></motion.div>
          <motion.div className="hero-tag hero-tag-2" animate={{y:[0,6,0]}} transition={{repeat:Infinity,duration:4.5,ease:'easeInOut'}}><Leaf size={14}/><span>Kerala</span></motion.div>
          <div className="hero-caption-premium"><span>THE COLLECTION</span><b>Real products. Real Durga.</b><ArrowUpRight size={18}/></div>
        </div>
      </div>
    </div>
    <a className="hero-scroll-indicator" href="#featured"><span>Discover</span><ChevronDown size={18}/></a>
  </section>

  <Marquee/>

  <section className="featured-section" id="featured">
    <div className="container">
      <div className="section-heading-row">
        <Reveal><div><div className="eyebrow-line">THE COLLECTION</div><h2>Pickles, <em>favourites</em><br/>and more.</h2></div></Reveal>
        <Reveal delay={.1}><Link to="/products" className="round-link">View all <ArrowUpRight size={18}/></Link></Reveal>
      </div>
      <div className="featured-products-grid">{featured.map((p,i)=><ProductCard key={p.id} product={p} index={i}/>)}</div>
    </div>
  </section>

  <section className="identity-section">
    <div className="container identity-grid">
      <div className="identity-copy">
        <Reveal><div className="eyebrow-line">SINCE 1996</div><h2>One brand.<br/><em>One recognisable taste.</em></h2><p>Durga Pickles is presented here exactly as the brand exists on the packet: simple, familiar and rooted in Pazhayannur.</p></Reveal>
        <Reveal delay={.1}><Link className="text-link-large" to="/gallery">See the real collection <ArrowRight size={17}/></Link></Reveal>
      </div>
      <GlowCard className="identity-card"><div className="identity-burst">DURGA</div><div className="identity-card-copy"><small>THE BRAND MARK</small><h3>Since 1996</h3><p>Product photography can keep evolving; the identity stays recognisable.</p></div><div className="identity-card-line"><span/><b>1996</b><span/></div></GlowCard>
    </div>
  </section>

  <section className="numbers-section">
    <div className="container numbers-grid">
      <GlowCard className="number-card"><AnimatedNumber value={1996}/><small>Since</small></GlowCard>
      <GlowCard className="number-card"><span>09</span><small>Products listed</small></GlowCard>
      <GlowCard className="number-card"><span>03</span><small>Core categories</small></GlowCard>
      <GlowCard className="number-card"><span>01</span><small>Durga identity</small></GlowCard>
    </div>
  </section>

  <section className="home-contact-section">
    <div className="container contact-hero-card">
      <div><div className="eyebrow-line">ENQUIRIES</div><h2>Ready to talk <em>Durga?</em></h2><p>For product availability, business enquiries and general questions.</p></div>
      <div className="contact-hero-actions"><a className="btn-premium light" href="https://wa.me/919020654578?text=Hello%20Durga%20Pickles%2C%20I%20would%20like%20to%20make%20an%20enquiry." target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp us</a><Link className="light-outline-link" to="/contact">Contact page <ArrowRight size={16}/></Link></div>
    </div>
  </section>
 </>
}
