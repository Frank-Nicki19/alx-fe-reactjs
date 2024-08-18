import React from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
  backgroundColor: '#333',
  padding: '1rem',
  color: 'white',
  textAlign: 'center'
};

const ulStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0
};

const liStyle = {
  display: 'inline',
  margin: '0 1rem'
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold'
};

function Navbar() {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}><Link to="/" style={linkStyle}>Home</Link></li>
        <li style={liStyle}><Link to="/about" style={linkStyle}>About</Link></li>
        <li style={liStyle}><Link to="/services" style={linkStyle}>Services</Link></li>
        <li style={liStyle}><Link to="/contact" style={linkStyle}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;