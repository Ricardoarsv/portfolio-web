import { faAddressCard } from '@fortawesome/free-regular-svg-icons';
import { faCode, faEnvelopeOpenText, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = ({ handleLanguageChange }) => {
    return (
        <header className='header'>
            <button
                className='text-[#ffffff61] text-1xl z-50 hover:text-white cursor-pointer fixed right-6 top-40 w-10 h-10 md:w-16 md:h-16 rounded-full border-2 border-[#ffffff61] hover:border-white'
                onClick={handleLanguageChange}
            >
                <FontAwesomeIcon className='text-1xl md:text-2xl' icon={faLanguage} />
            </button>
            <NavLink 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                to='/' 
                className='w-10 h-10 rounded-lg bg-transparent border-gradient flex items-center justify-center font-bold shadow-md cursor-none'
                onMouseEnter={() =>{
                    document.querySelector('#CursorSphere').classList.add('Readcursor');
                    document.querySelector('#CursorSphere').classList.remove('cursor');
                }}
                onMouseLeave={() =>{
                    document.querySelector('#CursorSphere').classList.remove('Readcursor');
                    document.querySelector('#CursorSphere').classList.add('cursor');
                }}
            >
                <p className='purple-gradient_text'>RV</p>
            </NavLink>
            <motion.nav 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className='flex gap-7 font-medium cursor-pointer-none text-sm sm:text-md md:text-lg lg:text-xl'>
                <NavLink 
                    to='/about'
                    className={({ isActive }) => isActive ? 'purple-gradient_text hover:underline' : 'text-purple-500 hover:underline cursor-none'}
                    onMouseEnter={() =>{
                        document.querySelector('#CursorSphere').classList.add('Readcursor');
                        document.querySelector('#CursorSphere').classList.remove('cursor');
                    }}
                    onMouseLeave={() =>{
                        document.querySelector('#CursorSphere').classList.remove('Readcursor');
                        document.querySelector('#CursorSphere').classList.add('cursor');
                    }}
                >
                <FontAwesomeIcon className='pr-2' icon={faAddressCard} />
                    About
                </NavLink>
                <NavLink 
                    to='/projects' 
                    className={({ isActive }) => isActive ? 'purple-gradient_text hover:underline' : 'text-purple-500 hover:underline cursor-none'}
                    onMouseEnter={() =>{
                        document.querySelector('#CursorSphere').classList.add('Readcursor');
                        document.querySelector('#CursorSphere').classList.remove('cursor');
                    }}
                    onMouseLeave={() =>{
                        document.querySelector('#CursorSphere').classList.remove('Readcursor');
                        document.querySelector('#CursorSphere').classList.add('cursor');
                    }}
                >
                <FontAwesomeIcon 
                    className='pr-2' 
                    icon={faCode} />
                    Projects
                </NavLink>
                <NavLink 
                    to='/contact' 
                    className={({ isActive }) => isActive ? 'purple-gradient_text hover:underline' : 'text-purple-500 hover:underline cursor-none'}
                    onMouseEnter={() =>{
                        document.querySelector('#CursorSphere').classList.add('Readcursor');
                        document.querySelector('#CursorSphere').classList.remove('cursor');
                    }}
                    onMouseLeave={() =>{
                        document.querySelector('#CursorSphere').classList.remove('Readcursor');
                        document.querySelector('#CursorSphere').classList.add('cursor');
                    }}
                >
                <FontAwesomeIcon className='pr-2' icon={faEnvelopeOpenText} />
                    Contact
                </NavLink>
            </motion.nav>
        </header>
    )
}

export default Navbar