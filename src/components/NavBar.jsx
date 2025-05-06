import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ language, translations }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <NavLink to="/" onClick={closeMobileMenu}>PPWA</NavLink>
        </div>
        <div className="mobile-hamburger" onClick={toggleMobileMenu} aria-label="Toggle menu" role="button" tabIndex={0}>
          <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${mobileMenuOpen ? 'open' : ''}`}></div>
        </div>
        <ul className="desktop-menu">
          <li>
            <NavLink to="/" onClick={closeMobileMenu}>{translations.home}</NavLink>
          </li>
          <li>
            <NavLink to="/our-work" onClick={closeMobileMenu}>{translations.ourWork}</NavLink>
          </li>
          <li>
            <NavLink to="/donate" onClick={closeMobileMenu}>{translations.donate}</NavLink>
          </li>
          <li>
            <NavLink to="/volunteer" onClick={closeMobileMenu}>{translations.volunteer}</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMobileMenu}>{translations.about}</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMobileMenu}>{translations.contact}</NavLink>
          </li>
          <li>
            <NavLink to="/community" onClick={closeMobileMenu}>{translations.community}</NavLink>
          </li>
        </ul>
        {mobileMenuOpen && (
          <ul className="mobile-menu">
            <li>
              <NavLink to="/" onClick={closeMobileMenu}>{translations.home}</NavLink>
            </li>
            <li>
              <NavLink to="/our-work" onClick={closeMobileMenu}>{translations.ourWork}</NavLink>
            </li>
            <li>
              <NavLink to="/donate" onClick={closeMobileMenu}>{translations.donate}</NavLink>
            </li>
            <li>
              <NavLink to="/volunteer" onClick={closeMobileMenu}>{translations.volunteer}</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMobileMenu}>{translations.about}</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMobileMenu}>{translations.contact}</NavLink>
            </li>
            <li>
              <NavLink to="/community" onClick={closeMobileMenu}>{translations.community}</NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  )
}

export default NavBar
