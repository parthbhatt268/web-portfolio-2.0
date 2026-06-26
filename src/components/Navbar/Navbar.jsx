import React, { useEffect, useState } from 'react';
import { useTheme } from '../../ThemeContext';
import { PaperBird, PaperSun, PaperMoon } from '../OrigamiWorld/PaperShapes';
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
              <PaperSun width="20" height="20" style={{ color: 'var(--accent)' }} />
            ) : (
              <PaperMoon width="20" height="20" style={{ color: 'var(--soft)' }} />
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
