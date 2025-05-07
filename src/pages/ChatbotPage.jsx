import React from 'react'
import Chatbot from '../components/Chatbot'

const ChatbotPage = ({ language, translations }) => {
  return (
    <div style={{ padding: '2rem', height: '100vh' }}>
      <Chatbot autoOpen={true} />
    </div>
  )
}

export default ChatbotPage
