import React, { useRef } from 'react'
import './Project.css'
import ProjectCard from './ProjectCard/ProjectCard'
import { PROJECT } from '../../utils/data'
import Slider from "react-slick";

const Project = () => {
    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: ,
        arrow:false,
        responsive: [
            {
                breakpoint:769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    
  return (
    <section id="projects" className="project-container">
        <h5>Projects</h5>

        <div className="project-content">
            <Slider ref={sliderRef} {...settings}>
                {PROJECT.map((item) => (
                    <ProjectCard 
                        key={item.title} 
                        details={item}
                        about={item.text}
                        url={item.image}
                        link={item.link}/>
            ))}
            </Slider>
        </div>
    </section>
  )
}

export default Project
