import React from 'react';

const aboutStyle = {
  padding: '2rem',
  textAlign: 'center',
  backgroundColor: '#e0e0e0'
};

const titleStyle = {
  fontSize: '2rem',
  color: '#333'
};

function About() {
    return (
      <div style={aboutStyle}>
        <h1 style={titleStyle}>About Us</h1>
        <p>At our Company, we pride ourselves on providing top-notch services and solutions. Founded in 1990, we have quickly established ourselves as a leader in the industry, driven by innovation and a commitment to excellence.</p>
        <p>Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.</p>
      </div>
    );
  }
  
  export default About;