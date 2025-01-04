import React, { useState, useEffect } from 'react';
import '../Components/Testimonials.css';
import image1 from '../assets/test.jpg';
import image2 from '../assets/test2.jpeg';
import image3 from '../assets/test3.jpeg';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Wadhwa Events and Exhibits managed our university event with outstanding professionalism and creativity. Their attention to detail and seamless execution made the event truly memorable for everyone involved.",
      name: "Reshma Patil ",
      title: "MIT ADT University",
      image: image1,
    },
    {
      id: 2,
      quote: "The Commonwealth Youth Games 2008 was a resounding success, thanks to Wadhwa Events’ expertise. Their attention to detail and seamless management of the large-scale event left a lasting impression on all players.",
      name: "Rajendra Potnis",
      title: "Sports Coach",
      image: image2,
    },
    {
      id: 3,
      quote: "Wadhwa Events showcased exceptional organizational skills at Lakme Fashion Week, ensuring the event run smoothly and professionally with commendable logistics management.",
      name: "Samantha Lee",
      title: "Luxury Living Magazine",
      image: image3,
    },
    {
      id:4,
      quote:"Our wedding event was transformed into a dream celebration, all thanks to WEE. From the stunning décor to the flawless coordination, they truly brought our vision to life and ensured every moment was perfect.",
      name:"Anshika Sharma ",
      title: "Mumbai",
      image: image1,
    
    },  
    {
      id:5,
      quote:"The leadership summit we hosted was a huge success, all thanks to WEE’s incredible planning and execution. Their expertise in managing speakers, venues, and timing made the event run like clockwork, leaving our guests thoroughly impressed.",
      name:"James William Smith ",
      title: "Bengaluru",
      image: image2,
    
    },
    {
      id:6,
      quote:"WEE's dedication to empowering women entrepreneurs has transformed the jewelry industry. Their mentorship and initiatives have inspired creativity and innovation, enabling women to bring fresh ideas to design and craftsmanship.",
      name:"Sanjay Gadgil  ",
      title: "Pune",
      image: image3,
    
    }

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
