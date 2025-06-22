import React from 'react';
import  BsExclamationLg  from '../assets/round-yellow.svg';

import brokenTileImage from '../assets/problem-broken-tile.png';
import frustratedPlumberImage from '../assets/project-plumbing.png';
import ReworkIcon from '../assets/tower.svg';

import './Problem.css';

const Problem = () => {
  return (
    <section className="problem-section">
      <div className="problem-container">
        <div className="problem-header">
          <h2 className="problem-title">
            <span className="title-highlight">Slow and Error-Prone</span>
            <br />
            Measuring is Holding You Back
          </h2>
          <p className="problem-subtitle">
            Construction demands precision, yet errors, waste, and inefficiencies cause rework and frustration.
          </p>
        </div>

        <div className="problem-grid">
          <div className="problem-card card-rework">
            <img src={ReworkIcon} alt="Rework icon" className="card-icon" />
            <p className="card-text-large">
              Up to <strong>30%</strong> of rework in construction comes from <span className="highlight-yellow-text">inaccurate measurements.</span>
            </p>
          </div>

          <div className="problem-card card-time">
            <div className="icon-wrapper">
              <img src={BsExclamationLg} alt="Rework icon" className="round-icon" />
            </div>
            <p className="card-text-small">Traditional measuring takes</p>
            <p className="card-text-huge">8-10x <span className="highlight-yellow-text">longer</span></p>
          </div>

          <div className="problem-card card-waste">
            <p className="card-text-medium">
              <strong>5-10%</strong>
              <br/>
              waste due to incorrect cutting.
            </p>
          </div>

          <div className="problem-card card-breakage">
            <img src={brokenTileImage} alt="Shattered floor tile" />
          </div>

          <div className="problem-card card-frustration">
            <img src={frustratedPlumberImage} alt="Frustrated plumber on the phone under a sink" />
            <div className="card-overlay">
              <p className="card-text-overlay">
                <strong>Over 60%</strong> experience frustration due to frequent cutting and measuring errors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;