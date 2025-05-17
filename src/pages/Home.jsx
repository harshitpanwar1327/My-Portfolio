import React from 'react'
import './home.css'
import Instagram from '../assets/home/icon-instagram.png'
import LinkedIn from '../assets/home/icon-linkedin.png'
import GitHub from '../assets/home/icon-github.png'
import Profile from '../assets/profileImg.png'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div className='page'>
      <div className="home-page-content">
        <div className="social-media-buttons">
          <a href="https://www.instagram.com/_harshit_panwar_1327/"><img src={Instagram} alt="icon" className='social-media-icons'/></a>
          <a href="https://www.linkedin.com/in/harshit-panwar-98335a264"><img src={LinkedIn} alt="icon" className='social-media-icons'/></a>
          <a href="https://github.com/harshitpanwar1327/"><img src={GitHub} alt="icon" className='social-media-icons'/></a>
        </div>

        <div className="home-page-main-content">
          <h1 className='my-name-heading'>Harshit Panwar</h1>
          <div>---------- Web Developer</div>
          <p>I'm professional web developer based in India, and I'm very passionate and dedicated to my work.</p>
          <Link to="contact" smooth={true} duration={500} className='navigation-element'>
            <button className='hello-button'>Say Hello <i className="fa-regular fa-paper-plane"></i></button>
          </Link>
        </div>

        <div className="home-page-image">
          <img src={Profile} alt="Profile Img" className='profileImg'/>
        </div>
      </div>
    </div>
  )
}

export default Home