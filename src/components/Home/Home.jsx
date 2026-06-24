import React from 'react';
import RotatingText from '../Effects/RotatingText/RotatingText';
import data from '../../data.json';
import './Home.css';

function PaperCrane() {
  const facets = [
    { points: '100,30 140,90 100,150 100,90', delay: 0 },
    { points: '100,30 60,90 100,150 100,90', delay: 0.08, shade: true },
    { points: '100,150 140,90 175,150 130,185', delay: 0.16 },
    { points: '100,150 60,90 25,150 70,185', delay: 0.24, shade: true },
    { points: '100,30 90,4 110,4', delay: 0.32 },
    { points: '70,185 100,150 130,185 100,220', delay: 0.4, shade: true },
  ];
  return (
    <svg className="crane" viewBox="0 0 200 230" width="180" height="200">
      {facets.map((f, i) => (
        <polygon
          key={i}
          points={f.points}
          className="crane-facet"
          style={{ animationDelay: `${f.delay}s`, fill: f.shade ? 'var(--accent)' : 'var(--surface)' }}
        />
      ))}
      <line x1="100" y1="30" x2="100" y2="150" className="crane-fold" />
    </svg>
  );
}

export default function Home() {
  const { greeting, roles, linkedIn } = data.home;
  const [before, after] = data.home.subtitle.split('{role}');

  return (
    <section id="home" className="hero">
      <div className="hero__crane">
        <PaperCrane />
      </div>

      <div className="hero__status">
        <span className="hero__dot" />
        {data.about.status} · Galway, Ireland
      </div>

      <h1 className="hero__headline">{greeting}</h1>

      <p className="hero__subline">
        {before}
        <RotatingText
          texts={roles}
          mainClassName="hero__role"
          splitLevelClassName="hero__role-split"
          staggerFrom="last"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-120%' }}
          staggerDuration={0.025}
          transition={{ type: 'spring', damping: 30, stiffness: 400 }}
          rotationInterval={2200}
        />
        {after}
      </p>

      <div className="hero__cta">
        <a className="btn btn-primary" href={linkedIn} target="_blank" rel="noreferrer">
          Connect on LinkedIn
        </a>
        <a
          className="btn btn-ghost"
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          View my work
        </a>
      </div>

      <div className="hero__scroll">
        <span>Scroll</span>
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
          <path d="M7 1v16M1 11l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
