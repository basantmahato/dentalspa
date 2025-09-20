import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'menu-open' : ''}`}>
      {/* New container for the top row elements (logo and toggle) */}
      <div className="navbar-header-mobile">
        <div className="navbar-brand">
          <div className="logo-container">
            <div className="logo-icon">
              <img src="/logo2.png" alt="Dental Spa Logo" />
            </div>
            <div className="clinic-text">
              <h1 className="clinic-name">DENTAL SPA</h1>
              <p className="dental-clinic-tag">Implants | Orthodontics | Dentistry</p>
            </div>
          </div>
          <div className="doctor-info">
            Dr. Praveen Pal
          </div>
        </div>

        <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-expanded={isOpen} aria-label="Toggle navigation">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;