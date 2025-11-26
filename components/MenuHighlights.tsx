import React from 'react';
import { MENU_HIGHLIGHTS } from '../constants';

const MenuHighlights: React.FC = () => {
  const highlightItems = [
    MENU_HIGHLIGHTS.coffee,
    MENU_HIGHLIGHTS.teas,
    MENU_HIGHLIGHTS.bakery,
    MENU_HIGHLIGHTS.meals,
  ];

  return (
    <section id="menu" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-green-900 mb-10 border-b-4 border-amber-500 pb-4 inline-block">
          {MENU_HIGHLIGHTS.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {highlightItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-xl overflow-hidden group hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-amber-800 mb-3 group-hover:text-green-700 transition duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
