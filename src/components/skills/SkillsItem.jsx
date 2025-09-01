import React from 'react'
import './skillsItem.css'
import Tick from '../../assets/skills/icon-tick.png'

const SkillsItem = ({skillName}) => {
  return (
    <div className='skillsItem'>
      <img src={Tick} alt="icon" height={24} className='tick-icon'/>
      <div>
        <h3 className='skill-name'>{skillName}</h3>
        <p className='skill-level'>Advance</p>
      </div>
    </div>
  )
}

export default SkillsItem