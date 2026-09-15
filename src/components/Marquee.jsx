import React from 'react';
import { useContent } from '../context';

export default function Marquee(){
  const { site } = useContent();
  const items = site.marqueeItems?.length ? site.marqueeItems : ['DURGA FOODS','SINCE 1996','PAZHAYANNUR · THRISSUR'];
  return <div className="marquee-band-premium" aria-hidden="true"><div>{[...items,...items].map((item,i)=><span key={`${item}-${i}`}>{item}<i>✦</i></span>)}</div></div>;
}
