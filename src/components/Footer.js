// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Footer Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Section 1: About Proviz AI */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Proviz AI</h3>
            <p className="text-gray-400">
              Proviz AI is shaping the future of AI education. We offer cutting-edge programs to train the next generation of AI professionals.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#courses" className="text-gray-400 hover:text-blue-400">Courses</a></li>
              <li><a href="#why-proviz" className="text-gray-400 hover:text-blue-400">Why Proviz AI</a></li>
              <li><a href="#partners" className="text-gray-400 hover:text-blue-400">For Partners</a></li>
              <li><a href="#resources" className="text-gray-400 hover:text-blue-400">Resources</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-blue-400">Blog</a></li>
            </ul>
          </div>

          {/* Section 3: Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" className="text-gray-400 hover:text-blue-600">
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-700">
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-pink-600">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Copyright and Terms */}
        <div className="border-t border-gray-700 pt-6 mt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Proviz School of AI. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="/terms" className="text-gray-400 hover:text-blue-400">Terms of Service</a>
            <a href="/privacy" className="text-gray-400 hover:text-blue-400">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
