import React from 'react'
import './TeamMember.css'

const TeamMember = ({ image, name, role, backContent }) => {
  return (
    <div className="team-member">
            <div className="flip-card-inner">
                {/* Front of card */}
                <div className="flip-card-front">
                    <img src={image} alt={name} />
                    <div className="team-content">
                        <h3>{name}</h3>
                        <p>{role}</p>
                    </div>
                </div>
                
                {/* Back of card */}
                <div className="flip-card-back">
                    <p>{backContent}</p>
                </div>
            </div>
        </div>
  )
}

export default TeamMember