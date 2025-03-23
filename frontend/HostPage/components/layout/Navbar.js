import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">True<span className="logo-highlight">Pass</span></span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;