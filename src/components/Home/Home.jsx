import React from 'react';
import './Home.css';
import desktopBg from '../../assets/images/desktop-bg-half.png';

const Home = () => {
  return (
    <div className="hero">
      <img
        src={desktopBg}
        alt="Hero"
        className="hero__img"
      />
      <div className="hero__content">
        <h1>Home</h1>   
      </div>
    </div>  
  );
};

export default Home;
