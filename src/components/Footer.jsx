import React, { useState } from 'react';
import './Footer.css'; 

const Footer = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500); // Reset state after animation
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="contact-info">
          <p className="call-today-label">Call Today</p>
          <p className="phone-number">0930*****13</p>
        </div>

        <div className="location-info">
          <div className="location-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="map-pin">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <p className="address-text">
           DentalSpa 59, next to BSNL Office, in front of People's Academy School, New Bardwari, Sakchi, Jamshedpur, Jharkhand 831001
          </p>
        </div>

        <div className="virtual-appointment">
          <p className="virtual-label">Schedule a Virtual Appointment</p>
          <button className={`reserve-button ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
            Reserve a Slot
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;