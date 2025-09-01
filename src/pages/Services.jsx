import React, {useState} from 'react'
import './services.css'
import ServiceDetail from '../modals/ServiceDetail'
import {motion} from 'motion/react'

const Services = () => {
  let [openModal, setOpenModal] = useState(false);
  let [serviceName, setServiceName] = useState('');

  const handleViewMore = (service) => {
    setOpenModal(true);
    setServiceName(service);
  }

  return (
    <div className='page page-content'>
      <motion.h2 className="page-heading"
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{ once: true }}
        transition={{type: 'spring', stiffness: 100, damping: 12, delay: 0.4}}
      >
        Services
      </motion.h2>
      <motion.p className="page-subheading"
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{ once: true }}
        transition={{type: 'spring', stiffness: 100, damping: 12, delay: 0.6}}
      >
        What I offer
      </motion.p>
      <div className="services-page-content">
        <motion.div className="services-description-box"
          initial={{opacity: 0, x: 100}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{ once: true }}
          transition={{type: 'spring', stiffness: 100, damping: 12, delay: 0.8}}
        >
          <i className="fa-solid fa-globe service-icon"></i>
          <h3>Web <br/> Developer</h3>
          <p className='view-more' onClick={()=>handleViewMore('WebDeveloper')}>View More <i className="fa-solid fa-arrow-right"></i></p>
        </motion.div>
        <motion.div className="services-description-box"
          initial={{opacity: 0, x: 100}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{ once: true }}
          transition={{type: 'spring', stiffness: 100, damping: 12, delay: 1}}
        >
          <i className="fa-solid fa-table-columns service-icon"></i>
          <h3>Figma <br/> Designer</h3>
          <p className='view-more' onClick={()=>handleViewMore('FigmaDesigner')}>View More <i className="fa-solid fa-arrow-right"></i></p>
        </motion.div>
        <motion.div className="services-description-box"
          initial={{opacity: 0, x: 100}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{ once: true }}
          transition={{type: 'spring', stiffness: 100, damping: 12, delay: 1.2}}
        >
          <i className="fa-solid fa-code service-icon"></i>
          <h3>Software <br/> Developer</h3>
          <p className='view-more' onClick={()=>handleViewMore('SoftwareDeveloper')}>View More <i className="fa-solid fa-arrow-right"></i></p>
        </motion.div>
      </div>
      {openModal && <ServiceDetail setOpenModal={setOpenModal} serviceName={serviceName}/>}
    </div>
  )
}

export default Services