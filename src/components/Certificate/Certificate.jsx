import React from 'react';
import b1 from '../../assets/images/b1.png';
import b2 from '../../assets/images/b2.png';
import b3 from '../../assets/images/b3.png';
import b4 from '../../assets/images/b4.png';
import b5 from '../../assets/images/b5.png';
import data from '../../data.json';
import './Certificate.css';

const IMAGES = { 1: b1, 2: b2, 3: b3, 4: b4, 5: b5, 6: b5 };

export default function Certificate() {
  return (
    <section id="certificates" className="section">
      <div className="section-head">
        <span className="section-num mono">07 / certificates</span>
        <span className="section-rule" />
      </div>
      <h2>Certificates</h2>

      <div className="certs__grid">
        {data.certificates.map((cert) => (
          <a key={cert.id} className="certs__card card" href={cert.link} target="_blank" rel="noreferrer">
            <img src={IMAGES[cert.id]} alt={cert.name} loading="lazy" className="certs__badge" />
            <div className="certs__score">{cert.score}</div>
            <h4 className="certs__name">{cert.name}</h4>
            <p className="certs__desc">{cert.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
