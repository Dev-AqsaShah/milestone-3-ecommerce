import React from 'react';
import Image from 'next/image';

const Clothes: React.FC = () => {
  const clothesItems = [
    { src: '/assets/clothes-1.webp', price: 'PKR 5,999' },
    { src: '/assets/cloth-2.webp', price: 'PKR 6,299' },
    { src: '/assets/cloth-3.webp', price: 'PKR 4,799' },
    { src: '/assets/cloth-4.webp', price: 'PKR 7,699' },
    { src: '/assets/cloth-5.webp', price: 'PKR 5,099' },
    { src: '/assets/cloth-6.webp', price: 'PKR 3,998' },
    { src: '/assets/cloth-7.webp', price: 'PKR 6,999' },
    { src: '/assets/cloth-8.webp', price: 'PKR 5,599' },
    { src: '/assets/cloth-9.webp', price: 'PKR 4,599' },
    { src: '/assets/cloth-10.webp', price: 'PKR 5,999' }, // Corrected
    { src: '/assets/cloth-11.webp', price: 'PKR 8,099' },
    { src: '/assets/cloth-12.webp', price: 'PKR 4,999' },
  ];

  return (
    <div className="p-10 bg-gradient-to-r from-blue-800 to-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Clothes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {clothesItems.map((item, index) => (
          <div key={index} className="relative h-60 w-full cursor-pointer group">
            <Image
              src={item.src}
              alt={`Clothes ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-70 rounded-lg transition-opacity duration-500">
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white text-center py-2 group-hover:opacity-100 rounded-b-lg transition-opacity duration-500">
                {item.price}
              </div>
              <div className="absolute bottom-2 left-0 right-0 flex justify-center">
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

export default Clothes;
