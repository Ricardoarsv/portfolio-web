/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				purple: {
					950: '#1a0b2e',
					900: '#2d1b4e',
					800: '#3d2463',
					700: '#4c2d78',
					600: '#6b46c1',
					500: '#7c3aed',
					400: '#a78bfa',
					300: '#c4b5fd'
				},
				accent: {
					primary: '#8b5cf6',
					secondary: '#6366f1',
					tertiary: '#a855f7'
				},
				neutral: {
					black: '#0a0118',
					dark: '#1a0b2e',
					gray: '#2d1b4e',
					light: '#e9d5ff',
					white: '#faf5ff'
				}
			},
			fontFamily: {
				worksans: ['Work Sans', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
				inter: ['Inter', 'sans-serif']
			},
			boxShadow: {
				card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
				purple: '0 10px 40px rgba(107, 70, 193, 0.4)',
				'purple-lg': '0 20px 60px rgba(139, 92, 246, 0.3)',
				glow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)'
			},
			animation: {
				float: 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				}
			}
		}
	},
	plugins: []
};
