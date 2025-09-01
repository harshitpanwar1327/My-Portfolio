import React from 'react'
import './portfolio.css'
import ProjectCard from '../components/portfolio/ProjectCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { projectsList } from '../utils/Projects'
import { Pagination } from 'swiper/modules'

const Portfolio = () => {
  return (
    <div className='page'>
      <div className="page-content">
        <h2 className="page-heading">Portfolio</h2>
        <p className="page-subheading">Most recent work</p>
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
              slidesPerView: 1,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 2,
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