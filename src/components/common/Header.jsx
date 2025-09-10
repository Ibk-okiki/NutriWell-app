import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-10S bg-white shadow-md">
      <div className="container mx-auto flex px-6 py-4 flex justify-between items-center">
        {/* Logo with Gradient Text */}
        <Link to="/">
          <h1 className="text-3xl font-bold font-heading bg-gradient-to-r from-nutri-green to-nutri-orange bg-clip-text text-transparent">
            NutriWell
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="md:flex items-center gap-10 text-lg space-x-6 text-nutri-dark font-medium font-heading">
          <Link to="/" className="hover:text-nutri-green transition-colors duration-300">Home</Link>
          <Link to="/about" className="hover:text-nutri-green transition-colors duration-300">About</Link>
          <Link to="/services" className="hover:text-nutri-green transition-colors duration-300">Services</Link>
          <Link to="/plans" className="hover:text-nutri-green transition-colors duration-300">Plans</Link>
        </nav>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Get Started</button>

        {/* Call to Action Button */}
        <div className="md:block">
          <Link to="/contact" className="bg-nutri-orange text-white font-bold font-heading py-3 px-6 rounded-full hover:bg-opacity-90 transition-all duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;