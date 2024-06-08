import React from 'react'
import './Contact.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'

const Contact = () => {
  return (
    <section className="contact-container">
    <h5>Contact</h5>

    <div className="contact-content">
        <div style={{flex: 1}}>
          <ContactInfoCard
            iconUrl="./assets/images/email.png"
            text="leshansanjeewa25@gmail.com"
          />
        </div>
        <div style={{flex: 1}}></div>
    </div>
</section>
  )
}

export default Contact
