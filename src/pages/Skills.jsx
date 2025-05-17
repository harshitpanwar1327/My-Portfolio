import React from 'react'
import './skills.css'
import SkillsItem from '../components/skills/SkillsItem'

const Skills = () => {
  return (
    <div className='page'>
      <div className="page-content">
        <h2 className='page-heading'>Skills</h2>
        <p className='page-subheading'>My technical level</p>
        <div className="about-page-content">
          <div className="skills-description-box">
            <h3 className='skills-desctiption-heading'>Frontend Developer</h3>
            <div className="skills-list">
              <SkillsItem skillName='HTML'/>
              <SkillsItem skillName='CSS'/>
              <SkillsItem skillName='JavaScript'/>
              <SkillsItem skillName='React'/>
              <SkillsItem skillName='Git'/>
              <SkillsItem skillName='Figma'/>
            </div>
          </div>
          <div className="skills-description-box">
            <h3 className='skills-desctiption-heading'>Backend Developer</h3>
            <div className="skills-list">
              <SkillsItem skillName='NodeJS'/>
              <SkillsItem skillName='Express'/>
              <SkillsItem skillName='SQL'/>
              <SkillsItem skillName='MongoDB'/>
              <SkillsItem skillName='Hosting'/>
              <SkillsItem skillName='FireBase'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills