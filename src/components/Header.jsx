import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-[#FEFCF3] to-[#FEFCF3] relative overflow shadow-md">
      <div className="container mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className=" text-2xl font-bold text-[#2F855A] to-[#DD6B20] bg-clip-text ">
          NutriWell
        </h1>

        {/* Navigation */}
        <nav className="flex gap-12 text-nutri-dark font-medium">
          <Link to="/" className="hover:text-nutri-green transition">
            Home
          </Link>
          <Link to="/about" className="ml-8 hover:text-nutri-green transition">
            About
          </Link>
          <a href="#services" className="hover:text-nutri-green transition">
            Services
          </a>
          <a href="#plans" className="hover:text-nutri-green transition">
            Plans
          </a>
          <a href="#contact" className="hover:text-nutri-green transition">
            Contact
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4 text-nutri-green">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-nutri-dark transition"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-nutri-dark transition"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
