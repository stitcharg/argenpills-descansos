import Footer from "../components/footer";
import Logo from "../components/logo";
import Menu from "../components/menu";
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';


// src/pages/AboutUs.js
function AboutUs() {
	const { t } = useTranslation();
	return (
		<>
			<div className="App">
				<Logo />
				<Menu />
				<div className="container mx-auto">
					<div className="about-us">
						<h1>
							{parse(t("about-us.title-who"))}
						</h1>
						<p>
							{parse(t("about-us.who-p1"))}
						</p>
						<p>
							{parse(t("about-us.who-p2"))}
						</p>
						<p>
							{parse(t("about-us.who-p3"))}
						</p>
						<p>
							{parse(t("about-us.who-p4"))}
						</p>

						<h1>
							{parse(t("about-us.title-where"))}
						</h1>
						<p>
							{parse(t("about-us.where-p1"))}
						</p>
						<ul>
							<li>
								{parse(t("about-us.where-l1"))}
							</li>
							<li>
								{parse(t("about-us.where-l2"))}
							</li>
							<li>
								{parse(t("about-us.where-l3"))}
							</li>
						</ul>
						<p>
							{parse(t("about-us.where-p2"))}
						</p>

					</div>
					<Footer />
				</div>
			</div>
		</>
	);
}

export default AboutUs;