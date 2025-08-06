import React from 'react';
import { Settings } from 'lucide-react';

const UnderMaintenance = () => {
  return (
    <div className="maintenance-page">
      <div className="content">
        <div className="icon-container">
          <Settings className="maintenance-icon" size={120} />
        </div>
        
        <h1>Under Maintenance</h1>
        <p className="description">
          We're working to improve our services. We'll be back online shortly.
        </p>
        
        <a href="/" className="home-button">
          Return Home
        </a>
      </div>

      <style jsx>{`
        .maintenance-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #000000;
          font-family: 'Transcend', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          padding: 2rem;
        }

        .content {
          text-align: center;
          max-width: 480px;
          width: 100%;
        }

        .icon-container {
          margin-bottom: 2rem;
        }

        .maintenance-icon {
          color: rgba(255, 212, 49, 1);
          animation: rotate 8s linear infinite;
        }

        h1 {
          font-size: 2.25rem;
          font-weight: 600;
          background: rgba(255, 212, 49, 1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          margin-bottom: 1rem;
          letter-spacing: -0.025em;
          font-family: 'Transcend', -apple-system, BlinkMacSystemFont, sans-serif;
          animation: fadeInUp 0.6s ease-out;
        }

        .description {
          font-size: 1.125rem;
          background: rgba(255, 212, 49, 1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          line-height: 1.6;
          margin-bottom: 2.5rem;
          font-family: 'Transcend', -apple-system, BlinkMacSystemFont, sans-serif;
          animation: fadeInUp 0.6s ease-out 0.2s both;
        }

        .home-button {
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          background-color: rgba(255, 212, 49, 1);
          color: #000000;
          text-decoration: none;
          border-radius: 0.5rem;
          font-weight: 500;
          font-size: 1rem;
          font-family: 'Transcend', -apple-system, BlinkMacSystemFont, sans-serif;
          transition: all 0.2s ease;
          animation: fadeInUp 0.6s ease-out 0.4s both;
        }

        .home-button:hover {
          background-color: rgba(255, 212, 49, 0.9);
          transform: translateY(-1px);
        }

        .home-button:active {
          transform: translateY(0);
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 640px) {
          .maintenance-page {
            padding: 1rem;
          }

          h1 {
            font-size: 1.875rem;
          }

          .description {
            font-size: 1rem;
          }

          .maintenance-icon {
            width: 96px;
            height: 96px;
          }
        }
      `}</style>
    </div>
  );
};

export default UnderMaintenance;