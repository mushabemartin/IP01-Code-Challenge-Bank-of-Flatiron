/* NavBar.js */

import React from 'react';
import './index.css'; // Import the CSS file for styling

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">Bank of Flatiron</div>
      <ul className="nav-links">
        <li className="nav-link">Home</li>
        <li className="nav-link">Transactions</li>
        <li className="nav-link">About</li>
      </ul>
    </nav>
  );
}

export default NavBar;
