import { US, AR } from 'country-flag-icons/react/3x2'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Languages = () => {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;

    return (returnFlag(currentLanguage));
}

const returnFlag = (lang: string) => {
    const navigate = useNavigate();
    const { i18n } = useTranslation();

    const redirect = (lang: string) => {
        i18n.changeLanguage(lang);
        navigate(`/${lang}`);
        //navigate(0);
    }

    if (lang == "es") return <US title="English" onClick={() => redirect("en")} />

    if (lang == "en") return <AR title='Español' onClick={() => redirect("es")} />
}

export default Languages;
