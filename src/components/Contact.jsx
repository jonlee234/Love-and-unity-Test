import React, { useState } from 'react';

    function Contact({ onFormSubmit }) {
      const [name, setName] = useState('');
      const [phone, setPhone] = useState('');
      const [email, setEmail] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit();
        setName('');
        setPhone('');
        setEmail('');
      };

      return (
        <section id="contact" className="page">
          <div className="container">
            <h2 className="page-headline">Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                className="contact-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="contact-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="contact-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="hero-button">
                Submit
              </button>
            </form>
          </div>
        </section>
      );
    }

    export default Contact;
