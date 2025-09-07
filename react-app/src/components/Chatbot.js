import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Chatbot = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: t('chatbotWelcome'), sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const userMessage = { text: inputText, sender: 'user' };
      setMessages(prev => [...prev, userMessage]);
      setInputText('');

      // Process the message and get bot response
      setTimeout(() => {
        const botResponse = getBotResponse(inputText, i18n.language);
        setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
      }, 500);
    }
  };

  const handleVoiceInput = () => {
    if (!isListening) {
      startVoiceRecognition();
    } else {
      stopVoiceRecognition();
    }
  };

  const startVoiceRecognition = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = getLanguageCode(i18n.language);
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputText(transcript);
      setIsListening(false);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const stopVoiceRecognition = () => {
    setIsListening(false);
  };

  const speakResponse = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = getLanguageCode(i18n.language);
    synth.speak(utterance);
  };

  const getLanguageCode = (lang) => {
    const codes = {
      en: 'en-US',
      ta: 'ta-IN',
      te: 'te-IN',
      ml: 'ml-IN',
      kn: 'kn-IN'
    };
    return codes[lang] || 'en-US';
  };

  const getBotResponse = (message, lang) => {
    const lowerMessage = message.toLowerCase();

    // Keyword-based responses
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('வணக்கம்') || lowerMessage.includes('నమస్కారం') || lowerMessage.includes('ഹലോ') || lowerMessage.includes('ನಮಸ್ಕಾರ')) {
      return t('chatbotHello');
    }

    if (lowerMessage.includes('disease') || lowerMessage.includes('sick') || lowerMessage.includes('நோய்') || lowerMessage.includes('రోగం') || lowerMessage.includes('രോഗം') || lowerMessage.includes('ರೋಗ')) {
      return t('chatbotDiseaseHelp');
    }

    if (lowerMessage.includes('scan') || lowerMessage.includes('upload') || lowerMessage.includes('photo') || lowerMessage.includes('ஸ்கேன்') || lowerMessage.includes('అప్‌లోడ్') || lowerMessage.includes('അപ്‌ലോഡ്') || lowerMessage.includes('ಸ್ಕ್ಯಾನ್')) {
      return t('chatbotScanHelp');
    }

    if (lowerMessage.includes('map') || lowerMessage.includes('outbreak') || lowerMessage.includes('வரைபடம்') || lowerMessage.includes('మ్యాప్') || lowerMessage.includes('മാപ്പ്') || lowerMessage.includes('ನಕ್ಷೆ')) {
      return t('chatbotMapHelp');
    }

    if (lowerMessage.includes('record') || lowerMessage.includes('farm') || lowerMessage.includes('பதிவு') || lowerMessage.includes('రికార్డ్') || lowerMessage.includes('റെക്കോർഡ്') || lowerMessage.includes('ದಾಖಲೆ')) {
      return t('chatbotRecordHelp');
    }

    if (lowerMessage.includes('hygiene') || lowerMessage.includes('clean') || lowerMessage.includes('சுகாதாரம்') || lowerMessage.includes('హైజీన్') || lowerMessage.includes('ഹൈജീൻ') || lowerMessage.includes('ಸ್ವಚ್ಛತೆ')) {
      return t('chatbotHygieneHelp');
    }

    if (lowerMessage.includes('community') || lowerMessage.includes('farmer') || lowerMessage.includes('சமூகம்') || lowerMessage.includes('కమ్యూనిటీ') || lowerMessage.includes('സമൂഹം') || lowerMessage.includes('ಸಮುದಾಯ')) {
      return t('chatbotCommunityHelp');
    }

    // Default response
    return t('chatbotDefault');
  };

  return (
    <>
      {/* Floating Chatbot Button */}
      <div className="chatbot-toggle" onClick={toggleChatbot}>
        {isOpen ? '✕' : '🤖'}
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>{t('buddyAI')}</h3>
            <span onClick={toggleChatbot}>✕</span>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <p>{msg.text}</p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={t('chatbotTypeMessage')}
            />
            <button
              onClick={handleVoiceInput}
              className={`voice-btn ${isListening ? 'listening' : ''}`}
            >
              {isListening ? '🎤' : '🎙️'}
            </button>
            <button onClick={handleSendMessage}>{t('send')}</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
