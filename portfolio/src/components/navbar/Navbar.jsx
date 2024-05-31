import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <>

        <nav className="nav-wrapper">
            <div className="nav-content">
                <img className="logo" src="./" alt=""/>

                <ul>
                    <li>
                        <a className="menu-item">Home</a>
                    </li>
                    <li>
                        <a className="menu-item">Skill</a>
                    </li>
                    <li>
                        <a className="menu-item">Project</a>
                    </li>
                    <li>
                        <a className="menu-item">Contact</a>
                    </li>

                    <button className="contact-btn" onClick={() => {}}>
                        Hire Me
                    </button>
                    
                </ul>

            </div>
        </nav>
    </>
  )
}

export default Navbar