import React, { useState } from 'react';
import './Footer.css'; 
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

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
          <p className="call-today-label">Call Today
            <p className="">0930*****13</p>
          </p>
          
        </div>

        <div className="location-info">
          <div className="location-icon">

                <FaMapMarkerAlt className="info-icon" />
            
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