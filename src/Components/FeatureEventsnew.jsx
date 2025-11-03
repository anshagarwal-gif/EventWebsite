import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import './FeatureEventsnew.css';
import F1 from "../assets/F1.png";
import F2 from "../assets/F2.png";
import F3 from "../assets/F3.png";
import F4 from "../assets/F4.png";
import RobotexImage from "../assets/Robotex.jpg";
import VishwarambhImage from "../assets/Vishwarambh.jpg";
const FeaturedEventsnew = () => {
  return (
    <div className="featured-events-container">
 
      <HorizontalScrollCarousel />
    
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const x = useMotionValue(0);
  const xPercent = useTransform(x, (value) => `${value}%`);
  const animationRef = useRef(null);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const scrollSpeed = 0.05; // Adjust speed (percentage per frame)
    
    const animate = () => {
      const currentX = x.get();
      
      // Calculate new position (move left)
      const newX = currentX - scrollSpeed;
      
      // Reset position when we've scrolled past all original cards
      // Since we duplicated cards, reset at -50% (half of total)
      if (newX <= -50) {
        x.set(0);
      } else {
        x.set(newX);
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [x]);

  return (
    <section 
      ref={containerRef} 
      className="featured-events-horizontal-section"
    >
      <div className="featured-events-sticky-container">
        <motion.div 
          style={{ x: xPercent }} 
          className="featured-events-cards-container"
        >
          {/* Duplicate cards for seamless loop */}
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
          {cards.map((card) => {
            return <Card card={card} key={`duplicate-${card.id}`} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="featured-events-card">
      <div
        className="featured-events-card-background"
        style={{
          backgroundImage: `url(${card.url})`,
        }}
      ></div>
      <div className="featured-events-card-content">
        <p className="featured-events-card-title">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default FeaturedEventsnew;

const cards = [
  {
    url: F2,
    title: "Persona Fest",
    id: 1,
  },
  {
    url: F3,
    title: "Vishwanath Sports Meet",
    id: 2,
  },
  {
    url: F4,
    title: "Prestine Event",
    id: 3,
  },
  {
    url: F1,
    title: "Spectra",
    id: 4,
  },
  {
    url: RobotexImage,
    title: "Robotex India",
    id: 5,
  },
  {
    url: VishwarambhImage,
    title: "Vishwarambh ",
    id: 6,
  },
];