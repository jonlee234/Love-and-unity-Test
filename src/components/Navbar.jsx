import React from 'react';

    function Navbar() {
      return (
        <nav className="navbar">
          <div className="container">
            <a href="/" className="logo">Love and Unity Entertainment</a>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      );
    }

    export default Navbar;
