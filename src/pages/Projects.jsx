import React from 'react';
import PortfolioScene from '../assets/img/Portfolio-Scene.webp';
import HandleMinderScene from '../assets/img/HandleMinder-Scene.webp';
import HandleMinderAPIScene from '../assets/img/HandleMinderAPI-Scene.webp';
import IntranetGelvezScene from '../assets/img/IntranetGelvez-Scene.webp';
import GelvezPlaceholder from '../assets/img/GelvezPlaceholder.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = ({ handleMouseRead, currentLanguage }) => {
  const projects = [
    {
      image: PortfolioScene,
      title: currentLanguage['Projects']['Projects'][0]['title'],
      type: currentLanguage['Projects']['type1'],
      description: currentLanguage['Projects']['Projects'][0]['description'],
      technologies: ['React', 'Vite.js', 'Three.js', 'Tailwind CSS', 'EmailJS'],
    },
    {
      image: HandleMinderScene,
      title: currentLanguage['Projects']['Projects'][1]['title'],
      type: currentLanguage['Projects']['type1'],
      description: currentLanguage['Projects']['Projects'][1]['description'],
      technologies: ['React', 'Vite.js', 'Tailwind CSS', 'Shadcn'],
    },
    {
      image: HandleMinderAPIScene,
      title: currentLanguage['Projects']['Projects'][2]['title'],
      type: currentLanguage['Projects']['type1'],
      description: currentLanguage['Projects']['Projects'][2]['description'],
      technologies: ['Python', 'FastAPI', 'JWT', 'Uvicorn'],
    },
    {
      image: IntranetGelvezScene,
      title: currentLanguage['Projects']['Projects'][3]['title'],
      type: currentLanguage['Projects']['type2'],
      description: currentLanguage['Projects']['Projects'][3]['description'],
      technologies: ['Python', 'Django', 'Javascript', 'HTML', 'CSS'],
    },
    {
      image: GelvezPlaceholder,
      title: currentLanguage['Projects']['Projects'][4]['title'],
      type: currentLanguage['Projects']['type2'],
      description: currentLanguage['Projects']['Projects'][4]['description'],
      technologies: ['Python', 'Playwright', 'SMTP'],
    },
    {
      image: GelvezPlaceholder,
      title: currentLanguage['Projects']['Projects'][5]['title'],
      type: currentLanguage['Projects']['type2'],
      description: currentLanguage['Projects']['Projects'][5]['description'],
      technologies: ['Python', 'Flask', 'Firebase'],
    },
    {
      image: GelvezPlaceholder,
      title: currentLanguage['Projects']['Projects'][6]['title'],
      type: currentLanguage['Projects']['type2'],
      description: currentLanguage['Projects']['Projects'][6]['description'],
      technologies: ['Python', 'Selenium', 'Pandas'],
    },
  ];

  return (
    <section className='w-full lg:h-full relative bg-[#270419] bg-gradient-to-b from-black to-transparent flex items-center justify-center'>
      <div className="mt-10 flex flex-col md:flex-row gap-8 max-w-[90%] overflow-x-auto overflow-y-hidden py-8">
        {projects.map((project, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0.5, y: 20 }}
              animate={{ opacity: inView ? 1 : 0.5, y: inView ? 0 : 20 }}
              transition={{ duration: 1 }} 
              onMouseEnter={() => handleMouseRead(true)}
              onMouseLeave={() => handleMouseRead(false)}
              className="card bg-[#670c5754] bg-gradient-to-t from-[#00000052] to-transparent rounded-lg p-4 w-80 min-w-80 md:min-w-96 text-center transform transition-transform duration-500 hover:rotate-y-20"
            > 
              <motion.p 
                initial={{ opacity: 0.5, x: -20 }}
                animate={{ opacity: inView ? 1 : 0.5, x: inView ? 0 : -20 }}
                transition={{ duration: 1 }} 
                className='text-white border-2 h-6 text-sm text-center mb-2 rounded-xl border-white'>{project.type}</motion.p>
              <img src={project.image} alt={project.title} className="card-image w-full h-auto rounded-lg" />
              <div className="card-content mt-4">
                <h3 className="text-xl text-white font-semibold">{project.title}</h3>
                <p className="mt-2 text-white">{project.description}</p>
                <div className="technologies mt-2 flex flex-wrap justify-center gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex} 
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                      transition={{ duration: 1, delay: techIndex * 0.2 }}
                      className="technology inline-block bg-[#270419] text-white px-2 py-1 rounded">
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
