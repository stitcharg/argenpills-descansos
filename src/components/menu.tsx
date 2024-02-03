import "../i18n";
import { useTranslation } from 'react-i18next';
import Languages from "./languages";

const Menu = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <ul className="menu menu-horizontal bg-base-200 flex">
      <li><a href={`/${currentLanguage}`}>{t('header.timeline')}</a></li>
      <li><a href={`/${currentLanguage}/${t('urls.whoarewe')}`}>{t('header.whoarewe')}</a></li>
      <li className="ml-auto pr-10" ><Languages /></li>
    </ul>

  );
}

export default Menu;