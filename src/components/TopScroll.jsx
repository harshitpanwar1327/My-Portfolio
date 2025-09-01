import React, {useEffect, useRef} from 'react'
import './topScroll.css'
import { animateScroll as scroll } from 'react-scroll'

const TopScroll = () => {
  let topScrollRef = useRef(null);

  useEffect(() => {
    const showButton = () => {
        if (window.scrollY > 300) {
        topScrollRef.current?.classList.add('show-button');
        } else {
        topScrollRef.current?.classList.remove('show-button');
        }
    };

    window.addEventListener('scroll', showButton);

    return () => {
        window.removeEventListener('scroll', showButton);
    };
    }, []);

  return (
    <div className='top-scroll' onClick={() => scroll.scrollToTop()} ref={topScrollRef}>
        <i className="fa-solid fa-arrow-up"></i>
    </div>
  )
}

export default TopScroll