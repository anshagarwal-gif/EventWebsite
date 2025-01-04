import React, {useRef, useEffect} from 'react';
import './Aboutus.css';
import HeroComponent from '../../Components/HeroComponent/HeroComponent';
import backgroundImage from './Assets/image.jpeg';
import accenturelogo from './Assets/companylogo.png';
import AppointmentComponent from '../../Components/AppointmentComponent/AppointmentComponent';
import boximage from './Assets/image copy.png'
import member1 from './Assets/imagelogo.png'
import backgroundImage1 from './Assets/Exhibition.png';
import backgroundImage2 from './Assets/image2.jpeg';
import TeamMember from '../../Components/TeamMember/TeamMember';
const Aboutus = () => {

    const aboutImageRef = useRef(null);
    const numbersImageRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Trigger when 50% of the element is visible
        };

        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add the appropriate animation class based on the element
                    if (entry.target.classList.contains('about-us-image')) {
                        entry.target.classList.add('slide-in-right');
                    } else if (entry.target.classList.contains('numbers-image')) {
                        entry.target.classList.add('slide-in-left');
                    }
                    // Unobserve after animation is triggered
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        // Observe both elements
        if (aboutImageRef.current) {
            observer.observe(aboutImageRef.current);
        }
        if (numbersImageRef.current) {
            observer.observe(numbersImageRef.current);
        }

        // Cleanup observer on component unmount
        return () => {
            if (aboutImageRef.current) {
                observer.unobserve(aboutImageRef.current);
            }
            if (numbersImageRef.current) {
                observer.unobserve(numbersImageRef.current);
            }
        };
    }, []);

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
                <div className="about-us-image" ref={aboutImageRef}>
                    <img src={backgroundImage1} alt="Event Scene"  />
                </div>
                
            </div>
            <div className="numbers-that-matter">
                <div className="numbers-image" ref={numbersImageRef}>
                    <img src={backgroundImage2} alt="Numbers Background" />
                </div>
                <div className="numbers-content">
                    <h2>NUMBERS THAT MATTER</h2>
                    <p>
                        Our commitment to excellence translates into real results for our clients. Here are a few highlights that showcase the impact we deliver:
                    </p>
                    <div className="numbers-stats">
                        <div>
                            <h3>8+</h3>
                            <p>Years of Experience</p>
                        </div>
                        <div>
                            <h3>500+</h3>
                            <p>Clients Satisfied</p>
                        </div>
                        <div>
                            <h3>90+</h3>
                            <p>Events Per Year</p>
                        </div>
                        <div>
                            <h3>6+</h3>
                            <p>Awards Won</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="renowned-names">
                <h2>WORKING WITH RENOWNED NAMES</h2>
                <div className="renowned-logos">
                    <img src={accenturelogo} alt="Accenture" />
                    <img src={accenturelogo}alt="TCS" />
                    <img src={accenturelogo} alt="Tata" />
                    <img src={accenturelogo} alt="Google" />
                    <img src={accenturelogo} alt="Reliance" />
                    <img src={accenturelogo}alt="Adobe" />
                </div>
            </div> */}
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
                    <TeamMember image={member1} name={"Sunil H Wadhwa"} role={"CEO & Managing Director"} backContent={"Exp - 30 years + "}/>
                    <TeamMember image={member1} name={"Raj S Wadhwa "} role={"Chief Marketing Officer"} backContent={"Exp - 6 years +"} backConten1={"Chief Marketing Officer Diploma in Event management from Oxford University And set design and anchoring course from TTA"}/>
                  
                </div>
            </div>
            <AppointmentComponent/>
        </div>
    );
     


};

export default Aboutus;
