import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-orange-600 bg-clip-text ">
          NutriWell
        </h1>

        {/* Navigation */}
        <nav className="flex gap-12 text-green-700 font-medium">
          <Link to="/" className="hover:text-green-600 transition">
            Home
          </Link>
          <Link to="/about" className="ml-4 hover:text-green-600 transition">
            About
          </Link>
          <a href="#services" className="hover:text-green-600 transition">
            Services
          </a>
          <a href="#plans" className="hover:text-green-600 transition">
            Plans
          </a>
          <a href="#contact" className="hover:text-green-600 transition">
            Contact
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4 text-green-700">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-900 transition"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-green-900 transition"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
