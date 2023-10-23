import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import AboutUs from './pages/about-us'
import Homepage from './pages/homepage'
import { useEffect } from 'react'
import { clarity } from 'react-microsoft-clarity'

function App() {

	if (!import.meta.env.DEV)
		useEffect(() => {
			clarity.init(
				import.meta.env.VITE_CLARITY_ID
			);
		}, []);

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
