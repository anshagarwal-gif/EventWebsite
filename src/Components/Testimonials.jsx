import React, { useState, useEffect } from 'react';
import '../Components/Testimonials.css';
import image1 from '../assets/test.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Wadhwa Events and Exhibits managed our university event with outstanding professionalism and creativity. Their attention to detail and seamless execution made the event truly memorable for everyone involved.",
      name: "Jessica Myles",
      title: "Innovatech Solutions",
      image: image1,
    },
    {
      id: 2,
      quote: "The Commonwealth Youth Games 2008 was a resounding success, thanks to Wadhwa Events’ expertise. Their attention to detail and seamless management of the large-scale event left a lasting impression on all players.",
      name: "David Thompson",
      title: "Greenfield Enterprises",
      image: "path-to-image2.jpg",
    },
    {
      id: 3,
      quote: "Wadhwa Events showcased exceptional organizational skills at Lakme Fashion Week, ensuring the event run smoothly and professionally with commendable logistics management.",
      name: "Samantha Lee",
      title: "Luxury Living Magazine",
      image: "path-to-image3.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="testimonials-section">
      <h1 className="testimonials-title">CUSTOMER TESTIMONIALS</h1>
      <p className="testimonials-subtitle">
        See what our clients are saying about their extraordinary event experiences with us!
      </p>
      <div className="testimonial-slider">
        {testimonials.map((testimonial, index) => (
          <div
            className={`testimonial-item ${
              index === currentIndex ? 'active' : 'inactive'
            }`}
            key={testimonial.id}
          >
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-name">{testimonial.name}</p>
            <p className="testimonial-title">{testimonial.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
