import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import video1 from '../assets/video_1.mp4'
import video2 from '../assets/video_2.mp4'
import image1 from '../assets/image_1.jpeg'
import image2 from '../assets/image_2.jpeg'
import image3 from '../assets/image_3.jpeg'
import image4 from '../assets/image_4.jpeg'
import image5 from '../assets/image_5.jpeg'
import './HomePage.css'

const videos = [video1, video2]

const images = [image1, image2, image3, image4, image5]

const HomePage = ({ translations }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slides = [...videos, ...images]
  const totalSlides = slides.length
  const navigate = useNavigate()

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }

  const renderSlide = (index) => {
    if (index < videos.length) {
      return (
        <video
          key={index}
          src={videos[index]}
          autoPlay
          muted
          loop
          className="carousel-media"
        />
      )
    } else {
      const imageIndex = index - videos.length
      return (
        <img
          key={index}
          src={images[imageIndex]}
          alt={`Slide ${imageIndex + 1}`}
          className="carousel-media"
        />
      )
    }
  }

  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="single-slide-carousel">
          <button className="carousel-button prev" onClick={goToPrev} aria-label="Previous Slide">&#10094;</button>
          <div className="carousel-slide-container">
            {renderSlide(currentIndex)}
          </div>
          <button className="carousel-button next" onClick={goToNext} aria-label="Next Slide">&#10095;</button>
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
