// import { useState } from 'react';
import '../scss/ContactForm.scss';
export const ContactForm = () => {
  // const [user, setUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="container">
        <div className="input-row">
          <input type="text" placeholder="Name" className="form-input" />
          <input type="email" placeholder="Email" className="form-input" />
        </div>
        <input type="text" placeholder="Subject" className="form-input" />
        <textarea placeholder="Message" className="form-textarea"></textarea>
      </div>
      <button type="submit" className="form-button">Submit</button>
    </form>
  );
};