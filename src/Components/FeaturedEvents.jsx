import React, { useState, useEffect } from 'react';

import personaImage from '../assets/persona-image.png';
import eventImage2 from '../assets/FeaturedEvent2.jpg';
import eventImage3 from '../assets/FeaturedEvent3.jpg';
import eventImage4 from '../assets/FeaturedEvent4.jpg';
import '../Components/FeaturedEvents.css';

const FeaturedEvents = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cardSize, setCardSize] = useState({ width: 101.33, height: 389 }); // Default size for desktop
  const cardCount = 4; // Number of cards

  // Dynamically adjust card size based on screen size
  useEffect(() => {
    const updateCardSize = () => {
      if (window.innerWidth <= 480) {
        setCardSize({ width: 50, height: 270}); // Size for small screens
      } else if (window.innerWidth <= 768) {
        setCardSize({ width: 200, height: 300 }); // Size for medium screens
      } else {
        setCardSize({ width: 101.33, height: 389 }); // Default size for larger screens
      }
    };

    // Set initial size and listen for window resize
    updateCardSize();
    window.addEventListener('resize', updateCardSize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', updateCardSize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setHoveredCard((prev) => (prev === cardCount - 1 ? 0 : prev + 1));
    }, 2000); // Change card every 2 seconds

    return () => clearInterval(timer); // Cleanup the interval on unmount
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="featured-events">
      <div className="feature-text">
        <h2 className="featured-title" style={{ fontFamily: 'Transcend' }}>
          FEATURED EVENTS !
        </h2>
        <p className="featured-description" style={{ fontFamily: 'Poppins' }}>
          Each event highlights our dedication to innovative design and flawless execution. Discover how we transform ordinary spaces into extraordinary experiences.
        </p>
        <a href="/events" className="explore-events" style={{ fontFamily: 'Poppins' }}>
          Explore Events <span className="arrow">↗</span>
        </a>
      </div>
      <div className="featured-event-cards">
        {[personaImage, eventImage2, eventImage3, eventImage4].map((image, index) => (
          <div
            key={index}
            className={`featured-card ${hoveredCard === index ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${image})`,
              width: hoveredCard === index ? `${cardSize.width + 260}px` : `${cardSize.width}px`,
              height: hoveredCard === index ? `${cardSize.height - 10}px` : `${cardSize.height}px`, // Dynamic height
              borderRadius: hoveredCard === index ? '20px' : '50px', // Rounded corners for hover
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {hoveredCard === index && (
              <>
                <h2>{["MIT ADT’S PERSONA", "VISHWANATH SPORTS MEET", "PRISTINE EVENT", "SPECTRA"][index]}</h2>
                <p>
                  {[
                    "Pune's biggest and most immersive technocultural fest.",
                    "Pune's biggest sports extravaganza, Vishwanath Sports Meet.",
                    "Pune's biggest and most immersive technocultural fest.",
                    "Pune's biggest and most immersive technocultural fest.",
                  ][index]}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedEvents;
