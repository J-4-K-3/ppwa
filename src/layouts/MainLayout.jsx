import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const MainLayout = ({ children, language, translations }) => {
  return (
    <div className="app-background">
      <div className="glass-container">
        <NavBar language={language} translations={translations} />
        <main>{children}</main>
        <Footer language={language} translations={translations} />
      </div>
    </div>
  )
}

export default MainLayout
