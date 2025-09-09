import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    // Main container with the background gradient
    <div className="relative min-h-screen w-full bg-gradient-to-br from-nutri-cream via-nutri-cream to-green-100 text-nutri-brown overflow-hidden">
      {/* This empty div is for the absolutely positioned Header */}
      <div className="h-24"></div>

      {/* Hero Section */}
      <main className="container mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left pt-12 lg:pt-0">
          <h1 className="font-sans font-bold text-5xl md:text-7xl text-nutri-brown-dark uppercase tracking-wide leading-tight">
            Your Personalized Path to <span className="text-nutri-green">Health & Vitality</span>
          </h1>
          <p className="font-body text-xl mt-6 max-w-lg mx-auto lg:mx-0">
            Get tailored meal plans, health tips, and lifestyle guidance. All in one app, backed by nutrition science.
          </p>
          <div className="mt-10">
            <Link to="/start" className="inline-flex items-center gap-3 bg-nutri-orange text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
              Start Your Journey
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img 
            src="https://via.placeholder.com/600x400" 
            alt="Healthy and delicious food bowl" 
            className="w-full max-w-xl" 
          />
        </div>

      </main>

      {/* Decorative background  */}
      <div className="absolute top-0 -left-32 w-96 h-96 bg-green-200 rounded-full opacity-20 mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-orange-200 rounded-full opacity-20 mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
    </div>
  );
};

export default Home;