import { motion } from 'framer-motion';

const Footer = ({ currentLanguage }) => {
	const socialLinks = [
		{
			name: 'GitHub',
			url: 'https://github.com/RicardoArsv',
			icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
			color: 'hover:text-gray-400'
		},
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/ricardoarsv',
			icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
			color: 'hover:text-blue-400'
		},
		{
			name: 'Email',
			url: 'mailto:ricardoarsv.2004@gmail.com',
			icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
			color: 'hover:text-red-400'
		}
	];

	const quickLinks =
		currentLanguage?.Language === 'EN'
			? [
					{ name: 'Home', href: '#home' },
					{ name: 'Experience', href: '#experience' },
					{ name: 'Skills', href: '#skills' },
					{ name: 'Projects', href: '#projects' },
					{ name: 'Contact', href: '#contact' }
			  ]
			: [
					{ name: 'Inicio', href: '#home' },
					{ name: 'Experiencia', href: '#experience' },
					{ name: 'Habilidades', href: '#skills' },
					{ name: 'Proyectos', href: '#projects' },
					{ name: 'Contacto', href: '#contact' }
			  ];

	const scrollToSection = (href) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<footer className='bg-black border-t border-white/10 relative overflow-hidden'>
			<div className='absolute inset-0 opacity-5'>
				<div className='absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl' />
				<div className='absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl' />
			</div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<div className='flex items-center gap-3 mb-4'>
							<div className='w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-purple-900 flex items-center justify-center font-bold text-white shadow-lg'>
								RV
							</div>
							<span className='text-white font-bold text-xl'>
								Ricardo Villanueva
							</span>
						</div>
						<p className='text-gray-400 mb-4'>
							{currentLanguage?.Language === 'EN'
								? 'Full-Stack Developer passionate about building innovative solutions with AI and cloud technologies.'
								: 'Desarrollador Full-Stack apasionado por construir soluciones innovadoras con IA y tecnologías cloud.'}
						</p>
						<div className='flex gap-4'>
							{socialLinks.map((social) => (
								<motion.a
									key={social.name}
									href={social.url}
									target='_blank'
									rel='noopener noreferrer'
									className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
									whileHover={{ scale: 1.1, y: -2 }}
									whileTap={{ scale: 0.9 }}
								>
									<svg className='w-5 h-5 fill-current' viewBox='0 0 24 24'>
										<path d={social.icon} />
									</svg>
								</motion.a>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<h3 className='text-white font-bold text-lg mb-4'>
							{currentLanguage?.Language === 'EN'
								? 'Quick Links'
								: 'Enlaces Rápidos'}
						</h3>
						<ul className='space-y-2'>
							{quickLinks.map((link) => (
								<li key={link.name}>
									<a
										href={link.href}
										onClick={(e) => {
											e.preventDefault();
											scrollToSection(link.href);
										}}
										className='text-gray-400 hover:text-purple-400 transition-colors duration-300 inline-flex items-center gap-2'
									>
										<span className='text-purple-400'>›</span>
										{link.name}
									</a>
								</li>
							))}
						</ul>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<h3 className='text-white font-bold text-lg mb-4'>
							{currentLanguage?.Language === 'EN'
								? 'Contact Info'
								: 'Información de Contacto'}
						</h3>
						<ul className='space-y-3'>
							<li className='flex items-start gap-3 text-gray-400'>
								<svg
									className='w-5 h-5 text-purple-400 mt-1 flex-shrink-0'
									fill='currentColor'
									viewBox='0 0 20 20'
								>
									<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
									<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
								</svg>
								<a
									href='mailto:ricardoarsv.2004@gmail.com'
									className='hover:text-purple-400 transition-colors duration-300 break-all'
								>
									ricardoarsv.2004@gmail.com
								</a>
							</li>
							<li className='flex items-start gap-3 text-gray-400'>
								<svg
									className='w-5 h-5 text-purple-400 mt-1 flex-shrink-0'
									fill='currentColor'
									viewBox='0 0 20 20'
								>
									<path
										fillRule='evenodd'
										d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
										clipRule='evenodd'
									/>
								</svg>
								<span>Colombia</span>
							</li>
							<li className='flex items-start gap-3 text-gray-400'>
								<svg
									className='w-5 h-5 text-purple-400 mt-1 flex-shrink-0'
									fill='currentColor'
									viewBox='0 0 20 20'
								>
									<path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
								</svg>
								<span>(+57) 320 370 5387</span>
							</li>
						</ul>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className='pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4'
				>
					<p className='text-gray-400 text-sm text-center md:text-left'>
						© {new Date().getFullYear()} Ricardo Villanueva Montenegro.{' '}
						{currentLanguage?.Language === 'EN'
							? 'All rights reserved.'
							: 'Todos los derechos reservados.'}
					</p>
					<div className='flex items-center gap-2 text-gray-400 text-sm'>
						<span>
							{currentLanguage?.Language === 'EN'
								? 'Built with'
								: 'Construido con'}
						</span>
						<span className='text-red-400'>❤️</span>
						<span>
							{currentLanguage?.Language === 'EN' ? 'using' : 'usando'}
						</span>
						<span className='text-purple-400 font-semibold'>React</span>
						<span>&</span>
						<span className='text-blue-400 font-semibold'>Framer Motion</span>
					</div>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;
