import React from 'react';
import headshot from '../../assets/images/Parth.jpeg';
import data from '../../data.json';
import './About.css';

export default function About() {
  const { name, handle, linkedIn, bio } = data.about;

  return (
    <section id="about" className="section about">
      <div className="section-head">
        <span className="section-num mono">01 / about</span>
        <span className="section-rule" />
      </div>

      <div className="about__grid">
        <div className="about__text">
          <h2>About me</h2>
          <p className="about__bio">{bio}</p>
          <div className="about__meta">
            <span className="mono">@{handle}</span>
            <a href={linkedIn} target="_blank" rel="noreferrer" className="pill">
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="about__portrait card">
          <img src={headshot} alt={`${name} headshot`} loading="lazy" />
          <span className="about__tag pill">📍 Galway, IE</span>
        </div>
      </div>
    </section>
  );
}
