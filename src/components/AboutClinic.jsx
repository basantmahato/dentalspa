import React from 'react';
import './AboutClinic.css';

const AboutClinic = () => {
  const clinicImage = './clinic.jpg';

  return (
    <div className="about-clinic-section">
      <div className="clinic-text-content">
        <h2 className="clinic-name-title">Dental Spa Dental Clinic</h2>
        <p>
          <strong>Dental Spa Dental Clinic</strong> is one of the most advanced dental clinics in
          Jamshedpur that caters to all dental related problems. Our Moto is to provide the best dental treatments at affordable
          prices to the community.
        </p>
        <p>
          We maintain very high standards of sterilisation and quality of
          dentistry. Spreading miles of smiles is our daily mantra and we
          have successfully achieved our goal in hundreds of happy
          patients.
        </p>
        <p>
          Dr. Praveen is the managing director at Sental Spa Dental Clinic. She has an experience of over 12 years. Dr. Praveen specializes in
          Root canal Treatment, Full mouth Rehabs and Cosmetic
          dentistry.
        </p>
        <p>
          She did her Bachelor of Dental Surgery from a prestigious university and has a commitment to providing quality dental care to all her patients.
        </p>
      </div>

      <div className="clinic-image-gallery">
        <div className="gallery-main-image-container">
          <img src={clinicImage} alt="Dr. Kumari Anjali working with a patient" className="gallery-main-image" />
        </div>
      </div>
    </div>
  );
};

export default AboutClinic;