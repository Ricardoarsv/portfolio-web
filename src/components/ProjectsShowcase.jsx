import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

import GundoFitnessImg from '../assets/img/Gundo-fitness.webp';
import PortfolioSceneImg from '../assets/img/Portfolio-Scene.webp';
import HandleMinderImg from '../assets/img/HandleMinder-Scene.webp';
import IntranetGelvezImg from '../assets/img/IntranetGelvez-Scene.webp';

const ProjectsShowcase = ({ currentLanguage }) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1
	});

	const [filter, setFilter] = useState('all');
	const [selectedProject, setSelectedProject] = useState(null);

	const projects =
		currentLanguage?.Language === 'EN'
			? [
					{
						id: 1,
						title: 'GUNDO Fitness Platform',
						category: 'AI & Full-Stack',
						type: 'Professional',
						description:
							'Large-scale fitness platform with AI-powered features including dish scanner, personalized training plans, and multi-agent systems.',
						longDescription:
							'Comprehensive fitness ecosystem integrating AI architectures with multi-agent systems for personalized health and nutrition management. Features include intelligent dish scanning with macronutrient calculation, adaptive training plans, wellness questionnaires, and advanced analytics powered by Vertex AI and OpenAI.',
						technologies: [
							'React Native',
							'Next.js',
							'NestJS',
							'Python',
							'Vertex AI',
							'OpenAI',
							'Google Cloud',
							'BigQuery',
							'Firebase',
							'Stripe'
						],
						image: GundoFitnessImg,
						color: 'from-purple-600 to-purple-400',
						highlights: [
							'AI-Powered Nutrition Scanner',
							'Multi-Agent Architecture',
							'Personalized Training Plans',
							'Real-time Analytics with BigQuery',
							'Cloud Build CI/CD',
							'Payment Integration'
						],
						github: null,
						demo: null
					},
					{
						id: 2,
						title: '3D Web Portfolio',
						category: 'Frontend',
						type: 'Personal',
						description:
							'Personal web portfolio created to learn 3D web development with Three.js and showcase my skills.',
						longDescription:
							'Interactive 3D portfolio website built to explore Three.js capabilities. Features animated 3D models, particle systems, and immersive user experience. This project helped me master 3D web graphics and creative web development.',
						technologies: [
							'React',
							'Vite.js',
							'Three.js',
							'Tailwind CSS',
							'EmailJS'
						],
						image: PortfolioSceneImg,
						color: 'from-cyan-500 to-blue-500',
						highlights: [
							'3D Interactive Models',
							'Particle Systems',
							'Responsive 3D Design',
							'Email Integration'
						],
						github: 'https://github.com/RicardoArsv/Portfolio3D',
						demo: null
					},
					{
						id: 3,
						title: 'HandleMinder',
						category: 'Full-Stack',
						type: 'Personal',
						description:
							'Web application for managing personal expenses and income with visual analytics.',
						longDescription:
							'Complete financial management platform with frontend and backend. Track expenses, manage income, visualize spending patterns with charts, and get personalized financial insights. Built with modern web technologies and RESTful API architecture.',
						technologies: [
							'React',
							'Vite.js',
							'Tailwind CSS',
							'Shadcn',
							'Python',
							'FastAPI',
							'JWT'
						],
						image: HandleMinderImg,
						color: 'from-green-500 to-emerald-500',
						highlights: [
							'Expense & Income Tracking',
							'Visual Analytics',
							'JWT Authentication',
							'RESTful API'
						],
						github: 'https://github.com/RicardoArsv/HandleMinder',
						demo: null
					},
					{
						id: 4,
						title: 'Gelvez Distribuciones Intranet',
						category: 'Full-Stack',
						type: 'Professional',
						description:
							'Enterprise intranet for accounts and commercial areas, reducing SAP dependency.',
						longDescription:
							'Complete enterprise resource management system for Gelvez Distribuciones SAS. Features include automated reporting, mass client validation through PROCURADURÍA and DIAN, investment request management via Firebase, and software version tracking. Significantly reduced operational costs by minimizing SAP usage.',
						technologies: [
							'Python',
							'Django',
							'JavaScript',
							'HTML',
							'CSS',
							'Firebase',
							'Selenium'
						],
						image: IntranetGelvezImg,
						color: 'from-indigo-600 to-purple-600',
						highlights: [
							'Automated Business Reports',
							'Mass Client Validation',
							'Investment Request System',
							'SAP Cost Reduction'
						],
						github: null,
						demo: null
					},
					{
						id: 5,
						title: 'Automated Reports to Business Partners',
						category: 'Backend',
						type: 'Professional',
						description:
							'Automated script for sending reports to business partners using web scraping.',
						longDescription:
							'Python automation tool that scrapes data from the ABAKO portal and generates automated reports sent via SMTP to business partners. Streamlines communication and reduces manual reporting work for Gelvez Distribuciones.',
						technologies: ['Python', 'Playwright', 'SMTP', 'Web Scraping'],
						image: '📊',
						color: 'from-orange-500 to-red-500',
						highlights: [
							'Web Scraping with Playwright',
							'Automated Email Reports',
							'Data Processing',
							'Partner Communication'
						],
						github: null,
						demo: null
					},
					{
						id: 6,
						title: 'HandleCost API',
						category: 'Backend',
						type: 'Personal',
						description:
							'RESTful API for financial management with JWT authentication and real-time statistics.',
						longDescription:
							'FastAPI-based API that provides backend services for HandleMinder financial management platform. Features robust JWT authentication, real-time financial statistics calculation, and comprehensive transaction management for informed decision-making.',
						technologies: [
							'Python',
							'FastAPI',
							'JWT',
							'REST API',
							'PostgreSQL'
						],
						image: '💼',
						color: 'from-yellow-500 to-orange-500',
						highlights: [
							'JWT Authentication',
							'Real-time Financial Stats',
							'Transaction Management',
							'RESTful Architecture'
						],
						github: 'https://github.com/RicardoArsv/HandleCost-API',
						demo: null
					},
					{
						id: 7,
						title: 'Mass Client Validation System',
						category: 'Backend',
						type: 'Professional',
						description:
							'Script for bulk validation of clients through PROCURADURÍA and DIAN databases.',
						longDescription:
							'Automated validation tool that processes Excel files with client data and cross-references information with Colombian government databases (PROCURADURÍA and DIAN). Identifies background issues and name inconsistencies, generating comprehensive validation reports.',
						technologies: ['Python', 'Selenium', 'Pandas', 'Excel Processing'],
						image: '✅',
						color: 'from-blue-600 to-indigo-600',
						highlights: [
							'Bulk Data Processing',
							'Government Database Integration',
							'Automated Validation',
							'Excel Report Generation'
						],
						github: null,
						demo: null
					},
					{
						id: 8,
						title: 'DineFlow API',
						category: 'Backend',
						type: 'Personal',
						description:
							'Comprehensive restaurant management API with real-time order tracking and staff communication.',
						longDescription:
							'Backend API for restaurant management featuring real-time order tracking, staff communication, and Firebase integration for push notifications and data synchronization across mobile applications. Handles menu management, order processing, and analytics.',
						technologies: [
							'Express.js',
							'Node.js',
							'Firebase',
							'Real-time DB',
							'Push Notifications'
						],
						image: '🍽️',
						color: 'from-red-500 to-pink-500',
						highlights: [
							'Real-time Communication',
							'Order Management',
							'Staff Coordination',
							'Firebase Integration'
						],
						github: 'https://github.com/RicardoArsv/dineflow-API',
						demo: null
					},
					{
						id: 9,
						title: 'DineFlow Menu',
						category: 'Frontend',
						type: 'Personal',
						description:
							'Customer-facing menu interface with QR code access for restaurants.',
						longDescription:
							'Modern web interface for restaurant menus, accessible via QR codes. Provides an intuitive browsing experience with real-time menu updates, order placement capabilities, and seamless integration with DineFlow API.',
						technologies: [
							'React.js',
							'Tailwind CSS',
							'REST API',
							'QR Integration'
						],
						image: '📱',
						color: 'from-teal-500 to-cyan-500',
						highlights: [
							'QR Code Access',
							'Real-time Updates',
							'Responsive Design',
							'Order Placement'
						],
						github: 'https://github.com/RicardoArsv/dineflow-MENU',
						demo: null
					}
			  ]
			: [
					{
						id: 1,
						title: 'Plataforma GUNDO Fitness',
						category: 'IA & Full-Stack',
						type: 'Profesional',
						description:
							'Plataforma fitness a gran escala con características impulsadas por IA incluyendo escáner de platillos y planes personalizados.',
						longDescription:
							'Ecosistema fitness integral integrando arquitecturas de IA con sistemas multiagente para gestión personalizada de salud y nutrición. Incluye escaneo inteligente de platillos con cálculo de macronutrientes, planes de entrenamiento adaptativos, cuestionarios de bienestar, y analítica avanzada con Vertex AI y OpenAI.',
						technologies: [
							'React Native',
							'Next.js',
							'NestJS',
							'Python',
							'Vertex AI',
							'OpenAI',
							'Google Cloud',
							'BigQuery',
							'Firebase',
							'Stripe'
						],
						image: GundoFitnessImg,
						color: 'from-purple-600 to-purple-400',
						highlights: [
							'Escáner Nutricional con IA',
							'Arquitectura Multi-Agente',
							'Planes de Entrenamiento Personalizados',
							'Analítica en Tiempo Real con BigQuery',
							'CI/CD con Cloud Build',
							'Integración de Pagos'
						],
						github: null,
						demo: null
					},
					{
						id: 2,
						title: 'Portfolio Web 3D',
						category: 'Frontend',
						type: 'Personal',
						description:
							'Portfolio web personal creado para aprender desarrollo 3D con Three.js y mostrar mis habilidades.',
						longDescription:
							'Sitio web portfolio interactivo en 3D construido para explorar las capacidades de Three.js. Incluye modelos 3D animados, sistemas de partículas, y experiencia de usuario inmersiva. Este proyecto me ayudó a dominar gráficos web 3D y desarrollo web creativo.',
						technologies: [
							'React',
							'Vite.js',
							'Three.js',
							'Tailwind CSS',
							'EmailJS'
						],
						image: PortfolioSceneImg,
						color: 'from-cyan-500 to-blue-500',
						highlights: [
							'Modelos 3D Interactivos',
							'Sistemas de Partículas',
							'Diseño 3D Responsivo',
							'Integración de Email'
						],
						github: 'https://github.com/RicardoArsv/Portfolio3D',
						demo: null
					},
					{
						id: 3,
						title: 'HandleMinder',
						category: 'Full-Stack',
						type: 'Personal',
						description:
							'Aplicación web para gestión de gastos e ingresos personales con analítica visual.',
						longDescription:
							'Plataforma completa de gestión financiera con frontend y backend. Rastrea gastos, gestiona ingresos, visualiza patrones de gasto con gráficos, y ofrece insights financieros personalizados. Construida con tecnologías web modernas y arquitectura API RESTful.',
						technologies: [
							'React',
							'Vite.js',
							'Tailwind CSS',
							'Shadcn',
							'Python',
							'FastAPI',
							'JWT'
						],
						image: HandleMinderImg,
						color: 'from-green-500 to-emerald-500',
						highlights: [
							'Seguimiento de Gastos e Ingresos',
							'Analítica Visual',
							'Autenticación JWT',
							'API RESTful'
						],
						github: 'https://github.com/RicardoArsv/HandleMinder',
						demo: null
					},
					{
						id: 4,
						title: 'Intranet Gelvez Distribuciones',
						category: 'Full-Stack',
						type: 'Profesional',
						description:
							'Intranet empresarial para áreas de cuentas y comercial, reduciendo dependencia de SAP.',
						longDescription:
							'Sistema completo de gestión de recursos empresariales para Gelvez Distribuciones SAS. Incluye reportes automatizados, validación masiva de clientes vía PROCURADURÍA y DIAN, gestión de solicitudes de inversión vía Firebase, y seguimiento de versiones de software. Redujo significativamente costos operativos minimizando uso de SAP.',
						technologies: [
							'Python',
							'Django',
							'JavaScript',
							'HTML',
							'CSS',
							'Firebase',
							'Selenium'
						],
						image: IntranetGelvezImg,
						color: 'from-indigo-600 to-purple-600',
						highlights: [
							'Reportes Empresariales Automatizados',
							'Sistema de Solicitudes de Inversión',
							'Reducción de Costos SAP'
						],
						github: null,
						demo: null
					},
					{
						id: 5,
						title: 'Reportes Automatizados a Socios',
						category: 'Backend',
						type: 'Profesional',
						description:
							'Script automatizado para envío de reportes a socios comerciales usando web scraping.',
						longDescription:
							'Herramienta de automatización en Python que extrae datos del portal ABAKO y genera reportes automatizados enviados vía SMTP a socios comerciales. Optimiza la comunicación y reduce trabajo manual de reporteo para Gelvez Distribuciones.',
						technologies: ['Python', 'Playwright', 'SMTP', 'Web Scraping'],
						image: '📊',
						color: 'from-orange-500 to-red-500',
						highlights: [
							'Web Scraping con Playwright',
							'Reportes por Email Automatizados',
							'Procesamiento de Datos',
							'Comunicación con Socios'
						],
						github: null,
						demo: null
					},
					{
						id: 6,
						title: 'HandleCost API',
						category: 'Backend',
						type: 'Personal',
						description:
							'API RESTful para gestión financiera con autenticación JWT y estadísticas en tiempo real.',
						longDescription:
							'API basada en FastAPI que proporciona servicios backend para la plataforma de gestión financiera HandleMinder. Incluye autenticación robusta con JWT, cálculo de estadísticas financieras en tiempo real, y gestión completa de transacciones para toma de decisiones informadas.',
						technologies: [
							'Python',
							'FastAPI',
							'JWT',
							'API REST',
							'PostgreSQL'
						],
						image: '💼',
						color: 'from-yellow-500 to-orange-500',
						highlights: [
							'Autenticación JWT',
							'Estadísticas Financieras en Tiempo Real',
							'Gestión de Transacciones',
							'Arquitectura RESTful'
						],
						github: 'https://github.com/RicardoArsv/HandleCost-API',
						demo: null
					},
					{
						id: 7,
						title: 'Sistema de Validación Masiva de Clientes',
						category: 'Backend',
						type: 'Profesional',
						description:
							'Script para validación masiva de clientes a través de bases de datos de PROCURADURÍA y DIAN.',
						longDescription:
							'Herramienta de validación automatizada que procesa archivos Excel con datos de clientes y cruza información con bases de datos gubernamentales colombianas (PROCURADURÍA y DIAN). Identifica problemas de antecedentes e inconsistencias de nombres, generando reportes completos de validación.',
						technologies: [
							'Python',
							'Selenium',
							'Pandas',
							'Procesamiento Excel'
						],
						image: '✅',
						color: 'from-blue-600 to-indigo-600',
						highlights: [
							'Procesamiento Masivo de Datos',
							'Integración con Bases Gubernamentales',
							'Validación Automatizada',
							'Generación de Reportes Excel'
						],
						github: null,
						demo: null
					},
					{
						id: 8,
						title: 'DineFlow API',
						category: 'Backend',
						type: 'Personal',
						description:
							'API integral de gestión de restaurantes con seguimiento de pedidos en tiempo real y comunicación de personal.',
						longDescription:
							'API backend para gestión de restaurantes con seguimiento de pedidos en tiempo real, comunicación del personal, e integración con Firebase para notificaciones push y sincronización de datos entre aplicaciones móviles. Maneja gestión de menús, procesamiento de pedidos, y analítica.',
						technologies: [
							'Express.js',
							'Node.js',
							'Firebase',
							'Real-time DB',
							'Push Notifications'
						],
						image: '🍽️',
						color: 'from-red-500 to-pink-500',
						highlights: [
							'Comunicación en Tiempo Real',
							'Gestión de Pedidos',
							'Coordinación de Personal',
							'Integración Firebase'
						],
						github: 'https://github.com/RicardoArsv/dineflow-API',
						demo: null
					},
					{
						id: 9,
						title: 'DineFlow Menu',
						category: 'Frontend',
						type: 'Personal',
						description:
							'Interfaz de menú para clientes con acceso por código QR para restaurantes.',
						longDescription:
							'Interfaz web moderna para menús de restaurantes, accesible vía códigos QR. Proporciona una experiencia de navegación intuitiva con actualizaciones de menú en tiempo real, capacidades de realización de pedidos, e integración perfecta con DineFlow API.',
						technologies: [
							'React.js',
							'Tailwind CSS',
							'API REST',
							'Integración QR'
						],
						image: '📱',
						color: 'from-teal-500 to-cyan-500',
						highlights: [
							'Acceso por Código QR',
							'Actualizaciones en Tiempo Real',
							'Diseño Responsivo',
							'Realización de Pedidos'
						],
						github: 'https://github.com/RicardoArsv/dineflow-MENU',
						demo: null
					}
			  ];

	const categories = [
		'all',
		'AI & Full-Stack',
		'Backend',
		'Frontend',
		'Full-Stack'
	];

	const categoryLabels =
		currentLanguage?.Language === 'EN'
			? {
					all: 'All Projects',
					'AI & Full-Stack': 'AI & Full-Stack',
					Backend: 'Backend',
					Frontend: 'Frontend',
					'Full-Stack': 'Full-Stack'
			  }
			: {
					all: 'Todos los Proyectos',
					'AI & Full-Stack': 'IA & Full-Stack',
					Backend: 'Backend',
					Frontend: 'Frontend',
					'Full-Stack': 'Full-Stack'
			  };

	const filteredProjects =
		filter === 'all'
			? projects
			: projects.filter((project) => project.category === filter);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1
			}
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 100
			}
		}
	};

	return (
		<section
			id='projects'
			className='py-20 bg-gradient-to-b from-purple-950 via-neutral-dark to-purple-950 relative overflow-hidden'
		>
			<div className='absolute inset-0 opacity-10'>
				<div className='absolute top-40 right-20 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl' />
				<div className='absolute bottom-40 left-20 w-96 h-96 bg-purple-700 rounded-full filter blur-3xl' />
			</div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				<motion.div
					ref={ref}
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}
					variants={containerVariants}
				>
					<motion.div variants={itemVariants} className='text-center mb-12'>
						<h2 className='text-4xl md:text-5xl font-bold text-neutral-white mb-4'>
							{currentLanguage?.Language === 'EN'
								? 'Featured Projects'
								: 'Proyectos Destacados'}
						</h2>
						<div className='w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-500 mx-auto rounded-full mb-6' />
						<p className='text-neutral-light max-w-2xl mx-auto text-lg'>
							{currentLanguage?.Language === 'EN'
								? 'A complete showcase of my professional and personal work'
								: 'Una muestra completa de mis trabajos profesionales y personales'}
						</p>
					</motion.div>

					<motion.div
						variants={itemVariants}
						className='flex flex-wrap justify-center gap-4 mb-12'
					>
						{categories.map((category) => (
							<motion.button
								key={category}
								onClick={() => setFilter(category)}
								className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
									filter === category
										? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
										: 'bg-purple-900/30 text-purple-300 hover:bg-purple-800/40 border border-purple-500/20'
								}`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								{categoryLabels[category]}
							</motion.button>
						))}
					</motion.div>

					<motion.div
						variants={containerVariants}
						className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
					>
						{filteredProjects.map((project) => (
							<motion.div
								key={project.id}
								variants={itemVariants}
								layout
								className='group relative bg-purple-900/20 backdrop-blur-md border border-purple-500/20 rounded-2xl overflow-hidden hover:bg-purple-800/30 hover:border-purple-500/40 transition-all duration-300 cursor-pointer'
								whileHover={{ y: -8 }}
								onClick={() => setSelectedProject(project)}
							>
								<div className='relative h-40 bg-gradient-to-br from-purple-900/40 to-purple-800/40 flex items-center justify-center border-b border-purple-500/20 overflow-hidden'>
									{project.image.startsWith('/') ? (
										<img
											src={project.image}
											alt={project.title}
											className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
										/>
									) : (
										<span className='text-7xl'>{project.image}</span>
									)}
									<div className='absolute top-3 right-3'>
										<span className='px-2 py-1 text-[10px] font-medium rounded-md bg-purple-600/80 text-white'>
											{project.type}
										</span>
									</div>
								</div>

								<div className='p-5'>
									<div className='flex items-center justify-between mb-2'>
										<span className='px-2 py-1 text-xs font-medium rounded-md bg-purple-600/30 text-purple-300 border border-purple-500/30'>
											{project.category}
										</span>
									</div>

									<h3 className='text-lg font-bold text-neutral-white mb-2 group-hover:text-purple-300 transition-colors duration-300'>
										{project.title}
									</h3>

									<p className='text-neutral-light text-sm mb-4 line-clamp-2 leading-relaxed'>
										{project.description}
									</p>

									<div className='flex flex-wrap gap-1.5 mb-4'>
										{project.technologies.slice(0, 3).map((tech, idx) => (
											<span
												key={idx}
												className='px-2 py-0.5 text-xs bg-purple-600/20 text-purple-300 rounded border border-purple-500/20 cursor-default select-none'
											>
												{tech}
											</span>
										))}
										{project.technologies.length > 3 && (
											<span className='px-2 py-0.5 text-xs bg-purple-700/30 text-purple-400 rounded border border-purple-500/20 cursor-default select-none'>
												+{project.technologies.length - 3}
											</span>
										)}
									</div>

									<div className='flex gap-2'>
										{project.github && (
											<motion.a
												href={project.github}
												target='_blank'
												rel='noopener noreferrer'
												className='flex-1 px-3 py-2 bg-purple-900/40 border border-purple-500/30 rounded-lg text-purple-300 text-xs font-medium hover:bg-purple-800/50 transition-all duration-300 text-center'
												whileHover={{ scale: 1.03 }}
												whileTap={{ scale: 0.97 }}
												onClick={(e) => e.stopPropagation()}
											>
												GitHub
											</motion.a>
										)}
										<motion.button
											className={`${
												project.github ? 'flex-1' : 'w-full'
											} px-3 py-2 bg-purple-600 rounded-lg text-white text-xs font-medium hover:bg-purple-500 transition-all duration-300`}
											whileHover={{ scale: 1.03 }}
											whileTap={{ scale: 0.97 }}
										>
											{currentLanguage?.Language === 'EN'
												? 'Details'
												: 'Detalles'}
										</motion.button>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>

			{selectedProject && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
					onClick={() => setSelectedProject(null)}
				>
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.9, opacity: 0 }}
						className='bg-gray-900 border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto'
						onClick={(e) => e.stopPropagation()}
					>
						<div
							className={`relative h-64 bg-gradient-to-br ${selectedProject.color} flex items-center justify-center overflow-hidden`}
						>
							{selectedProject.image.startsWith('/') ? (
								<img
									src={selectedProject.image}
									alt={selectedProject.title}
									className='w-full h-full object-cover'
								/>
							) : (
								<span className='text-9xl'>{selectedProject.image}</span>
							)}
							<button
								onClick={() => setSelectedProject(null)}
								className='absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all z-10'
							>
								✕
							</button>
						</div>

						<div className='p-8'>
							<div className='flex items-center gap-4 mb-6'>
								<span
									className={`px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r ${selectedProject.color} text-white`}
								>
									{selectedProject.category}
								</span>
							</div>

							<h2 className='text-3xl font-bold text-white mb-4'>
								{selectedProject.title}
							</h2>
							<p className='text-gray-300 text-lg mb-6 leading-relaxed'>
								{selectedProject.longDescription}
							</p>

							<div className='mb-6'>
								<h3 className='text-xl font-semibold text-white mb-3'>
									{currentLanguage?.Language === 'EN'
										? 'Key Highlights'
										: 'Aspectos Destacados'}
								</h3>
								<div className='grid grid-cols-2 gap-3'>
									{selectedProject.highlights.map((highlight, idx) => (
										<div
											key={idx}
											className='flex items-center gap-2 text-gray-300'
										>
											<span className='text-purple-400'>✓</span>
											<span>{highlight}</span>
										</div>
									))}
								</div>
							</div>

							<div className='mb-6'>
								<h3 className='text-xl font-semibold text-white mb-3'>
									{currentLanguage?.Language === 'EN'
										? 'Technologies Used'
										: 'Tecnologías Utilizadas'}
								</h3>
								<div className='flex flex-wrap gap-2'>
									{selectedProject.technologies.map((tech, idx) => (
										<span
											key={idx}
											className='px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium cursor-default select-none'
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							{selectedProject.github && (
								<div className='flex gap-4'>
									<motion.a
										href={selectedProject.github}
										target='_blank'
										rel='noopener noreferrer'
										className='flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-medium hover:bg-white/10 transition-all duration-300 text-center'
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										{currentLanguage?.Language === 'EN'
											? 'View on GitHub'
											: 'Ver en GitHub'}
									</motion.a>
								</div>
							)}
						</div>
					</motion.div>
				</motion.div>
			)}
		</section>
	);
};

export default ProjectsShowcase;
