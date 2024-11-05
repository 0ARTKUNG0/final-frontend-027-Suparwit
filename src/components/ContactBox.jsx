import React from 'react';

const ContactBox = () => {
  return (
    <section className="contact-box" id="contact">
      <div className="contact-header">
        <h2>
          <span className="highlight">Subscribe</span> to our newsletter
        </h2>
      </div>
      <div className="contact-form">
        <input
          type="email"
          className="email-input"
          placeholder="Your Email Address"
          required
        />
        <button className="subscribe-button">
          Subscribe <i className="uil uil-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default ContactBox;
