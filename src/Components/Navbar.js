import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional, for specific Navbar styles

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo">
            <img src="logo.png" alt="Logo" />
          </div>
          <a href="#delivery" id="delivery-link">Delivery to Chennai</a>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <button type="button">Search</button>
        </div>
        <div className="nav-right">
          <Link to="/Profile" className="nav-btn">Profile</Link>
          <Link to="/Signup" className="nav-btn">Sign Up</Link>
          <Link to="/Return-order" className="nav-btn">Return Order</Link>
          <Link to="/Cart" className="nav-btn">Cart</Link>
        </div>
      </nav>
      <nav className="second-navbar">
        <Link to="/all" className="nav-item">All </Link>
        <Link to="/product/Erasers" className="nav-item">Erasers</Link>
        <Link to="/product/Pastels" className="nav-item">Pastels</Link>
        <Link to="/product/Paper" className="nav-item">Paper</Link>
        <Link to="/product/Sketches" className="nav-item">Sketches</Link>
        <Link to="/product/Pen & Pencil" className="nav-item">Pen & Pencil</Link>
        <Link to="/product/Paint" className="nav-item">Paint</Link>
      </nav>
    </header>
  );
}

export default Navbar;