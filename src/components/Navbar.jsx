import React from 'react';
    import { Link } from 'react-router-dom';

    function Navbar() {
      return (
        <nav className="navbar">
          <div className="container">
            <Link to="/" className="logo">Love and Unity Entertainment</Link>
            <ul className="nav-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
      );
    }

    export default Navbar;
