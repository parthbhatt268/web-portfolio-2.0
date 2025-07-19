import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo.png';

const navLinks = [
  { id: 'work-experience', label: 'Work' },
  { id: 'projects',      label: 'Projects' },
  { id: 'skills',        label: 'Skills' },
  { id: 'about',         label: 'About' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down and past 100px → hide
        setVisible(false);
      } else {
        // scrolling up → show
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`nav ${visible ? '' : 'nav--hidden'}`}>
      <div className="nav-container">
        <div className="nav-pill">
          {/* Left Icon */}
          <div className="nav-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          {/* Center Text */}
          <div className="nav-brand">
            <span>Parth Bhatt</span>
          </div>
          
          {/* Right Menu Icon */}
          <button
            className="nav-toggle"
            onClick={() => setIsOpen(o => !o)}
            aria-label="Toggle navigation"
          >
            <div className="hamburger">
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="nav-item"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
