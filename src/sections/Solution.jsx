import React from 'react';

import solutionProductImage from '../assets/solution-product.png';
import solutionGraphicElement from '../assets/allgrid-logo.svg'; // An SVG is ideal here

import './Solution.css';

// Data for benefits makes the component cleaner and easier to update
const benefitsData = [
  { highlight: '100%', title: 'Accurate', description: 'Get perfect measurements every time without miscalculations or rework.' },
  { highlight: '10X Faster', title: 'Workflow', description: 'Eliminate tedious measuring and speed up your projects effortlessly.' },
  { highlight: 'Zero Waste!', title: 'Max Savings $', description: 'Avoid costly mistakes and reduce material loss.' },
  { highlight: 'Effortless', title: 'Adaptable', description: 'Works seamlessly on tiles, drywall, and panels, even around obstacles.' },
  { highlight: 'Simplified', title: 'Magnetic Precision', description: 'Instantly transfer measurements with a foolproof system.' },
];

const Solution = () => {
  return (
    <section className="solution-section">
      <div className="solution-container">
        <h2 className="solution-title">
          "Goodbye Errors, Hello<br/> Precision - <span className="highlight-text">Meet Allgrid!</span>"
        </h2>
        
        <div className="solution-product-image-wrapper">
          <img src={solutionProductImage} alt="A 3D render of the Allgrid measurement tool" />
        </div>
        
        <div className="benefits-card">
          <div className="benefits-grid">
            {benefitsData.map((benefit, index) => (
              <div className="benefit-item" key={index}>
                <h3 className="benefit-title">
                  <span className="benefit-highlight">{benefit.highlight}</span>
                  <span className="benefit-main-text">{benefit.title}</span>
                </h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
          <img src={solutionGraphicElement} alt="Decorative graphic element" className="benefits-decorative-graphic" />
        </div>
      </div>
    </section>
  );
};

export default Solution;