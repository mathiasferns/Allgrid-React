import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { IoVideocamOutline } from 'react-icons/io5'; // A more fitting icon for "Watch Demo"

// Importing assets with descriptive names
import step1Image from '../assets/how-it-works-1.png';
import step2Image from '../assets/how-it-works-1.png';
import step3Image from '../assets/how-it-works-4.png';
import step4Image from '../assets/how-it-works-4.png';

import './HowItWorks.css';

const stepsData = [
  {
    image: step1Image,
    title: 'Position the frame',
    description: 'The magnetic frame aligns with boxes, pipes, or recesses.',
  },
  {
    image: step2Image,
    title: 'Mark with Magnets',
    description: 'Magnetic markers are positioned exactly where holes are needed.',
  },
  {
    image: step3Image,
    title: 'Transfer to Tile',
    description: 'Move the frame onto the tile or panel and trace around the markers.',
  },
  {
    image: step4Image,
    title: 'Cut with Confidence',
    description: 'No need for second guesses – just follow the marks and cut!',
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <div className="how-it-works-container">
        <div className="how-it-works-header">
          <h2 className="how-it-works-title">
            The Ingenious Concept:
            <br />
            <span className="title-highlight-yellow">Copy, Place, Mark, Cut</span>
          </h2>
          <p className="how-it-works-subtitle">
            The brilliance of Allgrid lies in its simplicity.
          </p>
        </div>

        <div className="steps-grid">
          {stepsData.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-card-image-container">
                <img src={step.image} alt={step.title} />
              </div>
              <div className="step-card-content">
                <h3 className="step-card-title">{step.title}</h3>
                <p className="step-card-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="watch-demo-button">
          Watch Demo <IoVideocamOutline size="1.2em" />
        </button>

        <div className="info-box">
          <BsInfoCircle className="info-icon" />
          <p>
            For large-scale installations, a laser level provides precise reference points, ensuring absolute alignment across multiple tiles or panels.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;