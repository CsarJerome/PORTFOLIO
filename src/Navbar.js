// Navbar.js
import React from 'react';

function Navbar({ activeSection }) {
  return (
    <header className="App-header">
      <a href='#' className="logo">Portfolio</a>

      <nav>
        <a href='#Home' className={activeSection === 'home' ? 'active' : ''}>Home</a>
        <a href='#About' className={activeSection === 'About' ? 'active' : ''}>About</a>
        <a href='#Certs' className={activeSection === 'Certs' ? 'active' : ''}>Homework</a>
        <a href='#Projects' className={activeSection === 'Projects' ? 'active' : ''}>Projects</a>
      </nav>
    </header>
  );
}

export default Navbar;
