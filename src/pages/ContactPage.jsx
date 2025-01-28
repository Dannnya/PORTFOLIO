import React from 'react';
import { ContactForm } from '../components/ContactForm';
import '../scss/ContactPage.css';

export const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-section">
        <h1 className='title'>CONTACT</h1>
          <p className='main-text'>Lorem ipsum dolor sit amet consectetur. Eget turpis nulla dignissim integer. <br/>Quis tempus est quis sapien. Odio neque lectus posuere orci. Turpis quis amet euismod vel scelerisque scelerisque.</p>
        <div className="contact-card">
          <div className="icon-container">
            <img src="phone-icon.png" alt="Phone Icon" className="icon" />
          </div>
          <p>CALL ME</p>
          <p>1224-567-8990</p>
        </div>
      </div>
      <div className="form-section">
        <h2 className='title'>GET IN TOUCH</h2>
        <ContactForm />
      </div>
    </div>
  );
};
