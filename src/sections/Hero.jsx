import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

import heroProductImage from '../assets/hero-product.png'; // Using a more descriptive name
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">
          Precision.Simplified.Say Goodbye <br /> to Measurement Hassles.
        </h1>
        <div className="hero-image-container">
          <img src={heroProductImage} alt="Allgrid Measurement Tool on a workbench" />
        </div>
        <p className="hero-description">
          Allgrid is a new measuring concept that simplifies the process of 
          measuring junction boxes and recesses in tiles and building panels.
        </p>
        <a href="#demo" className="watch-demo-link">
          Watch Demo <FaAngleRight size="1em" />
        </a>
      </div>
    </section>
  );
};

export default Hero;