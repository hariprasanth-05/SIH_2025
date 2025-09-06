import React from 'react';
import { useTranslation } from 'react-i18next';

const DiseaseCheck = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h1>{t('diseaseCheck')}</h1>
      <p>{t('aiPowered')}</p>
      <div className="upload-media">
        <h2>{t('uploadMedia')}</h2>
        <div>
          <div>
            <span>📸</span> {t('uploadPhoto')}
            <p>{t('takePhoto')}</p>
            <button>{t('choosePhoto')}</button>
          </div>
          <div>
            <span>🎥</span> {t('uploadVideo')}
            <p>{t('recordVideo')}</p>
            <button>{t('recordVideoBtn')}</button>
          </div>
          <div>
            <span>🎤</span> {t('voiceSymptoms')}
            <p>{t('describeSymptoms')}</p>
            <button>{t('startRecording')}</button>
          </div>
        </div>
      </div>
      <div className="ai-diagnosis">
        <h2>{t('aiDiagnosis')}</h2>
        <p>{t('analyzing')}</p>
        <p>{t('possibleCause')}</p>
        <p>{t('nutritionalDef')}</p>
        <ul>
          <li>{t('isolate')}</li>
          <li>{t('disinfect')}</li>
          <li>{t('contactVet')}</li>
          <li>{t('monitorAnimals')}</li>
        </ul>
        <div className="expert-verification">
          <p>{t('vetTyping')}</p>
          <button>{t('chatVet')}</button>
          <button>{t('askFarmers')}</button>
        </div>
      </div>
    </section>
  );
};

export default DiseaseCheck;