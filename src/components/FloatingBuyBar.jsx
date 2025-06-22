import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import './Footer.css'; // We can reuse the same CSS file for simplicity

const FloatingBuyBar = () => {
  return (
    <div className="floating-buy-bar">
      <div className="price-section">
        <span className="price-amount">$200.00</span>
        <BsInfoCircleFill className="info-icon" />
      </div>
      <button className="buy-now-button">Buy Now</button>
    </div>
  );
};

export default FloatingBuyBar;