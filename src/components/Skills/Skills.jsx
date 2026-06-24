import React from 'react';
import data from '../../data.json';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-head">
        <span className="section-num mono">04 / skills</span>
        <span className="section-rule" />
      </div>
      <h2>Skills &amp; tools</h2>

      <div className="skills__grid">
        {Object.entries(data.skills).map(([category, items]) => (
          <div key={category} className="skills__card card">
            <h3>{category}</h3>
            <div className="skills__pills">
              {items.map((skill) => (
                <a key={skill.name} href={skill.link} target="_blank" rel="noreferrer" className="pill">
                  {skill.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
