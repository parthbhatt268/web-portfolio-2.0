import React from 'react';
import sirenImage from '../../assets/images/SirenPhoto.jpg';
import jioImage from '../../assets/images/jio.jpg';
import data from '../../data.json';
import './WorkExperience.css';

const IMAGES = {
  Siren: sirenImage,
  'Reliance Jio': jioImage,
};

function techPills(coreTech) {
  return coreTech.flatMap((line) => {
    const [maybeLabel, rest] = line.includes(' - ') ? line.split(' - ') : [null, line];
    const pills = rest.split(',').map((t) => t.trim());
    return maybeLabel ? pills.map((p) => `${maybeLabel}: ${p}`) : pills;
  });
}

export default function WorkExperience() {
  return (
    <section id="experience" className="section">
      <div className="section-head">
        <span className="section-num mono">02 / experience</span>
        <span className="section-rule" />
      </div>
      <h2>Where I've worked</h2>

      <div className="experience__list">
        {data.workExperience.map((job) => (
          <div key={job.id} className="experience__card card">
            <img className="experience__logo" src={IMAGES[job.company]} alt={`${job.company} logo`} loading="lazy" />
            <div className="experience__body">
              <span className="experience__duration mono">{job.duration}</span>
              <h3>{job.position}</h3>
              <p className="experience__company">{job.company}</p>
              <div className="experience__tags">
                {techPills(job.coreTech).map((tag) => (
                  <span key={tag} className="pill">{tag}</span>
                ))}
              </div>
              <a className="experience__link" href={job.visitLink} target="_blank" rel="noreferrer">
                Visit ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
