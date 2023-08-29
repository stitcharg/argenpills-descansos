import Footer from "../components/footer";
import HeroComponent from "../components/hero";
import Logo from "../components/logo";
import Menu from "../components/menu";
import References from "../components/references";
import Timeline from "../components/timeline";

function Homepage () {
	return (
		<>
			<div className="App">
				<Logo />
				<Menu />
				<div className="container mx-auto">
					<HeroComponent />
					<div className="divider"></div>
					<Timeline />
					<References />
					<Footer />
				</div>
			</div>
		</>
	)
}

export default Homepage;