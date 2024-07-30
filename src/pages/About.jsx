import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import AboutMe from '../models/AboutMe';
import MotionText from '../components/MotionText';

const About = ({ handleMouseRead, currentLanguage }) => {
  const [rotation, setRotation] = useState([0.37, 1.82, -0.2]);
  const [spacemanScale, setSpacemanScale] = useState([1, 1, 1]);
  const [spacemanPosition, setSpacemanPosition] = useState([0.1, -0.9, 1]);

  const draggingRef = useRef(false);

  const handlePointerDown = () => draggingRef.current = true;
  const handlePointerUp = () => draggingRef.current = false;

  const handlePointerMove = (event) => {
    if (draggingRef.current) {
      setRotation([
        rotation[0] + event.movementY * 0.01,
        rotation[1] + event.movementX * 0.01,
        rotation[2],
      ]);
    }
  };

  const adjustSceneForScreenSize = () => {
    if (window.innerWidth < 640) return [1.8, 1.8, 1.8];
    if (window.innerWidth < 768) return [1.5, 1.5, 1.5];
    return [1, 1, 1];
  };

  useEffect(() => {
    setSpacemanScale(adjustSceneForScreenSize());
  }, []);

  const handleMouse = () => handleMouseRead(true);
  const handleMouseLeave = () => handleMouseRead(false);

  return (
    <section className='w-full h-screen sm:h-full relative bg-[#1d0427] bg-gradient-to-b from-black to-transparent flex items-center justify-center'>
      <div className='flex flex-col md:flex-row w-full'>
        <div className='text-white text-center md:text-left p-6 h-screen mt-20 max-h-[60vh] md:max-h-[86vh] overflow-y-auto'>
          <MotionText
            className='font-bold text-3xl mb-4'
            onMouseEnter={handleMouse}
            onMouseLeave={handleMouseLeave}
          >
            {currentLanguage['About']['title']}
          </MotionText>
          <MotionText
            className='mb-4'
            onMouseEnter={handleMouse}
            onMouseLeave={handleMouseLeave}
          >
            {currentLanguage['About']['firstPart']} <span className='font-bold'>{currentLanguage['About']['name']}</span>{currentLanguage['About']['secondPart']}
          </MotionText>
          <MotionText
            className='mb-4'
            onMouseEnter={handleMouse}
            onMouseLeave={handleMouseLeave}
          >
            {currentLanguage['About']['thirdPart']}
          </MotionText>
          <MotionText
            className='mb-8'
            onMouseEnter={handleMouse}
            onMouseLeave={handleMouseLeave}
          >
            {currentLanguage['About']['fourthPart']}
          </MotionText>

          <MotionText
            className='font-bold text-3xl mb-4'
            onMouseEnter={handleMouse}
            onMouseLeave={handleMouseLeave}
          >
            {currentLanguage['About']['titleTwo']}
          </MotionText>
          <div className='mb-8'>
            <MotionText
              className='font-bold text-xl'
              onMouseEnter={handleMouse}
              onMouseLeave={handleMouseLeave}
            >
              Gelvez Distribuciones S.A.S
            </MotionText>
            <MotionText
              className='rounded-xl border-2 text-center purple-gradient_text w-auto px-2 mb-2'
              onMouseEnter={handleMouse}
              onMouseLeave={handleMouseLeave}
            >
              {currentLanguage['About']['firstJob']}
            </MotionText>
            <MotionText
              className='italic mb-8'
              onMouseEnter={handleMouse}
              onMouseLeave={handleMouseLeave}
            >
              {currentLanguage['About']['firstJobDate']}
            </MotionText>
            <ul className='list-disc list-inside text-left mb-4'>
              {[
                'firstJobFunction1',
                'firstJobFunction2',
                'firstJobFunction3',
                'firstJobFunction4',
                'firstJobFunction5',
                'firstJobFunction6',
              ].map((key) => (
                <MotionText
                  key={key}
                  className='w-auto'
                  onMouseEnter={handleMouse}
                  onMouseLeave={handleMouseLeave}
                >
                  {currentLanguage['About'][key]}
                </MotionText>
              ))}
            </ul>
            <MotionText
                className='w-auto'
                onMouseEnter={handleMouse}
                onMouseLeave={handleMouseLeave}
            >
              <span className='font-bold'>{currentLanguage['About']['tecnologies']}</span> Python, Django, Flask, Selenium, Playwright, JavaScript, HTML, CSS, TailwindCSS, React, ViteJS.
            </MotionText>
          </div>

          <MotionText
            className='font-bold text-3xl mb-4'
            onMouseEnter={handleMouse}
            onMouseLeave={handleMouseLeave}
          >
            {currentLanguage['About']['studies']}
          </MotionText>
          <div className='mb-8 text-left'>
            {[
              { title: 'SENA', key: 'firstStudy' },
              { title: 'SENA', key: 'secondStudy' },
              { title: 'CISCO', key: 'thirdStudy' },
              { title: 'CISCO', key: 'fourthStudy' },
              { title: 'CISCO', key: 'fifthStudy' },
              { title: 'SENA', key: 'sixthStudy' },
              { title: 'SENA', key: 'sevenStudy' },
              { title: 'SENA', key: 'eightStudy' },
              { title: 'SENA', key: 'nineStudy' },
              { title: 'CISCO', key: 'tenStudy' },
            ].map(({ title, key }) => (
              <React.Fragment key={key}>
                <MotionText
                  className='font-bold'
                  onMouseEnter={handleMouse}
                  onMouseLeave={handleMouseLeave}
                >
                  {title}
                </MotionText>
                <MotionText
                  className='italic mb-2'
                  onMouseEnter={handleMouse}
                  onMouseLeave={handleMouseLeave}
                >
                  {currentLanguage['About'][key]}
                </MotionText>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className='w-full'>
          <Canvas
            className='w-full h-full bg-transparent'
            camera={{ near: 0.1, far: 200, fov: 75, position: [0, 0, 5] }}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerMove={handlePointerMove}
          >
            <Suspense fallback={<Loader />}>
              <directionalLight position={[5, 5, 5]} intensity={2} />
              <ambientLight intensity={10} />
              <AboutMe
                className='cursor-pointer'
                position={spacemanPosition}
                scale={spacemanScale}
                rotation={rotation}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default About;
