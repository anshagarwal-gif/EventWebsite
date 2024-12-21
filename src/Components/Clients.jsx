import React, { useEffect, useState } from 'react';
import '../Components/Clients.css';
import logo1 from '../assets/client1.png';
import logo2 from '../assets/client2.png';
import logo3 from '../assets/client3.png';
import logo4 from '../assets/client4.png';
import logo5 from '../assets/client5.png';
import logo6 from '../assets/client6.png';
import logo7 from '../assets/client7.png';
import logo8 from '../assets/client8.png';
import logo9 from '../assets/client9.png';
import logo10 from '../assets/client10.png';
import logo11 from '../assets/client11.png';
import logo12 from '../assets/client12.png';
import logo13 from '../assets/client13.png';
import logo14 from '../assets/client14.png';
import logo15 from '../assets/client15.png';
import logo16 from '../assets/client16.png';
import logo17 from '../assets/client17.png';
import logo18 from '../assets/client18.png';


const Clients = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9,
  logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18,
  ];

  const [activeLogos, setActiveLogos] = useState(() =>
    Array(9)
      .fill(0)
      .map((_, i) => ({ front: logos[i * 2], back: logos[i * 2 + 1] }))
  ); // Initialize 9 cards with unique front and back logos
  const [flipped, setFlipped] = useState(Array(9).fill(false)); // Flipped state for each card

  useEffect(() => {
    const intervals = activeLogos.map((_, index) => {
      return setInterval(() => {
        setFlipped((prev) => prev.map((flip, i) => (i === index ? !flip : flip))); // Toggle flip state
      }, 3000 + Math.random() * 2000); // Randomize interval
    });

    return () => intervals.forEach(clearInterval); // Clear intervals on unmount
  }, []);
  return (
    <div className="clients-section">
      <div className="clients-text">
        <h1 className="clients-title">OUR CLIENTS</h1>
        <p className="clients-subtitle">
          Our clients range from startups, educational institutes to global leaders, and we take pride in delivering exceptional events tailored to their unique visions, showcasing creativity, precision, and excellence.
        </p>
      </div>
      <div className="clients-grid">
      {activeLogos.map((logoPair, index) => (
        <div
          key={index}
          className={`client-item ${flipped[index] ? 'flipped' : ''}`}
        >
          <div className="card-inner">
            <div className="card-front">
              <img src={logoPair.front} alt={`Client Logo Front ${index}`} className="client-logo" />
            </div>
            <div className="card-back">
              <img src={logoPair.back} alt={`Client Logo Back ${index}`} className="client-logo" />
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Clients;
