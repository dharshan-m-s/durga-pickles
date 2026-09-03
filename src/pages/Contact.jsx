import React,{useState} from 'react';
import { ArrowUpRight, MessageCircle, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';
import Reveal from '../components/Reveal';
import GlowCard from '../components/GlowCard';

const WA='https://wa.me/919020654578';
export default function Contact(){
 const [message,setMessage]=useState('');
 const submit=e=>{e.preventDefault(); const fd=new FormData(e.currentTarget); const text=`Hello Durga Pickles, my name is ${fd.get('name')}. ${fd.get('message')}`; window.open(`${WA}?text=${encodeURIComponent(text)}`,'_blank','noopener,noreferrer'); setMessage('WhatsApp opened with your enquiry.');};
 return <section className="contact-page-premium"><div className="container">
  <Reveal><div className="contact-intro"><div><div className="eyebrow-line">CONTACT</div><h1>Let’s talk <em>Durga.</em></h1></div><p>Use the direct details below for product enquiries, availability and business enquiries.</p></div></Reveal>
  <div className="contact-layout-premium">
   <GlowCard className="contact-info-card"><div className="contact-brand-note"><span>SREE DURGA FOOD PRODUCTS</span><strong>Since 1996</strong></div><div className="contact-info-list">
    <a href="tel:+914884225174"><Phone/><div><small>Phone</small><b>04884 225174</b></div><ArrowUpRight size={15}/></a>
    <a href="tel:+919020654578"><MessageCircle/><div><small>Consumer care</small><b>90206 54578</b></div><ArrowUpRight size={15}/></a>
    <a href="https://www.google.com/maps/search/?api=1&query=Thekkethara%20Pazhayannur%20Thrissur%20Kerala%20680587" target="_blank" rel="noreferrer"><MapPin/><div><small>Location</small><b>Thekkethara, Pazhayannur</b></div><ArrowUpRight size={15}/></a>
   </div></GlowCard>
   <motion.form className="enquiry-form-premium" onSubmit={submit} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.08}}>
    <div className="form-title"><h3>Send an enquiry</h3><span>This form opens WhatsApp with your message; no backend is required.</span></div>
    <div className="form-grid"><label>Name<input name="name" required placeholder="Your name" autoComplete="name"/></label><label>Phone<input name="phone" required placeholder="Your phone number" inputMode="tel" autoComplete="tel"/></label></div>
    <label>Message<textarea name="message" required rows="5" placeholder="What would you like to know?"></textarea></label>
    <button className="btn-premium" type="submit"><Send size={15}/> Continue on WhatsApp</button>
    {message&&<p className="form-success" role="status">{message}</p>}
   </motion.form>
  </div>
 </div></section>
}
