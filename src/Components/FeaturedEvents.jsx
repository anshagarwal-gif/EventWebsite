import React, { useState } from 'react';

import eventImage1 from '../assets/FeaturedEvent1.jpg';
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
        <h2 className="featured-title" style={{ fontFamily: 'Transcend'}}>FEATURED EVENTS !</h2>
        <p className="featured-description" style={{ fontFamily: 'Poppins'}}>
          Each event highlights our dedication to innovative design and flawless execution. Discover how we transform ordinary spaces into extraordinary experiences.
        </p>
        <a href="/events" className="explore-events" style={{ fontFamily: 'Poppins'}}>
  Explore Events <span className="arrow" >↗</span>
</a>
      </div>
      <div className="featured-event-cards">
        <div
          className="featured-card"
          style={{
            backgroundImage: `url(${eventImage1})`,
            width: hoveredCard === 0 ? '340px' : '101.33px',
            height: hoveredCard === 0 ? '379px' : '389px',
          }}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        ></div>
        <div
          className="featured-card"
          style={{
            backgroundImage: `url(${eventImage2})`,
            width: hoveredCard === 1 ? '340px' : '101.33px',
            height: hoveredCard === 1 ? '379px' : '389px',
          }}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        ></div>
        <div
          className="featured-card"
          style={{
            backgroundImage: `url(${eventImage3})`,
            width: hoveredCard === 2 ? '340px' : '101.33px',
            height: hoveredCard === 2 ? '379px' : '389px',
          }}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        ></div>
        <div
          className="featured-card-large"
          style={{
            backgroundImage: `url(${eventImage4})`,
            width: hoveredCard === null ? '340px' : '101.33px',
            height: hoveredCard === null ? '379px' : '389px',
            borderRadius:hoveredCard==null? '20px':'90px',
          }}
        ></div>
      </div>
    </div>
  );
};

export default FeaturedEvents;
