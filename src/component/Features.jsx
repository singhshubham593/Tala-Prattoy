import React from 'react';
import feature1 from '../assets/durgamama.jpg';
import feature2 from '../assets/durgamama.jpg';
import feature3 from '../assets/durgamama.jpg';
import feature4 from '../assets/durgamama.jpg'; 

const Features = () => {
  const features = [
    { 
      title: "Durga Puja Art 2024", 
      desc: "Tala Prattoy, endeavouring towards global art forever, projects this year’s Durga Puja Art as celebrating the journey of a Durga Puja Artist. It thus highlights Kahan – a narration by Susanta Paul, the Artist of high repute",
      img: feature1
    },
    { 
      title: "Watch Art with Artist", 
      desc: "2024 introduces a never-seen-before guided walkthrough in Tala Prattoy Durga Puja Art venue where visitors may, in groups, see the artworks through a smooth walk with a guide. Here the guide is the Artist himself. This programme is chargeable and the visitors have to buy tickets for booking the slots of different times",
      img: feature2
    },
    { 
      title: "Encouraging Craftsmanship", 
      desc: "Spotlighting local artisans and their incredible skills.",
      img: feature3
    },
    { 
      title: "Promotion of traditional art", 
      desc: "Reviving heritage through modern presentation.",
      img: feature4
    },
  ];

  return (
    <section className="py-16 px-4 md:px-16 bg-black text-white">
      <h2 className="text-3xl font-bold mb-6">Objective & Features</h2>
      <div className="grid md:grid-cols-2 gap-8 content-centre">
        {features.map((f, i) => (
          <div key={i} className="bg-gray-800 w-[500px] rounded-xl shadow">
            <img src={f.img} alt={f.title} className="w-full h-60 object-cover rounded-lg " />
            <h3 className="text-xl font-bold text-red-500">{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Features