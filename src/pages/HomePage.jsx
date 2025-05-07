import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import person1 from '../assets/person_1.jpeg'
import person2 from '../assets/person_2.jpeg'
import person3 from '../assets/person_3.jpeg'
import person4 from '../assets/person_4.jpeg'
import person5 from '../assets/person_5.jpeg'
import person6 from '../assets/person_6.jpeg'
import person7 from '../assets/person_7.jpeg'
import './HomePage.css'

const images = [person1, person2, person3, person4, person5, person6, person7]

const HomePage = ({ translations }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalSlides = images.length
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
    }, 3000) // slide every 3 seconds
    return () => clearInterval(interval)
  }, [totalSlides])

  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="auto-slide-carousel">
          <img
            src={images[currentIndex]}
            alt={`Person ${currentIndex + 1}`}
            className="carousel-media"
          />
        </div>
        <div className="gradient-overlay"></div>
        <div className="hero-content">
          <h1>{translations.home}</h1>
          <p>{translations.caringMessage || 'Caring for those who have no one.'}</p>
          <div className="hero-ctas">
            <button className="btn primary" onClick={() => navigate('/donate')}>{translations.donate}</button>
            <button className="btn secondary" onClick={() => navigate('/volunteer')}>{translations.volunteer}</button>
            <button className="btn tertiary" onClick={() => navigate('/our-work')}>{translations.learnMore || 'Learn More'}</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
