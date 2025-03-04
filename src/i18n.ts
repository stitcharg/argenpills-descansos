import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const languageDetector = new LanguageDetector(null, {
	order: ['path'],
	lookupFromPathIndex: 0,
});

i18n
	.use(initReactI18next)
	.use(languageDetector)
	.use(HttpApi)
	.init({
		fallbackLng: 'es',
		interpolation: {
			escapeValue: false,
		},
		backend: {
			loadPath: '/locales/{{lng}}/translation.json',
		},
		react: {
			useSuspense: true
		}
	});

export default i18n;