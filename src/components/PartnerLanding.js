// src/components/PartnerLanding.js
import React from 'react';

const PartnerLanding = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Partner with Proviz AI</h1>
          <p className="text-lg md:text-xl mb-8">
            Join us in advancing AI education and technology. Together, we can make a lasting impact on the future.
          </p>
          <button className="px-6 py-3 bg-white text-blue-600 rounded-md font-semibold hover:bg-blue-200">
            Become a Partner
          </button>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Why Partner with Us?</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Expand Your Network</h3>
              <p>Connect with top AI professionals, researchers, and students who are passionate about technology and innovation.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Exclusive Training Programs</h3>
              <p>Access specialized training programs and resources designed to help your team master the latest AI advancements.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Collaborate on Projects</h3>
              <p>Work with us on cutting-edge AI projects, and gain visibility and recognition in the AI industry.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Boost Brand Awareness</h3>
              <p>Enhance your brand's visibility by partnering with us and gaining exposure to a global audience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-5xl font-bold text-blue-600">200+</p>
              <p className="text-gray-600">Partners Worldwide</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-600">5000+</p>
              <p className="text-gray-600">Students Trained</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-600">100+</p>
              <p className="text-gray-600">AI Projects Completed</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-600">30+</p>
              <p className="text-gray-600">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Success Stories</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Tech Innovations Ltd.</h3>
              <p>As a partner, Tech Innovations Ltd. has leveraged our resources to upskill their team, resulting in a 30% improvement in AI-driven project efficiency.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Global AI Solutions</h3>
              <p>Through our collaboration, Global AI Solutions has successfully launched 10+ AI-based applications, enhancing their market presence significantly.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">InnovaTech</h3>
              <p>Our partnership has empowered InnovaTech with the latest AI tools and training, enabling them to secure a prestigious industry award for AI innovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Interested in Partnering with Us?</h2>
          <p className="mb-8">Let's work together to shape the future of AI and bring groundbreaking solutions to the world.</p>
          <button className="px-6 py-3 bg-white text-blue-600 rounded-md font-semibold hover:bg-blue-200">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default PartnerLanding;
