import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import '../Css/home.css';
import Lottie from 'react-lottie';
import animationData from '../Assets/95348-coding-boy.json';
import footerloop from '../Assets/16850-footer-loop-animation.json';



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
    <div className="desktop">
        <div className='hello'>
            <div className = 'left-side'>
                <div className='text'>
                    Hi, I'm <span className='animated-text'>Sai Kumar Reddy Annapureddy</span>
                </div>
                <div className='description'>
                    <p className='smalltext'>
                    I've immersed myself in a variety of projects, ranging from eCommerce and Machine 
                    Learning to Web Development. The tech sphere captivates me, and I eagerly embrace new
                    technologies to keep my skills sharp. Let's create something remarkable together.
                    </p>
                </div>
            </div>
            <div className="right-side">

                <Lottie options={defaultOptions} height={450} width={650} />
            </div>
       </div>
        
      {/* <h1>Sai Kumar Reddy Annapureddy</h1>
      <p>Backend Developer | Android Developer | Machine Learning Enthusiast</p>
      <Link to="/projects" className="btn btn-primary m-2">Projects</Link>
      <Link to="/experience" className="btn btn-primary m-2">Experience</Link>
      <Link to="/contact" className="btn btn-primary m-2">Contact</Link> */}
    </div>
  );
}

export default Home;
// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faArrowUp } from '@fortawesome/free-solid-svg-icons';
// import '../Css/homepage.css';
// import Lottie from 'react-lottie';
// import animationData from '../Assets/95348-coding-boy.json';
// import footerloop from '../Assets/16850-footer-loop-animation.json';
// import Cases from './Cases';
// import Navbar from './Navbar';
// import { SocialIcon } from 'react-social-icons';
// import Footer from './Footer';
// import Homepagemob from '../Mobilepages/HomepageMobile';
// import Mobfooter from '../Mobilepages/Mobilefooter';

// function Homepage() {
//     const defaultOptions = {
//         loop: true,
//         autoplay: true,
//         animationData: animationData,
//         rendererSettings: {
//           preserveAspectRatio: 'xMidYMid slice',
//         },
//       };
//       const footerani = {
//         loop: true,
//         autoplay: true,
//         animationData: footerloop,
//         rendererSettings: {
//           preserveAspectRatio: 'xMidYMid slice',
//         },
//       };
    
//       const [showScrollToTop, setShowScrollToTop] = useState(false);
    
//       const handleScroll = () => {
//         const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         setShowScrollToTop(scrollTop > 0);
//       };
    
//       const handleScrollToTop = () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       };
    
//       useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//           window.removeEventListener('scroll', handleScroll);
//         };
//       }, []);
//   return (
//     <div>
//       <div className='mobile'>
//       <Homepagemob/>
//       </div>

//       <div className='desktop'>
//       <Navbar />
//       <div className="hello">
//         <div className="left-side">
//           <div className="text">
//             Hi, I'm <span className="animated-text">John Mendez</span>
//           </div>
//           <div className="description">
//             <p className="smalltext">
//               I've immersed myself in a variety of projects, ranging from eCommerce and Machine
//               Learning to Web Development. The tech sphere captivates me, and I eagerly embrace new
//               technologies to keep my skills sharp. Let's create something remarkable together.
//             </p>
//           </div>
//         </div>
//         <div className="right-side">
//           <Lottie options={defaultOptions} height={450} width={650} />
//         </div>
//       </div>
//       <div className="casestudies">SCROLL DOWN TO VIEW CASE STUDIES</div>
//       <div className="image-container">
//         <img
//           src="https://static.thenounproject.com/png/582068-200.png"
//           className="floating-image"
//           style={{ height: '150px', marginBottom: '300px' }}
//         />
//       </div>
//       <a id="caseStudies">
//         <Cases />
//       </a>

//       {showScrollToTop && (
//         <div className="scroll-to-top" onClick={handleScrollToTop}>
//           <FontAwesomeIcon icon={faArrowUp} />
//         </div>
//       )}
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default Homepage;
