import React, { useState } from 'react';

import personaImage from '../assets/persona-image.png';
import eventImage2 from '../assets/FeaturedEvent2.jpg';
import eventImage3 from '../assets/FeaturedEvent3.jpg';
import eventImage4 from '../assets/FeaturedEvent4.jpg';
import '../Components/FeaturedEvents.css';

const FeaturedEvents = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="featured-events">
      <div className="feature-text">
        <h2 className="featured-title" style={{ fontFamily: 'Transcend' }}>FEATURED EVENTS !</h2>
        <p className="featured-description" style={{ fontFamily: 'Poppins' }}>
          Each event highlights our dedication to innovative design and flawless execution. Discover how we transform ordinary spaces into extraordinary experiences.
        </p>
        <a href="/events" className="explore-events" style={{ fontFamily: 'Poppins' }}>
          Explore Events <span className="arrow" >↗</span>
        </a>
      </div>
      <div className="featured-event-cards">
        <div
          className="featured-card"
          style={{
            backgroundImage: `url(${personaImage})`,
            width: hoveredCard === 0 ? '340px' : '101.33px',
            height: hoveredCard === 0 ? '379px' : '389px',
          }}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        > 
          <h2 style={{display: hoveredCard === 0 ? "block" : "none"}}>MIT ADT’S PERSONA</h2> 
          <p style={{display: hoveredCard === 0 ? "block" : "none"}}>Pune's biggest and most immersive technocultural fest.</p> 
        </div>

        <div
          className="featured-card"
          style={{
            backgroundImage: `url(${eventImage2})`,
            width: hoveredCard === 1 ? '340px' : '101.33px',
            height: hoveredCard === 1 ? '379px' : '389px',
          }}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        ><h2 style={{display: hoveredCard === 1 ? "block" : "none"}}>VISHWANATH SPORTS MEET</h2> 
          <p style={{display: hoveredCard === 1 ? "block" : "none"}}>Pune's biggest sports extravaganza, Vishwanath Sports Meet.</p> </div>
        <div
          className="featured-card"
          style={{
            backgroundImage: `url(${eventImage3})`,
            width: hoveredCard === 2 ? '340px' : '101.33px',
            height: hoveredCard === 2 ? '379px' : '389px',
          }}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        ><h2 style={{display: hoveredCard === 2 ? "block" : "none"}}>PRISTINE EVENT</h2> 
          <p style={{display: hoveredCard === 2 ? "block" : "none"}}>Pune's biggest and most immersive technocultural fest.</p> </div>
        <div
          className="featured-card-large"
          style={{
            backgroundImage: `url(${eventImage4})`,
            width: hoveredCard === null ? '340px' : '101.33px',
            height: hoveredCard === null ? '379px' : '389px',
            borderRadius: hoveredCard == null ? '20px' : '90px',
          }}
        ><h2 style={{display: hoveredCard === null ? "block" : "none"}}>SPECTRA</h2> 
          <p style={{display: hoveredCard === null ? "block" : "none"}}>Pune's biggest and most immersive technocultural fest.</p> </div>
      </div>
    </div>
  );
};

export default FeaturedEvents;
