import React from 'react';
import Spotlight from './Spotlight';
export default function GlowCard({className='',children}){return <Spotlight className={`glow-card ${className}`}><div className="glow-card-border"/>{children}</Spotlight>}
