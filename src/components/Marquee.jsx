import React from 'react';
export default function Marquee(){
 const items=['DURGA PICKLES','SINCE 1996','PAZHAYANNUR · THRISSUR','TRADITIONAL FAVOURITES','SREE DURGA FOOD PRODUCTS'];
 return <div className="marquee-band" aria-hidden="true"><div className="marquee-track">{[...items,...items].map((x,i)=><span key={i}>{x}<b>✦</b></span>)}</div></div>
}
