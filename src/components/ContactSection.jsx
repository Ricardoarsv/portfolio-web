import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = ({ currentLanguage }) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1
	});

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	const [status, setStatus] = useState({ type: '', message: '' });
	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setStatus({ type: '', message: '' });

		try {
			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICEID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_EMAIL,
				{
					from_name: formData.name,
					to_name: 'Ricardo Villanueva',
					from_email: formData.email,
					to_email: 'ricardoarsv.2004@gmail.com',
					subject: formData.subject,
					message: formData.message
				},
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			);

			setStatus({
				type: 'success',
				message:
					currentLanguage?.Language === 'EN'
						? "Message sent successfully! I'll get back to you soon."
						: '¡Mensaje enviado con éxito! Te responderé pronto.'
			});

			setFormData({ name: '', email: '', subject: '', message: '' });
		} catch (error) {
			setStatus({
				type: 'error',
				message:
					currentLanguage?.Language === 'EN'
						? 'Failed to send message. Please try again or contact me directly via email.'
						: 'Error al enviar el mensaje. Por favor intenta de nuevo o contáctame directamente por email.'
			});
		} finally {
			setIsLoading(false);
		}
	};

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

	const contactInfo = [
		{
			icon: (
				<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
					<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
					<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
				</svg>
			),
			title: 'Email',
			value: 'ricardoarsv.2004@gmail.com',
			link: 'mailto:ricardoarsv.2004@gmail.com',
			color: 'from-red-500 to-pink-500'
		},
		{
			icon: (
				<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
					<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
				</svg>
			),
			title: 'GitHub',
			value: 'RicardoArsv',
			link: 'https://github.com/RicardoArsv',
			color: 'from-gray-700 to-gray-900'
		},
		{
			icon: (
				<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
					<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
				</svg>
			),
			title: 'LinkedIn',
			value: 'ricardoarsv',
			link: 'https://linkedin.com/in/ricardoarsv',
			color: 'from-blue-600 to-blue-800'
		},
		{
			icon: (
				<svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
					<path
						fillRule='evenodd'
						d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
						clipRule='evenodd'
					/>
				</svg>
			),
			title: currentLanguage?.Language === 'EN' ? 'Location' : 'Ubicación',
			value: 'Colombia',
			link: null,
			color: 'from-green-500 to-teal-500'
		}
	];

	return (
		<section
			id='contact'
			className='py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden'
		>
			<div className='absolute inset-0 opacity-10'>
				<div className='absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl' />
				<div className='absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl' />
			</div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				<motion.div
					ref={ref}
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}
					variants={containerVariants}
				>
					<motion.div variants={itemVariants} className='text-center mb-16'>
						<h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
							{currentLanguage?.Language === 'EN'
								? 'Get In Touch'
								: 'Contáctame'}
						</h2>
						<div className='w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6' />
						<p className='text-gray-400 max-w-2xl mx-auto text-lg'>
							{currentLanguage?.Language === 'EN'
								? "Have a project in mind or want to collaborate? I'd love to hear from you!"
								: '¿Tienes un proyecto en mente o quieres colaborar? ¡Me encantaría saber de ti!'}
						</p>
					</motion.div>

					<div className='grid lg:grid-cols-2 gap-12'>
						<motion.div variants={itemVariants}>
							<form onSubmit={handleSubmit} className='space-y-6'>
								<div>
									<label
										htmlFor='name'
										className='block text-white font-medium mb-2'
									>
										{currentLanguage?.Language === 'EN'
											? 'Your Name'
											: 'Tu Nombre'}
									</label>
									<input
										type='text'
										id='name'
										name='name'
										value={formData.name}
										onChange={handleChange}
										required
										className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all duration-300'
										placeholder={
											currentLanguage?.Language === 'EN'
												? 'John Doe'
												: 'Juan Pérez'
										}
									/>
								</div>

								<div>
									<label
										htmlFor='email'
										className='block text-white font-medium mb-2'
									>
										{currentLanguage?.Language === 'EN'
											? 'Your Email'
											: 'Tu Email'}
									</label>
									<input
										type='email'
										id='email'
										name='email'
										value={formData.email}
										onChange={handleChange}
										required
										className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all duration-300'
										placeholder={
											currentLanguage?.Language === 'EN'
												? 'john@example.com'
												: 'juan@ejemplo.com'
										}
									/>
								</div>

								<div>
									<label
										htmlFor='subject'
										className='block text-white font-medium mb-2'
									>
										{currentLanguage?.Language === 'EN' ? 'Subject' : 'Asunto'}
									</label>
									<input
										type='text'
										id='subject'
										name='subject'
										value={formData.subject}
										onChange={handleChange}
										required
										className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all duration-300'
										placeholder={
											currentLanguage?.Language === 'EN'
												? 'Project Collaboration'
												: 'Colaboración en Proyecto'
										}
									/>
								</div>

								<div>
									<label
										htmlFor='message'
										className='block text-white font-medium mb-2'
									>
										{currentLanguage?.Language === 'EN' ? 'Message' : 'Mensaje'}
									</label>
									<textarea
										id='message'
										name='message'
										value={formData.message}
										onChange={handleChange}
										required
										rows={5}
										className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 resize-none'
										placeholder={
											currentLanguage?.Language === 'EN'
												? 'Tell me about your project...'
												: 'Cuéntame sobre tu proyecto...'
										}
									/>
								</div>

								{status.message && (
									<motion.div
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										className={`p-4 rounded-xl ${
											status.type === 'success'
												? 'bg-green-500/20 border border-green-500/50 text-green-300'
												: 'bg-red-500/20 border border-red-500/50 text-red-300'
										}`}
									>
										{status.message}
									</motion.div>
								)}

								<motion.button
									type='submit'
									disabled={isLoading}
									className='w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-900 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									{isLoading
										? currentLanguage?.Language === 'EN'
											? 'Sending...'
											: 'Enviando...'
										: currentLanguage?.Language === 'EN'
										? 'Send Message'
										: 'Enviar Mensaje'}
								</motion.button>
							</form>
						</motion.div>

						<motion.div variants={itemVariants} className='space-y-8'>
							<div className='bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8'>
								<h3 className='text-2xl font-bold text-white mb-6'>
									{currentLanguage?.Language === 'EN'
										? 'Contact Information'
										: 'Información de Contacto'}
								</h3>
								<div className='space-y-6'>
									{contactInfo.map((info, index) => (
										<motion.div
											key={info.title}
											initial={{ opacity: 0, x: -20 }}
											animate={inView ? { opacity: 1, x: 0 } : {}}
											transition={{ delay: index * 0.1 }}
											className='flex items-start gap-4'
										>
											<div
												className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center flex-shrink-0 text-white`}
											>
												{info.icon}
											</div>
											<div className='flex-1'>
												<h4 className='text-white font-semibold mb-1'>
													{info.title}
												</h4>
												{info.link ? (
													<a
														href={info.link}
														target='_blank'
														rel='noopener noreferrer'
														className='text-purple-400 hover:text-purple-300 transition-colors duration-300 break-all'
													>
														{info.value}
													</a>
												) : (
													<p className='text-gray-400'>{info.value}</p>
												)}
											</div>
										</motion.div>
									))}
								</div>
							</div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: 0.4 }}
								className='bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md border border-purple-500/30 rounded-3xl p-8'
							>
								<div className='flex items-center gap-3 mb-4'>
									<div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
									<span className='text-white font-semibold'>
										{currentLanguage?.Language === 'EN'
											? 'Available for Work'
											: 'Disponible para Trabajo'}
									</span>
								</div>
								<p className='text-gray-300'>
									{currentLanguage?.Language === 'EN'
										? "I'm currently available for freelance projects and full-time opportunities. Let's build something amazing together!"
										: 'Actualmente estoy disponible para proyectos freelance y oportunidades de tiempo completo. ¡Construyamos algo increíble juntos!'}
								</p>
							</motion.div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactSection;
