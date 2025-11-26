import React from 'react';
import { HERO_SECTION } from '../constants';

const Hero: React.FC = () => {
  return (
    <section
      className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center text-center p-4"
      style={{ backgroundImage: `url(${HERO_SECTION.imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-lg">
          {HERO_SECTION.title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-light mb-6 drop-shadow-md">
          {HERO_SECTION.subtitle}
        </p>
        <p className="text-md sm:text-lg mb-8 drop-shadow">
          {HERO_SECTION.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#about"
            className="bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-800 transition duration-300 shadow-lg transform hover:scale-105"
          >
            Learn More
          </a>
          <a
            href="#order"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-green-800 transition duration-300 shadow-lg transform hover:scale-105"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
