import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/recipes">Recipes</Link>
      <Link to="/add-recipe">Add Recipe</Link>
    </nav>
  );
};

export default Navbar;
