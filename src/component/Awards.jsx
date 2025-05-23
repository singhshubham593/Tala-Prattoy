import React from 'react';

const Awards = () => {
  return (
    <section className="bg-gray-900 text-white py-10 px-4 md:px-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Awards</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="bg-red-600 w-20 h-20 flex items-center justify-center rounded-full text-white font-bold text-xl">
            M
          </div>
        ))}
      </div>
    </section>
  );
};
export default Awards;