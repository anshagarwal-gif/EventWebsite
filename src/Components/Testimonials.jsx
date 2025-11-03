import React, { useState, useEffect } from 'react';
import '../Components/Testimonials.css';
import client2Image from '../assets/client2.png';
import mitvpuImage from '../assets/MITVPU.jpg';
import robotexClientImage from '../assets/RobotextClient.jpg';
import client14Image from '../assets/client14.png';
import client16Image from '../assets/client16.png';
import pristineImage from '../assets/Pristine.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "WEE managed our university's flagship cultural fest with absolute professionalism. From artist coordination to stage production, everything was seamless and impactful.",
      name: "Dr. Aishwarya Kulkarni",
      title: "Cultural Coordinator, MIT-ADT University Pune",
      image: client2Image,
    },
    {
      id: 2,
      quote: "Their planning, sound design, and creative execution for our robotics championship were top-notch. WEE made technology and entertainment blend effortlessly.",
      name: "Rohan Deshpande",
      title: "Events & Outreach Head, Robotex India",
      image: robotexClientImage,
    },
    {
      id: 3,
      quote: "WEE handled our youth festival brilliantly. They understood student energy and combined it with professional execution—perfect balance!",
      name: "Prof. Shubham Patil",
      title: "Student Council Mentor, MIT Vishwashanti Polytechnic (MIT VPU)",
      image: mitvpuImage,
    },
    {
      id: 4,
      quote: "Highly organised and extremely creative! Their stage setup and artist management during our annual fest elevated the entire experience for students and faculty.",
      name: "Simran Mehta",
      title: "Event Operations Manager, Symbiosis Institute (SIBM Pune)",
      image: client14Image,
    },
    {
      id: 5,
      quote: "WEE brought life to our open-air concert in Lavasa. The lighting, sound, and scenic stage were breathtaking. A team you can rely on completely.",
      name: "Akash Malhotra",
      title: "Event Curator, Lavasa Hill City Events Team",
      image: client16Image,
    },
    {
      id: 6,
      quote: "Their attention to detailing in décor, audio-visuals, and artist hospitality made our luxury event stand out. Guests still talk about how beautifully everything was executed.",
      name: "Tanvi Naik",
      title: "Marketing & Events Head, Pristine Properties",
      image: pristineImage,
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
