import React from 'react'
import './AppointmentComponent.css'

const AppointmentComponent = () => {
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
            <button className="appointment-primary-button">Book Appointment</button>
            <button className="appointment-secondary-button">See Client Works</button>
          </div>
        </div>
      </div>
  )
}

export default AppointmentComponent
