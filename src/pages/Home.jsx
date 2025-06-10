import React from 'react'
import './home.css'
import Instagram from '../assets/home/icon-instagram.png'
import LinkedIn from '../assets/home/icon-linkedin.png'
import GitHub from '../assets/home/icon-github.png'
import Profile from '../assets/profileImg.png'
import { Link } from 'react-scroll'
import {motion} from 'motion/react'

const Home = () => {
  return (
    <div className='page'>
      <div className="home-page-content">
        <motion.div className="social-media-buttons"
          initial={{opacity: 0, y: -100}}
          whileInView={{opacity: 1, y: 0}}
          transition={{type: 'spring', stiffness: 100, damping: 10, delay: 0.4}}
        >
          <a href="https://www.instagram.com/_harshit_panwar_1327/"><img src={Instagram} alt="icon" className='social-media-icons'/></a>
          <a href="https://www.linkedin.com/in/harshit-panwar-98335a264"><img src={LinkedIn} alt="icon" className='social-media-icons'/></a>
          <a href="https://github.com/harshitpanwar1327/"><img src={GitHub} alt="icon" className='social-media-icons'/></a>
        </motion.div>

        <div className="home-page-main-content">
          <motion.h1 className='my-name-heading'
            initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{type: 'spring', stiffness: 100, damping: 12, delay: 0.4}}
          >Harshit Panwar</motion.h1>
          <motion.div
            initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{type: 'spring', stiffness: 100, damping: 12, delay: 0.6}}
          >---------- Web Developer</motion.div>
          <motion.p
            initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{type: 'spring', stiffness: 100, damping: 12, delay: 0.8}}
          >I'm professional web developer based in India, and I'm very passionate and dedicated to my work.</motion.p>
          <Link to="contact" smooth={true} duration={500} className='navigation-element'>
            <motion.button className='hello-button'
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              transition={{type: 'spring', stiffness: 100, damping: 12, delay: 1}}
            >Say Hello <i className="fa-regular fa-paper-plane"></i></motion.button>
          </Link>
        </div>

        <motion.div className="home-page-image"
          initial={{opacity: 0, scale: 0}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{type: 'spring', stiffness: 100, damping: 10, delay: 0.8}}
        >
          <img src={Profile} alt="Profile Img" className='profileImg'/>
        </motion.div>
      </div>
    </div>
  )
}

export default Home