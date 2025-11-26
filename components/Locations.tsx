import React from 'react';
import { CAFE_LOCATIONS } from '../constants';

const Locations: React.FC = () => {
  return (
    <section id="cafes" className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-green-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-green-900 mb-10 text-center border-b-4 border-amber-500 pb-4 inline-block">
          {CAFE_LOCATIONS.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto text-center mb-12 leading-relaxed">
          {CAFE_LOCATIONS.intro}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative rounded-lg shadow-xl overflow-hidden h-96 lg:h-[500px]">
            <img
              src={CAFE_LOCATIONS.imageUrl}
              alt="Urth Caffé Location"
              className="w-full h-full object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4">
              <p className="text-white text-2xl font-semibold text-center drop-shadow-lg">
                "{CAFE_LOCATIONS.callToAction}"
              </p>
            </div>
          </div>

          {/* History & Atmosphere Column */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold text-amber-700 mb-6">Our Journey</h3>
              <ul className="space-y-4 text-left text-gray-700 text-lg">
                {CAFE_LOCATIONS.history.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-3 mt-1 font-semibold text-xl">
                      &bull;
                    </span>
                    <span>
                      <span className="font-bold text-green-800">{item.year}:</span> {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold text-amber-700 mb-4">Atmosphere & Offerings</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {CAFE_LOCATIONS.atmosphere}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
