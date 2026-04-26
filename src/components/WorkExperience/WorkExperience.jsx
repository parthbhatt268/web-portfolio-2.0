import React from "react";
import "./WorkExperience.css";
import sirenImage from "../../assets/images/SirenPhoto.jpg";
import jioImage from "../../assets/images/jio.jpg";
import workExperienceData from "./data.json";

const IMAGES = {
  siren: sirenImage,
  jio: jioImage,
};

function WorkExperience() {
  return (
    <section className="work-experience-section" id="work-experience">
      <div className="work-experience-container">
        <h2 className="work-experience-title">Work Experience</h2>

        <div className="work-experience-content">
          {workExperienceData.map((work) => (
            <div key={work.id} className="work-experience-item">
              <div className="work-experience-text">
                <h3 className="work-experience-position">{work.position}</h3>

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

                <a
                  href={work.visitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-company-btn"
                >
                  Visit Company Site →
                </a>
              </div>

              <div className="work-experience-image">
                <img src={IMAGES[work.imageKey]} alt={work.company} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
