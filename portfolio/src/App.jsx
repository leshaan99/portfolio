import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'

export const App = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Hero/>
      </div>
    </>
  )
}

export default App