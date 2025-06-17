import React, { useEffect, useState } from 'react';
import './home.css';
import image1 from '../assets/count1.jpg';
import image2 from '../assets/count2.jpg';
import image3 from '../assets/count3.jpg';
import guitar from '../assets/guitar.png';
import corporateEvent from '../assets/corporateEvent.png';
import specialEvent from '../assets/specialEvent.png';
import sportEvent from '../assets/sportEvent.png';

import FeaturedEvents from '../Components/FeaturedEvents';
import ScrollTransition from '../Components/ScrollTransition';

import Testimonials from '../Components/Testimonials';
import Clients from '../Components/Clients';
import  backgroundVideo from "../assets/mainvideo.webm";
import AppointmentComponent from '../Components/AppointmentComponent/AppointmentComponent';

import FeaturedEventsnew from '../Components/FeatureEventsnew';
import CircularGallery from '../Components/CircularGallery';
import InfiniteMenu from '../Components/Infinite';

import FlowingMenu from '../Components/Flowingmenu';
import img1 from "../assets/guitar.png";
import img2 from "../assets/corporateEvent.png";
import img3 from "../assets/specialEvent.png";
import img4 from "../assets/sportEvent.png";

const Home = () => {
  const [stats, setStats] = useState({ years: 0, events: 0, team: 0 });
  const [hovered, setHovered] = useState({
    music: false,
    corporate: false,
    special: false,
    sport: false,
  });

const demoItems = [
  { link: 'https://wadhwaevents.com/WhatWeDo?tab=3', text: 'College Fest', image: img1 },
  { link: 'https://wadhwaevents.com/WhatWeDo?tab=1', text: 'Corporate Events', image: img2 },
  { link: 'https://wadhwaevents.com/WhatWeDo?tab=2', text: 'Wedding Events', image:img3 },
  { link: 'https://wadhwaevents.com/WhatWeDo', text: 'Art & Exhibitions', image: img4 }
];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('stats');
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const incrementNumbers = () => {
          setStats((prev) => ({
            years: Math.min(prev.years + 0.5, 10),
            events: Math.min(prev.events + 1, 500),
            team: Math.min(prev.team + 1, 100),
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
  <video 
    src={backgroundVideo} 
    autoPlay 
    loop 
    muted 
    playsInline 
    className="backgroundnav-video"
  />
    <div className="taglines">
    <span className="tagline">Creativity For</span>
    <span className="tagline1">Eternity</span>
  </div>
</div>
      {/* WHO ARE WE SECTION */}
      <div className="who-are-we">
        <h1 className="title" >WHO ARE WE?</h1>
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
          <div className="stat-text" >YEARS OF EXPERIENCE</div>
        </div>
        <div className="stat">
          <div className="stat-number">{stats.events}+</div>
          <img src={image2} alt="Events Per Year" className="stat-image" />
          <div className="stat-overlay"></div>
          <div className="stat-text">EVENTS PER YEAR</div>
        </div>
        <div className="stat">
          <div className="stat-number">{stats.team}+</div>
          <img src={image3} alt="Team of Professionals" className="stat-image" />
          <div className="stat-overlay"></div>
          <div className="stat-text">TEAM OF PROFFESIONALS</div>
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
      {/* <div className="events-row-container">
        <div className="events-row"> */}
          {/* Event Card */}
          {/* {[
            { id: 'music', title: 'COLLEGE FESTS', image: guitar, link: '/WhatWeDo?tab=3' },
            { id: 'corporate', title: 'CORPORATE EVENTS', image: corporateEvent, link: '/WhatWeDo?tab=1' },
            { id: 'special', title: 'WEDDING EVENTS', image: specialEvent, link: '/WhatWeDo?tab=2' },
            { id: 'sport', title: 'EXHIBITIONS', image: sportEvent , link: '/WhatWeDo'},
          ].map((event, index) => (
            <div
              key={index}
              className={`event-card ${hovered[event.id] ? 'hovered' : ''}`}
              onMouseEnter={() => setHovered({ ...hovered, [event.id]: true })}
              onMouseLeave={() => setHovered({ ...hovered, [event.id]: false })}
            >
             <div className="bulb-container">
             <img src={lightbulbimg} alt="Bulb" className="bulb-img" />
             
    
            </div>
              <img src={base} alt="Base" className="base" />
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-details">
                <div className="event-title">{event.title}</div>
                <a className="event-link" href={event.link} target="_blank" rel="noopener noreferrer">Know more ↗</a>
              </div>
            </div>
          ))}
        </div>
      </div> */}
{/*      
<div style={{ height: '600px', position: 'relative' }}>
  <InfiniteMenu items={items}/>
</div> */}

{/* <div style={{ height: '600px', position: 'relative' }}>
  <CardSwap
    cardDistance={60}
    verticalDistance={70}
    delay={5000}
    pauseOnHover={false}
  >
    <Card>
      <h3>Card 1</h3>
      <p>Your content here</p>
    </Card>
    <Card>
      <h3>Card 2</h3>
      <p>Your content here</p>
    </Card>
    <Card>
      <h3>Card 3</h3>
      <p>Your content here</p>
    </Card>
  </CardSwap>
</div> */}


<div style={{ height: '720px', position: 'relative' }}>
  <FlowingMenu items={demoItems} />
</div>
      <FeaturedEvents/>
       <FeaturedEventsnew/>


      <ScrollTransition/>
      {/* <GalleryComponent/> */}
  <CircularGallery />
      <Testimonials/>
      <Clients/>
      <AppointmentComponent/>
      
    </div>
  );
};

export default Home;
