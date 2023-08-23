import './App.css'
import Footer from './components/footer'

import HeroComponent from './components/hero'
import Logo from './components/logo'
import Timeline from './components/timeline'

function App() {
	return (
		<>
			<div className="App">
				<Logo />
				<div className="container mx-auto">
					<HeroComponent />
					<div className="divider"></div>
					<Timeline />
					<Footer />
				</div>
			</div>
		</>
	)
}

export default App
