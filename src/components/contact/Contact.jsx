import React, { useRef } from 'react';
import './contact.css'
import {SiGmail, SiWhatsapp} from 'react-icons/si'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wnb2v17', 'template_12r30uz', form.current, 'SNF6rNHYSoTJWN54k');
    e.target.reset()
  };
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <SiGmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>konnursarvang@gmail.com</h5>
            <a href='mailto:konnursarvang@gmail.com' target='_blank'>Send me an email</a>
          </article>

          <article className='contact__option'>
            <SiWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+1 (XXX) XXX-XXXX</h5>
            <a href='https://api.whatsapp.com/send?phone=+19059213731' target='_blank'>Shoot me a message</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section >
  )
}

export default Contact