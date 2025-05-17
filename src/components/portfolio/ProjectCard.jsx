import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

const ProjectCard = ({project}) => {
  return (
    <div className="project-card">
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide><img src={project.image1} alt="Image" className='project-card-image'/></SwiperSlide>
            <SwiperSlide><img src={project.image2} alt="Image" className='project-card-image'/></SwiperSlide>
            <SwiperSlide><img src={project.image3} alt="Image" className='project-card-image'/></SwiperSlide>
        </Swiper>
        <h4 className='project-card-name'>{project.name}</h4>
        <p className='project-card-category'>{project.category}</p>
        <p className='project-card-view'><a href={project.link}>View &gt;</a></p>
    </div>
  )
}

export default ProjectCard