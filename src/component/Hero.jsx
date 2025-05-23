import React from 'react';
import {Button} from './button';
import heroImageDesktop from '../assets/durgapuja-web.jpg';
import heroImageMobile from '../assets/Odurgapuja-mob.jpg';

const Hero = () => {
  return (<>
    <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <div className="text-2xl font-bold text-red-500">Tala Prattoy</div>
        <nav className="flex gap-6">
          {['Home', 'About', 'Story', 'Gallery', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-red-400">{item}</a>
          ))}
        </nav>
        <Button variant="outline">Donate Us</Button>
      </header>
        {/* Hero Section */}
    <div className="relative h-screen w-full">
        
      <img 
        src={heroImageDesktop} 
        alt="Hero Background" 
        className="hidden md:block absolute inset-0 h-full w-full object-cover opacity-70" 
      />
      <img 
        src={heroImageMobile} 
        alt="Hero Background Mobile" 
        className="block md:hidden absolute inset-0 h-full w-full object-cover opacity-70" 
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Tala Prattoy</h1>
        <p className="mt-4 text-lg md:text-xl">Photography Gallery</p>
        <button className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 rounded-full">Explore Gallery</button>
      </div>
    </div>
    </>
  );
};
export default Hero