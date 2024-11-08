// src/components/CourseHighlight.js
import React from 'react';

const CourseHighlight = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose Our Courses?
        </h2>
        
        {/* Course Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Highlight 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Industry-Relevant Curriculum</h3>
            <p className="text-gray-700">
              Our courses are designed to provide you with up-to-date knowledge and skills that align with industry trends, preparing you for real-world AI applications.
            </p>
          </div>

          {/* Highlight 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Hands-on Projects</h3>
            <p className="text-gray-700">
              We believe in learning by doing. Our courses feature practical, hands-on projects that give you real-world experience working with AI technologies.
            </p>
          </div>

          {/* Highlight 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Expert Mentors</h3>
            <p className="text-gray-700">
              Learn from top industry professionals and AI experts who will guide you through complex concepts, providing personalized support.
            </p>
          </div>

          {/* Highlight 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Flexible Learning</h3>
            <p className="text-gray-700">
              Our online platform allows you to learn at your own pace, with flexible schedules to fit your personal and professional life.
            </p>
          </div>

          {/* Highlight 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Career Assistance</h3>
            <p className="text-gray-700">
              We offer career support services to help you land your dream job in AI, including resume reviews, mock interviews, and job placement assistance.
            </p>
          </div>

          {/* Highlight 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Global Community</h3>
            <p className="text-gray-700">
              Join a diverse community of learners from around the world and collaborate on projects, share ideas, and learn together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHighlight;
