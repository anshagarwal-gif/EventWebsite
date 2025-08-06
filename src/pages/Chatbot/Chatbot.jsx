import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [keyword, setKeyword] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerate = async () => {
    if (!keyword.trim()) {
      setError('Please enter a keyword');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/chatbot`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keyword }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data);

      if (!data.images || !Array.isArray(data.images)) {
        throw new Error('Invalid response format: images array not found');
      }

      setImages(data.images);
      setIsGenerated(true);
    } catch (err) {
      console.error('Error:', err);
      setError(err.message || 'Error generating images');
      setImages([]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderImageGrid = () => {
    return (
      <div className="image-grid1">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="image-container1 fade-up">
            {images[index] ? (
              <img
                src={images[index]}
                alt={`Generated ${index + 1}`}
                onError={(e) => {
                  console.error(`Error loading image ${index + 1}`);
                  e.target.src = '/api/placeholder/400/400';
                }}
              />
            ) : (
              <div className="placeholder-image1">
                {isLoading ? 'Loading...' : 'Image not available'}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container1">
      <div className={`content-wrapper1 ${isGenerated ? 'content-shifted1' : ''}`}>
        <div className="hero-content1">
          <h1 className="headline1">Your 24/7 Virtual Event Assistant</h1>
          
          <p className="description1">
            Our smart chatbot is always on, always helpful. Whether you need event details, appointment bookings, or personalized suggestions—this intelligent assistant provides instant answers, simplifies planning, and enhances your experience with seamless support.
          </p>

          <div className="input-section1">
            <div className="input-wrapper1">
              <input
                type="text"
                className="text-input1"
                placeholder="Type here"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                disabled={isLoading}
              />
              <button
                onClick={handleGenerate}
                disabled={isLoading}
                className="generate-button1"
              >
                {isLoading ? 'Generating...' : 'Generate'}
              </button>
            </div>
            {error && <p className="error-message1">{error}</p>}
          </div>
        </div>

        {isGenerated && (
          <div className="results-section1">
            {renderImageGrid()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
