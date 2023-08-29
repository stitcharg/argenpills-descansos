import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import AboutUs from './pages/about-us'
import Homepage from './pages/homepage'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/quienes-somos" element={<AboutUs />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App
