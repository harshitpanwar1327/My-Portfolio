import React, {useEffect, useRef} from 'react'
import './navigationBar.css'
import { Link } from 'react-scroll'

const NavigationBar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navRef.current?.classList.add('navigation-scroll');
      } else {
        navRef.current?.classList.remove('navigation-scroll');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='navigation-bar' ref={navRef}>
      <div className="portfolio-heading">
        <h3>PORTFOLIO.</h3>
      </div>
      <div className="navigation-items">
        <Link to="home" smooth={true} duration={500} className='navigation-element'>Home</Link>
        <Link to="about" smooth={true} duration={500} className='navigation-element'>About</Link>
        <Link to="skills" smooth={true} duration={500} className='navigation-element'>Skills</Link>
        <Link to="services" smooth={true} duration={500} className='navigation-element'>Services</Link>
        <Link to="portfolio" smooth={true} duration={500} offset={-40} className='navigation-element'>Portfolio</Link>
        <Link to="contact" smooth={true} duration={500} className='navigation-element'>Contact</Link>
      </div>
    </div>
  )
}

export default NavigationBar