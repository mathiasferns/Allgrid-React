import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';

// Assuming your assets are in an 'assets' folder relative to 'src'
import logo from '../assets/logo.png'; 
import ukFlag from '../assets/logo.png'; 

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="header-logo-link">
          <img src={logo} alt="Allgrid Logo" className="header-logo" />
        </a>
        
        <nav className="header-nav">
          <a href="#product">Our Product</a>
          <Link to="/about">About us</Link>
          <a href="#news">Latest News</a>
          <a href="#contact">Contact</a>
        </nav>
        
        <div className="header-actions">
          <div className="language-selector">
            <img src={ukFlag} alt="UK Flag" className="language-flag" />
            <span>EN</span>
            <FaAngleDown color="#fff" size="14px" />
          </div>
          <button className="btn-reseller">Become a reseller</button>
        </div>
      </div>
    </header>
  );
};

export default Header;