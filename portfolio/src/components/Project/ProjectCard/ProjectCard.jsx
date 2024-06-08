import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({  details, title, url, link }) => {

  return (
    <div className="project-card">
        <h6>{details.title}</h6>

        <div className="language">{details.language}</div>
        <div className="image">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={url} alt={title} />
            </a>
        </div>

        
    </div>
  )
}

export default ProjectCard
