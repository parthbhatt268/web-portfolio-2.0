import React from 'react';
import './Certificate.css';
import b1 from '../../assets/images/b1.png';
import b2 from '../../assets/images/b2.png';
import b3 from '../../assets/images/b3.png';
import b4 from '../../assets/images/b4.png';
import b5 from '../../assets/images/b5.png';
import certificates from './data.json';

const IMAGES = {
  b1,
  b2,
  b3,
  b4,
  b5,
};

const Certificate = () => {
  return (
    <section className="certificate-section">
      <div className="certificate-container">
        <h2 className="certificate-title">Certificates</h2>
        <div className="certificate-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-image">
                <img src={IMAGES[cert.imageKey]} alt={cert.name} />
              </div>
              <div className="certificate-info">
                <h3 className="certificate-name">{cert.name}</h3>
                <p className="certificate-description">{cert.description}</p>
                <div className="certificate-score-btn-container">
                  <span className="certificate-score">{cert.score}</span>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-btn"
                  >
                    View Certificate →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
