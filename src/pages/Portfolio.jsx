import React from 'react'
import './portfolio.css'
import ProjectCard from '../components/portfolio/ProjectCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { projectsList } from '../utils/Projects'
import { Pagination } from 'swiper/modules'
import {motion} from 'motion/react'

const Portfolio = () => {
  return (
    <div className='page'>
      <div className="page-content">
        <motion.h2 className="page-heading"
          initial={{opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          transition={{type: 'spring', stiffness: 100, damping: 12, delay: 0.4}}
        >
          Portfolio
        </motion.h2>
        <motion.p className="page-subheading"
          initial={{opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          transition={{type: 'spring', stiffness: 100, damping: 12, delay: 0.6}}
        >
          Most recent work
        </motion.p>
        <Swiper className='swiperContainer'
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          modules={[Pagination]}
        >
          {projectsList.map((project) => (
            <SwiperSlide>
              <ProjectCard project={project}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Portfolio