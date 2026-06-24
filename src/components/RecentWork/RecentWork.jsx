import React from 'react';
import consoleDemo from '../../assets/images/console.gif';
import data from '../../data.json';
import './RecentWork.css';

export default function RecentWork() {
  const work = data.recentWork[0];

  return (
    <section id="recent" className="section">
      <div className="section-head">
        <span className="section-num mono">06 / recent work</span>
        <span className="section-rule" />
      </div>
      <h2>Recent work</h2>

      <div className="recent__card card">
        <div className="recent__body">
          <span className="recent__meta mono">
            VS Code Extension · v{work.version} · {work.downloads}
          </span>
          <h3>{work.title}</h3>
          <p>{work.description}</p>
          <p className="recent__search mono">{work.searchName}</p>
          <div className="recent__links">
            <a href={work.marketplaceLink} target="_blank" rel="noreferrer">Marketplace ↗</a>
            <a href={work.githubLink} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
        <img className="recent__demo" src={consoleDemo} alt="Console Log with Emoji demo" loading="lazy" />
      </div>
    </section>
  );
}
