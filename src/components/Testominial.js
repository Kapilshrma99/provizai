// src/components/Testimonial.js
import React from 'react';

const Testimonial = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What Our Students Say
        </h2>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg text-gray-700 mb-4">
              "Proviz AI provided me with the knowledge and skills needed to excel in the field of AI. The courses are well-structured and the instructors are highly knowledgeable."
            </p>
            <div className="flex items-center">
              <img src="https://www.istockphoto.com/photo/university-student-in-white-background-stock-photo-gm1369754239-439455923" alt="John Doe" className="rounded-full mr-4" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">John Doe</h4>
                <p className="text-gray-600">AI Specialist</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg text-gray-700 mb-4">
              "The hands-on projects and real-world applications of AI made my learning experience at Proviz AI unforgettable. It gave me the confidence to pursue a career in this exciting field."
            </p>
            <div className="flex items-center">
              <img src="https://www.istockphoto.com/photo/face-portrait-student-and-man-in-university-ready-for-back-to-school-learning-goals-gm1473711199-503773799" alt="Jane Smith" className="rounded-full mr-4" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Jane Smith</h4>
                <p className="text-gray-600">Data Scientist</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg text-gray-700 mb-4">
              "Proviz AI not only taught me the technical aspects of AI but also helped me develop soft skills that are essential for success in this industry. Highly recommend!"
            </p>
            <div className="flex items-center">
              <img src="https://via.placeholder.com/150" alt="Emily Taylor" className="rounded-full mr-4" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Emily Taylor</h4>
                <p className="text-gray-600">Machine Learning Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
