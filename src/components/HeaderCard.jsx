import React from 'react';
import './HeaderCard.css';

const HeaderCard = () => {
  return (
    <div className="header-card">
      <div className="header-card-content">
        <p className="address">
          DentalSpa 59, next to BSNL Office, in front of People's Academy School, New Bardwari, Sakchi, Jamshedpur, Jharkhand 831001
        </p>
        <p className="phone">
          <span className="phone-label">Call Us Today</span>{' '}
          <span className="phone-number">0930*****13</span>
        </p>
      </div>
    </div>
  );
};

export default HeaderCard;