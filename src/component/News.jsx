import React from 'react';
import news1 from '../assets/durgamama.jpg';
import news2 from '../assets/durgamama.jpg';
import news3 from '../assets/durgamama.jpg';

const News = () => {
  const newsItems = [
    {
      title: "Inauguration Ceremony Announced",
      desc: "The grand opening will feature local dignitaries and artists.",
      img: news1
    },
    {
      title: "Theme for This Year Revealed",
      desc: "The Puja Committee has unveiled a theme reflecting harmony and heritage.",
      img: news2
    },
    {
      title: "Record Crowd Expected",
      desc: "Authorities anticipate a record-breaking number of visitors this year.",
      img: news3
    }
  ];

  return (
    <section className="py-16 px-4 md:px-16 text-black">
      <h2 className="text-3xl text-white font-bold mb-6 text-center ">Tala in News</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {newsItems.map((news, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <img src={news.img} alt={news.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
            <p>{news.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News