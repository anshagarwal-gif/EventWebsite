import React, { useState } from "react";
import "./Navbar.css";
import droplogo from '../assets/imagelogo.png'
import navbarBackground from '../assets/navbarimage.jpg'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar"  style={{
          backgroundImage: `url(${navbarBackground})`,
          backgroundSize:'cover'
          
          
        }}>
        
      
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>

      {/* Dropdown Menu */}
      <div className={`menu-container ${isOpen ? "open" : ""}`}>
        <div className="close-menu" onClick={toggleMenu}>
          &times;
        </div>
        <div className="dropdown-logo">
          <img
            src={droplogo} // Replace with your logo path
            alt="Dropdown Logo"
          />
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Aboutus">About Us</a>
          </li>
          <li>
            <a href="/WhatWeDo">What We Do</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#appointment">Events</a>
          </li>
          <li>
            <a href="#testimonial">Blogs</a>
          </li>
          <li>
            <a href="/News">News</a>
          </li>
          <li>
            <a href="/ContactUs">Contact Us</a>
          </li>

        </ul>
      </div>
    </>
  );
};

export default Navbar;
