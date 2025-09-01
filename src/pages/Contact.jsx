import React, {useRef} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser'
import {toast, Bounce} from 'react-toastify'
import {motion} from 'motion/react'

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
        <motion.h2 className="page-heading"
          initial={{opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition={{type: 'spring', stiffness: 100, damping: 12, delay: 0.4}}
        >
          Contact Me
        </motion.h2>
        <motion.p className="page-subheading"
          initial={{opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{ once: true }}
          transition={{type: 'spring', stiffness: 100, damping: 12, delay: 0.6}}
        >
          Get in touch
        </motion.p>
        <div className="about-page-content">
          <div className="talk-to-me">
            <motion.h3 className='contact-subheading'
              initial={{opacity: 0, x: -100}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{ once: true }}
              transition={{type: 'spring', stiffness: 100, damping: 12, delay: 0.8}}
            >
              Talk to me
            </motion.h3>
            <motion.div className="talk-to-me-boxes"
              initial={{opacity: 0, x: -100}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{ once: true }}
              transition={{type: 'spring', stiffness: 100, damping: 12, delay: 1}}
            >
              <i className="fa-regular fa-envelope talk-to-me-icons"></i>
              <h4 className='talk-to-me-heading'>Email</h4>
              <p className='talk-to-me-detail'>harshitpanwar1327@gmail.com</p>
              <a href="mailto:harshitpanwar1327@gmail.com"><p className='talk-to-me-detail'>Write me <i className="fa-solid fa-arrow-right"></i></p></a>
            </motion.div>
            <motion.div className="talk-to-me-boxes"
              initial={{opacity: 0, x: -100}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{ once: true }}
              transition={{type: 'spring', stiffness: 100, damping: 12, delay: 1.2}}
            >
              <i className="fa-brands fa-whatsapp talk-to-me-icons"></i>
              <h4 className='talk-to-me-heading'>Whatsapp</h4>
              <p className='talk-to-me-detail'>+91 859 599 4381</p>
              <a href="https://api.whatsapp.com/send?phone=+918595994381&text=Hello" target='_blank'><p className='talk-to-me-detail'>Write me <i className="fa-solid fa-arrow-right"></i></p></a>
            </motion.div>
          </div>

          <form className="write-your-project"  ref={form} onSubmit={sendEmail}>
            <motion.h3 className='contact-subheading'
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{ once: true }}
              transition={{type: 'spring', stiffness: 100, damping: 12, delay: 0.8}}
            >
              Write me your project
            </motion.h3>
            <motion.input type="text" placeholder='Insert your name' name='user_name' id='user_name' className='contact-input' required
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{ once: true }}
              transition={{type: 'spring', stiffness: 100, damping: 12, delay: 1}}
            />
            <motion.input type="email" placeholder='Your email address' name="user_email" id="user_email" className='contact-input' required
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{ once: true }}
              transition={{type: 'spring', stiffness: 100, damping: 12, delay: 1.2}}
            />
            <motion.textarea placeholder='Write your project' name="message" id="message" rows="5" className='contact-input' required
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{ once: true }}
              transition={{type: 'spring', stiffness: 100, damping: 12, delay: 1.4}}
            ></motion.textarea>
            <motion.button className='hello-button'
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{ once: true }}
              transition={{type: 'spring', stiffness: 100, damping: 12, delay: 1.6}}
            >
              Send Message <i className="fa-regular fa-paper-plane"></i>
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact