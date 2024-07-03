import React, { useState } from 'react'
import './Skills.css'
import SkillCard from './SkillCard/SkillCard'
import { SKILLS } from '../../utils/data'
import SkillCardInfo from './SkillCardInfo/SkillCardInfo'

const Skills = () => {

  const [selectSkill, setSelectedSkill] = useState(SKILLS[0]);

  const hadleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section id="skill" className="skills-container">
        <h5>Technical Proficiency</h5>

        <div className="skills-content">
            <div className="skills">
              {SKILLS.map((item) => (
                <SkillCard
                  key={item.title}
                  iconUrl={item.icon}
                  title={item.title}
                  isActive={selectSkill.title === item.title}
                  onClick={() => {
                    hadleSelectSkill(item);
                  }}
                />
              ))}
            </div>
            <div className="skills-info">
              <SkillCardInfo
                heading={selectSkill.title}
                skills={selectSkill.skills}
              />
            </div>
        </div>
    </section>
  )
}

export default Skills
