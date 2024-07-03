import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from '../MobileNav/MobileNav';
import { Link } from 'react-scroll';


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

  return (
    <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>

        <nav className="nav-wrapper">
            <div className="nav-content">
                <img className="logo" src="./assets/images/logo.png" alt=""/>

                <ul>
                    <li>
                        <Link activeClass='active' to='home' spy={true} smooth={true} offset={-110} duration={500} className="menu-item">Home</Link>
                    </li>
                    <li>
                        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-270} duration={500} className="menu-item">Skills</Link>
                    </li>
                    <li>
                        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-180} duration={500} className="menu-item">Projects</Link>
                    </li>
                    <li>
                        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-160} duration={500} className="menu-item">Contact</Link>
                    </li>

                    <button className="contact-btn" onClick={() => {}}>
                        Hire Me
                    </button>
                    
                </ul>

                <button class="menu-btn" onClick={toggleMenu}>
                    <span
                        class={"material-symbols-outlined"}
                        style={{fontSize:"1rem"}}
                    >
                        {openMenu ? "close" : "menu"}
                    </span>
                </button>

            </div>
        </nav>
    </>
  );
};

export default Navbar