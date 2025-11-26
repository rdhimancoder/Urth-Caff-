import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import MenuHighlights from './components/MenuHighlights';
import Locations from './components/Locations';
import UrthDifference from './components/UrthDifference';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <MenuHighlights />
        <Locations />
        <UrthDifference />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;
