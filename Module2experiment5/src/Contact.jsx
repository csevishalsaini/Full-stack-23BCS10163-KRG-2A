import React, { useState } from 'react';

const Contact = () => {
  const containerStyle = {
    background: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
    color: 'white',
    padding: '4rem 2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '70vh',
    fontFamily: "'Poppins', sans-serif",
  };

  const formStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '3rem 2rem',
    borderRadius: '15px',
    boxShadow: '0 8px 32px rgba(0, 114, 255, 0.3)',
    maxWidth: '600px',
    width: '100%',
    backdropFilter: 'blur(10px)',
  };

  const titleStyle = {
    fontSize: '2.8rem',
    marginBottom: '1.5rem',
    fontWeight: 700,
    letterSpacing: '2px',
    textAlign: 'center',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '600',
    fontSize: '1rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    marginBottom: '1.5rem',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1rem',
  };

  const textareaStyle = {
    ...inputStyle,
    height: '120px',
    resize: 'vertical',
  };

  const buttonStyle = {
    background: '#ffdd57',
    border: 'none',
    padding: '1rem 3rem',
    borderRadius: '30px',
    fontSize: '1.1rem',
    fontWeight: 700,
    cursor: 'pointer',
    color: '#000dff',
    boxShadow: '0 4px 15px rgba(255, 221, 87, 0.5)',
    transition: 'background 0.3s ease, color 0.3s ease',
    display: 'block',
    margin: '0 auto',
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now just simulate submission success
    setSubmitted(true);

    // Reset form data (optional)
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={titleStyle}>Contact Us</h2>

        <label style={labelStyle} htmlFor="name">Name</label>
        <input
          style={inputStyle}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          required
        />

        <label style={labelStyle} htmlFor="email">Email</label>
        <input
          style={inputStyle}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />

        <label style={labelStyle} htmlFor="message">Message</label>
        <textarea
          style={textareaStyle}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          required
        />

        <button type="submit" style={buttonStyle}>Send Message</button>

        {submitted && (
          <p style={{ textAlign: 'center', marginTop: '1rem', color: '#ffdd57', fontWeight: '600' }}>
            Thanks for reaching out! We'll get back to you soon.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
