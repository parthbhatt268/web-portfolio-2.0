import React from "react";
import "./Skills.css";

// Frontend
import htmlLogo from "../../assets/logo/html.png";
import cssLogo from "../../assets/logo/css.png";
import jsLogo from "../../assets/logo/javsScript.png";
import reactLogo from "../../assets/logo/react.jpg";
import nextLogo from "../../assets/logo/next.jpg";
import angularLogo from "../../assets/logo/angular.png";
import reduxLogo from "../../assets/logo/redux.png";
import materialUILogo from "../../assets/logo/mui.svg";
import bootstrapLogo from "../../assets/logo/bootstrap.png";

// Backend & APIs
import nodeLogo from "../../assets/logo/nodeJS.png";
import expressLogo from "../../assets/logo/express.png";
import restLogo from "../../assets/logo/rest.png";
import graphqlLogo from "../../assets/logo/graphql.png";
import jwtLogo from "../../assets/logo/jwt.png";
import firebaseLogo from "../../assets/logo/firebase.png";
import stripeLogo from "../../assets/logo/stripe.png";
import openaiLogo from "../../assets/logo/openai.png";

// Databases & Test
import mongodbLogo from "../../assets/logo/mongo.png";
import mariadbLogo from "../../assets/logo/psql.png"; // Using PostgreSQL icon as placeholder
import mysqlLogo from "../../assets/logo/sql.svg";
import elasticsearchLogo from "../../assets/logo/elasticsearch.svg";
import opensearchLogo from "../../assets/logo/opensearch.png";
import jestLogo from "../../assets/logo/jest.png";
import cypressLogo from "../../assets/logo/cypress.png";

// DevOps, Cloud & CI/CD
import dockerLogo from "../../assets/logo/docker.png";
import kubernetesLogo from "../../assets/logo/kubernetes.png";
import jenkinsLogo from "../../assets/logo/jenkins.png";
import awsLogo from "../../assets/logo/aws.png";
import googleCloudLogo from "../../assets/logo/google-cloud.png";

// Version Control & Other Tech
import gitLogo from "../../assets/logo/git.jpg";
import githubLogo from "../../assets/logo/github.jpg";
import npmLogo from "../../assets/logo/npm.png";
import yarnLogo from "../../assets/logo/yarn.png";
import groovyLogo from "../../assets/logo/groovy.png";
import ymlLogo from "../../assets/logo/yml.png";
// Operating Systems
import linuxLogo from "../../assets/logo/linux.png";
import windowsLogo from "../../assets/logo/windows.png";
import macLogo from "../../assets/logo/mac.png";

// Dummy icon for technologies without specific icons
const dummyIcon = "https://via.placeholder.com/32x32/333333/ffffff?text=Tech";

export default function Skills() {
  const LOGO = {
    "Frontend": [
      { name: "HTML", icon: htmlLogo },
      { name: "CSS", icon: cssLogo },
      { name: "JavaScript", icon: jsLogo },
      { name: "React", icon: reactLogo },
      { name: "Next.js", icon: nextLogo },
      { name: "AngularJS", icon: angularLogo },
      { name: "Redux Toolkit", icon: reduxLogo },
      { name: "Material UI", icon: materialUILogo },
      { name: "Bootstrap", icon: bootstrapLogo },
    ],
    "Backend & APIs": [
      { name: "Node.js", icon: nodeLogo },
      { name: "Express.js", icon: expressLogo },
      { name: "REST API", icon: restLogo },
      { name: "GraphQL", icon: graphqlLogo },
      { name: "JWT", icon: jwtLogo },
      { name: "Firebase", icon: firebaseLogo },
      { name: "Stripe Payments", icon: stripeLogo },
      { name: "OpenAI LLM (API)", icon: openaiLogo },
    ],
    "Databases & Test": [
      { name: "MongoDB", icon: mongodbLogo },
      { name: "MariaDB", icon: mariadbLogo },
      { name: "SQL", icon: mysqlLogo },
      { name: "Elasticsearch", icon: elasticsearchLogo },
      { name: "OpenSearch", icon: opensearchLogo },
      { name: "Jest", icon: jestLogo },
      { name: "Cypress", icon: cypressLogo },
    ],
    "DevOps, Cloud & CI/CD": [
      { name: "Docker", icon: dockerLogo },
      { name: "Kubernetes", icon: kubernetesLogo },
      { name: "Jenkins (CI/CD)", icon: jenkinsLogo },
      { name: "AWS", icon: awsLogo },
      { name: "Google Cloud", icon: googleCloudLogo },
    ],
    "Version Control & Other Tech": [
      { name: "Git", icon: gitLogo },
      { name: "GitHub", icon: githubLogo },
      { name: "NPM", icon: npmLogo },
      { name: "Yarn", icon: yarnLogo },
      { name: "Groovy", icon: groovyLogo },
      { name: "YAML", icon: ymlLogo },
    ],
    "Operating Systems": [
      { name: "Linux", icon: linuxLogo },
      { name: "Windows", icon: windowsLogo },
      { name: "Mac", icon: macLogo },
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
