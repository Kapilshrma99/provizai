// src/components/LearnMore.js
import React from 'react';

const LearnMore = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Learn More About Proviz School of AI
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Proviz School of AI is committed to shaping the future of artificial intelligence. We provide a world-class education in AI and machine learning, ensuring that our students are equipped with the latest skills to excel in the fast-paced tech industry. Our expert-led curriculum emphasizes both theoretical understanding and practical application, preparing students for successful careers in AI.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Key Point 1 */}
          <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
              <i className="fas fa-lightbulb text-3xl"></i> {/* Icon for key point */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovative Curriculum</h3>
            <p className="text-gray-600">
              Our curriculum is designed to cover the latest advancements in artificial intelligence, machine learning, and deep learning. We provide hands-on experience with real-world applications to ensure that students gain the skills needed to excel in this ever-evolving field.
            </p>
          </div>

          {/* Key Point 2 */}
          <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md">
            <div className="bg-green-500 text-white p-4 rounded-full mb-4">
              <i className="fas fa-rocket text-3xl"></i> {/* Icon for key point */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-World Applications</h3>
            <p className="text-gray-600">
              Our courses provide practical learning experiences with real-world AI applications. From building recommendation systems to designing neural networks, students work on projects that mirror the challenges faced in the industry today.
            </p>
          </div>

          {/* Key Point 3 */}
          <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md">
            <div className="bg-yellow-500 text-white p-4 rounded-full mb-4">
              <i className="fas fa-users text-3xl"></i> {/* Icon for key point */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Instructors</h3>
            <p className="text-gray-600">
              Learn from industry experts who bring years of real-world experience to the classroom. Our instructors are passionate about teaching and committed to your success, providing valuable insights that extend beyond the textbook.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Key Point 4 */}
          <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md">
            <div className="bg-red-500 text-white p-4 rounded-full mb-4">
              <i className="fas fa-code text-3xl"></i> {/* Icon for key point */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Hands-on Coding</h3>
            <p className="text-gray-600">
              Coding is at the core of AI development. At Proviz AI, students engage in numerous hands-on coding exercises using languages such as Python, TensorFlow, and PyTorch. We focus on building a strong foundation in coding to empower students to develop AI solutions.
            </p>
          </div>

          {/* Key Point 5 */}
          <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md">
            <div className="bg-purple-500 text-white p-4 rounded-full mb-4">
              <i className="fas fa-briefcase text-3xl"></i> {/* Icon for key point */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Career Support</h3>
            <p className="text-gray-600">
              Our career support services help students build professional portfolios and connect with top AI companies. We assist with resume building, mock interviews, and job placements, ensuring that our graduates are ready to succeed in their careers.
            </p>
          </div>
        </div>

    
      </div>
    </section>
  );
};

export default LearnMore;
