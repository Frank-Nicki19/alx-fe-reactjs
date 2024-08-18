import React from 'react';

const homeStyle = {
  padding: '2rem',
  textAlign: 'center',
  backgroundColor: '#f4f4f4'
};

const titleStyle = {
  fontSize: '2rem',
  color: '#333'
};

function Home() {
    return (
      <div style={homeStyle}>
        <h1 style={titleStyle}>Welcome to Our Company</h1>
        <p>Your one-stop solution for all your business needs. We are committed to delivering excellence in every aspect of our work.</p>
        <p>We are dedicated to delivering excellence in all our services.</p>
      </div>
    );
  }
  
  export default Home;