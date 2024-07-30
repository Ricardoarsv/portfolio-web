import { useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import Loader from '../components/Loader';
import World from '../models/World';

const Home = ({ handleMouseRead, currentLanguage }) => {
  const [moonOrbitScale, setMoonOrbitScale] = useState([1, 1, 1]);
  const [moonOrbitPosition, setMoonOrbitPosition] = useState([0, 2, -43]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [showStack, setShowStack] = useState([false, null]);
  const [letterList, setLetterList] = useState([]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(true);
  const [loading, setLoading] = useState(true);
  const backendText = 'Backend';
  const frontendText = 'Frontend';
  const fullstackText = 'Fullstack-Developer';
  const Stacks = [
    'python',
    'django',
    'fastapi',
    'firebase',
    'flask',
    'selenium',
    'js',
    'react',
    'vite',
    'tailwind',
    'html',
    'css',
    'mysql',
    'postgres',
    'postman',
    'git'
  ]

  useEffect(() => {
    if (loadedCount === Stacks.length) {
      setImagesLoaded(true);
    }
  }, [loadedCount, Stacks.length]);

  const handleImageLoad = () => {
    setLoadedCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    const texts = [backendText, frontendText, fullstackText];
    let currentText = texts[currentTextIndex];

    const updateText = () => {
      if (isAdding) {
        if (charIndex < currentText.length) {
          setLetterList((prev) => [...prev, currentText[charIndex]]);
          setCharIndex(charIndex + 1);
        } else {
          setIsAdding(false);
          setTimeout(() => {
            setIsAdding(true);
            setCharIndex(0);
            setCurrentTextIndex((currentTextIndex + 1) % texts.length);
            setLetterList([]);
          }, 1000);
        }
      }
    };

    const intervalId = setInterval(updateText, 200);

    return () => clearInterval(intervalId);
  }, [currentTextIndex, charIndex, isAdding]);

  const adjustSceneForScreenSize = () => {
    if (window.innerWidth < 640) {
      return { scale: [30, 30, 30], position: [0, 2, -35] };
    } else if (window.innerWidth < 768) {
      return { scale: [45, 45, 45], position: [0, 2, -40] };
    } else {
      return { scale: [50, 50, 50], position: [0, 2, -43] };
    }
  };

  const animateScale = (targetScale) => {
    const duration = 1000; // Duration of the animation in milliseconds
    const frameRate = 60; // Frames per second
    const totalFrames = (duration / 1000) * frameRate;
    const scaleIncrement = targetScale.map((target, index) => (target - 1) / totalFrames);

    let currentFrame = 0;

    const animate = () => {
      if (currentFrame < totalFrames) {
        setMoonOrbitScale(prevScale => prevScale.map((scale, index) => scale + scaleIncrement[index]));
        currentFrame++;
        requestAnimationFrame(animate);
      } else {
        setMoonOrbitScale(targetScale); // Ensure we end exactly at the target scale
        setLoading(false);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const { scale, position } = adjustSceneForScreenSize();
    animateScale(scale);
    setMoonOrbitPosition(position);

    const handleResize = () => {
      const { scale, position } = adjustSceneForScreenSize();
      setMoonOrbitScale(scale);
      setMoonOrbitPosition(position);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <section className='w-full h-screen relative bg-black flex items-center justify-center'>

      <div className='absolute w-full top-0 left-0 h-full bg-[#b700ff2a] bg-gradient-to-b from-black to-transparent' />
      {!loading && (
        <div className='z-50 absolute top-20 lg:top-28 left-0 right-0 text-3xl lg:text-4xl text-white text-center font-bold'>  
          <span
            onMouseEnter={() =>{
                handleMouseRead(true)
            }}
            onMouseLeave={() =>{
                handleMouseRead(false)
            }}
          >
          {!loading ?  
            letterList.map((letter, index) => (
              <span key={index} className='inline-block'>{letter}</span>
            )) : null
          }
          </span>
        </div>
      )}
      <Canvas
        className='w-full h-screen bg-transparent'
        camera={{ near: 0.1, far: 1000, fov: 75, position: [0, 0, 5] }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor='#350273' groundColor='#A427B7' intensity={0.6} />
          <World
            position={moonOrbitPosition}
            scale={moonOrbitScale}
          />
        </Suspense>
      </Canvas>
     {!loading && (
    <motion.div
      className='z-50 absolute bottom-20 lg:bottom-26 left-0 right-0 text-3xl lg:text-4xl text-white text-center font-bold'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <span
        onMouseEnter={() => handleMouseRead(true)}
        onMouseLeave={() => handleMouseRead(false)}
      >
        {currentLanguage['Home']['StackPreview']['title']}
      </span>
      <br />
      <span
        className='text-sm'
        onMouseEnter={() => handleMouseRead(true)}
        onMouseLeave={() => handleMouseRead(false)}
      >
        {currentLanguage['Home']['StackPreview']['description']}
      </span>
      <div className='flex flex-row justify-center flex-wrap gap-2 mx-10'>
        {imagesLoaded && Stacks.map((stack, index) => (
          <motion.div
            key={index}
            className='relative'
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.3 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => {
              setShowStack([true, index]);
              handleMouseRead(true);
            }}
            onMouseLeave={() => {
              setShowStack([false, null]);
              handleMouseRead(false);
            }}
          >
            {showStack[0] && showStack[1] === index ? (
              <p className='absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm p-2 text-black bg-[#ffff] rounded-xl'>
                {stack}
              </p>
            ) : null}
            <motion.a
              className='cursor-none block shadow-md'
              href="https://skillicons.dev"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <img
                src={`https://skillicons.dev/icons?i=${stack}`}
                onLoad={handleImageLoad}
              />
            </motion.a>
          </motion.div>
        ))}
        {!imagesLoaded && Stacks.map((stack, index) => (
          <img
            key={index}
            src={`https://skillicons.dev/icons?i=${stack}`}
            style={{ display: 'none' }}
            onLoad={handleImageLoad}
          />
        ))}
      </div>
    </motion.div>
    )}
    </section>
  );
};

export default Home;
