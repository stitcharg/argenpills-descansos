import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import './App.css'
import AboutUs from './pages/about-us'
import Homepage from './pages/homepage'
import { useEffect, Suspense } from 'react'
import { clarity } from 'react-microsoft-clarity'

function App() {

	if (!import.meta.env.DEV)
		useEffect(() => {
			clarity.init(
				import.meta.env.VITE_CLARITY_ID
			);
		}, []);

	return (
		<Suspense fallback={<div>Cargando / Loading...</div>}>
			<BrowserRouter>
				<Routes>
					{/* English routes */}
					<Route path="/en" element={<Homepage />} />
					<Route path="/en/who-are-we" element={<AboutUs />} />

					{/* Spanish routes */}
					<Route path="/es" element={<Homepage />} />
					<Route path="/es/quienes-somos" element={<AboutUs />} />

					{/* Redirect to Spanish home as a fallback */}
					<Route path="*" element={<Navigate to="/es" replace />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
}

export default App
