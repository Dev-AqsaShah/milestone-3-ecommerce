import React from 'react';
import Image from 'next/image';

const Fragrances: React.FC = () => {
  // Update images to an array of objects with src and price properties
  const fragrances = [
    { src: '/assets/Frag-1.webp', price: 'PKR 3,999' },
    { src: '/assets/Frag-2.webp', price: 'PKR 4,299' },
    { src: '/assets/Frag-3.webp', price: 'PKR 2,799' },
    { src: '/assets/Frag-4.webp', price: 'PKR 3,699' },
    { src: '/assets/Frag-6.webp', price: 'PKR 5,998' },
    { src: '/assets/Frag-7.webp', price: 'PKR 4,999' },
    { src: '/assets/Frag-5.webp', price: 'PKR 5,099' },
    { src: '/assets/Frag-8.webp', price: 'PKR 3,599' },
    { src: '/assets/Frag-9.webp', price: 'PKR 2,599' },
    { src: '/assets/Frag-10.webp', price: 'PKR 2,999' },
    { src: '/assets/Frag-11.webp', price: 'PKR 6,099' },
    { src: '/assets/Frag-12.webp', price: 'PKR 4,999' },
  ];

  return (
    <div className="p-10 bg-gradient-to-r from-blue-800 to-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Fragrances</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {fragrances.map((item, index) => (
          <div key={index} className="relative h-60 w-full cursor-pointer group">
            <Image
              src={item.src}
              alt={`Fragrance ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-70 rounded-lg transition-opacity duration-500">
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white text-center py-2 group-hover:opacity-100 rounded-b-lg transition-opacity duration-500">
                {item.price}
              </div>
              <div className="absolute bottom-2 p-8 m-8 flex justify-center">
                <button className="bg-black text-white py-2 px-4 rounded-lg transition transform hover:scale-105 hover:animate-shake">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fragrances;
