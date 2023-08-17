import './App.css'
import Footer from './components/footer'

import HeroComponent from './components/hero'
import Timeline from './components/timeline'

function App() {
	return (
		<>
			<div className="App">
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
