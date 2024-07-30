import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = ({ handleMouseRead, currentLanguage }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICEID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_EMAIL,
      {
        from_name: formValues.name,
        to_name: 'Ricardo Villanueva',
        from_email: formValues.email,
        to_email: 'ricardoarsv.2004@gmail.com',
        message: formValues.message
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      setFormValues({
        name: '',
        email: '',
        message: ''
      });
      }).catch((error) => {
      setIsLoading(false);
      console.log(error);
    });
  };

  return (
    <section className='w-full h-screen sm:h-full relative bg-[#040927] bg-gradient-to-b from-black to-transparent flex flex-col md:flex-row items-center justify-center p-8'>
      <div className='min-w-[50%] mt-20 flex flex-col w-[90%] md:w-[50%] cursor-none'>
        <h1 className='text-white font-bold text-4xl hover:text-blue-500'>
          <span
            onMouseEnter={() => handleMouseRead(true)}
            onMouseLeave={() => handleMouseRead(false)}
          >
            {currentLanguage['Contact']['title']}
          </span>
        </h1>
        <p className='text-white text-sm'>{currentLanguage['Contact']['firstPart']} </p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='cursor-none w-full flex flex-col gap-7 mt-4 overflow-y-auto h-full max-h-[70vh]'
        >
          <form
            className='w-full flex flex-col gap-4'
            onSubmit={handleSubmit}
          >
            <label className='text-white font-semibold cursor-none'>
              Name
            </label>
            <input 
              type='text'
              name='name'
              className='input bg-gray-800 text-white p-2 rounded-md'
              placeholder='John'
              required
              value={formValues.name}
              onChange={handleChange}
            />
            <label className='text-white font-semibold cursor-none'>
              Email
            </label>
            <input 
              type='email'
              name='email'
              className='input bg-gray-800 text-white p-2 rounded-md'
              placeholder='John@email.com'
              required
              value={formValues.email}
              onChange={handleChange}
            />
            <label className='text-white font-semibold cursor-none'>
              Message
            </label>
            <textarea
              rows={4}
              name='message'
              className='textarea bg-gray-800 text-white p-2 rounded-md max-h-40 min-h-10'
              placeholder={currentLanguage['Contact']['secondPart']}
              required
              value={formValues.message}
              onChange={handleChange}
            />
            <button
              type='submit'
              className='btn bg-blue-600 text-white p-2 rounded-md'
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>

        <div className="flex flex-col mt-8 space-y-4">
          <h1 className='text-2xl text-white'>
            <span
              onMouseEnter={() => handleMouseRead(true)}
              onMouseLeave={() => handleMouseRead(false)}
            >
              {currentLanguage['Contact']['FindMe']}
            </span>
          </h1>
          <div className='flex flex-row space-x-4'>
            <motion.a
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => handleMouseRead(true)}
              onMouseLeave={() => handleMouseRead(false)}
              href="https://www.linkedin.com/in/ricardoarsv" target="_blank" rel="noopener noreferrer" className="text-white text-2xl"
            >
              <FontAwesomeIcon className='text-4xl hover:text-blue-500' icon={faLinkedin} />
            </motion.a>
            <motion.a 
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => handleMouseRead(true)}
              onMouseLeave={() => handleMouseRead(false)}
              href="https://github.com/Ricardoarsv" target="_blank" rel="noopener noreferrer" className="text-white text-2xl"
            >
              <FontAwesomeIcon className='text-4xl hover:text-blue-500' icon={faGithub} />
            </motion.a>
            <motion.a 
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => handleMouseRead(true)}
              onMouseLeave={() => handleMouseRead(false)}
              href="mailto:ricardoarsv.2004@gmail.com" className="text-white text-2xl"
            >
              <FontAwesomeIcon className='text-4xl hover:text-blue-500' icon={faEnvelope} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
