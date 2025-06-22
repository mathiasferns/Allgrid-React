import React from 'react';

// Importing assets
import projectTiling from '../assets/project-tiling.png';
import projectMeasuring from '../assets/project-measuring.png';
import projectHanging from '../assets/project-hanging-pictures.png';
import projectPlumbing from '../assets/project-plumbing.png';

import './Projects.css';

// Storing data in an array makes the component cleaner and easier to update
const projectsData = [
  { src: projectTiling, alt: 'A professional tiler cutting tiles in a modern bathroom.' },
  { src: projectMeasuring, alt: 'Two people measuring a large tile on a workbench.' },
  { src: projectHanging, alt: 'A couple hanging abstract art on a white wall.' },
  { src: projectPlumbing, alt: 'A plumber working on the pipes under a white sink.' },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Perfect for any Project</h2>
          <p className="projects-description">
            Whether you're a professional tiler, electrician, or a dedicated
            DIYer, Allgrid delivers unparalleled accuracy and efficiency.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-image-wrapper" key={index}>
              <img src={project.src} alt={project.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;