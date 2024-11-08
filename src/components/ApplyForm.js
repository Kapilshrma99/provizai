// src/components/ApplicationForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        form:'apply',
        name: '',
        phoneNumber: '',
        email: '',
        statement: '',
        interest:''
    });

    const [errors, setErrors] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        statement: '',
        interest:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        if (!formData.name) {
            formErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.phoneNumber) {
            formErrors.phoneNumber = 'Phone number is required';
            isValid = false;
        }

        if (!formData.email) {
            formErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Email address is invalid';
            isValid = false;
        }

        if (!formData.statement) {
            formErrors.statement = 'Statement is required';
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            // Send form data to the server securely via POST request
            const response = await axios.post('http://localhost:5000/api/applications', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                alert('Application submitted successfully!');
                setFormData({
                    name: '',
                    phoneNumber: '',
                    email: '',
                    statement: ''
                });
            }
        } catch (error) {
            console.error('Error submitting application:', error);
            alert('There was an error submitting your application. Please try again later.');
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Application Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                        required
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                        required
                    />
                    {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                        required
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="statement" className="block text-sm font-medium text-gray-700">Statement</label>
                    <textarea
                        id="statement"
                        name="statement"
                        value={formData.statement}
                        onChange={handleChange}
                        className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                        required
                    />
                    {errors.statement && <p className="text-red-500 text-xs mt-1">{errors.statement}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Area of Interst</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 p-2 w-full border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Submit Application
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ApplicationForm;
