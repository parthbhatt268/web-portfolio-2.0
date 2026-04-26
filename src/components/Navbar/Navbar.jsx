import React, { useState, useEffect } from 'react';
import './Navbar.css';
import data from './data.json';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

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

      // Close mobile menu when scrolling
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

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
              <span>{data.brand}</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="nav-links-desktop">
            {data.navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="nav-link-desktop"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
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
              <span></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
          {data.navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="nav-item"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
                setIsOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
