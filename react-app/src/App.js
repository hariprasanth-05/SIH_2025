// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DiseaseCheck from './pages/DiseaseCheck';
import OutbreakMap from './pages/OutbreakMap';
import FarmRecords from './pages/FarmRecords';
import Hygiene from './pages/Hygiene';
import BuddyAI from './pages/BuddyAI';
import Community from './pages/Community';

import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Common header with nav and languages */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/disease-check" element={<DiseaseCheck />} />
            <Route path="/outbreak-map" element={<OutbreakMap />} />
            <Route path="/farm-records" element={<FarmRecords />} />
            <Route path="/hygiene" element={<Hygiene />} />
            <Route path="/buddy-ai" element={<BuddyAI />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>
        <Chatbot /> {/* Global floating chatbot component */}
      </div>
    </Router>
  );
}

export default App;