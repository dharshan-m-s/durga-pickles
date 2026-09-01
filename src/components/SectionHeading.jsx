import React from 'react';
import Reveal from './Reveal';
export default function SectionHeading({eyebrow,title,children,action}){return <Reveal><div className="section-heading"><div><div className="eyebrow-line">{eyebrow}</div><h2 dangerouslySetInnerHTML={{__html:title}} /></div>{children||action}</div></Reveal>}
