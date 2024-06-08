import React from 'react'
import './Project.css'
import ProjectCard from './ProjectCard/ProjectCard'
import { PROJECT } from '../../utils/data'

const Project = () => {
  return (
    <section className="project-container">
        <h5>Projects</h5>

        <div className="project-content">
            {PROJECT.map((item) => (
                <ProjectCard key={item.title} details={item}/>
            ))}
        </div>
    </section>
  )
}

export default Project
