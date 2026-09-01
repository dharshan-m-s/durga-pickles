import React,{useMemo,useState} from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import Reveal from '../components/Reveal';
import ProductCard from '../components/ProductCard';
import { products,categories } from '../data/products';

export default function Products(){
 const [filter,setFilter]=useState('All'); const [q,setQ]=useState('');
 const list=useMemo(()=>products.filter(p=>(filter==='All'||p.category===filter)&&`${p.name} ${p.category}`.toLowerCase().includes(q.toLowerCase())),[filter,q]);
 return <section className="catalog-page-premium"><div className="container">
  <Reveal><div className="catalog-intro"><div><div className="eyebrow-line">THE COLLECTION</div><h1>Find your <em>Durga.</em></h1></div><p>Real products from the current Durga range.</p></div></Reveal>
  <div className="catalog-controls"><div className="filter-pills">{categories.map(c=><button key={c} className={filter===c?'active':''} onClick={()=>setFilter(c)}>{c}</button>)}</div><label className="catalog-search"><Search size={16}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search products"/>{q&&<button type="button" onClick={()=>setQ('')} aria-label="Clear search"><X size={15}/></button>}</label></div>
  <div className="catalog-meta"><span><SlidersHorizontal size={14}/> {list.length} products</span><span>Filter: {filter}</span></div>
  <div className="catalog-grid-premium">{list.map((p,i)=><ProductCard key={p.id} product={p} index={i}/>)}</div>
  {!list.length&&<div className="empty-catalog"><h3>No match.</h3><p>Try another product name or category.</p></div>}
 </div></section>
}
