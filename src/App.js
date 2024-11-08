// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';  // Import Header component
import Hero from './components/Hero';  // Import Hero component
import ApplicationForm from './components/ApplicationForm';  // Import ApplicationForm component
import ApplyForm from './components/ApplyForm';
import LearnMore from './components/LearnMore';
import Footer from './components/Footer';
import Testimonial from './components/Testominial';
import CourseHighlight from './components/CourseHighlight';
import Courses from './components/Courses';
import PartnerLanding from './components/PartnerLanding';

function App() {
  return (
    <Router>
      
      <Header /> {/* Header with navigation and "Apply Now" button */}

      <Routes>
        {/* Landing Page Route */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />  {/* Render Hero Component on Landing Page */}
             <ApplicationForm/>
             <Testimonial/>
             <CourseHighlight/>
            </>
          }
        />

        {/* Application Form Route */}
        <Route 
          path="/apply-now" 
          element={<ApplyForm />}  // Render ApplicationForm on Apply Now route
        />
        <Route 
          path="/learn-more" 
          element={<LearnMore />}  // Render ApplicationForm on Apply Now route
        />
        <Route 
          path="/course" 
          element={<Courses />}  // Render ApplicationForm on Apply Now route
        />
       
       <Route 
          path="/why-proviz" 
          element={<CourseHighlight />}  // Render ApplicationForm on Apply Now route
        />
        <Route 
          path="/partner" 
          element={<PartnerLanding />}  // Render ApplicationForm on Apply Now route
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
