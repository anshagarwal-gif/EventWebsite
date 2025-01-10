import React from 'react'
import "./EventsSection.css"

const EventsSection = ({title, subtitle, events}) => {
  return (
    <section className="signature-events">
    <div className="container">
      <h1 className="main-title">{title}</h1>
      <p className="subtitle">
        {subtitle}
      </p>
      
      <div className="events-grid">
        {events.map((event, index) => (
          <div className="event-section-card" key={index}>
            <div className="event-section-image">
              <img src={event.image} alt={event.title} />
            </div>
            <div className="event-section-content">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default EventsSection
