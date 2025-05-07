import React from 'react'
import certificate1 from '../assets/certificate_1.jpeg'
import certificate2 from '../assets/certificate_2.jpeg'
import image1 from '../assets/image_1.jpeg'
import image2 from '../assets/image_2.jpeg'
import image3 from '../assets/image_3.jpeg'
import image4 from '../assets/image_4.jpeg'
import image5 from '../assets/image_5.jpeg'
import logo from '../assets/logo.jpeg'
import person1 from '../assets/person_1.jpeg'
import person2 from '../assets/person_2.jpeg'
import person3 from '../assets/person_3.jpeg'
import person4 from '../assets/person_4.jpeg'
import person5 from '../assets/person_5.jpeg'
import person6 from '../assets/person_6.jpeg'
import person7 from '../assets/person_7.jpeg'
import video1 from '../assets/video_1.mp4'
import video2 from '../assets/video_2.mp4'
import './Gallery.css'

const assets = [
  { type: 'image', src: certificate1, alt: 'Certificate 1' },
  { type: 'image', src: certificate2, alt: 'Certificate 2' },
  { type: 'image', src: image1, alt: 'Image 1' },
  { type: 'image', src: image2, alt: 'Image 2' },
  { type: 'image', src: image3, alt: 'Image 3' },
  { type: 'image', src: image4, alt: 'Image 4' },
  { type: 'image', src: image5, alt: 'Image 5' },
  { type: 'image', src: logo, alt: 'Logo' },
  { type: 'image', src: person1, alt: 'Person 1' },
  { type: 'image', src: person2, alt: 'Person 2' },
  { type: 'image', src: person3, alt: 'Person 3' },
  { type: 'image', src: person4, alt: 'Person 4' },
  { type: 'image', src: person5, alt: 'Person 5' },
  { type: 'image', src: person6, alt: 'Person 6' },
  { type: 'image', src: person7, alt: 'Person 7' },
  { type: 'video', src: video1, alt: 'Video 1' },
  { type: 'video', src: video2, alt: 'Video 2' },
]

const Gallery = () => {
  return (
    <div style={{ padding: '2rem', color: '#333' }}>
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {assets.map((asset, index) => (
          asset.type === 'image' ? (
            <img
              key={index}
              src={asset.src}
              alt={asset.alt}
              style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '1rem' }}
            />
          ) : (
            <video
              key={index}
              src={asset.src}
              controls
              style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '1rem' }}
            />
          )
        ))}
      </div>
    </div>
  )
}

export default Gallery
