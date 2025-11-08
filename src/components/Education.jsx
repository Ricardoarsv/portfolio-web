import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = ({ currentLanguage }) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1
	});

	const education =
		currentLanguage?.Language === 'EN'
			? [
					{
						id: 1,
						institution: 'UNAD - Universidad Nacional Abierta y a Distancia',
						degree: 'Systems Engineering',
						location: 'Colombia',
						period: 'Jan 2025 - Dec 2027',
						status: 'In Progress',
						description:
							'Currently pursuing Systems Engineering degree with focus on software development, project management, and modern technologies.',
						skills: [
							'Project Management',
							'Software Development',
							'System Architecture',
							'Cloud Computing',
							'Database Design',
							'Agile Methodologies'
						],
						icon: '🎓',
						color: 'from-blue-600 to-cyan-600'
					},
					{
						id: 2,
						institution: 'SENA - Servicio Nacional de Aprendizaje',
						degree: 'Technology in Software Analysis and Development',
						location: 'Cúcuta, Colombia',
						period: 'Apr 2022 - Jul 2024',
						status: 'Completed',
						description:
							'Comprehensive software development program covering full-stack technologies, web development, and software engineering principles.',
						skills: [
							'Web Development',
							'JavaScript',
							'Python',
							'React.js',
							'Node.js',
							'Database Management',
							'API Development',
							'Software Testing',
							'Git & Version Control',
							'Agile Development'
						],
						icon: '💻',
						color: 'from-purple-600 to-pink-600'
					},
					{
						id: 3,
						institution: 'Cisco Networking Academy',
						degree: 'Python Essentials 2',
						location: 'Remote',
						period: 'Dec 2022 - Mar 2023',
						status: 'Completed',
						description:
							'Advanced Python programming course covering object-oriented programming, data structures, and backend development.',
						skills: ['Python', 'OOP', 'Data Structures', 'Backend Development'],
						icon: '🐍',
						color: 'from-yellow-600 to-orange-600'
					},
					{
						id: 4,
						institution: 'Cisco Networking Academy',
						degree: 'Introduction to Data Science',
						location: 'Remote',
						period: 'Nov 2022 - Dec 2022',
						status: 'Completed',
						description:
							'Foundational data science course covering data analysis, visualization, and statistical concepts.',
						skills: ['Data Analysis', 'Data Visualization', 'Statistics'],
						icon: '📊',
						color: 'from-green-600 to-teal-600'
					},
					{
						id: 5,
						institution: 'Cisco Networking Academy',
						degree: 'Python Essentials 1',
						location: 'Remote',
						period: 'Oct 2022 - Dec 2022',
						status: 'Completed',
						description:
							'Fundamental Python programming course covering syntax, basic programming concepts, and problem-solving.',
						skills: ['Python', 'Programming Fundamentals', 'Problem Solving'],
						icon: '🔰',
						color: 'from-indigo-600 to-purple-600'
					},
					{
						id: 6,
						institution: 'Cisco Networking Academy',
						degree: 'JavaScript Essentials 1',
						location: 'Remote',
						period: '2024',
						status: 'Completed',
						description:
							'Comprehensive JavaScript course covering ES6+, DOM manipulation, and modern web development practices.',
						skills: [
							'JavaScript',
							'ES6+',
							'DOM Manipulation',
							'Web Development'
						],
						icon: '📜',
						color: 'from-yellow-500 to-amber-600'
					}
			  ]
			: [
					{
						id: 1,
						institution: 'UNAD - Universidad Nacional Abierta y a Distancia',
						degree: 'Ingeniería de Sistemas',
						location: 'Colombia',
						period: 'Ene 2025 - Dic 2027',
						status: 'En Curso',
						description:
							'Actualmente cursando Ingeniería de Sistemas con enfoque en desarrollo de software, gestión de proyectos y tecnologías modernas.',
						skills: [
							'Gestión de Proyectos',
							'Desarrollo de Software',
							'Arquitectura de Sistemas',
							'Computación en la Nube',
							'Diseño de Bases de Datos',
							'Metodologías Ágiles'
						],
						icon: '🎓',
						color: 'from-blue-600 to-cyan-600'
					},
					{
						id: 2,
						institution: 'SENA - Servicio Nacional de Aprendizaje',
						degree: 'Tecnólogo en Análisis y Desarrollo de Software',
						location: 'Cúcuta, Colombia',
						period: 'Abr 2022 - Jul 2024',
						status: 'Completado',
						description:
							'Programa integral de desarrollo de software cubriendo tecnologías full-stack, desarrollo web y principios de ingeniería de software.',
						skills: [
							'Desarrollo Web',
							'JavaScript',
							'Python',
							'React.js',
							'Node.js',
							'Gestión de Bases de Datos',
							'Desarrollo de APIs',
							'Testing de Software',
							'Git & Control de Versiones',
							'Desarrollo Ágil'
						],
						icon: '💻',
						color: 'from-purple-600 to-pink-600'
					},
					{
						id: 3,
						institution: 'Cisco Networking Academy',
						degree: 'Python Essentials 2',
						location: 'Remoto',
						period: 'Dic 2022 - Mar 2023',
						status: 'Completado',
						description:
							'Curso avanzado de programación Python cubriendo programación orientada a objetos, estructuras de datos y desarrollo backend.',
						skills: [
							'Python',
							'POO',
							'Estructuras de Datos',
							'Desarrollo Backend'
						],
						icon: '🐍',
						color: 'from-yellow-600 to-orange-600'
					},
					{
						id: 4,
						institution: 'Cisco Networking Academy',
						degree: 'Introducción a Data Science',
						location: 'Remoto',
						period: 'Nov 2022 - Dic 2022',
						status: 'Completado',
						description:
							'Curso fundamental de ciencia de datos cubriendo análisis de datos, visualización y conceptos estadísticos.',
						skills: [
							'Análisis de Datos',
							'Visualización de Datos',
							'Estadística'
						],
						icon: '📊',
						color: 'from-green-600 to-teal-600'
					},
					{
						id: 5,
						institution: 'Cisco Networking Academy',
						degree: 'Python Essentials 1',
						location: 'Remoto',
						period: 'Oct 2022 - Dic 2022',
						status: 'Completado',
						description:
							'Curso fundamental de programación Python cubriendo sintaxis, conceptos básicos de programación y resolución de problemas.',
						skills: [
							'Python',
							'Fundamentos de Programación',
							'Resolución de Problemas'
						],
						icon: '🔰',
						color: 'from-indigo-600 to-purple-600'
					},
					{
						id: 6,
						institution: 'Cisco Networking Academy',
						degree: 'JavaScript Essentials 1',
						location: 'Remoto',
						period: '2024',
						status: 'Completado',
						description:
							'Curso integral de JavaScript cubriendo ES6+, manipulación del DOM y prácticas modernas de desarrollo web.',
						skills: [
							'JavaScript',
							'ES6+',
							'Manipulación del DOM',
							'Desarrollo Web'
						],
						icon: '📜',
						color: 'from-yellow-500 to-amber-600'
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
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 100
			}
		}
	};

	return (
		<section
			id='education'
			className='py-20 bg-gradient-to-b from-purple-950 via-neutral-dark to-purple-950 relative overflow-hidden'
		>
			<div className='absolute inset-0 opacity-10'>
				<div className='absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl' />
				<div className='absolute bottom-20 right-10 w-72 h-72 bg-purple-700 rounded-full filter blur-3xl' />
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
							{currentLanguage?.Language === 'EN' ? 'Education' : 'Educación'}
						</h2>
						<div className='w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-500 mx-auto rounded-full mb-6' />
						<p className='text-neutral-light max-w-2xl mx-auto text-lg'>
							{currentLanguage?.Language === 'EN'
								? 'Academic background and continuous learning journey'
								: 'Formación académica y trayectoria de aprendizaje continuo'}
						</p>
					</motion.div>

					<motion.div variants={containerVariants} className='space-y-6'>
						{education.map((edu, index) => (
							<motion.div
								key={edu.id}
								variants={itemVariants}
								className='group relative'
							>
								<div className='flex flex-col md:flex-row gap-6 bg-purple-900/20 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 hover:bg-purple-800/30 hover:border-purple-500/40 transition-all duration-300'>
									<div className='flex-shrink-0'>
										<div
											className={`w-16 h-16 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-3xl shadow-lg`}
										>
											{edu.icon}
										</div>
									</div>

									<div className='flex-grow'>
										<div className='flex flex-col md:flex-row md:items-start md:justify-between mb-3'>
											<div>
												<h3 className='text-xl font-bold text-neutral-white mb-1 group-hover:text-purple-300 transition-colors duration-300'>
													{edu.degree}
												</h3>
												<p className='text-purple-300 font-medium'>
													{edu.institution}
												</p>
											</div>
											<div className='mt-2 md:mt-0 flex items-center gap-3'>
												<span
													className={`px-3 py-1 text-xs font-medium rounded-full ${
														edu.status === 'In Progress' ||
														edu.status === 'En Curso'
															? 'bg-blue-600/30 text-blue-300 border border-blue-500/30'
															: 'bg-green-600/30 text-green-300 border border-green-500/30'
													}`}
												>
													{edu.status}
												</span>
											</div>
										</div>

										<div className='flex flex-wrap gap-4 text-sm text-neutral-light mb-3'>
											<span className='flex items-center gap-1'>
												<span className='text-purple-400'>📍</span>
												{edu.location}
											</span>
											<span className='flex items-center gap-1'>
												<span className='text-purple-400'>📅</span>
												{edu.period}
											</span>
										</div>

										<p className='text-neutral-light mb-4 leading-relaxed'>
											{edu.description}
										</p>

										<div className='flex flex-wrap gap-2'>
											{edu.skills.map((skill, idx) => (
												<span
													key={idx}
													className='px-3 py-1 text-xs bg-purple-600/20 text-purple-300 rounded-full border border-purple-500/20'
												>
													{skill}
												</span>
											))}
										</div>
									</div>
								</div>

								{index < education.length - 1 && (
									<div className='hidden md:block absolute left-8 top-full h-6 w-0.5 bg-gradient-to-b from-purple-500/50 to-transparent' />
								)}
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Education;
