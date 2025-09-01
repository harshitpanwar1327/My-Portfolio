import React, {useEffect, useRef} from 'react'
import './navigationBar.css'
import { Link } from 'react-scroll'
import { motion } from 'motion/react'

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
      <motion.h3
        initial={{opacity: 0, y: -100}}
        animate={{opacity: 1, y: 0}}
        transition={{type: 'spring', stiffness: 100, damping: 10, delay: 0.2}}
      >
        PORTFOLIO.
      </motion.h3>
      <motion.div className="navigation-items"
        initial={{opacity: 0, x: 100}}
        animate={{opacity: 1, x: 0}}
        transition={{type: 'spring', stiffness: 100, damping: 10, delay: 0.2}}
      >
        <Link to="home" smooth={true} duration={500} className='navigation-element'>Home</Link>
        <Link to="about" smooth={true} duration={500} className='navigation-element'>About</Link>
        <Link to="skills" smooth={true} duration={500} className='navigation-element'>Skills</Link>
        <Link to="services" smooth={true} duration={500} className='navigation-element'>Services</Link>
        <Link to="portfolio" smooth={true} duration={500} className='navigation-element'>Portfolio</Link>
        <Link to="contact" smooth={true} duration={500} className='navigation-element'>Contact</Link>
      </motion.div>
    </div>
  )
}

export default NavigationBar