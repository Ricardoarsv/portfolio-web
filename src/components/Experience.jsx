import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const Experience = ({ currentLanguage }) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1
	});

	const [selectedExperience, setSelectedExperience] = useState(0);

	const experiences =
		currentLanguage?.Language === 'EN'
			? [
					{
						company: 'GUNDO HEALTH AND FOOD S.L.',
						role: 'Tech Fitness Lead & Full-Stack Developer',
						period: 'Jul 2024 – Present',
						location: 'Remote',
						description:
							'Leading the technical development and continuous evolution of GUNDO fitness platforms, combining React, Next.js, and Google Cloud. Responsible for design, development, and implementation of health and training solutions powered by AI with multi-agent architecture.',
						projects: [
							{
								name: '🍽️ Dish Scanner',
								details: [
									'Ingredient and macronutrient recognition from images using AI',
									'Smart labeling algorithm based on nutritional profiles and preferences',
									'Adaptation tips and health alerts based on detected deficiencies',
									'Integration with meal planning and tracking systems'
								]
							},
							{
								name: '🏋️ Smart Training Plans',
								details: [
									'Personalized routine generation based on dynamic questionnaires',
									'Exercise adjustment for injuries, progression, or preferences',
									'Tracking strength, endurance, and recovery metrics with improvement recommendations',
									'Rest reminders and periodization to maximize performance'
								]
							},
							{
								name: '📝 Wellness & Nutrition Questionnaires',
								details: [
									'Adaptive form design with branching logic and real-time validation',
									'Advanced analytics integration for personalized recommendations',
									'User habit and goal tracking for continuous improvement'
								]
							},
							{
								name: '🔁 Platform Development & Evolution',
								details: [
									'Technical and functional roadmap planning for fitness platforms',
									'Continuous iterations: sprint management and releases',
									'Maintenance, migrations, and performance improvements for scalability',
									'User feedback integration and metrics (A/B testing and analytics)',
									'Technical documentation and knowledge transfer within the team'
								]
							}
						],
						technologies: [
							'React',
							'Next.js',
							'React Native',
							'NestJS',
							'Python',
							'Google Cloud',
							'BigQuery',
							'Firebase',
							'Cloud Build',
							'Vertex AI',
							'OpenAI',
							'Stripe'
						],
						color: 'from-purple-600 to-purple-700'
					},
					{
						company: 'Gelvez Distribuciones SAS',
						role: 'Full-Stack Developer',
						period: 'Nov 2023 – Jul 2024',
						location: 'Cúcuta, Colombia',
						description:
							'Developed comprehensive business management systems and automation tools.',
						achievements: [
							'Automated report-sending system for suppliers using Python and Selenium',
							'Mass validation script for business partners via government APIs',
							'Enterprise intranet for administrative management reducing SAP dependency',
							'Dashboard for software updates with version control using Vite and React.js',
							'REST API for investment request management with Firebase integration'
						],
						technologies: [
							'React.js',
							'Vite',
							'Python',
							'Selenium',
							'Firebase',
							'Express.js'
						],
						color: 'from-blue-500 to-cyan-500'
					}
			  ]
			: [
					{
						company: 'GUNDO HEALTH AND FOOD S.L.',
						role: 'Líder del Área Tech Fitness & Full-Stack Developer',
						period: 'Jul 2024 – Presente',
						location: 'Remoto',
						description:
							'Desarrollo, gestión y evolución continua de las plataformas fitness de GUNDO, combinando React, Next.js y Google Cloud. Responsable del diseño, desarrollo e implementación de soluciones enfocadas en salud y entrenamiento, impulsadas por IA con arquitectura multiagente.',
						projects: [
							{
								name: '🍽️ Escáner de Platillos',
								details: [
									'Reconocimiento de ingredientes y macronutrientes a partir de imágenes con IA',
									'Algoritmo de etiquetado según perfiles y preferencias nutricionales',
									'Consejos de adaptación y alertas de salud basados en deficiencias detectadas',
									'Integración con sistemas de planificación y seguimiento de comidas'
								]
							},
							{
								name: '🏋️ Planes de Entrenamiento Inteligentes',
								details: [
									'Generación de rutinas personalizadas según cuestionarios dinámicos',
									'Ajuste de ejercicios por lesiones, progresión o preferencias',
									'Seguimiento de métricas de fuerza, resistencia y recuperación con recomendaciones',
									'Recordatorios de descanso y periodización para maximizar el desempeño'
								]
							},
							{
								name: '📝 Cuestionarios de Bienestar y Nutrición',
								details: [
									'Diseño de formularios adaptativos con lógica ramificada y validación en tiempo real',
									'Integración de analítica avanzada para recomendaciones personalizadas',
									'Seguimiento de hábitos y objetivos del usuario para mejora continua'
								]
							},
							{
								name: '🔁 Desarrollo y Evolución de Plataformas Fitness',
								details: [
									'Planificación técnica y funcional del roadmap de las plataformas fitness',
									'Iteraciones continuas: gestión de sprints y releases',
									'Mantenimiento, migraciones y mejoras de rendimiento para escalabilidad',
									'Incorporación de feedback de usuarios y métricas (A/B testing y analítica)',
									'Documentación técnica y transferencia de conocimiento dentro del equipo'
								]
							}
						],
						technologies: [
							'React',
							'Next.js',
							'React Native',
							'NestJS',
							'Python',
							'Google Cloud',
							'BigQuery',
							'Firebase',
							'Cloud Build',
							'Vertex AI',
							'OpenAI',
							'Stripe'
						],
						color: 'from-purple-600 to-purple-700'
					},
					{
						company: 'Gelvez Distribuciones SAS',
						role: 'Desarrollador Full-Stack',
						period: 'Nov 2023 – Jul 2024',
						location: 'Cúcuta, Colombia',
						description:
							'Desarrollé sistemas integrales de gestión empresarial y herramientas de automatización.',
						achievements: [
							'Sistema automatizado de envío de reportes usando Python y Selenium',
							'Script de validación masiva de socios comerciales vía APIs gubernamentales',
							'Intranet empresarial para gestión administrativa reduciendo dependencia de SAP',
							'Dashboard para gestión de actualizaciones con control de versiones',
							'API REST para gestión de solicitudes de inversión con Firebase'
						],
						technologies: [
							'React.js',
							'Vite',
							'Python',
							'Selenium',
							'Firebase',
							'Express.js'
						],
						color: 'from-blue-500 to-cyan-500'
					}
			  ];

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
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: 'spring',
				stiffness: 100
			}
		}
	};

	return (
		<section
			id='experience'
			className='py-20 bg-gradient-to-b from-neutral-black via-purple-950 to-neutral-black relative overflow-hidden'
		>
			<div className='absolute inset-0 opacity-5'>
				<div className='absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl' />
				<div className='absolute bottom-20 right-10 w-96 h-96 bg-purple-700 rounded-full filter blur-3xl' />
			</div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				<motion.div
					ref={ref}
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}
					variants={containerVariants}
				>
					<motion.div variants={itemVariants} className='text-center mb-16'>
						<h2 className='text-4xl md:text-5xl font-bold text-neutral-white mb-4'>
							{currentLanguage?.Language === 'EN'
								? 'Work Experience'
								: 'Experiencia Laboral'}
						</h2>
						<div className='w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-500 mx-auto rounded-full' />
					</motion.div>

					<div className='grid lg:grid-cols-3 gap-8'>
						<motion.div variants={itemVariants} className='lg:col-span-1'>
							<div className='sticky top-24 space-y-4'>
								{experiences.map((exp, index) => (
									<motion.button
										key={index}
										onClick={() => setSelectedExperience(index)}
										className={`w-full text-left p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
											selectedExperience === index
												? 'bg-purple-600/20 border-purple-500/60 shadow-lg'
												: 'bg-purple-900/10 border-purple-500/20 hover:bg-purple-600/10'
										}`}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										<div className='flex items-start gap-4'>
											<div className='w-12 h-12 rounded-full bg-purple-600/40 border border-purple-500/50 flex items-center justify-center flex-shrink-0'>
												<span className='text-purple-200 font-bold'>
													{index + 1}
												</span>
											</div>
											<div className='flex-1 min-w-0'>
												<h3 className='text-neutral-white font-semibold text-lg mb-1 truncate'>
													{exp.company}
												</h3>
												<p className='text-neutral-light text-sm mb-1'>
													{exp.role}
												</p>
												<p className='text-purple-300 text-xs'>{exp.period}</p>
											</div>
										</div>
									</motion.button>
								))}
							</div>
						</motion.div>

						<motion.div variants={itemVariants} className='lg:col-span-2'>
							<motion.div
								key={selectedExperience}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								className='bg-purple-900/10 backdrop-blur-md border border-purple-500/20 rounded-3xl p-8 shadow-xl'
							>
								<div className='inline-block px-4 py-2 rounded-full bg-purple-600/30 border border-purple-500/30 mb-6'>
									<span className='text-purple-300 text-sm font-medium'>
										{experiences[selectedExperience].period}
									</span>
								</div>

								<h3 className='text-3xl font-bold text-neutral-white mb-2'>
									{experiences[selectedExperience].company}
								</h3>
								<p className='text-xl text-purple-300 mb-2'>
									{experiences[selectedExperience].role}
								</p>
								<p className='text-neutral-light mb-6 flex items-center gap-2'>
									<svg
										className='w-4 h-4'
										fill='currentColor'
										viewBox='0 0 20 20'
									>
										<path
											fillRule='evenodd'
											d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
											clipRule='evenodd'
										/>
									</svg>
									{experiences[selectedExperience].location}
								</p>

								<p className='text-neutral-light mb-8 text-lg leading-relaxed'>
									{experiences[selectedExperience].description}
								</p>

								<div className='mb-8'>
									<h4 className='text-neutral-white font-semibold mb-6 flex items-center gap-2 text-xl'>
										<svg
											className='w-6 h-6 text-purple-400'
											fill='currentColor'
											viewBox='0 0 20 20'
										>
											<path
												fillRule='evenodd'
												d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
												clipRule='evenodd'
											/>
										</svg>
										{experiences[selectedExperience].projects
											? currentLanguage?.Language === 'EN'
												? 'Main Projects & Responsibilities'
												: 'Principales Proyectos y Responsabilidades'
											: currentLanguage?.Language === 'EN'
											? 'Key Achievements'
											: 'Logros Clave'}
									</h4>
									{experiences[selectedExperience].projects ? (
										<div className='space-y-6'>
											{experiences[selectedExperience].projects.map(
												(project, idx) => (
													<motion.div
														key={idx}
														initial={{ opacity: 0, y: 10 }}
														animate={{ opacity: 1, y: 0 }}
														transition={{ delay: idx * 0.1 }}
														className='bg-purple-900/20 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300'
													>
														<h5 className='text-purple-300 font-semibold text-lg mb-3'>
															{project.name}
														</h5>
														<ul className='space-y-2'>
															{project.details.map((detail, detailIdx) => (
																<li
																	key={detailIdx}
																	className='flex items-start gap-2 text-gray-300 text-sm'
																>
																	<span className='text-purple-400 mt-1 flex-shrink-0'>
																		•
																	</span>
																	<span>{detail}</span>
																</li>
															))}
														</ul>
													</motion.div>
												)
											)}
										</div>
									) : (
										<ul className='space-y-3'>
											{experiences[selectedExperience].achievements.map(
												(achievement, idx) => (
													<motion.li
														key={idx}
														initial={{ opacity: 0, x: -20 }}
														animate={{ opacity: 1, x: 0 }}
														transition={{ delay: idx * 0.1 }}
														className='flex items-start gap-3 text-gray-300'
													>
														<span className='text-purple-400 mt-1'>▹</span>
														<span>{achievement}</span>
													</motion.li>
												)
											)}
										</ul>
									)}
								</div>

								<div>
									<h4 className='text-neutral-white font-semibold mb-4 flex items-center gap-2 text-xl'>
										<svg
											className='w-6 h-6 text-purple-400'
											fill='currentColor'
											viewBox='0 0 20 20'
										>
											<path d='M13 7H7v6h6V7z' />
											<path
												fillRule='evenodd'
												d='M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z'
												clipRule='evenodd'
											/>
										</svg>
										{currentLanguage?.Language === 'EN'
											? 'Technologies Used'
											: 'Tecnologías Utilizadas'}
									</h4>
									<div className='flex flex-wrap gap-2'>
										{experiences[selectedExperience].technologies.map(
											(tech, idx) => (
												<motion.span
													key={idx}
													initial={{ opacity: 0, scale: 0.8 }}
													animate={{ opacity: 1, scale: 1 }}
													transition={{ delay: idx * 0.05 }}
													className='px-3 py-1.5 bg-purple-600/20 border border-purple-500/30 rounded-lg text-purple-300 text-sm font-medium hover:bg-purple-600/30 hover:border-purple-400/50 transition-all duration-300'
													whileHover={{ scale: 1.05 }}
												>
													{tech}
												</motion.span>
											)
										)}
									</div>
								</div>
							</motion.div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Experience;
