import React from 'react';
import '../Effects/RotatingText/RotatingText.css';
import './Home.css';
import RotatingText from '../Effects/RotatingText/RotatingText';
import desktopBg from '../../assets/images/desktop-bg-half.png';
import profileImage from '../../assets/images/mobile-bg.png';

const roles = ['software', 'full-stack', 'frontend', 'backend'];

const Home = () => {
  const handleConnectClick = () => {
    window.open('https://www.linkedin.com/in/parth-bhatt-092024186/', '_blank');
  };

  return (
    <div className="hero" role="img" aria-label="Background image of …">
      {/* background image layer */}
      <img src={desktopBg} alt="" className="hero__img" />

      {/* your intro text with inline rotating roles */}
      <div className="hero__content">
        <h1>Hi, I'm Parth,</h1>
        <p className="hero__subtitle">
          an Experienced{' '}
          <RotatingText
            texts={roles}
            mainClassName="rotating-text-inline"
            splitLevelClassName="rotating-text-split"
            staggerFrom="last"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-120%' }}
            staggerDuration={0.025}
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />{' '}
          Developer, <br/>
          based in Galway, Ireland.
        </p>
        
        {/* Profile Card */}
        <div className="profile-card">
          <div className="profile-image">
            <img src={profileImage} alt="Parth Bhatt" />
          </div>
        </div>
        
        {/* Connect with me button */}
        <button className="connect-button" onClick={handleConnectClick}>
          <svg className="linkedin-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span>Connect with me</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
