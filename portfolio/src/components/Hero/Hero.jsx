import React from 'react'
import './Hero.css'


const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
            <h2>Transforming Ideas into Digital Realities</h2>
            <p>DevOps | Cloud Engineer | Frontend Developer</p>
        </div>

        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src="./assets/images/tech1.png" alt=""/>
                </div>
                <img className="profile" width="400px" src="./assets/images/Profile.png" alt=""/>
            </div>

            <div>
                <div className="tech-icon">
                    <img src="./assets/images/tech2.png" alt=""/>
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/tech3.png" alt=""/>
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/tech4.png" alt=""/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
