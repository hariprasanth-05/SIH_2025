import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useTranslation } from 'react-i18next';

const OutbreakMap = () => {
  const { t } = useTranslation();

  const markers = [
    { lat: 13.0827, lng: 80.2707, popup: "Chennai: High Risk - Disease Outbreak", color: 'red' },
    { lat: 11.0168, lng: 76.9558, popup: "Coimbatore: Medium Risk", color: 'orange' },
    { lat: 19.0760, lng: 72.8777, popup: "Your Farm: Low Risk", color: 'green' }
  ];

  return (
    <section>
      <h1>{t('outbreakMap')}</h1>
      <p>{t('realTimeOutbreak')}</p>
      <div id="map" style={{ height: '400px' }}>
        <MapContainer center={[11.1271, 78.6569]} zoom={5} style={{ height: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          />
          {markers.map((marker, idx) => (
            <CircleMarker key={idx} center={[marker.lat, marker.lng]} color={marker.color} radius={10}>
              <Popup>{marker.popup}</Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
      <div className="filters">
        <button>{t('all')}</button>
        <button>{t('animal')}</button>
        <button>{t('crop')}</button>
        <button>{t('climate')}</button>
      </div>
      <div className="recent-alerts">
        <h2>{t('recentAlerts')}</h2>
        <ul>
          <li>🚨 {t('highAlert')} - {t('footMouthOutbreak')} 2.3km away</li>
          <li>⚠️ {t('mediumAlert')} - {t('cropBlight')}</li>
          <li>🌧️ {t('weatherAlert')} - {t('heavyRainfall')}</li>
          <li>✅ {t('allClear')} - {t('noThreats')} 5km radius</li>
        </ul>
      </div>
    </section>
  );
};

export default OutbreakMap;