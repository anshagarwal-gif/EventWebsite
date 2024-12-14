import React from 'react';
import '../Components/Testimonials.css';
import image1 from '../assets/test.jpg'
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Our event was a smashing success, thanks to the meticulous planning and creative flair of the team. Every detail was handled perfectly.",
      name: "Jessica Myles",
      title: "Innovatech Solutions",
      image: image1,
    },
    {
      id: 2,
      quote: "I was truly impressed by the professionalism and the unique touch they brought to our corporate retreat. It was an engaging, memorable experience for everyone involved.",
      name: "David Thompson",
      title: "Greenfield Enterprises",
      image: "path-to-image2.jpg",
    },
    {
      id: 3,
      quote: "They transformed our ideas into a spectacular event that exceeded all expectations. Their attention to detail and passion made all the difference.",
      name: "Samantha Lee",
      title: "Luxury Living Magazine",
      image: "path-to-image3.jpg",
    },
  ];

  return (
    <div className="testimonials-section">
      <h1 className="testimonials-title"style={{ fontFamily: 'Transcend', background: 'linear-gradient(to right, #FFE900,#DBE80C)', WebkitBackgroundClip: 'text', color: 'transparent' }}>CUSTOMER TESTIMONIALS</h1>
      <p className="testimonials-subtitle">
        See what our clients are saying about their extraordinary event experiences with us!
      </p>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div className="testimonial-item" key={testimonial.id}>
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
