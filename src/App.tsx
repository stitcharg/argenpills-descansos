import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import './App.css'
import AboutUs from './pages/about-us'
import Homepage from './pages/homepage'
import { useEffect, Suspense, useState } from 'react'
import { clarity } from 'react-microsoft-clarity'
import { useTranslation } from 'react-i18next'

function App() {
	const { i18n } = useTranslation();
	const [isLanguageReady, setIsLanguageReady] = useState(false);

	useEffect(() => {
		if (i18n.isInitialized) {
			// Explicitly wait for language change to complete
			i18n.changeLanguage('es').then(() => {
				setIsLanguageReady(true);
			});
		}
	}, [i18n.isInitialized]);

	if (!import.meta.env.DEV)
		useEffect(() => {
			clarity.init(import.meta.env.VITE_CLARITY_ID);
		}, []);

	if (!isLanguageReady) {
		return <div>Cargando / Loading...</div>;
	}

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

					{/* Default redirect */}
					<Route path="*" element={<Navigate to="/es" replace />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
}

export default App
