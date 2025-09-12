// src/pages/Hygiene.js

import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const hygieneInstructions = {
  cleanWater: {
    title: "How to Clean Water Tanks",
    steps: [
      "Drain the tank completely of all water.",
      "Scrub the interior surfaces (walls and floor) with a stiff brush to remove slime and residue.",
      "Prepare a chlorine solution (as per veterinary guidelines) and apply it to all interior surfaces.",
      "Leave the solution for at least 2 hours, then rinse thoroughly with clean water until the chlorine smell is gone.",
      "Refill the tank with fresh, clean water."
    ]
  },
  disinfectShed: {
    title: "How to Disinfect Sheds",
    steps: [
      "Remove all animals from the shed.",
      "Remove all bedding, manure, and feed remnants (dry cleaning).",
      "Wash all surfaces with high-pressure water and a detergent (wet cleaning).",
      "Allow the shed to dry completely.",
      "Apply a government-approved disinfectant evenly on all surfaces and let it sit for the recommended contact time before reintroducing animals."
    ]
  },
  pestControl: {
    title: "Integrated Pest Control Measures",
    steps: [
      "Keep feed in sealed, rodent-proof containers.",
      "Eliminate standing water sources where mosquitoes can breed.",
      "Use fly traps and baits, especially around manure storage areas.",
      "Ensure proper drainage around the farm to prevent muddy areas.",
      "Regularly inspect for signs of rodents and use traps as necessary."
    ]
  },
  stagnantWater: {
    title: "How to Manage Stagnant Water",
    steps: [
      "Identify and drain any areas where water collects and stands for more than 24 hours.",
      "Ensure all drainage channels on the farm are clear of debris and functioning correctly.",
      "Fill or grade low-lying areas in animal enclosures to prevent water accumulation.",
      "For essential water bodies that cannot be drained, consider introducing larvicidal fish or using BTI bacteria (a natural mosquito larvicide).",
      "Regularly clean and replace water in troughs; do not just top them up."
    ]
  }
};

const mockHygieneResults = [
    { score: 78, feedback: "Good, but improvement needed in water trough cleanliness." },
    { score: 85, feedback: "Excellent! No significant hygiene risks detected. Keep up the great work." },
    { score: 72, feedback: "Manure management needs attention. Ensure regular removal to reduce pest attraction." }
];

// Define a specific result for stagnant water
const stagnantWaterResult = {
    score: 40,
    feedback: "CRITICAL RISK DETECTED: Stagnant water is a major breeding ground for mosquitoes and bacteria, leading to diseases like Malaria and Dengue in staff, and increasing infection risk for livestock."
};

const Hygiene = () => {
  const { t } = useTranslation();
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const fileInputRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

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
        // If a keyword is found, force the specific stagnant water result
        setScanResult(stagnantWaterResult);
      } else {
        // Otherwise, pick a random result as before
        const randomIndex = Math.floor(Math.random() * mockHygieneResults.length);
        setScanResult(mockHygieneResults[randomIndex]);
      }
      setIsScanning(false);
    }, 3000);
  };

  const handleViewInstructions = (instructionKey) => {
    setModalContent(hygieneInstructions[instructionKey]);
    setIsModalOpen(true);
  };

  const InstructionsModal = ({ content, onClose }) => (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{content.title}</h2>
          <button onClick={onClose} className="modal-close-btn">×</button>
        </div>
        <div className="modal-body">
          <ol className="instruction-steps">
            {content.steps.map((step, index) => <li key={index}>{step}</li>)}
          </ol>
        </div>
      </div>
    </div>
  );

  return (
    <section>
      <h1>{t('hygiene')}</h1>
      <p>{t('hygieneAssessment')}</p>
      <div className="card-grid">
        <div className="card" style={{'--stagger-index': 1}}>
          <h3>{t('cameraScanner')}</h3>
          <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageUpload} style={{ display: 'none' }} />
          {!uploadedImage && (
            <>
              <p>{t('pointCamera')}</p>
              <button className="btn btn-primary" onClick={handleScanClick}>{t('startScan')}</button>
            </>
          )}
          {uploadedImage && <img src={uploadedImage} alt="Uploaded for hygiene scan" style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />}
          {isScanning && <p>Analyzing Hygiene... Please wait.</p>}
          {scanResult && (
            <div>
              <h3>Hygiene Score: <span style={{ color: scanResult.score > 80 ? 'var(--color-success)' : (scanResult.score > 60 ? 'var(--color-warning)' : 'var(--color-danger)') }}>{scanResult.score}/100</span></h3>
              <p><strong>Feedback:</strong> {scanResult.feedback}</p>
              <button className="btn btn-secondary" onClick={() => { setScanResult(null); setUploadedImage(null); }}>Scan Again</button>
            </div>
          )}
        </div>
        <div className="card" style={{'--stagger-index': 2}}>
          <h3>{t('recommendations')}</h3>
          <ul className="alert-list recommendation-list">
            <li onClick={() => handleViewInstructions('cleanWater')}><span>💧 {t('cleanWater')}</span><strong>View</strong></li>
            <li onClick={() => handleViewInstructions('stagnantWater')}><span>🦟 {t('stagnantWater')}</span><strong>View</strong></li>
            <li onClick={() => handleViewInstructions('disinfectShed')}><span>🏠 {t('disinfectShed')}</span><strong>View</strong></li>
            <li onClick={() => handleViewInstructions('pestControl')}><span>🐛 {t('pestControl')}</span><strong>View</strong></li>
          </ul>
        </div>
      </div>
      {isModalOpen && <InstructionsModal content={modalContent} onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

export default Hygiene;