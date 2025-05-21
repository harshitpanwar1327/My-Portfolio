import React, {useState} from 'react'
import './services.css'
import ServiceDetail from '../modals/ServiceDetail'

const Services = () => {
  let [openModal, setOpenModal] = useState(false);
  let [serviceName, setServiceName] = useState('');

  const handleViewMore = (service) => {
    setOpenModal(true);
    setServiceName(service);
  }

  return (
    <div className='page'>
      <div className="page-content">
        <h2 className="page-heading">Services</h2>
        <p className="page-subheading">What I offer</p>
        <div className="about-page-content">
          <div className="services-description-box">
            <i className="fa-solid fa-globe service-icon"></i>
            <h3>Web <br/> Developer</h3>
            <p className='view-more' onClick={()=>handleViewMore('WebDeveloper')}>View More <i className="fa-solid fa-arrow-right"></i></p>
          </div>
          <div className="services-description-box">
            <i className="fa-solid fa-table-columns service-icon"></i>
            <h3>Figma <br/> Designer</h3>
            <p className='view-more' onClick={()=>handleViewMore('FigmaDesigner')}>View More <i className="fa-solid fa-arrow-right"></i></p>
          </div>
          <div className="services-description-box">
            <i className="fa-solid fa-code service-icon"></i>
            <h3>Software <br/> Developer</h3>
            <p className='view-more' onClick={()=>handleViewMore('SoftwareDeveloper')}>View More <i className="fa-solid fa-arrow-right"></i></p>
          </div>
        </div>
        {openModal && <ServiceDetail setOpenModal={setOpenModal} serviceName={serviceName}/>}
      </div>
    </div>
  )
}

export default Services