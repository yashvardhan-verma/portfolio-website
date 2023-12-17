import './App.css';
import github from './assests/github.svg';
import linkedin from './assests/linkedin.svg';
import mail from './assests/mail.svg';
import instagram from './assests/instagram.svg';
import twitch from './assests/twitch.svg';
import twitter from './assests/twitter.svg';
import sun from './assests/sun.svg';
import hero from './assests/hero.jpeg';



function App() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: '#121212' }}>
      <div style={{ width: 527, height: 232, left: 388, top: 385, position: 'absolute' }}>
        <div style={{ width: 527, height: 134, left: 0, top: 35, position: 'absolute', color: '#B6C6DE', fontSize: 75, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word' }}>Yashavrdhan</div>
        <div style={{ width: 450, height: 81, left: 0, top: 151, position: 'absolute', color: '#8D9FBA', fontSize: 45, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word' }}>Backend Developer</div>
        <div style={{ width: 368, height: 35, left: 0, top: 0, position: 'absolute', color: '#8D9FBA', fontSize: 25, fontFamily: 'JetBrains Mono', fontWeight: '400', wordWrap: 'break-word' }}>Hi, my name is </div>
      </div>
      <div style={{ width: 417, height: 52, left: 388, top: 640, position: 'absolute' }}>
        <div style={{ width: 52, height: 52, left: 0, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
          <a href='https://github.com/yashvardhan' target='_blank'><img alt='' src={github} /></a>
        </div>
        <div style={{ width: 52, height: 52, left: 73, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
          <a href='https://www.linkedin.com/in/yashvardhan-60b3a5184/' target='_blank'><img alt='' src={linkedin} /></a>
        </div>
        <div style={{ width: 52, height: 52, left: 146, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
          <a href='https://twitter.com/yashvrdhnx' target='_blank'><img alt='' src={twitter} /></a>
        </div>
        <div style={{ width: 52, height: 52, left: 292, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
          <a href='mailto:iamyashvardhan6@gmail.com' target='_blank'><img alt='' src={mail} /></a>
        </div>
        <div style={{ width: 52, height: 52, left: 365, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
          <a href='https://instagram.com/vrdhnx' target='_blank'><img alt='' src={instagram} /></a>
        </div>
        <div style={{ width: 52, height: 52, left: 219, top: 0, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
          <a href=''><img alt='' src={twitch} target='_blank'/></a>
        </div>
      </div>
      <div style={{ width: 368, height: 368, left: 1164, top: 356, position: 'absolute' }}>
        <div style={{ width: 368, height: 368, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: 9999 }} />
        <img style={{ width: 386, height: 386, left: -20, top: 1, position: 'absolute', borderRadius: '100%' }} src={hero} />
      </div>
      <div style={{ left: 1175, top: 28, position: 'absolute', color: 'white', fontSize: 25, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word' }}>About</div>
      <div style={{ left: 1277, top: 28, position: 'absolute', color: 'white', fontSize: 25, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word' }}>Skills</div>
      <div style={{ left: 1362, top: 28, position: 'absolute', color: 'white', fontSize: 25, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word' }}>Experience</div>
      <div style={{ left: 1524, top: 28, position: 'absolute', color: 'white', fontSize: 25, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word' }}>Project</div>
      <div style={{ left: 1642, top: 28, position: 'absolute', color: '#007BFF', fontSize: 25, fontFamily: 'Poppins', fontWeight: '300', wordWrap: 'break-word', zIndex: 99 }}> <a href='https://drive.google.com/file/d/1kHdRADltpBYxYuTHb61TFYCvo_ZMpE0N/view?usp=sharing' target='_blank'>Resume</a></div>
      <div style={{ width: 110, height: 40, left: 1637, top: 27, position: 'absolute', background: 'rgba(217, 217, 217, 0)', borderRadius: 4, border: '1px #007BFF solid' }} />
      <div style={{ width: 52, height: 52, left: 1807, top: 21, position: 'absolute' }}>
        <img alt='' src={sun} />
      </div>
    </div>
  );
}

export default App;
