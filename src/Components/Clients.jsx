import React from 'react';
import '../Components/Clients.css';
import image1 from '../assets/GalleryComponentPhotos/1.jpg';

const Clients = () => {
  const clients = [
    { id: 1, name: 'Sony Music', logo: image1 },
    { id: 2, name: 'Amazon Music', logo: image1 },
    { id: 3, name: 'Yamaha', logo: image1 },
    { id: 4, name: 'Marvel', logo: image1 },
    { id: 5, name: 'Walt Disney Records', logo: image1 },
    { id: 6, name: 'Universal Music Group', logo: image1 },
  ];

  return (
    <div className="clients-section">
      <div className="clients-text" style={{ fontFamily: 'Poppins'}} >
        <h1 className="clients-title" style={{ fontFamily: 'Transcend', color: '#FFD700' }}>
          OUR CLIENTS
        </h1>
        <p className="clients-subtitle">
          Trusted by a diverse range of clients, from local startups to multinational corporations, we are proud to have partnered with these esteemed organizations to bring their events to life!
        </p>
      </div>
      <div className="clients-grid">
        {clients.map((client) => (
          <div className="client-item" key={client.id}>
            <img src={client.logo} alt={client.name} className="client-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
