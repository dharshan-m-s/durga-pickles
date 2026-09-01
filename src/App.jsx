import React from 'react';
import { Routes,Route,useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
function Routed(){const location=useLocation();return <Layout><AnimatePresence mode="wait"><PageTransition key={location.pathname}><Routes location={location}><Route path="/" element={<Home/>}/><Route path="/products" element={<Products/>}/><Route path="/products/:id" element={<ProductDetail/>}/><Route path="/gallery" element={<Gallery/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes></PageTransition></AnimatePresence></Layout>}
export default function App(){return <><ScrollToTop/><Routed/></>}
