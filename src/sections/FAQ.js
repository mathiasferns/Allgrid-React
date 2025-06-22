import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

import './FAQ.css';


const faqData = [
    { question: 'How do I use this?', answer: 'This is a great product! You just need to follow the 4 simple steps: Position, Mark, Transfer, and Cut. Watch our demo for a visual guide.' },
    { question: 'How easy is it use? Can a first time user be able to use this?', answer: "I recently picked up the Allgrid, and I have to say, it's been a game changer for my DIY projects. Using it is super simple—just point and measure! The accuracy surprised me; it gave me the exact measurements I needed for hanging shelves and frames around the house." },
    { question: 'Is this tool very expensive?', answer: 'Considering the time it saves and the reduction in material waste, the Allgrid provides excellent value for money for both professionals and DIY enthusiasts.' },
    { question: 'Can you ship to America?', answer: 'Yes, we ship worldwide! Shipping costs and times will vary depending on your location. Please proceed to checkout to see the options for your address.' },
    { question: 'How can I purchase this product?', answer: 'You can purchase the Allgrid directly from our website. Just click the "Buy Now" button to add it to your cart and proceed to checkout.' },
];

const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={onClick} aria-expanded={isOpen}>
        <h3 className="faq-question-text">{item.question}</h3>
        <FaChevronDown className="faq-icon" />
      </button>
      <div className="faq-answer-container">
        <div className="faq-answer-content">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const handleToggle = (index) => {
    // If the clicked item is already open, close it. Otherwise, open it.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">FAQ</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;