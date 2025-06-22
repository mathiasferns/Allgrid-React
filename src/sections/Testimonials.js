import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

// Import assets
import avatar1 from '../assets/testimonial-avatar.jpg';
import avatar2 from '../assets/testimonial-avatar.jpg'; // Placeholder for other testimonials
import avatar3 from '../assets/testimonial-avatar.jpg'; // Placeholder for other testimonials

import './Testimonials.css';

const testimonialsData = [
  {
    quote: "Allgrid has changed the way I take measurements for my projects! This is a game changer for me. Allgrid has changed the way I take measurements for my projects! This is a game changer for me🔥",
    author: "Maryl Effie Bormen",
    avatar: avatar1,
  },
  {
    quote: "I was skeptical at first, but the accuracy is undeniable. It's saved me hours of rework and countless headaches. Highly recommended for any professional.",
    author: "John D.",
    avatar: avatar2,
  },
  {
    quote: "As a DIY enthusiast, this tool made me feel like a pro. My tiling project came out flawless. It's simple, intuitive, and worth every penny.",
    author: "Sarah K.",
    avatar: avatar3,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => setCurrentIndex((i) => (i === 0 ? testimonialsData.length - 1 : i - 1));
  const handleNext = () => setCurrentIndex((i) => (i === testimonialsData.length - 1 ? 0 : i + 1));

  return (
    <section className="testimonials-section">
      <div className="testimonial-frame">
        <h2 className="testimonials-title">Trusted by many tradesmen for various projects</h2>
        
        <div className="testimonial-slider">
          <button className="slider-arrow prev" onClick={handlePrev} aria-label="Previous testimonial"><FaChevronLeft /></button>
          
          <div className="testimonial-card">
            <FaQuoteRight className="testimonial-quote-icon" />
            <p className="testimonial-quote-text">{testimonialsData[currentIndex].quote}</p>
            <div className="testimonial-author-info">
              <img src={testimonialsData[currentIndex].avatar} alt={testimonialsData[currentIndex].author} />
              <span className="testimonial-author-name">{testimonialsData[currentIndex].author}</span>
            </div>
          </div>
          
          <button className="slider-arrow next" onClick={handleNext} aria-label="Next testimonial"><FaChevronRight /></button>
        </div>

        <div className="slider-dots">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;