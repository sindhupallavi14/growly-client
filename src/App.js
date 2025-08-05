import React, { useState } from 'react';
import axios from 'axios';
import HeroSection from './sections/HeroSection';
import HowItWorks from './sections/HowItWorks';
import Features from './sections/Features';
import LeadForm from './sections/LeadForm';

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = async (formData) => {
    try {
      await axios.post('http://localhost:5000/api/leads', formData);
      setSubmitted(true);
    } catch {
      alert('Submission failed—please try again.');
    }
  };

  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <Features />
      <LeadForm onSubmit={handleFormSubmit} submitted={submitted} />
    </div>
  );
}

export default App;
