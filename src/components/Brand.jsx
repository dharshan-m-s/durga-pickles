import React from 'react';
export default function Brand({compact=false}){
  return <div className={`brand ${compact?'brand--compact':''}`}>
    <div className="brand-pill">DURGA</div>
    <div className="brand-line"><span></span><b>SINCE 1996</b><span></span></div>
  </div>
}
