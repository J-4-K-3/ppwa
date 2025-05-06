import React, { useState } from 'react'

const Donate = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [amount, setAmount] = useState('')
  const [message, setMessage] = useState('')

  const handleDonate = () => {
    if (!phoneNumber || !amount) {
      setMessage('Please enter both phone number and amount.')
      return
    }
    // Placeholder for actual payment processing logic
    setMessage(`Thank you for your donation of $${amount} via phone number ${phoneNumber}.`)
    setPhoneNumber('')
    setAmount('')
  }

  const whatsappNumber = '+271234567890' // example number, should match footer
  const emailAddress = 'info@ppwa.org' // should match footer

  return (
    <div style={{ padding: '2rem', color: '#333' }}>
      <h1>Donate</h1>
      <p>Your generous donations help us provide shelter, food, and care for children and elderly people who have nobody to take care of them.</p>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 300px', border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
          <h2>Donate via E-Wallet</h2>
          <label>
            Phone Number:
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
            />
          </label>
          <label style={{ marginTop: '1rem', display: 'block' }}>
            Amount (USD):
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
            />
          </label>
          <button
            onClick={handleDonate}
            style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Donate
          </button>
          {message && <p style={{ marginTop: '1rem', color: 'green' }}>{message}</p>}
        </div>
        <div style={{ flex: '1 1 300px', border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
          <h2>Other Donation Options</h2>
          <p>We also accept donations via bank transfer and in-kind contributions. Please contact us for more details.</p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
            <a
              href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '0.5rem 1rem', backgroundColor: '#25D366', color: 'white', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${emailAddress}`}
              style={{ padding: '0.5rem 1rem', backgroundColor: '#0072C6', color: 'white', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donate
