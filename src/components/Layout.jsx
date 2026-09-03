import React,{useEffect,useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, MessageCircle, ArrowUpRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Brand from './Brand';
import MagneticButton from './MagneticButton';
import ScrollProgress from './ScrollProgress';

const WA='https://wa.me/919020654578?text=Hello%20Durga%20Pickles%2C%20I%20would%20like%20to%20make%20an%20enquiry.';

export default function Layout({children}){
 const [open,setOpen]=useState(false);
 const nav=[['/','Home'],['/products','Products'],['/gallery','Gallery'],['/contact','Contact']];
 useEffect(()=>{document.body.classList.toggle('menu-open',open); return()=>document.body.classList.remove('menu-open')},[open]);
 return <div className="app-shell">
  <ScrollProgress/>
  <div className="announcement-premium"><span>Durga Pickles</span><i>•</i> Since 1996 <i>•</i> Pazhayannur, Thrissur, Kerala</div>
  <header className="site-header-premium">
   <div className="container nav-inner-premium">
    <Link to="/" className="brand-link" onClick={()=>setOpen(false)}><Brand/></Link>
    <nav className="desktop-nav-premium" aria-label="Primary navigation">
      {nav.map(([to,label])=><NavLink key={to} to={to} end={to==='/' } className={({isActive})=>isActive?'active':''}>{label}</NavLink>)}
      <MagneticButton href={WA} className="nav-order-premium" target="_blank" rel="noreferrer"><MessageCircle size={15}/> Enquire <ArrowUpRight size={14}/></MagneticButton>
    </nav>
    <button className="mobile-menu-premium" onClick={()=>setOpen(v=>!v)} aria-label={open?'Close menu':'Open menu'} aria-expanded={open}>{open?<X size={24}/>:<Menu size={24}/>}</button>
   </div>
   <AnimatePresence initial={false}>{open&&<motion.nav className="mobile-drawer" aria-label="Mobile navigation" initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:.25}}>
     {nav.map(([to,label])=><NavLink key={to} to={to} end={to==='/' } onClick={()=>setOpen(false)}>{label}<ArrowUpRight size={15}/></NavLink>)}
     <a className="mobile-order" href={WA} target="_blank" rel="noreferrer"><MessageCircle size={16}/> Enquire on WhatsApp</a>
   </motion.nav>}</AnimatePresence>
  </header>
  {children}
  <nav className="mobile-bottom-nav" aria-label="Quick navigation">
    {nav.map(([to,label])=><NavLink key={to} to={to} end={to==='/' } onClick={()=>setOpen(false)}><span className="mobile-bottom-dot"/>{label}</NavLink>)}
  </nav>
  <footer className="site-footer-premium">
   <div className="container footer-top-premium">
    <div><Brand/><p>Durga Pickles · Sree Durga Food Products<br/>Thekkethara, Pazhayannur<br/>Thrissur, Kerala — 680 587</p><div className="footer-actions"><a href="tel:+919020654578"><Phone size={14}/> Call</a><a href={WA} target="_blank" rel="noreferrer"><MessageCircle size={14}/> WhatsApp</a></div></div>
    <div><h4>Explore</h4>{nav.slice(1).map(([to,label])=><Link key={to} to={to}>{label}</Link>)}</div>
    <div><h4>Contact</h4><a href="tel:+914884225174">04884 225174</a><a href="tel:+919020654578">90206 54578</a><a href="https://www.google.com/maps/search/?api=1&query=Thekkethara%20Pazhayannur%20Thrissur%20Kerala%20680587" target="_blank" rel="noreferrer">Open in Maps ↗</a></div>
   </div>
   <div className="container footer-bottom-premium"><span>© {new Date().getFullYear()} Durga Pickles</span><span>Since 1996</span></div>
  </footer>
 </div>
}
