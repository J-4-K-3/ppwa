import React, { useState } from 'react'
import './Footer.css'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      // For now, just simulate submission
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <blockquote className="emotional-quote">
          “They are not forgotten. They are family.”
        </blockquote>
        <div className="footer-info">
          <div className="socials">
            <h4>Socials</h4>
            <a href="https://www.facebook.com/profile.php?id=100067750035014" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://wa.me/27697577311" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
          <div className="contact">
            <h4>Contact</h4>
            <p>Email: <a href='mailto:hlengiwechilu@gmail.com'>Foundation</a></p>
            <p>Admin Phone: <a href="tel:+27697577311">Call Here</a></p>
            <p>Second Phone: <a href="tel:+27602173252">Call Now</a></p>
            <p>Foundation Address:</p>
            <p>Mnamatha Road, KwaSondela</p>
            <p>Qadi, 3610 South Africa</p>
            <p>
              <a href="https://maps.app.goo.gl/BXsTRjepRr59Mpbs6?g_st=aw" target="_blank" rel="noopener noreferrer">
                Google Maps
              </a>
            </p>
          </div>
          <div className="more">
            <h4>More</h4>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
        <form className="email-signup" onSubmit={handleSubmit}>
          <label htmlFor="email">Subscribe to our newsletter</label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
          {submitted && <p className="success-message">Thank you for subscribing!</p>}
        </form>
      </div>
      <div className="footer-background"></div>
    </footer>
  )
}

export default Footer
