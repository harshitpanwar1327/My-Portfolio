import React, {useRef} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser'
import {toast, Bounce} from 'react-toastify'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Message sent successfully.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.success('Message not sent!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
        },
      );
  };

  return (
    <div  className='page'>
      <div className="page-content">
        <h2 className="page-heading">Contact Me</h2>
        <p className="page-subheading">Get in touch</p>
        <div className="about-page-content">
          <div className="talk-to-me">
            <h3 className='contact-subheading'>Talk to me</h3>
            <div className="talk-to-me-boxes">
              <i className="fa-regular fa-envelope talk-to-me-icons"></i>
              <h4 className='talk-to-me-heading'>Email</h4>
              <p className='talk-to-me-detail'>harshitpanwar1327@gmail.com</p>
              <a href="mailto:harshitpanwar1327@gmail.com"><p className='talk-to-me-detail'>Write me <i className="fa-solid fa-arrow-right"></i></p></a>
            </div>
            <div className="talk-to-me-boxes">
              <i className="fa-brands fa-whatsapp talk-to-me-icons"></i>
              <h4 className='talk-to-me-heading'>Whatsapp</h4>
              <p className='talk-to-me-detail'>+91 859 599 4381</p>
              <a href="https://api.whatsapp.com/send?phone=+918595994381&text=Hello" target='_blank'><p className='talk-to-me-detail'>Write me <i className="fa-solid fa-arrow-right"></i></p></a>
            </div>
          </div>

          <form className="write-your-project"  ref={form} onSubmit={sendEmail}>
            <h3 className='contact-subheading'>Write me your project</h3>
            <input type="text" placeholder='Insert your name' name='user_name' id='user_name' className='contact-input' required/>
            <input type="email" placeholder='Insert your email' name="user_email" id="user_email" className='contact-input' required/>
            <textarea placeholder='Write your project' name="message" id="message" rows="5" className='contact-input' required></textarea>
            <button className='hello-button'>Send Message <i className="fa-regular fa-paper-plane"></i></button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact