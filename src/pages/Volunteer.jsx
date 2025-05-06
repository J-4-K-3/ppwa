import React from 'react'

const Volunteer = () => {
  const whatsappNumber = '+271234567890' // example number, should match footer

  return (
    <div style={{ padding: '2rem', color: '#333' }}>
      <h1>Volunteer</h1>
      <img
        src="/src/assets/image_3.jpeg"
        alt="Volunteering"
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '1rem', borderRadius: '8px' }}
      />
      <p>PPWA needs help with daily care activities, organizing community events, and providing educational support to children and elderly residents.</p>
      <p>Volunteers play a crucial role in maintaining a safe and nurturing environment for those we serve.</p>
      <p>Please note that while we appreciate all volunteers, we may only be able to offer payment to top-performing individuals due to limited resources.</p>
      <button
        onClick={() => window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`, '_blank')}
        style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Volunteer Now
      </button>
    </div>
  )
}

export default Volunteer
