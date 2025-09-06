// src/pages/BuddyAI.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const BuddyAI = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h1>{t('buddyAI')}</h1>
      <p>{t('farmingAssistant')}</p>
      <div className="voice-assistant">
        <h2>{t('voiceAssistant')}</h2>
        <p>{t('tapSpeak')}</p>
        <button>🎤</button>
        <div>
          <p>{t('hello')}</p>
          <p>{t('cowSick')}</p>
          <p>{t('askSymptoms')}</p>
        </div>
        <button>{t('send')}</button>
        <div>
          <button>📞 {t('ivrSupport')}</button>
          <button>💬 {t('smsSupport')}</button>
        </div>
      </div>
      <div className="tip-day">
        <h2>{t('tipDay')}</h2>
        <div>
          <span>🌡️</span> {t('tempMonitor')}
          <p>{t('tempGuide')}</p>
          <button>{t('setReminder')}</button>
          <button>{t('learnMore')}</button>
          <h3>{t('relatedTopics')}</h3>
          <ul>
            <li>{t('heatStress')}</li>
            <li>{t('feverTreatment')}</li>
            <li>{t('thermometer')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BuddyAI;