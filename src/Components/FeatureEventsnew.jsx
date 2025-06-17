import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import './FeatureEventsnew.css';
import F1 from "../assets/F1.png";
import F2 from "../assets/F2.png";
import F3 from "../assets/F3.png";
import F4 from "../assets/F4.png";
const FeaturedEventsnew = () => {
  return (
    <div className="featured-events-container">
 
      <HorizontalScrollCarousel />
    
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="featured-events-horizontal-section">
      <div className="featured-events-sticky-container">
        <motion.div style={{ x }} className="featured-events-cards-container">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
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

];