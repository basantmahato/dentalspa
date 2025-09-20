import React from 'react';
import './Services.css';

// Service data is hardcoded into the component as per the request.
const servicesData = [
  {
    image: '/cr1.webp',
    title: 'Root Canal Treatment',
    description: 'Teeth that might normally have to be pulled can be saved by root canal therapy. It entails extracting pus and injured or dead nerve tissues from the diseased teeth\'s root canals. The root canal is prepped so that it can be sealed with a filling by removing any diseased or dead tissue and cleaning and disinfecting the remaining canal area.',
  },
  {
    image: './cr2.avif',
    title: 'Dental Implants',
    description: 'An oral implantologist inserts a dental implant, which is a synthetic tooth root, into your jaw to support a bridge or replacement tooth. For those in good overall oral health who have lost a tooth or teeth as a result of an accident or for any other cause, dental implants are a great alternative.',
  },
  {
    image: './cr3.avif',
    title: 'Orthodontics & Braces',
    description: 'Orthodontic tools including as metal braces, ceramic (tooth-colored) braces, lingual braces, and clear path (invisalign or invisible braces) are used to rectify common issues.',
  },
  {
    image: './cr4.avif',
    title: 'Teeth Whitening',
    description: 'A procedure used to lighten the shade of a person\'s teeth and remove stains. It is a popular cosmetic dental procedure to improve the appearance of teeth and provide a brighter smile.',
  },
  {
    image: './cr5.avif',
    title: 'Pediatric Dentistry',
    description: 'Specialized dental care for infants, children, and adolescents. This includes preventive care, education on oral hygiene, and treatment of common dental problems in young patients.',
  },
  {
    image: './cr6.avif',
    title: 'General Check-up & Cleaning',
    description: 'Regular dental check-ups are essential for maintaining good oral health. Our thorough examination and professional cleaning help to detect and prevent dental issues early on, keeping your smile healthy.',
  },
];

const Services = () => {
  return (
    <div className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-card-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="card-image-wrapper">
              <img src={service.image} alt={service.title} className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;