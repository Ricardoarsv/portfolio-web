import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const Skills = ({ currentLanguage }) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1
	});

	const [activeCategory, setActiveCategory] = useState('all');

	const skillCategories =
		currentLanguage?.Language === 'EN'
			? {
					all: 'All Skills',
					frontend: 'Frontend',
					backend: 'Backend',
					cloud: 'Cloud & DevOps',
					ai: 'AI & ML'
			  }
			: {
					all: 'Todas',
					frontend: 'Frontend',
					backend: 'Backend',
					cloud: 'Cloud & DevOps',
					ai: 'IA & ML'
			  };

	const skills = [
		{
			name: 'React.js',
			level: 95,
			category: 'frontend',
			icon: '⚛️',
			color: 'from-cyan-400 to-blue-500'
		},
		{
			name: 'Next.js',
			level: 90,
			category: 'frontend',
			icon: '▲',
			color: 'from-gray-700 to-black'
		},
		{
			name: 'React Native',
			level: 88,
			category: 'frontend',
			icon: '📱',
			color: 'from-blue-400 to-cyan-500'
		},
		{
			name: 'TypeScript',
			level: 92,
			category: 'frontend',
			icon: 'TS',
			color: 'from-blue-600 to-blue-400'
		},
		{
			name: 'Tailwind CSS',
			level: 95,
			category: 'frontend',
			icon: '🎨',
			color: 'from-cyan-500 to-blue-500'
		},
		{
			name: 'Three.js',
			level: 75,
			category: 'frontend',
			icon: '🎮',
			color: 'from-black to-gray-600'
		},
		{
			name: 'Vite',
			level: 90,
			category: 'frontend',
			icon: '⚡',
			color: 'from-purple-500 to-yellow-500'
		},

		{
			name: 'Node.js',
			level: 93,
			category: 'backend',
			icon: '🟢',
			color: 'from-green-600 to-green-400'
		},
		{
			name: 'NestJS',
			level: 90,
			category: 'backend',
			icon: '🐱',
			color: 'from-red-500 to-pink-500'
		},
		{
			name: 'Python',
			level: 95,
			category: 'backend',
			icon: '🐍',
			color: 'from-blue-500 to-yellow-500'
		},
		{
			name: 'Django',
			level: 85,
			category: 'backend',
			icon: '🎯',
			color: 'from-green-700 to-green-500'
		},
		{
			name: 'FastAPI',
			level: 88,
			category: 'backend',
			icon: '⚡',
			color: 'from-teal-500 to-green-500'
		},
		{
			name: 'Flask',
			level: 82,
			category: 'backend',
			icon: '🧪',
			color: 'from-gray-700 to-gray-500'
		},
		{
			name: 'Express.js',
			level: 90,
			category: 'backend',
			icon: '🚂',
			color: 'from-gray-600 to-gray-400'
		},

		{
			name: 'Google Cloud',
			level: 87,
			category: 'cloud',
			icon: '☁️',
			color: 'from-blue-500 to-red-500'
		},
		{
			name: 'Firebase',
			level: 92,
			category: 'cloud',
			icon: '🔥',
			color: 'from-yellow-500 to-orange-500'
		},
		{
			name: 'Docker',
			level: 85,
			category: 'cloud',
			icon: '🐳',
			color: 'from-blue-500 to-cyan-400'
		},
		{
			name: 'Git',
			level: 93,
			category: 'cloud',
			icon: '📚',
			color: 'from-orange-600 to-red-500'
		},
		{
			name: 'CI/CD',
			level: 85,
			category: 'cloud',
			icon: '🔄',
			color: 'from-purple-500 to-pink-500'
		},

		{
			name: 'Vertex AI',
			level: 85,
			category: 'ai',
			icon: '🤖',
			color: 'from-blue-600 to-purple-600'
		},
		{
			name: 'OpenAI',
			level: 90,
			category: 'ai',
			icon: '🧠',
			color: 'from-green-400 to-cyan-500'
		},
		{
			name: 'Mastra Framework',
			level: 82,
			category: 'ai',
			icon: '🎭',
			color: 'from-purple-600 to-pink-600'
		},
		{
			name: 'Multi-Agent Systems',
			level: 88,
			category: 'ai',
			icon: '🤝',
			color: 'from-indigo-500 to-purple-500'
		}
	];

	const filteredSkills =
		activeCategory === 'all'
			? skills
			: skills.filter((skill) => skill.category === activeCategory);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.05
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
			id='skills'
			className='py-20 bg-gradient-to-b from-neutral-black via-purple-950 to-neutral-black relative overflow-hidden'
		>
			<div className='absolute inset-0 opacity-5'>
				<motion.div
					className='absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl'
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.2, 0.3, 0.2]
					}}
					transition={{
						duration: 12,
						repeat: Infinity,
						ease: 'easeInOut'
					}}
				/>
				<motion.div
					className='absolute bottom-0 right-1/4 w-96 h-96 bg-purple-700 rounded-full filter blur-3xl'
					animate={{
						scale: [1.2, 1, 1.2],
						opacity: [0.3, 0.2, 0.3]
					}}
					transition={{
						duration: 12,
						repeat: Infinity,
						ease: 'easeInOut'
					}}
				/>
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
								? 'Technical Skills'
								: 'Habilidades Técnicas'}
						</h2>
						<div className='w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-500 mx-auto rounded-full mb-6' />
						<p className='text-neutral-light max-w-2xl mx-auto text-lg'>
							{currentLanguage?.Language === 'EN'
								? 'A comprehensive overview of my technical expertise across different domains'
								: 'Una visión completa de mi experiencia técnica en diferentes dominios'}
						</p>
					</motion.div>

					<motion.div
						variants={itemVariants}
						className='flex flex-wrap justify-center gap-4 mb-12'
					>
						{Object.entries(skillCategories).map(([key, label]) => (
							<motion.button
								key={key}
								onClick={() => setActiveCategory(key)}
								className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
									activeCategory === key
										? 'bg-purple-600 text-white shadow-lg border border-purple-500'
										: 'bg-purple-900/20 text-purple-300 hover:bg-purple-600/30 border border-purple-500/30'
								}`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								{label}
							</motion.button>
						))}
					</motion.div>

					<motion.div
						variants={containerVariants}
						className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
					>
						{filteredSkills.map((skill, index) => (
							<motion.div
								key={skill.name}
								variants={itemVariants}
								layout
								className='group relative bg-purple-900/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 hover:bg-purple-600/20 hover:border-purple-500/40 transition-all duration-300 overflow-hidden'
								whileHover={{ scale: 1.02 }}
							>
								<div className='relative z-10'>
									<div className='flex items-center justify-between mb-4'>
										<div className='flex items-center gap-3'>
											<div className='w-12 h-12 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-2xl'>
												{skill.icon}
											</div>
											<h3 className='text-neutral-white font-semibold text-lg'>
												{skill.name}
											</h3>
										</div>
										<span className='text-purple-300 font-bold text-lg'>
											{skill.level}%
										</span>
									</div>

									<div className='relative h-2 bg-purple-950 border border-purple-800/30 rounded-full overflow-hidden'>
										<motion.div
											className='absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-purple-500 rounded-full'
											initial={{ width: 0 }}
											animate={
												inView ? { width: `${skill.level}%` } : { width: 0 }
											}
											transition={{
												duration: 1,
												delay: index * 0.05,
												ease: 'easeOut'
											}}
										/>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>

					<motion.div
						variants={itemVariants}
						className='mt-16 grid md:grid-cols-3 gap-6'
					>
						{[
							{
								title:
									currentLanguage?.Language === 'EN'
										? 'Years of Experience'
										: 'Años de Experiencia',
								value: '2+',
								icon: '📅',
								color: 'from-purple-500 to-pink-500'
							},
							{
								title:
									currentLanguage?.Language === 'EN'
										? 'Projects Completed'
										: 'Proyectos Completados',
								value: '15+',
								icon: '🚀',
								color: 'from-blue-500 to-cyan-500'
							},
							{
								title:
									currentLanguage?.Language === 'EN'
										? 'Technologies Mastered'
										: 'Tecnologías Dominadas',
								value: '20+',
								icon: '⚡',
								color: 'from-pink-500 to-orange-500'
							}
						].map((stat, index) => (
							<motion.div
								key={stat.title}
								className='relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center overflow-hidden group hover:bg-white/10 transition-all duration-300'
								whileHover={{ scale: 1.05 }}
							>
								<motion.div
									className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
								/>
								<div className='relative z-10'>
									<div className='text-5xl mb-4'>{stat.icon}</div>
									<div
										className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
									>
										{stat.value}
									</div>
									<div className='text-gray-400 font-medium'>{stat.title}</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;
