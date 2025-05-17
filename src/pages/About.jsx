import React from 'react'
import './about.css'
import Profile from '../assets/profileImg.png'
import CV from '../assets/about/Harshit_Panwar_Resume.pdf'

const About = () => {
  return (
    <div  className='page'>
      <div className="page-content">
        <h2 className='page-heading'>About Me</h2>
        <p className='page-subheading'>My introduction</p>
        <div className="about-page-content">
          <img src={Profile} alt="Profile Img" className='aboutProfileImg'/>
          <div className="about-page-body">
            <span className="about-body-box">
              <i className="fa-solid fa-medal"></i>
              <p>Experience</p>
              <p className='about-body-value'>1+ Years</p>
            </span>
            <span className="about-body-box">
              <i className="fa-solid fa-suitcase"></i>
              <p>Completed</p>
              <p className='about-body-value'>5+ Projects</p>
            </span>
            <span className="about-body-box">
              <i className="fa-solid fa-headset"></i>
              <p>Support</p>
              <p className='about-body-value'>Online 24/7</p>
            </span>

            <p className='about-page-para'>Web developer, I create web pages with UI/UX user interface, I have years of experience and many clients are happy with the projects carried out.</p>

            <a download='' href={CV}><button className="hello-button">Download CV <i className="fa-regular fa-file-lines"></i></button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About