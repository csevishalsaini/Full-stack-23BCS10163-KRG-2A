import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const containerStyle = {
    background: 'linear-gradient(135deg, #6b73ff 0%, #000dff 100%)',
    color: 'white',
    padding: '4rem 2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '70vh',
    fontFamily: "'Poppins', sans-serif",
  };

  const contentStyle = {
    maxWidth: '700px',
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '3rem 2rem',
    borderRadius: '15px',
    boxShadow: '0 8px 32px rgba(0, 13, 255, 0.3)',
    backdropFilter: 'blur(10px)',
    transition: 'transform 0.3s ease',
    cursor: 'default',
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const hoveredContentStyle = {
    ...contentStyle,
    transform: isHovered ? 'scale(1.03)' : 'scale(1)',
  };

  const titleStyle = {
    fontSize: '3rem',
    marginBottom: '1rem',
    fontWeight: 700,
    letterSpacing: '2px',
  };

  const textStyle = {
    fontSize: '1.25rem',
    lineHeight: 1.7,
    marginBottom: '1.5rem',
  };

  const highlightStyle = {
    color: '#ffdd57',
    fontWeight: 700,
    letterSpacing: '1px',
  };

  const buttonStyle = {
    background: '#ffdd57',
    border: 'none',
    padding: '0.8rem 2.5rem',
    borderRadius: '30px',
    fontSize: '1.1rem',
    fontWeight: 700,
    cursor: 'pointer',
    color: '#000dff',
    boxShadow: '0 4px 15px rgba(255, 221, 87, 0.5)',
    transition: 'background 0.3s ease, color 0.3s ease, boxShadow 0.3s ease',
  };

  const [buttonHover, setButtonHover] = React.useState(false);

  const hoveredButtonStyle = {
    ...buttonStyle,
    background: buttonHover ? '#fff' : '#ffdd57',
    color: '#000dff',
    boxShadow: buttonHover
      ? '0 6px 20px rgba(255, 221, 87, 0.8)'
      : '0 4px 15px rgba(255, 221, 87, 0.5)',
  };

  return (
    <section style={containerStyle}>
      <div
        style={hoveredContentStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1 style={titleStyle}>Who We Are</h1>
        <p style={textStyle}>
          At <span style={highlightStyle}>YourStore</span>, we believe shopping should be effortless,
          stylish, and fun. From exclusive collections to everyday essentials, we bring you quality
          products curated with passion.
        </p>
        <p style={textStyle}>
          Our mission? To make your shopping experience{' '}
          <span style={highlightStyle}>seamless</span> and
          <span style={highlightStyle}> unforgettable</span>. Dive into a world of style and convenience
          crafted just for you.
        </p>
        <button
          style={hoveredButtonStyle}
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
          onClick={() => navigate('/shop')}  // Redirects to shop page
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default About;
