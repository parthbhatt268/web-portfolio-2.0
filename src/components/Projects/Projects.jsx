import React from 'react';
import rapidBasketImage from '../../assets/images/rapis-basket.png';
import chatAppImage from '../../assets/images/chat-app.png';
import data from '../../data.json';
import './Projects.css';

const IMAGES = { 1: rapidBasketImage, 2: chatAppImage };

function techPills(techStack) {
  return techStack.flatMap((line) =>
    line.includes(' - ') ? line.split(' - ')[1].split(',').map((t) => t.trim()) : line.split(',').map((t) => t.trim())
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-head">
        <span className="section-num mono">05 / projects</span>
        <span className="section-rule" />
      </div>
      <h2>Projects</h2>

      <div className="projects__grid">
        {data.projects.map((project) => (
          <div key={project.id} className="projects__card card">
            <img className="projects__img" src={IMAGES[project.id]} alt={project.title} loading="lazy" />
            <div className="projects__body">
              <h3>{project.title}</h3>
              <div className="projects__tags">
                {techPills(project.techStack).map((tag) => (
                  <span key={tag} className="pill">{tag}</span>
                ))}
              </div>
              <div className="projects__links">
                <a href={project.liveLink} target="_blank" rel="noreferrer">Live demo ↗</a>
                <a href={project.githubLink} target="_blank" rel="noreferrer">GitHub ↗</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
