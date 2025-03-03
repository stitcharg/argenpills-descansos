import Footer from "../components/footer";
import HeroComponent from "../components/hero";
import Logo from "../components/logo";
import Menu from "../components/menu";
import References from "../components/references";
import Timeline from "../components/timeline";
import { PageProps } from "../components/interfaces";

const Homepage: React.FC<PageProps> = ({ language }) => {
	return (
		<>
			<div className="App">
				<Logo />
				<Menu language={language} />
				<div className="container mx-auto">
					<HeroComponent />
					<div className="divider"></div>
					<Timeline language={language} />
					<References />
					<Footer language={language} />
				</div>
			</div>
		</>
	)
}

export default Homepage;