import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enTranslation from './i18n/locales/en/translation.json';
import arTranslation from './i18n/locales/ar/translation.json';

i18n
  .use(initReactI18next) // Initialize the i18next instance
  .init({
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language in case the requested language is unavailable
    interpolation: {
      escapeValue: false, // React already escapes values, so we don't need to escape them again
    },
    resources: {
      en: {
        translation: enTranslation, // Load English translations from the JSON file
      },
      ar: {
        translation: arTranslation, // Load Arabic translations from the JSON file
      },
    },
  });

export default i18n;
