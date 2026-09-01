import React from 'react';
import { motion } from 'motion/react';
export default function Reveal({children,delay=0,className=''}){
 return <motion.div className={className} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.65,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>
}
