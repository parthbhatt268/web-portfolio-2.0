import React, { useState, useEffect } from 'react';
import './Navbar.css';

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
        <a href="#" className="nav-logo">
          <img src="https://flowbite.com/docs/images/logo.svg" alt="Logo" />
          <span>My Portfolio</span>
        </a>

        <button
          className="nav-toggle"
          onClick={() => setIsOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </button>

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
