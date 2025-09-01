import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <div className="project-card">
      <video src={project.video} controls loop autoPlay muted className='project-card-video'></video>
      <h4 className='project-card-name'>{project.name}</h4>
      <p className='project-card-category'>{project.category}</p>
      <p className='project-card-view'><a href={project.link} target='_blank'>View &gt;</a></p>
    </div>
  )
}

export default ProjectCard