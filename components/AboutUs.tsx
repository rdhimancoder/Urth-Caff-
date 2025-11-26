import React from 'react';
import { ABOUT_SECTION } from '../constants';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-amber-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-green-900 mb-10 border-b-4 border-amber-500 pb-4 inline-block">
          {ABOUT_SECTION.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          {ABOUT_SECTION.intro}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Name Origin */}
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 border border-gray-100">
            <h3 className="text-3xl font-bold text-amber-700 mb-4">
              {ABOUT_SECTION.nameOrigin.title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {ABOUT_SECTION.nameOrigin.text}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-1 border border-gray-100">
            <h3 className="text-3xl font-bold text-amber-700 mb-4">
              {ABOUT_SECTION.mission.title}
            </h3>
            <ul className="list-disc list-inside text-left text-gray-600 text-lg space-y-2">
              {ABOUT_SECTION.mission.points.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
