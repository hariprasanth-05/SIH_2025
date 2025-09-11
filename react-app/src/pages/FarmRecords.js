// src/pages/FarmRecords.js

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// --- VACCINATION GUIDE DATA ---
// This data provides the suggestions for each animal type.
const vaccinationGuides = [
  {
    type: 'Poultry',
    image: 'https://placehold.co/400x300/fff3e0/ff9800?text=Poultry', // Replace with your image e.g., /images/poultry.png
    vaccinations: [
      { 
        name: "Marek's Disease Vaccine", 
        protects: "Marek's Disease (a viral tumor-causing disease)",
        schedule: "At 1 day old (in hatchery)" 
      },
      { 
        name: "Newcastle Disease (ND) Vaccine", 
        protects: "Newcastle Disease",
        schedule: "At 1-4 days old, with boosters every 2-3 months" 
      },
      { 
        name: "Infectious Bronchitis (IB) Vaccine", 
        protects: "Infectious Bronchitis virus",
        schedule: "At 10-14 days old" 
      },
      { 
        name: "Fowl Pox Vaccine", 
        protects: "Fowl Pox",
        schedule: "At 4-6 weeks of age" 
      },
    ],
  },
  {
    type: 'Pigs',
    image: 'https://placehold.co/400x300/fde2e7/e91e63?text=Pigs', // Replace with your image e.g., /images/pigs.png
    vaccinations: [
      { 
        name: "Mycoplasma Hyopneumoniae", 
        protects: "Enzootic Pneumonia",
        schedule: "At 1 week of age, booster at 3 weeks" 
      },
      { 
        name: "PCV2 Vaccine", 
        protects: "Porcine Circovirus Type 2",
        schedule: "At 3-4 weeks of age" 
      },
      { 
        name: "Classical Swine Fever (CSF) Vaccine", 
        protects: "Swine Fever",
        schedule: "At 8-12 weeks of age" 
      },
      { 
        name: "FMD Vaccine", 
        protects: "Foot-and-Mouth Disease",
        schedule: "At 4 months, then booster every 6 months" 
      },
    ],
  },
  {
    type: 'Cattle',
    image: 'https://placehold.co/400x300/e3f2fd/2196f3?text=Cattle', // Replace with your image e.g., /images/cattle.png
    vaccinations: [
      { 
        name: "FMD Vaccine", 
        protects: "Foot-and-Mouth Disease",
        schedule: "First dose at 4 months, booster 1 month later, then every 6 months" 
      },
      { 
        name: "Haemorrhagic Septicaemia (HS) Vaccine", 
        protects: "HS (common bacterial disease)",
        schedule: "Annually, before the monsoon season" 
      },
      { 
        name: "Black Quarter (BQ) Vaccine", 
        protects: "Black Quarter disease",
        schedule: "Annually, before the monsoon season" 
      },
      { 
        name: "Brucellosis Vaccine", 
        protects: "Brucellosis (in female calves)",
        schedule: "Once, between 4-8 months of age" 
      },
    ],
  },
];
// --- END OF DATA ---


const FarmRecords = () => {
  const { t } = useTranslation();
  const [selectedGuide, setSelectedGuide] = useState(null);

  // --- ANIMAL TYPE CARD COMPONENT ---
  const GuideCard = ({ guide }) => (
    <div className="animal-card" onClick={() => setSelectedGuide(guide)}>
      <img src={guide.image} alt={guide.type} className="animal-card-image" />
      <div className="animal-card-info">
        <h4>{guide.type}</h4>
        <p>View Vaccination Guide</p>
      </div>
    </div>
  );

  // --- VACCINATION GUIDE MODAL COMPONENT ---
  const VaccinationGuideModal = ({ guide, onClose }) => (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Recommended Vaccinations for {guide.type}</h2>
          <button onClick={onClose} className="modal-close-btn">×</button>
        </div>
        
        <div className="modal-body">
          <p>This is a general guide. Please consult a licensed veterinarian for a schedule tailored to your specific farm and location.</p>
          <table className="record-table">
            <thead>
              <tr>
                <th>Vaccine Name</th>
                <th>Protects Against</th>
                <th>Recommended Schedule</th>
              </tr>
            </thead>
            <tbody>
              {guide.vaccinations.map((v, i) => (
                <tr key={i}>
                  <td>{v.name}</td>
                  <td>{v.protects}</td>
                  <td>{v.schedule}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <section>
      <h1>Livestock Vaccination Guide</h1>
      <p>Select an animal type to see a general list of recommended vaccinations for their health and biosecurity.</p>

      <div className="animal-grid">
        {vaccinationGuides.map(guide => (
          <GuideCard key={guide.type} guide={guide} />
        ))}
      </div>

      {selectedGuide && <VaccinationGuideModal guide={selectedGuide} onClose={() => setSelectedGuide(null)} />}
    </section>
  );
};

export default FarmRecords;