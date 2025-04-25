import { createContext, useState, useContext, useEffect } from 'react';

// Define the context type
interface LanguageContextType {
  language: string;
  changeLanguage: (lang: string) => void;
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType>({
  language: 'ar',
  changeLanguage: () => { }
});

export const LanguageProvider = ({ children }: any) => {
  const getPresetLanguage = () => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      return storedLanguage;
    }
    const browserLanguage = navigator.language.split('-')[0];
    if (browserLanguage == "ar") {
      return "ar";
    }
    return 'en';
  };

  const [language, setLanguage] = useState<string>(getPresetLanguage);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};