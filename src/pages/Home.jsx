import React from 'react';

const HomePage = () => {
  return (
    // Added a gray background and padding
    <div className="container mx-auto px-6 py-12 text-center bg-slate-50">
      {/* Added blue color, bigger font size, and a bottom margin */}
      <h2 className="text-4xl font-semibold text-blue-600 mb-4">
        Welcome to Your Health Journey
      </h2>
      <p className="text-lg text-gray-700">
        The UserForm will go here soon!
      </p>
    </div>
  );
};

export default HomePage;
