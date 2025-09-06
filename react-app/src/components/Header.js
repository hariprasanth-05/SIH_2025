import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [navActive, setNavActive] = useState(false);
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  };

  const toggleNav = () => setNavActive(!navActive);

  return (
    <header>
      <div className="logo">🌾 AgriLivestock BioSecure 360°</div>
      <div className="language-selector">
        <a href="#en" data-lang="en" className={currentLang === 'en' ? 'active' : ''} onClick={() => changeLanguage('en')}>English</a>
        <a href="#ta" data-lang="ta" className={currentLang === 'ta' ? 'active' : ''} onClick={() => changeLanguage('ta')}>தமிழ்</a>
        <a href="#te" data-lang="te" className={currentLang === 'te' ? 'active' : ''} onClick={() => changeLanguage('te')}>తెలుగు</a>
        <a href="#ml" data-lang="ml" className={currentLang === 'ml' ? 'active' : ''} onClick={() => changeLanguage('ml')}>മലയാളം</a>
        <a href="#kn" data-lang="kn" className={currentLang === 'kn' ? 'active' : ''} onClick={() => changeLanguage('kn')}>ಕನ್ನಡ</a>
      </div>
      <div className={`hamburger ${navActive ? 'toggle' : ''}`} onClick={toggleNav}>☰</div>
      <nav className={`nav-links ${navActive ? 'active' : ''}`}>
        <Link to="/">{t('home')}</Link>
        <Link to="/disease-check">{t('diseaseCheck')}</Link>
        <Link to="/outbreak-map">{t('outbreakMap')}</Link>
        <Link to="/farm-records">{t('farmRecords')}</Link>
        <Link to="/hygiene">{t('hygiene')}</Link>
        <Link to="/buddy-ai">{t('buddyAI')}</Link>
        <Link to="/community">{t('community')}</Link>
      </nav>
    </header>
  );
};

export default Header;