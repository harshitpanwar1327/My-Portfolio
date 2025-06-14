import React from 'react'
import './about.css'
import Profile from '../assets/profileImg.png'
import CV from '../assets/about/Harshit_Panwar_Resume.pdf'
import {motion} from 'motion/react'

const About = () => {
  return (
    <div  className='page'>
      <div className="page-content">
        <motion.h2 className='page-heading'
          initial={{opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          transition={{type: 'spring', stiffness: 100, damping: 12, delay: 0.4}}
        >
          About Me
        </motion.h2>
        <motion.p className='page-subheading'
          initial={{opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          transition={{type: 'spring', stiffness: 100, damping: 12, delay: 0.6}}
        >
          My introduction
        </motion.p>
        <div className="about-page-content">
          <motion.img src={Profile} alt="Profile Img" className='aboutProfileImg'
            initial={{opacity: 0, scale: 0}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{type: 'spring', stiffness: 100, damping: 10, delay: 0.8}}
          />
          <div className="about-page-body">
            <motion.span className="about-body-box"
              initial={{opacity: 0, x: 100}}
              whileInView={{opacity: 1, x: 0}}
              transition={{type: 'spring', stiffness: 100, damping: 12, delay: 0.6}}
            >
              <i className="fa-solid fa-medal"></i>
              <p>Experience</p>
              <p className='about-body-value'>1+ Years</p>
            </motion.span>
            <motion.span className="about-body-box"
              initial={{opacity: 0, x: 100}}
              whileInView={{opacity: 1, x: 0}}
              transition={{type: 'spring', stiffness: 100, damping: 12, delay: 0.8}}
            >
              <i className="fa-solid fa-suitcase"></i>
              <p>Completed</p>
              <p className='about-body-value'>15+ Projects</p>
            </motion.span>
            <motion.span className="about-body-box"
              initial={{opacity: 0, x: 100}}
              whileInView={{opacity: 1, x: 0}}
              transition={{type: 'spring', stiffness: 100, damping: 12, delay: 1}}
            >
              <i className="fa-solid fa-headset"></i>
              <p>Support</p>
              <p className='about-body-value'>Online 24/7</p>
            </motion.span>

            <motion.p className='about-page-para'
             initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              transition={{type: 'spring', stiffness: 100, damping: 12, delay: 1}}
            >
              Web developer, I create web pages with UI/UX user interface, I have years of experience and many clients are happy with the projects carried out.
            </motion.p>

            <motion.a download='' href={CV}
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              transition={{type: 'spring', stiffness: 100, damping: 12, delay: 1.2}}
            >
              <button className="hello-button">Download CV <i className="fa-regular fa-file-lines"></i></button>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About