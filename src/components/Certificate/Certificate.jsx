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
      name: "Microsoft Certified Azure Fundamentals",
      image: b1,
      score: "Certified",
      description: "AZ-700: Microsoft certified"
    },
    {
      id: 2,
      name: "Microsoft MTA Introduction to Programming using Python",
      image: b2,
      score: "Certified",
      description: "MTA-98-381: Microsoft certified"
    },
    {
      id: 3,
      name: "Python for Data Science by IBM Cognitive Class",
      image: b3,
      score: "95%",
      description: "Data science by IBM"
    },
    {
      id: 4,
      name: "Machine Learning with Python by IBM Developer Skills Network",
      image: b4,
      score: "91%",
      description: "Machine Learning by IBM"
    },
    {
      id: 5,
      name: "Specialization in Web Development by Coursera",
      image: b5,
      score: "95%",
      description: "Specialization by Coursera"
    },
    {
      id: 6,
      name: "Specialization in Python Language by Coursera",
      image: b5,
      score: "90%",
      description: "Specialization by Coursera"
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
                <span className="certificate-score">{cert.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate; 