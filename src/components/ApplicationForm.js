// src/components/ApplicationForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({ form:'query-form',name: '', phone: '', email: '', statement: '' });
  const [loading, setLoading] = useState(false); // To handle loading state
  const [error, setError] = useState(null); // For error handling

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(null); // Reset error on new submission

    try {
      await axios.post('http://localhost:5000/api/applications', formData);
      alert('Application submitted!');
      setFormData({ form:'query form',name: '', phone: '', email: '', statement: '' }); // Clear form after submission
    } catch (error) {
      console.error('Error submitting application:', error);
      setError('Error submitting the application. Please try again later.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Query Form</h2>
      
      {/* Display error message if any */}
      {error && <div className="bg-red-500 text-white p-3 mb-4 rounded">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Phone Field */}
        <div className="mb-4">
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Statement Field */}
        <div className="mb-4">
          <textarea
            name="statement"
            value={formData.statement}
            onChange={handleChange}
            placeholder="Brief Statement"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Apply Now'}
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
