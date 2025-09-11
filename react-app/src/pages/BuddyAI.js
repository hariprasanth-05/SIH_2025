// src/pages/BuddyAI.js

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// --- BROWSER SPEECH RECOGNITION SETUP ---
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;
// --- END OF SETUP ---


const getAiResponse = async (userInput) => {
  try {
    const response = await fetch('http://localhost:3001/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userInput }),
    });
    if (!response.ok) throw new Error('Network response was not ok.');
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error("Error communicating with backend:", error);
    return "Sorry, I'm having trouble connecting right now. Please try again later.";
  }
};

// --- TEXT-TO-SPEECH FUNCTION ---
const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  // Optional: Configure voice, rate, pitch
  // utterance.voice = window.speechSynthesis.getVoices()[0];
  // utterance.rate = 1;
  // utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
};


const BuddyAI = () => {
  const { t } = useTranslation();
  
  const [messages, setMessages] = useState([
    { text: "Namaste! I am Pashurakshak. How can I assist you? You can type or click the microphone to speak.", from: 'ai' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false); // New state for voice input
  const chatEndRef = useRef(null);

  // Scroll to the bottom of the chat when new messages are added
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  // Function to handle sending messages (both text and voice)
  const handleSendMessage = async (messageText) => {
    if (messageText.trim() === '' || isLoading) return;

    const userMessage = { text: messageText, from: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    const aiResponseText = await getAiResponse(messageText);
    const aiMessage = { text: aiResponseText, from: 'ai' };
    
    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
    
    // Speak the AI's response
    speak(aiResponseText);
  };

  // Function to start listening for voice
  const handleListen = () => {
    if (isListening || isLoading) return;

    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setUserInput(transcript); // Put transcript in input box
      handleSendMessage(transcript); // Automatically send the message
    };
    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
    };
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
            {isLoading && !isListening && <div className="typing-indicator"><span></span><span></span><span></span></div>}
            <div ref={chatEndRef} />
          </div>
          <form className="chat-input-form" onSubmit={(e) => { e.preventDefault(); handleSendMessage(userInput); }}>
            <button type="button" className={`btn btn-primary btn-icon ${isListening ? 'listening' : ''}`} onClick={handleListen} disabled={isLoading}>
              🎤
            </button>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Type or click the mic to speak..." 
              value={userInput} 
              onChange={e => setUserInput(e.target.value)} 
              disabled={isLoading}
            />
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
    </section>
  );
};

export default BuddyAI;