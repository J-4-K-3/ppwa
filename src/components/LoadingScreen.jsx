import React from 'react'
import './LoadingScreen.css'
import logo from '../assets/logo.jpeg' // Assuming logo.png is in assets

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="logo-container">
        <img src={logo} alt="PPWA Logo" className="logo" />
        <div className="particle-trails"></div>
      </div>
      <p className="tagline">A home for every soul. Thank you for visiting PPWA.</p>
      <div className="morphing-blob"></div>
    </div>
  )
}

export default LoadingScreen
