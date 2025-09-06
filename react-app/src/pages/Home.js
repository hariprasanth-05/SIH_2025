import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h1>{t('welcome')}</h1>
      <p>{t('monitor')}</p>
      <div className="digital-twin">
        <h2>{t('digitalTwin')}</h2>
        <p>{t('realTime')}</p>
        <p>{t('livestockHealth')}</p>
        <p>{t('cropStatus')}</p>
        <button>{t('viewDetails')}</button>
      </div>
      <div className="daily-scan">
        <h2>{t('dailyScan')}</h2>
        <p>{t('uploadPhotos')}</p>
        <button>{t('tapUpload')}</button>
        <button>{t('startScan')}</button>
      </div>
      <div className="active-alerts">
        <h2>{t('activeAlerts')}</h2>
        <ul>
          <li>{t('diseaseOutbreak')} 2km away</li>
          <li>{t('vaccinationDue')} tomorrow</li>
          <li>{t('allSystemsNormal')}</li>
        </ul>
      </div>
    </section>
  );
};

export default Home;