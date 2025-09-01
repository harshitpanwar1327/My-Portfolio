import React from 'react'
import './skills.css'
import SkillsItem from '../components/skills/SkillsItem'
import {motion} from 'motion/react'

const Skills = () => {
  return (
    <div className='page page-content'>
      <motion.h2 className='page-heading'
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{ once: true }}
        transition={{type: 'spring', stiffness: 100, damping: 12, delay: 0.4}}
      >
        Skills
      </motion.h2>
      <motion.p className='page-subheading'
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{ once: true }}
        transition={{type: 'spring', stiffness: 100, damping: 12, delay: 0.6}}
      >
        My technical level
      </motion.p>
      <div className="skills-page-content">
        <motion.div className="skills-description-box"
          initial={{opacity: 0, x: -100}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{ once: true }}
          transition={{type: 'spring', stiffness: 100, damping: 12, delay: 0.8}}
        >
          <h3 className='skills-desctiption-heading'>Web Development</h3>
          <div className="skills-list">
            <SkillsItem skillName='MongoDB'/>
            <SkillsItem skillName='ExpressJS'/>
            <SkillsItem skillName='ReactJS'/>
            <SkillsItem skillName='NodeJS'/>
            <SkillsItem skillName='Git & GitHub'/>
            <SkillsItem skillName='Figma'/>
          </div>
        </motion.div>
        <motion.div className="skills-description-box"
          initial={{opacity: 0, x: 100}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{ once: true }}
          transition={{type: 'spring', stiffness: 100, damping: 12, delay: 1}}
        >
          <h3 className='skills-desctiption-heading'>Software Development</h3>
          <div className="skills-list">
            <SkillsItem skillName='C#'/>
            <SkillsItem skillName='.NET'/>
            <SkillsItem skillName='MSI Packaging'/>
            <SkillsItem skillName='SQL'/>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills