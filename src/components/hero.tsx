import { Trans } from 'react-i18next';

function HeroComponent() {
	//We need to use Trans because we have formatted text (with bold, etc)
	return (
		<div className="hero min-v-screen" style={{ backgroundImage: 'url(/hero.jpg)' }}>
			<div className="hero-content text-center text-white">
				<div className="max-w-md backdrop-blur">
					<h1 className="text-5xl font-bold"><Trans i18nKey="hero.title" /></h1>
					<p className="py-6"><Trans i18nKey="hero.subtitle" /></p>
				</div>
			</div>
		</div>
	);
}

export default HeroComponent;