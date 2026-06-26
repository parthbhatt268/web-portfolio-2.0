import React from 'react';
import brainStackImage from '../../assets/images/brain-stack-1.png';
import rapidBasketImage from '../../assets/images/rapis-basket.png';
import data from '../../data.json';
import './Projects.css';

const IMAGES = {
  brainStack: brainStackImage,
  rapidBasket: rapidBasketImage,
};

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
            <img className="projects__img" src={IMAGES[project.imageKey]} alt={project.title} loading="lazy" />
            <div className="projects__body">
              <div className="projects__meta">
                <span className="projects__date mono">{project.date}</span>
              </div>
              <h3>{project.title}</h3>

              {/* Categorised tech stack */}
              <div className="projects__categories">
                {Object.entries(project.techCategories).map(([cat, tags]) => (
                  <div key={cat} className="projects__cat-row">
                    <span className="projects__cat-label mono">{cat}</span>
                    <div className="projects__tags">
                      {tags.map((tag) => (
                        <span key={tag} className="pill projects__pill">{tag}</span>
                      ))}
                    </div>
                  </div>
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
