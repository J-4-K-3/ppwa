import React from 'react'
import './LanguagePicker.css'

const LanguagePicker = ({ onSelect }) => {
  return (
    <div className="language-picker">
      <h2>Please select your language</h2>
      <div className="language-cards">
        <div
          className="language-card"
          onClick={() => onSelect('en')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onSelect('en')}
        >
          <h3>English</h3>
          <p>English language</p>
        </div>
        <div
          className="language-card"
          onClick={() => onSelect('zu')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onSelect('zu')}
        >
          <h3>Zulu</h3>
          <p>IsiZulu language</p>
        </div>
      </div>
    </div>
  )
}

export default LanguagePicker
