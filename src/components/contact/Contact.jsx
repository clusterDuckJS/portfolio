import React, { useRef } from 'react';
import {AiOutlineMail, AiOutlineInstagram, AiOutlineWhatsApp} from 'react-icons/ai'
import './contact.css'
import emailjs from '@emailjs/browser';


function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n0ie7tj', 'template_v5j9n2y', form.current, 'smHXRoK3JW6jh6wNI')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>clusterduckjs@gmail.com</h5>
            <a href="mailto:clusterduckjs@gmail.com" rel="noreferrer" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <AiOutlineInstagram className='contact_option-icon'/>
            <h4>Instagram</h4>
            <h5>@clusterDuckJS</h5>
            <a href="www.instagram/clusterduckjs" rel="noreferrer" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <AiOutlineWhatsApp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 7907969115</h5>
            <a href="wa.me/+917907969115" rel="noreferrer" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Your Full Name' required/>
          <input type="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact