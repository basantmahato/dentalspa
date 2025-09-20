import React from 'react';
import './MapComponent.css';

const MapComponent = () => {
  return (
    <div className="map-section-container">
      <h2 className="map-heading">Find Our Location</h2>
      <div className="map-responsive-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14710.38997515484!2d86.1968634027516!3d22.817373769086938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e3016f2cca9d%3A0x87ea86ead2076b46!2sDental%20Spa%20(Multi-Speciality%20Dental%20Clinic)!5e0!3m2!1sen!2sin!4v1758353288096!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </div>
    </div>
  );
};

export default MapComponent;