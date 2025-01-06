
import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const direction = language === 'ar' ? 'rtl' : 'ltr';

  const changeLanguage = (lang) => {
    setLanguage(lang);
    document.documentElement.dir = direction; // Update global direction
  };

  return (
    <LanguageContext.Provider value={{ language, direction, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
