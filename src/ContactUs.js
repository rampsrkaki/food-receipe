import React from 'react';


const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Reach out with questions, feedback, or recipe suggestions.</p>

      <div className="contact-info">
        <p><strong>📧 Email:</strong> support@foodieapp.com</p>
        <p><strong>📞 Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>📍 Address:</strong> 123 Culinary Street, Foodville, FL 32100</p>
      </div>

      <div className="contact-socials">
        <p>Follow us on:</p>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> | 
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </div>
  );
};

export default ContactUs;
