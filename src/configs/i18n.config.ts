import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import languages from '../languages/resources.json';

i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  resources: languages,
});

export default i18n;
