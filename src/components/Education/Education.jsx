import React from 'react';
import './Education.css';
import masterUniversity from '../../assets/images/Master_University.jpeg';
import bachelorUniversity from '../../assets/images/Bachelor_University.jpg';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Masters of science",
      university: "University of Galway, Ireland",
      course: "Information System Management",
      duration: "Sept 2023 - May 2024",
      score: "Aimed to get 1H (First Class Honours)",
      coreSubjects: [
        "Web Development",
        "C#(C Sharp)Programming",
        "Database Management",
        "Machine Learning and Modelling",
        "Cloud Computing"
      ],
      image: masterUniversity,
      visitLink: "https://www.universityofgalway.ie/"
    },
    {
      id: 2,
      degree: "Bachelor of Engineering",
      university: "Mumbai University, India",
      course: "",
      duration: "August 2016 - August 2020",
      score: "8.61/10 (First Class Honours)",
      coreSubjects: [
        "Object Oriented Programming",
        "Java Programming",
        "Database Management",
        "C/C++ Programming",
        "Network Security",
        "Data Encryption"
      ],
      image: bachelorUniversity,
      visitLink: "https://mu.ac.in/"
    }
  ];

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
                <img src={edu.image} alt={edu.university} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
