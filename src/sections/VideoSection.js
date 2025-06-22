import React from 'react';
import { IoVideocamOutline } from 'react-icons/io5';

// Use SVG for logos for best quality
import allgridLogo from '../assets/allgrid-logo-dark.svg'; 
import videoThumbnail from '../assets/video-thumbnail.png';

import './VideoSection.css';

const VideoSection = () => {
  return (
    <section className="video-and-testimonials-section">
      <div className="video-outer-container">
        <div className="video-header">
          <span className="video-header-text">How</span>
          <img src={allgridLogo} alt="Allgrid Logo" className="video-header-logo" />
          <span className="video-header-text">Works</span>
        </div>
        <div className="video-player-wrapper">
          <img src={videoThumbnail} alt="A man demonstrating the Allgrid tool" className="video-thumbnail" />
          <button className="video-play-button">
            Watch video <IoVideocamOutline size="1.2em" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;