import React from "react";
import "./Skills.css";

import jsLogo from "../../assets/logo/javsScript.png";
import tsLogo from "../../assets/logo/type.jpg";
import reactLogo from "../../assets/logo/react.jpg";
import nextLogo from "../../assets/logo/next.jpg";
import reduxLogo from "../../assets/logo/redux.png";
import tailwindLogo from "../../assets/logo/tailwind.jpg";
import sassLogo from "../../assets/logo/sass.png";

import nodeLogo from "../../assets/logo/nodeJS.png";
import expressLogo from "../../assets/logo/express.png";

import mysqlLogo from "../../assets/logo/sql.svg";
import postgresqlLogo from "../../assets/logo/psql.png";
import mongodbLogo from "../../assets/logo/mongo.png";

import gitLogo from "../../assets/logo/git.jpg";
import dockerLogo from "../../assets/logo/docker.png";
import awsLogo from "../../assets/logo/aws.png";

export default function Skills() {
  const LOGO = {
    frontend: [
      { name: "Javascript", icon: jsLogo },
      { name: "Typescript", icon: tsLogo },
      { name: "React", icon: reactLogo },
      { name: "Next.js", icon: nextLogo },
      { name: "Redux", icon: reduxLogo },
      { name: "Tailwind CSS", icon: tailwindLogo },
      { name: "SASS", icon: sassLogo },
    ],
    backend: [
      { name: "Node.js", icon: nodeLogo },
      { name: "Express.js", icon: expressLogo },
    ],
    database: [
      { name: "MySQL", icon: mysqlLogo },
      { name: "PostgreSQL", icon: postgresqlLogo },
      { name: "MongoDB", icon: mongodbLogo },
    ],
    tools: [
      { name: "Git", icon: gitLogo },
      { name: "Docker", icon: dockerLogo },
      { name: "AWS", icon: awsLogo },
    ],
  };

  return (
    <section id="tech-stack" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Tech Stack</h2>

        <div className="skills-groups">
          {Object.entries(LOGO).map(([category, items]) => (
            <div key={category} className="skills-group">
              <div className="skills-category">
                <p>{category}</p>
              </div>
              <div className="skills-items">
                {items.map(({ name, icon }) => (
                  <div key={name} className="skill-card">
                    <img src={icon} alt={name} className="skill-icon" />
                    <span className="skill-label">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
