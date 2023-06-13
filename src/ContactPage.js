import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the form data to the server or perform any desired action
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <div className="thank-you-message">Thank you! Your message has been sent.</div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={handleEmailChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" value={message} onChange={handleMessageChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;


