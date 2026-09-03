import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgress(){
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 28, mass: 0.22 });
  return <motion.div className="scroll-progress" style={{ scaleX, transformOrigin: '0% 50%' }} aria-hidden="true" />;
}
