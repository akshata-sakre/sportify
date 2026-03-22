import React, { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! We’ll get back to you soon 💙');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Sportify</h1>
        <p>
          Questions, feedback, or just want to talk sports?  
          We’d love to hear from you.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-card">
          <h3>Send us a message</h3>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Send Message</button>
          </form>
        </div>

 
        <div className="contact-card info-card">
          <h3>Reach Us</h3>
          <p>
            Sportify is built for sports lovers who want clean,
            simple and reliable sports information.
          </p>

          <div className="info-list">
            <span>📧 support@sportify.com</span>
            <span>📞 +91 9876543210 </span>
            <span>📍 India</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
