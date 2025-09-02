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

export default function Skills() {
  const LOGO = {
    Frontend: [
      {
        name: "HTML",
        icon: htmlLogo,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS",
        icon: cssLogo,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JavaScript",
        icon: jsLogo,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      { name: "React", icon: reactLogo, link: "https://reactjs.org/" },
      { name: "Next.js", icon: nextLogo, link: "https://nextjs.org/" },
      { name: "AngularJS", icon: angularLogo, link: "https://angular.io/" },
      {
        name: "Redux Toolkit",
        icon: reduxLogo,
        link: "https://redux-toolkit.js.org/",
      },
      { name: "Material UI", icon: materialUILogo, link: "https://mui.com/" },
      {
        name: "Bootstrap",
        icon: bootstrapLogo,
        link: "https://getbootstrap.com/",
      },
    ],
    "Backend & APIs": [
      { name: "Node.js", icon: nodeLogo, link: "https://nodejs.org/" },
      { name: "Express.js", icon: expressLogo, link: "https://expressjs.com/" },
      { name: "REST API", icon: restLogo, link: "https://restfulapi.net/" },
      { name: "GraphQL", icon: graphqlLogo, link: "https://graphql.org/" },
      { name: "JWT", icon: jwtLogo, link: "https://jwt.io/" },
      {
        name: "Firebase",
        icon: firebaseLogo,
        link: "https://firebase.google.com/",
      },
      {
        name: "Stripe Payments",
        icon: stripeLogo,
        link: "https://stripe.com/",
      },
      {
        name: "OpenAI LLM (API)",
        icon: openaiLogo,
        link: "https://openai.com/api/",
      },
    ],
    "Databases & Test": [
      { name: "MongoDB", icon: mongodbLogo, link: "https://www.mongodb.com/" },
      { name: "MariaDB", icon: mariadbLogo, link: "https://mariadb.org/" },
      { name: "SQL", icon: mysqlLogo, link: "https://www.mysql.com/" },
      {
        name: "Elasticsearch",
        icon: elasticsearchLogo,
        link: "https://www.elastic.co/elasticsearch/",
      },
      {
        name: "OpenSearch",
        icon: opensearchLogo,
        link: "https://opensearch.org/",
      },
      { name: "Jest", icon: jestLogo, link: "https://jestjs.io/" },
      { name: "Cypress", icon: cypressLogo, link: "https://www.cypress.io/" },
    ],
    "DevOps, Cloud & CI/CD": [
      { name: "Docker", icon: dockerLogo, link: "https://www.docker.com/" },
      {
        name: "Kubernetes",
        icon: kubernetesLogo,
        link: "https://kubernetes.io/",
      },
      {
        name: "Jenkins (CI/CD)",
        icon: jenkinsLogo,
        link: "https://www.jenkins.io/",
      },
      { name: "AWS", icon: awsLogo, link: "https://aws.amazon.com/" },
      {
        name: "Google Cloud",
        icon: googleCloudLogo,
        link: "https://cloud.google.com/",
      },
    ],
    "Version Control & Other Tech": [
      { name: "Git", icon: gitLogo, link: "https://git-scm.com/" },
      { name: "GitHub", icon: githubLogo, link: "https://github.com/" },
      { name: "NPM", icon: npmLogo, link: "https://www.npmjs.com/" },
      { name: "Yarn", icon: yarnLogo, link: "https://yarnpkg.com/" },
      { name: "Groovy", icon: groovyLogo, link: "https://groovy-lang.org/" },
      { name: "YAML", icon: ymlLogo, link: "https://yaml.org/" },
    ],
    "Operating Systems": [
      { name: "Linux", icon: linuxLogo, link: "https://www.linux.org/" },
      {
        name: "Windows",
        icon: windowsLogo,
        link: "https://www.microsoft.com/windows/",
      },
      { name: "Mac", icon: macLogo, link: "https://www.apple.com/macos/" },
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
                {items.map(({ name, icon, link }) => (
                  <a
                    key={name}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-card"
                  >
                    <img src={icon} alt={name} className="skill-icon" />
                    <span className="skill-label">{name}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
