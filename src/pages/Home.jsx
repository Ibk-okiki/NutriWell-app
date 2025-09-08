import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FEFCF3] to-[#2F855A] relative overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-8 py-16 flex flex-col items-center text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold uppercase leading-tight text-[#422006]">
          Your Personalized Path to Health & Vitality
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl text-[#422006] max-w-xl">
          Get tailored meal plans, health tips, and lifestyle guidance all in one app, 
          backed by nutrition science.
        </p>

        {/* CTA Button */}
        <Link
          to="/plans"
          className="mt-10 bg-nutri-green text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:bg-nutri-orange transition"
        >
          Get Started
        </Link>
      </div>

      {/* Hero Image */}
      <div className="absolute right-10 bottom-0 max-w-xl opacity-90">
        <img
          src="/pexels-foodie-factor-162291-566566-removebg-preview.png"
          alt="Healthy Food"
          className="rounded-lg"
        />
      </div>

      {/* Decorative Vector */}
      <div className="absolute left-0 bottom-10 w-32 h-48 border border-[#27C840] rounded-full"></div>
    </div>
  );
};

export default Home;
