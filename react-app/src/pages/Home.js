// src/pages/Home.js

import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const mockScanResults = [
  { disease: "No disease detected", confidence: "98%", recommendation: "Animal appears healthy. Continue routine monitoring." },
  { disease: "Early signs of Mastitis", confidence: "75%", recommendation: "Isolate and consult a veterinarian immediately for confirmation." },
  { disease: "Possible Nutritional Deficiency", confidence: "60%", recommendation: "Review feed composition. Consider mineral supplements." },
  { disease: "Signs of Bovine Respiratory Disease (BRD)", confidence: "82%", recommendation: "High risk. Separate from herd and seek immediate veterinary care." },
];

const Home = () => {
  const { t } = useTranslation();

  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const fileInputRef = useRef(null);

  const [isTwinModalOpen, setIsTwinModalOpen] = useState(false);

  const handleScanClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploadedImage(URL.createObjectURL(file));
    setIsScanning(true);
    setScanResult(null);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * mockScanResults.length);
      const randomResult = mockScanResults[randomIndex];
      setScanResult(randomResult);
      setIsScanning(false);
    }, 3000);
  };

  // --- DIGITAL TWIN MODAL COMPONENT (NOW WITH ENVIRONMENTAL DATA) ---
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
            {/* New Environmental Data Section */}
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
  }

  return (
    <section>
      <h1>{t('welcome')}</h1>
      <p>{t('monitor')}</p>

      <div className="card-grid">
        {/* Card 1: Digital Twin */}
        <div className="card" style={{ '--stagger-index': 1 }}>
          <h3>{t('digitalTwin')}</h3>
          <p>{t('realTime')}</p>
          <ul className="alert-list">
            <li style={{ '--stagger-index': 1 }}><strong>{t('livestockHealth')}</strong></li>
            <li style={{ '--stagger-index': 2 }}><strong>{t('cropStatus')}</strong></li>
          </ul>
          <button className="btn btn-primary" onClick={() => setIsTwinModalOpen(true)}>{t('viewDetails')}</button>
        </div>

        {/* Card 2: Daily Scan */}
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
              <p><strong>Diagnosis:</strong> {scanResult.disease} ({scanResult.confidence} confidence)</p>
              <p><strong>Action:</strong> {scanResult.recommendation}</p>
              <button className="btn btn-secondary" onClick={() => { setScanResult(null); setUploadedImage(null); }}>Scan Another</button>
            </div>
          )}
        </div>

        {/* Card 3: Active Alerts */}
        <div className="card" style={{ '--stagger-index': 3 }}>
          <h3>{t('activeAlerts')}</h3>
          <ul className="alert-list">
            <li style={{ '--stagger-index': 1 }}><span>⚠️</span> {t('diseaseOutbreak')} 2km away</li>
            <li style={{ '--stagger-index': 2 }}><span>🗓️</span> {t('vaccinationDue')} tomorrow</li>
            <li style={{ '--stagger-index': 3 }}><span>✅</span> {t('allSystemsNormal')}</li>
          </ul>
        </div>
      </div>

      {/* Conditionally render the Digital Twin Modal */}
      {isTwinModalOpen && <DigitalTwinModal onClose={() => setIsTwinModalOpen(false)} />}
    </section>
  );
};

export default Home;