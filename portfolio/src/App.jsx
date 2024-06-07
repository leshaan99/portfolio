import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'

export const App = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Hero/>
        <Skills/>
      </div>
    </>
  )
}

export default App