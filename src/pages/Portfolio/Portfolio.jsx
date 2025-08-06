import React from 'react';
import "./Portfolio.css";
import HeroComponent from '../../Components/HeroComponent/HeroComponent';
import AppointmentComponent from '../../Components/AppointmentComponent/AppointmentComponent';

import HeroBg from './Assets/portfoliobgimage.jpg';
import tiltedImage1 from './Assets/tiltedImage1.png';
import tiltedImage2 from './Assets/tiltedImage2.png';
import tiltedImage3 from './Assets/tiltedImage3.png';
import tiltedImage4 from './Assets/tiltedImage4.png';
import GridImage1 from './Assets/Persona.png';
import GridImage2 from './Assets/1.png';
import GridImage3 from './Assets/6.png';
import GridImage31 from './Assets/portfolioGridImage3.jpg'
import Pris from './Assets/5.png'
import Spec from './Assets/spectra.png'
import VSM from './Assets/VSM.png'
import Client1 from './Assets/client1.png';
import Client11 from './Assets/client1 copy.png';
import Client2 from './Assets/client2.png';
import Client3 from './Assets/client3.png';
import Client4 from './Assets/client4.png';
import Client5 from './Assets/client5.png';

const Portfolio = () => {

    const portfolioItems = [
        {
            id: 1,
            title: "Persona Fest",
            image: GridImage1,
            className: "portfolio-item-normal"
        },
        {
            id: 2,
            title: "Persona Fest",
            image: GridImage2,
            className: "portfolio-item-short"
        },
        {
            id: 3,
            title: "Persona Fest",
            image: GridImage3,
            className: "portfolio-item-normal"
        },
        {
            id: 4,
            title: "Spectra",
            image: GridImage31,
            className: "portfolio-item-tall"
        },
        {
            id: 5,
            title: "Pristine Event",
            image: Pris,
            className: "portfolio-item-short"
        },
        {
            id: 7,
            title: "Vishwanath Sports Meet",
            image: VSM,
            className: "portfolio-item-tall"
        },
        {
            id: 6,
            title: "Spectra",
            image: Spec,
            className: "portfolio-item-short"
        },
    ];

    const clients = [
        {
            id: 1,
            name: "ICICI Bank",
            logo: Client1,
            alt: "ICICI Bank Logo"
        },
        {
            id: 2,
            name: "The Times of India",
            logo: Client11,
            alt: "The Times of India Logo"
        },
        {
            id: 3,
            name: "Constro International Fair",
            logo: Client2,
            alt: "Constro International Fair Logo"
        },
        {
            id: 4,
            name: "Constro International Fair",
            logo: Client3,
            alt: "Constro International Fair Logo"
        },
        {
            id: 5,
            name: "Constro International Fair",
            logo: Client4,
            alt: "Constro International Fair Logo"
        },
        {
            id: 6,
            name: "Constro International Fair",
            logo: Client5,
            alt: "Constro International Fair Logo"
        }
    ];

    return (
        <div>
            <HeroComponent
                backgroundImageUrl={HeroBg}
                title="PORTFOLIO"
                subtitle1="We're passionate about crafting unforgettable events, and on this page, you'll discover what sets us apart."
            />

            <section className="tilted-gallery">
                <div className="portfolio-gallery-container">
                    <div className="images-wrapper">
                        <div className="image-card">
                            <img src={tiltedImage1} alt="tiltedImage1" />
                        </div>
                        <div className="image-card">
                            <img src={tiltedImage2} alt="tiltedImage2" />
                        </div>
                        <div className="image-card">
                            <img src={tiltedImage3} alt="tiltedImage3" />
                        </div>
                        <div className="image-card">
                            <img src={tiltedImage4} alt="tiltedImage4" />
                        </div>
                    </div>
                    <p className="portfolio-gallery-description">
                        Crafting unforgettable experiences, we turn visions into reality with meticulously planned and flawlessly executed events. From intimate gatherings to grand exhibitions, your story takes center stage as we bring every detail to life.
                    </p>
                </div>
            </section>

            <div className="portfolio-grid-container">
                <div className="portfolio-grid">
                    {portfolioItems.map((item) => (
                        <div
                            key={item.id}
                            className={`portfolio-grid-item ${item.className}`}
                        >
                            <div className="portfolio-item-content">
                                <img src={item.image} alt={item.title} />
                                <div className="portfolio-item-overlay">
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <section className="portfolio-clients-section">
                <h2 className="portfolio-clients-title">OUR CLIENTS</h2>

                <div className="portfolio-clients-slider">
                    <div className="portfolio-clients-track">
                        {clients.map((client) => (
                            <div key={client.id} className="portfolio-client-card">
                                <div className="portfolio-client-logo-container">
                                    <img src={client.logo} alt={client.name} className="portfolio-client-logo" />
                                </div>
                            </div>
                        ))}
                        {clients.map((client) => (
                            <div key={`${client.id}-duplicate`} className="portfolio-client-card">
                                <div className="portfolio-client-logo-container">
                                    <img src={client.logo} alt={client.name} className="portfolio-client-logo" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <AppointmentComponent />
        </div>
    );
};

export default Portfolio;
