// src/components/Header.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation

const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the menu toggle
const partner=()=>{
  navigate('/partner')
}
  // Navigate to the Application Form when "Apply Now" button is clicked
  const handleApplyNowClick = () => {
    navigate('/apply-now');
  };
  const handleClick=()=>{
    navigate('/')
  }
const cours=()=>{
  
  navigate('/course')
}
const why=()=>{
  
  navigate('/why-proviz')
}
  // Toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="p-4 sticky top-0 z-10 bg-gray-800 text-white">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left section: Logo or Branding */}
        <div className="text-xl font-bold" style={{cursor:'pointer'}} onClick={handleClick}>
          <span>Proviz</span><span className="text-blue-400">AI</span>
        </div>

        {/* Hamburger Menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isMenuOpen ? 'X' : '☰'} {/* Display 'X' if the menu is open */}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <button onClick={cours} className="text-lg hover:text-blue-400">Courses</button>
          <button onClick={why} className="text-lg hover:text-blue-400">Why ProvizAi</button>
          <button onClick={partner} className="text-lg hover:text-blue-400">For Partners</button>
          <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" className="text-lg hover:text-blue-400">Resources</a>
          <a href="https://proviz.in/blog/" className="text-lg hover:text-blue-400">Blog</a>
        </div>

        {/* Mobile Navigation Links */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <button onClick={cours} className="text-lg hover:text-blue-400">Courses</button>
          <button onClick={why} className="text-lg hover:text-blue-400">Why ProvizAi</button>
          <button onClick={partner} className="text-lg hover:text-blue-400">For Partners</button>
          <a href="#resources" className="block text-lg py-2 px-4 hover:text-blue-400">Resources</a>
          <a href="#blog" className="block text-lg py-2 px-4 hover:text-blue-400">Blog</a>
        </div>

        {/* Apply Now Button in Header (for desktop and mobile) */}
        <button
          onClick={handleApplyNowClick}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 md:block hidden"
        >
          Apply Now
        </button>

        {/* Mobile version of the Apply Now button */}
        <div className="md:hidden">
          <button
            onClick={handleApplyNowClick}
            className="text-xl px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Apply Now
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
