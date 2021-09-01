import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h3>LOGO</h3>
      <ul classname="nav-links">
        <Link to="/About">
          <li>About</li>
        </Link>
        <Link to="/Shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
