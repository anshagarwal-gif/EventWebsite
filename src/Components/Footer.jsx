import React from "react";
import "./Footer.css"; // Create a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <img
            src="/path-to-your-logo.png" // Replace with your logo path
            alt="Logo"
            className="footer-logo"
          />
          <p>Empowering memorable moments, one event at a time.</p>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <div className="footer-column">
            <h4>COMPANY</h4>
            <ul>
              <li>— About Us</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Blogs</li>
              <li>Book an Appointment</li>
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
              <li>Link 5</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <ul className="social-links">
            <li>
              <a href="#facebook">Facebook</a>
            </li>
            <li>
              <a href="#linkedin">LinkedIn</a>
            </li>
            <li>
              <a href="#twitter">Twitter</a>
            </li>
            <li>
              <a href="#instagram">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 - All Rights Reserved - Wadhwa Events and Exhibits</p>
      </div>
    </footer>
  );
};

export default Footer;
