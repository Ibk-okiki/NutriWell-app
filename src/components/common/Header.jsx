import React from 'react';
import { Link } from 'react-router-dom';

// Simple SVG Logo Component to match the design
const Logo = () => (
  <div className="flex items-center gap-2">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#10B981"/>
      <path d="m12.5 7.5-4 4 1.41 1.41L12 10.83l2.09 2.08L15.5 11.5l-3-4zM12 13.17l-2.09-2.08L8.5 12.5l4 4 4-4-1.41-1.41L12 13.17z" fill="#10B981"/>
    </svg>
    <span className="text-2xl font-bold text-brand-dark">NutriWell</span>
  </div>
);

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/"><Logo /></Link>
        
        <nav className="md:flex items-center gap-8 text-brand-gray font-semibold">
          <Link to="/" className="hover:text-brand-green-dark transition-colors">Home</Link>
          <Link to="/features" className="hover:text-brand-green-dark transition-colors">Features</Link>
          <Link to="/plans" className="hover:text-brand-green-dark transition-colors">Plans</Link>
          <Link to="/about" className="hover:text-brand-green-dark transition-colors">About</Link>
          <Link to="/contact" className="hover:text-brand-green-dark transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="font-semibold text-brand-dark hover:text-brand-green-dark">Sign In</Link>
            <Link to="/get-started" className="bg-brand-green text-white font-semibold py-2 px-5 rounded-full hover:bg-brand-green-dark transition-all">
                Get Started
            </Link>
        </div>

        <div className="md:hidden">
          <button className="text-brand-dark text-3xl">Join Us</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
