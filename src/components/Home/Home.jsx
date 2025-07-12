import React from 'react';
import '../Effects/RotatingText/RotatingText.css';
import './Home.css';
import RotatingText from '../Effects/RotatingText/RotatingText';
import desktopBg from '../../assets/images/desktop-bg-half.png';

const roles = ['software', 'full-stack', 'frontend', 'backend'];

const Home = () => {
  return (
    <div className="hero" role="img" aria-label="Background image of …">
      {/* background image layer */}
      <img src={desktopBg} alt="" className="hero__img" />

      {/* your intro text with inline rotating roles */}
      <div className="hero__content">
        <h1>Hi, I’m Parth,</h1>
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
          Developer, based in Galway, Ireland.
        </p>
      </div>
    </div>
  );
};

export default Home;
