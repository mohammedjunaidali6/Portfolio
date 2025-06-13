import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ scrollToSection, aboutRef, serviceRef, homeRef, myworkRef, contactRef }) => {


  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo"><Link to="#" onClick={() => { closeMenu(); scrollToSection(homeRef); }} id='logo'>Junaid Ali</Link></div>

      <div className={`navbar-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>

        <li><Link to="#" onClick={() => { closeMenu(); scrollToSection(aboutRef) }} >About Me</Link></li>
        <li><Link to="#" onClick={() => { closeMenu(); scrollToSection(serviceRef) }}>Services</Link></li>
        <li><Link to="#" onClick={() => { closeMenu(); scrollToSection(myworkRef) }}>My Work</Link></li>
        <li><Link to="#" onClick={() => { closeMenu(); scrollToSection(contactRef) }} >Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
