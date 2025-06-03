import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section d-flex flex-column align-items-center justify-content-center text-center">
      <h1 className="hero-title">Simplify Your Life with Our <br />Todo App</h1>
      <p className="hero-subtext">
        Stay organized and boost your productivity with our intuitive todo website. <br />
        Experience a modern approach to task management that fits your lifestyle.
      </p>
      <div className="hero-buttons mt-4">
        <button className="btn btn-danger btn-lg rounded-pill me-3">Get started</button>
        <button className="btn btn-outline-danger btn-lg rounded-pill">Learn more</button>
      </div>
    </div>
  );
};

export default HeroSection;
