import React, {} from 'react';
import './Contact.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const Contact = () => {

  return (
    <section id='contact' className="contact-container">
    <h5>Contact</h5>

    <div className="contact-content">
        <div style={{flex: 1}}>
          <ContactInfoCard
            iconUrl="./assets/images/linkedin.png"
            text="https://linkedin.com/in/leshaan99/"
            text1="LinkedIn"
          />
          <ContactInfoCard
            iconUrl="./assets/images/github.png"
            text="https://github.com/leshaan99"
            text1="GitHub"
          />
          <ContactInfoCard
            iconUrl="./assets/images/facebook.png"
            text="https://facebook.com/leshaan99"
            text1="FaceBook"
          />
        </div>

        <div style={{flex: 1}}>
          <ContactForm/>
        </div>
    </div>
</section>
  )
}

export default Contact
