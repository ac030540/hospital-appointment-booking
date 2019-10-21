import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
    <div className="brandname">
      <Link to="/"style={{ textDecoration: 'none', color: 'white' }}>Appointment Booker</Link>
    </div>
  </div>
);

export default Navbar;
