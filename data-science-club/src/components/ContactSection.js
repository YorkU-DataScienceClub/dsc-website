// src/components/ContactSection.js
import React from 'react';

function ContactSection() {
  return (
    <section id="contact" className="about-section">
      <h2>Contact Us</h2>
      <div className="container">
        <form className="contact-form">
          <input type="text" className="form-control mb-3" placeholder="Your Name" required />
          <input type="email" className="form-control mb-3" placeholder="Your Email" required />
          <textarea className="form-control mb-3" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary btn-lg w-100">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
