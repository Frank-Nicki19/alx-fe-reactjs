
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to the React Router Advanced Demo</h1>
      <p>This is the Home Page. Use the navigation links below to explore the application.</p>
      <nav style={{ marginTop: '20px' }}>
        <Link to="/profile" style={{ margin: '0 10px' }}>
          Go to Profile
        </Link>
        <Link to="/blog/1" style={{ margin: '0 10px' }}>
          View Blog Post 1
        </Link>
        <Link to="/login" style={{ margin: '0 10px' }}>
          Login
        </Link>
      </nav>
    </div>
  );
};

export default Home;
