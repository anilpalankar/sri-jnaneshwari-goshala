import { createContext, useContext, useState } from 'react';
import { t } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  const toggleLang = () => setLang(prev => prev === 'en' ? 'kn' : 'en');
  const tr = t[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, tr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);