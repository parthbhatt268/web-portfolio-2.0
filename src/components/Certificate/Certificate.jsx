import React from 'react';
import './Certificate.css';
import b1 from '../../assets/images/b1.png';
import b2 from '../../assets/images/b2.png';
import b3 from '../../assets/images/b3.png';
import b4 from '../../assets/images/b4.png';
import b5 from '../../assets/images/b5.png';

const Certificate = () => {
  const certificates = [
    {
      id: 1,
      name: "Microsoft Certified Azure Cloud Fundamentals",
      image: b1,
      score: "Certified",
      description: "AZ-700: Microsoft certified",
      link: "https://www.credly.com/badges/6259f4dc-87c0-46f3-92e5-9ebe14857f03/public_url"
    },
    {
      id: 2,
      name: "Microsoft MTA Introduction to Programming using Python",
      image: b2,
      score: "Certified",
      description: "MTA-98-381: Microsoft certified",
      link: "https://www.credly.com/badges/3c0ab82f-5e01-4f04-b0a2-bc941e051dbe/public_url"
    },
    {
      id: 3,
      name: "Python for Data Science by IBM Cognitive Class",
      image: b3,
      score: "95%",
      description: "Data science by IBM",
      link: "https://www.credly.com/badges/94b202b1-70bd-422b-bf70-686b845050e3/public_url"
    },
    {
      id: 4,
      name: "Machine Learning with Python by IBM Developer Skills Network",
      image: b4,
      score: "91%",
      description: "Machine Learning by IBM",
      link: "https://www.credly.com/badges/22172d49-616c-4a81-b10a-6ae77bb9c2c2/public_url"
    },
    {
      id: 5,
      name: "Specialization in Web Development by Coursera",
      image: b5,
      score: "95%",
      description: "Specialization by Coursera",
      link: "https://coursera.org/share/2da5a65dfb1d33363d2f6f89c45ddf32"
    },
    {
      id: 6,
      name: "Specialization in Python Language by Coursera",
      image: b5,
      score: "90%",
      description: "Specialization by Coursera",
      link: "https://coursera.org/share/14a23fc4cf4ebb1940c89487f8758fe2"
    }
  ];

  return (
    <section className="certificate-section">
      <div className="certificate-container">
        <h2 className="certificate-title">Certificates</h2>
        <div className="certificate-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-image">
                <img src={cert.image} alt={cert.name} />
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