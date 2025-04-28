import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import Footer from './Footer';

const LandingPage= () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
    <Header />
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <HeroSection />
        <Footer />
      </div>
    </main>
  </div>
  );
};

export default LandingPage;