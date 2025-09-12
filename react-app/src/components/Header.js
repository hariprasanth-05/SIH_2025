// src/components/Header.js

import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoImage from '../images/logo.png'; // Correctly import the logo

const Header = () => {
  const { t, i18n } = useTranslation();
  const [navActive, setNavActive] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'ml', name: 'മലയാളം' },
    { code: 'kn', name: 'ಕನ್ನಡ' },
    { code: 'hi', name: 'हिन्दी' },
  { code: 'mr', name: 'मराठी' },
  { code: 'or', name: 'ଓଡ଼ିଆ' }
  ];

  const currentLang = languages.find(lang => lang.code === i18n.language);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target)) {
        setDesktopDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [desktopDropdownRef]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target)) {
        setMobileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileDropdownRef]);

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setDesktopDropdownOpen(false);
    setMobileDropdownOpen(false);
  };

  const toggleNav = () => setNavActive(!navActive);
  const closeNav = () => setNavActive(false);

  const LanguageDropdown = ({ mobile = false }) => {
    const ref = mobile ? mobileDropdownRef : desktopDropdownRef;
    const isOpen = mobile ? mobileDropdownOpen : desktopDropdownOpen;
    const setOpen = mobile ? setMobileDropdownOpen : setDesktopDropdownOpen;

    return (
      <div ref={ref} className={`custom-dropdown ${isOpen ? 'open' : ''}`}>
        <div className="dropdown-selected" onClick={() => setOpen(!isOpen)}>
          {currentLang?.name || 'English'}
        </div>
        <div className="dropdown-options">
          {languages.map(lang => (
            <div key={lang.code} className="dropdown-option" onClick={() => changeLanguage(lang.code)}>
              {lang.name}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <header>
      {/* Logo now includes both the image and the text */}
      <Link to="/" className="logo" onClick={closeNav}>
        <img src={logoImage} alt="Pashurakshak Logo" />
        <span>PASHURAKSHAK</span>
      </Link>
      
      <nav className="main-nav">
        <ul className={`nav-links ${navActive ? 'active' : ''}`}>
          <li className="mobile-lang"><LanguageDropdown mobile={true} /></li>
          <li style={{'--stagger-index': 1}}><NavLink to="/" onClick={closeNav} end>{t('home')}</NavLink></li>
          <li style={{'--stagger-index': 2}}><NavLink to="/disease-check" onClick={closeNav}>{t('diseaseCheck')}</NavLink></li>
          <li style={{'--stagger-index': 3}}><NavLink to="/outbreak-map" onClick={closeNav}>{t('outbreakMap')}</NavLink></li>
          <li style={{'--stagger-index': 4}}><NavLink to="/farm-records" onClick={closeNav}>{t('farmRecords')}</NavLink></li>
          <li style={{'--stagger-index': 5}}><NavLink to="/hygiene" onClick={closeNav}>{t('hygiene')}</NavLink></li>
          <li style={{'--stagger-index': 6}}><NavLink to="/buddy-ai" onClick={closeNav}>{t('buddyAI')}</NavLink></li>
          <li style={{'--stagger-index': 7}}><NavLink to="/community" onClick={closeNav}>{t('community')}</NavLink></li>
        </ul>
      </nav>

      <div className="header-controls">
        <div className="desktop-lang"><LanguageDropdown /></div>
        <button className={`hamburger ${navActive ? 'active' : ''}`} onClick={toggleNav} aria-label="Toggle navigation">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </div>
    </header>
  );
};

export default Header;