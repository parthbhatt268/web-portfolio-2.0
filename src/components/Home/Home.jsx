import React, { useEffect, useState } from 'react';
import RotatingText from '../Effects/RotatingText/RotatingText';
import { useTheme } from '../../ThemeContext';
import data from '../../data.json';
import './Home.css';

function PaperCrane() {
  const facets = [
    { points: '100,200 140,140 100,80 100,140', delay: 0 },
    { points: '100,200 60,140 100,80 100,140', delay: 0.08, shade: true },
    { points: '100,80 140,140 175,80 130,45', delay: 0.16 },
    { points: '100,80 60,140 25,80 70,45', delay: 0.24, shade: true },
    { points: '100,200 90,226 110,226', delay: 0.32 },
    { points: '70,45 100,80 130,45 100,10', delay: 0.4, shade: true },
  ];
  return (
    <svg className="crane" viewBox="0 0 200 230" width="180" height="200">
      {facets.map((f, i) => (
        <polygon
          key={i}
          points={f.points}
          className="crane-facet"
          style={{ animationDelay: `${f.delay}s`, fill: f.shade ? 'var(--accent)' : 'var(--crane-light)' }}
        />
      ))}
      <line x1="100" y1="200" x2="100" y2="80" className="crane-fold" />
    </svg>
  );
}

function ScrollMoon() {
  const { theme } = useTheme();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (theme !== 'dark') return;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / Math.max(max, 1); // 0 → 1
      // crescent at top (phase=0.76), grows to full moon as you scroll (phase→0)
      setPhase(0.88 * (1 - progress));
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, [theme]);

  if (theme !== 'dark') return null;

  const SIZE = 130;
  const SHADOW = SIZE + 20;
  // full moon: shadow is fully off to the right; crescent: shadow slides left
  const shadowX = SHADOW - phase * (SHADOW + SIZE * 0.55);

  return (
    <div className="scroll-moon" aria-hidden="true">
      <div className="scroll-moon__glow" />
      <div className="scroll-moon__body">
        <div
          className="scroll-moon__shadow"
          style={{ transform: `translateX(${shadowX.toFixed(1)}px)` }}
        />
      </div>
    </div>
  );
}

export default function Home() {
  const { greeting, roles, linkedIn } = data.home;
  const [before, after] = data.home.subtitle.split('{role}');

  return (
    <section id="home" className="hero">
      <ScrollMoon />

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
          splitBy="words"
          staggerDuration={0.06}
          staggerFrom="first"
          initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          rotationInterval={2400}
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
