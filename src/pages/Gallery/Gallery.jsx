import React, { useState } from 'react'
import './Gallery.css'
import HeroComponent from '../../Components/HeroComponent/HeroComponent'
import AppointmentComponent from '../../Components/AppointmentComponent/AppointmentComponent'
import HeroBackgroundImage from './Assets/herosectionbackground.png'
import Image1 from './Assets/Image1.png'
import Image2 from './Assets/Image2.png'
import Image3 from './Assets/Image3.png'
import Image4 from './Assets/Image4.png'
import Image5 from './Assets/Image5.png'
import Image6 from './Assets/Image6.png'
import Image7 from './Assets/Image7.png'
import Image8 from './Assets/Image8.png'
import Video from './Assets/video.mp4'

const Gallery = () => {

    const [activeTab, setActiveTab] = useState('Photos');
    const tabs = ['Photos', 'Videos'];
    const photos = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];
    const videos = [Video, Video, Video, Video];

    return (
        <div>
            <HeroComponent backgroundImageUrl={HeroBackgroundImage} title="Gallery" subtitle1="Aapka Swagat Hai!" subtitle2="We're passionate about crafting unforgettable events, and on this page, you'll discover what sets us apart." />

            <div className="whatwedo-event-tabs">
                <div className="tab-menu gallery-tabs-menu">
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

                {activeTab === 'Photos' && (
                    <div className="gallery">
                        {photos.map((photo, index) => (
                            <img key={index} src={photo} alt={`photo-${index}`} className="gallery-photo" />
                        ))}
                    </div>
                )}

                {activeTab === 'Videos' && (
                    <div className="gallery">
                        {videos.map((video, index) => (
                            <video key={index} src={video} alt={`video-${index}`} className='gallery-video' controls />
                        ))}
                    </div>
                )}

                <button type="button" class="loadmore-btn">
                    LOAD MORE
                    <svg class="explore-icon" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                            class="fill-gray-800"
                        ></path>
                    </svg>
                </button>
            </div>

            <AppointmentComponent />
        </div>
    )
}

export default Gallery
