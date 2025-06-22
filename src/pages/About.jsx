import React from 'react';

import aboutBrandImage from '../assets/hero-product.png';
import teamMember1 from '../assets/testimonial-avatar.jpg';
import teamMember2 from '../assets/testimonial-avatar.jpg';
import teamMember3 from '../assets/testimonial-avatar.jpg';

import './About.css';

const teamData = [
  {
    name: 'Sven Gunnar Vagen',
    title: 'Managing Director',
    avatar: teamMember1
  },
  {
    name: 'Jarl Oyvind Solberg',
    title: 'Product & marketing manager',
    avatar: teamMember2
  },
  {
    name: 'Kari Solberg Vagen',
    title: 'Finance & administration',
    avatar: teamMember3
  }
];

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* === HEADER === */}
        <div className="about-header">
          <h1 className="about-title">
            What & Who is <span className="highlight-yellow">Allgrid?</span>
          </h1>
          <p className="about-subtitle">Briefly about us and our history</p>
        </div>

        <div className="about-main-content">
          <div className="about-image-wrapper">
            <img src={aboutBrandImage} alt="Allgrid logo with tagline Always spot on!" />
          </div>
          <div className="about-text-content">
            <p>
              Our measurement concept was created by a Norwegian builder, valuer, and teacher who saw the need for a more efficient and error-free method for measuring tiles and building boards. In 2017, we began developing a tool to streamline the process, reducing stress, errors, and material waste.
            </p>
            <p>
              With patents in major markets and contributions from the founder's engineer brother, extensive testing refined the tool. The result is a revolutionary, precision-driven system that boosts efficiency and simplifies measurements for professionals.
            </p>
          </div>
        </div>

        <div className="team-section">
          {teamData.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.avatar} alt={member.name} className="team-avatar" />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-title">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;