import React, { useState, useEffect } from 'react';
import personaImage from '../assets/Featured Events/Persona.svg';
import eventImage2 from '../assets/Featured Events/VSM.svg';
import eventImage3 from '../assets/Featured Events/Pristine.svg';
import eventImage4 from '../assets/Featured Events/Spectra.svg';
import '../Components/FeaturedEvents.css';

const FeaturedEvents = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [cardSize, setCardSize] = useState({ width: 101.33, height: 389 });
  const cardCount = 4;

  // Dynamically adjust card size based on screen size
  useEffect(() => {
    const updateCardSize = () => {
      if (window.innerWidth <= 480) {
        setCardSize({ width: 50, height: 270 });
      } else if (window.innerWidth <= 768) {
        setCardSize({ width: 200, height: 300 });
      } else {
        setCardSize({ width: 101.33, height: 389 });
      }
    };

    updateCardSize();
    window.addEventListener('resize', updateCardSize);

    return () => window.removeEventListener('resize', updateCardSize);
  }, []);

  // Automatic card expansion at intervals
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prev) => (prev === cardCount - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="featured-events">
      <div className="feature-text">
        <h2 className="featured-title" style={{ fontFamily: 'Transcend' }}>
          FEATURED EVENTS !
        </h2>
        <p className="featured-description" style={{ fontFamily: 'Poppins' }}>
          Each event highlights our dedication to innovative design and flawless execution. 
          Discover how we transform ordinary spaces into extraordinary experiences.
        </p>
        <a href="/events" className="explore-events" style={{ fontFamily: 'Poppins' }}>
          Explore Events <span className="arrow">↗</span>
        </a>
      </div>
      <div className="featured-event-cards">
        {[personaImage, eventImage2, eventImage3, eventImage4].map((image, index) => (
          <div
            key={index}
            className={`featured-card ${activeCard === index ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${image})`,
              width: activeCard === index ? `${cardSize.width + 260}px` : `${cardSize.width}px`,
              height: activeCard === index ? `${cardSize.height - 10}px` : `${cardSize.height}px`,
              borderRadius: activeCard === index ? '20px' : '50px',
              transition: 'all 0.5s ease-in-out'
            }}
          >
            {activeCard === index && (
              <div className="card-content">
                <h2>{["MIT ADT'S PERSONA", "VISHWANATH SPORTS MEET", "PRISTINE EVENT", "SPECTRA"][index]}</h2>
                <p>
                  {[
                    "Pune's biggest and most immersive technocultural fest.",
                    "Pune's biggest sports extravaganza, Vishwanath Sports Meet.",
                    "Pune's biggest and most immersive technocultural fest.",
                    "Pune's biggest and most immersive technocultural fest.",
                  ][index]}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedEvents;