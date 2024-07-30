import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Projects, Contact } from './pages';
import { useEffect, useRef, useState } from 'react';
import { Dictionary } from './components/Languagues';


export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState(Dictionary['ES']);
  const cursor = useRef();

  const handleLanguageChange = () => {
        const newLanguage = currentLanguage['Language'] === 'EN' ? 'ES' : 'EN';
        setCurrentLanguage(Dictionary[newLanguage]);
    };

  useEffect(() => {
    const handleMouseMove = (e) => {
      let x
      let y
      
      if (cursor.current.className === 'Readcursor') {
        x = e.clientX - 15;
        y = e.clientY - 15;
      } else {
        x = e.clientX - 10;
        y = e.clientY - 10;
      }

      cursor.current.style.left = x + 'px';
      cursor.current.style.top = y + 'px';
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  function handleMouseRead(state) {
    if (state) {
      document.querySelector('#CursorSphere').classList.add('Readcursor');
      document.querySelector('#CursorSphere').classList.remove('cursor');
    } else {
      document.querySelector('#CursorSphere').classList.add('cursor');
      document.querySelector('#CursorSphere').classList.remove('Readcursor');
    }
  }

  return (
    <main className='bg-[#b700ff2a] h-full bg-gradient-to-b from-black to-transparent'>

        {/* {window.innerWidth > 1000 ? (
            <div ref={cursor} id='CursorSphere' className='cursor' />
          ) : null
        } */}
        <div ref={cursor} id='CursorSphere' className='cursor' />

        <Router>
            <Navbar handleLanguageChange={handleLanguageChange} />
            <Routes>
                <Route path='/' element={<Home handleMouseRead={handleMouseRead} currentLanguage={currentLanguage} />} />
                <Route path='/about' element={<About handleMouseRead={handleMouseRead} currentLanguage={currentLanguage} />} />
                <Route path='/projects' element={<Projects handleMouseRead={handleMouseRead} currentLanguage={currentLanguage} />} />
                <Route path='/contact' element={<Contact handleMouseRead={handleMouseRead} currentLanguage={currentLanguage} />} />
            </Routes>
        </Router>

    </main>
  )
}