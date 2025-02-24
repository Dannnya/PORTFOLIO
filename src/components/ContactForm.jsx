import { useState } from 'react'; 
import '../scss/Contact/ContactForm.scss'; 
import { ToastContainer, toast } from "react-toastify";
import { useForm } from 'react-hook-form';

export const ContactForm = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'onBlur'
  });

  const displayMessage = (name) => {
    toast(`Thank you ${ name } for your feedback !`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const onSubmit = (data) => {
    displayMessage(data.firstName);
    console.log((JSON.stringify(data)));
    reset();
  };
  
  const handleChange = e => {
    const { name, value } = e.target;
    
    switch (name) {
      case 'firstName':
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
    <form className="contact-form" autoComplete="off" onSubmit={ handleSubmit( onSubmit ) }>
      <div className="container">
        <div className="input-row">
          <input
            type="text"
            placeholder="Name"
            className="form-input"
            onChange={handleChange}
            // value= { user }
            name="firstName"
            {...register('firstName', { required: 'This is required field ', minLength: { value: 5, message: 'Minimum length is 5 symbols' } })}
          />
          <div style={{ color: "tomato" }}>
            {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
          </div>
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
      >
        Submit
      </button>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </form>
  )
};