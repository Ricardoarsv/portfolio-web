import { useState, useEffect } from 'react';
import ModernNavbar from './components/ModernNavbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import ProjectsShowcase from './components/ProjectsShowcase';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Dictionary } from './components/Languagues';

export default function App() {
	const [currentLanguage, setCurrentLanguage] = useState(Dictionary['EN']);

	const handleLanguageChange = () => {
		const newLanguage = currentLanguage['Language'] === 'EN' ? 'ES' : 'EN';
		setCurrentLanguage(Dictionary[newLanguage]);
	};

	useEffect(() => {
		document.documentElement.style.scrollBehavior = 'smooth';

		return () => {
			document.documentElement.style.scrollBehavior = 'auto';
		};
	}, []);

	return (
		<main className='min-h-screen bg-black overflow-x-hidden'>
			<ModernNavbar
				handleLanguageChange={handleLanguageChange}
				currentLanguage={currentLanguage}
			/>

			<Hero currentLanguage={currentLanguage} />
			<Experience currentLanguage={currentLanguage} />
			<Education currentLanguage={currentLanguage} />
			<Skills currentLanguage={currentLanguage} />
			<ProjectsShowcase currentLanguage={currentLanguage} />
			<ContactSection currentLanguage={currentLanguage} />
			<Footer currentLanguage={currentLanguage} />
		</main>
	);
}
