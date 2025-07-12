import React from 'react';
import '../Effects/RotatingText/RotatingText.css';  // bring in its styles
import './Home.css';
import RotatingText from '../Effects/RotatingText/RotatingText';
import desktopBg from '../../assets/images/desktop-bg-half.png';

const Home = () => {
  return (
    <div className="hero">
      <img
        src={desktopBg}
        alt="Hero"
        className="hero__img"
      />

      {/* RotatingText from your local Effects folder */}
      <div className="hero__rotator">
        <RotatingText
          texts={['React', 'Bits', 'Is', 'Cool!']}
          mainClassName="rotating-text"
          staggerFrom="last"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="rotating-text-split"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>

      <div className="hero__content">
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default Home;
