import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import About from './components/About/About'

export const App = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Hero/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
      </div>
      <Footer/>
    </>
  )
}

export default App