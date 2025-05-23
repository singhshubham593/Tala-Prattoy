import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './component/Hero';
import About from './component/About';
import Discover from './component/Discover';
import Stats from './component/Stats';
import Features from './component/Features';
import Awards from './component/Awards';
import Advertise from './component/Advertise';
import Gallery from './component/Gallery';
import News from './component/News';
import Footer from './component/Footer';



function App() {
   

   return (
    <div className="bg-black text-white font-sans">
      <Hero />
      <About />
      <Discover />
      <Stats />
      <Features />
      <Awards />
      <Advertise />
      <Gallery />
      <News />
      <Footer />
    </div>
    
     
     
  )
}

export default App
