import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({  details, title, url, link, text }) => {
  const isVideo = url && url.endsWith('.mp4');

  return (
    <div className="project-card">
        <h6>{details.title}</h6>

        <div className="language">{details.language}</div>
        <p>{details.text}</p>
        <div className="media">
            <a href={link} target="_blank" rel="noopener noreferrer">
                {isVideo ? ( 
                    <video width="100%" controls>
                        <source src={url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : ( 
                    <img src={url} alt={title} />
                )}
            </a>
        </div>

        
    </div>
  )
}

export default ProjectCard
