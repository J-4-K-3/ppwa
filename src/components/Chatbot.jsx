import React, { useState } from 'react'
import './Chatbot.css'

const Chatbot = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! I am Assistant Zinhle. How can I help you today?' },
  ])
  const [input, setInput] = useState('')

  const toggleOpen = () => setOpen(!open)

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, { from: 'user', text: input }])
    setInput('')
    // Simulate bot response
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: 'bot', text: 'Thank you for your message. We will get back to you soon.' },
      ])
    }, 1000)
  }

  return (
    <>
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h4>Assistant Zinhle</h4>
            <button onClick={toggleOpen} aria-label="Close chat">×</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chatbot-message ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend} aria-label="Send message">Send</button>
          </div>
        </div>
      )}
      <button className="chatbot-toggle" onClick={toggleOpen} aria-label="Open chat">
        💬
      </button>
    </>
  )
}

export default Chatbot
