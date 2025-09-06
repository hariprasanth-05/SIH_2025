// src/pages/Hygiene.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Hygiene = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h1>{t('hygiene')}</h1>
      <p>{t('hygieneAssessment')}</p>
      <div className="camera-scanner">
        <h2>{t('cameraScanner')}</h2>
        <p>📷 {t('scanArea')}</p>
        <p>{t('pointCamera')}</p>
        <button>{t('startScan')}</button>
        <p>{t('hygieneScore')}: 78</p>
        <p>{t('goodScore')}</p>
      </div>
      <div className="recommendations">
        <h2>{t('recommendations')}</h2>
        <div>
          <span>💧 ✔</span> {t('cleanWater')}
          <p>{t('waterTankAlgae')}</p>
          <button>{t('viewInstructions')}</button>
        </div>
        <div>
          <span>🏠 ✔</span> {t('disinfectShed')}
          <p>{t('disinfectShedDesc')}</p>
          <button>{t('viewInstructions')}</button>
        </div>
        <div>
          <span>🐛 ✔</span> {t('pestControl')}
          <p>{t('pestControlDesc')}</p>
          <button>{t('viewInstructions')}</button>
        </div>
        <div>
          <span>✅ ✔</span> {t('goodPractices')}
          <p>{t('feedingAreasMaintained')}</p>
        </div>
        <h3>{t('quickTips')}</h3>
        <ul>
          <li>{t('cleanWaterDaily')}</li>
          <li>{t('removeManure')}</li>
          <li>{t('disinfectTools')}</li>
          <li>{t('monitorPests')}</li>
        </ul>
      </div>
    </section>
  );
};

export default Hygiene;