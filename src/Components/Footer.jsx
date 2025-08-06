import React from "react";
import "./Footer.css";
import LogoImage from "../assets/imagelogo.png";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <img
            src={LogoImage}
            alt="Logo"
            className="footer-logo"
          />
          <p>Creativity For Eternity</p>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <div className="footer-column">
            <h4>COMPANY</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/Aboutus">About Us</a></li>
              <li><a href="/WhatWeDo">What We Do</a></li>
              <li><a href="/Portfolio">Portfolio</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>SERVICES</h4>
            <ul>
              <li><a href="/Events">Events</a></li>
              <li><a href="/blog">Blogs</a></li>
              <li><a href="/News">News</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>CONTACT</h4>
            <ul>
              <li><a href="/Contactus">Contact Us</a></li>
              <li><a href="/Contactus">Book Appointment</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <ul className="social-links">
            <li>
              <a href="https://www.facebook.com/TheWadhwaGroup/events/" target="_blank" rel="noopener noreferrer" className="social-button facebook">
                <div><Facebook/></div> Facebook
              </a>
            </li>
            <li>
              <a href="https://in.linkedin.com/company/wadhwaeventsandexhibits" target="_blank" rel="noopener noreferrer" className="social-button linkedin">
                <div><Linkedin /></div> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/wadhwa_events_/" className="social-button instagram" target="_blank" rel="noopener noreferrer">
                <div><Instagram /></div> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>© 2025 - All Rights Reserved - Wadhwa Events and Exhibits</p>
      </div>
    </footer>
  );
};

export default Footer;