import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="h-screen w-full bg-black flex items-center justify-start pl-10">
      <div className="text-white">
        <h1 className="text-5xl font-bold text-blue-600 animate-bounce mb-2">Pehle Aayen Pehle Payen</h1>
        <h2 className="text-6xl font-bold text-blue-600 animate-bounce mb-2">Sale Sale Sale</h2>
        <div className="flex items-center">
          <h3 className="text-xl font-semibold text-blue-600 animate-bounce mb-2">Up to</h3>
          <h4 className="text-4xl font-bold ml-2 text-blue-600 animate-bounce mb-2">51% Off</h4>
        </div>
        <h5 className="text-7xl font-extrabold animate-pulse">Enjoy Shopping</h5>
        <h6 className="text-6xl font-extrabold animate-pulse">New Collection</h6>
        <h6 className="text-5xl font-extrabold animate-pulse">For Everyone</h6>
      </div>
      <div className="flex-shrink-0">
        <img
          src="/assets/shopping.png" // Adjust the image path if needed
          alt="Shopping"
          className="w-full h-auto mt-8" // Adjust the width and margin to position it higher
        />
      </div>
    </div>
  );
}

export default Home;
