import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Foodie</h2>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/foods">Foods</Link></li>
        <li><Link to="/orders">My Orders</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
