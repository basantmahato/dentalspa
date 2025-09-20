import React from 'react';
import './BookingCard.css';

const BookingCard = () => {
  return (
    <div className="booking-card-container">
      <div className="booking-card-content">
        <div className="text-section">
          <p className="subtitle">YOUR SMILE,</p>
          <h1 className="title">The Best Dental Care in Jamshedpur</h1>
        </div>
        <div className="cta-section">
          <p className="description">
            Expert dental services tailored to maintain your beautiful smile in a comfortable environment.
          </p>
          <button className="book-now-button">
            Book Now 📞
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;