import React, { useEffect, useState } from "react";
import "./ScrollTransition.css";
import handshake from "../assets/scrollhand.png";
import logo from "../assets/imagescroll.png";

const ScrollTransition = () => {
  const [scrolled, setScrolled] = useState(false);
  const [inView, setInView] = useState(true);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const threshold = viewportHeight / 2;

    // Determine if the user has scrolled into the section
    const sectionTop = document.querySelector(".scroll-transition")?.offsetTop || 0;
    const sectionBottom = sectionTop + viewportHeight;

    setInView(scrollY >= sectionTop && scrollY <= sectionBottom);
    setScrolled(scrollY >= sectionTop + threshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`scroll-transition ${scrolled ? "scrolled" : ""} ${
        inView ? "" : "not-in-view"
      }`}
    >
      {/* Hero Content */}
      <div className={`hero-content ${scrolled ? "moved-up" : ""}`}>
        <h1 className="hero-title">ADAPT FOR SUPERIOR OUTCOMES</h1>
        <p className="hero-description">
          Wadhwa Events and Exhibits enhances your event experience by offering AI-generated
          options for decorations and event layouts. With our innovative AI technology, you can
          visualize stunning event designs and select the perfect look to make your event
          unforgettable. Partner with us to transform your vision into a reality with the power
          of AI.
        </p>
      </div>

      {/* Handshake Image */}
      <img src={handshake} alt="Handshake" className="handshake-image" />

      {/* Logo Image */}
      <img src={logo} alt="Logo" className="logo-image" />

      {/* Explore Button */}
      <a href="/explore" className="explore-button" style={{ fontFamily: 'Poppins'}}>
        Explore AI <span className="arrow">↗</span>
      </a>
    </div>
  );
};

export default ScrollTransition;
