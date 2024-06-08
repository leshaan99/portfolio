import React, { useState } from 'react'
import './Skills.css'
import SkillCard from './SkillCard/SkillCard'
import { SKILLS } from '../../utils/data'

const Skills = () => {

  const [selectSkill, setSelectedSkill] = useState(SKILLS[0]);

  const hadleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className="skills-container">
        <h5>Technical Proficiency</h5>

        <div className="skills-content">
            <div className="skills">
              {SKILLS.map((item) => (
                <SkillCard
                  key={item.title}
                  iconUrl={item.icon}
                  title={item.title}
                />
              ))}
            </div>
            <div className="skills-info">
              <SkillsInfoCard
                heading={SelectedSkill.title}
                skills={SelectedSkill.skills}
              />
            </div>
        </div>
    </section>
  )
}

export default Skills
