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
              <li className="active-link">About Us</li>
              <li>Work</li>
              <li>Services</li>
              <li>Careers</li>
              <li>Link 5</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>CONTACT</h4>
            <ul>
              <li>Book Appointment</li>
              <li>Link 2</li>
              <li>Link 3</li>
              <li>Link 4</li>
              <li>Link 5</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>SECTION 3</h4>
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
              <li>Link 4</li>
              <li>Link 4</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <ul className="social-links">
            <li>
              <a href="#facebook" className="social-button facebook">
                <div><Facebook/></div> Facebook
              </a>
            </li>
            <li>
              <a href="#linkedin" className="social-button linkedin">
                <div><Linkedin /></div> LinkedIn
              </a>
            </li>
            <li>
              <a href="#twitter" className="social-button twitter">
                <div><Twitter /></div> Twitter
              </a>
            </li>
            <li>
              <a href="#instagram" className="social-button instagram">
                <div><Instagram /></div> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>© 2024 - All Rights Reserved - Wadhwa Events and Exhibits</p>
      </div>
    </footer>
  );
};

export default Footer;