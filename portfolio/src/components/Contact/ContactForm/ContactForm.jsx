import React, { useRef } from 'react'
import './ContactForm.css'
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wecqs6m', 'template_136zo1i', form.current, {
        publicKey: 'HnUgb_YK2leh3LQBD',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          window.alert('Email sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          window.alert('Failed to send email. Please try again later.');
        },
      );
  };
  return (
    <div className="contact-form-content">
        <form ref={form} onSubmit={sendEmail}>
            <div className="name-container">
                <input type="text" name="from_name" placeholder="Full Name" required/>
            </div>
            <input type="text" name="from_email" placeholder="Email" required/>
            <textarea type="text" name="message" placeholder="Massage" rows={3} required/>
            
            <button type='submit' value='send'>SUBMIT</button>
        </form>
    </div>
  )
}

export default ContactForm
