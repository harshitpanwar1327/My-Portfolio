import React from 'react'
import './serviceDetail.css'

const ServiceDetails = {
    WebDeveloper: {
        heading : "Web Developer",
        description : [
            "Build responsive websites with React.",
            "Develop full-stack apps using Node.js and Firebase.",
            "Ensure fast load times and SEO optimization.",
            "Integrate secure user authentication.",
            "Create RESTful APIs and handle real-time data."
        ]
    },
    FigmaDesigner: {
        heading : "Figma Designer",
        description : [
            "Design clean and modern UI/UX.",
            "Create responsive web and app layouts.",
            "Build interactive Figma prototypes.",
            "Maintain design consistency and grids.",
            "Handoff assets with dev-ready accuracy."
        ]
    },
    SoftwareDeveloper: {
        heading : "Software Developer",
        description : [
            "Develop desktop apps using C# and .NET.",
            "Implement system-level features (monitoring, blocking).",
            "Work with local/cloud databases (MySQL, Firebase).",
            "Build secure, high-performance software.",
            "Use Git for version control and CI/CD."
        ]
    }
}

const ServiceDetail = ({setOpenModal, serviceName}) => {
  return (
    <div className='overlay' onClick={()=>setOpenModal(false)}>
        <div className="service-detail-container" onClick={(e)=>e.stopPropagation()}>
            <i className="fa-solid fa-xmark modal-cross" onClick={()=>setOpenModal(false)}></i>
            <h3 className='service-detail-heading'>{ServiceDetails[serviceName].heading}</h3>
            <p className="service-container-description">Services with more than 1 year of experiance. Providing quality work to clients and companies.</p>
            <ul className='service-description'>
                {ServiceDetails[serviceName].description.map((data, index) => (
                    <li key={index}><i className="fa-solid fa-circle-check"></i> {data}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default ServiceDetail