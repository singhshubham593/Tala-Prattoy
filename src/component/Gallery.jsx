import React from 'react';
import gallery1 from '../assets/durgamama.jpg';
import gallery2 from '../assets/durgamama.jpg';
import gallery3 from '../assets/durgamama.jpg';
import gallery4 from '../assets/durgamama.jpg';


const images = new Array(8).fill('');

const Gallery = () => {

  
  const galleryImages = [gallery1, gallery2, gallery3, gallery4,gallery1, gallery2, gallery3, gallery4];

  return (
    <section className="py-16 px-4 md:px-16 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-6">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {galleryImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-60 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </section>
  );
};
export default Gallery