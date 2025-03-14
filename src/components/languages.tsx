import { US, AR } from 'country-flag-icons/react/3x2'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Languages = () => {
	const { i18n } = useTranslation();
	const currentLanguage = i18n.language;

	return returnFlag(currentLanguage);
}

const returnFlag = (lang: string) => {
	const navigate = useNavigate();
	const { i18n } = useTranslation();

	const redirect = (lang: string) => {
		i18n.changeLanguage(lang);
		navigate(`/${lang}`);
	}

	if (lang == "es") return <US title="Change to english" className='w-7 hover:cursor-pointer' onClick={() => redirect("en")} />

	if (lang == "en") return <AR title='Cambiar a español' className='w-7 hover:cursor-pointer' onClick={() => redirect("es")} />
}

export default Languages;
