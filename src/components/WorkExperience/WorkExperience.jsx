import React from 'react';
import './WorkExperience.css';
import sirenImage from '../../assets/images/SirenPhoto.jpg';
import jioImage from '../../assets/images/jio.jpg';

function WorkExperience() {
  const workExperienceData = [
    {
      id: 1,
      position: "Software Developer Engineer",
      company: "Siren",
      duration: "Jan 2024 - Present",
      coreTech: [
        "React.js & Next.js Development",
        "Node.js & Express.js Backend",
        "MongoDB & Database Design",
        "AWS Cloud Services & Deployment"
      ],
      image: sirenImage,
      visitLink: "#"
    },
    {
      id: 2,
      position: "Senior Software Developer Engineer",
      company: "Reliance Jio",
      duration: "Nov 2020 - July 2023",
      coreTech: [
        "Java & Spring Boot Framework",
        "Microservices Architecture",
        "MySQL & Database Optimization"
      ],
      image: jioImage,
      visitLink: "#"
    }
  ];

  return (
    <section className="work-experience-section" id="work-experience">
      <div className="work-experience-container">
        <h2 className="work-experience-title">Work Experience</h2>
        
        <div className="work-experience-content">
          {workExperienceData.map((work) => (
            <div key={work.id} className="work-experience-item">
              <div className="work-experience-text">
                <h3 className="work-experience-position">
                  {work.position}
                </h3>
                
                <div className="work-experience-details">
                  <div className="work-experience-detail">
                    <span className="detail-label">Company</span>
                    <span className="detail-value"> - {work.company}</span>
                  </div>
                  <div className="work-experience-detail">
                    <span className="detail-label">Duration</span>
                    <span className="detail-value"> - {work.duration}</span>
                  </div>
                  <div className="work-experience-detail">
                    <span className="detail-label">Core Tech worked on</span>
                    <span className="detail-value"> -</span>
                  </div>
                </div>

                <ol className="core-tech-list">
                  {work.coreTech.map((tech, index) => (
                    <li key={index} className="core-tech-item">
                      {tech}
                    </li>
                  ))}
                </ol>

                <button className="visit-company-btn">
                  Visit Company Site →
                </button>
              </div>
              
              <div className="work-experience-image">
                <img src={work.image} alt={work.company} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
