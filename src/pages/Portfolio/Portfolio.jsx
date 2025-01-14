import React, { useState } from 'react'
import "./Portfolio.css"
import HeroComponent from '../../Components/HeroComponent/HeroComponent';
import AppointmentComponent from '../../Components/AppointmentComponent/AppointmentComponent';
import HeroBg from './Assets/portfoliobgimage.jpg'
import HeroImage1 from './Assets/blogheroimage1.jpeg'
import HeroImage2 from './Assets/blogheroimage2.jpeg'
import HeroImage3 from './Assets/blogheroimage3.jpeg'
import HeroImage4 from './Assets/blogheroimage4.jpeg'
import GridImage1 from './Assets/portfolioGridImage1.jpg'
import GridImage2 from './Assets/portfolioGridImage2.jpg'
import GridImage3 from './Assets/portfolioGridImage3.jpg'
import Client1 from './Assets/client1.png'

const Portfolio = () => {

    const [activeTab, setActiveTab] = useState('Music Event');
    const tabs = ['Music Event', 'Corporate Event', 'Special Event', 'Sport Event'];

    const portfolioItems = [
        {
            id: 1,
            title: "Red brick",
            image: GridImage1,
            className: "portfolio-item-normal"
        },
        {
            id: 2,
            title: "Bosto bar",
            image: GridImage2,
            className: "portfolio-item-short"
        },
        {
            id: 3,
            title: "Caballer bar",
            image: GridImage1,
            className: "portfolio-item-normal"
        },
        {
            id: 4,
            title: "BSC bar",
            image: GridImage3,
            className: "portfolio-item-tall"
        },
        {
            id: 5,
            title: "Marvel Garden",
            image: GridImage2,
            className: "portfolio-item-short"
        },
        {
            id: 7,
            title: "South poll",
            image: GridImage3,
            className: "portfolio-item-tall"
        },
        {
            id: 6,
            title: "Phoenix mall",
            image: GridImage2,
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
            logo: Client1,
            alt: "The Times of India Logo"
        },
        {
            id: 3,
            name: "Constro International Fair",
            logo: Client1,
            alt: "Constro International Fair Logo"
        },
        {
            id: 3,
            name: "Constro International Fair",
            logo: Client1,
            alt: "Constro International Fair Logo"
        },
        {
            id: 3,
            name: "Constro International Fair",
            logo: Client1,
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
                        <div
                            className="image-card"
                        >
                            <img src={HeroImage1} alt={"tiltedImage1"} />
                        </div>
                        <div
                            className="image-card"
                        >
                            <img src={HeroImage2} alt={"tiltedImage2"} />
                        </div>
                        <div
                            className="image-card"
                        >
                            <img src={HeroImage3} alt={"tiltedImage3"} />
                        </div>
                        <div
                            className="image-card"
                        >
                            <img src={HeroImage4} alt={"tiltedImage4"} />
                        </div>
                    </div>
                    <p className="portfolio-gallery-description">
                        Lorem ipsum dolor sit amet consectetur. Placerat sit amet parturient ornare ut vel consequat augue mauris. Urna mattis risus eget non. Neque nulla dignissim facilisis phasellus ornare feugiat nulla aliquet quam. Risus vestibulum viverra et sagittis lacus. Lectus malesuada a gravida etiam volutpat. Cursus sed eu interdum integer elementum.
                    </p>
                </div>
            </section>

            <div className="whatwedo-event-tabs">
                <div className="tab-menu portfolio-tabs-menu">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {activeTab === 'Music Event' && (
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
                )}
                {activeTab === 'Corporate Event' && (
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
                )}
                {activeTab === 'Special Event' && (
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
                )}
                {activeTab === 'Sport Event' && (
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
                )}

            </div>

            <button type="button" class="loadmore-btn">
                LOAD MORE
                <svg class="explore-icon" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                        class="fill-gray-800"
                    ></path>
                </svg>
            </button>

            <section className="portfolio-clients-section">
                <h2 className="portfolio-clients-title">OUR CLIENTS</h2>

                <div className="portfolio-clients-slider">
                    <div className="portfolio-clients-track">
                        {/* First set of clients */}
                        {clients.map((client) => (
                            <div key={client.id} className="portfolio-client-card">
                                <div className="portfolio-client-logo-container">
                                    <img src={client.logo} alt={client.name} className="portfolio-client-logo" />
                                </div>
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
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
    )
}

export default Portfolio
