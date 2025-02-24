import React from 'react';
import { ContactForm } from '../components/ContactForm';
import '../scss/Contact/ContactPage.scss';
import phone from '../assets/phone.svg';

export const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-section">
        <h1 className='title'>CONTACT</h1>
        <p className='main-text'>
          Have a project in mind or just want to connect? <br /> 
          I'm always open to discussing new opportunities, collaborations, or exciting ideas in  web development. <br />
          Let’s build something great together ! 
        </p>
        <div className="contact-card">
          <div className="icon-container">
            <a href="tel: +38 068 017 2242">
              <img src={phone} alt='phone' />
            </a>
          </div>
          <p>CALL ME</p>
          <p>+38 068 017 2242</p>
        </div>
      </div>
      <div className="form-section">
        <h2 className='title'>GET IN TOUCH</h2>
        <ContactForm />
      </div>
    </div>
  );
};
