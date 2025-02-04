import { useState } from 'react';
import '../scss/ContactForm.scss';
export const ContactForm = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  const handleChange = e => {
    const { name, value } = e.target;
    
    switch (name) {
      case 'user':
        setUser(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'subject':
        setSubject(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        return;
    }
  }

  return (
    <form className="contact-form" autoComplete="off" onSubmit={ handleSubmit }>
      <div className="container">
        <div className="input-row">
          <input
            type="text"
            placeholder="Name"
            className="form-input"
            onChange={handleChange}
            value={user}
            name="user" />
          <input
            type="email"
            placeholder="Email"
            className="form-input"
            onChange={handleChange}
            value={email}
            name="email" />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="form-input"
          onChange={handleChange}
          value={subject}
          name="subject" />
        <textarea
          placeholder="Message"
          className="form-textarea"
          onChange={handleChange}
          value={message}
          name="message" >
          </textarea>
      </div>
        <button
          type="submit"
          className="form-button"
          >
          Submit
        </button>
    </form>
  );
};