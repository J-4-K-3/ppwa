import React, { useState } from 'react'

const Donate = () => {
  const [copySuccess, setCopySuccess] = useState('')

  const phoneNumber = '+27697577311'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setCopySuccess('Phone number copied to clipboard!')
      setTimeout(() => setCopySuccess(''), 3000)
    })
  }

  return (
    <div style={{ padding: '2rem', color: '#333' }}>
      <h1>Donate</h1>
      <p>Your generous donations help us provide shelter, food, and care for children and elderly people who have nobody to take care of them.</p>
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', maxWidth: '400px' }}>
        <h2>Donate via Bank Transfer</h2>
        <p>Please transfer your donation to the following phone number using your bank's mobile app or online banking:</p>
        <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{phoneNumber}</p>
        <button
          onClick={copyToClipboard}
          style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Copy Transfer Number
        </button>
        {copySuccess && <p style={{ color: 'green', marginTop: '0.5rem' }}>{copySuccess}</p>}
      </div>
      <div style={{ marginTop: '2rem' }}>
        <h2>Other Donation Options</h2>
        <p>We also accept donations via bank transfer and in-kind contributions. Please contact us for more details.</p>
      </div>
    </div>
  )
}

export default Donate
