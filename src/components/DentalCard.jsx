import React from 'react';
import './DentalCard.css'; 

const DentalCard = () => {
//   const imageUrl = demoImage;
  const name = 'Dr. Praveen Pal';
  const title = 'Dental Surgeon (BDS)';
  const clinicName = 'Smile Zone Dental Clinic';
  const aboutText = {
    title: 'Discover the Trusted Team Behind Smile Zone Dental Clinic',
    description:
      'At Smile Zone Dental Clinic, Dr. Kumari Anjali and her skilled team provide exceptional dental care, ensuring patient comfort and satisfaction.',
    link: '#',
  };

  return (
    <div className="dental-card">
      <div className="card-image-container">
        <img src="/drpf.jpg" alt={name} className="card-image" />
        <div className="card-overlay">
          <h2 className="doctor-name">{name}</h2>
          <p className="doctor-title">{title}</p>
          <p className="clinic-name">{clinicName}</p>
        </div>
      </div>
      <div className="card-content">
        <div className="about-us-heading">ABOUT US</div>
        <h3>{aboutText.title}</h3>
        <p>{aboutText.description}</p>
        <a href={aboutText.link} className="read-more-button">
          READ MORE
        </a>
      </div>
    </div>
  );
};

export default DentalCard;