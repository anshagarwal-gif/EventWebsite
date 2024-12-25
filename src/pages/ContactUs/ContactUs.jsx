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
const ContactUs = () => {
    const [selectedForm, setSelectedForm] = useState("contact");
    const [formData, setFormData] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);
  
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
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Form Submitted:", formData);
      setFormSubmitted(true);
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
            href="https://www.google.com/maps?q=1055+Arthur+ave+Elk+Groot,+67,+New+Palmas+South+Carolina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pin} alt="Location Icon" />
            1055 Arthur ave Elk Groot, 67, New Palmas South Carolina.
          </a>
        </p>
        <p>
          <a href="tel:+1234678910899">
            <img src={call}alt="Phone Icon" />
            +1 234 678 9108 99
          </a>
        </p>
        <p>
          <a href="mailto:contact@deepalibenpatel.com">
            <img src={mail} alt="Email Icon" />
            contact@deepalibenpatel.com
          </a>
        </p>
        </div>
        <div className="social-icons">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="Instagram" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={facebook} alt="Facebook" />
      </a>
    </div>
        <div className="brochure-buttons">
            <div className='info'>
            <h2 className='inf'>For more </h2><h2 >Information</h2>
            </div>
          <button>Brochure 1</button>
          <button>Brochure 2</button>
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
          onChange={handleChange}
          required
        />
        <label htmlFor="lastName">Last Name</label>
      </div>
    </div>

    {/* Full-Width Inputs */}
    <div className="input-container">
      <textarea
        name="email"
        id="email"
        placeholder="Email"
        onChange={handleChange}
        required
      ></textarea>
      <label htmlFor="email">Email</label>
    </div>
    <div className="input-container">
      <textarea
        name="phone"
        id="phone"
        placeholder="Phone Number"
        onChange={handleChange}
        required
      ></textarea>
      <label htmlFor="phone">Phone Number</label>
    </div>
    <div className="input-container">
      <textarea
        className="message"
        name="message"
        id="message"
        placeholder="Your Message ..."
        onChange={handleChange}
        required
      ></textarea>
      <label htmlFor="message">Your Message</label>
    </div>

    <button type="submit">Send Message</button>
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
          onChange={handleChange}
          required
        />
        <label htmlFor="lastName">Last Name</label>
      </div>
    </div>

    {/* Full-Width Inputs */}
    <div className="input-container">
      <textarea
        name="email"
        id="email"
        placeholder="Email"
        onChange={handleChange}
        required
      ></textarea>
      <label htmlFor="email">Email</label>
    </div>
    <div className="input-container">
      <textarea
        name="phone"
        id="phone"
        placeholder="Phone Number"
        onChange={handleChange}
        required
      ></textarea>
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
      }}// Focus input on image click
  />
  <input
    type="date"
    name="date"
    id="date"
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
        onChange={handleChange}
        required
      ></textarea>
      <label htmlFor="purpose">Meeting Purpose</label>
    </div>

    <button type="submit">Book Appointment</button>
  </form>
)}

          </>
        ) : (
          <div className="confirmation-message">
            <img src={success} alt='confirmation-tick'/>
            <h3>Booking Successful</h3>
            <p>Appointment Confirmed with our team. You will receive a confirmation message shortly.</p>
          </div>
        )}
      </div>
    </div>



</div>
    )
}
export default ContactUs;