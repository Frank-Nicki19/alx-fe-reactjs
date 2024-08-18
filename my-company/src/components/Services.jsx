import React from 'react';

const servicesStyle = {
  padding: '2rem',
  textAlign: 'center',
  backgroundColor: '#d0d0d0'
};

const titleStyle = {
  fontSize: '2rem',
  color: '#333'
};

function Services() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Our Services</h1>
        <ul>
          <li>Technology Consulting</li>
          <li>Market Analysis</li>
          <li>Product Development</li>
          <li>Consulting</li>
        <li>Web Development</li>
        <li>Marketing Solutions</li>
        <li>Project Management</li>
        </ul>
      </div>
    );
  }

  export default Services;