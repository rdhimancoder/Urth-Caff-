import React from 'react';
import { CALL_TO_ACTION_SECTION } from '../constants';

const CallToAction: React.FC = () => {
  return (
    <section id="order" className="py-16 md:py-24 bg-green-800 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-8 drop-shadow">
          {CALL_TO_ACTION_SECTION.title}
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed opacity-90">
          Whether you're looking for a cozy spot to enjoy an organic coffee, a healthy meal, or catering for your next event, Urth Caffé has something for you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="#cafes"
            className="bg-amber-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-600 transition duration-300 shadow-lg transform hover:scale-105"
          >
            {CALL_TO_ACTION_SECTION.visitButton}
          </a>
          <a
            href="#" // Placeholder for actual order link
            className="bg-white text-green-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg transform hover:scale-105"
          >
            {CALL_TO_ACTION_SECTION.orderButton}
          </a>
        </div>
        <p className="mt-10 text-md opacity-80">
          Planning an event? <a href="#catering" className="underline hover:text-amber-300 transition duration-300">{CALL_TO_ACTION_SECTION.cateringLink}</a>.
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
