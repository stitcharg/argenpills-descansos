import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import './App.css'
import AboutUs from './pages/about-us'
import Homepage from './pages/homepage'
import { useEffect, Suspense } from 'react'
import { clarity } from 'react-microsoft-clarity'
import { useTranslation } from 'react-i18next'

function App() {
	const { i18n } = useTranslation();

	useEffect(() => {
		if (i18n.isInitialized) {
			i18n.changeLanguage('es');
		}
	}, [i18n.isInitialized]);

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
					<Route path="/en" element={<Homepage language='en' />} />
					<Route path="/en/who-are-we" element={<AboutUs language='en' />} />

					{/* Spanish routes */}
					<Route path="/es" element={<Homepage language='es' />} />
					<Route path="/es/quienes-somos" element={<AboutUs language='es' />} />

					{/* Wait for i18n to be ready before redirecting */}
					<Route
						path="*"
						element={
							i18n.isInitialized ? (
								<Navigate to="/es" replace />
							) : (
								<div>Cargando / Loading...</div>
							)
						}
					/>
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
}

export default App
