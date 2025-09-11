// src/pages/OutbreakMap.js

import React, { useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// --- Fix for default Leaflet icon not showing up ---
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;
// --- End of fix ---

// --- MOCK DATA FOR TAMIL NADU OUTBREAKS ---
const allMarkers = [
  { id: 1, position: [13.0827, 80.2707], city: 'Chennai', risk: 'High', type: 'Animal', details: 'Foot-and-Mouth Disease outbreak reported.' },
  { id: 2, position: [11.0168, 76.9558], city: 'Coimbatore', risk: 'Medium', type: 'Crop', details: 'Pest infestation affecting maize crops.' },
  { id: 3, position: [9.9252, 78.1198], city: 'Madurai', risk: 'Low', type: 'Animal', details: 'Routine vaccination drive in progress.' },
  { id: 4, position: [11.6643, 78.1460], city: 'Salem', risk: 'Medium', type: 'Animal', details: 'Suspected cases of Swine Fever.' },
  { id: 5, position: [12.9205, 79.1332], city: 'Vellore', risk: 'High', type: 'Crop', details: 'Severe fungal blight reported in tomato fields.' },
];
// --- END OF MOCK DATA ---

const OutbreakMap = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter the markers based on the active filter state
  const filteredMarkers = allMarkers.filter(marker => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'high') return marker.risk === 'High';
    if (activeFilter === 'medium') return marker.risk === 'Medium';
    if (activeFilter === 'low') return marker.risk === 'Low';
    if (activeFilter === 'animal') return marker.type === 'Animal';
    if (activeFilter === 'crop') return marker.type === 'Crop';
    return true;
  });

  const getRiskColor = (risk) => {
    if (risk === 'High') return 'red';
    if (risk === 'Medium') return 'orange';
    return 'green';
  };

  const getRiskClass = (risk) => {
    if (risk === 'High') return 'risk-high';
    if (risk === 'Medium') return 'risk-medium';
    return 'risk-low';
  };

  return (
    <section>
      <h1>Outbreak Map</h1>
      <p>Real-time disease and pest outbreak monitoring in Tamil Nadu.</p>

      {/* --- FILTER CONTROLS --- */}
      <div className="card" style={{paddingBottom: '1rem'}}>
        <h4>Filter by Risk</h4>
        <div className="button-group">
          <button className={`btn btn-secondary ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>All</button>
          <button className={`btn btn-secondary ${activeFilter === 'high' ? 'active' : ''}`} onClick={() => setActiveFilter('high')}>High</button>
          <button className={`btn btn-secondary ${activeFilter === 'medium' ? 'active' : ''}`} onClick={() => setActiveFilter('medium')}>Medium</button>
          <button className={`btn btn-secondary ${activeFilter === 'low' ? 'active' : ''}`} onClick={() => setActiveFilter('low')}>Low</button>
        </div>
         <h4>Filter by Type</h4>
        <div className="button-group">
          <button className={`btn btn-secondary ${activeFilter === 'animal' ? 'active' : ''}`} onClick={() => setActiveFilter('animal')}>Animal</button>
          <button className={`btn btn-secondary ${activeFilter === 'crop' ? 'active' : ''}`} onClick={() => setActiveFilter('crop')}>Crop</button>
        </div>
      </div>
      
      {/* --- MAP CONTAINER --- */}
      <div className="card">
        <MapContainer 
          center={[11.1271, 78.6569]} // Center of Tamil Nadu
          zoom={7} // Zoomed in on Tamil Nadu
          style={{ height: '500px', borderRadius: 'var(--border-radius-md)' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          />
          {filteredMarkers.map(marker => (
            <CircleMarker 
              key={marker.id} 
              center={marker.position} 
              pathOptions={{ color: getRiskColor(marker.risk) }} 
              radius={10}
            >
              <Tooltip>{marker.city}: {marker.risk} Risk</Tooltip>
              <Popup><b>{marker.city}</b><br/>{marker.details}</Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>

      {/* --- DYNAMIC ALERTS LIST --- */}
      <div className="card">
        <h3>Recent Alerts</h3>
        <ul className="alert-list">
          {filteredMarkers.length > 0 ? filteredMarkers.map(alert => (
            <li key={alert.id}>
              <span className={`risk-indicator ${getRiskClass(alert.risk)}`}></span>
              <strong>{alert.city} ({alert.risk} Risk):</strong> {alert.details}
            </li>
          )) : (
            <li>No alerts match the current filter.</li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default OutbreakMap;