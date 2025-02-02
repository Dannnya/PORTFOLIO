import React from 'react';
import { ContactForm } from '../components/ContactForm';
import '../scss/ContactPage.css';

export const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-section">
        <h1 className='title'>CONTACT</h1>
          <p className='main-text'>Have a project in mind or just want to connect? <br/> I'm always open to discussing new opportunities, collaborations, or exciting ideas in  web development. <br/>Let’s build something great together</p>
        <div className="contact-card">
          <div className="icon-container">
            <svg width="74" height="75" viewBox="0 0 74 75" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="37" cy="37.5" r="37" fill="#EAE112"/>
              <g clip-path="url(#clip0_53_442)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1451 14.4091C18.6846 13.8704 19.3324 13.4526 20.0456 13.1832C20.7589 12.9138 21.5212 12.799 22.2821 12.8466C23.043 12.8941 23.7852 13.1028 24.4593 13.4588C25.1335 13.8148 25.7243 14.3101 26.1926 14.9117L31.7272 22.0219C32.7416 23.3261 33.0992 25.025 32.6984 26.6284L31.0118 33.3809C30.9252 33.7307 30.9303 34.0968 31.0264 34.4441C31.1225 34.7914 31.3065 35.108 31.5607 35.3635L39.1364 42.9392C39.3922 43.1939 39.7093 43.3782 40.0572 43.4743C40.4051 43.5705 40.7719 43.5752 41.1221 43.4881L47.8715 41.8015C48.6628 41.6048 49.4884 41.59 50.2863 41.7582C51.0841 41.9264 51.8335 42.2733 52.478 42.7727L59.5882 48.3042C62.1443 50.293 62.3786 54.07 60.0908 56.3548L56.9026 59.543C54.6209 61.8246 51.2108 62.8267 48.0318 61.7075C39.8939 58.8479 32.5058 54.1895 26.4177 48.0791C20.3076 41.9919 15.6493 34.6049 12.7893 26.468C11.6732 23.2922 12.6752 19.879 14.9569 17.5973L18.1451 14.4091Z" fill="black"/>
              </g>
              <defs>
              <clipPath id="clip0_53_442">
              <rect width="49.3333" height="49.3333" fill="white" transform="translate(12.3335 12.8333)"/>
              </clipPath>
              </defs>
            </svg>

          </div>
          <p>CALL ME</p>
          <p><a href="tel: +38 068 017 2242">+38 068 017 2242</a></p>
        </div>
      </div>
      <div className="form-section">
        <h2 className='title'>GET IN TOUCH</h2>
        <ContactForm />
      </div>
    </div>
  );
};
