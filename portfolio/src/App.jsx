import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'

export const App = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Hero/>
        <Skills/>
        <Project/>
        <Contact/>
      </div>
    </>
  )
}

export default App