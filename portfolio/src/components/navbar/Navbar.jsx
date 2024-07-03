import React, {} from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';


const Navbar = () => {

  return (

        <nav className="nav-wrapper">
            <div className="nav-content">
                <img className="logo" src="./assets/images/tag logo.png" alt=""/>

                <ul>
                    <li>
                        <Link activeClass='active' to='home' spy={true} smooth={true} offset={-80} duration={500} className="menu-item">Home</Link>
                    </li>
                    <li>
                        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-140} duration={500} className="menu-item">About</Link>
                    </li>
                    <li>
                        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-230} duration={500} className="menu-item">Skills</Link>
                    </li>
                    <li>
                        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-160} duration={500} className="menu-item">Projects</Link>
                    </li>

                    <button className="contact-btn" onClick={() => {
                        document.getElementById('contact').scrollIntoView({behavior: "smooth",block: "nearest"});
                    }}>
                        Hire Me
                    </button>
                    
                </ul>

            </div>
        </nav>
  );
}

export default Navbar