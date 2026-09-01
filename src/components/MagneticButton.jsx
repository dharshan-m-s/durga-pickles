import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';

export default function MagneticButton({ as='a', href, children, className='', onClick, ...props }) {
  const ref=useRef(null);
  const x=useMotionValue(0), y=useMotionValue(0);
  const sx=useSpring(x,{stiffness:240,damping:18,mass:.4});
  const sy=useSpring(y,{stiffness:240,damping:18,mass:.4});
  const internal = typeof href==='string' && href.startsWith('/');
  const Tag=as==='button'?motion.button:(internal?motion(Link):motion.a);
  const linkProps=internal?{to:href}:({href});
  return <Tag ref={ref} {...linkProps} className={`magnetic-btn ${className}`} style={{x:sx,y:sy}} onPointerMove={e=>{const r=ref.current?.getBoundingClientRect(); if(!r)return; x.set((e.clientX-(r.left+r.width/2))*.16); y.set((e.clientY-(r.top+r.height/2))*.16)}} onPointerLeave={()=>{x.set(0);y.set(0)}} onClick={onClick} {...props}>{children}</Tag>
}
