import React, { useState } from 'react'
import HeroComponent from '../../Components/HeroComponent/HeroComponent'
import HeroBackgroundImage from "./Assets/herocomponentimage.jpeg"
import "./ContactUs.css"
import instagram from "./Assets/instagram.png"
import linkedin from "./Assets/linkedin.png"
import facebook from "./Assets/facebook.png"
import pin from "./Assets/pin.png"
import call from "./Assets/call.png"
import mail from "./Assets/mail.png"
import success from "./Assets/Success .png"
import calender from "./Assets/calender.png"
import brochure from "../ContactUs/Assets/Brochure.pdf"
const ContactUs = () => {
    const [selectedForm, setSelectedForm] = useState("contact");
    const [formData, setFormData] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);
  
    const handleFormChange = (event) => {
      setSelectedForm(event.target.value);
      setFormSubmitted(false);
    };
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setIsSubmitting(true);
      setError(null);

      try {
        const endpoint = selectedForm === 'contact' 
          ? '/api/contact' 
          : '/api/appointment';
          
        const response = await fetch(`${process.env.REACT_APP_API_URL}${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          // Get error message from response if available
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || 'Failed to submit form. Please try again.');
        }

        const result = await response.json();
        setFormSubmitted(true);
        setFormData({}); // Clear form data
        
        // Reset form
        event.target.reset();
        
      } catch (error) {
        setError(error.message);
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    };  
    
    return (
<div>
<HeroComponent backgroundImageUrl={HeroBackgroundImage} title="Contact US" subtitle1="Aapka Swagat Hai!" subtitle2="We're passionate about crafting unforgettable events, and on this page, you'll discover what sets us apart." />
<div className="form-container">
      <div className="contact-info">
        <h2>Let's talk with us</h2>
        <p>Questions, comments, or suggestions? Simply fill in the form and we'll be in touch shortly.</p>
        <div className='contact-details'>
        <p>
          <a
            href="https://maps.app.goo.gl/cYsTXyVXcNv4YGET7?g_st=ipc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pin} alt="Location Icon" />
            Office No 17/18, Adarsh Colony, Vidyanagar, Near Airport Pune - 411032
          </a>
        </p>
        <p>
          <a href="tel:+918888888431">
            <img src={call} alt="Phone Icon" />
            +91 88888 88431
          </a>
        </p>
        <p>
          <a href="mailto:contact@wadhwaevents.com">
            <img src={mail} alt="Email Icon" />
            contact@wadhwaevents.com
          </a>
        </p>
        </div>
        <div className="social-icons">
      <a href="https://www.instagram.com/wadhwa_events_/" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="Instagram" />
      </a>
      <a href="https://in.linkedin.com/company/wadhwaeventsandexhibits" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" />
      </a>
      <a href="https://www.facebook.com/TheWadhwaGroup/events/" target="_blank" rel="noopener noreferrer">
        <img src={facebook} alt="Facebook" />
      </a>
    </div>
        <div className="brochure-buttons">
            <div className='info'>
            <h2 className='inf'>For more </h2><h2 >Information</h2>
            </div>
          <a href={brochure} target="_blank" rel="noopener noreferrer">
            <button>Brochure</button>
          </a>
        </div>
      </div>

      <div className="form-section">
        {!formSubmitted ? (
          <>
            <div className="form-toggle">
  <label>
    <input
      type="radio"
      value="contact"
      name="formType"
      checked={selectedForm === "contact"}
      onChange={handleFormChange}
    />
    <span className="custom-radio"></span>
    Contact us
  </label>
  <label>
    <input
      type="radio"
      value="appointment"
      name="formType"
      checked={selectedForm === "appointment"}
      onChange={handleFormChange}
    />
    <span className="custom-radio"></span>
    Appointment booking
  </label>
</div>

{selectedForm === "contact" && (
  <form onSubmit={handleSubmit} className="contact-form">
    {/* Side-by-Side Inputs for Name and Last Name */}
    <div className="input-row">
      <div className="input-container">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={formData.name || ''}
          onChange={handleChange}
          required
        />
        <label htmlFor="name">Name</label>
      </div>
      <div className="input-container">
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          value={formData.lastName || ''}
          onChange={handleChange}
          required
        />
        <label htmlFor="lastName">Last Name</label>
      </div>
    </div>

    {/* Full-Width Inputs */}
    <div className="input-container">
      <input
       type='email'
        name="email"
        id="email"
        placeholder="Email"
        value={formData.email || ''}
        onChange={handleChange}
        required
      />
      <label htmlFor="email">Email</label>
    </div>
    <div className="input-container">
      <input
       type='tel'
        name="phone"
        id="phone"
        placeholder="Phone Number"
        value={formData.phone || ''}
        onChange={handleChange}
        required
      />
      <label htmlFor="phone">Phone Number</label>
    </div>
    <div className="input-container">
      <textarea
        className="message"
        name="message"
        id="message"
        placeholder="Your Message ..."
        value={formData.message || ''}
        onChange={handleChange}
        required
      />
      <label htmlFor="message">Your Message</label>
    </div>

    <button type="submit" disabled={isSubmitting}>
      {isSubmitting ? "Submitting..." : "Send Message"}
    </button>
    {error && <p className="error-message">{error}</p>}
  </form>
)}

{selectedForm === "appointment" && (
  <form onSubmit={handleSubmit} className="appointment-form">
    {/* Side-by-Side Inputs for Name and Last Name */}
    <div className="input-row">
      <div className="input-container">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={formData.name || ''}
          onChange={handleChange}
          required
        />
        <label htmlFor="name">Name</label>
      </div>
      <div className="input-container">
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          value={formData.lastName || ''}
          onChange={handleChange}
          required
        />
        <label htmlFor="lastName">Last Name</label>
      </div>
    </div>

    {/* Full-Width Inputs */}
    <div className="input-container">
      <input
       type="email"
        name="email"
        id="email"
        placeholder="Email"
        value={formData.email || ''}
        onChange={handleChange}
        required
      />
      <label htmlFor="email">Email</label>
    </div>
    <div className="input-container">
      <input
      type="tel"
        name="phone"
        id="phone"
        placeholder="Phone Number"
        value={formData.phone || ''}
        onChange={handleChange}
        required
      />
      <label htmlFor="phone">Phone Number</label>
    </div>
    <div className="input-container">
  <img
    src={calender}
    alt="Calendar Icon"
    className="calendar-icon"
    onClick={() => {
        const dateInput = document.getElementById('date');
        if (dateInput) dateInput.showPicker(); // Opens the calendar picker
      }}
  />
  <input
    type="date"
    name="date"
    id="date"
    value={formData.date || ''}
    onChange={handleChange}
    required
  />
  <label htmlFor="date">Date</label>
</div>
    <div className="time-inputs input-row">
  <div className="input-container">
    <input
      type="time"
      name="from"
      id="from"
      placeholder="From"
      value={formData.from || ''}
      onChange={handleChange}
      required
    />
    <label htmlFor="from">From</label>
  </div>
  <div className="input-container">
    <input
      type="time"
      name="to"
      id="to"
      placeholder="To"
      value={formData.to || ''}
      onChange={handleChange}
      required
    />
    <label htmlFor="to">To</label>
  </div>
</div>

    <div className="input-container">
      <textarea
      className='purpose'
        name="purpose"
        id="purpose"
        placeholder="Meeting Purpose"
        value={formData.purpose || ''}
        onChange={handleChange}
        required
      />
      <label htmlFor="purpose">Meeting Purpose</label>
    </div>

    <button type="submit" disabled={isSubmitting}>
      {isSubmitting ? "Submitting..." : "Book Appointment"}
    </button>
    {error && <p className="error-message">{error}</p>}
  </form>
)}

          </>
        ) : (
          <div className="confirmation-message">
            <img src={success} alt='confirmation-tick'/>
            <h3>
              {selectedForm === 'contact' ? 'Message Sent Successfully!' : 'Booking Successful'}
            </h3>
            <p>
              {selectedForm === 'contact' 
                ? 'Thank you for your message. We will get back to you shortly.' 
                : 'Appointment Confirmed with our team. You will receive a confirmation message shortly.'
              }
            </p>
          </div>
        )}
      </div>
    </div>
</div>
    )
}
export default ContactUs;