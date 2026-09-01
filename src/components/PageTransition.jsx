import React from 'react';
import { motion } from 'motion/react';
export default function PageTransition({children}){
 return <motion.main initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:.38,ease:[.22,1,.36,1]}}>{children}</motion.main>
}
