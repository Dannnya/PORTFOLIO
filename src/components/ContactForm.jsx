import { useState } from 'react'; 
import '../scss/Contact/ContactForm.scss'; 
import { ToastContainer, toast } from "react-toastify";
import { useForm } from 'react-hook-form';

export const ContactForm = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const { register, handleSubmit, formState: { errors }, reset, setValue, trigger } = useForm({
    mode: 'onBlur'
  });

   const [focusedField, setFocusedField] = useState(null);

    const [placeholders, setPlaceholders] = useState({
    firstName: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message'
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

  const handleBlur = async (name) => {
    const valid = await trigger(name);
    setFocusedField(null);
    if (!valid) {
      setValue(name, '');
      setPlaceholders(prev => ({
        ...prev,
        [name]: errors[name]?.message || 'This is requider field !'
      }));
    };
  };

  const handleFocus = (name, defaultPlaceholder) => {
    setFocusedField(name);
    setPlaceholders(prev => ({
      ...prev,
      [name]: defaultPlaceholder
    }));
  };


  const onSubmit = (data) => {
    displayMessage(data.firstName);
    console.log((JSON.stringify(data)));
    reset();
  };

  return (
    <form className="contact-form" autoComplete="off" onSubmit={ handleSubmit( onSubmit ) }>
      <div className="container">
        <div className="input-row">       
          <input
            type="text"
            className={`form-input ${errors.firstName && !focusedField ? 'error-placeholder' : ''}`}
            placeholder={placeholders.firstName}
            {...register('firstName', {
              required: 'This field is required',
              minLength: { value: 3, message: 'Minimum length is 3 symbols' }
            })}
            onBlur={() => handleBlur('firstName')}
            onFocus={() => handleFocus('firstName', 'Name')}
          />
          <input
            type="email"
            className={`form-input ${errors.email && !focusedField ? 'error-placeholder' : ''}`}
            placeholder={placeholders.email}
            {...register('email', { required: 'This field is required' })}
            onBlur={() => handleBlur('email')}
            onFocus={() => handleFocus('email', 'Email')}
          />
        </div>
        <input
          type="text"
          className={`form-input ${errors.subject && !focusedField ? 'error-placeholder' : ''}`}
          placeholder={placeholders.subject}
          {...register('subject', { required: 'This field is required' })}
          onBlur={() => handleBlur('subject')}
          onFocus={() => handleFocus('subject', 'Subject')}
        />
        <textarea
          className={`form-textarea ${errors.message && !focusedField ? 'error-placeholder' : ''}`}
          placeholder={placeholders.message}
          {...register('message', { required: 'This field is required' })}
          onBlur={() => handleBlur('message')}
          onFocus={() => handleFocus('message', 'Message')}
        />
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








            {/* <input
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
      </div> */}
};








