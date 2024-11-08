// src/components/Hero.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
    const navigate = useNavigate(); 
    const handleApplyNowClick = () => {
        navigate('/learn-more');
      };
      const handleApplyNowClick1 = () => {
        navigate('/apply-now');
      };
  return (
    <section className="relative bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white py-20">
      {/* Overlay to make text more readable */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Unlock Your Future with Proviz School of AI
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl mb-6">
            Explore the world of Artificial Intelligence with expert-led courses, hands-on experience, and a community of like-minded learners.
          </p>

          {/* Mission Statement */}
          <p className="text-md md:text-lg mb-8">
            At Proviz School of AI, our mission is to equip the next generation of innovators with the knowledge and skills they need to thrive in the rapidly-evolving field of artificial intelligence. Our expert-led curriculum combines theoretical knowledge with real-world applications to prepare you for success.
          </p>

          {/* Features/Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
            <div className="flex items-center space-x-4">
              <svg className="w-8 h-8 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l-3 3-3-3" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v12m0 0l3-3m-3 3l-3-3" />
              </svg>
              <p className="text-white font-semibold text-lg">Industry-Relevant Curriculum</p>
            </div>
            <div className="flex items-center space-x-4">
              <svg className="w-8 h-8 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l7-7M5 12l7 7" />
              </svg>
              <p className="text-white font-semibold text-lg">Hands-on Projects and Real-World Applications</p>
            </div>
            <div className="flex items-center space-x-4">
              <svg className="w-8 h-8 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v12m0 0l-3-3m3 3l3-3" />
              </svg>
              <p className="text-white font-semibold text-lg">Expert Mentorship and Guidance</p>
            </div>
            <div className="flex items-center space-x-4">
              <svg className="w-8 h-8 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3-3m-3 3l-3-3" />
              </svg>
              <p className="text-white font-semibold text-lg">Collaborative Learning Community</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex justify-center gap-6">
            <button
              onClick={handleApplyNowClick1}
              className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Apply Now
            </button>
            <button
              onClick={handleApplyNowClick}
              className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-gray-800 transition duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
