import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const ModernNavbar = ({ handleLanguageChange, currentLanguage }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState('home');

	const navItems =
		currentLanguage?.Language === 'EN'
			? [
					{ name: 'Home', href: '#home', icon: '🏠' },
					{ name: 'Experience', href: '#experience', icon: '💼' },
					{ name: 'Education', href: '#education', icon: '🎓' },
					{ name: 'Skills', href: '#skills', icon: '⚡' },
					{ name: 'Projects', href: '#projects', icon: '🚀' },
					{ name: 'Contact', href: '#contact', icon: '📧' }
			  ]
			: [
					{ name: 'Inicio', href: '#home', icon: '🏠' },
					{ name: 'Experiencia', href: '#experience', icon: '💼' },
					{ name: 'Educación', href: '#education', icon: '🎓' },
					{ name: 'Habilidades', href: '#skills', icon: '⚡' },
					{ name: 'Proyectos', href: '#projects', icon: '🚀' },
					{ name: 'Contacto', href: '#contact', icon: '📧' }
			  ];

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);

			const sections = ['home', 'experience', 'skills', 'projects', 'contact'];
			const currentSection = sections.find((section) => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});

			if (currentSection) {
				setActiveSection(currentSection);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (href) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			setIsOpen(false);
		}
	};

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? 'bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-lg'
					: 'bg-transparent'
			}`}
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-20'>
					<motion.a
						href='#home'
						onClick={(e) => {
							e.preventDefault();
							scrollToSection('#home');
						}}
						className='flex items-center gap-3 group'
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<div className='w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-purple-900 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/50 group-hover:shadow-purple-500/80 transition-all duration-300'>
							RV
						</div>
						<span className='text-white font-bold text-xl hidden sm:block'>
							Ricardo Villanueva
						</span>
					</motion.a>

					<div className='hidden lg:flex items-center gap-2'>
						{navItems.map((item) => (
							<motion.a
								key={item.name}
								href={item.href}
								onClick={(e) => {
									e.preventDefault();
									scrollToSection(item.href);
								}}
								className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
									activeSection === item.href.substring(1)
										? 'bg-gradient-to-r from-purple-600 to-purple-900 text-white shadow-lg shadow-purple-500/50'
										: 'text-gray-300 hover:text-white hover:bg-white/5'
								}`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<span className='mr-2'>{item.icon}</span>
								{item.name}
							</motion.a>
						))}
					</div>

					<div className='flex items-center gap-4'>
						<motion.button
							onClick={handleLanguageChange}
							className='px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all duration-300'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							{currentLanguage?.Language === 'EN' ? '🇪🇸 ES' : '🇺🇸 EN'}
						</motion.button>

						<motion.button
							onClick={() => setIsOpen(!isOpen)}
							className='lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								{isOpen ? (
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								) : (
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M4 6h16M4 12h16M4 18h16'
									/>
								)}
							</svg>
						</motion.button>
					</div>
				</div>

				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
							className='lg:hidden overflow-hidden'
						>
							<div className='py-4 space-y-2'>
								{navItems.map((item, index) => (
									<motion.a
										key={item.name}
										href={item.href}
										onClick={(e) => {
											e.preventDefault();
											scrollToSection(item.href);
										}}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1 }}
										className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
											activeSection === item.href.substring(1)
												? 'bg-gradient-to-r from-purple-600 to-purple-900 text-white shadow-lg shadow-purple-500/50'
												: 'text-gray-300 hover:text-white hover:bg-white/5'
										}`}
									>
										<span className='text-2xl'>{item.icon}</span>
										{item.name}
									</motion.a>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			<motion.div
				className='absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600'
				style={{
					width: `${
						(window.scrollY /
							(document.documentElement.scrollHeight - window.innerHeight)) *
							100 || 0
					}%`
				}}
				initial={{ width: 0 }}
				animate={{
					width: `${
						(window.scrollY /
							(document.documentElement.scrollHeight - window.innerHeight)) *
							100 || 0
					}%`
				}}
			/>
		</motion.nav>
	);
};

export default ModernNavbar;
