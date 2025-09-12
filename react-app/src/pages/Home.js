// src/pages/Home.js

import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const mockScanResults = [
  { disease: "Scan inconclusive", confidence: "N/A", recommendation: "Image quality is too low for an accurate analysis. Please upload a clear, well-lit photo of the animal from the side." },
  { disease: "No critical threats detected", confidence: "95%", recommendation: "The animal shows no obvious signs of major disease from this scan. Continue with routine monitoring of behavior and appetite." },
  { disease: "Potential signs of Bovine Respiratory Disease (BRD)", confidence: "70%", recommendation: "Subtle indicators like nasal discharge and lethargy are present. Observe breathing patterns closely and isolate if symptoms worsen. Consult a vet." },
  { disease: "Pattern match for early-stage Mastitis", confidence: "80%", recommendation: "Analysis suggests possible inflammation of the udder. A physical check is highly recommended. Consult a veterinarian for confirmation." },
];

const Home = () => {
  const { t } = useTranslation();
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const fileInputRef = useRef(null);
  const [isTwinModalOpen, setIsTwinModalOpen] = useState(false);

  const handleScanClick = () => { fileInputRef.current.click(); };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const fileName = file.name.toLowerCase();
    setUploadedImage(URL.createObjectURL(file));
    setIsScanning(true);
    setScanResult(null);

    setTimeout(() => {
      // --- NEW LOGIC: Check filename for keywords ---
      if (fileName.includes('water') || fileName.includes('stagnant') || fileName.includes('puddle')) {
        // If a keyword is found, give a guidance message instead of a diagnosis
        setScanResult({
          disease: "Environmental Scan Detected",
          confidence: "N/A",
          recommendation: "This image appears to show a potential hygiene risk (stagnant water). For environmental analysis, please use the Hygiene & Sanitation Scanner.",
          isGuidance: true // Flag to show the correct button
        });
      } else {
        // Otherwise, pick a random animal diagnosis
        const randomIndex = Math.floor(Math.random() * mockScanResults.length);
        setScanResult(mockScanResults[randomIndex]);
      }
      setIsScanning(false);
    }, 3000);
  };
  
  const DigitalTwinModal = ({ onClose }) => {
    const [envData, setEnvData] = useState({ temp: 31, humidity: 75 });
    const refreshEnvData = () => {
      setEnvData({
        temp: Math.floor(Math.random() * (35 - 28 + 1) + 28),
        humidity: Math.floor(Math.random() * (85 - 65 + 1) + 65),
      });
    };
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h2>Digital Twin Dashboard</h2>
            <button onClick={onClose} className="modal-close-btn">×</button>
          </div>
          <div className="modal-body">
            <div className="dashboard-grid">
              <div className="dashboard-section">
                <h4>Livestock Overview</h4>
                <div className="stat-item"><span>Overall Health Score:</span> <strong>95%</strong></div>
                <div className="progress-bar"><div className="progress-bar-inner" style={{width: '95%'}}></div></div>
                <div className="stat-item"><span>Cattle (35):</span> <strong>98%</strong></div>
                <div className="stat-item"><span>Poultry (250):</span> <strong>92%</strong></div>
              </div>
              <div className="dashboard-section">
                <h4>Crop Status</h4>
                <div className="stat-item"><span>Soil Moisture:</span> <strong>65%</strong></div>
                <div className="progress-bar"><div className="progress-bar-inner" style={{width: '65%'}}></div></div>
                <div className="stat-item"><span>Nutrient Levels (NPK):</span> <strong>Optimal</strong></div>
                <div className="stat-item"><span>Predicted Yield:</span> <strong>+5% vs. Avg</strong></div>
              </div>
            </div>
            <div className="dashboard-section" style={{marginTop: '1.5rem'}}>
                <h4>Environmental Data <button className="btn btn-secondary" style={{padding: '0.2rem 0.8rem', fontSize: '0.8rem'}} onClick={refreshEnvData}>Refresh</button></h4>
                <div className="stat-item"><span>🌡️ Temperature:</span> <strong>{envData.temp}°C</strong></div>
                <div className="stat-item"><span>💧 Humidity:</span> <strong>{envData.humidity}%</strong></div>
                <div className="stat-item"><span>💨 Air Quality Index:</span> <strong>35 (Good)</strong></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section>
      <h1>{t('welcome')}</h1>
      <p>{t('monitor')}</p>
      <div className="card-grid">
        <div className="card" style={{ '--stagger-index': 1 }}>
          <h3>{t('digitalTwin')}</h3>
          <p>{t('realTime')}</p>
          <ul className="alert-list">
            <li style={{ '--stagger-index': 1 }}><strong>{t('livestockHealth')}</strong></li>
            <li style={{ '--stagger-index': 2 }}><strong>{t('cropStatus')}</strong></li>
          </ul>
          <button className="btn btn-primary" onClick={() => setIsTwinModalOpen(true)}>{t('viewDetails')}</button>
        </div>
        <div className="card" style={{ '--stagger-index': 2 }}>
          <h3>{t('dailyScan')}</h3>
          <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageUpload} style={{ display: 'none' }} />
          {!isScanning && !scanResult && (
            <>
              <p>{t('uploadPhotos')}</p>
              <button className="btn btn-primary" onClick={handleScanClick}>{t('startScan')}</button>
            </>
          )}
          {uploadedImage && <img src={uploadedImage} alt="Uploaded for scan" style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />}
          {isScanning && <p>Scanning... Please wait.</p>}
          {scanResult && (
            <div>
              <h4>Scan Complete!</h4>
              <p><strong>Analysis:</strong> {scanResult.disease} {scanResult.confidence !== 'N/A' && `(${scanResult.confidence} confidence)`}</p>
              <p><strong>Action:</strong> {scanResult.recommendation}</p>
              {/* --- NEW LOGIC: Show a different button for the guidance message --- */}
              {scanResult.isGuidance ? (
                <Link to="/hygiene" className="btn btn-primary">Go to Hygiene Scanner</Link>
              ) : (
                <button className="btn btn-secondary" onClick={() => { setScanResult(null); setUploadedImage(null); }}>Scan Another</button>
              )}
            </div>
          )}
        </div>
        <div className="card" style={{ '--stagger-index': 3 }}>
          <h3>{t('activeAlerts')}</h3>
          <ul className="alert-list">
            <li style={{ '--stagger-index': 1 }}><span>⚠️</span> {t('diseaseOutbreak')} 2km away</li>
            <li style={{ '--stagger-index': 2 }}><span>🗓️</span> {t('vaccinationDue')} tomorrow</li>
            <li style={{ '--stagger-index': 3 }}><span>✅</span> {t('allSystemsNormal')}</li>
          </ul>
        </div>
      </div>
      {isTwinModalOpen && <DigitalTwinModal onClose={() => setIsTwinModalOpen(false)} />}
    </section>
  );
};

export default Home;