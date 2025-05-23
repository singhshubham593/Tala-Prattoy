import React from 'react';

const Stats = () => {
  return (
    <div className="bg-black text-white py-10  px-4 md:px-16 text-center">
        <div className="py-8 px-4 flex sm:flex-row  grid grid-cols-2 md:px-16 bg-gray-900 text-white"> 
            <div className='flex flex-col justify-center items-center'>
            <h1 className="text-3xl font-bold mb-6"> Lorem Ipsum</h1>
            <p className='px-4'>Tala Prattoy upholds the art aspects of Durga Puja. Essence of creativity combining the tools and methods of art and art installations interpreting the formative stages of the festival.</p>
            </div>
            <div className="flex flex-col grid grid-cols-2 gap-4 p-8 text-xl font-semibold">
        <div className="flex flex-row"><span className="text-red-500 mx-2">500K+</span><h7 className="text-sm px-2 mt-2">Visitors Every Year</h7></div>
        <div className="flex flex-row"><span className="text-red-500 mx-2">100K+</span> <h4 className="text-sm px-2 mt-2">Photos Taken</h4></div>
        <div className="flex flex-row"><span className="text-red-500 mx-2">5M+</span> <h4 className="text-sm px-2 mt-2">Social Media Reach</h4></div>
        <div className="flex flex-row"><span className="text-red-500 mx-2">50+</span> <h1 className="text-sm px-2 mt-2">Cultural Events</h1></div>
            </div>
        </div>
    </div>
  );
};

export default Stats