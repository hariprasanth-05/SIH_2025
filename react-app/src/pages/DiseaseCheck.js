// src/pages/DiseaseCheck.js

import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const mockDiagnosisResults = [
  { cause: "Foot & Mouth Disease (Confidence: 85%)", steps: ["Isolate affected animals immediately", "Disinfect feeding areas", "Contact veterinarian for confirmation"] },
  { cause: "Nutritional Deficiency (Confidence: 60%)", steps: ["Review feed composition", "Provide mineral supplement blocks", "Monitor animal's weight and energy"] },
  { cause: "Bovine Respiratory Disease (BRD) (Confidence: 78%)", steps: ["Ensure proper ventilation in sheds", "Minimize stress on the animal", "Seek immediate veterinary care"] },
  { cause: "No immediate threat detected (Confidence: 95%)", steps: ["Animal appears healthy", "Continue with routine monitoring and biosecurity measures"] }
];

// --- VET CHAT MODAL COMPONENT ---
const VetChatModal = ({ diagnosis, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(true);

  // Simulate the vet's responses
  useEffect(() => {
    const chatFlow = [
      { text: `Connecting to veterinarian for: "${diagnosis.cause}"...`, from: 'system', delay: 1500 },
      { text: "Dr. Priya has joined the chat.", from: 'system', delay: 3000 },
      { text: "Hello, I see the preliminary diagnosis. Can you provide more details about the animal's behavior and appetite?", from: 'vet', delay: 2000 }
    ];

    let messageTimeout;
    const showMessages = (index) => {
      if (index >= chatFlow.length) {
        setIsTyping(false);
        return;
      }
      const msg = chatFlow[index];
      messageTimeout = setTimeout(() => {
        setMessages(prev => [...prev, msg]);
        showMessages(index + 1);
      }, msg.delay);
    };

    showMessages(0);
    return () => clearTimeout(messageTimeout); // Cleanup on unmount
  }, [diagnosis.cause]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Veterinarian Chat</h2>
          <button onClick={onClose} className="modal-close-btn">×</button>
        </div>
        <div className="modal-body">
          <div className="chat-window">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-message ${msg.from}`}>{msg.text}</div>
            ))}
            {isTyping && (
              <div className="typing-indicator">
                <span></span><span></span><span></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


const DiseaseCheck = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // Hook for navigation
  
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [isVetChatOpen, setIsVetChatOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleChoosePhotoClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setUploadedImage(URL.createObjectURL(file));
    setIsScanning(true);
    setScanResult(null);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * mockDiagnosisResults.length);
      setScanResult(mockDiagnosisResults[randomIndex]);
      setIsScanning(false);
    }, 3000);
  };
  
  // New function to handle navigation to the community page
  const handleAskCommunity = () => {
    navigate('/community', { state: { diagnosis: scanResult.cause } });
  };

  return (
    <section>
      <h1>{t('diseaseCheck')}</h1>
      <p>{t('aiPowered')}</p>
      <div className="card-grid">
        <div className="card" style={{'--stagger-index': 1}}>
          <h3>{t('uploadMedia')}</h3>
          <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageUpload} style={{ display: 'none' }} />
          <div className="card-feature-grid">
            <div>
              <span style={{ fontSize: '2.5rem' }}>📸</span>
              <h4>{t('uploadPhoto')}</h4>
              <p>{t('takePhoto')}</p>
              <button className="btn btn-secondary" onClick={handleChoosePhotoClick}>{t('choosePhoto')}</button>
            </div>
            <div>
              <span style={{ fontSize: '2.5rem' }}>🎥</span>
              <h4>{t('uploadVideo')}</h4>
              <p>{t('recordVideo')}</p>
              <button className="btn btn-secondary" onClick={() => alert('Video upload feature coming soon!')}>{t('recordVideoBtn')}</button>
            </div>
            <div>
              <span style={{ fontSize: '2.5rem' }}>🎤</span>
              <h4>{t('voiceSymptoms')}</h4>
              <p>{t('describeSymptoms')}</p>
              <button className="btn btn-secondary" onClick={() => alert('Voice recording feature coming soon!')}>{t('startRecording')}</button>
            </div>
          </div>
        </div>
        <div className="card" style={{'--stagger-index': 2}}>
          <h3>{t('aiDiagnosis')}</h3>
          {uploadedImage && <img src={uploadedImage} alt="Uploaded for diagnosis" style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />}
          {isScanning && <p>Analyzing image... Please wait.</p>}
          {!isScanning && !scanResult && <p>Upload an image to begin diagnosis.</p>}
          {scanResult && (
            <div>
              <p><strong>Possible Cause:</strong> {scanResult.cause}</p>
              <strong>Preventive Steps:</strong>
              <ul className="alert-list">
                {scanResult.steps.map((step, i) => <li key={i}>{step}</li>)}
              </ul>
              <div className="button-group" style={{marginTop: '1rem'}}>
                <button className="btn btn-primary" onClick={() => setIsVetChatOpen(true)}>{t('chatVet')}</button>
                <button className="btn btn-secondary" onClick={handleAskCommunity}>{t('askFarmers')}</button>
              </div>
            </div>
          )}
        </div>
      </div>
      {isVetChatOpen && <VetChatModal diagnosis={scanResult} onClose={() => setIsVetChatOpen(false)} />}
    </section>
  );
};

export default DiseaseCheck;