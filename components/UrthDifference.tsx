import React from 'react';
import { URTH_DIFFERENCE } from '../constants';

const UrthDifference: React.FC = () => {
  return (
    <section id="difference" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-green-900 mb-10 border-b-4 border-amber-500 pb-4 inline-block">
          {URTH_DIFFERENCE.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          At Urth Caffé, we believe in a holistic experience rooted in our core values. Discover what truly sets us apart.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
          {URTH_DIFFERENCE.sections.map((section, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 flex flex-col items-center text-center border border-gray-100"
            >
              <img
                src={section.imageUrl}
                alt={section.heading}
                className="w-full h-48 object-cover rounded-md mb-6 shadow-md transform group-hover:scale-105 transition-transform duration-500"
              />
              <h3 className="text-2xl font-bold text-amber-800 mb-4">
                {section.heading}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UrthDifference;
