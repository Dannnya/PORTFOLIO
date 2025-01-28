import '../scss/ContactForm.scss';
export const ContactForm = () => {
  return (
    <form className="contact-form">
      <input type="text" placeholder="Name" className="form-input" />
      <input type="email" placeholder="Email" className="form-input" />
      <input type="text" placeholder="Subject" className="form-input" />
      <textarea placeholder="Message" className="form-textarea"></textarea>
          
      <button type="submit" className="form-button">Submit</button>
    </form>
  );
};
