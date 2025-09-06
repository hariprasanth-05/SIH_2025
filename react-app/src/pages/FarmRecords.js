// src/pages/FarmRecords.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const FarmRecords = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h1>{t('farmRecords')}</h1>
      <p>{t('digitalDiary')}</p>
      <div className="record-categories">
        <button>{t('vaccination')}</button>
        <button>{t('treatment')}</button>
        <button>{t('sanitation')}</button>
        <button>{t('productivity')}</button>
      </div>
      <div className="vaccination-records">
        <h2>{t('vaccination')}</h2>
        <button>{t('addEntry')}</button>
        <div>
          <span>💉</span> {t('vaccination')} - {t('fmdVaccination')}
          <p>{t('date')}: March 15, 2024 | {t('nextDue')}: June 15, 2024</p>
          <span>{t('complete')}</span>
        </div>
        <div>
          <span>💉</span> {t('deworming')} - {t('allLivestock')}
          <p>{t('date')}: March 10, 2024 | {t('nextDue')}: June 10, 2024</p>
          <span>{t('dueSoon')}</span>
        </div>
      </div>
      <div className="treatment-records">
        <h2>{t('treatment')}</h2>
        <button>{t('addEntry')}</button>
        <div>
          <span>🐄</span> {t('antibioticTreatment')} - Cow #247
          <p>{t('condition')}: Mastitis | {t('duration')}: 7 days</p>
          <span>{t('ongoing')}</span>
        </div>
      </div>
      <div className="sanitation-records">
        <h2>{t('sanitation')}</h2>
        <button>{t('addEntry')}</button>
        <div>
          <span>💧</span> {t('waterTankCleaning')}
          <p>{t('date')}: March 12, 2024 | {t('nextDue')}: March 26, 2024</p>
          <span>{t('complete')}</span>
        </div>
      </div>
      <div className="productivity-records">
        <h2>{t('productivity')}</h2>
        <button>{t('addEntry')}</button>
        <div>
          <span>🌾</span> {t('milkProduction')} - {t('dailyAverage')}
          <p>25 {t('litersPerCow')} | {t('target')}: 30 {t('liters')}</p>
          <span>{t('belowTarget')}</span>
        </div>
      </div>
      <button>{t('exportPDF')}</button>
      <button>{t('shareReport')}</button>
    </section>
  );
};

export default FarmRecords;