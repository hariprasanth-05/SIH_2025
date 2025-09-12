// src/pages/BuddyAI.js

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.png';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const langCodeMap = {
  en: 'en-US', hi: 'hi-IN', mr: 'mr-IN', or: 'or-IN',
  ta: 'ta-IN', te: 'te-IN', kn: 'kn-IN', ml: 'ml-IN',
};

const speak = (text, lang) => {
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = langCodeMap[lang] || 'en-US';
  window.speechSynthesis.speak(utterance);
};

// --- RESPONSE MODAL COMPONENT (NOW WITH AUTOMATIC CLOSE) ---
const ResponseModal = ({ isLoading, responseText, onClose, onStreamComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  // Text streaming effect
  useEffect(() => {
    if (responseText && !isLoading) {
      let i = 0;
      const intervalId = setInterval(() => {
        setDisplayedText(responseText.substring(0, i));
        i++;
        if (i > responseText.length) {
          clearInterval(intervalId);
          // When streaming is done, wait a moment then call the onStreamComplete function
          setTimeout(() => {
            onStreamComplete();
          }, 700); // 0.7 second delay before auto-closing
        }
      }, 20); // Typing speed
      return () => clearInterval(intervalId);
    }
  }, [responseText, isLoading, onStreamComplete]);

  return (
    <div className="modal-overlay response-modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Pashurakshak is Responding...</h2>
          <button onClick={onClose} className="modal-close-btn">×</button>
        </div>
        <div className="modal-body">
          {isLoading ? (
            <div className="generating-container">
              <img src={logoImage} alt="Generating..." className="generating-icon"/>
              <p>Generating response...</p>
            </div>
          ) : (
            <p className="response-text">{displayedText}</p>
          )}
        </div>
      </div>
    </div>
  );
};


const BuddyAI = () => {
  const { t, i18n } = useTranslation();
  
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const chatEndRef = useRef(null);

  const [isResponseModalOpen, setIsResponseModalOpen] = useState(false);
  const [fullAiResponse, setFullAiResponse] = useState('');

  useEffect(() => {
    setMessages([{ text: t('aiGreeting'), from: 'ai' }]);
  }, [t]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  const getAiResponse = async (messageText, lang) => {
    try {
      const response = await fetch('http://localhost:3001/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageText, language: lang }),
      });
      if (!response.ok) throw new Error('Network response was not ok.');
      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error("Error communicating with backend:", error);
      return "Sorry, I'm having trouble connecting right now. Please try again later.";
    }
  };
  
  const handleSendMessage = async (messageText) => {
    if (messageText.trim() === '' || isLoading) return;
    const currentLang = i18n.language;

    const userMessage = { text: messageText, from: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    
    setIsResponseModalOpen(true);
    setIsLoading(true);

    const aiResponseText = await getAiResponse(messageText, currentLang);
    
    setFullAiResponse(aiResponseText);
    setIsLoading(false);
    speak(aiResponseText, currentLang);
  };
  
  const handleModalCloseAndSave = () => {
    // This function now handles adding the message to the chat log and closing the modal
    if (fullAiResponse) {
      const aiMessage = { text: fullAiResponse, from: 'ai' };
      setMessages(prev => [...prev, aiMessage]);
    }
    setIsResponseModalOpen(false);
    setFullAiResponse('');
  };

  const handleListen = () => {
    if (isListening || isLoading) return;
    recognition.lang = langCodeMap[i18n.language] || 'en-US';
    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      handleSendMessage(transcript);
    };
    recognition.onerror = (event) => setIsListening(false);
    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  return (
    <section>
      <h1>{t('buddyAI')}</h1>
      <p>{t('farmingAssistant')}</p>
      <div className="card-grid">
        <div className="card" style={{'--stagger-index': 1}}>
          <h3>AI Chat</h3>
          <div className="chat-window-ai">
            {messages.map((msg, i) => <div key={i} className={`chat-message-ai ${msg.from}`}>{msg.text}</div>)}
            <div ref={chatEndRef} />
          </div>
          <form className="chat-input-form" onSubmit={(e) => { e.preventDefault(); handleSendMessage(userInput); }}>
            <button type="button" className={`btn btn-primary btn-icon ${isListening ? 'listening' : ''}`} onClick={handleListen} disabled={isLoading}>🎤</button>
            <input type="text" className="form-input" placeholder={t('tapSpeak')} value={userInput} onChange={e => setUserInput(e.target.value)} disabled={isLoading}/>
            <button type="submit" className="btn btn-primary" disabled={isLoading}>Send</button>
          </form>
        </div>
        <div className="card" style={{'--stagger-index': 2}}>
          <h3>{t('quickActions')}</h3>
          <p>Or, jump directly to a feature:</p>
          <div className="button-group" style={{ flexDirection: 'column', gap: '1rem' }}>
            <Link to="/disease-check" className="btn btn-secondary">{t('diseaseCheck')}</Link>
            <Link to="/farm-records" className="btn btn-secondary">{t('farmRecords')}</Link>
            <Link to="/hygiene" className="btn btn-secondary">{t('hygiene')}</Link>
          </div>
        </div>
      </div>

      {isResponseModalOpen && 
        <ResponseModal 
          isLoading={isLoading} 
          responseText={fullAiResponse} 
          onClose={handleModalCloseAndSave} // The 'x' button now also saves the chat
          onStreamComplete={handleModalCloseAndSave} // Auto-triggers when streaming is done
        />
      }
    </section>
  );
};

export default BuddyAI;