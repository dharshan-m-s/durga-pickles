import React from 'react';
export function SpiceBurst({className=''}){
  return <svg className={`spice-burst ${className}`} viewBox="0 0 220 220" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeWidth="1.3" opacity=".5">
      {Array.from({length:18}).map((_,i)=><path key={i} d={`M110 110 C ${110+70*Math.cos(i*20*Math.PI/180)} ${110+70*Math.sin(i*20*Math.PI/180)}, ${110+95*Math.cos((i*20+10)*Math.PI/180)} ${110+95*Math.sin((i*20+10)*Math.PI/180)}, ${110+100*Math.cos((i*20+20)*Math.PI/180)} ${110+100*Math.sin((i*20+20)*Math.PI/180)}`} />)}
    </g><circle cx="110" cy="110" r="6" fill="currentColor" opacity=".65" />
  </svg>
}
export function GrainPattern(){
  return <svg className="grain-pattern" width="240" height="120" viewBox="0 0 240 120" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1" opacity=".22"><path d="M0 30 C45 5,75 55,120 30 S195 55,240 30"/><path d="M0 65 C45 40,75 90,120 65 S195 90,240 65"/><path d="M0 100 C45 75,75 125,120 100 S195 125,240 100"/></g></svg>
}
