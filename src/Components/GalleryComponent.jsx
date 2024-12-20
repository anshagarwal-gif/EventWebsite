import React from 'react';
import './GalleryComponent.css';
import image1 from '../assets/GalleryComponentPhotos/1.jpg';
import image2 from '../assets/GalleryComponentPhotos/2.jpg'; // Replace these paths with actual paths
import image3 from '../assets/GalleryComponentPhotos/3.jpg';
import image4 from '../assets/GalleryComponentPhotos/4.jpg';


const GalleryComponent = () => {
  const images = [
    { id: 1, src: image1, alt: 'Event 1' },
    { id: 2, src: image2, alt: 'Event 2' },
    { id: 3, src: image3, alt: 'Event 3' },
    { id: 4, src: image4, alt: 'Event 4' },

  ];

  return (
    <div className="gallery-section">
      <h2 className="gallery-title" style={{ fontFamily: 'Poppins'}}>Have a glimpse of</h2>
      <h1 className="gallery-subtitle" style={{ fontFamily: 'Transcend', color: '#FFD700' }}>OUR WORK !</h1>
      <div className="gallery-grid">
        {images.map((image) => (
          <div className="gallery-item" key={image.id}>
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
      <a href="/gallery" className="explore-gallery-button" >
        Explore Gallery <span className="arrow">↗</span>
      </a>
    </div>
  );
};

export default GalleryComponent;
