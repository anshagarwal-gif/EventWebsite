
import React from 'react';
import './GalleryComponent.css';
import image1 from '../assets/GalleryComponentPhotos/1.jpg';
import image2 from '../assets/GalleryComponentPhotos/2.jpg';
import image3 from '../assets/GalleryComponentPhotos/3.jpg';
import image4 from '../assets/GalleryComponentPhotos/4.jpg';
import image5 from '../assets/GalleryComponentPhotos/4.jpg';
import image6 from '../assets/GalleryComponentPhotos/4.jpg';
import image7 from '../assets/GalleryComponentPhotos/4.jpg';
import image8 from '../assets/GalleryComponentPhotos/4.jpg';

const GalleryComponent = () => {
  const topImages = [
    { id: 1, src: image1, alt: 'Event 1' },
    { id: 2, src: image2, alt: 'Event 2' },
    { id: 3, src: image3, alt: 'Event 3' },
  ];

  const middleImages = [
    { id: 4, src: image4, alt: 'Event 4' },
    { id: 5, src: image5, alt: 'Event 5' },
  ];

  const bottomImages = [
    { id: 6, src: image6, alt: 'Event 6' },
    { id: 7, src: image7, alt: 'Event 7' },
    { id: 8, src: image8, alt: 'Event 8' },
  ];

  return (
    <div className="gallery-section">
      <h2 className="gallery-title" style={{ fontFamily: 'Poppins' }}>
        Have a glimpse of
      </h2>
      <h1 className="gallery-subtitle" style={{ fontFamily: 'Transcend', color: '#FFD700' }}>
        OUR WORK!
      </h1>

      <div className="gallery-grid">
        {topImages.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>

      <div className="wide-row">
        {middleImages.map((image) => (
          <div key={image.id} className="gallery-item-wide">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>

      <div className="gallery-grid">
        {bottomImages.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>

      <a href="/gallery" className="explore-gallery-button">
        Explore Gallery <span className="arrow">↗</span>
      </a>
    </div>
  );
};

export default GalleryComponent;

