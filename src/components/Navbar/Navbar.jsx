import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <Link to='/' onClick={() => { setMenu("Home"); setIsOpen(false); }} className={menu === "Home" ? "active" : ""}>Home</Link>
        <Link to='/Courses' onClick={() => { setMenu("Courses"); setIsOpen(false); }} className={menu === "Courses" ? "active" : ""}>Courses</Link>
        <Link to='/About' onClick={() => { setMenu("About Us"); setIsOpen(false); }} className={menu === "About Us" ? "active" : ""}>About Us</Link>
        <Link to='/Contact' onClick={() => { setMenu("Contact Us"); setIsOpen(false); }} className={menu === "Contact Us" ? "active" : ""}>Contact Us</Link>
      </div>
      
      <div className="navbar-right">
        <div className="hamburger" onClick={toggleMenu}>
          <img src={assets.hamburger} alt="Menu" />
        </div>
        <img src={assets.search_icon} alt="Search" />
        <button onClick={() => setShowLogin(true)}>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;

