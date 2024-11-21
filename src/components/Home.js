import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import '../css/home.css';
import Lottie from 'react-lottie';
import animationData from '../assets/coding_boy.json';
import Navbar from './Navbar';
import Footer from './footer';
 import footerloop from '../assets/footer_loop.json';



import { Link } from 'react-router-dom';

function Home() {
    const defaultOptions = {
                loop: true,
                autoplay: true,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                },
              };
              const footerani = {
                loop: true,
                autoplay: true,
                animationData: footerloop,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                },
              };
            
              const [showScrollToTop, setShowScrollToTop] = useState(false);
            
              const handleScroll = () => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                setShowScrollToTop(scrollTop > 0);
              };
            
              const handleScrollToTop = () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              };
            
              useEffect(() => {
                window.addEventListener('scroll', handleScroll);
                return () => {
                  window.removeEventListener('scroll', handleScroll);
                };
              }, []);

  return (
    <div>
    <div className="desktop">
      <Navbar/>
        <div className='hello'>
            <div className = 'left-side'>
                <div className='text'>
                    Hi, I'm <span className='animated-text'>Sai Kumar Reddy Annapureddy</span>
                </div>
                <div className='description'>
                    <p className='smalltext'>
                    I've immersed myself in a variety of projects, ranging from Embedded Systems and Machine 
                    Learning to Web Development. The tech sphere captivates me, and I eagerly embrace new
                    technologies to keep my skills sharp. Let's create something remarkable together.
                    </p>
                </div>
            </div>
            <div className="right-side">
                <Lottie options={defaultOptions} height={450} width={650} />
            </div>

            {showScrollToTop && (
        <div className="scroll-to-top" onClick={handleScrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      )}
        
       </div>
        
       <Footer/>
    </div>

    </div>
  );
}

export default Home;

