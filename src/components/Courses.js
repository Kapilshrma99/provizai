// src/components/CourseEnlistment.js
import React from 'react';

const courses = [
  {
    title: 'Introduction to AI',
    description: 'Learn the basics of AI, including machine learning, neural networks, and natural language processing. Perfect for beginners!',
    image: '/Images/Introduction_to_AI.jpeg',
    link: '#apply-now'
  },
  {
    title: 'Advanced Machine Learning',
    description: 'Dive deep into advanced machine learning algorithms like deep learning, reinforcement learning, and more. Great for intermediate learners.',
    image: '../Images/Advanced_Machin_Learning.jpeg',
    link: '#apply-now'
  },
  {
    title: 'AI for Data Science',
    description: 'Learn how AI can be used to process and analyze large datasets. This course covers practical AI tools and methods for data science.',
    image: '../Images/AI for Data Science.jpeg',
    link: '#apply-now'
  },
  {
    title: 'Natural Language Processing',
    description: 'Specialize in NLP and learn how to build systems that can understand, interpret, and generate human language.',
    image: '../Images/Natural Language Processing.jpeg',
    link: '#apply-now'
  },
  {
    title: 'AI in Business',
    description: 'This course teaches how AI can be implemented in business processes, from automation to decision-making.',
    image: '../Images/AI in Business.jpeg',
    link: '#apply-now'
  },
  {
    title: 'Robotics and AI',
    description: 'Explore how AI is applied in robotics for autonomous decision-making and control. A hands-on course for aspiring robotic engineers.',
    image: '../Images/Robotics and AI.jpeg',
    link: '#apply-now'
  },
  {
    title: 'Deep Learning',
    description: 'Master deep learning techniques and neural network architectures such as CNNs, RNNs, and GANs.',
    image: '../Images/Deep Learning.jpeg',
    link: '#apply-now'
  },
  {
    title: 'AI for Healthcare',
    description: 'Learn how AI is revolutionizing healthcare through predictive analytics, diagnostics, and personalized medicine.',
    image: '../Images/AI for Healthcare.jpeg',
    link: '#apply-now'
  },
  {
    title: 'AI Ethics and Fairness',
    description: 'Understand the ethical implications of AI, including fairness, transparency, accountability, and bias in algorithms.',
    image: '../Images/AI Ethics and Fairness.jpeg',
    link: '#apply-now'
  },
  {
    title: 'Computer Vision',
    description: 'Learn how AI can be used to interpret and analyze visual data, with applications in face recognition, object detection, and autonomous vehicles.',
    image: '../Images/Computer Vision.jpeg',
    link: '#apply-now'
  },
  {
    title: 'AI and Cloud Computing',
    description: 'Explore the intersection of AI and cloud computing. Learn how AI models are deployed on the cloud and scaled for global applications.',
    image: '../Images/AI and Cloud Computing.jpeg',
    link: '#apply-now'
  },
  {
    title: 'AI for Autonomous Vehicles',
    description: 'Understand how AI is used in autonomous vehicles to navigate, make decisions, and learn from real-world data.',
    image: '../Images/AI for Autonomous Vehicles.jpg',
    link: '#apply-now'
  },
  {
    title: 'AI in Finance',
    description: 'Learn how AI is being used in the finance industry for fraud detection, algorithmic trading, and risk management.',
    image: '../Images/AI in Finance.jpeg',
    link: '#apply-now'
  },
  {
    title: 'AI for Cybersecurity',
    description: 'Explore how AI can be applied to enhance cybersecurity, detect threats, and automate response protocols.',
    image: '../Images/AI for Cybersecurity.jpeg',
    link: '#apply-now'
  },
];

const Courses = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Featured AI Courses
        </h2>

        {/* Course List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{course.title}</h3>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <a href={course.link} className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Enroll Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
