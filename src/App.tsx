import './App.css'

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
				</div>
			</div>
		</>
	)
}

export default App
