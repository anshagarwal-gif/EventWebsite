import React, { useState, useEffect } from "react";
import "./Navbar.css";
import droplogo from '../assets/imagelogo.png';
import NavbarImage from "../assets/navbarimage.jpg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const currentPath = window.location.pathname

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavbarBackgroundStyle = {
    // backgroundImage: `url(${NavbarImage})`,
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    backgroundColor: "black",
    position: "static"
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} style={currentPath !== "/" ? NavbarBackgroundStyle : {}}
      >
        <div className="logo-container">
          <img src={droplogo} alt="Logo" className={`logo ${(isScrolled) ? "small" : ""} ${currentPath != "/" ? "normalLogoSize" : ''}`} />
        </div>

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
          <img src={droplogo} alt="Dropdown Logo" />
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/Aboutus">About Us</a></li>
          <li><a href="/WhatWeDo">What We Do</a></li>
          <li><a href="/Portfolio">Portfolio</a></li>
          <li><a href="/Events">Events</a></li>
          <li><a href="/blog  ">Blogs</a></li>
          <li><a href="/News">News</a></li>
          <li><a href="/ContactUs">Contact Us</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
