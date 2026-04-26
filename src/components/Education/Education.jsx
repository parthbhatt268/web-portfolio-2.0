import React from 'react';
import './Education.css';
import masterUniversity from '../../assets/images/Master_University.jpeg';
import bachelorUniversity from '../../assets/images/Bachelor_University.jpg';
import educationData from './data.json';

const IMAGES = {
  master: masterUniversity,
  bachelor: bachelorUniversity,
};

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <h2 className="education-title">Education</h2>

        <div className="education-content">
          {educationData.map((edu) => (
            <div key={edu.id} className="education-item">
              <div className="education-text">
                <h3 className="education-degree">
                  {edu.degree} - {edu.university}
                </h3>
                {edu.course && (
                  <p className="education-course">
                    Course - {edu.course}
                  </p>
                )}

                <div className="education-details">
                  <div className="education-detail">
                    <span className="detail-label">Duration</span>
                    <span className="detail-value"> - {edu.duration}</span>
                  </div>
                  <div className="education-detail">
                    <span className="detail-label">Score</span>
                    <span className="detail-value"> - {edu.score}</span>
                  </div>
                  <div className="education-detail">
                    <span className="detail-label">Core subjects</span>
                    <span className="detail-value"> -</span>
                  </div>
                </div>

                <ol className="core-subjects-list">
                  {edu.coreSubjects.map((subject, index) => (
                    <li key={index} className="core-subject-item">
                      {subject}
                    </li>
                  ))}
                </ol>

                <a
                  href={edu.visitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-university-btn"
                >
                  Visit University Site →
                </a>
              </div>

              <div className="education-image">
                <img src={IMAGES[edu.imageKey]} alt={edu.university} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
