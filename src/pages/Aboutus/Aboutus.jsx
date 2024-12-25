import React from 'react';
import './Aboutus.css';
import HeroComponent from '../../Components/HeroComponent/HeroComponent';
import backgroundImage from './Assets/image.jpeg';
import accenturelogo from './Assets/companylogo.png';
import AppointmentComponent from '../../Components/AppointmentComponent/AppointmentComponent';
import boximage from './Assets/image copy.png'
import member1 from './Assets/team1.jpeg'
import backgroundImage1 from './Assets/Exhibition.png';
import backgroundImage2 from './Assets/image2.jpeg';
const Aboutus = () => {
    return (
        <div>
            <HeroComponent 
                backgroundImageUrl={backgroundImage} 
                title="ABOUT US" 
                subtitle1="We're passionate about crafting unforgettable events, and on this page, you'll discover what sets us apart."  
            />

            <div className="about-us-content">
                <div className="about-us-text">
                    <h1>WADHWA EVENTS AND EXHIBITS</h1>
                    <p>
                        We are Wadhwa Events and Exhibits, a full-service event management company passionate about crafting unforgettable experiences. 
                        For over 10 years, we've transformed ideas into reality, exceeding client expectations with meticulous planning and flawless execution. 
                        From grand exhibitions to intimate gatherings, we handle every detail with creativity, dedication, and expertise.
                    </p>
                    <p>
                        Our team of seasoned event professionals is committed to your vision. We take the time to understand your goals and objectives, 
                        then curate a personalized plan that brings your dreams to life. Let us handle the stress of event orchestration, so you can focus 
                        on what truly matters: making memories that last a lifetime.
                    </p>
                </div>
                <div className="about-us-image">
                    <img src={backgroundImage1} alt="Event Scene"  />
                </div>
                
            </div>
            <div className="numbers-that-matter">
                <div className="numbers-image">
                    <img src={backgroundImage2} alt="Numbers Background" />
                </div>
                <div className="numbers-content">
                    <h2>NUMBERS THAT MATTER</h2>
                    <p>
                        Our commitment to excellence translates into real results for our clients. Here are a few highlights that showcase the impact we deliver:
                    </p>
                    <div className="numbers-stats">
                        <div>
                            <h3>10+</h3>
                            <p>Years of Experience</p>
                        </div>
                        <div>
                            <h3>50+</h3>
                            <p>Clients Satisfied</p>
                        </div>
                        <div>
                            <h3>300+</h3>
                            <p>Events Per Year</p>
                        </div>
                        <div>
                            <h3>20+</h3>
                            <p>Awards Won</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="renowned-names">
                <h2>WORKING WITH RENOWNED NAMES</h2>
                <div className="renowned-logos">
                    <img src={accenturelogo} alt="Accenture" />
                    <img src={accenturelogo}alt="TCS" />
                    <img src={accenturelogo} alt="Tata" />
                    <img src={accenturelogo} alt="Google" />
                    <img src={accenturelogo} alt="Reliance" />
                    <img src={accenturelogo}alt="Adobe" />
                </div>
            </div>
            <div className="unforgettable-experiences">
                <h2>CRAFTING UNFORGETTABLE EXPERIENCES</h2>
                <p>
                    At Wadhwa Events and Exhibits, we believe success goes beyond flawless execution. 
                    It’s about fostering a culture that prioritizes excellence in everything we do.
                </p>
                <div className="experience-highlights">
                    <div className="highlight">
                    <img className="icon" src={boximage}  alt='box'/>
                        <h3>CREATIVITY UNLEASHED</h3>
                        <p>
                            We believe in the power of imagination. Our team brings fresh ideas and innovative solutions to every project, transforming your vision into a truly remarkable event.
                        </p>
                    </div>
                    <div className="highlight">
                        <img className="icon" src={boximage}  alt='box'/>
                        <h3>UNWAVERING COMMITMENT</h3>
                        <p>
                            Your event is our priority. We are dedicated to exceeding your expectations with meticulous planning, proactive communication, and unwavering attention to detail.
                        </p>
                    </div>
                    <div className="highlight">
                    <img className="icon" src={boximage} alt='box'/>
                        <h3>COLLABORATION IS KEY</h3>
                        <p>
                            We believe in the power of collaboration. We work closely with you, understanding your goals, preferences, and budget to create an event that reflects your unique style and vision.
                        </p>
                    </div>
                </div>
            </div>
            <div className="dream-team">
                <h2>MEET THE DREAM TEAM</h2>
                <p>
                    The Masterminds Behind Memorable Events. Our passionate team brings a wealth of experience and creativity to every project, 
                    ensuring your event is flawlessly executed and becomes a cherished memory.
                </p>
                <div className="team-members">
                    <div className="team-member">
                        <img src={member1} alt="Priya Sharma" />
                       <div className="team-content">
                        <h3>PRIYA SHARMA</h3>
                        <p>Event Director</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={member1} alt="Rahul Kapoor" />
                        <div className="team-content">
                        <h3>RAHUL KAPOOR</h3>
                        <p>Creative Strategist</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={member1} alt="Aisha Singh" />
                        <div className="team-content">
                        <h3>AISHA SINGH</h3>
                        <p>Logistics Coordinator</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={member1} alt="Amit Patel" />
                        <div className="team-content">
                        <h3>AMIT PATEL</h3>
                        <p>Client Relationship Manager</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={member1} alt="Maya Das" />
                        <div className="team-content">
                        <h3>MAYA DAS</h3>
                        <p>Production Manager</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={member1} alt="Neel Desai" />
                        <div className="team-content">
                        <h3>NEEL DESAI</h3>
                        <p>Content Writer</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={member1} alt="Neha Joshi" />
                        <div className="team-content">
                        <h3>NEHA JOSHI</h3>
                        <p>Social Media Specialist</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={member1} alt="Ravi Malhotra" />
                        <div className="team-content">
                        <h3>RAVI MALHOTRA</h3>
                        <p>Event Photographer</p>
                        </div>
                    </div>
                </div>
            </div>
            <AppointmentComponent/>
        </div>
    );
};

export default Aboutus;
