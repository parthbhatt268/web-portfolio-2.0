import React from 'react';
import masterUniversity from '../../assets/images/Master_University.jpeg';
import bachelorUniversity from '../../assets/images/Bachelor_University.jpg';
import data from '../../data.json';
import './Education.css';

const IMAGES = { 1: masterUniversity, 2: bachelorUniversity };

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-head">
        <span className="section-num mono">03 / education</span>
        <span className="section-rule" />
      </div>
      <h2>Education</h2>

      <div className="education__grid">
        {data.education.map((edu) => (
          <div key={edu.id} className="education__card card">
            <img className="education__img" src={IMAGES[edu.id]} alt={edu.university} loading="lazy" />
            <div className="education__body">
              <h3>{edu.degree}</h3>
              <p className="education__university">{edu.university}</p>
              {edu.course && <p className="education__course">{edu.course}</p>}
              <span className="pill education__badge">{edu.score}</span>
              <div className="education__subjects">
                {edu.coreSubjects.map((s) => (
                  <span key={s} className="pill">{s}</span>
                ))}
              </div>
              <a className="education__link" href={edu.visitLink} target="_blank" rel="noreferrer">
                Visit ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
