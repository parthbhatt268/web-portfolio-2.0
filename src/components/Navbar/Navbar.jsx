import React, { useEffect, useState } from 'react';
import { useTheme } from '../../ThemeContext';
import { PaperBird } from '../OrigamiWorld/PaperShapes';
import data from '../../data.json';
import './Navbar.css';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;
    const close = () => setIsOpen(false);
    window.addEventListener('scroll', close, { passive: true });
    return () => window.removeEventListener('scroll', close);
  }, [isOpen]);

  return (
    <header className="nav">
      <div className="nav__bar">
        <a href="#home" className="nav__brand" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          <PaperBird className="nav__bird" style={{ color: 'var(--accent)' }} width="22" height="22" />
          <span>{data.about.name}</span>
        </a>

        <nav className="nav__links">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__right">
          <button className="nav__theme" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="5" /><g stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /></g></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.3A9 9 0 1 1 11.7 3a7 7 0 0 0 9.3 9.3z" /></svg>
            )}
            <span>{theme === 'light' ? 'Light' : 'Dark'}</span>
          </button>
          <button className="nav__toggle" onClick={() => setIsOpen((o) => !o)} aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`nav__mobile ${isOpen ? 'is-open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
