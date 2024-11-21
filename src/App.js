import React from 'react';
import { useState } from 'react';
// import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

// import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [showScrollToTop,setShowScrollToTop] = useState(false);
  const handleScroll = ()=>{
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowScrollToTop(scrollTop>0);
  };
  const handleScrollToTop =()=>{
    window.scrollTo({top:0,behavior: 'smooth'});
  };
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);
    return()=>{
      window.removeEventListener('scroll',handleScroll);
    }
  },[]);

  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
    {showScrollToTop && (
              <div className="scroll-to-top" onClick={handleScrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} />
              </div>
            )}
          </div>
  );
}

export default App;

