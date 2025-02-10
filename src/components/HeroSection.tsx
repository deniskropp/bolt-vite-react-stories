import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Discover and Share Amazing Stories</h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore a world of captivating narratives, or share your own unique voice with our vibrant community.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg">Start Reading</button>
      </div>
    </section>
  );
};

export default HeroSection;
