import React from 'react';
import { ArrowRight, ArrowUpRight, ChevronDown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Reveal from '../components/Reveal';
import ProductCard from '../components/ProductCard';
import GlowCard from '../components/GlowCard';
import MagneticButton from '../components/MagneticButton';
import Marquee from '../components/Marquee';
import { products } from '../data/products';

const ease=[.22,1,.36,1];
const wa='https://wa.me/919020654578?text=Hello%20Durga%20Pickles%2C%20I%20would%20like%20to%20make%20an%20enquiry.';

const floatItems=[
  ['originals/cut-mango-pickle.jpg','Cut Mango'],
  ['originals/lime-pickle.jpg','Lime'],
  ['originals/avakkai-mango-pickle.jpg','Avakkai'],
  ['originals/pullinji-pickle.jpg','Pullinji']
];

export default function Home(){
 const featured=products.slice(0,6);
 return <>
  <section className="hero-premium">
    <div className="hero-grid-lines" aria-hidden="true"/>
    <div className="hero-orb hero-orb-a" aria-hidden="true"/>
    <div className="hero-orb hero-orb-b" aria-hidden="true"/>
    <div className="container hero-grid-premium">
      <div className="hero-copy-premium">
        <Reveal><div className="hero-eyebrow"><span className="eyebrow-rule"/> DURGA PICKLES <i>•</i> SINCE 1996</div></Reveal>
        <motion.h1 initial={{opacity:0,y:42}} animate={{opacity:1,y:0}} transition={{duration:.9,ease}}>
          <span>Made for</span><br/><em>the table.</em>
        </motion.h1>
        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.12,ease}}>
          Explore the current Durga collection of pickles, kondattam and traditional food products.
        </motion.p>
        <motion.div className="hero-actions-premium" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.22,ease}}>
          <MagneticButton href="/products" className="btn-premium"><span>Explore products</span><ArrowRight size={17}/></MagneticButton>
          <Link to="/contact" className="quiet-link">Make an enquiry <ArrowUpRight size={16}/></Link>
        </motion.div>
        <Reveal delay={.25}><div className="hero-metrics">
          <div><b>Since 1996</b><span>Durga Pickles</span></div>
          <div><b>Kerala</b><span>Pazhayannur · Thrissur</span></div>
          <div><b>Real products</b><span>Current collection</span></div>
        </div></Reveal>
      </div>
      <div className="hero-visual-premium">
        <div className="hero-stage">
          <div className="stage-label">THE DURGA COLLECTION</div>
          <motion.div className="hero-main-photo hero-main-photo-original" initial={{opacity:0,scale:.92,rotate:2}} animate={{opacity:1,scale:1,rotate:-1}} transition={{duration:1.05,ease}} whileHover={{scale:1.012}}>
            <img src="/products/originals/collection-wide-1.jpg" alt="Durga Pickles product collection" fetchPriority="high" decoding="async"/>
            <div className="photo-vignette"/>
          </motion.div>
          <motion.div className="hero-floating floating-a" initial={{opacity:0,y:20,scale:.94}} animate={{opacity:1,y:[0,-9,0],scale:1}} transition={{opacity:{duration:.6,delay:.35},y:{duration:5,repeat:Infinity,ease:'easeInOut'},scale:{duration:.5,delay:.35}}}><img src="/products/originals/lime-pickle.jpg" alt="Durga Lime Pickle"/><span>Lime</span></motion.div>
          <motion.div className="hero-floating floating-b" initial={{opacity:0,y:20,scale:.94}} animate={{opacity:1,y:[0,7,0],scale:1}} transition={{opacity:{duration:.6,delay:.5},y:{duration:5.5,repeat:Infinity,ease:'easeInOut'},scale:{duration:.5,delay:.5}}}><img src="/products/originals/avakkai-mango-pickle.jpg" alt="Durga Avakkai Mango Pickle"/><span>Avakkai</span></motion.div>
          <div className="year-seal"><small>SINCE</small><strong>1996</strong><span>DURGA</span></div>
          <div className="hero-stage-caption"><span>REAL PACKAGING</span><b>Durga Collection</b><ArrowUpRight size={17}/></div>
        </div>
      </div>
    </div>
    <a className="hero-scroll-indicator" href="#featured"><span>Discover the collection</span><ChevronDown size={17}/></a>
  </section>

  <Marquee/>

  <section className="real-collection-section">
    <div className="container real-collection-grid">
      <Reveal className="real-collection-copy"><div className="eyebrow-line">THE REAL COLLECTION</div><h2>What you see is <em>what we make.</em></h2><p>These photographs use the actual Durga packs supplied for the site. No generated packaging, invented labels or artificial product claims.</p><Link className="text-link-large" to="/gallery">See every photograph <ArrowRight size={17}/></Link></Reveal>
      <Reveal delay={.08} className="real-collection-photo"><Link to="/gallery" aria-label="View the full Durga collection gallery"><img src="/products/originals/collection-wide-2.jpg" alt="Durga Pickles product collection — second photograph" loading="lazy" decoding="async"/><span>REAL PACKAGING <ArrowUpRight size={15}/></span></Link></Reveal>
    </div>
  </section>

  <section className="featured-section" id="featured">
    <div className="container">
      <div className="section-heading-row">
        <Reveal><div><div className="eyebrow-line">THE COLLECTION</div><h2>Pickles first.<br/><em>Then everything else.</em></h2></div></Reveal>
        <Reveal delay={.1}><Link to="/products" className="round-link">View all <ArrowUpRight size={18}/></Link></Reveal>
      </div>
      <div className="featured-products-grid">{featured.map((p,i)=><ProductCard key={p.id} product={p} index={i}/>)}</div>
    </div>
  </section>

  <section className="brand-section">
    <div className="container brand-split">
      <Reveal className="brand-copy"><div className="eyebrow-line">SINCE 1996</div><h2>A brand identity you can <em>recognise.</em></h2><p>Keep the Durga mark front and centre. The current website uses the real packaging supplied by the brand and leaves space for future professional photography.</p><Link className="text-link-large" to="/gallery">View the real collection <ArrowRight size={17}/></Link></Reveal>
      <div className="brand-orbit" aria-hidden="true">
        <div className="orbit-ring ring-1"/><div className="orbit-ring ring-2"/>
        <div className="brand-medallion"><span>DURGA</span><small>SINCE 1996</small></div>
        {floatItems.map(([src,label],i)=><motion.div key={src} className={`orbit-product orbit-${i}`} animate={{y:[0,i%2?7:-7,0]}} transition={{duration:4+i*.4,repeat:Infinity,ease:'easeInOut'}}><img src={`/products/${src}`} alt=""/><span>{label}</span></motion.div>)}
      </div>
    </div>
  </section>

  <section className="signal-section">
    <div className="container signal-grid">
      <Reveal><div className="signal-card signal-dark"><span className="signal-number">01</span><div><b>Since 1996</b><p>Durga Pickles</p></div></div></Reveal>
      <Reveal delay={.06}><div className="signal-card"><span className="signal-number">02</span><div><b>Products</b><p>{products.length} currently listed</p></div></div></Reveal>
      <Reveal delay={.12}><div className="signal-card"><span className="signal-number">03</span><div><b>Categories</b><p>Pickles · Kondattam · Powders</p></div></div></Reveal>
    </div>
  </section>

  <section className="home-contact-section">
    <div className="container contact-hero-card">
      <div><div className="eyebrow-line">DIRECT ENQUIRIES</div><h2>Talk to <em>Durga.</em></h2><p>For product availability, business enquiries and general questions.</p></div>
      <div className="contact-hero-actions"><a className="btn-premium light" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={17}/> WhatsApp us</a><Link className="light-outline-link" to="/contact">Contact details <ArrowRight size={16}/></Link></div>
    </div>
  </section>
 </>
}
