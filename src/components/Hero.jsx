import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import CV_EN from '../assets/docs/Ricardo_Villanueva_CV_EN.pdf';
import CV_ES from '../assets/docs/Ricardo_Villanueva_CV_ES.pdf';

const Hero = ({ currentLanguage }) => {
	const [text, setText] = useState('');
	const [isDeleting, setIsDeleting] = useState(false);
	const [loopNum, setLoopNum] = useState(0);
	const [typingSpeed, setTypingSpeed] = useState(150);

	const roles =
		currentLanguage?.Language === 'EN'
			? [
					'Full-Stack Developer',
					'AI Architect',
					'Cloud Engineer',
					'Problem Solver'
			  ]
			: [
					'Desarrollador Full-Stack',
					'Arquitecto de IA',
					'Ingeniero Cloud',
					'Solucionador de Problemas'
			  ];

	useEffect(() => {
		const handleTyping = () => {
			const i = loopNum % roles.length;
			const fullText = roles[i];

			setText(
				isDeleting
					? fullText.substring(0, text.length - 1)
					: fullText.substring(0, text.length + 1)
			);

			setTypingSpeed(isDeleting ? 50 : 150);

			if (!isDeleting && text === fullText) {
				setTimeout(() => setIsDeleting(true), 2000);
			} else if (isDeleting && text === '') {
				setIsDeleting(false);
				setLoopNum(loopNum + 1);
			}
		};

		const timer = setTimeout(handleTyping, typingSpeed);
		return () => clearTimeout(timer);
	}, [text, isDeleting, loopNum, roles, typingSpeed]);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3
			}
		}
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				stiffness: 100
			}
		}
	};

	const scrollToSection = (id) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section
			id='home'
			className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-black via-purple-950 to-purple-900'
		>
			<div className='absolute inset-0 overflow-hidden'>
				<motion.div
					className='absolute top-0 -left-4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20'
					animate={{
						x: [0, 100, 0],
						y: [0, 50, 0]
					}}
					transition={{
						duration: 35,
						repeat: Infinity,
						ease: 'easeInOut'
					}}
				/>
				<motion.div
					className='absolute top-0 -right-4 w-96 h-96 bg-accent-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-15'
					animate={{
						x: [0, -100, 0],
						y: [0, 100, 0]
					}}
					transition={{
						duration: 40,
						repeat: Infinity,
						ease: 'easeInOut'
					}}
				/>
				<motion.div
					className='absolute -bottom-8 left-20 w-96 h-96 bg-accent-tertiary rounded-full mix-blend-multiply filter blur-3xl opacity-15'
					animate={{
						x: [0, 50, 0],
						y: [0, -50, 0]
					}}
					transition={{
						duration: 45,
						repeat: Infinity,
						ease: 'easeInOut'
					}}
				/>
			</div>

			<div className='absolute inset-0'>
				{[...Array(15)].map((_, i) => (
					<motion.div
						key={i}
						className='absolute w-1.5 h-1.5 bg-purple-400 rounded-full opacity-40'
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`
						}}
						animate={{
							y: [0, -30, 0],
							opacity: [0.2, 0.4, 0.2]
						}}
						transition={{
							duration: 5 + Math.random() * 3,
							repeat: Infinity,
							delay: Math.random() * 3,
							ease: 'easeInOut'
						}}
					/>
				))}
			</div>

			<motion.div
				className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'
				variants={containerVariants}
				initial='hidden'
				animate='visible'
			>
				<motion.div variants={itemVariants} className='mb-6'>
					<motion.div
						className='inline-block px-4 py-2 mb-6 rounded-full bg-purple-600/10 backdrop-blur-sm border border-purple-500/30'
						whileHover={{ scale: 1.05 }}
					>
						<span className='text-purple-300 text-sm font-medium'>
							{currentLanguage?.Language === 'EN'
								? '👋 Welcome to my portfolio'
								: '👋 Bienvenido a mi portafolio'}
						</span>
					</motion.div>
				</motion.div>

				<motion.h1
					variants={itemVariants}
					className='text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-white mb-6'
				>
					Ricardo Villanueva
					<span className='block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-accent-primary to-purple-300 mt-2'>
						Montenegro
					</span>
				</motion.h1>

				<motion.div
					variants={itemVariants}
					className='text-2xl md:text-3xl lg:text-4xl text-purple-300 mb-8 h-12 md:h-16'
				>
					<span className='inline-block border-r-2 border-accent-primary pr-2 animate-pulse'>
						{text}
					</span>
				</motion.div>

				<motion.p
					variants={itemVariants}
					className='text-lg md:text-xl text-neutral-light max-w-3xl mx-auto mb-12 leading-relaxed'
				>
					{currentLanguage?.Language === 'EN'
						? 'Passionate about building scalable web and mobile platforms with AI architectures and multi-agent systems. Specialized in full-stack development and cloud solutions.'
						: 'Apasionado por construir plataformas web y móviles escalables con arquitecturas de IA y sistemas multiagente. Especializado en desarrollo full-stack y soluciones cloud.'}
				</motion.p>

				<motion.div
					variants={itemVariants}
					className='flex flex-col sm:flex-row gap-4 justify-center items-center'
				>
					<motion.button
						onClick={() => scrollToSection('projects')}
						className='group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-accent-primary text-white font-semibold rounded-full overflow-hidden transition-all duration-300 shadow-purple'
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<span className='relative z-10'>
							{currentLanguage?.Language === 'EN'
								? 'View My Work'
								: 'Ver Mi Trabajo'}
						</span>
						<motion.div
							className='absolute inset-0 bg-gradient-to-r from-accent-primary to-purple-600'
							initial={{ x: '100%' }}
							whileHover={{ x: 0 }}
							transition={{ duration: 0.3 }}
						/>
					</motion.button>

					<motion.a
						href={currentLanguage?.Language === 'EN' ? CV_EN : CV_ES}
						download={
							currentLanguage?.Language === 'EN'
								? 'Ricardo_Villanueva_CV_EN.pdf'
								: 'Ricardo_Villanueva_CV_ES.pdf'
						}
						className='px-8 py-4 bg-purple-600/30 border-2 border-purple-500 text-purple-200 font-semibold rounded-full hover:bg-purple-600/50 transition-all duration-300 flex items-center gap-2'
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<svg
							className='w-5 h-5'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
							/>
						</svg>
						{currentLanguage?.Language === 'EN'
							? 'Download CV'
							: 'Descargar CV'}
					</motion.a>

					<motion.button
						onClick={() => scrollToSection('contact')}
						className='px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-300 font-semibold rounded-full hover:bg-purple-600/20 transition-all duration-300'
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						{currentLanguage?.Language === 'EN' ? 'Get In Touch' : 'Contáctame'}
					</motion.button>
				</motion.div>

				<motion.div
					variants={itemVariants}
					className='flex justify-center gap-6 mt-12'
				>
					{[
						{
							name: 'GitHub',
							url: 'https://github.com/RicardoArsv',
							icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
						},
						{
							name: 'LinkedIn',
							url: 'https://linkedin.com/in/ricardoarsv',
							icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
						},
						{
							name: 'Email',
							url: 'mailto:ricardoarsv.2004@gmail.com',
							icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'
						}
					].map((social, index) => (
						<motion.a
							key={social.name}
							href={social.url}
							target='_blank'
							rel='noopener noreferrer'
							className='w-12 h-12 rounded-full bg-purple-900/30 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center hover:bg-purple-600/30 hover:border-purple-400/60 hover:shadow-glow transition-all duration-300'
							whileHover={{ scale: 1.1, rotate: 5 }}
							whileTap={{ scale: 0.9 }}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.8 + index * 0.1 }}
						>
							<svg
								className='w-5 h-5 fill-current text-purple-300'
								viewBox='0 0 24 24'
							>
								<path d={social.icon} />
							</svg>
						</motion.a>
					))}
				</motion.div>

				<motion.div
					className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
				>
					<div className='w-6 h-10 border-2 border-purple-500/60 rounded-full flex justify-center'>
						<motion.div
							className='w-1.5 h-1.5 bg-accent-primary rounded-full mt-2'
							animate={{ y: [0, 16, 0] }}
							transition={{
								duration: 2.5,
								repeat: Infinity,
								ease: 'easeInOut'
							}}
						/>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Hero;
