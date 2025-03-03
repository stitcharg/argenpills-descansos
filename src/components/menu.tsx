import "../i18n";
import { useTranslation } from 'react-i18next';
import Languages from "./languages";
import { PageProps } from "./interfaces";

const Menu: React.FC<PageProps> = ({ language }) => {
	const { t } = useTranslation();
	const currentLanguage = language;

	return (
		<nav className="flex items-center justify-between flex-wrap bg-neutral-200 dark:bg-neutral-800 p-2">
			<div className="w-full flex-grow flex items-center">
				<div className="text-sm flex-grow p-0">
					<a href={`/${currentLanguage}`} className="inline-block mt-0 hover:bg-neutral-100 hover:rounded-md dark:hover:text-neutral-900 mr-4 p-2">
						{t('header.timeline')}
					</a>
					<a href={`/${currentLanguage}/${t('urls.whoarewe')}`} className="inline-block mt-0 hover:bg-neutral-100 hover:rounded-md dark:hover:text-neutral-900 mr-4 p-2">
						{t('header.whoarewe')}
					</a>
				</div>
				<div className=" hover:bg-neutral-100 hover:rounded-md mr-1 p-2">
					<Languages />
				</div>
			</div>
		</nav>

	);
}

export default Menu;