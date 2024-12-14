import React, { useEffect, useState } from 'react';
import './home.css';
import image1 from '../assets/count1.jpg';
import image2 from '../assets/count2.jpg';
import image3 from '../assets/count3.jpg';
import guitar from '../assets/guitar.png';
import corporateEvent from '../assets/corporateEvent.png';
import specialEvent from '../assets/specialEvent.png';
import sportEvent from '../assets/sportEvent.png';
import base from '../assets/base.png';
import FeaturedEvents from '../Components/FeaturedEvents';
import ScrollTransition from '../Components/ScrollTransition';
import GalleryComponent from '../Components/GalleryComponent';
import Testimonials from '../Components/Testimonials';
import Clients from '../Components/Clients';
import backgroundImage from '../assets/image.png'

const Home = () => {
  const [stats, setStats] = useState({ years: 0, events: 0, team: 0 });
  const [hovered, setHovered] = useState({
    music: false,
    corporate: false,
    special: false,
    sport: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('stats');
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const incrementNumbers = () => {
          setStats((prev) => ({
            years: Math.min(prev.years + 1, 10),
            events: Math.min(prev.events + 25, 500),
            team: Math.min(prev.team + 10, 100),
          }));
        };
        const interval = setInterval(incrementNumbers, 50);
        setTimeout(() => clearInterval(interval), 2500);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home">
          <div className="backgroundnav-section">
        <img src={backgroundImage} alt="Background" className="backgroundnav-image" />
      </div>
      {/* WHO ARE WE SECTION */}
      <div className="who-are-we">
        <h1 className="title" style={{ fontFamily: 'Transcend', color: '#FFD700' }}>WHO ARE WE?</h1>
        <div className="mission-vision">
          <div className="mission">
            <h3 style={{ fontFamily: 'Transcend'}}>OUR MISSION</h3>
            <p>
              "Bringing visions to life through seamless event management, creativity, and passion for excellence"
            </p>
          </div>
          <div className="line"></div>
          <div className="vision">
            <h3 style={{ fontFamily: 'Transcend'}}>OUR VISION</h3>
            <p>
              "Creating unforgettable experiences that inspire and connect communities"
            </p>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="stats" id="stats">
        <div className="stat">
          <div className="stat-number">{stats.years}+</div>
          <img src={image1} alt="Years of Experience" className="stat-image" />
          <div className="stat-overlay"></div>
          <div className="stat-text" >Years of Experience</div>
        </div>
        <div className="stat">
          <div className="stat-number">{stats.events}+</div>
          <img src={image2} alt="Events Per Year" className="stat-image" />
          <div className="stat-overlay"></div>
          <div className="stat-text">Events Per Year</div>
        </div>
        <div className="stat">
          <div className="stat-number">{stats.team}+</div>
          <img src={image3} alt="Team of Professionals" className="stat-image" />
          <div className="stat-overlay"></div>
          <div className="stat-text">Team of Professionals</div>
        </div>
      </div>

      {/* WHAT WE DO SECTION */}
      <div className="what-we-do">
        <h1 className="what-we-do-title">WHAT WE DO</h1>
        <p className="what-we-do-description">
          With creativity and precision, we bring your ideas to life, ensuring every detail is perfect
        </p>
      </div>

      {/* Events Row */}
      <div className="events-row-container">
        <div className="events-row">
          {/* Event Card */}
          {[
            { id: 'music', title: 'MUSIC EVENTS', image: guitar },
            { id: 'corporate', title: 'CORPORATE EVENTS', image: corporateEvent },
            { id: 'special', title: 'SPECIAL EVENTS', image: specialEvent },
            { id: 'sport', title: 'SPORT EVENTS', image: sportEvent },
          ].map((event, index) => (
            <div
              key={index}
              className={`event-card ${hovered[event.id] ? 'hovered' : ''}`}
              onMouseEnter={() => setHovered({ ...hovered, [event.id]: true })}
              onMouseLeave={() => setHovered({ ...hovered, [event.id]: false })}
            >
             <div className="bulb-container">
    <div className="bulb"></div>
    <div className="light-beam"></div>
  </div>
              <img src={base} alt="Base" className="base" />
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-details">
                <div className="event-title">{event.title}</div>
                <div className="event-link">Know more ↗</div>
              </div>
            </div>
          ))}
        </div>
      </div>
     
      <FeaturedEvents/>
      <ScrollTransition/>
      <GalleryComponent/>
      <Testimonials/>
      <Clients/>
      
    </div>
  );
};

export default Home;
