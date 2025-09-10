import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlayCircle } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="w-full">
      {/* --- Hero Section --- */}
      <section className="relative bg-white pt-24 pb-32 text-center">
        {/* Faint Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Healthy salad background" 
                className="w-full h-full object-cover opacity-10"
             />
        </div>
        <div className="container mx-auto px-6 relative">
          <h1 className="text-5xl md:text-7xl font-bold text-brand-dark leading-tight">
            Your Personal <span className="text-brand-green">Health Assistant</span>
          </h1>
          <p className="mt-6 text-lg text-brand-gray max-w-2xl mx-auto">
            Get personalized meal recommendations, nutrition insights, and wellness tips tailored to your unique health profile and lifestyle goals.
          </p>
          <div className="mt-10 flex justify-center items-center gap-4">
            <Link to="/get-started" className="bg-brand-green text-white font-semibold py-3 px-8 rounded-full hover:bg-brand-green-dark transition-all text-lg">
              Start Your Journey
            </Link>
            <Link to="/watch-demo" className="flex items-center gap-2 font-semibold text-brand-dark hover:text-brand-green-dark transition-colors text-lg">
              <FaPlayCircle className="text-brand-green" />
              Watch Demo
            </Link>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                  <p className="text-4xl font-bold text-brand-dark">10K+</p>
                  <p className="text-brand-gray">Happy Users</p>
              </div>
              <div className="text-center">
                  <p className="text-4xl font-bold text-brand-dark">5K+</p>
                  <p className="text-brand-gray">Healthy Recipes</p>
              </div>
               <div className="text-center">
                  <p className="text-4xl font-bold text-brand-dark">98%</p>
                  <p className="text-brand-gray">Success Rate</p>
              </div>
          </div>
        </div>
      </section>

      {/* --- You can build out the other sections here --- */}
      {/* Example: How It Works Section */}
      <section className="py-20 bg-brand-light">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-brand-dark">How NutriWell Works</h2>
            <p className="mt-4 text-brand-gray max-w-2xl mx-auto">Get started with your personalized nutrition journey in just three simple steps.</p>
            {/* Add the 3-step cards here later */}
          </div>
      </section>
       {/* Example: Testimonials Section */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-brand-dark">What Our <span className="text-brand-green">Users Say</span></h2>
            {/* Add the testimonial cards here later */}
          </div>
      </section>
    </div>
  );
};

export default Home;
