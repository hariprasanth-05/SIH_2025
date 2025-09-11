// src/components/Header.js

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [navActive, setNavActive] = useState(false);
  
  // Separate state and refs for each dropdown to prevent conflicts
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
  ];

  const currentLang = languages.find(lang => lang.code === i18n.language);

  // Hook to close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target)) {
        setDesktopDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [desktopDropdownRef]);

  // Hook to close mobile dropdown when clicking outside
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

  return (
    <header>
      <Link to="/" className="logo" onClick={closeNav}>PASHURAKSHAK</Link>
      
      <nav>
        <ul className={`nav-links ${navActive ? 'active' : ''}`}>
          {/* Mobile-only Language Selector */}
          <li className="mobile-lang">
            <div ref={mobileDropdownRef} className={`custom-dropdown ${mobileDropdownOpen ? 'open' : ''}`}>
              <div className="dropdown-selected" onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}>
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
          </li>
          
          {/* Navigation Links */}
          <li style={{'--stagger-index': 1}}><Link to="/" onClick={closeNav}>{t('home')}</Link></li>
          <li style={{'--stagger-index': 2}}><Link to="/disease-check" onClick={closeNav}>{t('diseaseCheck')}</Link></li>
          <li style={{'--stagger-index': 3}}><Link to="/outbreak-map" onClick={closeNav}>{t('outbreakMap')}</Link></li>
          <li style={{'--stagger-index': 4}}><Link to="/farm-records" onClick={closeNav}>{t('farmRecords')}</Link></li>
          <li style={{'--stagger-index': 5}}><Link to="/hygiene" onClick={closeNav}>{t('hygiene')}</Link></li>
          <li style={{'--stagger-index': 6}}><Link to="/buddy-ai" onClick={closeNav}>{t('buddyAI')}</Link></li>
          <li style={{'--stagger-index': 7}}><Link to="/community" onClick={closeNav}>{t('community')}</Link></li>
        </ul>
      </nav>

      <div className="header-controls" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        {/* Desktop-only Language Selector */}
        <div className="desktop-lang">
          <div ref={desktopDropdownRef} className={`custom-dropdown ${desktopDropdownOpen ? 'open' : ''}`}>
            <div className="dropdown-selected" onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}>
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
        </div>

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