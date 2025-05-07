import React from 'react'
import certificate1 from '../assets/certificate_1.jpeg'
import certificate2 from '../assets/certificate_2.jpeg'

const About = () => {
  return (
    <div style={{ padding: '2rem', color: '#333' }}>
      <h1>About</h1>
      <img
        src="/src/assets/image_4.jpeg"
        alt="About PPWA"
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '1rem', borderRadius: '8px' }}
      />
      <img
        src={certificate1}
        alt="Certificate 1"
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '1rem', borderRadius: '8px' }}
      />
      <img
        src={certificate2}
        alt="Certificate 2"
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '1rem', borderRadius: '8px' }}
      />
      <p>PPWA is a nonprofit organization dedicated to caring for children and elderly people who have nobody to take care of them.</p>
      <p>We provide shelter, food, medical care, and emotional support to improve their quality of life.</p>
      <p>Our mission is to create a safe and nurturing environment for those in need in the Outer Durban West community.</p>
      <p>We work closely with local partners and volunteers to maximize our impact.</p>
      <p>Our commitment is to transparency, compassion, and sustainable support for our beneficiaries.</p>
      <p>
        Location: <a href="https://maps.app.goo.gl/BXsTRjepRr59Mpbs6?g_st=aw" target="_blank" rel="noopener noreferrer">Google Maps</a>
      </p>
    </div>
  )
}

export default About
