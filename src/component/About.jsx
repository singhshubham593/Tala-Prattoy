import React from 'react';
import demoImg from '../assets/durgamama.jpg';

const About = () => {
  return (<>
     
    <div className="px-6 py-12 flrx flex-row grid md:grid-cols-2 gap-6 items-center">
        <div className='flex flex-col gap-4 items-center'>
          <h2 className="text-3xl font-bold mb-4">About Tala</h2>
          <p className="text-gray-300 text-sm px-8">Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival. Tala Prattoy’s work emphasis has always been on Durga Puja as a specific art genre where the public space is being transformed into an art venue. We are committed to make that art global.Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival. Tala Prattoy’s work emphasis has always been on Durga Puja as a specific art genre where the public space is being transformed into an art venue. We are committed to make that art global.</p>
          <img src={demoImg} alt="About Tala" className="md:w-1/2 rounded-xl shadow-lg" />
        </div>
        <div className="flex flex-col items-center gap-4">
           <img src={demoImg} alt="About Tala" className="md:w-1/2 rounded-xl shadow-lg " />
           <img src={demoImg} alt="About Tala" className="md:w-1/2 rounded-xl shadow-lg" />
        </div>
    </div>
      </>
  );
};

export default About; 