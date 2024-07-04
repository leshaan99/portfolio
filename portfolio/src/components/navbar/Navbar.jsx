import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';



const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)

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
                        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-150} duration={500} className="menu-item">Projects</Link>
                    </li>
            

                    <button className="contact-btn" onClick={() => {
                        document.getElementById('contact').scrollIntoView({behavior: "smooth",block: "nearest"});
                    }}>
                        Hire Me
                    </button>
                    
                </ul>

            <img className="menulogo" src="./assets/images/menu.png" alt="" onClick={() => setShowMenu(!showMenu)}/>

            </div>

            <div className="mobilenav" style={{display: showMenu? 'flex':'none'}}>
                <ul>
                    <li>
                        <Link activeClass='active' to='home' spy={true} smooth={true} offset={-80} duration={500} className="mobile-menu-item" onClick={() => setShowMenu(false)}>Home</Link>
                    </li>
                    <li>
                        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-140} duration={500} className="mobile-menu-item" onClick={() => setShowMenu(false)}>About</Link>
                    </li>
                    <li>
                        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-230} duration={500} className="mobile-menu-item" onClick={() => setShowMenu(false)}>Skills</Link>
                    </li>
                    <li>
                        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-150} duration={500} className="mobile-menu-item" onClick={() => setShowMenu(false)}>Projects</Link>
                    </li>
                    <li>
                        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-150} duration={500} className="mobile-menu-item" onClick={() => setShowMenu(false)}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
  );
}

export default Navbar