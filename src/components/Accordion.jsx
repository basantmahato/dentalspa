import React, { useState } from 'react';
import './Accordion.css';

// FAQ data is hardcoded as per the request
const faqItems = [
  {
    question: 'What dental services do you offer at DentalSpa?',
    answer: 'We offer a wide range of treatments like teeth cleaning, root canal treatment (RCT), dental implants, braces, tooth fillings, extractions, and general dental check-ups. Whether it\'s kids or adults, we provide care for all ages.',
  },
  {
    question: 'How do I book an appointment?',
    answer: 'You can book an appointment by calling our clinic at 8210377825, or by using the "Book Now" button on our website. You can also visit our clinic directly to schedule a consultation.',
  },
  {
    question: 'Is the root canal treatment painful?',
    answer: 'Modern root canal treatments are performed with local anesthesia, so the procedure is typically not painful. We use advanced techniques to ensure a comfortable and pain-free experience for our patients.',
  },
  {
    question: 'How often should I visit a dentist?',
    answer: 'It is generally recommended to visit a dentist for a routine check-up and cleaning every six months. Regular visits help in the early detection and prevention of dental issues.',
  },
  {
    question: 'Where is DentalSpa Dental Clinic located?',
    answer: ' We are located at , 59, next to BSNL Office, in front of Peoples Academy School, New Bardwari, Sakchi, Jamshedpur, Jharkhand 831001 ',
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      <h2 className="accordion-title">Have Some Questions?</h2>
      <div className="accordion-wrapper">
        {faqItems.map((item, index) => (
          <div key={index} className={`accordion-item ${openIndex === index ? 'open' : ''}`}>
            <div className="accordion-header" onClick={() => toggleAccordion(index)}>
              <span className="question">{item.question}</span>
              <span className="toggle-icon">
                {openIndex === index ? '—' : '+'}
              </span>
            </div>
            <div className="accordion-content">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;