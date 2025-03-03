import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.
	use(initReactI18next)
	.use(LanguageDetector)
	.use(HttpApi)
	.init({
		detection: {
			order: ['path']
		},
		interpolation: {
			escapeValue: false,
		},
		backend: {
			loadPath: '/locales/{{lng}}/translation.json',
		}
	});

export default i18n;