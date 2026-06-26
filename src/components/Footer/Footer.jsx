import React from 'react';
import { PaperPlane } from '../OrigamiWorld/PaperShapes';
import data from '../../data.json';
import './Footer.css';

export default function Footer() {
  const { handle, linkedIn } = data.about;
  const githubUrl = `https://github.com/${handle}`;

  return (
    <footer id="contact" className="section footer">
      <PaperPlane className="footer__plane" width="70" height="42" style={{ color: 'var(--accent)' }} />
      <h2>Let's fold something together.</h2>
      <p>Have a project in mind, or just want to say hi? My inbox is always open.</p>
      <div className="footer__cta">
        <a className="btn btn-primary" href={linkedIn} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a className="btn btn-ghost" href={githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
      <p className="footer__copy mono">© {new Date().getFullYear()} {data.about.name} · Made with ❤️ in Galway</p>
    </footer>
  );
}
