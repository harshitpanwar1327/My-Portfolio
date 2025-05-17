import React from 'react'
import './testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import Client1 from '../assets/testimonial/client1.png'
import Client2 from '../assets/testimonial/client2.png'
import Client3 from '../assets/testimonial/client3.png'
import Client4 from '../assets/testimonial/client4.png'
import Client5 from '../assets/testimonial/client5.png'
import Client6 from '../assets/testimonial/client6.png'

const Testimonial = () => {
  let clients = [
    {
      image: Client1,
      name: "Kajol Chaudhary",
      review: "Highly professional, responsive, and exceeded all project expectations brilliantly."
    },
    {
      image: Client2,
      name: "Sanya Bansal",
      review: "Dependable partner, always goes beyond to ensure client satisfaction."
    },
    {
      image: Client3,
      name: "Ayush Chodhary",
      review: "Creative solutions, reliable execution — truly a pleasure to work."
    },
    {
      image: Client4,
      name: "Aditi Guliyani",
      review: "Exceptional service, delivered on time with great attention detail."
    },
    {
      image: Client5,
      name: "Lakshay Arora",
      review: "Consistent quality, fast delivery, and excellent communication throughout project."
    },
    {
      image: Client6,
      name: "Anish Chaudhary",
      review: "Understood requirements perfectly, provided innovative, efficient, and scalable results"
    }
  ]

  return (
    <div className="page">
      <div className='page-content'>
        <h2 className="page-heading">Testimonial</h2>
        <p className="page-subheading">My client saying</p>
        <Swiper className='swiperContainer'
          slidesPerView={1}
          spaceBetween={12}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 36,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
        >
          {clients.map((review, index) => (
            <SwiperSlide key={index} className="client-review-card">
              <img src={review.image} alt="profile" className='client-img'/>
              <h4 className='client-name'>{review.name}</h4>
              <p className='review-paragraph'>{review.review}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonial