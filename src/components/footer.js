import { SocialIcon } from 'react-social-icons';
import footerloop from '../assets/footer_loop.json';
import Lottie from 'react-lottie';
export default function Footer(){
    const footerani = {
        loop: true,
        autoplay: true,
        animationData: footerloop,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };
    return(
        <div>
                    <div id="contact">
        <div className='lastmessage' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', fontFamily: 'DM Sans Display', fontSize: '3vw', textAlign:'center' }}>
        Let’s make something memorable.    
        </div>
        <div className='lastmessage' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', fontFamily: 'DM Sans Display', fontSize: '30px', textAlign:'center', marginTop:'50px' }}>  
        <SocialIcon url="https://www.linkedin.com/in/skr7/" />&nbsp;
        <SocialIcon url="askreddy02@gmail.com" network="email" /> &nbsp; askreddy02@gmail.com 
        </div>
        </div>
        <Lottie options={footerani} height={450} />
        </div>
    )   
}