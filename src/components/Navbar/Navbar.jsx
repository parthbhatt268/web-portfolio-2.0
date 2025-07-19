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
          {/* Left Section - Brand */}
          <div className="nav-brand-section">
            <div className="nav-icon">
              <span style={{ fontSize: '20px' }}>🚀</span>
            </div>
            <div className="nav-brand">
              <span>Parth Bhatt</span>
            </div>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="nav-links-desktop">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="nav-link-desktop"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Toggle */}
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
