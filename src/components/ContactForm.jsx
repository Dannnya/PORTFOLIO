import { useState } from 'react';
import '../scss/Contact/ContactForm.scss';
import { ToastContainer, toast } from "react-toastify";

export const ContactForm = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const displayMessage = () => {
    toast('Thank you for your feedback !', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    } );
  }
  
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
  };

  return (
    <form className="contact-form" autoComplete="off" onSubmit={handleSubmit}>
      <div className="container">
        <div className="input-row">
          <input
            type="text"
            placeholder="Name"
            className="form-input"
            onChange={handleChange}
            value={user}
            name="user"
          />
          <input
            type="email"
            placeholder="Email"
            className="form-input"
            onChange={handleChange}
            value={email}
            name="email"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="form-input"
          onChange={handleChange}
          value={subject}
          name="subject"
        />
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
        onClick={ displayMessage }
      >
        Submit
      </button>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </form>
  )
};