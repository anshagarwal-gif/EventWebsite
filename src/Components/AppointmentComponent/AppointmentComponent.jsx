import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AppointmentComponent.css';

const AppointmentComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="appointment-section">
      <div className="appointment-content">
        <h1 className="appointment-heading">
          Creativity For <span className="appointment-highlight">Eternity</span>
        </h1>
        <p className="appointment-subtext">
          Ready to turn your visions into <span className="appointment-underline">unforgettable experiences</span>? <br />
          Let our event management expertise bring your dreams to life.
        </p>
        <div className="appointment-buttons">
          <button
            className="appointment-primary-button"
            onClick={() => navigate('/Contactus')}
          >
            Book Appointment
          </button>
          <button
            className="appointment-secondary-button"
            onClick={() => navigate('/portfolio')}
          >
            See Client Works
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentComponent;
