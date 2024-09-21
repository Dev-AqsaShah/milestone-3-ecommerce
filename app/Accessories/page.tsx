import React from 'react';
import Image from 'next/image';

const Shoes: React.FC = () => {
  // Update images to an array of objects with src and price properties
  const shoes = [
    { src: '/assets/acc=1.webp', price: 'PKR 999' },
    { src: '/assets/accessories-2.webp', price: 'PKR 1,299' },
    { src: '/assets/accessories-3.webp', price: 'PKR 799' },
    { src: '/assets/acc-4.webp', price: 'PKR 899' },
    { src: '/assets/acc-5.webp', price: 'PKR 1,099' },
    { src: '/assets/acc-6.webp', price: 'PKR 2,099' },
    { src: '/assets/accessories-7.webp', price: 'PKR 899' },
    { src: '/assets/acc-8.webp', price: 'PKR 1,599' },
    { src: '/assets/acc-9.webp', price: 'PKR 1,599' },
    { src: '/assets/acc-10.webp', price: 'PKR 999' },
    { src: '/assets/acc-11.webp', price: 'PKR 2,099' },
    { src: '/assets/acc-12.webp', price: 'PKR 1,999' },
  ];

  return (
    <div className="p-10 bg-gradient-to-r from-blue-800 to-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Accessories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shoes.map((item, index) => (
          <div key={index} className="relative h-60 w-full cursor-pointer group">
            <Image
              src={item.src}
              alt={`Shoe ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-70 rounded-lg transition-opacity duration-500">
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

export default Shoes;
