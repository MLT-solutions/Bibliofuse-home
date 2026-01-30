import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translation.json';
import es from './locales/es/translation.json';
import fr from './locales/fr/translation.json';
import nl from './locales/nl/translation.json';
import pt from './locales/pt/translation.json';
import ru from './locales/ru/translation.json';
import zh from './locales/zh/translation.json';
import ja from './locales/ja/translation.json';
import ko from './locales/ko/translation.json';
import id from './locales/id/translation.json';
import ms from './locales/ms/translation.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            es: { translation: es },
            fr: { translation: fr },
            nl: { translation: nl },
            pt: { translation: pt },
            ru: { translation: ru },
            zh: { translation: zh },
            ja: { translation: ja },
            ko: { translation: ko },
            id: { translation: id },
            ms: { translation: ms },
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['queryString', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['localStorage', 'cookie'],
        },
    });

export default i18n;
