import React from 'react';
import './WorkExperience.css';
import sirenImg from '../../assets/images/SirenPhoto.jpg';
import jioImg from '../../assets/images/jio1.jpg';

const experiences = [
  {
    company: 'Siren',
    dates: 'Jan 2024 – Ongoing',
    role: 'Software Development Engineer',
    tech: ['React', 'Node.js', 'AWS'],
    link: 'https://siren.io/',
    image: sirenImg,
  },
  {
    company: 'Reliance Jio',
    dates: 'Nov 2020 – Jul 2023',
    role: 'Software Development Engineer',
    tech: ['Java', 'Spring Boot', 'MySQL'],
    link: 'https://www.jio.com/',
    image: jioImg,
  },
];

export default function WorkExperience() {
  return (
    <section id="work-experience" className="work-experience">
      <h2 className="we-title">Work Experience</h2>
      <div className="we-list">
        {experiences.map(exp => (
          <div key={exp.company} className="we-card">
            <div className="we-info">
              <h3>{exp.company}</h3>
              <p className="we-dates">{exp.dates}</p>
              <p className="we-role">{exp.role}</p>
              <div className="we-tech">
                {exp.tech.map(t => (
                  <span key={t} className="we-tech__item">{t}</span>
                ))}
              </div>
              <a href={exp.link} className="we-btn" target="_blank" rel="noopener noreferrer">
                Visit Site →
              </a>
            </div>
            <div className="we-image-wrapper glass">
              <img src={exp.image} alt={exp.company} className="we-image" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
