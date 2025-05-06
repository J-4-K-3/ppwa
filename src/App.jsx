import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import OurWork from './pages/OurWork'
import Donate from './pages/Donate'
import Volunteer from './pages/Volunteer'
import About from './pages/About'
import Contact from './pages/Contact'
import Community from './pages/Community'
import LoadingScreen from './components/LoadingScreen'
import LanguagePicker from './components/LanguagePicker'
import Chatbot from './components/Chatbot'
import './styles/global.css'

const translations = {
  en: {
    home: 'Home',
    ourWork: 'Mission',
    donate: 'Donate',
    volunteer: 'Volunteer',
    about: 'About',
    contact: 'Contact',
    community: 'Community',
    subscribeLabel: 'Subscribe to our newsletter',
    subscribePlaceholder: 'Your email',
    subscribeButton: 'Subscribe',
    subscribeThankYou: 'Thank you for subscribing!',
    chatbotGreeting: 'Hello! I am Assistant Zinhle. How can I help you today?',
    chatbotResponse: 'Thank you for your message. We will get back to you soon.',
    languagePickerTitle: 'Please select your language',
    languageEnglish: 'English',
    languageZulu: 'IsiZulu',
    caringMessage: 'Caring for those who have no one.',
    learnMore: 'Learn More',
  },
  zu: {
    home: 'Ikhaya',
    ourWork: 'Umsebenzi Wethu',
    donate: 'Nikeza',
    volunteer: 'Zibandakanye',
    about: 'Mayelana',
    contact: 'Xhumana Nathi',
    community: 'Umphakathi',
    subscribeLabel: 'Bhalisela incwadi yezindaba yethu',
    subscribePlaceholder: 'I-imeyili yakho',
    subscribeButton: 'Bhalisa',
    subscribeThankYou: 'Ngiyabonga ngokubhalisa!',
    chatbotGreeting: 'Sawubona! NginguMsizi uZinhle. Ngingakusiza kanjani namuhla?',
    chatbotResponse: 'Ngiyabonga ngomlayo wakho. Sizokuphendula maduzane.',
    languagePickerTitle: 'Sicela ukhethe ulimi lwakho',
    languageEnglish: 'IsiNgisi',
    languageZulu: 'IsiZulu',
    caringMessage: 'Sikhathalela labo abangenamuntu.',
    learnMore: 'Funda kabanzi',
  },
}

function App() {
  const [loading, setLoading] = React.useState(true)
  const [languageSelected, setLanguageSelected] = React.useState(false)
  const [language, setLanguage] = React.useState('en')
  const [chatbotOpen, setChatbotOpen] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 10000)
    return () => clearTimeout(timer)
  }, [])

  const toggleChatbot = () => {
    setChatbotOpen(!chatbotOpen)
  }

  const handleLanguageSelect = (lang) => {
    setLanguage(lang)
    setLanguageSelected(true)
  }

  if (loading) {
    return <LoadingScreen />
  }

  if (!languageSelected) {
    return <LanguagePicker onSelect={handleLanguageSelect} translations={translations[language]} />
  }

  return (
    <Router>
      <MainLayout language={language} toggleChatbot={toggleChatbot} translations={translations[language]}>
        <Routes>
          <Route path="/" element={<HomePage language={language} translations={translations[language]} />} />
          <Route path="/our-work" element={<OurWork language={language} translations={translations[language]} />} />
          <Route path="/donate" element={<Donate language={language} translations={translations[language]} />} />
          <Route path="/volunteer" element={<Volunteer language={language} translations={translations[language]} />} />
          <Route path="/about" element={<About language={language} translations={translations[language]} />} />
          <Route path="/contact" element={<Contact language={language} translations={translations[language]} />} />
          <Route path="/community" element={<Community language={language} translations={translations[language]} />} />
        </Routes>
        {chatbotOpen && <Chatbot language={language} translations={translations[language]} />}
      </MainLayout>
    </Router>
  )
}

export default App
