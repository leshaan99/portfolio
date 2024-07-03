import React from 'react'
import './ContactInfoCard.css'

const ContactInfoCard = ({ iconUrl, text, text1 }) => {

  return (
    <div className="contact-details-card">
    <div className="icon">
    <a href={text} target="_blank" rel="noopener noreferrer">
        <img src={iconUrl} alt={text} />
      </a>
    </div>

    <p>{text1}</p>
  </div>
  )
}

export default ContactInfoCard
