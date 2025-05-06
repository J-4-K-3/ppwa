import React, { useState } from 'react'

const OurWork = () => {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    organization: '',
    description: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder for form submission logic
    alert('Thank you for your interest in joining us!')
    setShowForm(false)
    setFormData({
      name: '',
      phone: '',
      email: '',
      organization: '',
      description: '',
    })
  }

  return (
    <div style={{ padding: '2rem', color: '#333' }}>
      <h1>Our Work</h1>
      <p>At PPWA, we provide shelter, care, and support for children and elderly people who have no one to take care of them.</p>
      <p>Our daily efforts include providing food, medical care, education, and emotional support to improve their quality of life.</p>
      <p>We collaborate with local communities and volunteers to create a safe and nurturing environment for those in need.</p>
      <p>We focus on holistic care that addresses physical, emotional, and social needs.</p>
      <p>Our programs include educational support, health services, and community engagement activities.</p>
      <p>We strive to empower individuals and families to build sustainable futures.</p>
      <p>Your support helps us continue this vital work and reach more people in need.</p>
      <button
        onClick={() => setShowForm(true)}
        style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Join Us
      </button>

      {showForm && (
        <div style={{ marginTop: '1rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
              />
            </label>
            <label style={{ marginTop: '1rem', display: 'block' }}>
              Phone Number:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
              />
            </label>
            <label style={{ marginTop: '1rem', display: 'block' }}>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
              />
            </label>
            <label style={{ marginTop: '1rem', display: 'block' }}>
              Organization Name:
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
              />
            </label>
            <label style={{ marginTop: '1rem', display: 'block' }}>
              Description (optional):
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
              />
            </label>
            <button
              type="submit"
              style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              style={{ marginLeft: '1rem', marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default OurWork
